<script>
	import { onMount } from 'svelte';

	let ancho = 200;
	let alto = 200;
	let doble = false;

	let cotizaciones = [];
	let seleccionada = null;
	let mostrarTotal = false;
	let ajuste = 0;

	// Precios por defecto
	let PRECIOSBASE = {
		tela: 45,
		tubo: 15,
		soporteSimple: 24,
		soporteDoble: 45,
		argolla: 0.8,
		tira: 1
	};

	let PRECIOSFINAL = {
		tela: 45,
		tubo: 35,
		soporteSimple: 50,
		soporteDoble: 80,
		argolla: 1,
		tira: 1
	};

	// Cargar precios desde localStorage
	onMount(() => {
		const savedMateriales = localStorage.getItem('preciosMateriales');
		if (savedMateriales) {
			const materiales = JSON.parse(savedMateriales);
			PRECIOSBASE = {
				tela: materiales.tela?.base || PRECIOSBASE.tela,
				tubo: materiales.tubo?.base || PRECIOSBASE.tubo,
				soporteSimple: materiales.soporteSimple?.base || PRECIOSBASE.soporteSimple,
				soporteDoble: materiales.soporteDoble?.base || PRECIOSBASE.soporteDoble,
				argolla: materiales.argolla?.base || PRECIOSBASE.argolla,
				tira: materiales.tira?.base || PRECIOSBASE.tira
			};

			PRECIOSFINAL = {
				tela: materiales.tela?.final || PRECIOSFINAL.tela,
				tubo: materiales.tubo?.final || PRECIOSFINAL.tubo,
				soporteSimple: materiales.soporteSimple?.final || PRECIOSFINAL.soporteSimple,
				soporteDoble: materiales.soporteDoble?.final || PRECIOSFINAL.soporteDoble,
				argolla: materiales.argolla?.final || PRECIOSFINAL.argolla,
				tira: materiales.tira?.final || PRECIOSFINAL.tira
			};
		}
	});

	function calcular(anchoParam = ancho, altoParam = alto, dobleParam = doble) {
		const anchoM = anchoParam / 100;
		const multiplier = dobleParam ? 2 : 1;
		const anchoMRedondeado = Math.ceil(anchoM * 2) / 2;

		// 📊 COSTOS BASE (cortina simple)
		const telaBase = anchoMRedondeado * 1.5 * PRECIOSBASE.tela;
		const tuboBase = anchoMRedondeado * PRECIOSBASE.tubo;
		const soporteBase = PRECIOSBASE.soporteSimple;
		
		// 💵 COSTOS VENTA (cortina simple)
		const telaVenta = anchoMRedondeado * 100;
		const tuboVenta = anchoMRedondeado * PRECIOSFINAL.tubo;
		const soporteVenta = PRECIOSFINAL.soporteSimple;
		
		// Metros redondeados para cotización
		const telaMetrosCalculados = anchoMRedondeado * multiplier;

		const precioBase = (telaBase + tuboBase + soporteBase) * multiplier;
		const precioVenta = (telaVenta + tuboVenta + soporteVenta) * multiplier;

		return {
			ancho: anchoParam,
			alto: altoParam,
			doble: dobleParam,
			anchoMRedondeado,
			telaMetros: telaMetrosCalculados,
			tuboMetros: anchoMRedondeado * multiplier,
			telaCosto: telaBase * multiplier,
			tuboCosto: tuboBase * multiplier,
			soporteCosto: soporteBase * multiplier,
			telaCostoVenta: telaVenta * multiplier,
			tuboCostoVenta: tuboVenta * multiplier,
			soporteCostoVenta: soporteVenta * multiplier,
			nota: '',
			precioBase,
			precioVenta
		};
	}

	function agregarCotizacion() {
		cotizaciones = [...cotizaciones, calcular()];
	}

	function seleccionar(c) {
		seleccionada = c;
	}

	function eliminarCotizacion(index) {
		cotizaciones = cotizaciones.filter((_, i) => i !== index);
		if (seleccionada && cotizaciones.indexOf(seleccionada) === -1) {
			seleccionada = null;
		}
	}

	// 🔥 TOTALES GENERALES
	$: totalBase = cotizaciones.reduce((a, c) => a + c.precioBase, 0);
	$: totalVenta = cotizaciones.reduce((a, c) => a + c.precioVenta, 0);

	// 🔥 TOTALES POR CATEGORÍA BASE
	$: totalTelaBase = cotizaciones.reduce((a, c) => a + c.telaCosto, 0);
	$: totalTuboBase = cotizaciones.reduce((a, c) => a + c.tuboCosto, 0);
	$: totalSoporteBase = cotizaciones.reduce((a, c) => a + c.soporteCosto, 0);

	// 🔥 TOTALES POR CATEGORÍA VENTA
	$: totalTelaVenta = cotizaciones.reduce((a, c) => a + c.telaCostoVenta, 0);
	$: totalTuboVenta = cotizaciones.reduce((a, c) => a + c.tuboCostoVenta, 0);
	$: totalSoporteVenta = cotizaciones.reduce((a, c) => a + c.soporteCostoVenta, 0);
</script>

<div class="container">

	<h2>🧾 Cotizador Profesional</h2>

	<input type="number" bind:value={ancho} placeholder="Ancho (cm)" />
	<input type="number" bind:value={alto} placeholder="Alto (cm)" />

	<label>
		<input type="checkbox" bind:checked={doble} />
		Doble tubo / cortina
	</label>

	<button on:click={agregarCotizacion}>➕ Agregar cortina</button>

	<hr />

	<h3>📦 Cortinas</h3>

	<div class="cards-grid">
		{#each cotizaciones as c, index}
			<div class="card" on:click={() => seleccionar(c)}>
				<div class="card-header">
					<div>
						<p><b>{c.ancho} x {c.alto} cm</b></p>
						<p>Tipo: {c.doble ? "🟣 Doble" : "⚪ Simple"}</p>
					</div>
					<div class="card-actions">
						<button type="button" on:click|stopPropagation={() => eliminarCotizacion(index)}>🗑️</button>
						<button type="button" on:click|stopPropagation={() => seleccionar(c)}>📝</button>
					</div>
				</div>
				<p class="precio">{c.precioVenta.toFixed(0)} Bs</p>
				{#if c.nota}
					<p class="nota">{c.nota}</p>
				{/if}
			</div>
		{/each}
	</div>

	<button class="btn-total" on:click={() => mostrarTotal = true}>
		📊 Ver resumen total
	</button>
</div>

<!-- 🔍 MODAL DETALLE -->
{#if seleccionada}
<div class="overlay" on:click={() => seleccionada = null}>
	<div class="modal" on:click|stopPropagation>

		<h3>Detalle de cortina</h3>

		<p><b>{seleccionada.ancho} x {seleccionada.alto} cm</b></p>
		<p>Tipo: {seleccionada.doble ? "Doble" : "Simple"}</p>

		<hr />

		<p>📏 Ancho: {seleccionada.ancho / 100} metros</p>
		<p>📐 Ancho cotizado: {seleccionada.anchoMRedondeado.toFixed(2)} metros</p>
		<p>🧾 Metros de tela: {seleccionada.telaMetros.toFixed(2)} m</p>
		
		<h4>Detalles de costos</h4>
		<p>🧵 Tela</p>
		<p style="margin-left: 10px; font-size: 0.9em;">Base: {seleccionada.telaCosto.toFixed(2)} | Venta: {seleccionada.telaCostoVenta.toFixed(2)} Bs</p>
		
		<p>🪛 Tubo</p>
		<p style="margin-left: 10px; font-size: 0.9em;">Base: {seleccionada.tuboCosto.toFixed(2)} | Venta: {seleccionada.tuboCostoVenta.toFixed(2)} Bs</p>
		
		<p>🔩 Soportes</p>
		<p style="margin-left: 10px; font-size: 0.9em;">Base: {seleccionada.soporteCosto.toFixed(2)} | Venta: {seleccionada.soporteCostoVenta.toFixed(2)} Bs</p>

		<hr />

		<p>💰 <b>Base total:</b> {seleccionada.precioBase.toFixed(2)} Bs</p>
		<p class="precio"><b>Venta total:</b> {seleccionada.precioVenta.toFixed(2)} Bs</p>

		<label for="nota"><b>Nota:</b></label>
		<textarea id="nota" bind:value={seleccionada.nota} rows="3" placeholder="Agregar nota"></textarea>

		<button on:click={() => seleccionada = null}>❌ Cerrar</button>

	</div>
</div>
{/if}

<!-- 📊 MODAL TOTAL -->
{#if mostrarTotal}
<div class="overlay" on:click={() => mostrarTotal = false}>
	<div class="modal" on:click|stopPropagation>

		<h3>📊 Resumen total</h3>

		<p><b>💰 General</b></p>
		<p>Base: {totalBase.toFixed(2)} Bs</p>
		<p class="precio">Venta: {totalVenta.toFixed(2)} Bs</p>

		<form class="ajuste-form" on:submit|preventDefault={() => {}}>
			<label for="ajuste">Agregar Bs al total</label>
			<div class="ajuste-row">
				<input id="ajuste" type="number" bind:value={ajuste} min="0" step="0.01" />
				<button type="button" on:click={() => ajuste = Number(ajuste) || 0}>Aplicar</button>
			</div>
		</form>
		<p class="precio">Venta ajustada: {(totalVenta + Number(ajuste || 0)).toFixed(2)} Bs</p>

		<hr />

		<p>💰 Precio tela por metro: 100 Bs</p>
		<p>{(() => {
			const totalMetrosCalc = cotizaciones.reduce((a, c) => a + c.telaMetros, 0);
			const totalMetrosRedond = Math.ceil(totalMetrosCalc);
			const metrosExtrasTotal = totalMetrosRedond - totalMetrosCalc;
			return `📏 Total metros calculados: ${totalMetrosCalc.toFixed(1)} m`;
		})()}</p>
		<p>{(() => {
			const totalMetrosCalc = cotizaciones.reduce((a, c) => a + c.telaMetros, 0);
			const totalMetrosRedond = Math.ceil(totalMetrosCalc);
			const metrosExtrasTotal = totalMetrosRedond - totalMetrosCalc;
			return `📏 Total metros a comprar: ${totalMetrosRedond} m`;
		})()}</p>
		<p>{(() => {
			const totalMetrosCalc = cotizaciones.reduce((a, c) => a + c.telaMetros, 0);
			const totalMetrosRedond = Math.ceil(totalMetrosCalc);
			const metrosExtrasTotal = totalMetrosRedond - totalMetrosCalc;
			return metrosExtrasTotal > 0.01 ? `⚠️ Metros extras: ${metrosExtrasTotal.toFixed(2)} m` : '';
		})()}</p>
		
		<h4>🧵 Tela</h4>
		<p>Base: {totalTelaBase.toFixed(2)} Bs</p>
		<p>Venta: {totalTelaVenta.toFixed(2)} Bs</p>
		
		<h4>🪛 Tubos</h4>
		<p>Base: {totalTuboBase.toFixed(2)} Bs</p>
		<p>Venta: {totalTuboVenta.toFixed(2)} Bs</p>
		
		<h4>🔩 Soportes</h4>
		<p>Base: {totalSoporteBase.toFixed(2)} Bs</p>
		<p>Venta: {totalSoporteVenta.toFixed(2)} Bs</p>

		<button on:click={() => mostrarTotal = false}>❌ Cerrar</button>

	</div>
</div>
{/if}

<style>
	.container {
		max-width: 960px;
		margin: auto;
		font-family: sans-serif;
		padding: 15px;
	}

	input,
	textarea {
		display: block;
		margin: 5px 0;
		padding: 8px;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 6px;
	}

	button {
		margin-top: 10px;
		padding: 10px 12px;
		cursor: pointer;
		border: none;
		border-radius: 6px;
		background: #444;
		color: white;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 12px;
		margin-top: 10px;
	}

	.card {
		border: 1px solid #ccc;
		padding: 12px;
		border-radius: 12px;
		cursor: pointer;
		transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.card:hover {
		background-color: #f7f7f7;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
		transform: translateY(-1px);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		align-items: start;
	}

	.card-actions {
		display: flex;
		gap: 6px;
	}

	.card-actions button {
		background: #e0e0e0;
		color: #333;
		padding: 6px 10px;
		font-size: 0.9rem;
	}

	.card-actions button:hover {
		background: #d0d0d0;
	}

	.nota {
		font-size: 0.9rem;
		color: #555;
		background: #fafafa;
		padding: 8px;
		border-radius: 8px;
		border: 1px solid #eee;
	}

	.precio {
		color: green;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.ajuste-form {
		margin: 12px 0;
	}

	.ajuste-row {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.ajuste-row input {
		flex: 1;
	}

	.ajuste-row button {
		flex: 0 0 auto;
		background: #2d6cdf;
		color: white;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.6);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: white;
		padding: 20px;
		border-radius: 10px;
		width: 320px;
		max-height: 80vh;
		overflow-y: auto;
	}

	.btn-total {
		background: black;
		color: white;
		width: 100%;
	}
</style>