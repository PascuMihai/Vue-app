<template>
    <div class="header-content">
        <div class="header-slideshow">
            <h1>Looking for professional website.</h1>
            <p>My name is Mihai, I'm a passionate freelance developer specialized in building high end UX/UI for your applications.</p>
        </div>
        <ButtonSection />
    </div>
</template>

<script>
    import ButtonSection from "./ButtonSection";

    export default {
        name: 'HeaderComponent',
        components: {
            ButtonSection
        }

    }
</script>

<style scoped>

    .header-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 3rem;
    }

    .header-slideshow {
        margin: 1.3rem;
        margin-left: 8rem;;
        color: white;
        width: 50%;
    }

    .header-slideshow h1 {
        font-size: 3.4rem;
        letter-spacing: 0.2rem;
        padding-top: 1.5rem;
    }

    .header-slideshow p {
        margin-top: 2rem;
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
</style>