<template>
  <section id="about" ref="about">
    <div class="container about-inner">
      <p
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
        class="section-name"
      >/{{texts.headerAbout[store.state.lang]}}</p>
      <h2
        v-motion
        :initial="{ opacity: 0, y: -40 }"
        :visible="{ opacity: 1, y: 0, transition: {duration: 400, delay: 200}}"
        class="title"
      >{{ texts.aboutTitle[store.state.lang] }}</h2>
      <p
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 300}}"
        class="text about-text">{{ texts.aboutDescription[store.state.lang] }}</p>
      <h3
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
      >{{ texts.skills[store.state.lang] }}:</h3>
      <ul>
        <li
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 200}}">
          <span>{{ texts.advanced[store.state.lang] }}: </span> Vue, Vuex, React, Redux, Typescript, Javascript, Css/Sass, Html
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 250}}">
          <span>{{ texts.intermediate[store.state.lang] }}: </span> Next, Webpack, Nest, Node, PostgreSQL
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 300}}">
          <span>{{ texts.languages[store.state.lang] }}: </span>{{ texts.aboutLanguages[store.state.lang] }}
        </li>
        <li
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 350}}">
          <span>{{ texts.softSkills[store.state.lang] }}: </span>{{ texts.aboutSoftSkills[store.state.lang] }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import texts from '@/texts.json'
import store from '@/store'
</script>

<style lang="scss">
#about {
  background: $grey;

  .about-text {
    padding-top: 20px;
  }
  h3 {
    padding: 30px 0 10px;
  }
  ul {
    list-style-type: none;

    li {
      padding-bottom: 5px;
      span {
        color: $second-color;
      }
    }
  }
}
</style>
