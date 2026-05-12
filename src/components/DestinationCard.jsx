import React from "react";
import { Heart, MapPin, Clock, Star, ChevronRight } from "lucide-react";

export default function DestinationCard({
  destination,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-background-primary)",
        borderRadius: "var(--border-radius-lg)",
        overflow: "hidden",
        border: "1px solid var(--color-border-tertiary)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          fontSize: "80px",
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--color-background-secondary)",
          borderBottom: "1px solid var(--color-border-tertiary)",
        }}
      >
        {destination.image}
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "0.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "var(--color-text-primary)",
              margin: 0,
            }}
          >
            {destination.name}
          </h3>
          <button
            onClick={() => onToggleFavorite(destination.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <Heart
              size={20}
              style={{
                fill: isFavorite ? "var(--color-text-danger)" : "none",
                color: isFavorite
                  ? "var(--color-text-danger)"
                  : "var(--color-text-secondary)",
              }}
            />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            color: "var(--color-text-secondary)",
            fontSize: "14px",
          }}
        >
          <Star size={16} style={{ fill: "var(--color-text-warning)" }} />
          <span>{destination.rating}</span>
          <span>({destination.reviews} reviews)</span>
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-secondary)",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          {destination.description}
        </p>

        <div style={{ marginBottom: "1rem" }}>
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-text-tertiary)",
              fontWeight: "500",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            Highlights
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {destination.highlights.map((highlight, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "12px",
                  backgroundColor: "var(--color-background-secondary)",
                  color: "var(--color-text-secondary)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--border-radius-md)",
                  border: "1px solid var(--color-border-tertiary)",
                }}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            fontSize: "14px",
            color: "var(--color-text-secondary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Clock size={16} />
            <span>{destination.duration}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={16} />
            <span>Guided tours</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-text-tertiary)",
                margin: "0 0 0.25rem 0",
              }}
            >
              Starting from
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "var(--color-text-primary)",
                margin: 0,
              }}
            >
              {destination.price}
            </p>
          </div>
          <button
            style={{
              backgroundColor: "var(--color-background-info)",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "var(--border-radius-md)",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Book
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
