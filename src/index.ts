import ᱹ from "./dot";

Object.assign(globalThis, { ᱹ });

declare global {
  var ᱹ: typeof import("./dot").default;
}
