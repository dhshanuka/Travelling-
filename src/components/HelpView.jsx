import React from "react";
import { HelpCircle, Mail, Phone, MessageCircle, Clock, MapPin, Heart, Search } from "lucide-react";

export default function HelpView() {
  const faqs = [
    {
      question: "How do I search for destinations?",
      answer: "Use the search bar on the home page to type in any destination name. Results will filter in real-time.",
      icon: Search,
    },
    {
      question: "How do I save my favorite destinations?",
      answer: "Click the heart icon on any destination card to add it to your favorites. Access them anytime from the Favorites tab.",
      icon: Heart,
    },
    {
      question: "Can I get travel recommendations?",
      answer: "Browse our curated list of popular destinations. Each card shows details about location, best time to visit, and attractions.",
      icon: MapPin,
    },
    {
      question: "Is this service free to use?",
      answer: "Yes! WanderlustHub is completely free. Browse destinations, save favorites, and plan your adventures at no cost.",
      icon: HelpCircle,
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      detail: "support@wanderlusthub.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      detail: "Available 24/7",
      description: "Instant help from our team",
    },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "2rem auto", background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.5)" }}>
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
          <HelpCircle size={28} style={{ color: "#6366f1" }} />
          How can we help?
        </h2>
        <p style={{ color: "#6b7280", fontSize: "16px" }}>
          Find answers to common questions or get in touch with our support team.
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
          Frequently Asked Questions
        </h3>
        <div style={{ display: "grid", gap: "1rem" }}>
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", margin: "0 0 0.5rem 0" }}>
                      {faq.question}
                    </h4>
                    <p style={{ fontSize: "14px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
          Contact Us
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <Icon size={24} style={{ color: "white" }} />
                </div>
                <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", margin: "0 0 0.5rem 0" }}>
                  {method.title}
                </h4>
                <p style={{ fontSize: "14px", fontWeight: "500", color: "#6366f1", margin: "0 0 0.25rem 0" }}>
                  {method.detail}
                </p>
                <p style={{ fontSize: "13px", color: "#64748b", margin: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}>
                  <Clock size={14} /> {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}