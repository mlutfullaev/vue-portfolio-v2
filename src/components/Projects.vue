<template>
  <section id="projects">
    <div class="container projects-inner">
      <p
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
        class="section-name">/{{texts.headerProjects[store.state.lang]}}</p>
      <div class="projects-list">
        <ProjectCard v-for="project in projects" :project="project" :key="project.title[store.state.lang]" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import store from '@/store/index'
import texts from '@/texts.json'
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/projects.json'
</script>
