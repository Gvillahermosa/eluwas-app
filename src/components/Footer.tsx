import { useNavigate } from 'react-router-dom';
import { C } from '../utils/theme';

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      style={{
        background: "#0a3022",
        color: "rgba(255,255,255,0.75)",
        padding: "48px 20px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 32,
            marginBottom: 40,
          }}
          className="grid-4"
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 700,
                color: C.white,
                marginBottom: 6,
              }}
            >
              e-Luwas
            </div>
            <div style={{ fontSize: 12, color: C.goldLight, marginBottom: 12 }}>
              nga pagkaon
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7 }}>
              A digital food safety platform for Don Gil Argao, ensuring clean,
              certified, and trusted street food for all.
            </p>
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                color: C.white,
                marginBottom: 12,
                fontSize: 13,
              }}
            >
              Platform
            </div>
            {(
              ["register", "seminars", "awareness"] 
            ).map((s) => (
              <div
                key={s}
                onClick={() => navigate(s)}
                style={{
                  fontSize: 12,
                  marginBottom: 8,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {s.replace("-", " ")}
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                color: C.white,
                marginBottom: 12,
                fontSize: 13,
              }}
            >
              For Officials
            </div>
            {(["inspection", "feedback", "analytics"] ).map((s) => (
              <div
                key={s}
                onClick={() => navigate(s)}
                style={{
                  fontSize: 12,
                  marginBottom: 8,
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {s.replace("-", " ")}
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                fontWeight: 600,
                color: C.white,
                marginBottom: 12,
                fontSize: 13,
              }}
            >
              Contact
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.8 }}>
              Argao Health Office
              <br />
              Argao, Philippines
              <br />
              📞 (032) 888-FOOD
              <br />
              📧 eluwas@argao.gov.ph
            </p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 11 }}>
            © 2025 e-Luwas nga Pagkaon · Argao Health Office
          </span>
          <span style={{ fontSize: 11 }}>Powered by LGU Digital Services</span>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
