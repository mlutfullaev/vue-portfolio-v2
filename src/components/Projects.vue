<template>
  <section id="projects">
    <div class="container projects-inner">
      <p class="section-name">/{{texts.headerProjects[store.state.lang]}}</p>
      <div class="projects-list">
        <ProjectCard v-for="project in projects" :project="project" :key="project.title[store.state.lang]" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import store from '@/store'
import texts from '@/texts.json'
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/projects.json'
</script>

<style lang="scss">
#projects {
  padding: 120px 0;
}
</style>
