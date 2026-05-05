import "../../../chunks/index-server.js";
import { I as attr, L as escape_html, a as head, i as ensure_array_like, n as attr_class } from "../../../chunks/dev.js";
//#region src/routes/config-precios/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let tab = "materiales";
		let productos = [];
		let formData = {
			nombre: "",
			precioBase: "",
			precioFinal: ""
		};
		let preciosMateriales = {
			tela: {
				base: 45,
				final: 45
			},
			tubo: {
				base: 15,
				final: 35
			},
			soporteSimple: {
				base: 24,
				final: 50
			},
			soporteDoble: {
				base: 45,
				final: 80
			},
			argolla: {
				base: .8,
				final: 1
			},
			tira: {
				base: 1,
				final: 1
			}
		};
		function calcularMargen(base, final) {
			if (base === 0) return 0;
			return ((final - base) / base * 100).toFixed(2);
		}
		head("f5yffx", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Configuración de Precios</title>`);
			});
		});
		$$renderer.push(`<div class="container svelte-f5yffx"><h1 class="svelte-f5yffx">⚙️ Configuración de Precios</h1> <div class="tabs svelte-f5yffx"><button${attr_class("tab-btn svelte-f5yffx", void 0, { "active": tab === "materiales" })}>🧵 Precios de Materiales</button> <button${attr_class("tab-btn svelte-f5yffx", void 0, { "active": tab === "productos" })}>📦 Productos Personalizados</button></div> `);
		if (tab === "materiales") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="tab-content svelte-f5yffx"><h2 class="svelte-f5yffx">Precios de Materiales Base y Final</h2> <p class="info svelte-f5yffx">Configura aquí los precios base (costo) y final (venta) para cada material.</p> <div class="materiales-grid svelte-f5yffx"><!--[-->`);
			const each_array = ensure_array_like(Object.entries(preciosMateriales));
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let [tipo, precios] = each_array[$$index];
				$$renderer.push(`<div class="material-card svelte-f5yffx"><h3 class="svelte-f5yffx">${escape_html(tipo.replace(/([A-Z])/g, " $1").trim())}</h3> <div class="material-inputs svelte-f5yffx"><div class="input-group svelte-f5yffx"><label class="svelte-f5yffx">Precio Base ($)</label> <input type="number" step="0.01"${attr("value", precios.base)} class="svelte-f5yffx"/> <small class="svelte-f5yffx">Costo</small></div> <div class="input-group svelte-f5yffx"><label class="svelte-f5yffx">Precio Final ($)</label> <input type="number" step="0.01"${attr("value", precios.final)} class="svelte-f5yffx"/> <small class="svelte-f5yffx">Venta</small></div></div> <div class="margen-info svelte-f5yffx">📊 Margen: <strong class="svelte-f5yffx">${escape_html(calcularMargen(precios.base, precios.final))}%</strong></div></div>`);
			}
			$$renderer.push(`<!--]--></div> <div class="export-info svelte-f5yffx"><p class="svelte-f5yffx">✅ Los cambios se guardan automáticamente</p> <p class="svelte-f5yffx">📱 El cotizador usará estos precios automáticamente</p></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (tab === "productos") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="tab-content svelte-f5yffx"><div class="content-grid svelte-f5yffx"><div class="formulario-section svelte-f5yffx"><h2 class="svelte-f5yffx">${escape_html("Agregar Nuevo Producto")}</h2> <form><div class="form-group svelte-f5yffx"><label for="nombre" class="svelte-f5yffx">Nombre del Producto</label> <input id="nombre" type="text"${attr("value", formData.nombre)} placeholder="Ej: Soporte tipo A" class="svelte-f5yffx"/></div> <div class="form-group svelte-f5yffx"><label for="precioBase" class="svelte-f5yffx">Precio Base ($)</label> <input id="precioBase" type="number" step="0.01"${attr("value", formData.precioBase)} placeholder="0.00" class="svelte-f5yffx"/></div> <div class="form-group svelte-f5yffx"><label for="precioFinal" class="svelte-f5yffx">Precio Final ($)</label> <input id="precioFinal" type="number" step="0.01"${attr("value", formData.precioFinal)} placeholder="0.00" class="svelte-f5yffx"/></div> <div class="form-actions svelte-f5yffx"><button type="submit" class="btn btn-primary svelte-f5yffx">${escape_html("Agregar")}</button> `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div></form></div> <div class="tabla-section svelte-f5yffx"><h2 class="svelte-f5yffx">Productos Configurados</h2> `);
			if (productos.length === 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p class="no-data svelte-f5yffx">No hay productos configurados aún</p>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<div class="tabla-responsive svelte-f5yffx"><table class="svelte-f5yffx"><thead class="svelte-f5yffx"><tr><th class="svelte-f5yffx">Producto</th><th class="svelte-f5yffx">Precio Base</th><th class="svelte-f5yffx">Precio Final</th><th class="svelte-f5yffx">Margen (%)</th><th class="svelte-f5yffx">Acciones</th></tr></thead><tbody class="svelte-f5yffx"><!--[-->`);
				const each_array_1 = ensure_array_like(productos);
				for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
					let producto = each_array_1[$$index_1];
					$$renderer.push(`<tr class="svelte-f5yffx"><td class="svelte-f5yffx">${escape_html(producto.nombre)}</td><td class="precio svelte-f5yffx">$${escape_html(producto.precioBase.toFixed(2))}</td><td class="precio svelte-f5yffx">$${escape_html(producto.precioFinal.toFixed(2))}</td><td class="margen svelte-f5yffx"><span class="margen-badge svelte-f5yffx">${escape_html(calcularMargen(producto.precioBase, producto.precioFinal))}%</span></td><td class="acciones svelte-f5yffx"><button class="btn-icon btn-edit svelte-f5yffx" title="Editar">✏️</button> <button class="btn-icon btn-delete svelte-f5yffx" title="Eliminar">🗑️</button></td></tr>`);
				}
				$$renderer.push(`<!--]--></tbody></table></div>`);
			}
			$$renderer.push(`<!--]--></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	});
}
//#endregion
export { _page as default };
