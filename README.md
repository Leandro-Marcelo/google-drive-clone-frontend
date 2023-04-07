Componentes dibujados

https://excalidraw.com/#json=jvdI2KNI5oxF8dONowAx9,iPZLCF0Cer9pSSKLCLRs0Q

.env # loaded in all cases
.env.local # loaded in all cases, ignored by git
.env.[mode] # only loaded in specified mode
.env.[mode].local # only loaded in specified mode, ignored by git

.env.example # uploaded in git repo for if you want to share your project with others

When building for production:

```TypeScript
export const REST_API = import.meta.env.VITE_REST_API // https://example.com/api
export const MODE = import.meta.env.MODE // production (str)
export const DEV = import.meta.env.DEV // false (bool)
export const PROD = import.meta.env.PROD // true (bool)
```

When run with `npm run dev`:

```TypeScript
export const REST_API = import.meta.env.VITE_REST_API // http://localhost:4000
export const MODE = import.meta.env.MODE // development (str)
export const DEV = import.meta.env.DEV // true (bool)
export const PROD = import.meta.env.PROD // false (bool)
```
