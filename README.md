# deno_bson

Forked from **[npm package bson v4.5.3](https://www.npmjs.com/package/bson)**,
now support for Deno.

You can you like this:

```ts
import * as bson from "https://deno.land/x/deno_bson@v0.0.1/mod.ts";

console.log(new bson.ObjectId().toHexString()); // 6168f35c2aceb9b2e35b8093
```
