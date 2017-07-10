import './json-feed.tag';
<feed-app>
    <json-feed if="{opts.feed.feed}" items="{opts.feed.items}" ordered="{opts.feed.itemsorder}" selecteditem="{opts.feed.selecteditem}"></json-feed>
    <script>
        this.opts.feed.subscribe('updated',this.update.bind(this));
    </script>
</feed-app>