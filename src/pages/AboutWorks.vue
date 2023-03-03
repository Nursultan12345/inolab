<template>
  <div class="model_body">
    <div class="container">
      <div class="model_content">
        <div class="bg_color_content">
          <div class="general">
            <div class="body_title">
              <div class="title-text">О компания</div>
            </div>
            <div class="body_subtitle">
              <div class="title-subtext">
                Интернет-магазин "KaspiNet" занимается продажей устройств для
                слежения за транспортными средствами. Всем своим покупателям мы
                предлагаем GPS-устройства от ведущих европейских и мировых
                производителей по наиболее привлекательной стоимости в
                Республике Казахстан. При необходимости, наши квалифицированные
                специалисты ответят на все интересующие вас вопросы, касающиеся
                выбора, покупки и доставки устройств для слежения за
                транспортными средствами. У нас вы обязательно сможете найти
                GPS-устройство, которое подходит именно вашему автомобилю. Все
                наши товары обладают сертификатами качества.
              </div>
            </div>
          </div>
        </div>
        <!-- осы жерге -->
        <about-two></about-two>
      </div>
    </div>
  </div>
</template>
<script>
import AboutTwo from "../pages/AboutTwo.vue"
export default {
  data() {
    return {};
  },
  components:{
    AboutTwo,
  }
};
</script>
<style scoped>
.model_body {
  margin: 50px 0px 100px 0px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.general {
  margin: 0px 0px 0px 40px;
}
.bg_color_content {
  background: #f4f5f8;
  border-radius: 10px;
  padding: 10px 0px;
  margin-bottom: 50px;
}
.body_title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 30px 0px;
}
.title-text {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #161616;
}
.title-subtext {

  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.body_subtitle{
  margin-bottom: 40px;
}
</style>
