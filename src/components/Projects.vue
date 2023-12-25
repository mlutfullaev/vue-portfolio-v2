<template>
  <section id="projects" ref="projects">
    <div class="container projects-inner">
      <p
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
        class="section-name">/projects</p>
      <div class="projects-top">
        <div class="filter">
          <button
            v-motion
            :initial="{ x: -40, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: {duration: 350, delay: idx * 200}}"
            :delay="400"
            v-for="(item, idx) in filters"
            :key="item"
            @click="filter = item"
            class="btn"
            :class="filter === item ? 'active' : ''">
            <span>{{item}}</span>
          </button>
        </div>
      </div>
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
#projects {

  .projects-top {
    padding: 10px 0 20px;
    display: flex;
    justify-content: space-between;

    .filter {
      display: flex;
      flex-wrap: wrap;
      width: max-content;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
      border-radius: 20px;

      button {
        background: transparent;
        border-radius: 20px;
        padding: 15px 50px;
        font-size: 18px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        transition: .2s;
        margin: 0;

        @media (max-width: 900px) {
          font-size: 16px;
          padding: 8px 25px;
        }
        &.active {
          background: #333;
          color: #fff;
        }
      }
    }
  }
}
</style>
