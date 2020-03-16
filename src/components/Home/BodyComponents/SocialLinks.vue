<template>
    <div class="links">
        <a href="/"><i class="fa fa-facebook"></i></a>
        <a href="/"><i class="fa fa-github"></i></a>
        <a href="/"><i class="fa fa-linkedin"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'SocialLinks'
    }
</script>

<style scoped>

    .links {
        margin: 2rem;
        padding: 2rem;
    }

    .links a {
        margin: 5rem;
        text-decoration: none;
        font-size: 4rem;
        color: white;
    }

    .links a:hover {
        color: dodgerblue;
        transition: 0.4s;
    }

</style>