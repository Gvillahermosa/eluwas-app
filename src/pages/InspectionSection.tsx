import { useState } from 'react';
import { C } from '../utils/theme';

export function InspectionSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const inspections = [
    {
      id: 1,
      vendor: "Nang Caring's Puso",
      date: "May 14, 2025",
      inspector: "R. Mercado",
      score: 92,
      status: "Passed",
      issues: 1,
    },
    {
      id: 2,
      vendor: "Manong's Balut",
      date: "May 12, 2025",
      inspector: "L. Santos",
      score: 78,
      status: "Warning",
      issues: 3,
    },
    {
      id: 3,
      vendor: "Sweet Turon Express",
      date: "May 10, 2025",
      inspector: "M. Garcia",
      score: 96,
      status: "Passed",
      issues: 0,
    },
    {
      id: 4,
      vendor: "Chicharron Central",
      date: "May 8, 2025",
      inspector: "R. Mercado",
      score: 61,
      status: "Failed",
      issues: 5,
    },
    {
      id: 5,
      vendor: "Biko ni Lola",
      date: "May 6, 2025",
      inspector: "L. Santos",
      score: 88,
      status: "Passed",
      issues: 2,
    },
  ];

  const checklist = [
    "Vendor wearing clean protective clothing",
    "Food covered and stored off the ground",
    "Clean water available for handwashing",
    "Waste bins present and covered",
    "No visible pest activity",
    "Food temperatures within safe range",
    "Valid health certificate displayed",
    "QR license code posted and scannable",
    "Utensils cleaned and sanitized",
    "No expired food items",
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: 32 }}>
        <span className="section-tag">Digital Inspection</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          Inspection & Monitoring
        </h2>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24 }}
        className="grid-2"
      >
        {/* Inspection log */}
        <div className="card fade-up">
          <h3 style={{ fontWeight: 600, marginBottom: 16, color: C.emerald }}>
            Recent Inspections
          </h3>
          {inspections.map((ins) => (
            <div
              key={ins.id}
              onClick={() => setSelected(ins.id)}
              style={{
                padding: "12px 14px",
                borderRadius: 8,
                marginBottom: 8,
                cursor: "pointer",
                background: selected === ins.id ? C.cream : C.white,
                border: `1px solid ${selected === ins.id ? C.emerald : C.creamDark}`,
                transition: "all 0.2s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: 14, color: C.text }}>
                    {ins.vendor}
                  </div>
                  <div
                    style={{ fontSize: 12, color: C.textLight, marginTop: 2 }}
                  >
                    {ins.date} · {ins.inspector}
                  </div>
                </div>
                <span
                  className={`badge ${ins.status === "Passed" ? "badge-green" : ins.status === "Warning" ? "badge-gold" : "badge-red"}`}
                >
                  {ins.status}
                </span>
              </div>
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: 4,
                    background: C.creamDark,
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${ins.score}%`,
                      height: "100%",
                      background:
                        ins.score >= 85
                          ? C.emeraldLight
                          : ins.score >= 70
                            ? C.goldLight
                            : C.danger,
                      transition: "width 0.5s",
                    }}
                  />
                </div>
                <span
                  style={{ fontSize: 12, fontWeight: 500, color: C.textMuted }}
                >
                  {ins.score}/100
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist panel */}
        <div className="card fade-up fade-up-2">
          {selected ? (
            <>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <h3 style={{ fontWeight: 600, color: C.emerald, flex: 1 }}>
                  {inspections.find((i) => i.id === selected)?.vendor}
                </h3>
                <button
                  className="btn-outline"
                  style={{ fontSize: 11, padding: "5px 10px" }}
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>
              <h4
                style={{
                  fontWeight: 500,
                  fontSize: 13,
                  color: C.textMuted,
                  marginBottom: 14,
                }}
              >
                Inspection Checklist
              </h4>
              {checklist.map((item, i) => {
                const ins = inspections.find((ins) => ins.id === selected)!;
                const failed = i < ins.issues;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: `1px solid ${C.creamDark}`,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 4,
                        background: failed ? "#fde8e8" : "#e6f4ee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: 11,
                      }}
                    >
                      {failed ? "✗" : "✓"}
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: failed ? C.danger : C.text,
                      }}
                    >
                      {item}
                    </span>
                    {failed && (
                      <span
                        className="badge badge-red"
                        style={{ marginLeft: "auto", flexShrink: 0 }}
                      >
                        Flag
                      </span>
                    )}
                  </div>
                );
              })}
              <button
                className="btn-primary"
                style={{ marginTop: 20, width: "100%" }}
              >
                Generate Inspection Report
              </button>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 300,
                color: C.textLight,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <p style={{ fontSize: 14 }}>
                Select an inspection record
                <br />
                to view the checklist
              </p>
              <div style={{ marginTop: 24, width: "100%" }}>
                <h4
                  style={{
                    fontWeight: 500,
                    fontSize: 13,
                    color: C.textMuted,
                    marginBottom: 10,
                  }}
                >
                  Start New Inspection
                </h4>
                <div className="form-group">
                  <input placeholder="Vendor name or ID" />
                </div>
                <button className="btn-primary" style={{ width: "100%" }}>
                  Begin Inspection →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FEEDBACK ─────────────────────────────────────────────────────────────────
