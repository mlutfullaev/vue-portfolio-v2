<template>
  <section id="about">
    <div class="container about-inner">
      <div class="about-content">
        <p class="section-name">/about</p>
        <h2 class="title">This is now and past is passed</h2>
        <p class="text about-text">Фронтенд-разработчик с опытом 3 года. Начал интересоваться программированием с 12 лет. Самоучка, всегда ищу новые знания. Люблю копаться на чем не знаю) Готов присоединиться к команде и внести свой вклад в современные веб-приложения. Работал с React.js 2+ года, Html/Css/Js 1+ года.</p>
      </div>
      <div class="bg-img about-img"></div>
    </div>
  </section>
</template>

<style lang="scss">
#about {
  background: #f1f1f1;

  .about-inner {
    display: flex;
    gap: 50px;

    .about-content {
      & > h2 {
      }
      .about-text {
        padding-top: 20px;
      }
    }
    .about-img {
      flex: 0 0 450px;
      border-radius: 30px;
      width: 450px;
      height: 300px;
      background-image: url('@/assets/img/4.jpg');
    }
  }
}
</style>
<script setup>
</script>
