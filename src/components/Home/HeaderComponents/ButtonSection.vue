<template>
    <div class="header-buttons">
        <button>Discover More</button>
        <button>Contact</button>
        <button class="bg-blue">Git Hub</button>
    </div>
</template>

<script>
    export default {
        name: "ButtonSection"
    }
</script>

<style scoped>

    .header-buttons {
        margin-top: 8rem;
        margin-left: 6rem;;
    }

    .header-buttons button {
        margin: 1rem;
        padding: 1rem 4rem;
        border-radius: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-align: center;
        color: white;
        background: transparent;
        border: 1px solid white;
    }

    .header-buttons button:hover {
        transition: 0.7s;
        cursor: pointer;
        color: black;
        background: white;
    }


</style>