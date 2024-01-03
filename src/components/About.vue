<template>
  <section id="about" ref="about">
    <div class="about-inner">
      <transition name="animation" class="section">
        <div v-if="!source && timeout" class="container">
          <p class="section-name">/{{texts.headerAbout[store.state.lang]}}</p>
          <h2 class="fade-right title">{{ texts.aboutTitle[store.state.lang] }}</h2>
          <p class="fade text about-text">{{ texts.aboutDescription[store.state.lang] }}</p>
          <h3 class="fade-right">{{ texts.skills[store.state.lang] }}:</h3>
          <ul>
            <li class="fade-down">
              <span>{{ texts.advanced[store.state.lang] }}: </span> Vue, Vuex, React, Redux, Typescript, Javascript, Css/Sass, Html
            </li>
            <li class="fade-down">
              <span>{{ texts.intermediate[store.state.lang] }}: </span> Next, Webpack, Nest, Node, PostgreSQL
            </li>
            <li class="fade-down">
              <span>{{ texts.languages[store.state.lang] }}: </span>{{ texts.aboutLanguages[store.state.lang] }}
            </li>
            <li class="fade-down">
              <span>{{ texts.softSkills[store.state.lang] }}: </span>{{ texts.aboutSoftSkills[store.state.lang] }}
            </li>
          </ul>
        </div>
      </transition>
      <transition name="animation" class="section">
        <div class="highlight" v-if="source && timeout" v-html="highlightedCode"></div>
      </transition>
      <transition name="animation" class="section">
        <button class="fade btn-source" v-if="source" @click="changeSource">Preview</button>
      </transition>
      <transition name="animation" class="section">
        <button class="fade btn-source" v-if="!source" @click="changeSource">Source</button>
      </transition>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import texts from '@/texts.json'
import store from '@/store'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github-dark.min.css'
import javascript from 'highlight.js/lib/languages/javascript'

const code = `{
  title: "Я в Коде: Краткий Обзор",
  description: \`
    С двенадцати лет я увлекся программированием,
    и с тех пор превратился в профессионального фронтенд разработчика.
    Самоучка по натуре, я постоянно ищу новые знания в мире веб-технологий.
    Мои работы - это сочетание простоты, функциональности и стиля.
    Готов присоединиться к команде, где смогу применить свои навыки
    для создания интуитивно понятных и эффективных веб-приложений.
  \`,
  skills: {
    advanced: ["Vue", "Vuex", "React", "Redux", "Typescript", "Javascript", "Css/Sass", "Html"],
    intermediate: ["Next", "Webpack", "Nest", "Node", "PostgreSQL"],
    languages: ["English - B1", "Russian - C1", "Uzbek - Native"],
    softSkills: ["Understanding of Task", "Time Management", "Teamwork", "Problem Solving"]
  }
}`
const codeTablet = `{
  title: "Я в Коде: Краткий Обзор",
  description: \`
    С двенадцати лет я увлекся
    программированием, и с тех пор
    превратился в профессионального
    фронтенд разработчика. Самоучка
    по натуре, я постоянно ищу новые
    Знания в мире веб-технологий.
    Мои работы - это сочетание простоты,
    функциональности и стиля.
    Готов присоединиться к команде,
    где смогу применить свои навыки
    для создания интуитивно понятных
    и эффективных веб-приложений.
  \`,
  skills: {
    advanced: [
      "Vue", "Vuex", "React", "Redux", "Typescript", "Javascript", "Css/Sass", "Html"
    ],
    intermediate: [
      "Next", "Webpack", "Nest", "Node", "PostgreSQL"
    ],
    languages: [
      "English - B1", "Russian - C1", "Uzbek - Native"
    ],
    softSkills: [
      "Understanding of Task", "Time Management", "Teamwork", "Problem Solving"
    ]
  }
}`

hljs.registerLanguage('javascript', javascript)
const highlightedCode = computed(() => {
  return hljs.highlight('javascript', document.documentElement.clientWidth > 768 ? code : codeTablet).value
})

const source = ref(true)
const timeout = ref(false)
onMounted(() => {
  setTimeout(() => {
    timeout.value = true
  }, 100)
})
const changeSource = () => {
  source.value = !source.value
  timeout.value = false
  setTimeout(() => {
    timeout.value = true
  }, 500)
}
</script>

<style lang="scss">
#about {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .about-inner {
    width: 100%;
    position: relative;
    padding: 20px;

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
    .highlight {
      color: #abb2bf;
      background: #282c34;
      padding: 10px;
      border-radius: 10px;
      white-space: pre;
      width: 100%;
      overflow-x: auto;

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
    .btn-source {
      padding: 8px 15px;
      background: #333;
      color: #fff;
      border-radius: 4px;
      position: absolute;
      right: 20px;
      top: -20px;
    }
    @media (max-width: 660px) {
      .section.container {
        padding: 0;
      }
    }
  }
}
</style>
