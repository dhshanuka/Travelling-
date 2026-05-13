import React from "react";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
        padding: "4rem 2rem 2rem",
        marginTop: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-50px", left: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "3rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plane
                size={20}
                style={{ color: "white", transform: "rotate(-45deg)" }}
              />
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "white",
              }}
            >
              WanderlustHub
            </span>
          </div>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
              lineHeight: "1.7",
              marginBottom: "1.5rem",
            }}
          >
            Your trusted companion for discovering extraordinary travel
            experiences around the world.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: "#334155",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#6366f1";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#334155";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                {social === "facebook" && "f"}
                {social === "twitter" && "t"}
                {social === "instagram" && "ig"}
                {social === "linkedin" && "in"}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "1.25rem",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Destinations", "Packages", "About Us", "Contact", "FAQ"].map(
              (link) => (
                <li key={link} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href="#"
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6366f1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "1.25rem",
            }}
          >
            Contact Us
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              <MapPin size={18} />
              <span>123 Travel Street, New York, NY 10001</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              <Mail size={18} />
              <span>hello@wanderlusthub.com</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              marginBottom: "1.25rem",
            }}
          >
            Newsletter
          </h4>
          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Subscribe for exclusive travel deals and updates
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                border: "1px solid #334155",
                backgroundColor: "#0f172a",
                color: "white",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                color: "white",
                border: "none",
                padding: "0.75rem 1.25rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "3rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid #334155",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
          }}
        >
          © 2025 WanderlustHub. All rights reserved. Made with ❤️ for travelers
        </p>
      </div>
    </footer>
  );
}