# Strategies for adopting TypeScript into a large project

## JS Docs
```js
/** @type {import('express').RequestHandler} */
const requiresAuthentication = (req, res, next) => {
   
}
```

```js
/**
 * @param {import('minisearch').default} searchEngin
 * @param {string} filename
 * @param {string} contents
 */
indexIntoSeachEngine = (searchEngin, filename, contents) => {

}
```

## jsconfig
1. ctrl + shift + p
2. typing: javascript: Go to Project Configulation
3. Right bottom right corner click "Configure jsconfig.json"

## Activate type checking
```js
// @ts-check
```

## Type Definition
```js
// @ts-check
export const registerRouteAnimation = {
   ❌ current: null
   ✔️ current: /** @type {RouteAnimation | null}  */ (null)
}

/**
 * @typedef {(next: () => void) => void} RouteAnimation
 */

/**
 * @param {RouteAnimation} fn
 */
export function requestRouteAnimation(fn) {
   registerRouteAnimation.current = fn
}
```

เวลาใช้ @ts-check คู่กับ webpack หรือ vue บลาๆๆ บางทีมันก็จะมี Error (ถ้าเอาโค้ดนี้ไป Run มันจะฟ้อง Error)
```js
// enhanceApp.js

// @ts-check
import CallToAction from "./global-components/CallToAction.vue"
import EmbedContainer from "./global-components/EmbedContainer.vue"
```

เพาะตัว TypeScript มันไม่ support module ที่ไม่ใช่ .ts .js เราอาจจะต้องสร้างไฟล์ typedef.d.ts ไว้ที่โฟลเดอร์เดียวกับ enhanceApp.js
```ts
// typedef.d.ts

declare module "*.vue"
```
เพื่อบอกว่าพวก module "*.vue" มีอยู่นะ

### Split type definition
```js
// routeAnimation.js

export const registerRouteAnimation = {
   current: null
}

export function requestRouteAnimation(fn) {
   registerRouteAnimation.current = fn
}
```

```ts
// routeAnimation.d.ts

export const registerRouteAnimation = {
   current: RouteAnimation | null
}
type RouteAnimation = (next: () => void) => void
export function requestRouteAnimation(fn: RouteAnimation): void
```

## Use TS Check all file
Add this property in "compilerOptions"
```json
"checkJS": true
```

Add this property outer "compilerOptions"
```json
"include": ["allFolderIfYouWant"],
```

If you don't want ts check some file. You can add
```js
// @ts-nocheck    # All file

// @ts-ignore     # Some line
```

Read more: [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

Reference: [dtinth](https://www.youtube.com/watch?v=xATsf5nm2yc)