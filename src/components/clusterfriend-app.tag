import ClusterfriendSite from '../app/ClusterfriendSite';
import './clusterfriend-channel.tag!';

<clusterfriend-app>
    <clusterfriend-channel channel="{state.channels[opts.feed]}" state="{state}"></clusterfriend-channel>
    <script>
        this.onSubscriptionUpdate = (state) => {
            this.state = state;
            this.update();
        }
        this.site = new ClusterfriendSite({
            feedurl: this.opts.feed,
            subscription: this.onSubscriptionUpdate
        });
        this.site.loadFeed();
    </script>
</clusterfriend-app>