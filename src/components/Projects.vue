<template>
  <section id="projects" ref="projects">
    <div class="container projects-inner">
      <p
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
        class="section-name">/projects</p>
      <div class="projects-list">
        <ProjectCard v-for="project in projects" :project="project" :key="project.title" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  data: () => ({
    projects: [
      {
        title: 'This is project',
        description: 'this is description and it is a description is a description this is description and it is a, a description this is description and it is a',
        github: '',
        demo: '',
        img: require('@/assets/img/projects/img1.jpg'),
        stack: ['React', 'Typescript', 'Sass']
      },
      {
        title: 'This is project',
        description: 'this is description and it is a description is a description this is description and it is a, a description this is description and it is a',
        github: '',
        demo: '',
        img: require('@/assets/img/projects/img1.jpg'),
        stack: ['React', 'Typescript', 'Sass']
      },
      {
        title: 'This is project',
        description: 'this is description and it is a description is a description this is description and it is a, a description this is description and it is a',
        github: '',
        demo: '',
        img: require('@/assets/img/projects/img1.jpg'),
        stack: ['React', 'Typescript', 'Sass']
      }
    ],
    filters: [
      'All',
      'React',
      'Vue',
      'Simple'
    ],
    filter: 'All'
  }),
  components: {
    ProjectCard
  },
  computed: {
    filteredProjects: () => {
      return this.projects.filter(item => item.stack.includes(this.filter))
    }
  }
}
</script>

<style lang="scss">
</style>
