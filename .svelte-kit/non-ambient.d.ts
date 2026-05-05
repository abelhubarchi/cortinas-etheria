
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/config-precios";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/config-precios": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/config-precios";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/muestrario/FLOREADO/IMG_8146.jpg" | "/muestrario/FLOREADO/IMG_8146.webp" | "/muestrario/FLOREADO/IMG_8147.jpg" | "/muestrario/FLOREADO/IMG_8147.webp" | "/muestrario/FLOREADO/IMG_8148.jpg" | "/muestrario/FLOREADO/IMG_8148.webp" | "/muestrario/FLOREADO/IMG_8149.jpg" | "/muestrario/FLOREADO/IMG_8149.webp" | "/muestrario/FLOREADO/IMG_8150.jpg" | "/muestrario/FLOREADO/IMG_8150.webp" | "/muestrario/FLOREADO/IMG_8151.jpg" | "/muestrario/FLOREADO/IMG_8151.webp" | "/muestrario/FLOREADO/IMG_8152.jpg" | "/muestrario/FLOREADO/IMG_8152.webp" | "/muestrario/FLOREADO/IMG_8153.jpg" | "/muestrario/FLOREADO/IMG_8153.webp" | "/muestrario/FLOREADO/IMG_8154.jpg" | "/muestrario/FLOREADO/IMG_8154.webp" | "/muestrario/FLOREADO/IMG_8155.jpg" | "/muestrario/FLOREADO/IMG_8155.webp" | "/muestrario/FLOREADO/IMG_8156.jpg" | "/muestrario/FLOREADO/IMG_8156.webp" | "/muestrario/FLOREADO/IMG_8157.jpg" | "/muestrario/FLOREADO/IMG_8157.webp" | "/muestrario/FLOREADO/IMG_8158.jpg" | "/muestrario/FLOREADO/IMG_8158.webp" | "/muestrario/FLOREADO/IMG_8159.jpg" | "/muestrario/FLOREADO/IMG_8159.webp" | "/muestrario/FLOREADO/IMG_8160.jpg" | "/muestrario/FLOREADO/IMG_8160.webp" | "/muestrario/MILRAYAS/IMG_8124.jpg" | "/muestrario/MILRAYAS/IMG_8124.webp" | "/muestrario/MILRAYAS/IMG_8125.jpg" | "/muestrario/MILRAYAS/IMG_8125.webp" | "/muestrario/MILRAYAS/IMG_8126.jpg" | "/muestrario/MILRAYAS/IMG_8126.webp" | "/muestrario/MILRAYAS/IMG_8127.jpg" | "/muestrario/MILRAYAS/IMG_8127.webp" | "/muestrario/MILRAYAS/IMG_8128.jpg" | "/muestrario/MILRAYAS/IMG_8128.webp" | "/muestrario/MILRAYAS/IMG_8129.jpg" | "/muestrario/MILRAYAS/IMG_8129.webp" | "/muestrario/MILRAYAS/IMG_8130.jpg" | "/muestrario/MILRAYAS/IMG_8130.webp" | "/muestrario/MILRAYAS/IMG_8131.jpg" | "/muestrario/MILRAYAS/IMG_8131.webp" | "/muestrario/MILRAYAS/IMG_8132.jpg" | "/muestrario/MILRAYAS/IMG_8132.webp" | "/muestrario/MILRAYAS/IMG_8133.jpg" | "/muestrario/MILRAYAS/IMG_8133.webp" | "/muestrario/MILRAYAS/IMG_8134.jpg" | "/muestrario/MILRAYAS/IMG_8134.webp" | "/muestrario/MILRAYAS/IMG_8135.jpg" | "/muestrario/MILRAYAS/IMG_8135.webp" | "/muestrario/MILRAYAS/IMG_8136.jpg" | "/muestrario/MILRAYAS/IMG_8136.webp" | "/muestrario/MILRAYAS/IMG_8137.jpg" | "/muestrario/MILRAYAS/IMG_8137.webp" | "/muestrario/MILRAYAS/IMG_8138.jpg" | "/muestrario/MILRAYAS/IMG_8138.webp" | "/muestrario/MILRAYAS/IMG_8139.jpg" | "/muestrario/MILRAYAS/IMG_8139.webp" | "/muestrario/MILRAYAS/IMG_8140.jpg" | "/muestrario/MILRAYAS/IMG_8140.webp" | "/muestrario/MILRAYAS/IMG_8141.jpg" | "/muestrario/MILRAYAS/IMG_8141.webp" | "/muestrario/MILRAYAS/IMG_8142.jpg" | "/muestrario/MILRAYAS/IMG_8142.webp" | "/muestrario/MILRAYAS/IMG_8143.jpg" | "/muestrario/MILRAYAS/IMG_8143.webp" | "/muestrario/MILRAYAS/IMG_8144.jpg" | "/muestrario/MILRAYAS/IMG_8144.webp" | "/muestrario/MILRAYAS/IMG_8145.jpg" | "/muestrario/MILRAYAS/IMG_8145.webp" | "/muestrario/RUSTICO/IMG_8105.jpg" | "/muestrario/RUSTICO/IMG_8105.webp" | "/muestrario/RUSTICO/IMG_8106.jpg" | "/muestrario/RUSTICO/IMG_8106.webp" | "/muestrario/RUSTICO/IMG_8107.jpg" | "/muestrario/RUSTICO/IMG_8107.webp" | "/muestrario/RUSTICO/IMG_8108.jpg" | "/muestrario/RUSTICO/IMG_8108.webp" | "/muestrario/RUSTICO/IMG_8109.jpg" | "/muestrario/RUSTICO/IMG_8109.webp" | "/muestrario/RUSTICO/IMG_8110.jpg" | "/muestrario/RUSTICO/IMG_8110.webp" | "/muestrario/RUSTICO/IMG_8111.jpg" | "/muestrario/RUSTICO/IMG_8111.webp" | "/muestrario/RUSTICO/IMG_8112.jpg" | "/muestrario/RUSTICO/IMG_8112.webp" | "/muestrario/RUSTICO/IMG_8113.jpg" | "/muestrario/RUSTICO/IMG_8113.webp" | "/muestrario/RUSTICO/IMG_8114.jpg" | "/muestrario/RUSTICO/IMG_8114.webp" | "/muestrario/RUSTICO/IMG_8115.jpg" | "/muestrario/RUSTICO/IMG_8115.webp" | "/muestrario/RUSTICO/IMG_8116.jpg" | "/muestrario/RUSTICO/IMG_8116.webp" | "/muestrario/RUSTICO/IMG_8117.jpg" | "/muestrario/RUSTICO/IMG_8117.webp" | "/muestrario/RUSTICO/IMG_8118.jpg" | "/muestrario/RUSTICO/IMG_8118.webp" | "/muestrario/RUSTICO/IMG_8119.jpg" | "/muestrario/RUSTICO/IMG_8119.webp" | "/muestrario/RUSTICO/IMG_8120.jpg" | "/muestrario/RUSTICO/IMG_8120.webp" | "/muestrario/RUSTICO/IMG_8121.jpg" | "/muestrario/RUSTICO/IMG_8121.webp" | "/muestrario/RUSTICO/IMG_8122.jpg" | "/muestrario/RUSTICO/IMG_8122.webp" | "/muestrario/RUSTICO/IMG_8123.jpg" | "/muestrario/RUSTICO/IMG_8123.webp" | "/muestrario/RUSTICO2/IMG_8164.jpg" | "/muestrario/RUSTICO2/IMG_8164.webp" | "/muestrario/RUSTICO2/IMG_8165.jpg" | "/muestrario/RUSTICO2/IMG_8165.webp" | "/muestrario/RUSTICO2/IMG_8166.jpg" | "/muestrario/RUSTICO2/IMG_8166.webp" | "/muestrario/RUSTICO2/IMG_8167.jpg" | "/muestrario/RUSTICO2/IMG_8167.webp" | "/muestrario/RUSTICO2/IMG_8168.jpg" | "/muestrario/RUSTICO2/IMG_8168.webp" | "/muestrario/RUSTICO2/IMG_8169.jpg" | "/muestrario/RUSTICO2/IMG_8169.webp" | "/muestrario/RUSTICO2/IMG_8170.jpg" | "/muestrario/RUSTICO2/IMG_8170.webp" | "/muestrario/RUSTICO2/IMG_8171.jpg" | "/muestrario/RUSTICO2/IMG_8171.webp" | "/muestrario/RUSTICO2/IMG_8172.jpg" | "/muestrario/RUSTICO2/IMG_8172.webp" | "/muestrario/RUSTICO2/IMG_8173.jpg" | "/muestrario/RUSTICO2/IMG_8173.webp" | "/muestrario/RUSTICO2/IMG_8174.jpg" | "/muestrario/RUSTICO2/IMG_8174.webp" | "/muestrario/RUSTICO2/IMG_8175.jpg" | "/muestrario/RUSTICO2/IMG_8175.webp" | "/muestrario/RUSTICO2/IMG_8176.jpg" | "/muestrario/RUSTICO2/IMG_8176.webp" | "/muestrario/RUSTICO2/IMG_8177.jpg" | "/muestrario/RUSTICO2/IMG_8177.webp" | "/muestrario/RUSTICO2/IMG_8178.jpg" | "/muestrario/RUSTICO2/IMG_8178.webp" | "/muestrario/RUSTICO2/IMG_8179.jpg" | "/muestrario/RUSTICO2/IMG_8179.webp" | "/muestrario/RUSTICO2/IMG_8181.jpg" | "/muestrario/RUSTICO2/IMG_8181.webp" | "/muestrario/RUSTICO2/IMG_8182.jpg" | "/muestrario/RUSTICO2/IMG_8182.webp" | "/muestrario/RUSTICO2/IMG_8183.jpg" | "/muestrario/RUSTICO2/IMG_8183.webp" | "/muestrario/RUSTICO2/IMG_8184.jpg" | "/muestrario/RUSTICO2/IMG_8184.webp" | "/muestrario/RUSTICO2/IMG_8185.jpg" | "/muestrario/RUSTICO2/IMG_8185.webp" | "/muestrario/RUSTICO2/IMG_8186.jpg" | "/muestrario/RUSTICO2/IMG_8186.webp" | "/muestrario/RUSTICO2/IMG_8187.jpg" | "/muestrario/RUSTICO2/IMG_8187.webp" | "/muestrario/RUSTICO2/IMG_8188.jpg" | "/muestrario/RUSTICO2/IMG_8188.webp" | "/muestrario/RUSTICO2/IMG_8189.jpg" | "/muestrario/RUSTICO2/IMG_8189.webp" | "/muestrario/RUSTICO2/IMG_8190.jpg" | "/muestrario/RUSTICO2/IMG_8190.webp" | "/robots.txt" | string & {};
	}
}