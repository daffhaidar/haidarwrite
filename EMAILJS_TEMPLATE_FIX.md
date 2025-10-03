# 🔧 EmailJS Template Fix Guide

## Problem Found

Error 422: "The recipients address is empty" - Your EmailJS template is missing the recipient email configuration.

## Quick Fix Steps

### 1. Go to EmailJS Dashboard

- Visit: https://dashboard.emailjs.com/
- Login with your account
- Go to "Email Templates" section

### 2. Edit Your Template (template_4zyevje)

- Click on your template: `template_4zyevje`
- Make sure the template has these settings:

### 3. Template Configuration

**To Email:** `daffahaidar1501@gmail.com` (your email)
**From Name:** `{{from_name}}`
**From Email:** `{{from_email}}`
**Subject:** `New Contact Form Message from {{from_name}}`

### 4. Template Content

```
Hi Daffa,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Sent at: {{sent_at}}

---
This message was sent from your portfolio website contact form.
Reply directly to this email to respond to {{from_name}}.
```

### 5. Template Settings

- **To Email:** `daffahaidar1501@gmail.com`
- **Reply To:** `{{reply_to}}`
- **From Name:** `Portfolio Contact Form`

### 6. Test the Template

- Use the "Test" button in EmailJS dashboard
- Make sure all variables are recognized (no red warnings)

## Alternative Quick Fix

If you want to test immediately, you can temporarily use a different approach by updating the template parameters to match your current template structure.

## Current Template Parameters Being Sent:

- `from_name`: Sender's name
- `from_email`: Sender's email
- `message`: The message content
- `to_name`: Your name (Daffa Haidar)
- `to_email`: Your email (daffahaidar1501@gmail.com)
- `reply_to`: Sender's email for replies
- `sent_at`: Timestamp

Make sure your EmailJS template uses these exact variable names with double curly braces: `{{variable_name}}`
