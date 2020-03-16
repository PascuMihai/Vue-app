<template>
    <div>
        <div class="products-container">
            <div class="content">
                <h1>Products and Services.</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur consequuntur dignissimos ea eos, est excepturi, inventore maiores nemo nihil perspiciatis quidem quos saepe, sapiente tenetur velit vitae voluptas voluptates! A aliquam, consequatur deserunt dolorem ducimus ea eligendi exercitationem expedita incidunt minima nemo nulla perferendis quae reiciendis sapiente? Deleniti, laborum?</h4>
            </div>
            <SocialLinks />
        </div>
    </div>
</template>

<script>
    import SocialLinks from "./SocialLinks";
    export default {
        name: "Products",
        components: {SocialLinks},
        props: ["text"]
    }
</script>

<style scoped>

    .products-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url(/images/img1.jpg);
        background-size: cover;
        background-position: center;
        border: 1px solid;
        align-items: center;
        height: 100vh;
        box-shadow: inset 3px 3px 70px #110f0f, inset -3px -3px 70px #110f0f;
    }

    .content {
        text-align: center;
        margin: 2rem 25rem;
    }

    .content h1 {
        font-size: 3.5rem;
        font-weight: 400;
        margin: 2rem;
        color: white;
        letter-spacing: 0.2rem;
    }

    .content h4 {
        font-size: 1.5rem;
    }


</style>