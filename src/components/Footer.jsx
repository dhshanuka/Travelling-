import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-background-primary)",
        borderTop: "1px solid var(--color-border-tertiary)",
        padding: "2rem",
        textAlign: "center",
        marginTop: "3rem",
        color: "var(--color-text-secondary)",
        fontSize: "14px",
      }}
    >
      <p>
        © 2025 WanderlustHub. All rights reserved. Explore the world with us!
      </p>
    </footer>
  );
}
