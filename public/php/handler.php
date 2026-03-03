<?php
/**
 * Contact Form Handler
 */

// Allow cross-origin requests (useful for local development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle OPTIONS request for CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'config.php';

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
    exit;
}

// Get the form data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(['status' => 'error', 'message' => 'No data received.']);
    exit;
}

// Sanitize inputs
$name = strip_tags(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$company = isset($data['company']) ? strip_tags(trim($data['company'])) : '';
$phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$service = strip_tags(trim($data['service']));
$budget = isset($data['budget']) ? strip_tags(trim($data['budget'])) : '';
$message = strip_tags(trim($data['message']));

// Validate required fields
if (empty($name) || empty($email) || empty($service) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => MSG_MISSING_FIELDS]);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => MSG_INVALID_EMAIL]);
    exit;
}

// Prepare email content
$subject = SUBJECT_PREFIX . $name;
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "--- Details ---\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
if (!empty($company)) $email_body .= "Company: $company\n";
if (!empty($phone)) $email_body .= "Phone: $phone\n";
$email_body .= "Service Requested: $service\n";
if (!empty($budget)) $email_body .= "Estimated Budget: $budget\n";
$email_body .= "\n--- Message ---\n";
$email_body .= $message . "\n";

// Sending Email
$success = false;

if (SMTP_ENABLED) {
    // If SMTP is enabled, we expect PHPMailer to be present in a subfolder named 'PHPMailer'
    // This is for future-proofing if the client decides to add SMTP.
    $phpmailer_path = __DIR__ . '/PHPMailer/src/PHPMailer.php';
    
    if (file_exists($phpmailer_path)) {
        require __DIR__ . '/PHPMailer/src/Exception.php';
        require __DIR__ . '/PHPMailer/src/PHPMailer.php';
        require __DIR__ . '/PHPMailer/src/SMTP.php';

        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = SMTP_HOST;
            $mail->SMTPAuth   = true;
            $mail->Username   = SMTP_USER;
            $mail->Password   = SMTP_PASS;
            $mail->SMTPSecure = SMTP_SECURE;
            $mail->Port       = SMTP_PORT;

            $mail->setFrom(SMTP_USER, SENDER_NAME);
            $mail->addAddress(RECEIVER_EMAIL);
            $mail->addReplyTo($email, $name);

            $mail->isHTML(false);
            $mail->Subject = $subject;
            $mail->Body    = $email_body;

            $mail->send();
            $success = true;
        } catch (Exception $e) {
            $success = false;
        }
    } else {
        // Fallback to mail() or error if PHPMailer is missing
        $headers = "From: " . SENDER_NAME . " <" . RECEIVER_EMAIL . ">\r\n";
        $headers .= "Reply-To: $email\r\n";
        $success = mail(RECEIVER_EMAIL, $subject, $email_body, $headers);
    }
} else {
    // Standard PHP mail() function
    $headers = "From: " . SENDER_NAME . " <" . RECEIVER_EMAIL . ">\r\n";
    $headers .= "Reply-To: $email\r\n";
    $success = mail(RECEIVER_EMAIL, $subject, $email_body, $headers);
}

if ($success) {
    echo json_encode(['status' => 'success', 'message' => MSG_SUCCESS]);
} else {
    echo json_encode(['status' => 'error', 'message' => MSG_ERROR]);
}
?>
