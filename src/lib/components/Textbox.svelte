<script>
    import '../../styles/fonts.css';
    import { onMount } from "svelte";

    let { fontName, fontSize, defaultText, axes } = $props();
    let axesValues = $state(axes.map(() => "50"));

    let el;

    onMount(() => {
        el.style.fontFamily = fontName + ', serif';
        el.style.fontSize = fontSize + 'px';
    })

    function generateStyles(values) {
        let rules = ""
        for(let [i, value] of axes.entries()) {
            rules += `"${axes[i].slug}" `;
            rules += `${values[i]}`;
            if(axes.length > 1 && i != axes.length - 1) {
                rules += ","
            }
        }
        return rules
    }
</script>

<div class="text-container">
    <span bind:this={el} style:font-variation-settings={generateStyles(axesValues)}>{ defaultText }</span>
</div>
{#each axes as axis, i}
    <div class="slider-container-wrapper">
        <div class="slider-container">
            <p>{ axis.title }</p>
            <input type="range" min="0" max="100" bind:value={axesValues[i]}>
        </div>
    </div>
{/each}


<style>
    .text-container {
        width: 100%;
        text-align: center;
        margin: 0 0px;
    }

    .text-container span {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        text-wrap: nowrap;
        font-size: 130px;
        line-height: 3.5;
        color: black;
    }

    .slider-container-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-height: 50px;
        width: 100%;
    }

    .slider-container {
        width: 60%;
    }

    .slider-container p {
        font-family: sans-serif;
    }

    .slider-container input {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
    }

    .slider-container input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
    }

    .slider-container input:focus {
        outline: none;
    }

    .slider-container input::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    .slider-container input::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background: red;
        cursor: pointer;
        margin-top: -5px;
    }

    .slider-container input::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        background: white;
        border-radius: 4px;
        border: 0;
        margin-left: 8px;
        box-shadow: 0px 0px 20px 3px rgba(182,151,230,0.6);
    }

    .slider-container input::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        background: white;
        border-radius: 4px;
        border: 0;
        margin-left: 8px;
        box-shadow: 0px 0px 20px 3px rgba(182,151,230,0.6);
    }

</style>