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

// --- Captcha Settings ---
define('CAPTCHA_ENABLED', true);
define('CAPTCHA_SECRET_KEY', '6Lc1qn8sAAAAALYvOZhdSz2kyp5VCotmDk9Q-QAc');
define('CAPTCHA_SITE_KEY', '6Lc1qn8sAAAAAJTG6vI2sLdCvYlXrdyab4s4_imy');

// --- SMTP Settings (Optional but recommended) ---
define('SMTP_ENABLED', true); // Set to true to use SMTP
define('SMTP_HOST', 'mx1.cityhost.com.ua');
define('SMTP_USER', 'hello@kindsoft.co');
define('SMTP_PASS', 'PXk34ypq7K');
define('SMTP_PORT', 465); // 587 for TLS, 465 for SSL
define('SMTP_SECURE', 'ssl'); // 'tls' or 'ssl'

// --- Success/Error Messages ---
define('MSG_SUCCESS', 'Thank you! Your message has been sent successfully.');
define('MSG_ERROR', 'Oops! Something went wrong, and we couldn\'t send your message.');
define('MSG_INVALID_EMAIL', 'Please provide a valid email address.');
define('MSG_MISSING_FIELDS', 'Please fill in all required fields.');
define('MSG_CAPTCHA_ERROR', 'Captcha verification failed. Please try again.');
?>
