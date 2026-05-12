import React from "react";
import { Menu, X } from "lucide-react";

export default function Navigation({
  activeTab,
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <nav
      style={{
        backgroundColor: "var(--color-background-primary)",
        borderBottom: "1px solid var(--color-border-tertiary)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "var(--color-text-primary)",
        }}
      >
        ✈️ WanderlustHub
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <button
            onClick={() => setActiveTab("destinations")}
            style={{
              background:
                activeTab === "destinations"
                  ? "var(--color-background-secondary)"
                  : "none",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--border-radius-md)",
              cursor: "pointer",
              color: "var(--color-text-primary)",
              fontSize: "16px",
            }}
          >
            Explore
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            style={{
              background:
                activeTab === "favorites"
                  ? "var(--color-background-secondary)"
                  : "none",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--border-radius-md)",
              cursor: "pointer",
              color: "var(--color-text-primary)",
              fontSize: "16px",
            }}
          >
            Favorites
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--border-radius-md)",
              cursor: "pointer",
              color: "var(--color-text-primary)",
              fontSize: "16px",
            }}
          >
            Help
          </button>
        </div>
      </div>
    </nav>
  );
}
