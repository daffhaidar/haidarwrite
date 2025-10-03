import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, getTemplateParams, isEmailJSConfigured } from "../config/emailjs";
import SocialLinks from "./SocialLinks";
import { contactInfo } from "../data/contactInfo";
import { AnimatedSection, LoadingSpinner } from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is properly configured
      if (!isEmailJSConfigured()) {
        console.warn("EmailJS not configured properly. Config:", EMAILJS_CONFIG);
        // EmailJS not configured. Using mock submission for development
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
        return;
      }

      console.log("EmailJS Config:", EMAILJS_CONFIG);
      console.log("Form Data:", formData);

      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = getTemplateParams(formData);
      console.log("Template Params:", templateParams);

      // Send email using EmailJS with explicit recipient
      const emailParams = {
        ...templateParams,
        // Ensure recipient email is set
        to_email: "daffahaidar1501@gmail.com",
        // Common template variable names
        name: formData.name,
        email: formData.email,
        subject: `New Contact Form Message from ${formData.name}`,
      };

      console.log("Final Email Params:", emailParams);

      const response = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, emailParams, EMAILJS_CONFIG.PUBLIC_KEY);

      console.log("EmailJS Response:", response);

      // Email sent successfully
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.status,
        text: error.text,
      });

      // Form submission error
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center space-responsive-md">
          <AnimatedSection animation="fade-up">
            <h2 className="text-responsive-2xl font-bold text-light mb-4">Get In Touch</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-gray-custom text-responsive-base max-w-2xl mx-auto leading-mobile">Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and let's create something amazing together.</p>
          </AnimatedSection>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="fade-up" delay={400}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-responsive-sm font-medium text-light mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full btn-touch bg-slate-800 border rounded-lg text-light placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-base ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-600 focus:ring-dark-green-500 focus:border-dark-green-500"
                  }`}
                  placeholder="Your full name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-responsive-xs text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-responsive-sm font-medium text-light mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full btn-touch bg-slate-800 border rounded-lg text-light placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-base ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-600 focus:ring-dark-green-500 focus:border-dark-green-500"
                  }`}
                  placeholder="your.email@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-responsive-xs text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-responsive-sm font-medium text-light mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full btn-touch bg-slate-800 border rounded-lg text-light placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical text-base min-h-[120px] ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-slate-600 focus:ring-dark-green-500 focus:border-dark-green-500"
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-responsive-xs text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-touch rounded-lg font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark-green-500 focus:ring-offset-2 focus:ring-offset-dark text-base sm:text-lg ${
                    isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-dark-green-600 hover:bg-dark-green-700"
                  }`}
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <LoadingSpinner size="md" className="text-white mr-3" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div id="submit-status" className={`p-4 rounded-lg text-center ${submitStatus === "success" ? "bg-green-900/50 text-green-400 border border-green-700" : "bg-red-900/50 text-red-400 border border-red-700"}`} role="alert">
                  {submitStatus === "success" ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                </div>
              )}
            </form>
          </AnimatedSection>

          {/* Contact Information and Social Links */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-16 text-center">
              <div className="border-t border-slate-700 pt-12">
                <h3 className="text-xl font-semibold text-light mb-6">Let's Connect</h3>

                {/* Contact Information */}
                <div className="mb-8 space-y-4">
                  <div className="flex items-center justify-center text-gray-custom">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-dark-green-400 transition-colors duration-200">
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-center text-gray-custom">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{contactInfo.location}</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mb-6">
                  <p className="text-gray-custom mb-4">Follow me on social media</p>
                  <SocialLinks className="justify-center" iconSize="w-7 h-7" />
                </div>

                {/* Additional Contact Methods */}
                <div className="text-sm text-gray-custom">
                  <p>Prefer a different way to connect? Find me on any of the platforms above or send me a message through the form. I typically respond within {contactInfo.responseTime}.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
