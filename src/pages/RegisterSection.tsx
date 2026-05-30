import { useState } from "react";
import { getStoredVendors, saveStoredVendor } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { C } from "../utils/theme";

export function RegisterSection({ isLogin }: { isLogin?: boolean }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState<"register" | "login">(
    isLogin ? "login" : "register",
  );
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Register States
  const [regFirstName, setRegFirstName] = useState("");
  const [regLastName, setRegLastName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regCompany, setRegCompany] = useState("");

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    setErrorMsg("");
    if (email === "admin@eluwas.gov.ph" && password === "admin123") {
      navigate("/admin-dashboard");
      return;
    }

    const vendors = getStoredVendors();
    const vendor = vendors.find(
      (v) => v.email === email && v.password === password,
    );
    if (!vendor) {
      setErrorMsg("Invalid credentials.");
      return;
    }

    if (vendor.status === "Pending") {
      setErrorMsg("Your account is still waiting for admin approval.");
      return;
    }

    localStorage.setItem("eluwas_active_vendor", JSON.stringify(vendor));

    navigate("/vendor-dashboard");
  };

  const submitRegistration = () => {
    if (!regEmail || !regFirstName || !regLastName) {
      alert(
        "Please fill in the required fields (First Name, Last Name, Email).",
      );
      return;
    }
    const newVendor = {
      id: "CEBU-V-" + Math.floor(Math.random() * 10000),
      firstName: regFirstName,
      lastName: regLastName,
      email: regEmail,
      password: "password123", // default temp pass
      company: regCompany || "N/A",
      status: "Pending",
    };
    saveStoredVendor(newVendor);
    setSubmitted(true);
  };

  const totalSteps = 2;

  return (
    <div
      className="padding-container"
      style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}
    >
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <span className="section-tag">
          {mode === "login" ? "Vendor Login" : "Vendor Registration"}
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 30,
            color: C.emerald,
            marginTop: 6,
          }}
        >
          {mode === "login" ? "Welcome Back" : "Get Your License Online"}
        </h2>
        <div
          style={{
            marginTop: 16,
            display: "flex",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <button
            className={mode === "register" ? "btn-primary" : "btn-outline"}
            onClick={() => {
              setMode("register");
              setStep(1);
              setSubmitted(false);
            }}
          >
            Register
          </button>
          <button
            className={mode === "login" ? "btn-primary" : "btn-outline"}
            onClick={() => {
              setMode("login");
              setSubmitted(false);
            }}
          >
            Login
          </button>
        </div>
      </div>

      {mode === "login" ? (
        <div className="card fade-up">
          {errorMsg && (
            <div
              style={{
                color: C.danger,
                background: "#fde8e8",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "16px",
                fontSize: 13,
              }}
            >
              {errorMsg}
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="vendor@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "right", marginBottom: 16 }}>
            <span
              style={{ fontSize: 12, color: C.emeraldLight, cursor: "pointer" }}
            >
              Forgot password?
            </span>
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%", padding: "12px" }}
            onClick={handleLogin}
          >
            Login to Dashboard
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: C.textMuted,
              marginTop: 16,
            }}
          >
            Don't have an account?{" "}
            <span
              style={{ color: C.emerald, cursor: "pointer" }}
              onClick={() => setMode("register")}
            >
              Register here →
            </span>
          </p>
        </div>
      ) : submitted ? (
        <div
          className="card fade-up"
          style={{ textAlign: "center", padding: "48px 24px" }}
        >
          <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 24,
              color: C.emerald,
              marginBottom: 10,
            }}
          >
            Application Submitted!
          </h3>
          <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6 }}>
            Your vendor registration is under review. You'll receive an email
            within 3–5 business days with your license status and QR code.
          </p>
          <div
            style={{
              marginTop: 24,
              padding: "14px 20px",
              background: C.cream,
              borderRadius: 8,
              fontSize: 13,
              color: C.textMuted,
            }}
          >
            Application ID:{" "}
            <strong style={{ color: C.emerald }}>CEBU-2025-08412</strong>
          </div>
        </div>
      ) : (
        <div className="card fade-up">
          {/* Progress */}
          <div style={{ display: "flex", gap: 0, marginBottom: 28 }}>
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 4,
                  background: i < step ? C.emerald : C.sand,
                  transition: "background 0.3s",
                  borderRadius:
                    i === 0
                      ? "4px 0 0 4px"
                      : i === totalSteps - 1
                        ? "0 4px 4px 0"
                        : 0,
                }}
              />
            ))}
          </div>
          <div style={{ marginBottom: 8, fontSize: 12, color: C.textMuted }}>
            Step {step} of {totalSteps}
          </div>

          {step === 1 && (
            <>
              <h3
                style={{ fontWeight: 600, marginBottom: 20, color: C.emerald }}
              >
                Vendor's Information
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    placeholder="Last Name"
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    placeholder="First Name"
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Middle Name</label>
                  <input placeholder="Middle Name" />
                </div>
                <div className="form-group">
                  <label>Suffix (JR. / SR.)</label>
                  <input placeholder="Suffix (e.g., Jr.)" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Date of Birth *</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Place of Birth *</label>
                  <input placeholder="Place of Birth" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Contact No. *</label>
                  <input placeholder="Contact No." />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Sex *</label>
                  <select>
                    <option>Select</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Civil Status *</label>
                  <select>
                    <option>Select</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </select>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Citizenship / Nationality *</label>
                  <select>
                    <option>Select</option>
                    <option>Filipino</option>
                    <option>Foreign</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>If Foreign, What is your Nationality</label>
                  <input placeholder="Nationality" />
                </div>
              </div>

              <h3
                style={{
                  fontWeight: 600,
                  marginTop: 24,
                  marginBottom: 20,
                  color: C.emerald,
                }}
              >
                Vendor's Address
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Barangay *</label>
                  <input placeholder="Barangay" />
                </div>
                <div className="form-group">
                  <label>City / Municipality *</label>
                  <input placeholder="City" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Province *</label>
                  <input placeholder="Province" />
                </div>
                <div className="form-group">
                  <label>Postal Code *</label>
                  <input placeholder="Zip Code" />
                </div>
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  marginTop: 24,
                  marginBottom: 20,
                  color: C.emerald,
                }}
              >
                Vendor's Identification
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>TIN</label>
                  <input placeholder="TIN Number" />
                </div>
                <div className="form-group">
                  <label>SSS No. *</label>
                  <input placeholder="SSS Number" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Medical Cert. No. *</label>
                  <input placeholder="Medical Cert No." />
                </div>
                <div className="form-group">
                  <label>Police Clearance No. *</label>
                  <input placeholder="Police Clearance No." />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Community Tax Certificate (CTC) No. *</label>
                  <input placeholder="CTC Number" />
                </div>
                <div className="form-group">
                  <label>CTC Date Issued *</label>
                  <input type="date" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>CTC Placed Issued *</label>
                  <input placeholder="Place Issued" />
                </div>
              </div>

              <h3
                style={{
                  fontWeight: 600,
                  marginTop: 24,
                  marginBottom: 20,
                  color: C.emerald,
                }}
              >
                Vendor's Credentials
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    placeholder="Company Name"
                    value={regCompany}
                    onChange={(e) => setRegCompany(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Highest Education Attainment *</label>
                  <input placeholder="Highest Education" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Job Position *</label>
                  <input placeholder="Job Position" />
                </div>
                <div className="form-group">
                  <label>Institution Last Attended *</label>
                  <input placeholder="Institution Name" />
                </div>
              </div>

              <h3
                style={{
                  fontWeight: 600,
                  marginTop: 24,
                  marginBottom: 20,
                  color: C.emerald,
                }}
              >
                Company Address
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Barangay *</label>
                  <input placeholder="Barangay" />
                </div>
                <div className="form-group">
                  <label>City / Municipality *</label>
                  <input placeholder="City" />
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                }}
                className="grid-2"
              >
                <div className="form-group">
                  <label>Province *</label>
                  <input placeholder="Province" />
                </div>
                <div className="form-group">
                  <label>Postal Code *</label>
                  <input placeholder="Zip Code" />
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h3
                style={{ fontWeight: 600, marginBottom: 20, color: C.emerald }}
              >
                Upload Requirements
              </h3>
              {[
                {
                  label: "Valid Government ID",
                  hint: "PhilSys, Voter's ID, Passport",
                },
                {
                  label: "Barangay Business Clearance",
                  hint: "Issued within 2025",
                },
                {
                  label: "Health Certificate",
                  hint: "From City Health Office",
                },
                {
                  label: "Stall / Pushcart Photo",
                  hint: "Clear, well-lit photo",
                },
              ].map((f, i) => (
                <div key={i} className="form-group">
                  <label>{f.label}</label>
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
                    <div style={{ fontSize: 22, marginBottom: 4 }}>📎</div>
                    <div style={{ fontSize: 12, color: C.textMuted }}>
                      Click to upload or drag & drop
                    </div>
                    <div
                      style={{ fontSize: 11, color: C.textLight, marginTop: 2 }}
                    >
                      {f.hint}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {step > 1 && (
              <button
                className="btn-outline"
                onClick={() => setStep((s) => s - 1)}
              >
                ← Back
              </button>
            )}
            <button
              className="btn-primary"
              style={{ flex: 1 }}
              onClick={() => {
                if (step < totalSteps) setStep((s) => s + 1);
                else submitRegistration();
              }}
            >
              {step < totalSteps ? "Continue →" : "Submit Application"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SEMINARS ─────────────────────────────────────────────────────────────────
