import React from "react";
import { Search } from "lucide-react";
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
    <>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "var(--color-text-primary)",
          marginBottom: "2rem",
        }}
      >
        Popular Destinations {searchQuery && `matching "${searchQuery}"`}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {filteredDestinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            isFavorite={favorites.has(dest.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            color: "var(--color-text-secondary)",
          }}
        >
          <Search size={48} style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
          <p>No destinations found matching your search.</p>
        </div>
      )}
    </>
  );
}
