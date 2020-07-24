<template>
    <div id="control-bar">
        <play-button />
        <clear-button />
    </div>
</template>

<script>
    import ClearButton from "./ClearButton.vue";
    import PlayButton from "./PlayButton.vue";

    export default {
        components: {
            "clear-button": ClearButton,
            "play-button": PlayButton
        }
    };
</script>

<style scoped>
    #control-bar {
        display: grid;

        grid-template-columns: 25% 25% auto;

        border-top: solid 3px rgb(25, 25, 25);
    }
</style>

<style>
    .control-button {
        display: flex;

        justify-content: center;
        align-items: center;

        color: rgb(255, 255, 255);

        font-size: 200%;

        font-family: "Helvetica";

        user-select: none;
    }

    .control-button:hover {
        background-color: rgb(45, 45, 45);
    }
</style>