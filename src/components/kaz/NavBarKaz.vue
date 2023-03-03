<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img
        src="@/assets/logo/logotype2.png"
        class="mb-2 mt-2 img-fluid"
        alt="..."
      />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-4 mb-lg-0">
      <ul class="navbar-nav">
        <li class="nav-item ml-2">
          <router-link :to="{ name: 'catalog'}">
          <a href="#" class="nav-link text-light fw-normal">Рус</a>
          </router-link>
        </li>
      </ul>
      <div class="vl"></div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link text-light fw-normal">Қаз</a>
        </li>
      </ul>
      </div>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link pr-2 text-light fw-normal mx-4" aria-current="page" href="#">Біз туралы</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-normal mx-2" href="#">Оқытушылар</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-normal ms-4" href="#">Мекен-жай</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
// import router from "../router/router.js"
export default {
  name: "nav-menu",
};
</script>
<style scoped>
:root {
  --color1: #ffffff;
  --color2: #3560ed;
}

.navbar {
  background: linear-gradient(180deg, #ffffff -108.68%, #3560ed 100%);
}
img{
  width: 209px;
}
.nav-item{
  font-family: "Montserrat";
  font-size: 18px;
}
.vl{
  border-left: 2px solid #fff;
  height: 35px;
}
</style>
