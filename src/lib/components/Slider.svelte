<script>
    let value = $state("50");
    let { word } = $props();
</script>

<div id="container">
    <div class="text-container">
        <span style="--val1: {value}">{ word }</span>
    </div>
    <div class="slider-container">
        <p>{ value }</p>
        <input type="range" min="0" max="100" bind:value>
    </div>
</div>

<style>
    @font-face {
        font-family: "NeedleworkVF";
        src: url("NeedleworkVF.woff2") format("woff2-variations");
        font-style: normal;
        font-display: block;
    }

    #container {
        position: relative;
        display: flex;
        flex-direction: column;
        margin: 20px;
        display: block;
        padding: 20px;
        background: lightgray;
    }

    .slider-container {
        min-height: 50px;
        width: 100%;
    }

    .slider-container input {
        width: 100%;
    }

    .text-container {
        width: 100%;
    }

    .text-container span {
        font-family: 'NeedleworkVF';
        font-feature-settings: "calt", "liga", "rlig", "rvrn", "kern", "rclt";
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-size: 170px;
        font-variation-settings: "SQRS" var(--val1);
        color: black;
    }
</style>