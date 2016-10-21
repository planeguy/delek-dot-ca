import AjaxFeedLoader from 'src/app/data/feed-loaders/AjaxFeedLoader';
import ClusterfriendSite from 'src/app/ClusterfriendSite';
import {parseRoute} from 'src/app/clusterfriend-common';

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

        let route = ()=>{
            let h = location.hash
            let parsed = parseRoute(h);
            this.feed = parsed.feed || this.opts.feed;
            this.id = parsed.id;
        }

        this.on('mount',()=>{
            this.site.subscribe(this.onSubscriptionUpdate);
        });
        
    </script>
</clusterfriend-app>