<template>
  <div class="general">
    <div class="container">
      <div class="title_price">
        <div class="title__price_work">
          <div class="txt">Автомобиьные GPS Трекеры</div>
          <div class="txt2">
            Мы на связи всегда и разберемся с любыми вопросами возникшими во
            время эксплуатации нашего оборудования.
          </div>
        </div>
      </div>
      <div class="block_content">
      
          <router-link :to="{name:'products'}">
          <div class="container__price">
            <div class="price_text">
              <div class="text__title_price">Вся наш продукция</div>
            </div>
            <div class="price_image">
              <div class="img_price">
                <img class="image" src="@/assets/smartphone.png" alt="" />
              </div>
            </div></div>
            </router-link>

        <router-link :to="{ name: 'about' }">
          <div class="container__price">
            <div class="price_text">
              <div class="text__title_price">О Нас</div>
            </div>
            <div class="price_image">
              <div class="img_price">
                <img class="image1" src="@/assets/team.png" alt="" />
              </div>
            </div>
          </div>
        </router-link>

        <router-link :to="{ name: 'reviews'}">
          <div class="container__price item">
            <div class="price_text">
              <div class="text__title_price">Отзывы</div>
            </div>
            <div class="price_image">
              <div class="img_price">
                <img class="image1" src="@/assets/review.png" alt="" />
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.general {
  margin-bottom: 120px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title_price {
  margin-top: 120px;
}
.txt {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
}
.txt2 {
  margin-top: 12px;
  margin-bottom: 60px;
  width: 800px;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 200;
  font-size: 17px;
  line-height: 24px;
  color: #757575;
}
.block_content {
  display: flex;
}
.container__price {
  background: #f4f5f8;
  width: 380px;
  height: 380px;
  border-radius: 10px;
  margin: 0px 50px 0px 0px;
}
.container__price:hover {
  background: rgba(106, 177, 247, 0.695);
  transition: 1s;
}
.price_text {
  padding: 24px 0px 24px 24px;
}
.text__title_price {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */

  letter-spacing: 0.01em;
  font-feature-settings: "liga" off;
}
.img_price {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 200px;
}
.image1 {
  width: 250px;
}
.item {
  margin: 0;
}
</style>
