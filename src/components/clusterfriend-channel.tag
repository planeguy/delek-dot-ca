import 'components/clusterfriend-item.tag!';

<clusterfriend-channel>
    <div each="{selecteditem in (!!opts.state.selectedItem.guid?[opts.state.selectedItem.guid]:[])}">
        <clusterfriend-item item="{parent.opts.state.items[selecteditem]}" state="{parent.opts.state}"></clusterfriend-item>
    </div>
    <div each="{item in (!!opts.state.selectedItem.guid?[]:opts.channel.items)}">
        <clusterfriend-item item="{parent.opts.state.items[item]}" state="{parent.opts.state}"></clusterfriend-item>
    </div>
</clusterfriend-channel>