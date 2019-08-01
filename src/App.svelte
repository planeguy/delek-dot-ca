<script>
    import FeedItem from './components/FeedItem.svelte'
    import fetch from 'unfetch';
    import {sortFeedItems} from './sortFeedItems.js';

    let items = [];
    let home = '';

    async function loadFeed(url){
        let feed = await fetch(url).then(r=>r.json());
        items = feed.items;
        items.sort(sortItems);
        home=feed.home_page_url;
    }
    
    export let url='feed.json';
    loadFeed(url);
</script>

<div class="h-feed">
    {#each items as item}
    <FeedItem {item} {home}></FeedItem>
    {/each}
</div>