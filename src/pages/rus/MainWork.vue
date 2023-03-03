<template>
  <div class="content">
    <NavBar></NavBar>
    <div
      id="carouselExampleCaptions"
      class="carousel slide my-carousel"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="@/assets/logo/slide111.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5 class="mb-4">
              <strong class="text_1 display-1 col-sm-11 text-light">
                10 Горячих клавиш которые сделают вашу работу
                эффективнее</strong
              >
            </h5>
            <p class="text_2 fs-5 mb-4 fw-light text-light col-sm-6">
              Использование сочетаний клавиш может значительно повысить вашу
              производительность и сократить повторяющиеся действия.
            </p>
            <button
              type="button"
              class="btn btn-light mb-5 bttn_txt fw-normal fs-5 rounded-4"
              style="
                --bs-btn-padding-y: 1.25rem;
                --bs-btn-padding-x: 7rem;
                --bs-btn-font-size: 0.75rem;
                --bs-btn-radius: 1rem;
              "
              @click="ShowClass"
              data-modal
            >
              Подробнее
            </button>
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="10000">
          <img src="@/assets/logo/python1.png" class="d-block w-100" />
          <div class="carousel-caption">
            <h5>
              <strong class="text_1 display-1 text-light">
                Набор на курс</strong
              >
            </h5>
            <p class="py_txt display-1 mb-5 fw-bold text-light">PYTHON</p>
            <div class="container_btn d-flex">
              <!-- <a href="#"> -->
                <a
                  href="https://api.whatsapp.com/send/?phone=77005790303&text&type=phone_number&app_absent=0"
                  target="blank"
                  class="btn btn-outline mb-5 bttn_txt1 fw-normal fs-5 rounded-4 text-light"
                  style="
                    --bs-btn-padding-y: 1rem;
                    --bs-btn-padding-x: 4rem;
                    --bs-btn-font-size: 0.75rem;
                    --bs-btn-radius: 1rem;
                    --bs-btn-border-color: white;
                    --bs-btn-border-width: 3px;
                    --bs-btn-hover-border-color: #b1de9f;
                  "
                >
                  Пробный урок бесплатно
                </a>
              <!-- </a> -->
              
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src="@/assets/logo/web1.png" class="d-block w-100" />
          <div class="carousel-caption mb-5">
            <h5 class="mb-4">
              <strong class="text_1 display-1 text-light"
                >Web разработка</strong
              >
            </h5>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active rounded-4 fw-normal"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  style="border-color: white"
                >
                  HTML
                </button>
              </li>
              <li class="nav-item ms-3" role="presentation">
                <button
                  class="nav-link rounded-4 fw-normal"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  style="border-color: white"
                >
                  CSS
                </button>
              </li>
              <li class="nav-item ms-3" role="presentation">
                <button
                  class="nav-link rounded-4 fw-normal"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  style="border-color: white"
                >
                  JavaScript
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active col-sm-4 fw-light"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                HTML (от англ. HyperText Markup Language — «язык гипертекстовой
                разметки») — стандартизированный язык гипертекстовой разметки
                документов для просмотра веб-страниц в браузере. Веб-браузеры
                получают HTML документ от сервера по протоколам HTTP/HTTPS или
                открывают с локального диска, далее интерпретируют код в
                интерфейс, который будет отображаться на экране монитора.
              </div>
              <div
                class="tab-pane fade col-sm-3 fw-light"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                CSS (англ. Cascading Style Sheets «каскадные таблицы стилей») —
                формальный язык описания внешнего вида документа (веб-страницы),
                написанного с использованием языка разметки (чаще всего HTML или
                XHTML). Также может применяться к любым XML-документам,
                например, к SVG или XUL.
              </div>
              <div
                class="tab-pane fade col-sm-4 fw-light"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                JavaScript — мультипарадигменный язык программирования.
                Поддерживает объектно-ориентированный, императивный и
                функциональный стили. Является реализацией спецификации
                ECMAScript (стандарт ECMA-262). JavaScript обычно используется
                как встраиваемый язык для программного доступа к объектам
                приложений. Наиболее широкое применение находит в браузерах как
                язык сценариев для придания интерактивности веб-страницам.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <TeachersForm></TeachersForm>
    <MapsContent></MapsContent>
    <NavigationWork></NavigationWork>
    <SubTitle ref="modalComponent"></SubTitle>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import NavigationWork from "@/components/NavigationWorks.vue";
import TeachersForm from "../rus/TeachersForm.vue";
import MapsContent from "../rus/MapsContent.vue";
import SubTitle from "@/model/SubTitile.vue";

export default {
  name: "slide-photo",
  components: {
    NavBar,
    NavigationWork,
    TeachersForm,
    MapsContent,
    SubTitle,
  },
  methods: {
    ShowClass() {
      this.$refs.modalComponent.showClassModal = true;
    },
  },
};
</script>

<style scoped>
.my-carousel .carousel-item {
  /* display: flex; */
  max-height: 750px;
  /* background-size: cover; */
}

/* .my-carousel .carousel-item img { */
/* object-fit: cover; */
/*background-repeat: no-repeat;
  background-size: cover;*/

.text_1 {
  font-family: "Montserrat";
  /* width: 1250px; */
  /* font-size: 55px; */
}
.text_2 {
  font-family: "Montserrat";
}
.display-1 {
  font-weight: bold;
}
.carousel-caption {
  text-align: left;
}
.mb-5 {
  margin-bottom: 8rem !important;
}
.bttn_txt {
  color: #3560ed;
  font-family: "Montserrat";
}
.py_txt {
  -webkit-text-stroke: 2px white;
  -webkit-text-fill-color: #ffffff00;
}
.bttn_txt1 {
  font-family: "Montserrat";
}
/* .nav-pills .nav-link.active{
  --bs-nav-pills-link-active-color: #0d6efd;
  --bs-nav-pills-link-active-bg: #fff;
} */
.nav-pills {
  --bs-nav-pills-link-active-color: #0d6efd;
  --bs-nav-pills-link-active-bg: #fff;
}

.nav-pills .nav-link.active {
  --bs-nav-pills-link-active-color: #0d6efd;
  --bs-nav-pills-link-active-bg: #fff;
  border: 1px;
}
.nav {
  --bs-link-color: #fff;
  font-family: "Montserrat";
}
.tab-pane {
  font-family: "Montserrat";
}
</style>
