import React from "react";
import { Search } from "lucide-react";

export default function HeroSection({ searchQuery, setSearchQuery }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, var(--color-background-secondary) 0%, var(--color-background-primary) 100%)",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "500",
          color: "var(--color-text-primary)",
          marginBottom: "1rem",
        }}
      >
        Discover Your Next Adventure
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "var(--color-text-secondary)",
          marginBottom: "2rem",
        }}
      >
        Explore the world's most beautiful destinations
      </p>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "var(--color-background-primary)",
            borderRadius: "var(--border-radius-lg)",
            border: "1px solid var(--color-border-tertiary)",
            padding: "0.5rem 1rem",
          }}
        >
          <Search
            size={20}
            style={{
              color: "var(--color-text-secondary)",
              marginRight: "0.5rem",
            }}
          />
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              backgroundColor: "transparent",
              padding: "0.5rem",
              fontSize: "16px",
              color: "var(--color-text-primary)",
              outline: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
