<?php
/**
 * Contact Form Configuration
 * 
 * Instructions:
 * 1. Set your email address in RECEIVER_EMAIL where you want to receive messages.
 * 2. If your server supports the standard PHP mail() function, you can leave SMTP_ENABLED as false.
 * 3. if you want to use SMTP (highly recommended for reliability), set SMTP_ENABLED to true 
 *    and fill in your SMTP details.
 *    Note: For SMTP to work, you will need to upload PHPMailer files to this folder.
 */

// --- General Settings ---
define('RECEIVER_EMAIL', 'Hello@KindSoft.co'); // Your email address
define('SENDER_NAME', 'KindSoft Website');     // Name that appears as the sender
define('SUBJECT_PREFIX', 'New Contact Form: '); // Prefix for the subject line

// --- SMTP Settings (Optional but recommended) ---
define('SMTP_ENABLED', false); // Set to true to use SMTP
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_USER', 'user@example.com');
define('SMTP_PASS', 'your_password');
define('SMTP_PORT', 587); // 587 for TLS, 465 for SSL
define('SMTP_SECURE', 'tls'); // 'tls' or 'ssl'

// --- Success/Error Messages ---
define('MSG_SUCCESS', 'Thank you! Your message has been sent successfully.');
define('MSG_ERROR', 'Oops! Something went wrong, and we couldn\'t send your message.');
define('MSG_INVALID_EMAIL', 'Please provide a valid email address.');
define('MSG_MISSING_FIELDS', 'Please fill in all required fields.');
?>
