import '../clusterfriend-item/clusterfriend-item.tag';

<clusterfriend-feed>
    <!-- if an item is selected --> 
    <div if="{!!opts.selecteditem && !!opts.selecteditem.url}">
        <clusterfriend-item item="{opts.items[opts.selecteditem.url]}"></clusterfriend-item>
    </div>
    <!-- if an item is NOT selected -->
    <div if="{!opts.selecteditem || !opts.selecteditem.url}">
        <div each="{item in opts.feed.items}">
            <clusterfriend-item item="{parent.opts.items[item]}"></clusterfriend-item>
        </div>
    </div>
</clusterfriend-feed>