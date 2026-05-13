import React from "react";
import { Search, MapPinned } from "lucide-react";
import DestinationCard from "./DestinationCard";

export default function DestinationsGrid({
  destinations,
  searchQuery,
  favorites,
  onToggleFavorite,
}) {
  const filteredDestinations = destinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "2rem auto", background: "white", borderRadius: "16px" }}>
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
        <div>
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
            <MapPinned
              size={28}
              style={{ color: "#6366f1" }}
            />
            Popular Destinations
          </h2>
          {searchQuery && (
            <p
              style={{
                color: "#6366f1",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Showing results for "{searchQuery}"
            </p>
          )}
        </div>
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
            {filteredDestinations.length} destinations
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "2rem",
        }}
      >
        {filteredDestinations.map((dest, index) => (
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

      {filteredDestinations.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px dashed #e5e7eb",
          }}
        >
          <Search
            size={48}
            style={{ margin: "0 auto 1rem", color: "#d1d5db" }}
          />
          <h3
            style={{
              color: "#374151",
              fontSize: "18px",
              marginBottom: "0.5rem",
            }}
          >
            No destinations found
          </h3>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Try adjusting your search to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}