<template>
  <div id="app">
    <!-- <NavBar></NavBar> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <navigation-work></navigation-work> -->
    
  </div>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
// import NavigationWork from "./components/NavigationWorks.vue"
// import NavbarKaz from ""


export default {
  name: "App",
  components: {
    // NavBar,
    // NavigationWork,
    
  },
 
  data() {
    return {
      
    };
  },
};
</script>

<style src="./css/fonts.css">
#app {
  background: #e5e5e5;
}
</style>
