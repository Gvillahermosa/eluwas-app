import { C } from "./theme";

export // ─── Keyframe injection ───────────────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById("eluwas-styles")) return;
  const style = document.createElement("style");
  style.id = "eluwas-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'DM Sans', sans-serif; background: ${C.cream}; color: ${C.text}; overflow-x: hidden; }
    html { scroll-behavior: smooth; }
    img { max-width: 100%; height: auto; }
    @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
    @keyframes scanLine { 0% { top:0; } 100% { top:100%; } }
    @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
    @keyframes spin { to { transform:rotate(360deg); } }
    .fade-up { animation: fadeUp 0.6s ease both; }
    .fade-up-1 { animation-delay: 0.1s; }
    .fade-up-2 { animation-delay: 0.2s; }
    .fade-up-3 { animation-delay: 0.3s; }
    .fade-up-4 { animation-delay: 0.4s; }
    .fade-up-5 { animation-delay: 0.5s; }
    .hover-lift { transition: transform 0.25s ease, box-shadow 0.25s ease; }
    .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(13,92,58,0.15) !important; }
    .btn-primary {
      background: ${C.emerald}; color: ${C.white}; border: none; border-radius: 6px;
      padding: 10px 22px; font-family: 'DM Sans'; font-weight: 500; font-size: 14px;
      cursor: pointer; transition: background 0.2s ease, transform 0.15s ease;
    }
    .btn-primary:hover { background: ${C.emeraldMid}; transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }
    .btn-outline {
      background: transparent; color: ${C.emerald}; border: 1.5px solid ${C.emerald};
      border-radius: 6px; padding: 9px 20px; font-family: 'DM Sans'; font-weight: 500; font-size: 14px;
      cursor: pointer; transition: all 0.2s ease;
    }
    .btn-outline:hover { background: ${C.emerald}; color: ${C.white}; }
    .btn-gold {
      background: ${C.gold}; color: ${C.white}; border: none; border-radius: 6px;
      padding: 10px 22px; font-family: 'DM Sans'; font-weight: 500; font-size: 14px;
      cursor: pointer; transition: background 0.2s ease;
    }
    .btn-gold:hover { background: ${C.goldLight}; }
    input, select, textarea {
      width: 100%; padding: 10px 14px; border: 1.5px solid ${C.sand};
      border-radius: 6px; font-family: 'DM Sans'; font-size: 14px; color: ${C.text};
      background: ${C.white}; transition: border-color 0.2s;
      outline: none;
    }
    input:focus, select:focus, textarea:focus { border-color: ${C.emeraldLight}; }
    label { display: block; font-size: 13px; font-weight: 500; color: ${C.textMuted}; margin-bottom: 5px; }
    .form-group { margin-bottom: 16px; }
    .card {
      background: ${C.white}; border-radius: 12px; padding: 24px;
      box-shadow: 0 2px 12px rgba(13,92,58,0.08); border: 1px solid rgba(13,92,58,0.08);
    }
    .nav-link {
      color: ${C.textMuted}; text-decoration: none; font-size: 13px; font-weight: 500;
      cursor: pointer; padding: 6px 2px; border-bottom: 2px solid transparent;
      transition: color 0.2s, border-color 0.2s; white-space: nowrap;
    }
    .nav-link:hover, .nav-link.active { color: ${C.emerald}; border-bottom-color: ${C.emeraldLight}; }
    .badge {
      display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500;
    }
    .badge-green { background: #e6f4ee; color: ${C.emerald}; }
    .badge-gold { background: #fdf3dc; color: ${C.gold}; }
    .badge-red { background: #fde8e8; color: ${C.danger}; }
    .badge-blue { background: #e3f0fb; color: ${C.info}; }
    .section-tag {
      display: inline-block; background: ${C.emerald}; color: ${C.white};
      font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase;
      padding: 4px 12px; border-radius: 3px; margin-bottom: 12px;
    }
    .divider { border: none; border-top: 1px solid ${C.sand}; margin: 20px 0; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-thumb { background: ${C.sand}; border-radius: 3px; }
    table { border-collapse: collapse; width: 100%; }
    th { text-align: left; font-size: 12px; font-weight: 500; color: ${C.textMuted}; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 14px; background: ${C.creamDark}; }
    td { font-size: 13px; padding: 10px 14px; border-bottom: 1px solid ${C.creamDark}; }
    tr:hover td { background: ${C.cream}; }
    .qr-scanner-line { position: absolute; left: 0; right: 0; height: 2px; background: ${C.emeraldLight}; animation: scanLine 2s linear infinite; opacity: 0.8; }
    @media (max-width: 768px) {
      .desktop-only { display: none !important; }
      .grid-2 { grid-template-columns: 1fr !important; }
      .grid-3 { grid-template-columns: 1fr !important; }
      .grid-4 { grid-template-columns: repeat(2,1fr) !important; }
      .padding-container { padding: 30px 16px !important; }
      .card { padding: 18px; }
      .stats-number { font-size: 22px !important; }
      .stats-grid { gap: 12px !important; }
      .hero-collage img { width: 120px !important; height: 78px !important; }
      .section-tag { font-size: 10px; letter-spacing: 1px; }
      table { display: block; overflow-x: auto; white-space: nowrap; }
    }
    @media (max-width: 520px) {
      .grid-4 { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .hero-collage img { width: 45% !important; max-width: 150px; height: auto !important; }
    }
    @media (min-width: 769px) {
      .mobile-only { display: none !important; }
    }
  
    .topnav { background: ${C.white}; position: sticky; top: 0; z-index: 100; box-shadow: 0 4px 20px rgba(13,92,58,0.06); }
    .topnav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 12px 24px; }
    .topnav-left { display: flex; align-items: center; gap: 40px; }
    .topnav-right { display: flex; align-items: center; gap: 24px; }
    
    .brand-logo { display: flex; align-items: center; gap: 12px; }
    .brand-logo-icon { width: 34px; height: 34px; background: ${C.emerald}; border-radius: 8px; box-shadow: 0 4px 12px rgba(13,92,58,0.2); margin-bottom: 4px; display: flex; align-items: center; justify-content: center; }
    .brand-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: ${C.emerald}; letter-spacing: -0.5px; margin: 0; line-height: 1; }
    
    .desktop-menu { display: flex; align-items: center; gap: 24px; }
    
    .nav-actions { display: flex; align-items: center; gap: 16px; }
    
    .nav-link { 
      background: none; border: none; font-family: 'DM Sans', sans-serif; 
      font-size: 14px; font-weight: 500; color: ${C.textMuted}; cursor: pointer; 
      padding: 6px 2px; border-bottom: 2px solid transparent; transition: color 0.2s, border-color 0.2s; white-space: nowrap; 
    }
    .nav-link:hover, .nav-link.active { color: ${C.emerald}; border-bottom-color: ${C.emeraldLight}; }
    
    .cursor-pointer { cursor: pointer; }
    
    .mobile-menu-btn { display: none; background: none; border: none; font-size: 24px; color: ${C.emerald}; cursor: pointer; padding: 4px; }
    
    .mobile-menu { background: ${C.white}; padding: 16px 24px; border-top: 1px solid ${C.sand}; box-shadow: 0 8px 16px rgba(0,0,0,0.05); position: absolute; width: 100%; left: 0; }
    .mobile-menu-items { display: flex; flex-direction: column; gap: 12px; align-items: center; }
    .mobile-nav-link { text-align: center; background: none; border: none; padding: 8px 0; font-size: 16px; font-family: 'DM Sans'; cursor: pointer; color: ${C.text}; width: 100%; }
    .mobile-divider { height: 1px; background: ${C.sand}; margin: 8px 0; width: 100%; }
    
    .text-primary { color: ${C.emerald} !important; font-weight: 600 !important; }
    .text-danger { color: ${C.danger} !important; font-weight: 600 !important; }
    
    @media (max-width: 768px) {
      .desktop-menu { display: none; }
      .mobile-menu-btn { display: block; }
    }
  `;
  document.head.appendChild(style);
}
