<template>
  <div class="content">
    <NavBarKaz></NavBarKaz>
    <div id="carouselExampleCaptions" class="carousel slide my-carousel">
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
        <div class="carousel-item active">
          <img
            src="@/assets/logo/slide111.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5 class="mb-4 col-sm-8">
              <strong class="text_1 display-1 text-light">
                Жұмысыңызды тиімдірек ететін 10 жылдам перне</strong
              >
            </h5>
            <p class="text_2 fs-5 mb-4 fw-light text-light col-sm-6">
              Пернелер тіркесімін пайдалану өнімділікті айтарлықтай жақсартады
              және қайталанатын әрекеттерді азайтады.
            </p>
            <a href="#">
              <button
                type="button"
                class="btn btn-light mb-5 bttn_txt fw-normal fs-5 rounded-4"
                style="
                  --bs-btn-padding-y: 1.25rem;
                  --bs-btn-padding-x: 7rem;
                  --bs-btn-font-size: 0.75rem;
                  --bs-btn-radius: 1rem;
                "
              >
                Толығырақ
              </button>
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/logo/python1.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption">
            <h5>
              <strong class="text_1 display-1 text-light">
                Курсқа жиналым</strong
              >
            </h5>
            <p class="py_txt display-1 mb-5 fw-bold text-light">PYTHON</p>
            <div class="container_btn d-flex">
              <a href="#">
                <button
                  type="button"
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
                  Бірінші сабақ тегін
                </button>
              </a>
              <a href="#">
                <button
                  type="button"
                  class="btn btn-light bttn_txt fw-normal fs-5 rounded-4 ms-4"
                  style="
                    --bs-btn-padding-y: 1rem;
                    --bs-btn-padding-x: 3rem;
                    --bs-btn-font-size: 0.75rem;
                    --bs-btn-radius: 1rem;
                  "
                >
                  Толығырақ
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/logo/web1.png" class="d-block w-100" alt="..." />
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
                HTML (ағылш. HyperText Markup Language - " гипермәтіндік тіл
                белгілеу") - стандартталған гипермәтіндік белгілеу тілі
                браузерде веб-шолуға арналған құжаттар. Веб-шолғыштар HTTP /
                HTTPS протоколдары арқылы серверден HTML құжатын алыңыз немесе
                Жергілікті дискіден ашыңыз, содан кейін кодты түсіндіріңіз
                монитор экранында көрсетілетін интерфейс.
              </div>
              <div
                class="tab-pane fade col-sm-4 fw-light"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                CSS (ағылш. Cascading Style Sheets "каскадты стиль кестелері") —
                құжаттың (веб-беттің)сыртқы түрін сипаттаудың ресми тілі,
                белгілеу тілін қолдана отырып жазылған (көбінесе HTML немесе
                XHTML). Кез келген XML құжаттарына да қолдануға болады, мысалы,
                SVG немесе XUL.
              </div>
              <div
                class="tab-pane fade col-sm-4 fw-light"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                JavaScript-мультипарадигмалық бағдарламалау тілі. Объектіге
                бағытталған, императивті және функционалды стильдер.
                Спецификацияны іске асыру болып табылады ECMAScript (ECMA
                стандарты-262). JavaScript әдетте қолданылады нысандарға
                Бағдарламалық жасақтамаға қол жеткізу үшін ендірілген тіл
                ретінде қосымшалар. Браузерлерде кеңінен қолданылады
                веб-беттерге интерактивтілік беру үшін сценарий тілі.
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
    <TeachersFormKaz></TeachersFormKaz>
    <MapsContentKaz></MapsContentKaz>
    <NavigationWorkKaz></NavigationWorkKaz>
  </div>
</template>
<script>
import NavBarKaz from "@/components/kaz/NavBarKaz.vue";
import TeachersFormKaz from "../kaz/TeachersFormKaz.vue";
import MapsContentKaz from "../kaz/MapsContentKaz.vue";
import NavigationWorkKaz from "@/components/kaz/NavigationWorksKaz.vue";

export default {
  name: "slide-photo",
  components: {
    NavBarKaz,
    TeachersFormKaz,
    MapsContentKaz,
    NavigationWorkKaz,
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
