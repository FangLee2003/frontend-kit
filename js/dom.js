// dom.js - DOM utilities (compact & practical)
const Dom = {
  // Select elements
  $: (s, ctx=document) => ctx.querySelector(s),
  $$: (s, ctx=document) => Array.from(ctx.querySelectorAll(s)),
  
  // Event delegation - xử lý event cho nhiều elements động
  on(selector, event, handler, ctx=document){
    ctx.addEventListener(event, e => {
      const target = e.target.closest(selector);
      if (target) handler.call(target, e, target);
    });
  },
  
  // Create element nhanh - create('div', {class: 'card'}, 'content')
  create(tag, attrs={}, content=''){
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k,v]) => k==='class' ? el.className=v : el.setAttribute(k,v));
    if(content) el.innerHTML = content;
    return el;
  },
  
  // Show/Hide
  show(el){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.style.display = ''; },
  hide(el){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.style.display = 'none'; },
  toggle(el){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.style.display = node.style.display === 'none' ? '' : 'none'; },
  
  // Class helpers
  addClass(el, cls){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.classList.add(cls); },
  removeClass(el, cls){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.classList.remove(cls); },
  toggleClass(el, cls){ const node = typeof el === 'string' ? this.$(el) : el; if(node) node.classList.toggle(cls); },
  hasClass(el, cls){ const node = typeof el === 'string' ? this.$(el) : el; return node ? node.classList.contains(cls) : false; },
  
  // Form helpers - lấy data từ form thành object
  formData(form){ return Object.fromEntries(new FormData(form)); },
  
  // Render array to HTML - render(items, i => `<div>${i.name}</div>`)
  render(arr, template){ return arr.map(template).join(''); }
};