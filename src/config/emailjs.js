// EmailJS Configuration
// Follow the setup guide in EMAILJS_SETUP.md for detailed instructions

export const EMAILJS_CONFIG = {
  // Option 1: Use environment variables (recommended for production)
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",

  // Option 2: Replace the fallback values above with your actual credentials
  // PUBLIC_KEY: "your_actual_public_key_here",
  // SERVICE_ID: "service_your_service_id",
  // TEMPLATE_ID: "template_your_template_id",
};

// Check if EmailJS is properly configured
export const isEmailJSConfigured = () => {
  const { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } = EMAILJS_CONFIG;
  return PUBLIC_KEY && PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY" && SERVICE_ID && SERVICE_ID !== "YOUR_EMAILJS_SERVICE_ID" && TEMPLATE_ID && TEMPLATE_ID !== "YOUR_EMAILJS_TEMPLATE_ID";
};

// Template parameters that will be sent to EmailJS
// These variables must match your EmailJS template
export const getTemplateParams = (formData) => ({
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_name: "Daffa Haidar", // Change this to your name
  to_email: "daffahaidar1501@gmail.com", // Your email address (recipient)
  reply_to: formData.email,
  // Add timestamp for tracking
  sent_at: new Date().toLocaleString(),
  // Additional common template variables
  user_name: formData.name,
  user_email: formData.email,
  user_message: formData.message,
});
