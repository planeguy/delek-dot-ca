import '../clusterfriend-item/clusterfriend-item.tag';

<clusterfriend-feed>
    <!-- if an item is selected --> 
    <div if="{!!opts.selecteditem && !!opts.selecteditem.guid}">
        <clusterfriend-item item="{opts.items[opts.selecteditem.guid]}" base="{opts.base}"></clusterfriend-item>
    </div>
    <!-- if an item is NOT selected -->
    <div if="{!opts.selecteditem || !opts.selecteditem.guid}">
        <div each="{item in opts.feed.items}">
            <clusterfriend-item item="{parent.opts.items[item]}" base="{parent.opts.base}"></clusterfriend-item>
        </div>
    </div>
</clusterfriend-feed>