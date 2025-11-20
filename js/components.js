// components.js - Interactive components
class Popup{
  constructor(selector){ this.el = document.querySelector(selector); this.init(); }
  init(){ 
    if(!this.el) return; 
    this.el.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>this.close())); 
    this.el.addEventListener('click',e=>{ if(e.target===this.el) this.close(); }); 
    document.addEventListener('keydown',e=>{ if(e.key==='Escape' && this.el.classList.contains('show')) this.close(); }); 
  }
  show(){ this.el.classList.add('show'); document.body.style.overflow='hidden'; }
  close(){ this.el.classList.remove('show'); document.body.style.overflow=''; }
}

class Tabs{ 
  constructor(selector){ 
    this.root=document.querySelector(selector); 
    this.root&&this.root.addEventListener('click',e=>{ 
      const btn=e.target.closest('.tab-btn'); 
      if(btn){ this.activate(btn); } 
    }); 
  }
  activate(btn){ 
    const target=btn.dataset.tab; 
    this.root.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); 
    this.root.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active')); 
    btn.classList.add('active'); 
    const el=this.root.querySelector(`[data-content="${target}"]`); 
    if(el) el.classList.add('active'); 
  }
}

class Accordion{ 
  constructor(selector){ 
    this.root=document.querySelector(selector); 
    this.root&&this.root.addEventListener('click',e=>{ 
      const h=e.target.closest('.accordion-header'); 
      if(h) this.toggle(h); 
    }); 
  }
  toggle(header){ 
    const content=header.nextElementSibling; 
    const isActive=content.classList.contains('active'); 
    this.root.querySelectorAll('.accordion-content').forEach(c=>c.classList.remove('active')); 
    if(!isActive) content.classList.add('active'); 
  }
}

class Carousel{ 
  constructor(selector){ 
    this.root=document.querySelector(selector); 
    if(!this.root) return; 
    this.slides=Array.from(this.root.querySelectorAll('.slide')); 
    this.idx=0; 
    this.root.querySelector('.next')?.addEventListener('click',()=>this.next()); 
    this.root.querySelector('.prev')?.addEventListener('click',()=>this.prev()); 
    this.show(0); 
  }
  show(i){ this.slides.forEach((s,si)=>s.classList.toggle('active',si===i)); this.idx=i; }
  next(){ this.show((this.idx+1)%this.slides.length); }
  prev(){ this.show((this.idx-1+this.slides.length)%this.slides.length); }
}

class Dropdown{ 
  constructor(selector){ 
    this.root=document.querySelector(selector); 
    if(!this.root) return; 
    this.toggle=this.root.querySelector('.dropdown-toggle'); 
    this.menu=this.root.querySelector('.dropdown-menu'); 
    this.toggle.addEventListener('click',e=>{ e.stopPropagation(); this.menu.classList.toggle('show'); }); 
    document.addEventListener('click',()=>this.menu.classList.remove('show')); 
  }
}

// Toast notification - Utils.toast('Success!', 'success')
class Toast{
  static show(msg, type='info', duration=3000){
    const colors = {success:'#198754', error:'#dc3545', warning:'#ffc107', info:'#0dcaf0'};
    const el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = `position:fixed;top:20px;right:20px;padding:12px 20px;background:${colors[type]||'#333'};color:#fff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9999;animation:slideIn 0.3s;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration);
  }
}

// Filter component pattern - dùng cho product/data filtering
class Filter{
  constructor(items, renderFn){
    this.items = items; // Array data
    this.render = renderFn; // Function to render filtered items
    this.filters = { category: 'all', keyword: '' };
  }
  
  // Set filter và tự động render
  setFilter(key, value){ this.filters[key] = value; this.update(); }
  
  // Apply tất cả filters
  update(){
    let filtered = this.items;
    
    // Category filter
    if(this.filters.category !== 'all'){
      filtered = filtered.filter(i => i.category === this.filters.category);
    }
    
    // Keyword search
    if(this.filters.keyword){
      filtered = filtered.filter(i => 
        i.name?.toLowerCase().includes(this.filters.keyword.toLowerCase())
      );
    }
    
    this.render(filtered);
  }
}