# db1-js

## Get Started

Install `db1`:

```text
npm install db1
```

Start setting and getting items:

```js
import { db1 } from "db1";

async function main() {
  await db1.setItem("topic", "hello world");
  const item = await db1.getItem("topic");
  console.log(item);
}

main();
```
