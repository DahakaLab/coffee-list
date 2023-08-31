import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const devPort = env.DEV_PORT ? parseInt(env.DEV_PORT) ?? 5173 : 5173;
	const prevPort = env.PREV_PORT ? parseInt(env.PREV_PORT) ?? 4173 : 4173;

	return {
		preview: {
			port: prevPort
		},
		server: {
			port: devPort
		},
		plugins: [
			sveltekit(),
			svg({
				type: 'component'
			})
		]
	};
});
