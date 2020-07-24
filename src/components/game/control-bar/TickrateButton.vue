<template>
    <div id="tickrate-button" class="control-button" @click="changeTickrate">Change Tickrate</div>
</template>

<script>
    export default {
        methods: {
            // Changes the tickrate
            changeTickrate() {
                let value = parseInt(prompt("Enter Tickrate"));
                console.log(value);

                if (value === NaN)
                    alert("Enter a valid string!");
                else
                    this.setTickrate(value);
            }
        }
    };
</script>