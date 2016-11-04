import './clusterfriend-feed/clusterfriend-feed.tag!';

<clusterfriend-app>
    <style>
        .tag-loader{
            height:33vh;
        }
    </style>
    <div each="{f in state.site.feeds}"> 
        <clusterfriend-feed feed="{parent.state.feeds[f]}" items="{parent.state.items}" selecteditem="{parent.state.selectedItem}" base="{site.base}"></clusterfriend-feed>
    </div>
    <div class="tag-loader" if="{!state.site['end-of-feeds']}">
        WAIT...
    </div>
    <strong class="eol" if="{state.site['end-of-feeds']}">END OF LINE.</strong>
    <script>
        this.site = this.opts.site;
        this.state = {};

        this.onSubscriptionUpdate = (state) => {
            this.state = state;
            this.update();
            this.checkForLoadNext();
        }

        this.checkForLoadNext =(e)=>{
            if(!this.state.site || !!this.state.site['end-of-feeds'] || this.state.site['feed-requested']) return;
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