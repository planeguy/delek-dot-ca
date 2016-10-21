import './clusterfriend-channel/clusterfriend-channel.tag!';

<clusterfriend-app>
    <clusterfriend-channel channel="{state.channels.channel}" items="{state.items}" selecteditem="{state.selectedItem}"></clusterfriend-channel>
    <script>
        this.site = this.opts.site;

        this.onSubscriptionUpdate = (state) => {
            console.log(state);
            this.state = state;
            this.update();
        }

        this.on('mount',()=>{
            this.site.subscribe(this.onSubscriptionUpdate);
        });
        
    </script>
</clusterfriend-app>