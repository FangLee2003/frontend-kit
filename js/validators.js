// validators.js - Form validators (RegEx patterns)
const Validators = {
  isEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'')); },
  isPhone(v){ const s = String(v||'').replace(/\s+/g,''); return /^(\+84|84|0)(3|5|7|8|9)\d{8}$/.test(s); },
  isStrongPassword(v){ return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(String(v||'')); },
  isRequired(v){ return v !== undefined && v !== null && String(v).trim().length>0; },
  
  // A301-5.2 patterns
  isCreditCard(v){ return /^\d{16}$/.test(String(v||'').replace(/\s+/g,'')); }, // 16 digits
  isNumber(v){ return /^-?\d+(\.\d+)?$/.test(String(v||'')); }, // Integer or decimal
  isURL(v){ return /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/.*)?$/.test(String(v||'')); },
  isAlphanumeric(v){ return /^[a-zA-Z0-9]+$/.test(String(v||'')); }, // No special chars
  isZipCode(v){ return /^\d{5}$/.test(String(v||'')); }, // 5 digits
  isCVV(v){ return /^\d{3,4}$/.test(String(v||'')); } // 3-4 digits
};

const Formatter = {
  number(n, d=0){ return new Intl.NumberFormat('vi-VN',{minimumFractionDigits:d,maximumFractionDigits:d}).format(n||0); },
  currency(n){ return new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(n||0); },
  date(d){ const dt = new Date(d); return dt && !isNaN(dt) ? `${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')}/${dt.getFullYear()}` : ''; }
};

const Storage = {
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); return true;}catch{ return false;} },
  get(k,def=null){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):def;}catch{return def;} },
  remove(k){ try{ localStorage.removeItem(k); return true;}catch{return false;} }
};

const Utils = {
  debounce(fn,ms=300){ let t; return function(...a){ clearTimeout(t); t=setTimeout(()=>fn.apply(this,a),ms); }; },
  alert(msg,type='info'){ const colors={success:'#198754',error:'#dc3545',warning:'#ffc107',info:'#0dcaf0'}; const d=document.createElement('div'); d.textContent=msg; d.style.cssText=`position:fixed;top:20px;right:20px;padding:10px 14px;background:${colors[type]||'#333'};color:#fff;border-radius:6px;z-index:9999;`; document.body.appendChild(d); setTimeout(()=>d.remove(),2500); }
};