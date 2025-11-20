# Bootstrap Cheatsheet

## Local Setup
```html
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>
```

## Grid
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Half</div>
    <div class="col-md-6">Half</div>
  </div>
</div>
<!-- Breakpoints: sm(≥576px), md(≥768px), lg(≥992px), xl(≥1200px) -->
```

## Spacing
```html
<div class="m-3 p-2">Margin 1rem, Padding 0.5rem</div>
<div class="mt-2 mb-3">Margin top/bottom</div>
<div class="mx-auto">Center</div>
<!-- 0-5: 0, 0.25rem, 0.5rem, 1rem, 1.5rem, 3rem -->
```

## Typography
```html
<h1 class="display-1">Large</h1>
<p class="text-center fw-bold fs-4">Centered bold</p>
<!-- text-start, text-center, text-end -->
<!-- fw-bold, fw-normal -->
```

## Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-danger btn-sm">Outline Small</button>
```

## Cards
```html
<div class="card">
  <img src="img.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Text</p>
    <a href="#" class="btn btn-primary">Go</a>
  </div>
</div>
```

## Forms
```html
<form>
  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" required>
  </div>
  <div class="mb-3">
    <label class="form-label">Password</label>
    <input type="password" class="form-control">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">Remember</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

## Alert
```html
<div class="alert alert-success alert-dismissible fade show">
  Success message!
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

## Modal
```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open
</button>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
```

## Carousel
```html
<div id="carousel1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel1" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

## Layout Utils
```html
<!-- Display -->
<div class="d-none d-md-block">Hidden mobile, show desktop</div>
<div class="d-flex justify-content-center align-items-center">Flexbox</div>

<!-- Position -->
<div class="position-relative">
  <div class="position-absolute top-0 end-0">Corner</div>
</div>

<!-- Sizing -->
<div class="w-100 h-100">Full width & height</div>
```

## JavaScript
```javascript
// Modal
var modal = new bootstrap.Modal(document.getElementById('myModal'));
modal.show();
modal.hide();

// Carousel
var carousel = new bootstrap.Carousel(document.getElementById('carousel1'));
carousel.next();
```