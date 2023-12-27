<template>
  <div id="cursor" :style="{top, left}"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const top = ref('')
const left = ref('')

document.addEventListener('mousemove', (e) => {
  // top.value = `${e.clientY}px`
  // left.value = `${e.clientX}px`
})
</script>

<style scoped>
#cursor {
  width: 30px;
  height: 30px;
  border: 1px solid #444;
  border-radius: 50%;
  position: fixed;
  pointer-events: none; /* Сделаем элемент невидимым для событий мыши */
  transition: all 0.1s ease; /* Анимация перемещения */
  transform: translate(-40%, -40%);
}
</style>
