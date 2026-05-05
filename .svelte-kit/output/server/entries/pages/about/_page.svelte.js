import "../../../chunks/index-server.js";
import { I as attr, L as escape_html, i as ensure_array_like } from "../../../chunks/dev.js";
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let ancho = 200;
		let alto = 200;
		let doble = false;
		let cotizaciones = [];
		$: cotizaciones.reduce((a, c) => a + c.precioBase, 0);
		$: cotizaciones.reduce((a, c) => a + c.precioVenta, 0);
		$: cotizaciones.reduce((a, c) => a + c.telaCosto, 0);
		$: cotizaciones.reduce((a, c) => a + c.tuboCosto, 0);
		$: cotizaciones.reduce((a, c) => a + c.soporteCosto, 0);
		$: cotizaciones.reduce((a, c) => a + c.telaCostoVenta, 0);
		$: cotizaciones.reduce((a, c) => a + c.tuboCostoVenta, 0);
		$: cotizaciones.reduce((a, c) => a + c.soporteCostoVenta, 0);
		$$renderer.push(`<div class="container svelte-cwls5q"><h2>🧾 Cotizador Profesional</h2> <input type="number"${attr("value", ancho)} placeholder="Ancho (cm)" class="svelte-cwls5q"/> <input type="number"${attr("value", alto)} placeholder="Alto (cm)" class="svelte-cwls5q"/> <label><input type="checkbox"${attr("checked", doble, true)} class="svelte-cwls5q"/> Doble tubo / cortina</label> <button class="svelte-cwls5q">➕ Agregar cortina</button> <hr/> <h3>📦 Cortinas</h3> <div class="cards-grid svelte-cwls5q"><!--[-->`);
		const each_array = ensure_array_like(cotizaciones);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let c = each_array[index];
			$$renderer.push(`<div class="card svelte-cwls5q"><div class="card-header svelte-cwls5q"><div><p><b>${escape_html(c.ancho)} x ${escape_html(c.alto)} cm</b></p> <p>Tipo: ${escape_html(c.doble ? "🟣 Doble" : "⚪ Simple")}</p></div> <div class="card-actions svelte-cwls5q"><button type="button" class="svelte-cwls5q">🗑️</button> <button type="button" class="svelte-cwls5q">📝</button></div></div> <p class="precio svelte-cwls5q">${escape_html(c.precioVenta.toFixed(0))} Bs</p> `);
			if (c.nota) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="nota svelte-cwls5q">${escape_html(c.nota)}</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div> <button class="btn-total svelte-cwls5q">📊 Ver resumen total</button></div> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };
