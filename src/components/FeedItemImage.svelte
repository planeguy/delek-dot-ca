<script>
    export let url='';
</script>
<div class="item-image" style="background-image:url({url});background-color:transparent;">
    <img class="image u-photo" src="{url}" alt="posted image" />
</div>
<style>
    .item-image {
        margin:0;
        padding:0;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        overflow: hidden;
        height:90vh;
        width:auto;
        background-size: auto 100vh;
    }
    .item-image .image {
        visibility:hidden;
        margin:0;
        height:90vh;
        width:auto;
    }
</style>