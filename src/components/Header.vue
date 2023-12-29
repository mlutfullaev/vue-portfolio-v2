<template>
  <header :class="{scrolled: scrolled}">
      <router-link
          :to="{path: '/', hash: '#main'}"
          v-motion
          :initial="{ opacity: 0, x: -20, }"
          :enter="{ opacity: 1, x: 0, transition: {duration: 300, delay: 500}}"
      >m.lutfullaev</router-link>
      <ul class="nav">
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300}}">
          <router-link
            :to="{path: '/', hash: '#main'}"
            :data-replace="texts.headerMain[store.state.lang]"
          >
            <span>{{texts.headerMain[store.state.lang]}}</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 100}}">
          <router-link
            :to="{path: '/', hash: '#about'}"
            :data-replace="texts.headerAbout[store.state.lang]">
            <span>{{texts.headerAbout[store.state.lang]}}</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 200}}">
          <router-link
            :to="{path: '/', hash: '#projects'}"
            :data-replace="texts.headerProjects[store.state.lang]">
            <span>{{texts.headerProjects[store.state.lang]}}</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 300}}">
          <router-link
            :to="{path: '/', hash: '#contacts'}"
            :data-replace="texts.headerContacts[store.state.lang]">
            <span> {{ texts.headerContacts[store.state.lang] }} </span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 350}}">
          <lang-dropdown />
        </li>
      </ul>
</header>
  <button
    @click="menuActive = !menuActive"
    class="burger-btn"
    :class="{active: menuActive, scrolled}">
    <span></span>
  </button>
  <div :class="{menu: true, active: menuActive}">
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#main'}" >{{ texts.headerMain[store.state.lang]}}</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#about'}" >{{ texts.headerAbout[store.state.lang] }}</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#projects'}" >{{ texts.headerProjects[store.state.lang] }}</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#contacts'}" >{{ texts.headerContacts[store.state.lang] }}</router-link>
  </div>
</template>

<script lang="ts" setup>
import texts from '@/texts.json'
import store from '@/store/index'
import { ref, watch } from 'vue'
import LangDropdown from '@/components/LangDropdown.vue'

const menuActive = ref(false)
watch(menuActive, () => {
  document.body.style.overflow = menuActive.value ? 'hidden' : 'visible'
})

const scrolled = ref(false)
window.onscroll = () => {
  scrolled.value = window.scrollY > 30
}
</script>

<style lang="scss">
@import '@/assets/variables';

header {
  padding: 20px 40px;
  background-color: #fbfbfb;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 2;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  transition: .3s;

  &.scrolled {
    top: 10px;
    padding: 10px 40px;

    a {
      font-size: 13px;
    }
  }
  .nav {
    position: relative;
    top: 2.3px;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      padding-bottom: 2px;
      overflow: hidden;
      position: relative;
      display: inline-block;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
      }
      &::before {
        background-color: $second-color;
        height: 2px;
        bottom: 0;
        transform-origin: 100% 50%;
        transform: scaleX(0);
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }
      &::after {
        content: attr(data-replace);
        height: 100%;
        top: 0;
        transform-origin: 100% 50%;
        transform: translate3d(200%, 0, 0);
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        color: #444;
      }
      &:hover {
        &::before {
          transform-origin: 0 50%;
          transform: scaleX(1);
        }
        &::after {
          transform: translate3d(0, 0, 0);
        }
        span {
           transform: translate3d(-200%, 0, 0);
        }
      }
      span {
        display: inline-block;
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }
    }
    > li {
      @media (max-width:500px) {
        display: none;

        &:last-child {
          display: block;
          margin-right: 35px;
        }
      }
    }
  }
  a {
    transition: .4s;
    font-size: 16px;

    @media (max-width: 660px) {
      font-size: 15px;
    }
  }
  & > a {
    font-weight: 700;
  }

  @media (max-width: 1280px) {
    max-width: 750px;
  }
  @media (max-width: 900px) {
    max-width: 640px;
  }
  @media (max-width: 768px) {
    max-width: 620px;
  }
  @media (max-width: 660px) {
    max-width: 460px;
  }
  @media (max-width: 550px) {
    margin: 0 20px;
    width: auto;
    max-width: 100%;
  }
}

.burger-btn {
  cursor: pointer;
  padding: 12px 0;
  position: fixed;
  top: 39px;
  right: 55px;
  z-index: 4;
  transition: .3s;

  span {
    position: relative;
    display: block;
    width: 25px;
    height: 3px;
    background: #444;
    transition: all .2s ease-in-out;
    border-radius: 4px;

    &:before, &:after {
      position: absolute;
      background: #444;
      content: '';
      left: 0;
      width: 25px;
      height: 3px;
      border-radius: 4px;
      transition: all .2s ease-in-out;
    }
    &:before {
      top: -8px;
    }
    &:after {
      top: 8px;
    }
  }
  &.scrolled {
    top: 18px;

    span {
      height: 2.5px;

      &:before {
        height: 2.5px;
        top: -6px;
      }
      &:after {
        height: 2.5px;
        top: 6px;
      }
    }
    &.active span {
      &:before {
          transform: rotate(45deg) translate(2.5px, 6px);
      }
      &:after {
        transform: rotate(-45deg) translate(2.5px, -6px);
      }
    }
  }
  &.active {
    span {
      background: transparent;

      &:before {
        transform: rotate(45deg) translate(5px, 6px);
      }

      &:after {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }

  @media (min-width: 501px) {
    display: none;
  }
}
.menu {
  right: -100%;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #f1f1f1;
  z-index: 3;
  transition: .2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    right: 0;
  }
  > a {
    padding: 20px 50px;
    width: 100%;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
    background: #fff;
    border-bottom: 2px solid #f1f1f1;
  }
}
</style>
