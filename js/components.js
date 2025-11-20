// components.js - Interactive components (jQuery version)
class Popup{
  constructor(selector){ 
    this.$el = $(selector); 
    this.init(); 
  }
  init(){ 
    if(!this.$el.length) return; 
    this.$el.find('[data-close]').on('click', () => this.close()); 
    this.$el.on('click', e => { if($(e.target).is(this.$el)) this.close(); }); 
    $(document).on('keydown', e => { if(e.key === 'Escape' && this.$el.hasClass('show')) this.close(); }); 
  }
  show(){ this.$el.addClass('show'); $('body').css('overflow', 'hidden'); }
  close(){ this.$el.removeClass('show'); $('body').css('overflow', ''); }
}

class Tabs{ 
  constructor(selector){ 
    this.$root = $(selector); 
    if(!this.$root.length) return;
    this.$root.on('click', '.tab-btn', e => this.activate($(e.currentTarget)));
  }
  activate($btn){ 
    const target = $btn.data('tab'); 
    this.$root.find('.tab-btn').removeClass('active'); 
    this.$root.find('.tab-content').removeClass('active'); 
    $btn.addClass('active'); 
    this.$root.find(`[data-content="${target}"]`).addClass('active'); 
  }
}

class Accordion{ 
  constructor(selector){ 
    this.$root = $(selector); 
    if(!this.$root.length) return;
    this.$root.on('click', '.accordion-header', e => this.toggle($(e.currentTarget)));
  }
  toggle($header){ 
    const $content = $header.next('.accordion-content'); 
    const isActive = $content.hasClass('active'); 
    this.$root.find('.accordion-content').removeClass('active'); 
    if(!isActive) $content.addClass('active'); 
  }
}

class Carousel{ 
  constructor(selector){ 
    this.$root = $(selector); 
    if(!this.$root.length) return; 
    this.$slides = this.$root.find('.slide'); 
    this.idx = 0; 
    this.$root.find('.next').on('click', () => this.next()); 
    this.$root.find('.prev').on('click', () => this.prev()); 
    this.show(0); 
  }
  show(i){ 
    this.$slides.removeClass('active').eq(i).addClass('active'); 
    this.idx = i; 
  }
  next(){ this.show((this.idx + 1) % this.$slides.length); }
  prev(){ this.show((this.idx - 1 + this.$slides.length) % this.$slides.length); }
}

class Dropdown{ 
  constructor(selector){ 
    this.$root = $(selector); 
    if(!this.$root.length) return; 
    this.$toggle = this.$root.find('.dropdown-toggle'); 
    this.$menu = this.$root.find('.dropdown-menu'); 
    this.$toggle.on('click', e => { 
      e.stopPropagation(); 
      this.$menu.toggleClass('show'); 
    }); 
    $(document).on('click', () => this.$menu.removeClass('show')); 
  }
}

// Toast notification - Toast.show('Success!', 'success')
class Toast{
  static show(msg, type='info', duration=3000){
    const colors = {success:'#198754', error:'#dc3545', warning:'#ffc107', info:'#0dcaf0'};
    const $el = $('<div>').text(msg).css({
      position: 'fixed', top: '20px', right: '20px',
      padding: '12px 20px', background: colors[type] || '#333',
      color: '#fff', borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 9999, animation: 'slideIn 0.3s'
    });
    $('body').append($el);
    setTimeout(() => $el.remove(), duration);
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