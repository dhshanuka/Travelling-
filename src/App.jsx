import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import DestinationsGrid from "./components/DestinationGrid";
import FavoritesView from "./components/FavouritesView";
import HelpView from "./components/HelpView";
import ContactView from "./components/ContactView";
import AboutView from "./components/AboutView";
import Footer from "./components/Footer";
import { DESTINATIONS } from "./data/destinationsData";

export default function App() {
  const [activeTab, setActiveTab] = useState("destinations");
  const [favorites, setFavorites] = useState(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div
      style={{
        background: "transparent",
        minHeight: "100vh",
      }}
    >
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {activeTab === "destinations" && (
        <HeroSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      )}

      {activeTab === "destinations" && (
        <DestinationsGrid
          destinations={DESTINATIONS}
          searchQuery={searchQuery}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {activeTab === "favorites" && (
        <FavoritesView
          destinations={DESTINATIONS}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {activeTab === "about" && <AboutView />}

      {activeTab === "help" && <HelpView />}

      {activeTab === "contact" && <ContactView />}

      <Footer />
    </div>
  );
}
