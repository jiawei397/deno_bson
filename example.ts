import * as bson from "./mod.ts";

const id = new bson.ObjectId();
console.log(id.toHexString());
console.log(id.toString());
