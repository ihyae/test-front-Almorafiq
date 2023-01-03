<template>
  <div id="app">
    <MainHeader/>
    <MainSlider/>
    <MainBody/>
    <Footer/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainSlider from './components/MainSlider.vue'
import Footer from './components/MainFooter.vue'
import MainBody from './components/MainBody.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    Footer,
    MainBody,
    MainSlider
  }
}
</script>


