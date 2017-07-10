import './feed-item.tag'
<json-feed>
    <feed-item if="{opts.selecteditem!=undefined&&opts.items[opts.selecteditem]!=undefined}" item="{opts.items[opts.selecteditem]}"></feed-item>
    <feed-item if="{opts.selecteditem===undefined}" each="{id in opts.ordered}" item="{parent.opts.items[id]}"></feed-item>
</json-feed>