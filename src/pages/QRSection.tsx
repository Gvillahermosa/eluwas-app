import { useState, useEffect, useRef } from "react";
import { C } from "../utils/theme";

export function QRSection() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<null | "valid" | "invalid" | "expired">(
    null,
  );
  const [inputId, setInputId] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    let timeout: any;
    if (scanning) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: { facingMode: "environment" } })
          .then((stream) => {
            streamRef.current = stream;
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
            }
          })
          .catch((err) => {
            console.error("Camera access denied or error:", err);
          });
      }

      timeout = setTimeout(() => {
        setScanning(false);
        setResult("valid");
      }, 5000);
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    }

    return () => {
      clearTimeout(timeout);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [scanning]);

  const vendors: Record<
    string,
    {
      name: string;
      status: "valid" | "invalid" | "expired";
      cert: string;
      until: string;
      location: string;
      photo: string;
    }
  > = {
    "CEBU-V-00241": {
      name: "Nang Caring's Puso",
      status: "valid",
      cert: "Grade A",
      until: "Dec 31, 2025",
      location: "Carbon Market",
      photo:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=80&h=80&fit=crop",
    },
    "CEBU-V-00188": {
      name: "Expired Stall",
      status: "expired",
      cert: "Grade B",
      until: "Mar 15, 2025",
      location: "Colon St.",
      photo:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=80&h=80&fit=crop",
    },
  };

  const lookup = vendors[inputId.toUpperCase()] || null;
  const lookupResult = lookup
    ? lookup.status
    : inputId.length > 5
      ? "invalid"
      : null;

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <span className="section-tag">Vendor Verification</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          QR Code Verification
        </h2>
        <p style={{ color: C.textMuted, marginTop: 8 }}>
          Scan a vendor's QR code or enter their license ID to verify
          certification.
        </p>
      </div>

      {/* QR Scanner mock */}
      <div
        className="card fade-up"
        style={{ textAlign: "center", marginBottom: 24 }}
      >
        <div
          style={{
            position: "relative",
            background: "#0a0a0a",
            borderRadius: 12,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          {scanning ? (
            <>
              <video
                ref={videoRef}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
                playsInline
                autoPlay
                muted
              />
              <div
                style={{
                  width: 160,
                  height: 160,
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderRadius: 8,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* corner brackets */}
                {[
                  ["0 0", "0 0"],
                  ["0 0", "auto 0"],
                  ["auto 0", "0 0"],
                  ["auto 0", "auto 0"],
                ].map(([t, l], i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: t[0] === "a" ? "auto" : -2,
                      bottom: t[0] === "a" ? -2 : undefined,
                      left: l[0] === "a" ? "auto" : -2,
                      right: l[0] === "a" ? -2 : undefined,
                      width: 20,
                      height: 20,
                      borderColor: C.emeraldLight,
                      borderStyle: "solid",
                      borderWidth:
                        t[0] === "a"
                          ? l[0] === "a"
                            ? "0 2px 2px 0"
                            : "0 0 2px 2px"
                          : l[0] === "a"
                            ? "2px 2px 0 0"
                            : "2px 0 0 2px",
                    }}
                  />
                ))}
                <div className="qr-scanner-line" />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  animation: "pulse 1.5s infinite",
                }}
              >
                Scanning…
              </div>
            </>
          ) : (
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
              Camera preview will appear here
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginBottom: 12,
          }}
        >
          <button
            className="btn-primary"
            onClick={() => setScanning((s) => !s)}
          >
            {scanning ? "Stop Scanning" : "📷 Open Camera Scanner"}
          </button>

          <label style={{ cursor: "pointer" }} className="btn-secondary">
            📁 Upload Picture
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setScanning(false);
                  setResult(null);
                  // Simulate reading the QR and getting a response
                  setTimeout(() => {
                    setResult("valid");
                  }, 1500);
                }
              }}
            />
          </label>
        </div>
        {result === "valid" && (
          <div
            style={{
              padding: "14px",
              background: "#e6f4ee",
              borderRadius: 8,
              color: C.success,
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            ✅ Vendor is LICENSED and CERTIFIED
          </div>
        )}
      </div>

      {/* Manual lookup */}
      <div className="card fade-up fade-up-2">
        <h3 style={{ fontWeight: 600, color: C.emerald, marginBottom: 16 }}>
          Manual License Lookup
        </h3>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="e.g. CEBU-V-00241"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            Check
          </button>
        </div>
        <p style={{ fontSize: 11, color: C.textLight, marginTop: 8 }}>
          Try: CEBU-V-00241 (valid) or CEBU-V-00188 (expired)
        </p>

        {lookupResult && (
          <div style={{ marginTop: 16 }}>
            {lookupResult === "invalid" ? (
              <div
                style={{
                  padding: 14,
                  background: "#fde8e8",
                  borderRadius: 8,
                  color: C.danger,
                  fontWeight: 500,
                }}
              >
                ❌ No licensed vendor found for this ID.
              </div>
            ) : (
              lookup && (
                <div
                  style={{
                    padding: 16,
                    background:
                      lookupResult === "valid" ? "#e6f4ee" : "#fff8e1",
                    borderRadius: 10,
                    border: `1px solid ${lookupResult === "valid" ? "#a8d5b5" : "#f0c040"}`,
                  }}
                >
                  <div
                    style={{ display: "flex", gap: 14, alignItems: "center" }}
                  >
                    <img
                      src={lookup.photo}
                      alt=""
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <div
                        style={{ fontWeight: 600, fontSize: 16, color: C.text }}
                      >
                        {lookup.name}
                      </div>
                      <div style={{ fontSize: 13, color: C.textMuted }}>
                        📍 {lookup.location}
                      </div>
                      <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                        <span
                          className={`badge ${lookupResult === "valid" ? "badge-green" : "badge-gold"}`}
                        >
                          {lookupResult === "valid"
                            ? "✓ Active License"
                            : "⚠ Expired"}
                        </span>
                        <span className="badge badge-blue">{lookup.cert}</span>
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: C.textLight,
                          marginTop: 4,
                        }}
                      >
                        Valid until: {lookup.until}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── AWARENESS ────────────────────────────────────────────────────────────────
