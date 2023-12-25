<template>
  <header>
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
            data-replace="main"
          >
            <span>main</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 100}}">
          <router-link
            :to="{path: '/', hash: '#about'}"
            data-replace="about">
            <span>about</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 200}}">
          <router-link
            :to="{path: '/', hash: '#projects'}"
            data-replace="projects">
            <span>projects</span>
          </router-link>
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, y: -30 }"
          :enter="{ opacity: 1, y: 0, transition: {duration: 300, delay: 300}}">
          <router-link
            :to="{path: '/', hash: '#contacts'}"
            data-replace="contacts">
            <span>contacts</span>
          </router-link>
        </li>
      </ul>
</header>
  <button @click="menuActive = !menuActive" :class="['burger-btn', {active: menuActive}]"><span></span></button>
  <div :class="{menu: true, active: menuActive}">
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#main'}" >Main</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#about'}" >About</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#projects'}" >Projects</router-link>
    <router-link @click="menuActive = false" :to="{path: '/', hash: '#contacts'}" >Contacts</router-link>
  </div>
</template>

<style lang="scss">
@import '@/assets/variables';

header {
  padding: 20px 40px;
  background: #FFF;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 2;
  top: 20px;
  left: 0;
  right: 0;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;

  .nav {
      list-style-type: none;
      display: flex;
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

        @media (max-width:500px) {
          display: none;
        }
      }
  }

  a {
    font-size: 17px;
  }

  & > a {
    font-weight: 700;
  }
}

.burger-btn {
  cursor: pointer;
  padding: 12px 0;
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 4;

  @media (min-width: 501px) {
    display: none;
  }

  span {
    position: relative;
    display: block;
    width: 25px;
    height: 4px;
    background: #444;
    transition: all .2s ease-in-out;
    border-radius: 4px;

    &:before, &:after {
      position: absolute;
      background: #444;
      content: '';
      left: 0;
      width: 25px;
      height: 4px;
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
}
.menu {
  right: -100%;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #F2F2F6;
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

<script>
export default {
  name: 'Header',
  data: () => ({
    menuActive: false
  }),
  watch: {
    menuActive () {
      document.querySelector('body').style.overflow = this.menuActive ? 'hidden' : 'visible'
    }
  }
}
</script>
