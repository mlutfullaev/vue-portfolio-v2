<template>
  <section id="about" ref="about">
    <div class="container about-inner">
      <div class="about-content">
        <p
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 100}}"
          class="section-name"
        >/about</p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: -40 }"
          :visible="{ opacity: 1, y: 0, transition: {duration: 400, delay: 400}}"
          class="title"
        >This is now and past is passed</h2>
        <p
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: {duration: 400, delay: 500}}"
          class="text about-text">Фронтенд-разработчик с опытом 3 года. Начал интересоваться программированием с 12 лет. Самоучка, всегда ищу новые знания. Люблю копаться на чем не знаю) Готов присоединиться к команде и внести свой вклад в современные веб-приложения. Работал с React.js 2+ года, Html/Css/Js 1+ года.</p>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0, scale: .9, x: 30, backgroundSize: '100%',}"
        :visible="{ opacity: 1, scale: 1, x: 0, backgroundSize: '110%', transition: {duration: 600, delay: 400}}"
        class="bg-img about-img"></div>
    </div>
  </section>
</template>

<style lang="scss">
#about {
  background: $grey;

  .about-inner {
    display: flex;
    gap: 50px;

    @media (max-width: 900px) {
      gap: 25px;
    }
    @media (max-width: 660px) {
      flex-direction: column-reverse;
      align-items: center;
    }
    .about-content {
      width: calc(100% - 450px);

      @media (max-width: 1280px) {
        width: calc(100% - 380px);
      }
      @media (max-width: 900px) {
        width: calc(100% - 325px);
      }
      @media (max-width: 660px) {
        width: 100%;
      }
      .about-text {
        padding-top: 20px;
      }
    }
    .about-img {
      border-radius: 30px;
      width: 450px;
      height: 300px;
      background-image: url('@/assets/img/4.jpg');

      @media (max-width: 1280px) {
        width: 380px;
        height: 250px;
      }
      @media (max-width: 900px) {
        width: 300px;
        height: 230px;
      }
      @media (max-width: 660px) {
        width: 350px;
        height: 250px;
      }
      @media (max-width: 400px) {
        width: 100%;
        height: 250px;
      }
      @media (max-width: 350px) {
        width: 100%;
        height: 200px;
      }
      @media (max-width: 300px) {
        width: 100%;
        height: 170px;
      }
    }
  }
}
</style>
<script setup>
</script>
