# Contact Form PHP Handler

This folder contains the scripts needed to make the contact form on your website work.

## How to use:

1. **Basic Setup (Standard Mail)**:
   - Edit `config.php` and change `RECEIVER_EMAIL` to the email where you want to receive messages.
   - Most hosting providers support this by default.

2. **Advanced Setup (SMTP)**:
   - SMTP is more reliable and ensures your emails don't end up in spam.
   - Set `SMTP_ENABLED` to `true` in `config.php`.
   - Fill in your SMTP host, user, password, and port.
   - **Crucial**: You must download [PHPMailer](https://github.com/PHPMailer/PHPMailer) and place the `src` folder inside a folder named `PHPMailer` in this directory.
   - The directory structure should look like this:
     ```
     public/
       php/
         handler.php
         config.php
         PHPMailer/
           src/
             PHPMailer.php
             SMTP.php
             Exception.php
             ...
     ```

## Deployment
When you build the project (`npm run build`), the `public` folder contents are copied to the root of your website. The contact form will send requests to `/php/handler.php`.
