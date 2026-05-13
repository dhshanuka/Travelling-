import React from "react";
import { Heart, MapPin, Clock, Star, ChevronRight, Calendar } from "lucide-react";

export default function DestinationCard({
  destination,
  isFavorite,
  onToggleFavorite,
}) {
  const gradientBg = [
    "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)",
    "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 100%)",
    "linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)",
    "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%)",
    "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)",
  ];

  const bgGradient =
    gradientBg[(destination.id - 1) % gradientBg.length];

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "24px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 24px 48px rgba(99, 102, 241, 0.2)";
        e.currentTarget.style.transform = "translateY(-12px)";
        e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
      }}
    >
      <div
        style={{
          height: "180px",
          background: bgGradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: "80px",
            transform: "scale(1.1)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        >
          {destination.image}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(destination.id);
          }}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Heart
            size={20}
            style={{
              fill: isFavorite ? "#ef4444" : "none",
              color: isFavorite ? "#ef4444" : "#6b7280",
              transition: "all 0.2s ease",
            }}
          />
        </button>

        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "0.4rem 0.8rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Star
            size={14}
            style={{ fill: "#f59e0b", color: "#f59e0b" }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#1f2937",
            }}
          >
            {destination.rating}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            ({destination.reviews.toLocaleString()})
          </span>
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 0.5rem 0",
          }}
        >
          {destination.name}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "1rem",
            lineHeight: "1.6",
          }}
        >
          {destination.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          {destination.highlights.map((highlight, idx) => (
            <span
              key={idx}
              style={{
                fontSize: "12px",
                backgroundColor: "#f3f4f6",
                color: "#4b5563",
                padding: "0.4rem 0.75rem",
                borderRadius: "20px",
                fontWeight: "500",
              }}
            >
              {highlight}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#6b7280",
                fontSize: "13px",
              }}
            >
              <Clock size={16} />
              <span>{destination.duration}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#6b7280",
                fontSize: "13px",
              }}
            >
              <Calendar size={16} />
              <span>Guided</span>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "11px",
                color: "#9ca3af",
                margin: "0 0 0.2rem 0",
                fontWeight: "500",
              }}
            >
              Starting from
            </p>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}
            >
              {destination.price}
            </p>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            marginTop: "1.25rem",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            color: "white",
            border: "none",
            padding: "1rem",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Book Now
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}