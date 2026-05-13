import React from "react";
import { Heart, Compass } from "lucide-react";
import DestinationCard from "./DestinationCard";

export default function FavoritesView({
  destinations,
  favorites,
  onToggleFavorite,
}) {
  const favoriteDestinations = destinations.filter((dest) =>
    favorites.has(dest.id),
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "2rem auto", background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.5)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1f2937",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <Heart
            size={28}
            style={{ color: "#ef4444" }}
          />
          Your Favorites
        </h2>
        <div
          style={{
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e5e7eb",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#6b7280",
              fontWeight: "500",
            }}
          >
            {favorites.size} saved {favorites.size === 1 ? "destination" : "destinations"}
          </span>
        </div>
      </div>

      {favorites.size === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "5rem 2rem",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px dashed #e5e7eb",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#fef2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <Heart size={36} style={{ color: "#fca5a5" }} />
          </div>
          <h3
            style={{
              color: "#374151",
              fontSize: "20px",
              marginBottom: "0.5rem",
              fontWeight: "600",
            }}
          >
            No favorites yet
          </h3>
          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              maxWidth: "400px",
              margin: "0 auto 1.5rem",
            }}
          >
            Start exploring and save your dream destinations by clicking the
            heart icon on any destination card.
          </p>
          <button
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "white",
              border: "none",
              padding: "0.875rem 1.75rem",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Compass size={18} />
            Explore Destinations
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {favoriteDestinations.map((dest, index) => (
            <div
              key={dest.id}
              style={{
                animation: `fadeInUp 0.5s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <DestinationCard
                destination={dest}
                isFavorite={favorites.has(dest.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}