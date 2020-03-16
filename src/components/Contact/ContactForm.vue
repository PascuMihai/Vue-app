<template>
    <div>
        <form class="form">
            <div class="inputs">
                <input type="text" id="firstName" placeholder="Input your First Name...">
                <input type="text" id="lastName" placeholder="Input your Last Name...">
                <input type="text" id="email" placeholder="Input your email...">
            </div>
            <textarea name="message"  cols="30" rows="10"></textarea>
            <button class="btn" type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ContactForm"
    }
</script>

<style scoped>

    .form {
        text-align: left;
        max-resolution: 2rem;padding: 1rem;
        width: 30rem;
        padding: 3rem 2rem;
        background: whitesmoke;
        border-radius: 0.5rem;
        box-shadow: 0 3rem 4rem 0 rgba(0,0,0,0.6);
        opacity: 75%;
        margin-right: 5rem;
    }

    .inputs {
        display: flex;
        flex-direction: column;
    }

    .inputs input {
        width: 100%;
        background: white;
        border-radius: 0.4rem;
        padding: 6px 20px;
        margin: 1.2rem 0;
        font-size: 1rem;
    }

    .inputs input:hover {
        transition: 0.6s;
        background: lightgray;
    }

    .btn {
        background: white;
        border: none;
        cursor: pointer;
        width: 100%;
        margin-top: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.4rem;
        background: grey;
        color: whitesmoke;
        font-size: 1rem;
    }

    .btn:hover {
        background: black;
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
    }

    textarea {
        padding: 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
        width: 100%;
        border: 1px solid grey;
    }

</style>