import React, { useState, useEffect } from 'react';
import { getStoredVendors, saveStoredVendor, updateVendorStatus } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { C } from '../utils/theme';

export function AdminDashboard() {
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
      <div style={{ marginBottom: 20 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            color: C.emerald,
          }}
        >
          Admin Dashboard
        </h2>
      </div>
      <p style={{ marginBottom: 30 }}>
        Review and approve vendor applications.
      </p>

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
                <td>
                  {v.firstName} {v.lastName}
                </td>
                <td>{v.email}</td>
                <td>
                  <span
                    className={
                      v.status === "Approved"
                        ? "badge badge-green"
                        : "badge badge-gold"
                    }
                  >
                    {v.status}
                  </span>
                </td>
                <td>
                  {v.status === "Pending" ? (
                    <button
                      className="btn-primary"
                      style={{ fontSize: 11, padding: "6px 12px" }}
                      onClick={() => approve(v.email)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span style={{ color: C.textLight, fontSize: 12 }}>
                      Done
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {vendors.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No vendors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- VENDOR DASHBOARD ---------------------------------------------------------
