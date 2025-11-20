# HTML5 Cheatsheet

## Cấu trúc cơ bản
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề</title>
</head>
<body></body>
</html>
```

## Semantic Tags
```html
<header> <nav> <main> <article> <section> <aside> <footer>
<figure><img><figcaption></figure>
<details><summary>Click</summary>Nội dung</details>
```

## Forms
```html
<form action="/submit" method="POST">
    <!-- Text inputs with validation -->
    <input type="email" placeholder="Email" required>
    <input type="password" minlength="6" required>
    <input type="tel" pattern="[0-9]{10}" placeholder="Phone">
    <input type="date" min="2024-01-01">
    <input type="number" min="0" max="100" step="5">
    <input type="file" accept="image/*" multiple>
    
    <!-- Textarea -->
    <textarea rows="4" maxlength="500" placeholder="Message"></textarea>
    
    <!-- Select dropdown -->
    <select required>
        <option value="">Choose...</option>
        <option value="1">Option 1</option>
        <option value="2" selected>Option 2</option>
    </select>
    
    <!-- Radio & Checkbox -->
    <input type="radio" name="gender" value="male" id="male">
    <label for="male">Male</label>
    
    <input type="checkbox" name="agree" id="agree" required>
    <label for="agree">I agree</label>
    
    <button type="submit">Submit</button>
</form>

<!-- Common validation patterns -->
<input pattern="[0-9]{16}" placeholder="Credit Card (16 digits)">
<input pattern="[A-Za-z0-9]+" placeholder="Alphanumeric only">
<input pattern="https?://.+" placeholder="URL">
```

## Data Attributes - lưu data trong HTML
```html
<div data-user-id="123" data-role="admin" data-status="active">
  User Card
</div>

<script>
// Truy cập data attributes
let el = document.querySelector('div');
console.log(el.dataset.userId); // "123"
console.log(el.dataset.role);   // "admin"
el.dataset.status = 'inactive';  // Set value
</script>
```

## Media
```html
<audio controls><source src="audio.mp3" type="audio/mpeg"></audio>
<video controls width="640"><source src="video.mp4" type="video/mp4"></video>
```

## Storage & APIs
```javascript
// LocalStorage
localStorage.setItem('key', 'value');
localStorage.getItem('key');

// Data attributes
<div data-user-id="123" data-role="admin">
```