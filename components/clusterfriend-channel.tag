<clusterfriend-channel>
    <div each="{item in opts.state.channels[0].items}">
        <clusterfriend-item state="{opts.state}" item="{item}"></clusterfriend-item>
    </div>
    <script>
        import './clusterfriend-item.tag!';
    </script>
<clusterfriend-channel>