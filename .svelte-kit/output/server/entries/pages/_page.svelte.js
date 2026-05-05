import { I as attr, L as escape_html, a as head, i as ensure_array_like } from "../../chunks/dev.js";
//#region src/routes/+page.svelte
function _page($$renderer) {
	const categories = [
		{
			name: "Floreado",
			fabrics: [
				{
					name: "Floreado 1",
					path: "/muestrario/FLOREADO/IMG_8146.webp"
				},
				{
					name: "Floreado 2",
					path: "/muestrario/FLOREADO/IMG_8147.webp"
				},
				{
					name: "Floreado 3",
					path: "/muestrario/FLOREADO/IMG_8148.webp"
				},
				{
					name: "Floreado 4",
					path: "/muestrario/FLOREADO/IMG_8149.webp"
				},
				{
					name: "Floreado 5",
					path: "/muestrario/FLOREADO/IMG_8150.webp"
				},
				{
					name: "Floreado 6",
					path: "/muestrario/FLOREADO/IMG_8151.webp"
				},
				{
					name: "Floreado 7",
					path: "/muestrario/FLOREADO/IMG_8152.webp"
				},
				{
					name: "Floreado 8",
					path: "/muestrario/FLOREADO/IMG_8153.webp"
				},
				{
					name: "Floreado 9",
					path: "/muestrario/FLOREADO/IMG_8154.webp"
				},
				{
					name: "Floreado 10",
					path: "/muestrario/FLOREADO/IMG_8155.webp"
				},
				{
					name: "Floreado 11",
					path: "/muestrario/FLOREADO/IMG_8156.webp"
				},
				{
					name: "Floreado 12",
					path: "/muestrario/FLOREADO/IMG_8157.webp"
				},
				{
					name: "Floreado 13",
					path: "/muestrario/FLOREADO/IMG_8158.webp"
				},
				{
					name: "Floreado 14",
					path: "/muestrario/FLOREADO/IMG_8159.webp"
				},
				{
					name: "Floreado 15",
					path: "/muestrario/FLOREADO/IMG_8160.webp"
				}
			],
			expanded: false
		},
		{
			name: "Mil Rayas",
			fabrics: [
				{
					name: "Mil Rayas 1",
					path: "/muestrario/MILRAYAS/IMG_8124.webp"
				},
				{
					name: "Mil Rayas 2",
					path: "/muestrario/MILRAYAS/IMG_8125.webp"
				},
				{
					name: "Mil Rayas 3",
					path: "/muestrario/MILRAYAS/IMG_8126.webp"
				},
				{
					name: "Mil Rayas 4",
					path: "/muestrario/MILRAYAS/IMG_8127.webp"
				},
				{
					name: "Mil Rayas 5",
					path: "/muestrario/MILRAYAS/IMG_8128.webp"
				},
				{
					name: "Mil Rayas 6",
					path: "/muestrario/MILRAYAS/IMG_8129.webp"
				},
				{
					name: "Mil Rayas 7",
					path: "/muestrario/MILRAYAS/IMG_8130.webp"
				},
				{
					name: "Mil Rayas 8",
					path: "/muestrario/MILRAYAS/IMG_8131.webp"
				},
				{
					name: "Mil Rayas 9",
					path: "/muestrario/MILRAYAS/IMG_8132.webp"
				},
				{
					name: "Mil Rayas 10",
					path: "/muestrario/MILRAYAS/IMG_8133.webp"
				},
				{
					name: "Mil Rayas 11",
					path: "/muestrario/MILRAYAS/IMG_8134.webp"
				},
				{
					name: "Mil Rayas 12",
					path: "/muestrario/MILRAYAS/IMG_8135.webp"
				},
				{
					name: "Mil Rayas 13",
					path: "/muestrario/MILRAYAS/IMG_8136.webp"
				},
				{
					name: "Mil Rayas 14",
					path: "/muestrario/MILRAYAS/IMG_8137.webp"
				},
				{
					name: "Mil Rayas 15",
					path: "/muestrario/MILRAYAS/IMG_8138.webp"
				},
				{
					name: "Mil Rayas 16",
					path: "/muestrario/MILRAYAS/IMG_8139.webp"
				},
				{
					name: "Mil Rayas 17",
					path: "/muestrario/MILRAYAS/IMG_8140.webp"
				},
				{
					name: "Mil Rayas 18",
					path: "/muestrario/MILRAYAS/IMG_8141.webp"
				},
				{
					name: "Mil Rayas 19",
					path: "/muestrario/MILRAYAS/IMG_8142.webp"
				},
				{
					name: "Mil Rayas 20",
					path: "/muestrario/MILRAYAS/IMG_8143.webp"
				},
				{
					name: "Mil Rayas 21",
					path: "/muestrario/MILRAYAS/IMG_8144.webp"
				},
				{
					name: "Mil Rayas 22",
					path: "/muestrario/MILRAYAS/IMG_8145.webp"
				}
			],
			expanded: false
		},
		{
			name: "Rústico",
			fabrics: [
				{
					name: "Rústico 1",
					path: "/muestrario/RUSTICO/IMG_8105.webp"
				},
				{
					name: "Rústico 2",
					path: "/muestrario/RUSTICO/IMG_8106.webp"
				},
				{
					name: "Rústico 3",
					path: "/muestrario/RUSTICO/IMG_8107.webp"
				},
				{
					name: "Rústico 4",
					path: "/muestrario/RUSTICO/IMG_8108.webp"
				},
				{
					name: "Rústico 5",
					path: "/muestrario/RUSTICO/IMG_8109.webp"
				},
				{
					name: "Rústico 6",
					path: "/muestrario/RUSTICO/IMG_8110.webp"
				},
				{
					name: "Rústico 7",
					path: "/muestrario/RUSTICO/IMG_8111.webp"
				},
				{
					name: "Rústico 8",
					path: "/muestrario/RUSTICO/IMG_8112.webp"
				},
				{
					name: "Rústico 9",
					path: "/muestrario/RUSTICO/IMG_8113.webp"
				},
				{
					name: "Rústico 10",
					path: "/muestrario/RUSTICO/IMG_8114.webp"
				},
				{
					name: "Rústico 11",
					path: "/muestrario/RUSTICO/IMG_8115.webp"
				},
				{
					name: "Rústico 12",
					path: "/muestrario/RUSTICO/IMG_8116.webp"
				},
				{
					name: "Rústico 13",
					path: "/muestrario/RUSTICO/IMG_8117.webp"
				},
				{
					name: "Rústico 14",
					path: "/muestrario/RUSTICO/IMG_8118.webp"
				},
				{
					name: "Rústico 15",
					path: "/muestrario/RUSTICO/IMG_8119.webp"
				},
				{
					name: "Rústico 16",
					path: "/muestrario/RUSTICO/IMG_8120.webp"
				},
				{
					name: "Rústico 17",
					path: "/muestrario/RUSTICO/IMG_8121.webp"
				},
				{
					name: "Rústico 18",
					path: "/muestrario/RUSTICO/IMG_8122.webp"
				},
				{
					name: "Rústico 19",
					path: "/muestrario/RUSTICO/IMG_8123.webp"
				}
			],
			expanded: false
		},
		{
			name: "Rústico 2",
			fabrics: [
				{
					name: "Rústico 2 - 1",
					path: "/muestrario/RUSTICO2/IMG_8164.webp"
				},
				{
					name: "Rústico 2 - 2",
					path: "/muestrario/RUSTICO2/IMG_8165.webp"
				},
				{
					name: "Rústico 2 - 3",
					path: "/muestrario/RUSTICO2/IMG_8166.webp"
				},
				{
					name: "Rústico 2 - 4",
					path: "/muestrario/RUSTICO2/IMG_8167.webp"
				},
				{
					name: "Rústico 2 - 5",
					path: "/muestrario/RUSTICO2/IMG_8168.webp"
				},
				{
					name: "Rústico 2 - 6",
					path: "/muestrario/RUSTICO2/IMG_8169.webp"
				},
				{
					name: "Rústico 2 - 7",
					path: "/muestrario/RUSTICO2/IMG_8170.webp"
				},
				{
					name: "Rústico 2 - 8",
					path: "/muestrario/RUSTICO2/IMG_8171.webp"
				},
				{
					name: "Rústico 2 - 9",
					path: "/muestrario/RUSTICO2/IMG_8172.webp"
				},
				{
					name: "Rústico 2 - 10",
					path: "/muestrario/RUSTICO2/IMG_8173.webp"
				},
				{
					name: "Rústico 2 - 11",
					path: "/muestrario/RUSTICO2/IMG_8174.webp"
				},
				{
					name: "Rústico 2 - 12",
					path: "/muestrario/RUSTICO2/IMG_8175.webp"
				},
				{
					name: "Rústico 2 - 13",
					path: "/muestrario/RUSTICO2/IMG_8176.webp"
				},
				{
					name: "Rústico 2 - 14",
					path: "/muestrario/RUSTICO2/IMG_8177.webp"
				},
				{
					name: "Rústico 2 - 15",
					path: "/muestrario/RUSTICO2/IMG_8178.webp"
				},
				{
					name: "Rústico 2 - 16",
					path: "/muestrario/RUSTICO2/IMG_8179.webp"
				},
				{
					name: "Rústico 2 - 17",
					path: "/muestrario/RUSTICO2/IMG_8181.webp"
				},
				{
					name: "Rústico 2 - 18",
					path: "/muestrario/RUSTICO2/IMG_8182.webp"
				},
				{
					name: "Rústico 2 - 19",
					path: "/muestrario/RUSTICO2/IMG_8183.webp"
				},
				{
					name: "Rústico 2 - 20",
					path: "/muestrario/RUSTICO2/IMG_8184.webp"
				},
				{
					name: "Rústico 2 - 21",
					path: "/muestrario/RUSTICO2/IMG_8185.webp"
				},
				{
					name: "Rústico 2 - 22",
					path: "/muestrario/RUSTICO2/IMG_8186.webp"
				},
				{
					name: "Rústico 2 - 23",
					path: "/muestrario/RUSTICO2/IMG_8187.webp"
				},
				{
					name: "Rústico 2 - 24",
					path: "/muestrario/RUSTICO2/IMG_8188.webp"
				},
				{
					name: "Rústico 2 - 25",
					path: "/muestrario/RUSTICO2/IMG_8189.webp"
				},
				{
					name: "Rústico 2 - 26",
					path: "/muestrario/RUSTICO2/IMG_8190.webp"
				}
			],
			expanded: false
		}
	];
	function getVisibleFabrics(categoryIndex) {
		const category = categories[categoryIndex];
		return category.expanded ? category.fabrics : category.fabrics.slice(0, 3);
	}
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Catálogo de Cortinas</title>`);
		});
		$$renderer.push(`<meta name="description" content="Catálogo de cortinas innovadoras" class="svelte-1uha8ag"/>`);
	});
	$$renderer.push(`<main class="bg-background text-on-surface font-body-md antialiased svelte-1uha8ag"><main class="pt-24 pb-32 max-w-[1440px] mx-auto px-6 md:px-20 lg:px-[80px] min-h-[calc(100vh-144px)] flex flex-col justify-center svelte-1uha8ag"><section class="bg-transparent py-12 md:py-20 px-0 svelte-1uha8ag"><div class="flex flex-col items-center text-center mb-16 gap-6 svelte-1uha8ag"><div class="max-w-2xl svelte-1uha8ag"><p class="font-label-caps text-label-caps text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-delay-1 svelte-1uha8ag">CORTINAS Y PERSIANAS <br class="svelte-1uha8ag"/> LA PAZ - BOLIVIA</p> <h1 class="font-display-xl text-display-xl text-on-surface mb-6 animate-fade-in-delay-2 svelte-1uha8ag">MUESTRA DE COLORES</h1> <p class="font-body-lg text-body-lg text-on-surface-variant animate-fade-in-delay-3 svelte-1uha8ag" style="color: green; text-wrap: 20px">POR LA COMPRA DE CADA CORTINA TE REGALAREMOS LOS CINTURONES PARA CADA CORTINA, PROMOCION HASTA EL 10 DE MAYO. <br class="svelte-1uha8ag"/> ENVIOS A TODA BOLIVIA</p></div></div> <!--[-->`);
	const each_array = ensure_array_like(categories);
	for (let categoryIndex = 0, $$length = each_array.length; categoryIndex < $$length; categoryIndex++) {
		let category = each_array[categoryIndex];
		$$renderer.push(`<section class="category-section py-16 md:py-24 px-0 animate-fade-in-up svelte-1uha8ag"><div class="mb-12 text-left svelte-1uha8ag"><h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-2 category-title svelte-1uha8ag">${escape_html(category.name)}</h2> <div class="h-1 w-20 bg-primary rounded-full svelte-1uha8ag"></div></div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 svelte-1uha8ag"><!--[-->`);
		const each_array_1 = ensure_array_like(getVisibleFabrics(categoryIndex));
		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let fabric = each_array_1[i];
			$$renderer.push(`<div class="text-center group stagger-item svelte-1uha8ag"><div class="relative mb-4 svelte-1uha8ag"><div class="aspect-square rounded-lg overflow-hidden border-2 border-primary border-opacity-20 group-hover:border-primary group-hover:border-opacity-100 transition-all duration-500 shadow-md group-hover:shadow-2xl cursor-pointer image-container svelte-1uha8ag"><img${attr("alt", fabric.name)} class="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500 group-hover:scale-110 svelte-1uha8ag"${attr("src", fabric.path)} loading="lazy"/></div></div> <span class="font-label-caps text-xs tracking-widest uppercase text-on-surface-variant block mt-3 group-hover:text-primary transition-colors svelte-1uha8ag">${escape_html(fabric.name)}</span></div>`);
		}
		$$renderer.push(`<!--]--></div> `);
		if (category.fabrics.length > 3) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="mt-12 flex justify-center svelte-1uha8ag"><button class="ver-mas-button px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg svelte-1uha8ag">${escape_html(category.expanded ? "- Ver Menos" : "+ Ver Más")}</button></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></section>`);
	}
	$$renderer.push(`<!--]--> <section class="py-12 md:py-20 px-0 svelte-1uha8ag"><div class="flex gap-4 svelte-1uha8ag"><button class="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity svelte-1uha8ag">iR A WHATSAPP</button></div></section></section></main></main> `);
	$$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
export { _page as default };
