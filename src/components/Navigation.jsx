import React from "react";
import { Plane, MapPin, Heart, HelpCircle, Menu, X } from "lucide-react";

export default function Navigation({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const navItems = [
    { id: "destinations", label: "Explore", icon: MapPin },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #e2e8f0",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
          }}
        >
          <Plane
            size={22}
            style={{ color: "white", transform: "rotate(-45deg)" }}
          />
        </div>
        <span
          style={{
            fontSize: "22px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WanderlustHub
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
        className="nav-desktop"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.25rem",
                borderRadius: "12px",
                border: isActive ? "none" : "1px solid #cbd5e1",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.2s ease",
                background: isActive
                  ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                  : "#f8fafc",
                color: isActive ? "white" : "#334155",
                boxShadow: isActive
                  ? "0 4px 15px rgba(99, 102, 241, 0.4)"
                  : "0 1px 3px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "#e2e8f0";
                  e.currentTarget.style.borderColor = "#6366f1";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.borderColor = "#cbd5e1";
                }
              }}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}

        </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: "none",
          padding: "0.5rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        className="nav-mobile-toggle"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}