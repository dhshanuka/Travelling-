import React from "react";
import { Search, Compass, ArrowRight } from "lucide-react";

export default function HeroSection({ searchQuery, setSearchQuery }) {
  const popularSearches = ["Paris", "Tokyo", "Bali", "New York", "Barcelona"];

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "5rem 2rem 4rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 30%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(139, 92, 246, 0.2)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            padding: "0.5rem 1rem",
            borderRadius: "50px",
            marginBottom: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <Compass size={16} style={{ color: "white" }} />
          <span
            style={{
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Discover your next adventure
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "700",
            color: "white",
            marginBottom: "1rem",
            lineHeight: "1.2",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          Explore the World's Most
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beautiful Destinations
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255, 255, 255, 0.85)",
            marginBottom: "2.5rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          From iconic cities to hidden gems, find your perfect journey with our
          curated travel experiences
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
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "0.5rem",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 1rem",
              }}
            >
              <Search
                size={20}
                style={{ color: "#6366f1" }}
              />
            </div>
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                backgroundColor: "transparent",
                padding: "1rem 0.5rem",
                fontSize: "16px",
                color: "#1e293b",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                color: "white",
                border: "none",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(99, 102, 241, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Search
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "14px",
            }}
          >
            Popular:
          </span>
          {popularSearches.map((search) => (
            <button
              key={search}
              onClick={() => setSearchQuery(search)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              }}
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: 0,
          right: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100px", display: "block" }}
        >
          <path
            fill="#ffffff"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,50 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </div>
  );
}