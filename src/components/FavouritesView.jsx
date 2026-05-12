import React from "react";
import { Heart } from "lucide-react";
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
    <>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "var(--color-text-primary)",
          marginBottom: "2rem",
        }}
      >
        Your Favorites
      </h2>

      {favorites.size === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 2rem",
            color: "var(--color-text-secondary)",
          }}
        >
          <Heart size={48} style={{ margin: "0 auto 1rem", opacity: 0.5 }} />
          <p>No favorites yet. Add destinations to your favorites!</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {favoriteDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isFavorite={favorites.has(dest.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  );
}
