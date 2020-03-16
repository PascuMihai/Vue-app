<template>
    <div>
        <nav class="nav-bar">
            <p class="logo"></p>
            <div>
                <router-link to="/" >Home</router-link>
                <router-link to="/about" >About Me</router-link>
                <router-link class="active" to="/contact" >Contact</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name:"NavBar"
    }
</script>

<style scoped>

    .nav-bar {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
    }

    .nav-bar a {
        margin-right: 5rem;
        font-size: 1.1rem;
        text-decoration: none;
        color: whitesmoke;
        font-weight: 100;
    }

    .active {
        padding: 1rem 2rem;
        border: 1px solid white;
        background: transparent;
        border-radius: 2rem;
    }

    .active:hover {
        transition: 1s;
        border: 1px solid black;
    }

    .nav-bar a:hover {
        transition: 1s;
        color: black;
    }

</style>