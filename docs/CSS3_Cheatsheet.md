# CSS3 Cheatsheet

## Mục lục
1. [Selectors](#selectors)
2. [Box Model](#box-model)
3. [Flexbox](#flexbox)
4. [Grid](#grid)
5. [Animations](#animations)
6. [Transforms](#transforms)
7. [Colors & Backgrounds](#colors--backgrounds)
8. [Common Patterns](#common-patterns)
9. [Media Queries](#media-queries)

---

## Selectors
```css
.class { } #id { } element { }
[type="text"] { } [href^="https"] { }
:hover :focus :active :first-child :last-child :nth-child(2n)
::before ::after ::placeholder
div > p { } /* Direct child */ h2 + p { } /* Adjacent */
```

## Box Model
```css
.box {
    box-sizing: border-box;
    width: 300px; height: 200px;
    padding: 10px 20px; /* vertical horizontal */
    margin: 10px auto;
    border: 2px solid #333;
    border-radius: 10px;
}
```

## Flexbox
```css
.flex-container {
    display: flex;
    flex-direction: row; /* column */
    flex-wrap: wrap;
    justify-content: center; /* flex-start, flex-end, space-between */
    align-items: center; /* flex-start, flex-end, stretch */
    gap: 20px;
}
.flex-item { flex: 1; /* flex-grow flex-shrink flex-basis */ }
```

## Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 100px 200px 1fr */
    grid-template-rows: 100px auto;
    gap: 20px;
    justify-items: center;
    align-items: center;
}
.grid-item { grid-column: 1 / 3; grid-row: 2 / 4; }
```

## Animations
```css
/* Transition - smooth changes */
.transition {
    transition: all 0.3s ease-in-out;
    transition: width 0.5s, height 0.3s;
}

/* Keyframe animation */
@keyframes slideIn {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}
.animated { animation: slideIn 2s ease-in-out; }

/* Common hover effects */
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
.zoom:hover { transform: scale(1.05); }
```

## Transforms
```css
transform: translate(50px, 100px);
transform: rotate(45deg);
transform: scale(1.5);
transform: translateX(50px) rotate(45deg); /* multiple */
```

## Colors & Backgrounds
```css
color: #ff0000; /* rgb(255, 0, 0) rgba(255, 0, 0, 0.5) */

/* Background image */
background: url('image.jpg') no-repeat center / cover;

/* Gradient backgrounds */
background: linear-gradient(to right, #667eea, #764ba2);
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Common Patterns
```css
/* Card with hover */
.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}
.card:hover { transform: translateY(-5px); }

/* Centered content */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Responsive image */
img { width: 100%; height: auto; object-fit: cover; }
```

## Media Queries
```css
@media (max-width: 768px) { /* Mobile */ }
@media (min-width: 769px) { /* Desktop */ }
```