<template>
  <Transition name="animation" class="section">
    <Main v-if="activeTab === 0" />
  </Transition>
  <Transition name="animation" class="section">
    <About v-if="activeTab === 1" />
  </Transition>
  <Transition name="animation" class="section">
    <Projects v-if="activeTab === 2"/>
  </Transition>
  <Transition name="animation" class="section">
    <Contacts v-if="activeTab === 3" />
  </Transition>
  <Circle />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import About from '@/components/About.vue'
import Contacts from '@/components/Contacts.vue'
import Projects from '@/components/Projects.vue'
import Main from '@/components/Main.vue'
import Circle from '@/components/Circle.vue'
import useHelpers from '@/useHelpers'

const { switchPages } = useHelpers()

const activeTab = ref(5)
switchPages(activeTab)

onMounted(() => {
  setTimeout(() => {
    activeTab.value = 0
  }, 400)
})
</script>
