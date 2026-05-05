import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BR-qL9g2.js","_app/immutable/chunks/DeHfu1lE.js","_app/immutable/chunks/D1hYfEew.js","_app/immutable/chunks/Bd4leeHG.js"];
export const stylesheets = ["_app/immutable/assets/2.BU0x9wUW.css"];
export const fonts = [];
