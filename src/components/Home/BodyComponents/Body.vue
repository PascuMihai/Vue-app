<template>
    <div class="body">
        <Products />
        <Footer />
    </div>
</template>

<script>
    import Products from "./Products";
    import Footer from "./Footer";

    export default {
        name: 'Body',
        components: {
            Footer,
            Products
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .body {
        height: 60vh;
        display: flex;
        flex-direction: column;
        background: whitesmoke;
    }
</style>