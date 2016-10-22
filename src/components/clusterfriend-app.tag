import './clusterfriend-channel/clusterfriend-channel.tag!';

<clusterfriend-app>
    <div each="{f in state.site.channels}"> 
        <clusterfriend-channel channel="{parent.state.channels[f]}" items="{parent.state.items}" selecteditem="{parent.state.selectedItem}"></clusterfriend-channel>
    </div>
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