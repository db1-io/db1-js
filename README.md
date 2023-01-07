# db1-js

## Get Started

Install `db1`:

```text
npm install db1
```

Start setting and getting items:

```js
import db1 from "db1";

await db1.setItem("my-key", "hello word");
const item = await db1.getItem("my-key");

console.log(item);
```
