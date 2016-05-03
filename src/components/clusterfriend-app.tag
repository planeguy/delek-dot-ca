import ClusterfriendSite from '../app/ClusterfriendSite';
import 'components/clusterfriend-channel.tag!';

<clusterfriend-app>
    <clusterfriend-channel channel="{state.channels[opts.feed]}" state="{state}"></clusterfriend-channel>
    <script>
        this.site = ClusterfriendSite({
            feedurl: this.opts.feed,
            subscription: () => {
                this.state = this.opts.store.getState();
                this.update();
            }
        });
    </script>
</clusterfriend-app>