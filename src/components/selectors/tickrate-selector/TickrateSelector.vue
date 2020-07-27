<template>
    <div id="tickrate-selector-container">
        <div id="tickrate-selector">
            <div id="tickrate-selector-title" class="text-component">Tickrate</div>
            
            <div id="tickrate-selector-main"></div>

            <div id="tickrate-selector-exit-button" class="text-component" @click="setSelector(enums.selectors.none)">Exit</div>
        </div>
    </div>
</template>

<script>
    export default {};
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

        border-right: 2px solid black;
        border-bottom: 2px solid black;
    }

    #tickrate-selector-title {
        font-size: 170%;
    }

    #tickrate-selector-exit-button:hover {
        background-color: rgb(30, 30, 30);
    }
</style>