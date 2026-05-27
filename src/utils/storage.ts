// ─── Local Storage DB ────────────────────────────────────────────────────────
export function getStoredVendors(): any[] {
  try {
    const data = localStorage.getItem("eluwas_vendors");
    if (data) {
      const vendors = JSON.parse(data);
      let updated = false;
      const normalized = vendors.map((vendor: any) => {
        if (
          vendor?.email === "maria@example.com" &&
          vendor?.status === "Approved" &&
          !vendor?.healthCertificateId
        ) {
          updated = true;
          return { ...vendor, healthCertificateId: "2026 - 0545" };
        }
        return vendor;
      });
      if (updated) {
        localStorage.setItem("eluwas_vendors", JSON.stringify(normalized));
      }
      return normalized;
    }
  } catch (e) {}

  // Dummy data default
  const defaultVendors = [
    {
      id: "CEBU-V-001",
      firstName: "Maria",
      lastName: "Clara",
      email: "maria@example.com",
      password: "password123",
      company: "Maria's Puso",
      healthCertificateId: "2026 - 0545",
      status: "Approved",
    },
  ];
  localStorage.setItem("eluwas_vendors", JSON.stringify(defaultVendors));
  return defaultVendors;
}

export function saveStoredVendor(vendor: any) {
  const vendors = getStoredVendors();
  vendors.push(vendor);
  localStorage.setItem("eluwas_vendors", JSON.stringify(vendors));
}

export function updateVendorStatus(email: string, status: string) {
  const vendors = getStoredVendors();
  const index = vendors.findIndex((v) => v.email === email);
  if (index !== -1) {
    vendors[index].status = status;
    localStorage.setItem("eluwas_vendors", JSON.stringify(vendors));
  }
}

