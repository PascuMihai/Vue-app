<template>
    <div class="application">
        <Header />
        <Offerts />
        <Body />
    </div>
</template>

<script>
    import Header from "./components/Home/HeaderComponents/Header";
    import Offerts from "./components/Home/HeaderComponents/Offerts";
    import Body from "./components/Home/BodyComponents/Body";
export default {
    name: "Application",
    components: {
        Header,
        Offerts,
        Body
    }
}
</script>

<style scoped>

</style>