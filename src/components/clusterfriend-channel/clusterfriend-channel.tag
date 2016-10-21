import '../clusterfriend-item/clusterfriend-item.tag!';

<clusterfriend-channel>
    <!-- if an item is selected --> 
    <div if="{!!opts.selecteditem && !!opts.selecteditem.guid}">
        <clusterfriend-item item="{opts.items[opts.selecteditem.guid]}"></clusterfriend-item>
    </div>

    <!-- if an item is NOT selected -->
    <div each="{item in (!!opts.selecteditem.guid?[]:opts.channel.items)}">
        <clusterfriend-item item="{parent.opts.items[item]}"></clusterfriend-item>
    </div>

    <script>
        this.on('update',()=>{
            console.log(this.opts.channel);
        })
</clusterfriend-channel>