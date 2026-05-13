import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@wanderlusthub.com",
      description: "For general inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 987-6543",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Travel Street, New York, NY 10001",
      description: "Visit our office",
    },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "2rem auto", background: "white", borderRadius: "16px" }}>
      <div style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 0.5rem 0",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Mail size={28} style={{ color: "#6366f1" }} />
          Contact Us
        </h2>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
        <div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
            Get in Touch
          </h3>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.25rem",
                    borderRadius: "12px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", margin: "0 0 0.25rem 0" }}>
                      {info.title}
                    </h4>
                    <p style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1", margin: "0 0 0.25rem 0" }}>
                      {info.details}
                    </p>
                    <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                <User size={16} /> Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                <MessageSquare size={16} /> Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                placeholder="How can we help?"
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Write your message here..."
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
              }}
            >
              <Send size={18} />
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}