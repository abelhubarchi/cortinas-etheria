<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AETHERIA ATELIER | The Art of Light Control</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300;400;700&amp;family=Manrope:wght@400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-container": "#b6b8be",
                        "tertiary-container": "#090a07",
                        "outline": "#919094",
                        "surface-container-highest": "#353437",
                        "primary": "#c8c6c7",
                        "on-primary": "#313031",
                        "surface-bright": "#39393b",
                        "primary-container": "#0a0a0b",
                        "on-tertiary-fixed": "#1b1c18",
                        "surface-container": "#1f1f21",
                        "surface-container-lowest": "#0e0e10",
                        "on-primary-fixed": "#1c1b1c",
                        "background": "#131315",
                        "tertiary-fixed": "#e4e2dc",
                        "on-primary-fixed-variant": "#474647",
                        "secondary-container": "#46494e",
                        "on-background": "#e4e2e4",
                        "secondary-fixed": "#e0e2e8",
                        "error": "#ffb4ab",
                        "on-tertiary-fixed-variant": "#474743",
                        "surface-tint": "#c8c6c7",
                        "inverse-surface": "#e4e2e4",
                        "outline-variant": "#46464a",
                        "on-primary-container": "#7a797a",
                        "surface-container-low": "#1b1b1d",
                        "on-secondary-fixed": "#181c20",
                        "secondary-fixed-dim": "#c4c6cc",
                        "on-tertiary-container": "#7a7975",
                        "primary-fixed-dim": "#c8c6c7",
                        "surface": "#131315",
                        "on-secondary": "#2d3135",
                        "surface-container-high": "#2a2a2c",
                        "secondary": "#c4c6cc",
                        "primary-fixed": "#e5e2e3",
                        "on-secondary-fixed-variant": "#44474b",
                        "on-error": "#690005",
                        "tertiary": "#c8c6c1",
                        "surface-dim": "#131315",
                        "inverse-primary": "#5f5e5f",
                        "on-tertiary": "#30312d",
                        "surface-variant": "#353437",
                        "on-surface": "#e4e2e4",
                        "inverse-on-surface": "#303032",
                        "tertiary-fixed-dim": "#c8c6c1",
                        "on-surface-variant": "#c7c6ca",
                        "error-container": "#93000a",
                        "on-error-container": "#ffdad6"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "unit": "8px",
                        "section-gap": "160px",
                        "gutter": "32px",
                        "margin-x": "64px",
                        "container-max": "1440px"
                    },
                    "fontFamily": {
                        "body-md": ["Manrope"],
                        "display-xl": ["Noto Serif"],
                        "body-lg": ["Manrope"],
                        "headline-md": ["Noto Serif"],
                        "display-lg": ["Noto Serif"],
                        "label-caps": ["Manrope"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "display-xl": ["72px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "300"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400"}],
                        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "400"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "400"}],
                        "label-caps": ["12px", {"lineHeight": "1.4", "letterSpacing": "0.15em", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
        }
        .hero-gradient {
            background: linear-gradient(to bottom, rgba(10,10,11,0.2) 0%, rgba(19,19,21,1) 95%);
        }
        .metallic-border {
            border: 1px solid rgba(196, 198, 204, 0.1);
        }
        .text-glow {
            text-shadow: 0 0 20px rgba(228, 226, 228, 0.2);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-8 bg-[#0A0A0B]/90 backdrop-blur-sm text-zinc-100 font-serif tracking-[0.25em] uppercase text-[11px] border-b border-zinc-800/30 docked full-width z-50">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined scale-100 active:scale-95 transition-transform cursor-pointer" data-icon="menu">menu</span>
</div>
<div class="text-2xl font-serif tracking-[0.4em] text-zinc-50 absolute left-1/2 -translate-x-1/2">AETHERIA</div>
<div class="flex items-center gap-12">
<nav class="hidden md:flex gap-8">
<a class="text-zinc-50 border-b border-zinc-50 pb-1 hover:text-zinc-100 transition-all duration-500 ease-in-out" href="#">Collections</a>
<a class="text-zinc-500 hover:text-zinc-100 transition-all duration-500 ease-in-out" href="#">Heritage</a>
<a class="text-zinc-500 hover:text-zinc-100 transition-all duration-500 ease-in-out" href="#">Bespoke</a>
</nav>
<button class="font-serif tracking-[0.25em] uppercase text-[11px] hover:text-zinc-100 transition-all duration-500 ease-in-out">INQUIRE</button>
</div>
</header>
<!-- Hero Section -->
<section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="" class="w-full h-full object-cover" data-alt="Wide shot of a minimalist luxury penthouse living room with floor-to-ceiling sheer silk curtains billowing in soft afternoon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3wXpfrOC16qx5zr7-308r5baZbBVFf5hQai_mt_zx-814Wncpb9qGAq-SpH3srPwBbobo5Q2e2FsGnCeJGyBXcTnhexXAR74LRXi_9abu469OSA67R5hdRw34w04wYzVgkhpfVmH0tkjvkSHgCS3kwt1VDrxyeDoac-Gn5dkdUIaSfWoM2s0ZNU2qvS-8LMSXSze0RyCgF3DfNXEC_VDfAHWdHtyvk0Rt5JsfO4qj7b5ehV9J3tfrO5_0KF_IzntspqW5ziwl-g"/>
<div class="absolute inset-0 hero-gradient"></div>
</div>
<div class="relative z-10 text-center px-gutter max-w-5xl">
<h1 class="font-display-xl text-display-xl text-on-background mb-8 text-glow uppercase tracking-widest">The Art of Light Control</h1>
<p class="font-body-lg text-body-lg text-secondary mb-12 max-w-2xl mx-auto tracking-wide opacity-80">
                Crafting atmospheres through the masterly manipulation of natural light. Bespoke drapery for the world's most distinguished interiors.
            </p>
<button class="bg-primary text-on-primary font-label-caps text-label-caps px-12 py-6 rounded-none tracking-[0.3em] uppercase hover:bg-white transition-colors duration-500">
                Book an Atelier Consultation
            </button>
</div>
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
<span class="font-label-caps text-[10px] tracking-[0.4em] uppercase">Scroll to Explore</span>
<div class="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
</div>
</section>
<!-- Features Section -->
<section class="py-section-gap px-margin-x max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<!-- Bespoke Craftsmanship -->
<div class="flex flex-col items-center text-center p-12 metallic-border bg-surface-container-low/30">
<span class="material-symbols-outlined text-4xl mb-8 text-primary" data-icon="architecture" style="font-variation-settings: 'wght' 100;">architecture</span>
<h3 class="font-headline-md text-headline-md text-on-background mb-4 uppercase tracking-tighter">Bespoke Craftsmanship</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-70">
                    Each piece is hand-tailored in our Milanese atelier, ensuring every stitch meets the exacting standards of traditional couture.
                </p>
</div>
<!-- Exquisite Materials -->
<div class="flex flex-col items-center text-center p-12 metallic-border bg-surface-container-low/30">
<span class="material-symbols-outlined text-4xl mb-8 text-primary" data-icon="texture" style="font-variation-settings: 'wght' 100;">texture</span>
<h3 class="font-headline-md text-headline-md text-on-background mb-4 uppercase tracking-tighter">Exquisite Materials</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-70">
                    Sourcing the finest raw silks from Como and artisanal linens from Flanders to provide textures of unparalleled depth.
                </p>
</div>
<!-- Automated Perfection -->
<div class="flex flex-col items-center text-center p-12 metallic-border bg-surface-container-low/30">
<span class="material-symbols-outlined text-4xl mb-8 text-primary" data-icon="settings_remote" style="font-variation-settings: 'wght' 100;">settings_remote</span>
<h3 class="font-headline-md text-headline-md text-on-background mb-4 uppercase tracking-tighter">Automated Perfection</h3>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xs opacity-70">
                    Whisper-quiet automation seamlessly integrates with your home's ecosystem for effortless control of your environment.
                </p>
</div>
</div>
</section>
<!-- Product Showcase (Bento Style) -->
<section class="py-section-gap px-margin-x">
<div class="max-w-container-max mx-auto grid grid-cols-12 grid-rows-2 gap-8 h-[1000px]">
<!-- Main Feature -->
<div class="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden">
<img alt="" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Close-up of heavy charcoal velvet curtains with deep folds and subtle silver highlights in a moody, high-end interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_VyRr6qdoI8bf1uAcf6iPiR60FgSTZmlPMNZWOxKyklAkadZPodveXr_8GoX2FcN262sE539xvXabF5gCC7eDlHzBqDt-AQ7ZZJKE8TSrJWy5JY89AWqsxc9ii9xDN_dKL5dlVHDeuF4-K8utDsi2JzRK17X4A_SrDti6zXYxM2OVbM2-HC_5-WCilNtzsqzfDgBLVAnFLGqx39xhZoS5GCZOB8YKd27RZFozhwmaY3ygkb1C2uhUKDX6QMgcqKlOF7z4I-hDeE"/>
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div class="absolute bottom-12 left-12">
<span class="font-label-caps text-primary tracking-[0.5em] uppercase mb-4 block">The Obsidian Collection</span>
<h2 class="font-display-lg text-display-lg text-on-background uppercase">Heavy Velvet</h2>
</div>
</div>
<!-- Side Top -->
<div class="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden">
<img alt="" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Soft morning light filtering through semi-transparent white linen curtains in a modern minimalist bedroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2jZxb23y0LGA0j9Lg6GI6XAh6W9hO5zx1wy9Jhhs7GdsRyotRJGnKoTcLC7CQbSeuprMILYwRL-UDYtwOVEN3KMna8Rm-mS89RKgliRworp9FT1RLIClEG5skvOGPofNxv5RRFtX8bWSoCFc6h2-JsMt8rb0lOh2Z4vI3WcP9WQiJj_7vD_-ucUuZIaImJJj2KE0NwZUDgNRn9chelUozsYNY_lgAWuIAl81qetl9t59zIk9x7I3rF2DyYTQPDZTyqVnpmluK-AA"/>
<div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div class="absolute bottom-8 left-8">
<span class="font-label-caps text-primary tracking-[0.5em] uppercase mb-2 block">Transparency</span>
<h2 class="font-headline-md text-headline-md text-on-background uppercase">Belgian Linen</h2>
</div>
</div>
<!-- Side Bottom -->
<div class="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden">
<img alt="" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Extreme close-up of champagne-colored raw silk fabric showing the intricate weave and natural sheen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC14Lrs_PUGogkq5ixG5neYiITzM2wMCRSElpxwbdReyfzlvE1vUpQVOtu-mTSBJFpq-eKjzLtKkT5wSXI6wzvSq5WMEhY6L7oG5XmexA92jF5soV5tMWs1L07MFy8OuqgXiI1Vw9KoNPq2VOIQG4b6spwnti6oaw37pC-dU88S2yxcIzOUJujQkBhEnq2PXleSjlz9b5qv52AIKB5ZHAVU5U2BlS7I4QzVj7WCtORlcSb14vuDNpA95t1_kkoTfV_pr9X2Z0gxx4g"/>
<div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div class="absolute bottom-8 left-8">
<span class="font-label-caps text-primary tracking-[0.5em] uppercase mb-2 block">Heritage</span>
<h2 class="font-headline-md text-headline-md text-on-background uppercase">Raw Como Silk</h2>
</div>
</div>
</div>
</section>
<!-- Narrative Section -->
<section class="py-section-gap bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-margin-x flex flex-col md:flex-row items-center gap-32">
<div class="w-full md:w-1/2">
<img alt="" class="w-full aspect-[4/5] object-cover metallic-border p-4" data-alt="Interior designer examining fabric swatches next to a large window in a bright, modern studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrgLHGFO4x6QHoSlaZvFo2BooNnbt7KK3KtkCst6agPWM5F_2BpzEVkVUkOC2NSw5AZFprnONGm4VyrVdY1-_AThdrSWt1ykgSu-CpTXLCpf8nLh7xtqgHyw1l6J_Gtc_xvwHUj30PGbU1t9-8sVINmmrEAJSbLk4GBobf7BgL6UhSwuIQS0vrcGbT4WrWX_Unl04-jTypSCOdf9xt9mD3UoyCAZSwzAiUJ99RiLvSnuaCuFRDvuWhsIWl0wQJCUdSTaoVT_FADM"/>
</div>
<div class="w-full md:w-1/2 space-y-12">
<span class="font-label-caps text-primary tracking-[0.6em] uppercase">The Philosophy</span>
<h2 class="font-display-lg text-display-lg text-on-background leading-tight">Quiet Luxury for the Modern Home</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant opacity-80 leading-relaxed">
                    Aetheria Atelier believes that privacy and light should be handled with the same reverence as fine art. Our curtains are not mere window coverings; they are architectural elements that redefine the volume and mood of your space.
                </p>
<div class="flex gap-16">
<div class="space-y-2">
<div class="text-3xl font-display-lg text-primary tracking-tighter">240+</div>
<div class="font-label-caps text-[10px] tracking-[0.3em] uppercase opacity-60">Hand-Picked Fabrics</div>
</div>
<div class="space-y-2">
<div class="text-3xl font-display-lg text-primary tracking-tighter">15</div>
<div class="font-label-caps text-[10px] tracking-[0.3em] uppercase opacity-60">Atelier Artisans</div>
</div>
</div>
<div class="pt-8">
<button class="border border-outline-variant px-12 py-6 font-label-caps tracking-[0.3em] uppercase hover:bg-on-background hover:text-background transition-all duration-500">
                        Discover Heritage
                    </button>
</div>
</div>
</div>
</section>
<!-- Bespoke Consultation CTA -->
<section class="relative py-40 overflow-hidden">
<div class="absolute inset-0 bg-[#0A0A0B]">
<div class="absolute top-0 right-0 w-1/2 h-full bg-surface-container opacity-20 transform skew-x-12 translate-x-32"></div>
</div>
<div class="relative z-10 max-w-3xl mx-auto text-center px-gutter">
<h2 class="font-display-lg text-display-lg text-on-background mb-8 uppercase tracking-widest">Commission Your Masterpiece</h2>
<p class="font-body-md text-body-md text-secondary mb-16 opacity-70">
                Experience the precision of Aetheria. Our concierge team will visit your estate for a personal consultation, material sampling, and technical site survey.
            </p>
<form class="space-y-8 max-w-md mx-auto">
<div class="relative group">
<input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-label-caps text-on-background focus:ring-0 focus:border-primary placeholder-zinc-700 transition-all" placeholder="FULL NAME" type="text"/>
</div>
<div class="relative group">
<input class="w-full bg-transparent border-0 border-b border-outline-variant py-4 font-label-caps text-on-background focus:ring-0 focus:border-primary placeholder-zinc-700 transition-all" placeholder="EMAIL ADDRESS" type="email"/>
</div>
<button class="w-full bg-primary text-on-primary font-label-caps text-label-caps py-6 tracking-[0.4em] uppercase hover:bg-white transition-colors duration-500 mt-12">
                    Request Invitation
                </button>
</form>
</div>
</section>
<!-- Footer -->
<footer class="bg-[#0A0A0B] w-full max-w-7xl mx-auto px-12 py-40 flex flex-col items-center gap-16 border-t border-zinc-900">
<div class="text-xl font-serif tracking-[0.3em] text-zinc-50 uppercase">AETHERIA ATELIER</div>
<nav class="flex flex-wrap justify-center gap-12 font-serif tracking-widest uppercase text-[10px]">
<a class="text-zinc-600 hover:text-zinc-300 transition-colors duration-300" href="#">Collections</a>
<a class="text-zinc-600 hover:text-zinc-300 transition-colors duration-300" href="#">Heritage</a>
<a class="text-zinc-600 hover:text-zinc-300 transition-colors duration-300" href="#">Bespoke</a>
<a class="text-zinc-600 hover:text-zinc-300 transition-colors duration-300" href="#">Privacy</a>
</nav>
<div class="flex gap-8 text-zinc-400">
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="share">share</span>
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="location_on">location_on</span>
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="mail">mail</span>
</div>
<div class="text-zinc-400 font-serif tracking-widest uppercase text-[10px] opacity-40">
            © 2024 AETHERIA ATELIER. ALL RIGHTS RESERVED.
        </div>
</footer>
</body></html>