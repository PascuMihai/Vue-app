<template>
    <div class="container">
        <NavBar />
        <div class="contact-content">
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
</template>

<script>
    import ContactForm from "./ContactForm";
    import NavBar from "../Home/HeaderComponents/NavBar";
    import ContactInfo from "./ContactInfo";

    export default {
        name: "Contact",
        components: {
            ContactInfo,
            NavBar,
            ContactForm
        }
    }
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        background-image: url(/images/contactImg.jpg);
        background-size: cover;
        background-position: center;
        height: 100vh;
        box-shadow: inset 3px 3px 90px #110f0f, inset -5px -5px 90px #110f0f;
    }

    .contact-content {
        display: flex;
        justify-content: space-between;
        padding: 3rem 5rem;
    }

</style>