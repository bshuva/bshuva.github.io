<script lang="ts">
    import { preventDefault } from "svelte/legacy";

    import BiggerPicture from "bigger-picture";
    import "bigger-picture/css";

    import { onMount } from "svelte";

    let { images } = $props();

    let biggerPicture;
    let imageLinks;

    onMount(() => {
        biggerPicture = new BiggerPicture({
            target: document.body,
        });

        imageLinks = document.querySelectorAll(".gallery-link");
    });

    function openGallery(event) {
        biggerPicture.open({
            items: imageLinks,
            el: event.currentTarget,
        });
    }
</script>

<div id="gallery">
    {#each images as image}
        <a
            class="gallery-link"
            href={image.default.src}
            data-img={image.default.src}
            data-thumb={image.default.src}
            data-width={image.default.width}
            data-height={image.default.height}
            onclick={preventDefault(openGallery)}
        >
            <img src={image.default.src} />
        </a>
    {/each}
</div>

<style>
    #gallery {
        display: flex;
        align-items: end;
        justify-content: center;
        flex-wrap: wrap;
    }

    img {
        max-height: 40vh;
    }
</style>
