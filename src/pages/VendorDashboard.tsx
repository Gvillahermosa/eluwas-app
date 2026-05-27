import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../utils/theme';
import { HealthCertificateCard } from '../VendorProfile';

export function VendorDashboard() {
  const activeVendorStr = localStorage.getItem("eluwas_active_vendor");
  const activeVendor = activeVendorStr ? JSON.parse(activeVendorStr) : null;
  const vendorName = activeVendor
    ? `${activeVendor.firstName} ${activeVendor.lastName}`
    : "Vendor";
  const isApproved = activeVendor?.status === "Approved";
  const healthCertificateId =
    activeVendor?.healthCertificateId || "2026 - 0545";
  const [showHealthId, setShowHealthId] = useState(false);

  const feedbacks = [
    {
      id: 1,
      date: "May 20, 2026",
      rating: 5,
      comment: "Very clean stall, food tastes amazing!",
      user: "Maria C.",
    },
    {
      id: 2,
      date: "May 18, 2026",
      rating: 4,
      comment: "Good hygiene practices observed.",
      user: "Juan D.",
    },
    {
      id: 3,
      date: "May 15, 2026",
      rating: 5,
      comment: "I feel safe eating here, vendors wear hairnets and gloves.",
      user: "Anonymous",
    },
  ];

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ marginBottom: 28 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
          }}
        >
          Welcome, {vendorName}!
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Manage your profile, view analytics, and read customer feedback.
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 24 }}
        className="grid-2"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="card fade-up">
            <h3 style={{ color: C.emerald, fontSize: 18, marginBottom: 4 }}>
              License Status
            </h3>
            <span
              className="badge badge-green"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              Active & Approved
            </span>

            <div
              style={{
                padding: "20px",
                background: C.cream,
                borderRadius: 8,
                textAlign: "center",
              }}
            >
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${activeVendor ? activeVendor.id : "CEBU-V-00241"}`}
                alt="QR Code"
                style={{ margin: "0 auto" }}
              />
              <div style={{ marginTop: 12, fontWeight: 600, color: C.emerald }}>
                {activeVendor ? activeVendor.id : "CEBU-V-00241"}
              </div>
              <div style={{ fontSize: 12, color: C.textLight }}>
                Official License QR (Display at stall)
              </div>
            </div>

            <div style={{ marginTop: 16, textAlign: "center" }}>
              <button
                type="button"
                className="btn-outline"
                style={{ width: "100%" }}
                onClick={() => setShowHealthId((prev) => !prev)}
                disabled={!isApproved}
              >
                {showHealthId ? "Hide Health Certificate ID" : "View Health Certificate ID"}
              </button>
              {(!isApproved || !showHealthId) ? (
                <div style={{ marginTop: 10, fontSize: 14, color: C.textLight, fontWeight: 500 }}>
                  Available after approval
                </div>
              ) : (
                <div style={{ marginTop: 24, textAlign: 'left' }}>
                  <HealthCertificateCard 
                    name={vendorName} 
                    businessName={activeVendor?.company || "Not Specified"} 
                    healthCertificateId={healthCertificateId} 
                  />
                </div>
              )}
            </div>
          </div>

          <div className="card fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 style={{ color: C.emerald, fontSize: 18, marginBottom: 16 }}>
              Overview
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
                borderBottom: `1px solid ${C.creamDark}`,
                paddingBottom: 8,
              }}
            >
              <span style={{ color: C.textMuted }}>Overall Rating</span>
              <span style={{ fontWeight: 600, color: C.goldLight }}>
                ★ 4.7/5
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
                borderBottom: `1px solid ${C.creamDark}`,
                paddingBottom: 8,
              }}
            >
              <span style={{ color: C.textMuted }}>Total Scans</span>
              <span style={{ fontWeight: 600 }}>1,204</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: C.textMuted }}>Inspections</span>
              <span style={{ fontWeight: 600, color: C.emeraldMid }}>
                100% Passed
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            className="card fade-up"
            style={{ animationDelay: "0.2s", height: "100%" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <h3 style={{ color: C.emerald, fontSize: 20 }}>
                Customer Feedback
              </h3>
              <span
                style={{
                  fontSize: 13,
                  color: C.emeraldMid,
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                View All
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {feedbacks.map((fb) => (
                <div
                  key={fb.id}
                  style={{ background: C.cream, padding: 16, borderRadius: 8 }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: 14 }}>
                      {fb.user}
                    </div>
                    <div style={{ fontSize: 12, color: C.textLight }}>
                      {fb.date}
                    </div>
                  </div>
                  <div
                    style={{
                      color: C.goldLight,
                      marginBottom: 8,
                      fontSize: 14,
                    }}
                  >
                    {"★".repeat(fb.rating)}
                    {"☆".repeat(5 - fb.rating)}
                  </div>
                  <p style={{ color: C.textMuted, fontSize: 14, margin: 0 }}>
                    "{fb.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
