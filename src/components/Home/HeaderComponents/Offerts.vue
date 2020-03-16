<template>
    <div class="offerts">
        <div class="section-1">
            <h1>Premium Services</h1>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt excepturi illum laboriosam, quod ut! Deserunt dolorum eaque exercitationem facere harum id, laboriosam repellat rerum tempora unde, velit vitae voluptates?</p>
        </div>
        <div class="box">
            <Box />
            <Box />
            <Box />
        </div>
    </div>
</template>

<script>
    import Box from "./Box";

    export default {
        name: "Offerts",
        components: {
            Box
        }
    }
</script>
<style scoped>

    .offerts {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: relative;
    }

    .section-1 {
        margin: 2.5rem;
        text-align: center;
        padding: 0 12rem;
    }

    .section-1 h1 {
        margin: 1rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    .section-1 p {
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
        margin: 1rem;
    }

    .box {
        display: flex;
        justify-content: space-around;
    }

</style>