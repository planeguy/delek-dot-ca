import App from './App.svelte';

const app = new App({
    target: document.querySelector('feed'),
    props: {
        url:'feed.json'
    }
});

export default app;