// utils.js - JavaScript Utility Functions
// Reference: https://www.w3schools.com/js

// String utilities - Xử lý chuỗi
const StringUtils = {
  // Viết hoa chữ cái đầu: "hello" → "Hello"
  capitalize(str){ 
    return String(str||'').charAt(0).toUpperCase() + String(str).slice(1).toLowerCase(); 
  },
  
  // Cắt ngắn text: truncate("Hello World", 5) → "Hello..."
  truncate(str, len=50){ 
    const s = String(str||''); 
    return s.length > len ? s.substring(0, len) + '...' : s; 
  },
  
  // Tạo slug URL: "Hello World!" → "hello-world"
  slugify(str){ 
    return String(str||'').toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''); 
  }
};

// Array utilities - Xử lý mảng
const ArrayUtils = {
  // Loại bỏ trùng lặp: [1,2,2,3] → [1,2,3]
  unique(arr){ 
    return [...new Set(arr)]; 
  },
  
  // Xáo trộn ngẫu nhiên
  shuffle(arr){ 
    const a = [...arr]; 
    for(let i = a.length-1; i > 0; i--){ 
      const j = Math.floor(Math.random()*(i+1)); 
      [a[i], a[j]] = [a[j], a[i]]; 
    } 
    return a; 
  },
  
  // Nhóm theo key: groupBy([{type:'a'}, {type:'b'}], 'type')
  groupBy(arr, key){ 
    return arr.reduce((r, i) => { 
      (r[i[key]] = r[i[key]] || []).push(i); 
      return r; 
    }, {}); 
  },
  
  // Sắp xếp object array: sortBy([{age:30}, {age:20}], 'age')
  sortBy(arr, key, desc=false){ 
    return [...arr].sort((a,b) => {
      return desc ? (b[key] > a[key] ? 1 : -1) : (a[key] > b[key] ? 1 : -1);
    }); 
  }
};

// Date utilities - Xử lý ngày tháng
const DateUtils = {
  // Format ngày: formatDate(new Date(), 'DD/MM/YYYY') → "20/11/2025"
  formatDate(date, format='DD/MM/YYYY'){ 
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return format.replace('DD', day).replace('MM', month).replace('YYYY', year);
  },
  
  // Cộng số ngày: addDays(new Date(), 7)
  addDays(date, days){ 
    const d = new Date(date); 
    d.setDate(d.getDate() + days); 
    return d; 
  },
  
  // Tính số ngày chênh lệch: diffDays(date1, date2) → 5
  diffDays(date1, date2){ 
    return Math.floor((new Date(date2) - new Date(date1)) / (1000*60*60*24)); 
  }
};

// Number formatting - Format số
const Formatter = {
  // Format số: number(1234.5, 2) → "1.234,50"
  number(n, d=0){ 
    return new Intl.NumberFormat('vi-VN',{
      minimumFractionDigits:d,
      maximumFractionDigits:d
    }).format(n||0); 
  },
  
  // Format tiền VND: currency(50000) → "50.000 ₫"
  currency(n){ 
    return new Intl.NumberFormat('vi-VN',{
      style:'currency',
      currency:'VND'
    }).format(n||0); 
  }
};

// LocalStorage wrapper - Lưu trữ dữ liệu
const Storage = {
  // Lưu (tự động JSON.stringify): set('user', {name:'John'})
  set(k,v){ 
    try{ 
      localStorage.setItem(k, JSON.stringify(v)); 
      return true;
    } catch{ 
      return false;
    } 
  },
  
  // Lấy (tự động JSON.parse): get('user') → {name:'John'}
  get(k,def=null){ 
    try{ 
      const v=localStorage.getItem(k); 
      return v?JSON.parse(v):def;
    } catch{
      return def;
    } 
  },
  
  // Xóa: remove('user')
  remove(k){ 
    try{ 
      localStorage.removeItem(k); 
      return true;
    } catch{ 
      return false;
    } 
  },
  
  // Xóa tất cả: clear()
  clear(){ 
    try{ 
      localStorage.clear(); 
      return true;
    } catch{ 
      return false;
    } 
  }
};

// Utilities - Các hàm tiện ích
const Utils = {
  // Debounce: Chờ ngừng gõ mới thực thi (search input)
  // Usage: input.addEventListener('input', debounce(() => search(), 300))
  debounce(fn,ms=300){ 
    let t; 
    return function(...a){ 
      clearTimeout(t); 
      t=setTimeout(()=>fn.apply(this,a),ms); 
    }; 
  },
  
  // Throttle: Giới hạn gọi hàm (scroll event)
  // Usage: window.addEventListener('scroll', throttle(() => check(), 300))
  throttle(fn,ms=300){ 
    let last=0; 
    return function(...a){ 
      const now=Date.now(); 
      if(now-last>=ms){ 
        last=now; 
        fn.apply(this,a); 
      }
    }; 
  },
  
  // Tạo ID unique: generateId() → "l3x9k2m4p"
  generateId(){ 
    return Date.now().toString(36) + Math.random().toString(36).substr(2); 
  },
  
  // Toast notification: alert('Saved!', 'success')
  // Types: success, error, warning, info
  alert(msg,type='info'){ 
    const colors={
      success:'#198754',
      error:'#dc3545',
      warning:'#ffc107',
      info:'#0dcaf0'
    }; 
    const d=document.createElement('div'); 
    d.textContent=msg; 
    d.style.cssText=`
      position:fixed;
      top:20px;
      right:20px;
      padding:10px 14px;
      background:${colors[type]||'#333'};
      color:#fff;
      border-radius:6px;
      z-index:9999;
    `; 
    document.body.appendChild(d); 
    setTimeout(()=>d.remove(),2500); 
  }
};