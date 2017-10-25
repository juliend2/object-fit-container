# README

## Usage

### 1. Install it:

```html
<script src="js/jquery.objectFitContainer.js"></script>
```

### 2. In HTML:

```html
<div class="container">
  <img src="img/rainforest.jpg" class="some-image" />
</div>
```

### 3. In CSS:

```css
.container {
  height: 300px;
}
.some-image {
  width: 100%;
  height: 50%;
  object-fit: contain; // for browsers that support it
}
```

### 4. In JavaScript:

```javascript
$('.some-image').objectFitContainer();
```
