const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf8');
const snippets = 
// --- ADMIN DASHBOARD ----------------------------------------------------------
function AdminDashboard() {
  const [vendors, setVendors] = useState<any[]>([]);

  useEffect(() => {
    setVendors(getStoredVendors());
  }, []);

  const approve = (email: string) => {
    updateVendorStatus(email, "Approved");
    setVendors(getStoredVendors());
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: C.emerald, marginBottom: 20 }}>Admin Dashboard</h2>
      <p style={{ marginBottom: 30 }}>Review and approve vendor applications.</p>
      
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Vendor / Company</th>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{v.company || "N/A"}</td>
                <td>{v.firstName} {v.lastName}</td>
                <td>{v.email}</td>
                <td>
                  <span className={\adge \\}>{v.status}</span>
                </td>
                <td>
                  {v.status === "Pending" ? (
                    <button className="btn-primary" style={{ fontSize: 11, padding: "6px 12px" }} onClick={() => approve(v.email)}>Approve</button>
                  ) : <span style={{ color: C.textLight, fontSize: 12 }}>Done</span>}
                </td>
              </tr>
            ))}
            {vendors.length === 0 && <tr><td colSpan={5} style={{ textAlign: "center" }}>No vendors found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- VENDOR DASHBOARD ---------------------------------------------------------
function VendorDashboard() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: C.emerald, marginBottom: 20 }}>Vendor Dashboard</h2>
      <div className="card fade-up">
        <h3 style={{ color: C.emerald }}>Welcome back!</h3>
        <p style={{ marginTop: 10, color: C.textMuted }}>Your vendor license is active and approved.</p>
        <div style={{ marginTop: 24, padding: "20px", background: C.cream, borderRadius: 8, textAlign: "center" }}>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CEBU-V-00241" alt="QR Code" />
          <div style={{ marginTop: 10, fontWeight: 500 }}>CEBU-V-00241</div>
          <div style={{ fontSize: 12, color: C.textLight }}>Official License QR</div>
        </div>
      </div>
    </div>
  );
}

// --- APP ROOT;

content = content.replace('// --- APP ROOT', snippets);
fs.writeFileSync('src/main.tsx', content);
