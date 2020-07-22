<template>
    <div id="cell" v-bind:class="[activeClass]"></div>
</template>

<script>
    export default {
        props: ["data"],

        computed: {
            // Returns the active class
            activeClass: function() {
                return this.data ? "cell-on" : "cell-off";
            }
        }
    };
</script>

<style scoped>
    .cell-off {
        border: 1px solid rgb(25, 25, 25);
    }

    .cell-off:hover {
        background-color: rgb(45, 45, 45);
    }

    .cell-on {
        background-color: rgb(215, 215, 215);
        border: 1px solid rgb(195, 195, 195);
    }

    .cell-on:hover {
        background-color: rgb(235, 235, 235);
    }
</style>