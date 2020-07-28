<template>
    <div id="tickrate-input">
        <div id="tickrate-input-title" class="text-component tickrate-input-child">Enter Tickrate:</div>

        <div id="tickrate-input-main" class="tickrate-input-child">
            <input @update="emitToParent" v-model="tickrateString">
        </div>

        <div id="tickrate-input-warning" class="text-component" v-if="!isValidTickrate">Input could not be parsed into an integer!</div>
    </div>
</template>

<style scoped>
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