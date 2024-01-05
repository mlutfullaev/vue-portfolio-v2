<template>
  <div
    class="dropdown"
    :class="{opened: isOptionsExpanded}"
    @mouseenter="isOptionsExpanded = true"
    @mouseleave="isOptionsExpanded = false">
      <button @blur="isOptionsExpanded = false" @click="isOptionsExpanded = !isOptionsExpanded" >
        <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg>
      </button>
      <transition>
        <ul v-show="isOptionsExpanded">
          <li
            v-for="(option, index) in options"
            :key="index"
            @mousedown.prevent="setOption(option)"
            :class="{active: store.state.lang === option}"
          >
            {{ option }}
          </li>
        </ul>
      </transition>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store'
import { ref } from 'vue'

const isOptionsExpanded = ref(false)
const options = ref(['ru', 'en'])

function setOption (option: string) {
  store.commit('changeLang', option)
  localStorage.setItem('lang', option)
  isOptionsExpanded.value = false
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  button {
    svg {
      width: 20px;
      transition: .3s;
    }
    &:hover {
      svg {
        color: $second-color;
        stroke: $second-color;
      }
    }
  }
  ul {
    list-style-type: none;
    position: absolute;
    left: -5px;
    top: 100%;
    background: $grey;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    overflow: hidden;

    li {
      cursor: pointer;
      transition: .3s;
      padding: 5px 10px;
      font-size: 14px;
      text-transform: uppercase;

      &.active {
        background: $second-color;
        color: #fff;
      }
      &:hover {
        opacity: .8;
      }
      &:not(:last-child) {
        border-bottom: 1px solid $second-color;
      }
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: .3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-7px)
  }
}
</style>
