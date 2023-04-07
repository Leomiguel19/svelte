import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Leonardo',
		lastName: 'Guilarte',
	}
});

export default app;