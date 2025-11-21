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

/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
.fade-in { animation: fadeIn 1s ease-in; }

/* Slide Up */
@keyframes slideUp {
    0% { transform: translateY(100px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}
.slide-up { animation: slideUp 0.8s ease-out; }

/* Bounce */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-30px); }
    60% { transform: translateY(-15px); }
}
.bounce { animation: bounce 2s infinite; }

/* Pulse */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
.pulse { animation: pulse 1.5s ease-in-out infinite; }

/* Rotate */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.rotate { animation: rotate 2s linear infinite; }

/* Shake */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}
.shake { animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; }

/* Flip */
@keyframes flip {
    0% { transform: perspective(400px) rotateY(0); }
    100% { transform: perspective(400px) rotateY(360deg); }
}
.flip { animation: flip 1s ease-in-out; }

/* Zoom In */
@keyframes zoomIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
.zoom-in { animation: zoomIn 0.5s ease-out; }

/* Fade In Down */
@keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
}
.fade-in-down { animation: fadeInDown 0.6s ease-out; }

/* Loading Spinner */
@keyframes spin {
    to { transform: rotate(360deg); }
}
.spinner {
    border: 4px solid rgba(0,0,0,0.1);
    border-top-color: #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

/* Typing Effect */
@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}
@keyframes blink {
    50% { border-color: transparent; }
}
.typing {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid;
    animation: typing 3.5s steps(40) 1s forwards,
               blink 0.75s step-end infinite;
}

/* Common hover effects */
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
.zoom:hover { transform: scale(1.05); }
.glow:hover { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }

/* Animation properties */
.custom-animation {
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-in-out; /* linear, ease, ease-in, ease-out, cubic-bezier() */
    animation-delay: 0.5s;
    animation-iteration-count: infinite; /* 1, 2, infinite */
    animation-direction: alternate; /* normal, reverse, alternate, alternate-reverse */
    animation-fill-mode: forwards; /* none, forwards, backwards, both */
    animation-play-state: running; /* running, paused */
}
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