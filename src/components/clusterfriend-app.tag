import './clusterfriend-feed/clusterfriend-feed.tag';

<clusterfriend-app>
    <style>
        .tag-loader{
            height:33vh;
        }
    </style>
    <div each="{f in state.feeds}"> 
        <clusterfriend-feed feed="{f}" items="{parent.state.items}" selecteditem="{parent.state.selectedItem}"></clusterfriend-feed>
    </div>
    <script>
        this.site = this.opts.site;
        this.state = {};

        this.onSubscriptionUpdate = (state) => {
            this.state = state;
            this.update();
        }

        this.on('mount',()=>{
            this.site.subscribe(this.onSubscriptionUpdate);
        });

    </script>
</clusterfriend-app>