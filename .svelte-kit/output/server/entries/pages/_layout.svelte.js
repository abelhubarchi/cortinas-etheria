import "../../chunks/dev.js";
import "../../chunks/state.js";
//#region src/routes/Header.svelte
function Header($$renderer) {
	$$renderer.push(`<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-16 px-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl border-b border-stone-200/30 dark:border-stone-800/30 svelte-vny38x"><div class="flex items-center gap-4"><button class="hover:opacity-70 transition-opacity duration-300 scale-95 transition-transform duration-200"><span class="material-symbols-outlined text-stone-900 dark:text-stone-100" data-icon="menu">menu</span></button></div> <div class="text-lg font-serif tracking-[0.2em] text-stone-900 dark:text-stone-100 uppercase" style="color: brown;">ETHERIA</div> <div class="flex items-center gap-4"><button class="hover:opacity-70 transition-opacity duration-300 scale-95 transition-transform duration-200"><span class="material-symbols-outlined text-stone-900 dark:text-stone-100" data-icon="shopping_bag">shopping_bag</span></button></div></header>`);
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $$props;
	$$renderer.push(`<div class="app svelte-12qhfyh">`);
	Header($$renderer, {});
	$$renderer.push(`<!----> <main class="svelte-12qhfyh">`);
	children($$renderer);
	$$renderer.push(`<!----></main> <footer class="bg-background text-on-surface font-body-sm text-center py-6 svelte-12qhfyh"><p>© 2024 Etheria Cortinas, La Paz el Alto.</p></footer></div>`);
}
//#endregion
export { _layout as default };
