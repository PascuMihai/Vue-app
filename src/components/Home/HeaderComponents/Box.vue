<template>
    <div class="box">
    <h1>Fast Delivering</h1>
        <p>image here</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, aspernatur dolorum itaque molestias quaerat quam quas ratione velit voluptatibus.</p>
    </div>
</template>

<script>
    export default {
        name: 'Box'
    }
</script>

<style scoped>

    .box {
        background: whitesmoke;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5rem;
        border: 1px solid grey;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 1rem;
    }

    .box:hover {
        box-shadow: 0 12px 20px 0 rgba(0,0,0,0.4);
    }

    .box h1 {
        margin: 2rem;
    }

    .box p {
        margin: 3rem;
    }

</style>