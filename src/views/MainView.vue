<template>
  <Header/>
  <Main />
  <About />
  <Projects/>
  <Contacts/>
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Contacts from '@/components/Contacts.vue'
import Projects from '@/components/Projects.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'MainView',
  components: {
    Main,
    Header,
    About,
    Contacts,
    Projects
  }
}
</script>
