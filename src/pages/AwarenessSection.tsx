import { C } from "../utils/theme";
import foodstall from "../assets/awareness/food_stall.webp";
import certified from "../assets/awareness/certified.webp";
import qr from "../assets/awareness/qr.webp";
import eluwas from "../assets/awareness/eluwas.jpg";
export function AwarenessSection() {
  const posts = [
    {
      platform: "Facebook",
      icon: "👍",
      title: "5 Signs of a Safe Street Food Stall",
      reach: "12.4K",
      img: foodstall,
    },
    {
      platform: "TikTok",
      icon: "🎵",
      title: "Paano Malaman ang Certified Vendors?",
      reach: "34.1K",
      img: certified,
      imgPosition: "50% 70%", // Left/Right (X) and Top/Bottom (Y) percentages
    },
    {
      platform: "Instagram",
      icon: "📸",
      title: "Behind the QR: How Licensing Works",
      reach: "8.7K",
      img: qr,
    },
    {
      platform: "YouTube",
      icon: "▶",
      title: "Argao's e-Luwas Program Explained",
      reach: "6.2K",
      img: eluwas,
    },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: 36 }}>
        <span className="section-tag">Social Media</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          Awareness Campaigns
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Spreading food safety knowledge across digital channels.
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          marginBottom: 40,
        }}
        className="grid-4"
      >
        {[
          { n: "61K+", l: "Total Reach" },
          { n: "4", l: "Platforms" },
          { n: "28", l: "Active Campaigns" },
          { n: "4.2%", l: "Avg Engagement" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: C.white,
              borderRadius: 10,
              padding: "20px 16px",
              textAlign: "center",
              border: `1px solid ${C.sand}`,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: C.emerald,
              }}
            >
              {s.n}
            </div>
            <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* Campaign posts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 20,
          marginBottom: 40,
        }}
        className="grid-2"
      >
        {posts.map((p, i) => (
          <div
            key={i}
            className={`card hover-lift fade-up fade-up-${i + 1}`}
            style={{ padding: 0, overflow: "hidden" }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                objectPosition: p.imgPosition || "center",
              }}
            />
            <div style={{ padding: "16px 18px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>{p.icon}</span>
                <span className="badge badge-blue">{p.platform}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 12,
                    color: C.textMuted,
                  }}
                >
                  👁 {p.reach} reached
                </span>
              </div>
              <h4 style={{ fontWeight: 600, fontSize: 14, color: C.text }}>
                {p.title}
              </h4>
              <button
                className="btn-outline"
                style={{ marginTop: 12, padding: "6px 14px", fontSize: 12 }}
              >
                View Post
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Report generator */}
      <div className="card fade-up">
        <h3 style={{ fontWeight: 600, color: C.emerald, marginBottom: 16 }}>
          Create Awareness Post
        </h3>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          className="grid-2"
        >
          <div className="form-group">
            <label>Platform</label>
            <select>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>TikTok</option>
              <option>YouTube</option>
            </select>
          </div>
          <div className="form-group">
            <label>Campaign Type</label>
            <select>
              <option>Food Safety Tips</option>
              <option>Vendor Spotlight</option>
              <option>Compliance Alert</option>
              <option>Event Promo</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Caption / Script</label>
          <textarea rows={3} placeholder="Write your post content here…" />
        </div>
        <button className="btn-primary">Schedule Post →</button>
      </div>
    </div>
  );
}

// ─── INSPECTION ───────────────────────────────────────────────────────────────
