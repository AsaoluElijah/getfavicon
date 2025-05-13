# 📦 `getfavicon`

A simple utility to fetch favicons in both Node.js and browser environments. Automatically handles redirects, provides fallback support, and only returns valid image responses.

## Install

```bash
npm install @asaoluelijah/getfavicon
```

## Usage

### Basic Usage

```javascript
import { getFavicon } from '@asaoluelijah/getfavicon';

const domain = 'example.com';
const fallback = '/images/default-favicon.png';

const faviconUrl = await getFavicon(domain, fallback);

console.log('Favicon URL:', faviconUrl);
```

### (Optional) Save to Disk

In Node.js, you can provide an output path to download the .ico file:

```javascript
import { getFavicon } from '@asaoluelijah/getfavicon';

const path = await getFavicon('example.com', 'fallback.png', './favicon.ico');
console.log('Favicon saved at:', path);
```

### Browser Usage (no bundler)

```html
<script src="https://unpkg.com/@asaoluelijah/getfavicon/dist/index.umd.js"></script>
<script>
  GetFavicon.getFavicon('example.com', '/fallback.png').then(function(url) {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  });
</script>
```

## Examples

See /examples for more examples.

## Features

- Follows redirects (e.g. domain → www.domain)
- Only returns valid image responses
- Fallback if no favicon found
- No dependencies
- Works in browser + Node
- Optional file saving in Node

## License

MIT
