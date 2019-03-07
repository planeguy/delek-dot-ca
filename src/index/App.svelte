<script>
    import FeedItem from './components/FeedItem.svelte'
    import fetch from 'unfetch';
    import {sortFeedItems} from '../sortFeedItems.js';

    let items = [];

    async function loadFeed(url){
        let feed = await fetch(url).then(r=>r.json());
        console.log(feed)
        items = feed.items;
        items.sort(sortFeedItems);
    }
    
    loadFeed('feed.json');
</script>

{#each items as item}
<FeedItem {item}></FeedItem>
{/each}