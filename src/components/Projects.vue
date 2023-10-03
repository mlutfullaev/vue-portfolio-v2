<template>
  <section id="projects">
    <div class="container projects-inner">
      <p class="section-name">/projects</p>
      <div class="projects-top">
        <div class="filter">
          <button
            v-for="item in filters"
            :key="item"
            @click="filter = item"
            class="btn"
            :class="filter === item ? 'active' : ''">
            {{item}}
          </button>
        </div>
        <div class="type">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-560v160-160Zm0 400v160-160Z"/></svg>
          </button>
        </div>
      </div>
      <div class="projects-list">
        <ProjectCard v-for="project in projects" :project="project" :key="project.title" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#projects {

  .projects-top {
    padding: 10px 0 20px;
    display: flex;
    justify-content: space-between;

    .filter button {
      margin-right: 10px;
      background: #f1f1f1;
      border-radius: 5px;
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      transition: .2s;

      &.active {
        background: #333;
        color: #fff;
      }
    }
  }
}
</style>

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
  }
}
</script>
