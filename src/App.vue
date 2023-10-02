<template>
  <Header/>
  <Main />
  <About />
  <Projects/>
  <Contacts/>
</template>

<script>
import Main from '@/components/Main.vue'
import Header from '@/components/Header.vue'
import Contacts from '@/components/Contacts.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header,
    About,
    Contacts,
    Projects
  }
}
</script>

<style lang="scss">
@import './assets/global';
</style>
