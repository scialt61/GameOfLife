<template>
    <div v-on:click="setValue" v-bind:class="[activeClass]"></div>
</template>

<script>
    export default {
        props: ["data", "row", "column"],

        methods: {
            // Sets the cell's value
            setValue() {
                this.$store.commit({
                    type: "setCell",
                    row: this.row,
                    column: this.column,
                    value: true
                });
            }
        },

        computed: {
            // Returns the active class
            activeClass() {
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