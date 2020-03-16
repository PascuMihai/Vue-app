<template>
    <div class="footer-class">
       <div class="col1">
           <div class="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur autem consequuntur culpa, distinctio dolorem harum hic ipsum itaque, modi mollitia nam neque nihil nobis optio quae quaerat ullam voluptatum!</div>
           <div class="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores deserunt eum excepturi impedit ipsa, itaque nobis optio totam voluptatibus. Aut commodi doloremque dolores eos natus veritatis? Deleniti, incidunt officiis.</div>
           <div class="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto autem beatae cum earum eligendi explicabo harum ipsam modi molestias, mollitia nemo nulla numquam placeat quod sint sit temporibus ut?</div>
       </div>
        <div class="col2">
            <button>Home</button>
            <button>About me</button>
            <button>Contact</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .footer-class {
        display: flex;
        justify-content: space-around;
        background: grey;
        padding: 4rem;
        border: 1px solid;
    }

    .col1 {
         display: flex;
         margin: 1.5rem;
        font-size: 0.8rem;
     }

    .col1 div {
        margin: 1rem;
        width: 8rem;
    }

    .col2 {
        display: flex;
        flex-direction: column;
    }

    .col2 button {
        margin: 1.5rem;
        padding: 1rem 2rem;
        border-radius: 2rem;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        text-align: center;
        color: white;
        background: transparent;
        border: 1px solid white;
    }

    .col2 button:hover {
        transition: 0.7s;
        cursor: pointer;
        color: black;
        background: white;
    }

</style>