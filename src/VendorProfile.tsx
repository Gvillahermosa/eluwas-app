import { useState, useRef } from "react";

export function HealthCertificateCard({
  name,
  businessName,
  healthCertificateId,
}: {
  name: string;
  businessName: string;
  healthCertificateId: string;
}) {
  const parts = healthCertificateId.split(" - ");
  const prefix = parts[0] || "2026";
  const suffix = parts[1] || "0545";

  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoBase64(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        fontFamily: "var(--sans)",
        margin: "0 auto",
        position: "relative",
        color: "#374151",
      }}
    >
      {/* Top Bar / Header */}
      <div
        style={{
          background: "#0d5c3a",
          color: "#ffffff",
          padding: "16px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            opacity: 0.9,
          }}
        >
          MUNICIPAL HEALTH OFFICE
        </div>
        <div style={{ fontSize: "12px", opacity: 0.8, marginTop: "2px" }}>
          Argao, Cebu
        </div>
      </div>

      <div style={{ padding: "24px 24px 20px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Health Certificate
          </h2>
          <div
            style={{
              fontSize: "14px",
              color: "#4b5563",
              marginTop: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Reg. No.</span>
            <span
              style={{
                background: "#f3f4f6",
                padding: "2px 8px",
                borderRadius: "6px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {prefix} - {suffix}
            </span>
          </div>
        </div>

        {/* ID Body */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>
          {/* Photo Uploader */}
          <div
            onClick={() => fileInputRef.current?.click()}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "16px",
              background: photoBase64
                ? `url(${photoBase64}) center/cover no-repeat`
                : "#f3f4f6",
              border: photoBase64 ? "none" : "2px dashed #d1d5db",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              cursor: "pointer",
              boxShadow: photoBase64
                ? "inset 0 0 0 1px rgba(0,0,0,0.1)"
                : "none",
              overflow: "hidden",
              position: "relative",
            }}
            title="Click to upload photo"
          >
            {!photoBase64 && (
              <>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#9ca3af">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    bottom: "6px",
                    fontSize: "10px",
                    color: "#9ca3af",
                    fontWeight: 600,
                  }}
                >
                  UPLOAD
                </div>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
          </div>

          {/* Personal info */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                color: "#6b7280",
                letterSpacing: "0.05em",
                marginBottom: "4px",
              }}
            >
              Name
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                marginBottom: "8px",
              }}
            >
              {name}
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#4b5563",
                lineHeight: 1.4,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              Pursuant to the provision of PD 522 and PD 856.
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            fontSize: "13px",
            background: "#f9fafb",
            border: "1px solid #f3f4f6",
            padding: "16px",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              Date of Birth
            </span>
            <span style={{ fontWeight: 600, color: "#111827" }}>
              06/28/1960{" "}
              <span style={{ color: "#6b7280", fontWeight: 400 }}>(65)</span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              Sex
            </span>
            <span style={{ fontWeight: 600, color: "#111827" }}>Female</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "span 2",
            }}
          >
            <span
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              Address
            </span>
            <span style={{ fontWeight: 600, color: "#111827" }}>
              Lamacan, Argao Cebu
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "span 2",
            }}
          >
            <span
              style={{
                color: "#6b7280",
                fontSize: "11px",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              Occupation & Workplace
            </span>
            <span style={{ fontWeight: 600, color: "#111827" }}>
              Owner, {businessName}
            </span>
          </div>
        </div>

        {/* Signatures */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                fontFamily: "cursive",
                fontSize: "18px",
                color: "#111827",
                transform: "rotate(-5deg)",
                marginBottom: "-4px",
              }}
            >
              S. Alegado
            </div>
            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                paddingTop: "6px",
                fontSize: "11px",
              }}
            >
              <strong style={{ color: "#111827", display: "block" }}>
                Simplicio Alegado
              </strong>
              <span style={{ color: "#6b7280" }}>Sanitary Inspector</span>
            </div>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                fontFamily: "cursive",
                fontSize: "18px",
                color: "#111827",
                transform: "rotate(-2deg)",
                marginBottom: "-4px",
              }}
            >
              H. Ramos
            </div>
            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                paddingTop: "6px",
                fontSize: "11px",
              }}
            >
              <strong style={{ color: "#111827", display: "block" }}>
                Hayce F. Ramos, MD
              </strong>
              <span style={{ color: "#6b7280" }}>Head, Rural Health Unit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type VendorProfileProps = {
  name: string;
  businessName: string;
  location: string;
  isApproved: boolean;
  healthCertificateId?: string;
};

function VendorProfile({
  name,
  businessName,
  location,
  isApproved,
  healthCertificateId,
}: VendorProfileProps) {
  return (
    <section className="vendor-profile">
      <div className="vendor-card">
        <header className="vendor-header">
          <div>
            <p className="vendor-eyebrow">Vendor profile</p>
            <h1>{name}</h1>
            <p className="vendor-subtitle">
              {businessName} · {location}
            </p>
          </div>
          <span
            className={`status-badge ${isApproved ? "approved" : "pending"}`}
          >
            {isApproved ? "Approved" : "Pending approval"}
          </span>
        </header>

        <div className="vendor-details">
          <div className="detail" style={{ padding: "24px" }}>
            <div className={`value ${isApproved ? "" : "muted"}`}>
              {isApproved && healthCertificateId ? (
                <HealthCertificateCard
                  name={name}
                  businessName={businessName}
                  healthCertificateId={healthCertificateId}
                />
              ) : (
                "Available after approval"
              )}
            </div>
          </div>
        </div>

        <p className="vendor-note">
          This ID is shown on the vendor profile after admin approval.
        </p>
      </div>
    </section>
  );
}

export default VendorProfile;
