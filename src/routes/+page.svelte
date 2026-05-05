<script>
	import { fade, scale, fly } from 'svelte/transition';

	let zoomed = false;
	let zoomSrc = '';
	let fabricName = '';

	// Datos organizados por categoría
	const categories = [
		{
			name: 'Floreado',
			fabrics: [
				{ name: 'Floreado 1', path: '/muestrario/FLOREADO/IMG_8146.webp' },
				{ name: 'Floreado 2', path: '/muestrario/FLOREADO/IMG_8147.webp' },
				{ name: 'Floreado 3', path: '/muestrario/FLOREADO/IMG_8148.webp' },
				{ name: 'Floreado 4', path: '/muestrario/FLOREADO/IMG_8149.webp' },
				{ name: 'Floreado 5', path: '/muestrario/FLOREADO/IMG_8150.webp' },
				{ name: 'Floreado 6', path: '/muestrario/FLOREADO/IMG_8151.webp' },
				{ name: 'Floreado 7', path: '/muestrario/FLOREADO/IMG_8152.webp' },
				{ name: 'Floreado 8', path: '/muestrario/FLOREADO/IMG_8153.webp' },
				{ name: 'Floreado 9', path: '/muestrario/FLOREADO/IMG_8154.webp' },
				{ name: 'Floreado 10', path: '/muestrario/FLOREADO/IMG_8155.webp' },
				{ name: 'Floreado 11', path: '/muestrario/FLOREADO/IMG_8156.webp' },
				{ name: 'Floreado 12', path: '/muestrario/FLOREADO/IMG_8157.webp' },
				{ name: 'Floreado 13', path: '/muestrario/FLOREADO/IMG_8158.webp' },
				{ name: 'Floreado 14', path: '/muestrario/FLOREADO/IMG_8159.webp' },
				{ name: 'Floreado 15', path: '/muestrario/FLOREADO/IMG_8160.webp' }
			],
			expanded: false
		},
		{
			name: 'Mil Rayas',
			fabrics: [
				{ name: 'Mil Rayas 1', path: '/muestrario/MILRAYAS/IMG_8124.webp' },
				{ name: 'Mil Rayas 2', path: '/muestrario/MILRAYAS/IMG_8125.webp' },
				{ name: 'Mil Rayas 3', path: '/muestrario/MILRAYAS/IMG_8126.webp' },
				{ name: 'Mil Rayas 4', path: '/muestrario/MILRAYAS/IMG_8127.webp' },
				{ name: 'Mil Rayas 5', path: '/muestrario/MILRAYAS/IMG_8128.webp' },
				{ name: 'Mil Rayas 6', path: '/muestrario/MILRAYAS/IMG_8129.webp' },
				{ name: 'Mil Rayas 7', path: '/muestrario/MILRAYAS/IMG_8130.webp' },
				{ name: 'Mil Rayas 8', path: '/muestrario/MILRAYAS/IMG_8131.webp' },
				{ name: 'Mil Rayas 9', path: '/muestrario/MILRAYAS/IMG_8132.webp' },
				{ name: 'Mil Rayas 10', path: '/muestrario/MILRAYAS/IMG_8133.webp' },
				{ name: 'Mil Rayas 11', path: '/muestrario/MILRAYAS/IMG_8134.webp' },
				{ name: 'Mil Rayas 12', path: '/muestrario/MILRAYAS/IMG_8135.webp' },
				{ name: 'Mil Rayas 13', path: '/muestrario/MILRAYAS/IMG_8136.webp' },
				{ name: 'Mil Rayas 14', path: '/muestrario/MILRAYAS/IMG_8137.webp' },
				{ name: 'Mil Rayas 15', path: '/muestrario/MILRAYAS/IMG_8138.webp' },
				{ name: 'Mil Rayas 16', path: '/muestrario/MILRAYAS/IMG_8139.webp' },
				{ name: 'Mil Rayas 17', path: '/muestrario/MILRAYAS/IMG_8140.webp' },
				{ name: 'Mil Rayas 18', path: '/muestrario/MILRAYAS/IMG_8141.webp' },
				{ name: 'Mil Rayas 19', path: '/muestrario/MILRAYAS/IMG_8142.webp' },
				{ name: 'Mil Rayas 20', path: '/muestrario/MILRAYAS/IMG_8143.webp' },
				{ name: 'Mil Rayas 21', path: '/muestrario/MILRAYAS/IMG_8144.webp' },
				{ name: 'Mil Rayas 22', path: '/muestrario/MILRAYAS/IMG_8145.webp' }
			],
			expanded: false
		},
		{
			name: 'Rústico',
			fabrics: [
				{ name: 'Rústico 1', path: '/muestrario/RUSTICO/IMG_8105.webp' },
				{ name: 'Rústico 2', path: '/muestrario/RUSTICO/IMG_8106.webp' },
				{ name: 'Rústico 3', path: '/muestrario/RUSTICO/IMG_8107.webp' },
				{ name: 'Rústico 4', path: '/muestrario/RUSTICO/IMG_8108.webp' },
				{ name: 'Rústico 5', path: '/muestrario/RUSTICO/IMG_8109.webp' },
				{ name: 'Rústico 6', path: '/muestrario/RUSTICO/IMG_8110.webp' },
				{ name: 'Rústico 7', path: '/muestrario/RUSTICO/IMG_8111.webp' },
				{ name: 'Rústico 8', path: '/muestrario/RUSTICO/IMG_8112.webp' },
				{ name: 'Rústico 9', path: '/muestrario/RUSTICO/IMG_8113.webp' },
				{ name: 'Rústico 10', path: '/muestrario/RUSTICO/IMG_8114.webp' },
				{ name: 'Rústico 11', path: '/muestrario/RUSTICO/IMG_8115.webp' },
				{ name: 'Rústico 12', path: '/muestrario/RUSTICO/IMG_8116.webp' },
				{ name: 'Rústico 13', path: '/muestrario/RUSTICO/IMG_8117.webp' },
				{ name: 'Rústico 14', path: '/muestrario/RUSTICO/IMG_8118.webp' },
				{ name: 'Rústico 15', path: '/muestrario/RUSTICO/IMG_8119.webp' },
				{ name: 'Rústico 16', path: '/muestrario/RUSTICO/IMG_8120.webp' },
				{ name: 'Rústico 17', path: '/muestrario/RUSTICO/IMG_8121.webp' },
				{ name: 'Rústico 18', path: '/muestrario/RUSTICO/IMG_8122.webp' },
				{ name: 'Rústico 19', path: '/muestrario/RUSTICO/IMG_8123.webp' }
			],
			expanded: false
		},
		{
			name: 'Rústico 2',
			fabrics: [
				{ name: 'Rústico 2 - 1', path: '/muestrario/RUSTICO2/IMG_8164.webp' },
				{ name: 'Rústico 2 - 2', path: '/muestrario/RUSTICO2/IMG_8165.webp' },
				{ name: 'Rústico 2 - 3', path: '/muestrario/RUSTICO2/IMG_8166.webp' },
				{ name: 'Rústico 2 - 4', path: '/muestrario/RUSTICO2/IMG_8167.webp' },
				{ name: 'Rústico 2 - 5', path: '/muestrario/RUSTICO2/IMG_8168.webp' },
				{ name: 'Rústico 2 - 6', path: '/muestrario/RUSTICO2/IMG_8169.webp' },
				{ name: 'Rústico 2 - 7', path: '/muestrario/RUSTICO2/IMG_8170.webp' },
				{ name: 'Rústico 2 - 8', path: '/muestrario/RUSTICO2/IMG_8171.webp' },
				{ name: 'Rústico 2 - 9', path: '/muestrario/RUSTICO2/IMG_8172.webp' },
				{ name: 'Rústico 2 - 10', path: '/muestrario/RUSTICO2/IMG_8173.webp' },
				{ name: 'Rústico 2 - 11', path: '/muestrario/RUSTICO2/IMG_8174.webp' },
				{ name: 'Rústico 2 - 12', path: '/muestrario/RUSTICO2/IMG_8175.webp' },
				{ name: 'Rústico 2 - 13', path: '/muestrario/RUSTICO2/IMG_8176.webp' },
				{ name: 'Rústico 2 - 14', path: '/muestrario/RUSTICO2/IMG_8177.webp' },
				{ name: 'Rústico 2 - 15', path: '/muestrario/RUSTICO2/IMG_8178.webp' },
				{ name: 'Rústico 2 - 16', path: '/muestrario/RUSTICO2/IMG_8179.webp' },
				{ name: 'Rústico 2 - 17', path: '/muestrario/RUSTICO2/IMG_8181.webp' },
				{ name: 'Rústico 2 - 18', path: '/muestrario/RUSTICO2/IMG_8182.webp' },
				{ name: 'Rústico 2 - 19', path: '/muestrario/RUSTICO2/IMG_8183.webp' },
				{ name: 'Rústico 2 - 20', path: '/muestrario/RUSTICO2/IMG_8184.webp' },
				{ name: 'Rústico 2 - 21', path: '/muestrario/RUSTICO2/IMG_8185.webp' },
				{ name: 'Rústico 2 - 22', path: '/muestrario/RUSTICO2/IMG_8186.webp' },
				{ name: 'Rústico 2 - 23', path: '/muestrario/RUSTICO2/IMG_8187.webp' },
				{ name: 'Rústico 2 - 24', path: '/muestrario/RUSTICO2/IMG_8188.webp' },
				{ name: 'Rústico 2 - 25', path: '/muestrario/RUSTICO2/IMG_8189.webp' },
				{ name: 'Rústico 2 - 26', path: '/muestrario/RUSTICO2/IMG_8190.webp' }
			],
			expanded: false
		}
	];

	const openWhatsApp = () => {
		const message = `Me interesa la tela: ${fabricName}`;
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/59169339612?text=${encodedMessage}`;
		window.open(whatsappUrl, '_blank');
	};

	function toggleExpanded(index) {
		categories[index].expanded = !categories[index].expanded;
	}

	function getVisibleFabrics(categoryIndex) {
		const category = categories[categoryIndex];
		return category.expanded ? category.fabrics : category.fabrics.slice(0, 3);
	}
</script>

<svelte:head>
	<title>Catálogo de Cortinas</title>
	<meta name="description" content="Catálogo de cortinas innovadoras" />
</svelte:head>

<main class="bg-background text-on-surface font-body-md antialiased">

<main class="pt-24 pb-32 max-w-[1440px] mx-auto px-6 md:px-20 lg:px-[80px] min-h-[calc(100vh-144px)] flex flex-col justify-center" transition:fade={{duration: 800}}>
<!-- Fabric Selection Area (Main Focus) -->
<section class="bg-transparent py-12 md:py-20 px-0">
<div class="flex flex-col items-center text-center mb-16 gap-6" transition:fly={{y: 30, duration: 600}}>
<div class="max-w-2xl">
<p class="font-label-caps text-label-caps text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-delay-1">CORTINAS Y PERSIANAS <br> LA PAZ - BOLIVIA</p>
<h1 class="font-display-xl text-display-xl text-on-surface mb-6 animate-fade-in-delay-2">MUESTRA DE COLORES</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant animate-fade-in-delay-3" style="color: green; text-wrap: 20px">POR LA COMPRA DE CADA CORTINA TE REGALAREMOS LOS CINTURONES PARA CADA CORTINA, PROMOCION HASTA EL 10 DE MAYO. <br> ENVIOS A TODA BOLIVIA</p>
</div>

</div>

<!-- Categorías de Muestras -->
{#each categories as category, categoryIndex (category.name)}
<section class="category-section py-16 md:py-24 px-0 animate-fade-in-up">
	<div class="mb-12 text-left">
		<h2 class="text-3xl md:text-4xl font-bold text-on-surface mb-2 category-title">{category.name}</h2>
		<div class="h-1 w-20 bg-primary rounded-full"></div>
	</div>

	<!-- Grid de Imágenes -->
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
		{#each getVisibleFabrics(categoryIndex) as fabric, i (fabric.name)}
		<div 
			class="text-center group stagger-item" 
			on:click={() => { zoomed = true; zoomSrc = fabric.path; fabricName = fabric.name; }}
			transition:scale={{duration: 400, delay: i * 100}}
		>
			<div class="relative mb-4">
				<div class="aspect-square rounded-lg overflow-hidden border-2 border-primary border-opacity-20 group-hover:border-primary group-hover:border-opacity-100 transition-all duration-500 shadow-md group-hover:shadow-2xl cursor-pointer image-container">
					<img 
						alt="{fabric.name}" 
						class="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500 group-hover:scale-110" 
						src={fabric.path} 
						loading="lazy" 
					
					/>
				</div>
			</div>
			<span class="font-label-caps text-xs tracking-widest uppercase text-on-surface-variant block mt-3 group-hover:text-primary transition-colors">{fabric.name}</span>
		</div>
		{/each}
	</div>

	<!-- Botón Ver Más -->
	{#if category.fabrics.length > 3}
	<div class="mt-12 flex justify-center">
		<button 
			class="ver-mas-button px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg"
			on:click={() => toggleExpanded(categoryIndex)}
			transition:fade={{duration: 300}}
		>
			{category.expanded ? '- Ver Menos' : '+ Ver Más'}
		</button>
	</div>
	{/if}
</section>
{/each}

<section class="py-12 md:py-20 px-0">
<div class="flex gap-4">
<button class="bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity">iR A WHATSAPP</button>
</div>
</main>
</main>

{#if zoomed}
<div class="zoom-overlay" on:click={() => zoomed = false} transition:fade={{duration: 300}}>
<div class="zoom-content" on:click|stopPropagation transition:scale={{duration: 400, start: 0.8}}>
<button class="close-button" on:click={() => zoomed = false} aria-label="Cerrar" transition:scale={{duration: 300}}>
<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<line x1="18" y1="6" x2="6" y2="18"></line>
<line x1="6" y1="6" x2="18" y2="18"></line>
</svg>
</button>
<h2 class="zoom-title animate-slide-down">{fabricName}</h2>
<img src={zoomSrc} class="zoomed-image animate-zoom-in" alt="Zoomed fabric" />
<button class="whatsapp-button animate-slide-up" on:click={openWhatsApp}>Consultar por WhatsApp</button>
</div>
</div>
{/if}



<style>
	.zoom-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		cursor: zoom-out;
	}

	.zoom-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90%;
		max-height: 90%;
	}

	.zoom-title {
		font-size: 2rem;
		font-weight: bold;
		color: white;
		margin-bottom: 1rem;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.zoomed-image {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		margin-bottom: 2rem;
	}

	.whatsapp-button {
		background-color: #25d366;
		color: white;
		border: none;
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: bold;
		border-radius: 8px;
		cursor: pointer;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
	}

	.whatsapp-button:hover {
		background-color: #20ba5a;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
	}

	.whatsapp-button:active {
		transform: translateY(0);
	}

	/* Keyframe animations for page load */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes zoomIn {
		from {
			opacity: 0;
			transform: scale(0.9);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.animate-fade-in-delay-1 {
		animation: fadeInUp 0.6s ease-out 0.2s both;
	}

	.animate-fade-in-delay-2 {
		animation: fadeInUp 0.6s ease-out 0.4s both;
	}

	.animate-fade-in-delay-3 {
		animation: fadeInUp 0.6s ease-out 0.6s both;
	}

	.animate-fade-in-delay-4 {
		animation: fadeInUp 0.8s ease-out 0.8s both;
	}

	.animate-slide-down {
		animation: slideDown 0.5s ease-out;
	}

	.animate-slide-up {
		animation: slideUp 0.5s ease-out 0.2s both;
	}

	.animate-zoom-in {
		animation: zoomIn 0.6s ease-out 0.1s both;
	}

	/* Categoría Secciones */
	.category-section {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		animation: fadeInUp 0.8s ease-out;
	}

	.category-title {
		font-weight: 700;
		letter-spacing: 0.02em;
		position: relative;
	}

	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out;
	}

	/* Stagger animation para grid items */
	.stagger-item {
		animation: fadeInUp 0.6s ease-out forwards;
	}

	/* Ver más button */
	.ver-mas-button {
		position: relative;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.ver-mas-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
	}

	.ver-mas-button:active {
		transform: translateY(0);
	}

	/* Scroll animations con Intersection Observer */
	@keyframes slideInFromLeft {
		from {
			opacity: 0;
			transform: translateX(-40px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideInFromBottom {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-on-scroll {
		animation: slideInFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-timeline: view();
		animation-range: entry 0% cover 30%;
	}

	.category-title {
		animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-timeline: view();
		animation-range: entry 0% cover 30%;
	}

	/* Close Button */
	.close-button {
		position: absolute;
		top: 20px;
		right: 20px;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.3);
		color: white;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		z-index: 1001;
	}

	.close-button:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
		transform: rotate(90deg) scale(1.1);
		
	}

	.close-button:active {
		transform: rotate(90deg) scale(0.95);
	}

	/* Image Container enhancements */
	.image-container {
		position: relative;
		overflow: hidden;
	}

	.image-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transition: left 0.6s ease;
		z-index: 1;
		pointer-events: none;
	}

	.image-container:hover::before {
		left: 100%;
	}

	/* Enhanced animations */
	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	@keyframes glow {
		0% {
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		}
		50% {
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		}
		100% {
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
		}
	}

	.stagger-item:hover {
		animation: float 0.6s ease-in-out forwards;
	}

	/* Gradient background accent */
	main::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
		            radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
		pointer-events: none;
		z-index: -1;
	}

	/* Button enhancements */
	.whatsapp-button {
		position: relative;
		overflow: hidden;
	}

	.whatsapp-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.2);
		transition: left 0.5s ease;
		z-index: 0;
	}

	.whatsapp-button:hover::before {
		left: 100%;
	}
</style>
