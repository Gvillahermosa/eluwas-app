import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../utils/theme';

export function FeedbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [tab, setTab] = useState<"submit" | "public">("submit");

  const reviews = [
    {
      vendor: "Nang Caring's Puso",
      comment: "Very clean stall, wore gloves, food was fresh!",
      rating: 5,
      date: "May 16",
    },
    {
      vendor: "Sweet Turon Express",
      comment: "Great turon but stall area could be cleaner.",
      rating: 4,
      date: "May 15",
    },
    {
      vendor: "Manong's Balut",
      comment: "Saw flies near the food, reported to inspector.",
      rating: 2,
      date: "May 13",
    },
    {
      vendor: "Biko ni Lola",
      comment: "Excellent! Lola wears hairnet and gloves always.",
      rating: 5,
      date: "May 12",
    },
  ];

  const dummyVendors = [
    { id: "ARGAO-V-00241", name: "Nang Maria's Carinderia" },
    { id: "ARGAO-V-00242", name: "Nang Caring's Puso" },
    { id: "ARGAO-V-00243", name: "Sweet Turon Express" },
    { id: "ARGAO-V-00244", name: "Manong's Balut" },
    { id: "ARGAO-V-00245", name: "Biko ni Lola" },
    { id: "ARGAO-V-00246", name: "Pedro's BBQ" },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span className="section-tag">Consumer Reporting</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          Feedback & Reporting
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Help keep Cebu's street food safe by sharing your experience.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
        {(["submit", "public"] as const).map((t) => (
          <button
            key={t}
            className={tab === t ? "btn-primary" : "btn-outline"}
            onClick={() => setTab(t)}
          >
            {t === "submit" ? "Submit Feedback" : "Public Reviews"}
          </button>
        ))}
      </div>

      {tab === "submit" ? (
        submitted ? (
          <div
            className="card fade-up"
            style={{ textAlign: "center", padding: "48px 24px" }}
          >
            <div style={{ fontSize: 56, marginBottom: 16 }}>🙏</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                color: C.emerald,
              }}
            >
              Thank You!
            </h3>
            <p style={{ color: C.textMuted, marginTop: 10 }}>
              Your feedback has been recorded and will be reviewed by our food
              safety team.
            </p>
            <button
              className="btn-outline"
              style={{ marginTop: 24 }}
              onClick={() => {
                setSubmitted(false);
                setRating(0);
              }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          <div className="card fade-up">
            <div className="form-group">
              <label>Vendor Name or ID</label>
              <input 
                list="vendors-list" 
                placeholder="e.g. Nang Maria's Carinderia or ARGAO-V-00241" 
              />
              <datalist id="vendors-list">
                {dummyVendors.map(v => (
                  <option key={v.id} value={`${v.name} (${v.id})`} />
                ))}
              </datalist>
            </div>
            <div className="form-group">
              <label>Vendor Location</label>
              <input placeholder="e.g. Carbon Market, Stall 14" />
            </div>
            <div className="form-group">
              <label>Your Rating</label>
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    style={{
                      fontSize: 32,
                      cursor: "pointer",
                      color: n <= (hover || rating) ? C.gold : C.sand,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(n)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Feedback Type</label>
              <select>
                <option>General Review</option>
                <option>Food Safety Concern</option>
                <option>Hygiene Issue</option>
                <option>Expired License</option>
                <option>Positive Commendation</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Comments</label>
              <textarea
                rows={4}
                placeholder="Describe your experience in detail…"
              />
            </div>
            <div className="form-group">
              <label>Attach Photo (optional)</label>
              <div
                style={{
                  border: `1.5px dashed ${C.sand}`,
                  borderRadius: 8,
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  background: C.cream,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 4 }}>📷</div>
                <div style={{ fontSize: 12, color: C.textMuted }}>
                  Upload a photo as evidence
                </div>
              </div>
            </div>
            <button
              className="btn-primary"
              style={{ width: "100%", padding: "13px" }}
              onClick={() => setSubmitted(true)}
            >
              Submit Feedback
            </button>
          </div>
        )
      ) : (
        <div className="fade-up">
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: C.text }}>
                    {r.vendor}
                  </div>
                  <div style={{ display: "flex", marginTop: 4 }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        style={{
                          color: n <= r.rating ? C.gold : C.sand,
                          fontSize: 15,
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: 12, color: C.textLight }}>
                  {r.date}
                </span>
              </div>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>
                {r.comment}
              </p>
              {r.rating <= 2 && (
                <div style={{ marginTop: 10 }}>
                  <span className="badge badge-red">⚠ Safety Report</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ANALYTICS ────────────────────────────────────────────────────────────────
