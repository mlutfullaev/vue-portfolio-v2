<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})
</script>

<style lang="scss">
@import 'assets/global';
</style>
