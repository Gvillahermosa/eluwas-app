import balut from "../assets/foods/balut.webp";
import KwekKwek1 from "../assets/foods/kwek-kwek-1.webp";
import turon from "../assets/foods/turon.webp";
import pares from "../assets/foods/pares.webp";
import tempura from "../assets/foods/tempura.webp";
import kwekKwekImg from "../assets/foods/kwek-kwek-1.webp";
import bbq from "../assets/foods/balut.webp";
import { useNavigate } from "react-router-dom";
import { C } from "../utils/theme";

export function HomeSection() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📋",
      title: "Vendor Registration",
      desc: "Online licensing & permit management",
      key: "register" as string,
    },
    {
      icon: "🎓",
      title: "Food Safety Training",
      desc: "Digital seminars & certifications",
      key: "seminars" as string,
    },
    {
      icon: "📢",
      title: "Awareness Campaigns",
      desc: "Social media & public outreach",
      key: "awareness" as string,
    },
    {
      icon: "🔍",
      title: "Digital Inspection",
      desc: "Streamlined monitoring system",
      key: "inspection" as string,
    },
    {
      icon: "💬",
      title: "Consumer Feedback",
      desc: "Report food safety concerns",
      key: "feedback" as string,
    },
    {
      icon: "📊",
      title: "Data Analytics",
      desc: "LGU dashboard & insights",
      key: "analytics" as string,
    },
  ];

  const stats = [
    { n: "1,240+", label: "Registered Vendors" },
    { n: "98%", label: "Compliance Rate" },
    { n: "5,600+", label: "QR Scans / Month" },
    { n: "340+", label: "Trained Handlers" },
  ];

  return (
    <div>
      {/* Hero */}
      <div
        className="padding-container"
        style={{
          background: `linear-gradient(135deg, ${C.emerald} 0%, #0a4028 100%)`,
          padding: "60px 20px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 240,
            height: 240,
            borderRadius: "50%",
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: `1px solid rgba(255,255,255,0.05)`,
          }}
        />

        <div
          className="fade-up"
          style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(200,134,10,0.2)",
              border: `1px solid ${C.goldLight}`,
              borderRadius: 4,
              padding: "4px 14px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C.goldLight,
              marginBottom: 20,
            }}
          >
            Don Gil Argao — Food Safety Program
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 6vw, 60px)",
              fontWeight: 900,
              color: C.white,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            e-Luwas nga
            <br />
            <span style={{ color: C.goldLight }}>Pagkaon</span>
          </h1>
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontStyle: "italic",
              fontSize: "clamp(15px, 2.5vw, 20px)",
              color: "rgba(255,255,255,0.78)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            A unified digital platform for safe, certified, and trusted street
            food — empowering vendors and protecting consumers across Argao.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-gold"
              style={{ fontSize: 15, padding: "12px 28px" }}
              onClick={() => navigate("register")}
            >
              Register as Vendor
            </button>
            <button
              className="btn-outline"
              style={{
                fontSize: 15,
                padding: "12px 28px",
                color: C.white,
                borderColor: "rgba(255,255,255,0.5)",
              }}
              onClick={() => navigate("qr-verify")}
            >
              Verify a Vendor
            </button>
          </div>
        </div>

        {/* Food photo collage strip */}
        <div
          className="fade-up fade-up-3 hero-collage"
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            // Tempura / Fried Shrimp
            balut,
            // Kwek-kwek / Street food round
            KwekKwek1,
            // Fried Chicken Barbeque
            turon,
            // Softdrinks
            pares,
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Filipino Street Food"
              style={{
                width: 140,
                height: 90,
                objectFit: "cover",
                borderRadius: 8,
                border: `2px solid rgba(255,255,255,0.2)`,
                animation: `float ${2.5 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="padding-container"
        style={{ background: C.gold, padding: "20px 20px" }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
            textAlign: "center",
          }}
          className="grid-4 stats-grid"
        >
          {stats.map((s, i) => (
            <div key={i}>
              <div
                className="stats-number"
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: C.white,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.8)",
                  marginTop: 2,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features grid */}
      <div
        className="padding-container"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 20px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-tag">Platform Modules</span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 4vw, 38px)",
              fontWeight: 700,
              color: C.emerald,
              marginTop: 4,
            }}
          >
            Everything in One Place
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="grid-3"
        >
          {features.map((f, i) => (
            <div
              key={f.key}
              className={`card hover-lift fade-up fade-up-${i + 1}`}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(f.key)}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: C.emerald,
                  marginBottom: 6,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>
                {f.desc}
              </p>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 12,
                  color: C.emeraldLight,
                  fontWeight: 500,
                }}
              >
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor spotlight */}
      <div
        className="padding-container"
        style={{ background: C.creamDark, padding: "48px 20px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-tag">Featured Vendors</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 30,
                fontWeight: 700,
                color: C.emerald,
                marginTop: 4,
              }}
            >
              Certified & Trusted
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 20,
            }}
            className="grid-3"
          >
            {[
              {
                name: "Mang Juan's Fish Ball",
                location: "Don Gil Argao Street",
                rating: "4.9",
                cert: "Grade A",
                img: tempura,
              },
              {
                name: "Manong's Kwek-Kwek",
                location: "Don Gil Argao Street",
                rating: "4.7",
                cert: "Grade A",
                img: kwekKwekImg,
              },
              {
                name: "Aling Nena's Balut",
                location: "Don Gil Argao Street",
                rating: "4.8",
                cert: "Grade B",
                img: bbq,
              },
            ].map((v, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <img
                  src={v.img}
                  alt={v.name}
                  style={{ width: "100%", height: 160, objectFit: "cover" }}
                />
                <div style={{ padding: "16px 18px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <h4
                      style={{ fontWeight: 600, fontSize: 15, color: C.text }}
                    >
                      {v.name}
                    </h4>
                    <span className="badge badge-green">{v.cert}</span>
                  </div>
                  <p style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>
                    📍 {v.location}
                  </p>
                  <div
                    style={{
                      marginTop: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <span style={{ color: C.gold, fontSize: 13 }}>★</span>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>
                      {v.rating}
                    </span>
                    <span style={{ fontSize: 12, color: C.textLight }}>
                      /5.0
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="padding-container"
        style={{
          background: C.emerald,
          padding: "48px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30,
            color: C.white,
            marginBottom: 10,
          }}
        >
          Ready to get certified?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: 24,
            fontSize: 15,
          }}
        >
          Join over 1,200 vendors ensuring safe food for Cebuanos.
        </p>
        <button
          className="btn-gold"
          style={{ fontSize: 15, padding: "13px 32px" }}
          onClick={() => navigate("register")}
        >
          Start Registration →
        </button>
      </div>
    </div>
  );
}

// ─── REGISTER / LOGIN ─────────────────────────────────────────────────────────
