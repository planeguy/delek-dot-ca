#Clusterfriend-rss
##General protocol of clusterfriend-rss
1. user has a profile channel
1. profile channel link = profile or self
1. items are links to channels using soc:channel element
1. channels are perma-linked feed of items
1. item permalinks = self i.e http://webhost/channel#item

##Custom fields
###Protocol
  - **cf:isProfile** added to channel to mark a channel is a profile channel
  - **cf:isFull** added to channel to mark it as full and that a new one could be available
###Social
  - **cf:re** a channel item permalink that this item refers to
  - **cf:feel** a feeling to add to this post