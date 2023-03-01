#### This library is used to determine the image extension by buffer body.

```js
import getFileType from 'whobuffer';

// const buffer = web request;
// const buffer = fs.readFileSync
const fileType = getFileType(buffer);
```

### Supported Types

- bmp
- gif
- jpg,jpeg
- png
- tiff
- webp

Unkown types are returned by default with ```null```;