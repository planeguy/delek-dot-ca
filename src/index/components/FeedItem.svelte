<script>
    import RColor from './rcolor-esm.js';
    import FeedItemText from './FeedItemText.svelte';
    import FeedItemImage from './FeedItemImage.svelte';

    export let item={}, home='';
    let bg = (new RColor()).get(false,0.60,0.99);

    let images=(item.attachments||[]).filter(a=>a.mime_type!=undefined &&(a.mime_type=='image'||a.mime_type.indexOf('image/')===0));
    if(item.image!=undefined) images.unshift(item.image);

    let permalink=`${home}#${item.id}`;
</script>

<article class="feed-item h-entry" style="--red:{bg[0]}; --green:{bg[1]}; --blue:{bg[2]};">
    <a href="#{item.id}"><time class="dt-published" datetime="{item.date_published}">{item.date_published}</time></a>
    <div class="e-content">
        <FeedItemText text="{item.content_text}"></FeedItemText>
        {#each images as image}
        <FeedItemImage url="{image.url}"></FeedItemImage>
        {/each}
        {#if item.external_url!=undefined}
        <div class="ext-url"><a href="{item.external_url}">{item.external_url}</a></div>
        {/if}
    </div>
    <a class="u-url" href="{permalink}">{permalink}</a>
</article>

<style>
:root {
   --accessible-color: calc(
    (
      (
        (var(--red) * 299) +
        (var(--green) * 587) +
        (var(--blue) * 114)
      ) - 128000 /* HIGHLIGHT */
    ) * -1000
  );
}

.feed-item {
    color: rgb(
      var(--accessible-color),
      var(--accessible-color),
      var(--accessible-color)
    );
    background-color: rgb(
        var(--red),
        var(--green),
        var(--blue)
    );
}
</style>