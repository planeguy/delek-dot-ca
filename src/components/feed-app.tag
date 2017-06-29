import './json-feed.tag';
<feed-app>
    <json-feed items="{opts.feed.items}" ordered="{opts.feed.itemsorder}" selecteditem="{opts.feed.selecteditem}"></json-feed>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));
        this.opts.feed.subscribe('updated',()=>console.log('updated'));
    </script>
</feed-app>