
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<meta name=\"text-scale\" content=\"scale\" />\n\t\t" + head + "\n\t\t<<script src=\"https://cdn.tailwindcss.com?plugins=forms,container-queries\"></script>\n<link href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap\" rel=\"stylesheet\"/>\n<link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&amp;family=Noto+Serif:wght@400;700&amp;display=swap\" rel=\"stylesheet\"/>\n<script id=\"tailwind-config\">\n      tailwind.config = {\n        darkMode: \"class\",\n        theme: {\n          extend: {\n            \"colors\": {\n                    \"on-primary-fixed-variant\": \"#474743\",\n                    \"on-secondary\": \"#ffffff\",\n                    \"secondary-fixed\": \"#ede0d2\",\n                    \"outline\": \"#787770\",\n                    \"surface-container-lowest\": \"#ffffff\",\n                    \"inverse-surface\": \"#2f312f\",\n                    \"surface-tint\": \"#5f5e5b\",\n                    \"surface-variant\": \"#e3e2e0\",\n                    \"inverse-on-surface\": \"#f2f1ee\",\n                    \"primary-fixed\": \"#e5e2dd\",\n                    \"on-background\": \"#1a1c1a\",\n                    \"on-error-container\": \"#93000a\",\n                    \"on-tertiary-fixed\": \"#1c1c19\",\n                    \"surface-container-highest\": \"#e3e2e0\",\n                    \"primary-fixed-dim\": \"#c9c6c2\",\n                    \"tertiary-fixed-dim\": \"#c8c6c2\",\n                    \"tertiary\": \"#5f5e5b\",\n                    \"tertiary-fixed\": \"#e5e2dd\",\n                    \"surface-container-high\": \"#e9e8e5\",\n                    \"on-tertiary-container\": \"#6f6e6a\",\n                    \"on-surface-variant\": \"#474741\",\n                    \"surface-container-low\": \"#f4f3f1\",\n                    \"on-primary-fixed\": \"#1c1c19\",\n                    \"on-primary\": \"#ffffff\",\n                    \"secondary\": \"#665d52\",\n                    \"surface-container\": \"#efeeeb\",\n                    \"inverse-primary\": \"#c9c6c2\",\n                    \"on-secondary-container\": \"#6c6358\",\n                    \"on-secondary-fixed\": \"#211b12\",\n                    \"on-primary-container\": \"#6f6e6a\",\n                    \"on-tertiary-fixed-variant\": \"#474743\",\n                    \"error-container\": \"#ffdad6\",\n                    \"secondary-fixed-dim\": \"#d1c5b7\",\n                    \"primary\": \"#5f5e5b\",\n                    \"on-surface\": \"#1a1c1a\",\n                    \"error\": \"#ba1a1a\",\n                    \"primary-container\": \"#f5f2ed\",\n                    \"secondary-container\": \"#ede0d2\",\n                    \"on-secondary-fixed-variant\": \"#4d463b\",\n                    \"tertiary-container\": \"#f5f2ed\",\n                    \"background\": \"#faf9f6\",\n                    \"surface-dim\": \"#dbdad7\",\n                    \"on-error\": \"#ffffff\",\n                    \"surface\": \"#faf9f6\",\n                    \"outline-variant\": \"#c8c7be\",\n                    \"on-tertiary\": \"#ffffff\",\n                    \"surface-bright\": \"#faf9f6\"\n            },\n            \"borderRadius\": {\n                    \"DEFAULT\": \"0.125rem\",\n                    \"lg\": \"0.25rem\",\n                    \"xl\": \"0.5rem\",\n                    \"full\": \"0.75rem\"\n            },\n            \"spacing\": {\n                    \"container-max\": \"1440px\",\n                    \"section-padding\": \"120px\",\n                    \"margin-desktop\": \"80px\",\n                    \"unit\": \"4px\",\n                    \"gutter\": \"24px\"\n            },\n            \"fontFamily\": {\n                    \"body-md\": [\"Manrope\"],\n                    \"headline-lg\": [\"Noto Serif\"],\n                    \"headline-md\": [\"Noto Serif\"],\n                    \"body-lg\": [\"Manrope\"],\n                    \"display-xl\": [\"Noto Serif\"],\n                    \"label-caps\": [\"Manrope\"]\n            },\n            \"fontSize\": {\n                    \"body-md\": [\"16px\", {\"lineHeight\": \"24px\", \"fontWeight\": \"400\"}],\n                    \"headline-lg\": [\"40px\", {\"lineHeight\": \"48px\", \"fontWeight\": \"400\"}],\n                    \"headline-md\": [\"32px\", {\"lineHeight\": \"40px\", \"fontWeight\": \"400\"}],\n                    \"body-lg\": [\"18px\", {\"lineHeight\": \"28px\", \"fontWeight\": \"400\"}],\n                    \"display-xl\": [\"64px\", {\"lineHeight\": \"72px\", \"letterSpacing\": \"-0.02em\", \"fontWeight\": \"400\"}],\n                    \"label-caps\": [\"12px\", {\"lineHeight\": \"16px\", \"letterSpacing\": \"0.1em\", \"fontWeight\": \"600\"}]\n            }\n          },\n        },\n      }\n    </script>\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "xfuil"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
