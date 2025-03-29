<script>
    import Textbox from "./Textbox.svelte";
    import Slider from "./Textbox.svelte";
    let { data } = $props();
</script>

<div class="section">
    <div class="section-header">
        <div class="title-container">
            { data.title }
        </div>
        <div class="year-container">
            { data.year }
        </div>
    </div>
    <Textbox 
        fontName = { data.title }
        fontSize = { data.sizePx }
        defaultText = { data.defaultText }
        axes = { data.axes }>
    </Textbox>
</div>

<style>
    :global(.section) {
        position: relative;
        width: 100%;
        min-height: 400px;
        display: block;
        box-sizing: border-box;
        padding: 20px;
        background: white;
        margin: 180px 0;
    }

    :global(.section-header) {
        width: 100%;
        height: 20px;
        display: flex;
        flex-direction: row;
    }

    :global(.title-container) {
        font-family: "Fase";
        width: 400px;
        font-weight: 500;
        font-size: 16px;
        color: black;
    }

    :global(.year-container) {
        max-width: 80px;
        font-weight: 300;
        font-size: 14px;
        color: gray;
    }
</style>