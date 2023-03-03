<template>
  <div class="main">
    <div class="container text-center text-light w-75 pb-5">
      <div class="row">
        <div class="col">
          <img src="@/assets/logo/logotype2.png" alt="" class="ino_logo mt-5" />
          <div class="row mt-3">
            <div class="col">
              <a
                href="https://www.instagram.com/inolab_shymkent/"
                target="blank"
              >
                <img
                  src="@/assets/logo/instagram.png"
                  alt=""
                  style="width: 54px; height: 54px"
                />
              </a>
            </div>
            <div class="col">
              <a
                href="https://api.whatsapp.com/send/?phone=77005790303&text&type=phone_number&app_absent=0"
                target="blank"
              >
                <img
                  src="@/assets/logo/whatsapp.png"
                  style="width: 54px; height: 54px"
                  alt=""
                />
              </a>
            </div>
            <div class="col">
              <a href="#">
                <img
                  src="@/assets/logo/tiktok.png"
                  style="width: 54px; height: 54px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="txt-navigation mt-5 fs-2 text-light">Мәзір</div>
          <div class="txt-navigation fs-5 fw-light pt-2">
            <a href="#" class="text-light text-decoration-none">Оқытушылар</a>
          </div>
          <div class="txt-navigation fs-5 fw-light pt-2">
            <a href="#" class="text-light text-decoration-none">Біз туралы</a>
          </div>

          <div class="txt-navigation fs-5 fw-light pt-2">
            <a href="#" class="text-light text-decoration-none">Мекен-жай</a>
          </div>
        </div>
        <div class="col">
          <div class="po row mt-5">
            <div class="col">
              <img
                src="@/assets/logo/gps1.png"
                style="width: 54px; height: 54px"
                alt=""
              />
              <div class="txt_one fw-light mt-1">Тауке Хана 2А, 13 кабинет</div>
            </div>
            <div class="col">
              <img
                src="@/assets/logo/call1.png"
                style="width: 54px; height: 54px"
                alt=""
              />
              <div class="txt_one fw-light mt-1">+7 700 579 0303</div>
            </div>
            <div class="col">
              <img
                src="@/assets/logo/email1.png"
                style="width: 54px; height: 54px"
                alt=""
              />
              <div class="txt_one fw-light mt-1">info@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style scoped>
.main {
  background: #203370;
  font-family: "Montserrat";
}
.ino_logo,
.mt-5 {
  margin-top: 5rem !important;
}
.ino_logo{
  width:  300px;
}
</style>
