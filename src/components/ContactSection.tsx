"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SiteSettingsData } from "@/sanity/fallbackData";

interface ContactSectionProps {
  settings: SiteSettingsData;
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const ref = useScrollReveal();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    jobTitle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setSubmitMessage("Error: Web3Forms access key is missing.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          subject: `Contact Form Submission from ${formState.name}`,
          organization: formState.organization,
          jobTitle: formState.jobTitle,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", organization: "", jobTitle: "", message: "" });
      } else {
        setSubmitMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const email = settings.contactEmail || "mteshu@gmail.com";
  const firstName = settings.headerName ? settings.headerName.split(" ")[0] : "Mahlet";

  return (
    <section className="section" id="contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container reveal">
        <div className="contact-section-grid">

          {/* Left: Info */}
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Connect with {firstName}</h2>
            <p>
              For policy advisory, partnerships, or speaking requests — submit your query using the form, or reach out directly via email.
            </p>

            <div className="contact-methods">
              {/* Email */}
              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact-method-text">
                  <h4>Email Inquiries</h4>
                  <p>
                    <a href={`mailto:${email}`} className="contact-email-link">
                      {email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                    <line x1="10" y1="14" x2="14" y2="14" />
                  </svg>
                </div>
                <div className="contact-method-text">
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              {/* LBS */}
              <div className="contact-method">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="contact-method-text">
                  <h4>Current Role</h4>
                  <p>Principal Policy Officer, African Union Commission</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="form-card">
            {isSubmitted ? (
              <div className="form-success-state">
                {/* Animated check */}
                <div className="success-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h4 className="success-title">Inquiry Sent Successfully</h4>
                <p className="success-msg">
                  Thank you for reaching out. I will review your details and respond shortly.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="form-title">Inquiry Form</h3>
                <p className="form-subtitle">All fields marked * are required.</p>
                {submitMessage && (
                  <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>
                    {submitMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="organization">Organisation</label>
                      <input
                        className="form-control"
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        placeholder="Your Organization"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="jobTitle">Job Title</label>
                      <input
                        className="form-control"
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formState.jobTitle}
                        onChange={handleChange}
                        placeholder="Your Position"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">How can I help? *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Policy advisory inquiry, partnerships..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
