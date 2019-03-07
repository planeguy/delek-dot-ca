import App from './App.svelte';

const app = new App({
    target: document.querySelector('postapp'),
    props: {
        photosurl: settings.photosurl
    }
});

export default app;