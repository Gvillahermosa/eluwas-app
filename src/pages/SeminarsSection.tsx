import { useState } from "react";
import { C } from "../utils/theme";

export function SeminarsSection() {
  const [enrolled, setEnrolled] = useState<number | null>(null);
  const courses = [
    {
      id: 1,
      title: "Food Handling & Hygiene Basics",
      duration: "2 hours",
      modules: 5,
      level: "Beginner",
      badge: "Required",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=160&fit=crop",
    },
    {
      id: 2,
      title: "Proper Food Storage & Temperature",
      duration: "1.5 hours",
      modules: 4,
      level: "Beginner",
      badge: "Required",
      img: "https://images.unsplash.com/photo-1584473457493-00d3461dd9e6?w=300&h=160&fit=crop",
    },
    {
      id: 3,
      title: "Cross-Contamination Prevention",
      duration: "2 hours",
      modules: 6,
      level: "Intermediate",
      badge: "Elective",
      img: "https://images.unsplash.com/photo-1615486511484-9040776b2eb3?w=300&h=160&fit=crop",
    },
    {
      id: 4,
      title: "Consumer Safety & Allergen Awareness",
      duration: "1 hour",
      modules: 3,
      level: "Intermediate",
      badge: "Elective",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=160&fit=crop",
    },
    {
      id: 5,
      title: "Sanitation & Waste Management",
      duration: "1.5 hours",
      modules: 4,
      level: "Beginner",
      badge: "Required",
      img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=160&fit=crop",
    },
    {
      id: 6,
      title: "Certification Refresher & Exam Prep",
      duration: "3 hours",
      modules: 8,
      level: "Advanced",
      badge: "Certification",
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=300&h=160&fit=crop",
    },
  ];

  return (
    <div
      className="padding-container"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}
    >
      <div style={{ marginBottom: 36 }}>
        <span className="section-tag">Digital Training</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          Food Safety Seminars
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Complete required modules to earn your digital food handler
          certification.
        </p>
      </div>

      {enrolled !== null ? (
        <div className="card fade-up">
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <button
              className="btn-outline"
              style={{ padding: "7px 14px" }}
              onClick={() => setEnrolled(null)}
            >
              ← Back
            </button>
            <h3 style={{ fontWeight: 600, color: C.emerald }}>
              {courses.find((c) => c.id === enrolled)?.title}
            </h3>
          </div>
          <div
            style={{
              background: C.cream,
              borderRadius: 10,
              height: 240,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={courses.find((c) => c.id === enrolled)?.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.4,
              }}
            />
            <div style={{ position: "absolute", textAlign: "center" }}>
              <div style={{ fontSize: 48 }}>▶️</div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.emerald,
                  marginTop: 8,
                }}
              >
                Click to begin module 1
              </div>
            </div>
          </div>
          {[
            "Introduction to Food Safety",
            "Identifying Hazards",
            "Personal Hygiene Protocols",
            "Practical Demonstration",
            "Quiz & Assessment",
          ].map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                padding: "12px 0",
                borderBottom: `1px solid ${C.creamDark}`,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: i === 0 ? C.emerald : C.sand,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: i === 0 ? C.white : C.textMuted,
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <span
                style={{ fontSize: 14, color: i === 0 ? C.text : C.textMuted }}
              >
                {m}
              </span>
              {i === 0 && (
                <span
                  className="badge badge-gold"
                  style={{ marginLeft: "auto" }}
                >
                  In Progress
                </span>
              )}
              {i !== 0 && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 12,
                    color: C.textLight,
                  }}
                >
                  Locked
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
          className="grid-3"
        >
          {courses.map((c, i) => (
            <div
              key={c.id}
              className={`card hover-lift fade-up fade-up-${i + 1}`}
              style={{ padding: 0, overflow: "hidden" }}
            >
              <img
                src={c.img}
                alt={c.title}
                style={{ width: "100%", height: 140, objectFit: "cover" }}
              />
              <div style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                  <span
                    className={`badge ${c.badge === "Required" ? "badge-red" : c.badge === "Certification" ? "badge-blue" : "badge-green"}`}
                  >
                    {c.badge}
                  </span>
                  <span
                    className="badge"
                    style={{ background: C.creamDark, color: C.textMuted }}
                  >
                    {c.level}
                  </span>
                </div>
                <h4
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: C.text,
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {c.title}
                </h4>
                <div style={{ fontSize: 12, color: C.textLight }}>
                  ⏱ {c.duration} · {c.modules} modules
                </div>
                <button
                  className="btn-primary"
                  style={{ marginTop: 14, width: "100%", padding: "8px" }}
                  onClick={() => setEnrolled(c.id)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── QR VERIFY ────────────────────────────────────────────────────────────────
