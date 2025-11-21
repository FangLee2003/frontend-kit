# jQuery Cheatsheet - Core Essentials

## Setup
```javascript
// Document ready
$(function() { /* code */ });
$(document).ready(function() { /* code */ });
```

## Selectors
```javascript
$('#id')              // ID
$('.class')           // Class
$('div')              // Tag
$('div, p')           // Multiple
$('div > p')          // Direct child
$('div p')            // Descendant
$('[type="text"]')    // Attribute
$('p:first')          // First
$('p:eq(2)')          // Index
$('p:not(.intro)')    // Not
$(':checkbox')        // Checkbox
$(':checked')         // Checked
$(':disabled')        // Disabled
```

## Events
```javascript
// Click
$('#btn').click(function() { });
$(document).on('click', '.btn', function() { }); // Event delegation

// Form
$('#form').submit(function(e) { e.preventDefault(); });
$('#input').focus(function() { });
$('#input').blur(function() { });
$('#input').change(function() { });

// Keyboard
$('#input').keyup(function(e) { console.log(e.key); });

// Generic
$('#el').on('click', function() { });
$('#el').off('click');
$('#el').trigger('click');
```

## DOM Manipulation
```javascript
// Content
$('#div').html()              // Get HTML
$('#div').html('<p>New</p>')  // Set HTML
$('#div').text()              // Get text
$('#div').text('New')         // Set text
$('#input').val()             // Get value
$('#input').val('New')        // Set value

// Attributes
$('#img').attr('src')         // Get
$('#img').attr('src', 'a.jpg') // Set
$('#div').data('id')          // Get data-id
$('#div').data('id', 123)     // Set data-id
$('#checkbox').prop('checked') // Get property
$('#checkbox').prop('checked', true) // Set

// Classes
$('#div').addClass('active')
$('#div').removeClass('active')
$('#div').toggleClass('active')
$('#div').hasClass('active')

// Create & Insert
let $el = $('<div>Hello</div>');
$('#parent').append($el)      // End
$('#parent').prepend($el)     // Start
$('#target').after($el)       // After
$('#target').before($el)      // Before

// Remove
$('#item').remove()           // Remove from DOM
$('#item').empty()            // Remove children
```

## CSS & Effects
```javascript
// CSS
$('#div').css('color', 'red')
$('#div').css({ color: 'red', fontSize: '20px' })

// Show/Hide
$('#div').show()
$('#div').hide()
$('#div').toggle()

// Fade
$('#div').fadeIn(500)
$('#div').fadeOut(500)
$('#div').fadeToggle(500)

// Slide
$('#div').slideDown(500)
$('#div').slideUp(500)
$('#div').slideToggle(500)

// Animate
$('#div').animate({ left: '250px', opacity: 0.5 }, 1000);

// Chaining
$('#div').fadeOut(500).delay(500).fadeIn(500);
```

## Traversing
```javascript
// Parent/Children
$('#child').parent()          // Direct parent
$('#child').closest('.box')   // Nearest ancestor
$('#parent').children()       // Direct children
$('#parent').find('.item')    // All descendants

// Siblings
$('#item').next()             // Next sibling
$('#item').prev()             // Previous sibling
$('#item').siblings()         // All siblings

// Filter
$('div').first()              // First
$('div').last()               // Last
$('div').eq(2)                // Index
$('div').filter('.active')    // Filter
$('div').not('.exclude')      // Exclude

// Iterate
$('div').each(function(i, el) {
    console.log(i, $(el).text());
});
```

## AJAX
```javascript
// GET
$.get('api/data', function(data) { console.log(data); });

// POST
$.post('api/save', {name: 'John'}, function(res) { console.log(res); });

// Full
$.ajax({
    url: 'api/data',
    type: 'GET',
    dataType: 'json',
    success: function(data) { console.log(data); },
    error: function(xhr, status, error) { console.error(error); }
});

// Load HTML
$('#div').load('page.html');
```

## Common Patterns
```javascript
// Form data
let data = $('#form').serialize();
let arr = $('#form').serializeArray();

// Checkbox
$('#cb').prop('checked', true);
let checked = $('#cb').is(':checked');

// Dropdown
$('#select').val();
$('#select option:selected').text();

// Element exists
if ($('#div').length) { /* exists */ }

// Debounce
let timeout;
$('#search').on('input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('Search:', $(this).val());
    }, 300);
});

// Smooth scroll
$('html, body').animate({ scrollTop: $('#target').offset().top }, 500);
```
