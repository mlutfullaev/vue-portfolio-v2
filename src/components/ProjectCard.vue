<template>
  <div class="project-card">
    <div class="bg-img project-img" :style='{backgroundImage: `url("${project.img}")`}'></div>
    <div class="card-item">
      <h3 class="title">{{ project.title }}</h3>
      <p class="text">{{ project.description }}</p>
      <div class="stack">
        <p>stack: </p><p v-for="(stack, idx) in project.stack" :key="stack">{{idx !== 0 ? ' | ' : ''}}{{stack}}</p>
      </div>
      <div class="links">
        <a target="_blank" :href="project.demo">
          Live Demo
          <svg class="demo" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28">
            <path
              d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
          </svg>
        </a>
        <a target="_blank" :href="project.github">
          Code
          <svg class="github" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
              stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.project-card {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  background: #fff;
  display: flex;
  border-radius: 20px;
  margin-bottom: 30px;

  .project-img {
    border-radius: 20px 0 0 20px;
    width: 400px;
    height: 300px;

    @media (max-width: 1280px) {
      width: 340px;
      height: auto;
    }
    @media (max-width: 900px) {
      width: 300px;
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
    > h3 {
      font-family: 'Montserrat', sans-serif;
      padding-bottom: 25px;

      @media (max-width: 1280px) {
        padding-bottom: 10px;
      }
    }

    > p {
      padding-bottom: 10px;
    }
    .stack {
      display: flex;
      gap: 10px;
      padding-bottom: 20px;

      @media (max-width: 900px) {
        flex-wrap: wrap;
      }
      p {
        font-size: 23px;
        font-weight: 600;
        &:first-child {
          color: $second-color;
        }
        @media (max-width: 1280px) {
          font-size: 20px;
        }
        @media (max-width: 900px) {
          font-size: 17px;
        }
      }
    }
    .links {
      position: absolute;
      bottom: 20px;
      left: 30px;
      display: flex;
      gap: 20px;

      > a {
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        width: max-content;
        transition: .2s;
        color: #000;

        @media (max-width: 900px) {
          font-size: 14px;
        }
        > svg {
          transition: .2s;
          @media (max-width: 900px) {
            width: 25px;
            height: 20px;
          }
        }
        .github path {
          transition: .2s;
        }
        &:hover {
          color: $second-color;

          .demo {
            fill: $second-color;
          }

          .github path {
            stroke: $second-color;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ['project'],
  name: 'ProjectCard'
}
</script>
