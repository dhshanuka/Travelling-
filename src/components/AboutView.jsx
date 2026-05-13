import React from "react";
import { Globe, Award, Users, Target, Heart, TrendingUp } from "lucide-react";

export default function AboutView() {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Travelers" },
    { icon: Globe, value: "100+", label: "Destinations" },
    { icon: Award, value: "4.9", label: "User Rating" },
    { icon: Heart, value: "10K+", label: "Saved Favorites" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To inspire and empower travelers to discover amazing destinations around the world through a seamless, user-friendly platform.",
    },
    {
      icon: Heart,
      title: "What We Value",
      description: "We believe travel creates lasting memories and connections. Our platform is designed to make finding your dream destination effortless.",
    },
    {
      icon: TrendingUp,
      title: "Our Vision",
      description: "To become the most trusted travel companion for adventurers everywhere, helping them explore with confidence and curiosity.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", color: "#6366f1" },
    { name: "Michael Chen", role: "Head of Design", color: "#8b5cf6" },
    { name: "Emily Davis", role: "Lead Developer", color: "#ec4899" },
    { name: "James Wilson", role: "Travel Expert", color: "#f59e0b" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "2rem auto", background: "white", borderRadius: "16px" }}>
      <div style={{ marginBottom: "3rem" }}>
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
          <Globe size={28} style={{ color: "#6366f1" }} />
          About WanderlustHub
        </h2>
        <p style={{ color: "#6b7280", fontSize: "16px", maxWidth: "700px" }}>
          We're passionate about helping travelers discover their next adventure. Learn more about our story and the team behind WanderlustHub.
        </p>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  textAlign: "center",
                }}
              >
                <Icon size={28} style={{ color: "white", marginBottom: "0.75rem" }} />
                <div style={{ fontSize: "32px", fontWeight: "700", color: "white", marginBottom: "0.25rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
          Our Story
        </h3>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} style={{ color: "white" }} />
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", margin: "0 0 0.5rem 0" }}>
                    {value.title}
                  </h4>
                  <p style={{ fontSize: "15px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937", marginBottom: "1.5rem" }}>
          Meet Our Team
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${member.color} 0%, #8b5cf6 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", margin: "0 0 0.25rem 0" }}>
                {member.name}
              </h4>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}