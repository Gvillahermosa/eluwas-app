import { useNavigate } from 'react-router-dom';
import { C } from '../utils/theme';

export function AnalyticsSection() {
  const barData = [
    { label: "Jan", val: 85 },
    { label: "Feb", val: 92 },
    { label: "Mar", val: 78 },
    { label: "Apr", val: 96 },
    { label: "May", val: 88 },
    { label: "Jun", val: 94 },
  ];
  const categories = [
    { name: "Street Food", count: 342, pct: 28 },
    { name: "Rice Meals", count: 285, pct: 23 },
    { name: "Beverages", count: 198, pct: 16 },
    { name: "Seafood", count: 176, pct: 14 },
    { name: "Baked Goods", count: 143, pct: 12 },
    { name: "Others", count: 96, pct: 7 },
  ];
  const colors = [
    C.emerald,
    C.gold,
    C.emeraldLight,
    C.goldLight,
    "#5a9e6f",
    "#c8a84b",
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: 32 }}>
        <span className="section-tag">LGU Dashboard</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          Data Analytics
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Real-time data for local government monitoring and policy decisions.
        </p>
      </div>

      {/* KPI cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          marginBottom: 28,
        }}
        className="grid-4"
      >
        {[
          { n: "1,240", l: "Active Licenses", trend: "+14%", up: true },
          { n: "342", l: "Inspections YTD", trend: "+8%", up: true },
          { n: "87%", l: "Avg Compliance Score", trend: "-2%", up: false },
          { n: "128", l: "Consumer Reports", trend: "+31%", up: false },
        ].map((k, i) => (
          <div key={i} className="card" style={{ padding: "18px 16px" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: C.emerald,
              }}
            >
              {k.n}
            </div>
            <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>
              {k.l}
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 12,
                color: k.up ? C.success : C.danger,
                fontWeight: 500,
              }}
            >
              {k.trend} vs last month
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: 24,
          marginBottom: 24,
        }}
        className="grid-2"
      >
        {/* Bar chart */}
        <div className="card fade-up">
          <h3 style={{ fontWeight: 600, color: C.emerald, marginBottom: 20 }}>
            Monthly Inspection Scores
          </h3>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-end",
              height: 160,
              paddingBottom: 24,
              position: "relative",
            }}
          >
            <div
              style={{ position: "absolute", bottom: 24, left: 0, right: 0 }}
            >
              {[100, 75, 50, 25].map((v) => (
                <div
                  key={v}
                  style={{
                    position: "absolute",
                    bottom: `${v * 1.2}%`,
                    left: 0,
                    right: 0,
                    borderTop: `1px dashed ${C.creamDark}`,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: C.textLight,
                      marginLeft: "auto",
                      paddingRight: 4,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
            {barData.map((b) => (
              <div
                key={b.label}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{ fontSize: 10, color: C.textMuted, fontWeight: 500 }}
                >
                  {b.val}
                </span>
                <div
                  style={{
                    width: "70%",
                    height: `${b.val * 1.2}%`,
                    background: C.emerald,
                    borderRadius: "4px 4px 0 0",
                    transition: "height 0.5s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    color: C.textLight,
                    position: "absolute",
                    bottom: -20,
                  }}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor categories */}
        <div className="card fade-up fade-up-2">
          <h3 style={{ fontWeight: 600, color: C.emerald, marginBottom: 20 }}>
            Vendors by Category
          </h3>
          {categories.map((c, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 12, color: C.text }}>{c.name}</span>
                <span style={{ fontSize: 12, color: C.textMuted }}>
                  {c.count}
                </span>
              </div>
              <div
                style={{
                  height: 6,
                  background: C.creamDark,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${c.pct}%`,
                    height: "100%",
                    background: colors[i],
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent alerts */}
      <div className="card fade-up fade-up-3">
        <h3 style={{ fontWeight: 600, color: C.emerald, marginBottom: 16 }}>
          Recent Alerts & Flags
        </h3>
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Issue</th>
              <th>Severity</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                v: "Chicharron Central",
                issue: "Failed inspection (score 61)",
                sev: "High",
                date: "May 8",
              },
              {
                v: "Manong's Balut",
                issue: "3 hygiene flags",
                sev: "Medium",
                date: "May 12",
              },
              {
                v: "Expired Stall #44",
                issue: "License expired (90 days)",
                sev: "High",
                date: "May 14",
              },
              {
                v: "New Vendor #88",
                issue: "Incomplete requirements",
                sev: "Low",
                date: "May 15",
              },
            ].map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{r.v}</td>
                <td style={{ color: C.textMuted }}>{r.issue}</td>
                <td>
                  <span
                    className={`badge ${r.sev === "High" ? "badge-red" : r.sev === "Medium" ? "badge-gold" : "badge-blue"}`}
                  >
                    {r.sev}
                  </span>
                </td>
                <td style={{ color: C.textLight }}>{r.date}</td>
                <td>
                  <button
                    className="btn-outline"
                    style={{ fontSize: 11, padding: "4px 10px" }}
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
