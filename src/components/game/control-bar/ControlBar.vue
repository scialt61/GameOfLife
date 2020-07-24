<template>
    <div id="control-bar">
        <play-button />
    </div>
</template>

<script>
    import PlayButton from "./PlayButton.vue";

    export default {
        components: {
            "play-button": PlayButton
        }
    };
</script>

<style scoped>
    #control-bar {
        display: grid;

        grid-template-columns: 25% auto;

        border-top: solid 3px rgb(25, 25, 25);
    }
</style>