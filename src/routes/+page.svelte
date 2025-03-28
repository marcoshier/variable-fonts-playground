<script>
    import Header from "$lib/components/Header.svelte";
    import Section from "$lib/components/Section.svelte";
    import Slider from "$lib/components/Textbox.svelte";

    const { data } = $props();
</script>

<Header></Header>
{#each data.data as sectionData }
    <Section data = { sectionData }></Section>
{/each}
<div id="footer">
    <p>© Caterina Santullo</p>
    <p>code by <a href="https://www.instagram.com/marcoshier">marco dell'abate</a></p>
</div>

<style>

    @font-face {
        font-family: "Fase";
        src: url("/fonts/Fase-Regular.otf") format("opentype");
    }

    :global(body) {
        overflow-x: hidden;
        font-family: "Fase";
    }


    #footer {
        position: relative;
        width: 100%;
        height: 150px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        box-sizing: border-box;
    }

    #footer p {
        display: block;
    }
</style>