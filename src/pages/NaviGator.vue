<template>
  <div class="main_from">
    <div class="container">
      <div class="obji">
        <div class="large_main">
          <div class="content_items">
            <div class="address_kaspi">
              <div class="txt_address">
                Турар Рыскулов 1048Б, Шымкент, Казахстан
              </div>
            </div>
            <div class="phone_kaspi">
              <div class="number_phone">+7 (700) 020-00-33</div>
            </div>
            <div class="email_kaspi">
              <div class="txt_email">nurzhan@kaspinet.info</div>
            </div>
            <div class="general_btn">
              <div class="btn_whatsapp">
                <a href="https://api.whatsapp.com/send?phone=+77769954290" target="_blank"> <div class="btn_one">Whatsapp</div> </a>
              </div>
              <div class="btn_telegram">
                <a href="https://t.me/nursszw" target="_blank"> <div class="btn_two">Telegram</div> </a>
              </div>
            </div>
          </div>

          <!-- Дополнителные информация -->
          <div class="main__info">
            <div class="info__items">
              <div class="info-title">
                <div class="txt_info">Информация</div>
              </div>
              <div class="add_main_from">
                <div class="additionally">
                  <router-link :to="{name:'delivery'}"> <div class="add_items">Доставка и оплата</div></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="general_logo">
          <div class="logo_items">
            <div class="logo__main">
              <a
                href="https://instagram.com/gps_kaspinet?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <img
                  class="icons_insta"
                  src=""
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="logo_items_two">
            <div class="logo__main">
              <a href="https://youtu.be/-1TmzyGZjuA" target="_blank">
                <img
                  class="icons_insta"
                  src=""
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="text-icons_main">
            <div class="general-text">
              <div class="txt__icons_from">
                Подписывайтесь на нас в социальных сетях
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <NavigatorTwo></NavigatorTwo> -->
    </div>
  </div>
</template>
<script>
// import NavigatorTwo from "./NavigatorTwo.vue";
export default {
  data() {
    return {};
  },
  components: {
    // NavigatorTwo,
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.main__info {
  margin: 40px 0px 0px 0px;
}

.info-title {
  margin-bottom: 25px;
}
.txt_info {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: #161616;
}

.additionally {
  margin-bottom: 15px;
}
.add_items {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #161616;
}
.txt_garantia {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #161616;
}
.main_from {
  display: flex;
}
.large_main {
  display: flex;
}
.content_items {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  margin-right: 250px;
}
.address_kaspi {
  margin: 40px 0px 24px 0px;
}
.txt_address {
  width: 415px;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */
  color: #000;
  letter-spacing: 0.01em;
  font-feature-settings: "liga" off;
}
.phone_kaspi {
  padding-bottom: 8px;
}
.number_phone {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  letter-spacing: 0.01em;
  font-feature-settings: "liga" off;
}
.email_kaspi {
  margin-bottom: 24px;
}
.txt_email {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height, or 117% */

  letter-spacing: 0.01em;
  font-feature-settings: "liga" off;
}
.general_btn {
  display: flex;
}
.btn_one {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: black;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-right: 10px;
}
.btn_two {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: black;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.general_logo {
  display: flex;
}
.logo_items {
  margin-right: 10px;
}
.icons_insta {
  background: #e9e9e9;
  border-radius: 10px;
  padding: 10px;
  width: 20px;
  /* margin: 50px 50px; */
}
.logo_items_two {
  margin-right: 25px;
}

.text-icons_main {
  margin-bottom: 40px;
}

.txt__icons_from {
  width: 195px;
  color: #757575;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
</style>
