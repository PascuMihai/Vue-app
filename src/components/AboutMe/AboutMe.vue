<template>
    <div>
        <div class="about-container">
            <NavBar />
        </div>
    </div>
</template>

<script>
    import NavBar from "../Home/HeaderComponents/NavBar";
    export default {
        name: "AboutMe",
        components: {NavBar}
    }
</script>

<style scoped>

    .about-container {
        background-image: url(/images/aboutme.jpg);
        background-size: cover;
        background-position: center;
        height: 100vh;
        box-shadow: inset 3px 3px 90px #110f0f, inset -5px -5px 90px #110f0f;
    }

</style>