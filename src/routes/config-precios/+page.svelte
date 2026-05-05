<script>
	import { onMount } from 'svelte';

	let tab = 'materiales'; // 'materiales' o 'productos'
	let productos = [];
	let editingId = null;
	let formData = {
		nombre: '',
		precioBase: '',
		precioFinal: ''
	};

	// Precios de materiales
	let preciosMateriales = {
		tela: { base: 45, final: 45 },
		tubo: { base: 15, final: 35 },
		soporteSimple: { base: 24, final: 50 },
		soporteDoble: { base: 45, final: 80 },
		argolla: { base: 0.8, final: 1 },
		tira: { base: 1, final: 1 }
	};

	// Cargar datos del localStorage
	onMount(() => {
		const savedProductos = localStorage.getItem('productos');
		if (savedProductos) {
			productos = JSON.parse(savedProductos);
		}

		const savedMateriales = localStorage.getItem('preciosMateriales');
		if (savedMateriales) {
			preciosMateriales = JSON.parse(savedMateriales);
		}
	});

	// Guardar productos en localStorage
	function guardarProductos() {
		localStorage.setItem('productos', JSON.stringify(productos));
	}

	// Guardar precios de materiales
	function guardarMateriales() {
		localStorage.setItem('preciosMateriales', JSON.stringify(preciosMateriales));
	}

	// Agregar o actualizar producto
	function handleSubmit() {
		if (!formData.nombre || !formData.precioBase || !formData.precioFinal) {
			alert('Por favor completa todos los campos');
			return;
		}

		if (editingId !== null) {
			// Actualizar
			const index = productos.findIndex(p => p.id === editingId);
			if (index !== -1) {
				productos[index] = {
					...formData,
					id: editingId,
					precioBase: parseFloat(formData.precioBase),
					precioFinal: parseFloat(formData.precioFinal)
				};
				productos = productos;
			}
			editingId = null;
		} else {
			// Agregar nuevo
			productos = [
				...productos,
				{
					id: Date.now(),
					nombre: formData.nombre,
					precioBase: parseFloat(formData.precioBase),
					precioFinal: parseFloat(formData.precioFinal)
				}
			];
		}

		guardarProductos();
		resetForm();
	}

	// Editar producto
	function editProduct(producto) {
		editingId = producto.id;
		formData = {
			nombre: producto.nombre,
			precioBase: producto.precioBase.toString(),
			precioFinal: producto.precioFinal.toString()
		};
	}

	// Eliminar producto
	function deleteProduct(id) {
		if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
			productos = productos.filter(p => p.id !== id);
			guardarProductos();
		}
	}

	// Limpiar formulario
	function resetForm() {
		formData = {
			nombre: '',
			precioBase: '',
			precioFinal: ''
		};
		editingId = null;
	}

	// Calcular margen
	function calcularMargen(base, final) {
		if (base === 0) return 0;
		return (((final - base) / base) * 100).toFixed(2);
	}

	// Actualizar precio de material
	function actualizarMaterial(tipo, campo, valor) {
		preciosMateriales[tipo][campo] = parseFloat(valor) || 0;
		preciosMateriales = preciosMateriales;
		guardarMateriales();
	}
</script>

<svelte:head>
	<title>Configuración de Precios</title>
</svelte:head>

<div class="container">
	<h1>⚙️ Configuración de Precios</h1>

	<!-- Tabs -->
	<div class="tabs">
		<button 
			class="tab-btn" 
			class:active={tab === 'materiales'} 
			on:click={() => tab = 'materiales'}
		>
			🧵 Precios de Materiales
		</button>
		<button 
			class="tab-btn" 
			class:active={tab === 'productos'} 
			on:click={() => tab = 'productos'}
		>
			📦 Productos Personalizados
		</button>
	</div>

	<!-- TAB 1: MATERIALES -->
	{#if tab === 'materiales'}
		<div class="tab-content">
			<h2>Precios de Materiales Base y Final</h2>
			<p class="info">Configura aquí los precios base (costo) y final (venta) para cada material.</p>

			<div class="materiales-grid">
				{#each Object.entries(preciosMateriales) as [tipo, precios]}
					<div class="material-card">
						<h3>{tipo.replace(/([A-Z])/g, ' $1').trim()}</h3>
						
						<div class="material-inputs">
							<div class="input-group">
								<label>Precio Base ($)</label>
								<input
									type="number"
									step="0.01"
									value={precios.base}
									on:change={(e) => actualizarMaterial(tipo, 'base', e.target.value)}
								/>
								<small>Costo</small>
							</div>

							<div class="input-group">
								<label>Precio Final ($)</label>
								<input
									type="number"
									step="0.01"
									value={precios.final}
									on:change={(e) => actualizarMaterial(tipo, 'final', e.target.value)}
								/>
								<small>Venta</small>
							</div>
						</div>

						<div class="margen-info">
							📊 Margen: <strong>{calcularMargen(precios.base, precios.final)}%</strong>
						</div>
					</div>
				{/each}
			</div>

			<div class="export-info">
				<p>✅ Los cambios se guardan automáticamente</p>
				<p>📱 El cotizador usará estos precios automáticamente</p>
			</div>
		</div>
	{/if}

	<!-- TAB 2: PRODUCTOS -->
	{#if tab === 'productos'}
		<div class="tab-content">
			<div class="content-grid">
				<!-- Formulario -->
				<div class="formulario-section">
					<h2>{editingId ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
					<form on:submit|preventDefault={handleSubmit}>
						<div class="form-group">
							<label for="nombre">Nombre del Producto</label>
							<input
								id="nombre"
								type="text"
								bind:value={formData.nombre}
								placeholder="Ej: Soporte tipo A"
							/>
						</div>

						<div class="form-group">
							<label for="precioBase">Precio Base ($)</label>
							<input
								id="precioBase"
								type="number"
								step="0.01"
								bind:value={formData.precioBase}
								placeholder="0.00"
							/>
						</div>

						<div class="form-group">
							<label for="precioFinal">Precio Final ($)</label>
							<input
								id="precioFinal"
								type="number"
								step="0.01"
								bind:value={formData.precioFinal}
								placeholder="0.00"
							/>
						</div>

						<div class="form-actions">
							<button type="submit" class="btn btn-primary">
								{editingId ? 'Actualizar' : 'Agregar'}
							</button>
							{#if editingId}
								<button type="button" class="btn btn-secondary" on:click={resetForm}>
									Cancelar
								</button>
							{/if}
						</div>
					</form>
				</div>

				<!-- Tabla de productos -->
				<div class="tabla-section">
					<h2>Productos Configurados</h2>
					{#if productos.length === 0}
						<p class="no-data">No hay productos configurados aún</p>
					{:else}
						<div class="tabla-responsive">
							<table>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Precio Base</th>
										<th>Precio Final</th>
										<th>Margen (%)</th>
										<th>Acciones</th>
									</tr>
								</thead>
								<tbody>
									{#each productos as producto (producto.id)}
										<tr>
											<td>{producto.nombre}</td>
											<td class="precio">${producto.precioBase.toFixed(2)}</td>
											<td class="precio">${producto.precioFinal.toFixed(2)}</td>
											<td class="margen">
												<span class="margen-badge">
													{calcularMargen(producto.precioBase, producto.precioFinal)}%
												</span>
											</td>
											<td class="acciones">
												<button
													class="btn-icon btn-edit"
													on:click={() => editProduct(producto)}
													title="Editar"
												>
													✏️
												</button>
												<button
													class="btn-icon btn-delete"
													on:click={() => deleteProduct(producto.id)}
													title="Eliminar"
												>
													🗑️
												</button>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		color: #333;
		margin-bottom: 2rem;
		font-size: 2.5rem;
	}

	h2 {
		color: #555;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid #007bff;
		padding-bottom: 0.5rem;
	}

	/* TABS */
	.tabs {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid #ddd;
	}

	.tab-btn {
		padding: 1rem 1.5rem;
		border: none;
		background: none;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		color: #666;
		border-bottom: 3px solid transparent;
		transition: all 0.3s;
	}

	.tab-btn:hover {
		color: #007bff;
	}

	.tab-btn.active {
		color: #007bff;
		border-bottom-color: #007bff;
	}

	.tab-content {
		animation: fadeIn 0.3s ease-in;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.info {
		background: #e7f3ff;
		padding: 1rem;
		border-radius: 4px;
		color: #004085;
		margin-bottom: 1.5rem;
	}

	/* MATERIALES */
	.materiales-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.material-card {
		background: white;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.3s;
	}

	.material-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transform: translateY(-2px);
	}

	.material-card h3 {
		margin: 0 0 1rem 0;
		color: #333;
		text-transform: capitalize;
	}

	.material-inputs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.input-group {
		display: flex;
		flex-direction: column;
	}

	.input-group label {
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #333;
		font-size: 0.95rem;
	}

	.input-group input {
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		transition: border-color 0.3s;
	}

	.input-group input:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
	}

	.input-group small {
		color: #999;
		font-size: 0.8rem;
		margin-top: 0.25rem;
	}

	.margen-info {
		padding: 0.75rem;
		background: #f0f0f0;
		border-radius: 4px;
		text-align: center;
		font-size: 0.95rem;
	}

	.margen-info strong {
		color: #007bff;
		font-size: 1.1rem;
	}

	.export-info {
		background: #f9f9f9;
		padding: 1rem;
		border-radius: 8px;
		border-left: 4px solid #28a745;
		color: #666;
	}

	.export-info p {
		margin: 0.5rem 0;
		font-size: 0.95rem;
	}

	/* PRODUCTOS */
	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.formulario-section {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #333;
		font-size: 0.95rem;
	}

	.form-group input {
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		font-family: inherit;
		transition: border-color 0.3s;
	}

	.form-group input:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
	}

	.form-actions {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		transition: all 0.3s;
		flex: 1;
	}

	.btn-primary {
		background-color: #007bff;
		color: white;
	}

	.btn-primary:hover {
		background-color: #0056b3;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
	}

	.btn-secondary {
		background-color: #6c757d;
		color: white;
	}

	.btn-secondary:hover {
		background-color: #545b62;
	}

	.tabla-section {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.no-data {
		text-align: center;
		color: #999;
		padding: 2rem;
		font-style: italic;
	}

	.tabla-responsive {
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background: white;
	}

	thead {
		background-color: #007bff;
		color: white;
	}

	th {
		padding: 1rem;
		text-align: left;
		font-weight: 600;
	}

	td {
		padding: 1rem;
		border-bottom: 1px solid #ddd;
	}

	tbody tr:hover {
		background-color: #f0f0f0;
	}

	.precio {
		font-weight: 600;
		color: #007bff;
	}

	.margen {
		text-align: center;
	}

	.margen-badge {
		display: inline-block;
		background-color: #28a745;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
	}

	.acciones {
		text-align: center;
	}

	.btn-icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		padding: 0.5rem;
		margin: 0 0.25rem;
		transition: transform 0.2s;
	}

	.btn-icon:hover {
		transform: scale(1.3);
	}

	.btn-edit {
		color: #007bff;
	}

	.btn-delete {
		color: #dc3545;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
		}

		.materiales-grid {
			grid-template-columns: 1fr;
		}

		.container {
			padding: 1rem;
		}

		h1 {
			font-size: 1.8rem;
			margin-bottom: 1rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		.tabs {
			flex-direction: column;
			gap: 0;
		}

		.tab-btn {
			width: 100%;
			text-align: left;
			border-bottom: none;
			border-left: 3px solid transparent;
		}

		.tab-btn.active {
			border-bottom: none;
			border-left-color: #007bff;
		}

		table {
			font-size: 0.9rem;
		}

		th,
		td {
			padding: 0.75rem 0.5rem;
		}

		.form-actions {
			flex-direction: column;
		}

		.btn {
			flex: none;
			width: 100%;
		}
	}
</style>
