<template>
  <header>
    <div class="container header-inner">
      <a href="#main">m.lutfullaev</a>
      <nav>
        <a href="#main" data-replace="main"><span>main</span></a>
        <a href="#about" data-replace="about"><span>about</span></a>
        <a href="#projects" data-replace="projects"><span>projects</span></a>
        <a href="#contacts" data-replace="contacts"><span>contacts</span></a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  padding: 30px;
  background: #FFF;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      a {
        margin-left: 15px;
        padding-bottom: 2px;
        overflow: hidden;
        position: relative;
        display: inline-block;
      }

      a::before,
      a::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
      }

      a::before {
        background-color: #444;
        height: 2px;
        bottom: 0;
        transform-origin: 100% 50%;
        transform: scaleX(0);
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }

      a::after {
        content: attr(data-replace);
        height: 100%;
        top: 0;
        transform-origin: 100% 50%;
        transform: translate3d(200%, 0, 0);
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        color: #444;
      }

      a:hover::before {
        transform-origin: 0 50%;
        transform: scaleX(1);
      }

      a:hover::after {
        transform: translate3d(0, 0, 0);
      }

      a span {
        display: inline-block;
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }

      a:hover span {
        transform: translate3d(-200%, 0, 0);
      }

      a {
        vertical-align: top;
      }
    }

    a {
      font-size: 17px;
    }

    & > a {
      font-weight: 700;
    }
  }
}
</style>
