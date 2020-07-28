<template>
    <div id="tickrate-selector-container">
        <div id="tickrate-selector">
            <div id="tickrate-selector-title" class="text-component">Tickrate</div>
            
            <div id="tickrate-input">
                <div id="tickrate-input-title" class="text-component tickrate-input-child">Enter Tickrate:</div>

                <div id="tickrate-input-main" class="tickrate-input-child">
                    <input v-model="tickrateString">
                </div>

                <div id="tickrate-input-warning" class="text-component" v-if="!isValidTickrate">Input could not be parsed into an integer!</div>
            </div>

            <div id="tickrate-selector-exit-button" class="text-component" @click="onClick">Exit</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // String representation of the tickrate
                tickrateString: ""
            }
        },

        computed: {
            // Calculated tickrate
            calculatedTickrate() {
                let trimmed = this.tickrateString.trim();

                return parseInt(trimmed);
            },

            // Is the inputted tickrate valid?
            isValidTickrate() {
                return !Number.isNaN(this.calculatedTickrate);
            }
        },

        methods: {
            // Updates the tickrate
            updateTickrate() {
                if (this.isValidTickrate)
                    this.setTickrate(this.calculatedTickrate);
            },

            // Runs on click
            onClick() {
                this.updateTickrate();
                this.setSelector(this.enums.selectors.none);
            }
        }
    };
</script>

<style scoped>
    #tickrate-selector-container {
        grid-row: 1;
        grid-column: 1;

        display: grid;
        
        grid-template-rows: 30% auto 30%;
        grid-template-columns: 45% auto 45%;

        background-color: rgba(0, 0, 0, 0.75);
    }

    #tickrate-selector {
        grid-row: 2;
        grid-column: 2;

        display: grid;

        grid-template-rows: 20% auto 20%;

        background-color: rgb(22, 22, 22);

        box-shadow: 5px 5px 5px black;
    }

    #tickrate-selector-title {
        font-size: 170%;

        border-bottom: 2px solid black;
    }

    #tickrate-selector-exit-button {
        font-size: 135%;

        border-top: 2px solid black;
    }

    #tickrate-selector-exit-button:hover {
        background-color: rgb(30, 30, 30);
    }

    #tickrate-input {
        display: flex;

        justify-content: center;
        align-items: center;

        flex-direction: column;

        padding: 5px;
    }

    .tickrate-input-child {
        margin: 5px;
    }

    #tickrate-input-main {
        display: flex;

        justify-content: center;
        align-items: center;

        text-align: center;
    }

    #tickrate-input-warning {
        font-size: 85%;

        color: rgb(255, 0, 0);
    }
</style>