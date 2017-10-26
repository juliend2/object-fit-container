# README

## Usage

### 0. Install it:

```
npm install --save object-fit-container
```

### 1. require it:

```javascript
var objectFitContainer = require('object-fit-container');
// ...
objectFitContainer($('.some-image'));
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
