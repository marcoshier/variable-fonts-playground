<script>
    import Slider from "$lib/components/Slider.svelte";

    const words = [
        "carota",
        "pisello",
        "peperone",
        "durian"
    ]

</script>

{#each words as word}
    <Slider word = { word }></Slider>
{/each}