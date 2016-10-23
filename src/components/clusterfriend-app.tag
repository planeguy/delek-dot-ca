import './clusterfriend-channel/clusterfriend-channel.tag!';

<clusterfriend-app>
    <style>
        .tag-loader{
            height:33vh;
        }
    </style>
    <div each="{f in state.site.channels}"> 
        <clusterfriend-channel channel="{parent.state.channels[f]}" items="{parent.state.items}" selecteditem="{parent.state.selectedItem}"></clusterfriend-channel>
    </div>
    <div class="tag-loader" if="{!state.site['end-of-channels']}">
        WAIT...
    </div>
    <strong class="eol" if="{state.site['end-of-channels']}">END OF LINE.</strong>
    <script>
        this.site = this.opts.site;
        this.state = {};

        this.onSubscriptionUpdate = (state) => {
            console.log(state);
            this.state = state;
            this.update();
            this.checkForLoadNext();
        }

        this.checkForLoadNext =(e)=>{
            if(!!this.state.site['end-of-channels'] || this.state.site['channel-requested']) return;
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
                this.site.loadNext();
            }
        }

        this.on('mount',()=>{
            this.site.subscribe(this.onSubscriptionUpdate);
            this.checkForLoadNext();
            document.addEventListener('scroll',this.checkForLoadNext);
            document.addEventListener('resize',this.checkForLoadNext);
        });

    </script>
</clusterfriend-app>