<script>
    import FeedItem from './components/FeedItem.svelte'
    import fetch from 'unfetch';

    let items = [];
    let home = '';

    function sortItems(l,r){
        let ldat = (l.date_published||''>l.date_modified||'')?l.date_published||'':l.date_modified||'';
        let rdat = (r.date_published||''>r.date_modified||'')?r.date_published||'':r.date_modified||'';
        return ldat<rdat?1:-1;
    }

    async function loadFeed(url){
        let feed = await fetch(url).then(r=>r.json());
        items = feed.items;
        items.sort(sortItems);
        home=feed.home_page_url;
    }
    
    loadFeed('feed.json');
</script>

<div class="h-feed">
    {#each items as item}
    <FeedItem {item} {home}></FeedItem>
    {/each}
</div>