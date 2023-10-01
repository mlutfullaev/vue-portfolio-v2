<template>
  <Header />
  <Contacts />
</template>

<script>
import Header from '@/components/Header.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Contacts
  }
}
</script>
