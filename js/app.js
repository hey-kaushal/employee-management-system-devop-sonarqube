// ============================================================
//  app.js – Shared utilities: toast, auth guard, admin name
// ============================================================

function showToast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), duration);
}

// Set admin name in sidebar / topbar
window.addEventListener('DOMContentLoaded', () => {
  const adminName = localStorage.getItem('ems_admin') || 'Admin';
  ['admin-name', 'topbar-user'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = adminName.charAt(0).toUpperCase() + adminName.slice(1);
  });

  // Auth guard (runs on all pages except login)
  if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/ems/')) {
    requireAuth();
  }
});
