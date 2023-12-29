<template>
  <div
    class="project-card"
    v-motion
    :initial="{ x: -60, opacity: 0, scale: .9 }"
    :visible="{ x: 0, opacity: 1, scale: 1, transition: {duration: 250, delay: 100}}">
<!--    <div-->
<!--      v-motion-->
<!--      :initial="{ backgroundSize: '120%', opacity: .3 }"-->
<!--      :visible="{ backgroundSize: '100%', opacity: 1, transition: {duration: 300, delay: 300}}"-->
<!--      class="bg-img project-img"-->
<!--      :style="{backgroundImage: `url('${require('@/assets/img/projects/' + project.img)}')`}"-->
<!--    ></div>-->
    <div
      v-motion
      :initial="{ backgroundSize: '120%', opacity: .3 }"
      :visible="{ backgroundSize: '100%', opacity: 1, transition: {duration: 300, delay: 300}}"
      class="bg-img project-img">
      <img :src="require('@/assets/img/projects/' + project.img)" alt="project-img">
    </div>
    <div class="card-item">
      <h3
        class="title"
        v-motion
        :initial="{ x: -50, opacity: 0,}"
        :visible="{ x: 0, opacity: 1, transition: {duration: 350, delay: 250}}"
      >{{ project.title[store.state.lang] }}</h3>
      <p
        class="text"
        v-motion
        :initial="{ y: -50, opacity: 0,}"
        :visible="{ y: 0, opacity: 1, transition: {duration: 300, delay: 350}}"
      >{{ project.description[store.state.lang] }}</p>
      <p
        class="stack"
        v-motion
        :initial="{ y: -50, opacity: 0,}"
        :visible="{ y: 0, opacity: 1, transition: {duration: 300, delay: 400}}">
        <span>{{texts.stack[store.state.lang]}}: </span>{{ project.stack.join(', ') }}
      </p>
      <div
        class="links"
        v-motion
        :initial="{ y: -50, opacity: 0,}"
        :visible="{ y: 0, opacity: 1, transition: {duration: 300, delay: 450}}">
        <a
          target="_blank"
          :class="{disabled: !project.demo}"
          :href="project.demo">
          Demo <span v-if="!project.demo">Private</span>
          <svg class="demo" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
          </svg>
        </a>
        <a
          target="_blank"
          :class="{disabled: !project.github}"
          :href="project.github"
        >
          Code <span v-if="!project.github">Private</span>
          <svg class="github" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
<!--        <a v-else>-->
<!--          Code Private-->
<!--          <svg class="github" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--          </svg>-->
<!--        </a>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store/index'
import texts from '@/texts.json'
import { defineProps } from 'vue'

type Languages = {
  en: string,
  ru: string
}
interface Project {
  title: Languages,
  description: Languages,
  github: string,
  demo: string,
  img: string,
  stack: string[]
}

defineProps<{project: Project}>()
</script>

<style lang="scss">
.project-card {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  background: #fff;
  display: flex;
  border-radius: 15px;
  margin-bottom: 30px;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  .project-img {
    overflow: hidden;
    border-radius: 15px 0 0 15px;
    width: 400px;
    height: 300px;

    img {
      object-fit: cover;
      overflow: hidden;
      transition: transform 1s linear;
      width: 100%;
    }
    &:hover img {
      transform: translateY(calc(-100% + 300px));
      transition: transform 2.5s linear;
    }

    @media (max-width: 1280px) {
      width: 340px;
      height: auto;
    }
    @media (max-width: 900px) {
      width: 300px;
    }
    @media (max-width: 660px) {
      width: 100%;
      height: 300px;
      border-radius: 15px 15px 0 0;
    }
    @media (max-width: 350px) {
      height: 230px;
    }
    @media (max-width: 300px) {
      height: 200px;
    }
  }
  .card-item {
    padding: 20px 30px 60px;
    position: relative;
    width: calc(100% - 400px);

    @media (max-width: 1280px) {
      width: calc(100% - 340px);
    }
    @media (max-width: 900px) {
      width: calc(100% - 300px);
      padding: 20px 20px 45px;
    }
    @media (max-width: 660px) {
      width: 100%;
    }

    h3 {
      font-family: 'Montserrat', sans-serif;
      padding-bottom: 25px;

      @media (max-width: 1280px) {
        padding-bottom: 10px;
      }
    }

    .stack {
      padding: 10px 0 20px;

      span {
        color: $second-color;
      }
    }

    .links {
      position: absolute;
      bottom: 20px;
      left: 30px;
      display: flex;
      gap: 20px;

      a {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        width: max-content;
        transition: .2s;
        color: #000;

        &:hover {
          color: $second-color;

          .demo {
            fill: $second-color;
          }

          .github path {
            stroke: $second-color;
          }
        }
        &.disabled {
          pointer-events: none;
          color: $second-color;
        }
        @media (max-width: 900px) {
          font-size: 14px;
        }

        svg {
          transition: .2s;
          @media (max-width: 900px) {
            width: 25px;
            height: 20px;
          }
        }
        .github path {
          transition: .2s;
        }
      }
    }
  }
}
</style>
