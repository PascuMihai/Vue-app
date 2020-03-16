<template>
  <div class="header-component">
    <NavBar />
    <HeaderContent />
  </div>
</template>

<script>
  import HeaderContent from "./HeaderContent";
  import NavBar from "./NavBar";

export default {
  name: 'Header',
  components: {
    NavBar,
    HeaderContent
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header-component {
    height: 100vh;
    background-image: url(/images/header.jpg);
    background-size: cover;
    background-position: center;
    box-shadow: inset 10px 10px 900px #110f0f, inset -10px -10px 900px #110f0f;
  }



</style>
