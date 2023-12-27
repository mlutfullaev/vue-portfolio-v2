<template>
  <Header/>
  <Main />
  <About />
  <Projects/>
  <Contacts/>
  <Circle />
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Contacts from '@/components/Contacts.vue'
import Projects from '@/components/Projects.vue'
import Main from '@/components/Main.vue'
import Circle from '@/components/Circle.vue'

export default {
  name: 'MainView',
  components: {
    Circle,
    Main,
    Header,
    About,
    Contacts,
    Projects
  }
}
</script>
