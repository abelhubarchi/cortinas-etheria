import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.BfNYsVIz.js","_app/immutable/chunks/DeHfu1lE.js","_app/immutable/chunks/D1hYfEew.js","_app/immutable/chunks/Bd4leeHG.js"];
export const stylesheets = ["_app/immutable/assets/3.B-xFSpoz.css"];
export const fonts = [];
