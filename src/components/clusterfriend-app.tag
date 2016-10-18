import AjaxFeedLoader from 'src/app/feed-loaders/AjaxFeedLoader';
import ClusterfriendSite from 'src/app/ClusterfriendSite';
import './clusterfriend-channel/clusterfriend-channel.tag!';

<clusterfriend-app>
    <clusterfriend-channel channel="{state.channels[feed]}" items="{state.items}" selecteditem="{state.selectedItem}"></clusterfriend-channel>
    <script>
        this.onSubscriptionUpdate = (state) => {
            this.state = state;
            this.update();
        }


        let route = ()=>{
            let h = location.hash
            if(!!h){
                //remove the '#'
                h=h.substring(1)
                ;
                while(h[0]=='/') h=h.substring(1);

                let firstSlashIdx = h.indexOf('/');
                if (firstSlashIdx > 0){
                    // if there is a '/' then the # is in the format feed/id
                    this.feed = h.substring(0, firstSlashIdx);
                    this.id = h.substring(firstSlashIdx+1);
                }
                else {
                    //if there is no '/' the hash is just the feed name 
                    this.feed = h;
                    this.id = undefined;
                }
            } else {
                this.feed = this.opts.feed;
                this.id = undefined;
            }
        }

        let load = (feed) => {
            this.site = new ClusterfriendSite({
                loader: new AjaxFeedLoader({feed: this.feed}),
                subscription: this.onSubscriptionUpdate
            });
            this.site.loadFeed();
        }

        let select = (id)=>{
            this.site.selectItemById(id);
        }

        let page = ()=>{
            route();
            load(this.feed);
            if(!!this.id) select(this.id);
        }

        this.on('mount',()=>{
            page();
            window.addEventListener('popstate', function() {
                page();
            });
        })
        
    </script>
</clusterfriend-app>