<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img
        src="../assets/logo/logotype2.png"
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
            <a href="#" class="nav-link text-light fw-normal fs-5">Рус</a>
          </li>
        </ul>
        <div class="vl"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'kaz' }">
              <a href="#" class="nav-link text-light fw-normal fs-5">Қаз</a>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <button
              class="nav-link pr-2 text-light fw-normal mx-4 btn btn-link fs-5"
              @click="showClass"
              data-modal
            >
              О нас
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link text-light fw-normal mx-4 btn btn-link fs-5"
              @click="cursShow"
            >
              Курсы
            </button>
          </li>
        </ul>
      </div>
    </div>
    <InfoModal ref="modalComponent"></InfoModal>
    <CursModal ref="cursComponent"></CursModal>
  </nav>
</template>
<script>
import InfoModal from "../model/InfoModal.vue";
import CursModal from "../model/CursModal.vue";

export default {
  name: "nav-menu",

  components: {
    InfoModal,
    CursModal,
  },
  methods: {
    showClass() {
      this.$refs.modalComponent.showClassModal = true;
    },
    cursShow() {
      this.$refs.cursComponent.showClassCurs = true;
    },
  },

  //   isActiveClass() {
  //   router.push('delivery')
  //   },
  // },
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
img {
  width: 209px;
}
.nav-item {
  font-family: "Montserrat";
  /* font-size: 18px; */
}
.vl {
  border-left: 2px solid #fff;
  height: 35px;
}
</style>
