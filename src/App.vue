<template>
  <div>
    <TopBar></TopBar>
    <AboutMe></AboutMe>

  </div>
</template>

<script>
import AboutMe from './components/AboutMe.vue'
import TopBar from './components/TopBar.vue'
export default {
  name: 'App',
  components: {
    AboutMe,TopBar
  }
}
</script>

<style>

</style>
