import ClusterfriendSite from '../app/ClusterfriendSite';
import './clusterfriend-channel.tag!';

<clusterfriend-app>
    <clusterfriend-channel channel="{state.channels[opts.feed]}" state="{state}"></clusterfriend-channel>
    <script>
        this.site = new ClusterfriendSite({
            feedurl: this.opts.feed,
            subscription: (state)=>{
                this.state=state;
                this.update();
            }
        });
        this.site.loadFeed();
    </script>
</clusterfriend-app>