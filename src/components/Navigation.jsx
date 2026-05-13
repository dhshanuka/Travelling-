import React from "react";
import { Plane, MapPin, Heart, HelpCircle, Menu, X, Phone, Globe } from "lucide-react";

export default function Navigation({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const navItems = [
    { id: "destinations", label: "Explore", icon: MapPin },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "about", label: "About", icon: Globe },
    { id: "help", label: "Help", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
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
            color: "white",
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
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.2s ease",
                background: isActive
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                color: "white",
                boxShadow: isActive
                  ? "0 4px 15px rgba(0,0,0,0.2)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
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