import AjaxFeedLoader from 'src/app/data/feed-loaders/AjaxFeedLoader';
import ClusterfriendSite from 'src/app/ClusterfriendSite';
import {parseRoute} from 'src/app/clusterfriend-common';

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
            let parsed = parseRoute(h);
            this.feed = parsed.feed || this.opts.feed;
            this.id = parsed.id;
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