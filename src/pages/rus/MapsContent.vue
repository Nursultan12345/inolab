<template>
  <div class="gen">
    <div class="container-fluid w-75 row row-cols-sm-2 mt-5 mb-5">
      <div class="maps-contant-one">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A52212cf8ec1c637b2d98ead28abc1899c245ed9f2560326abb99144ae3e8c2c9&amp;source=constructor"
          width="700"
          height="400"
          frameborder="2"
          class="maps-yandex rounded-5"
        ></iframe>

        <div class="txt_map mt-3 pb-3">
          <div class="container text-center" style="font-family: 'Montserrat;'">
            <div class="row">
              <div class="col-sm">
                <img
                  src="@/assets/logo/gps.png"
                  width="54"
                  height="54"
                  alt=""
                  class="gps-logo"
                />
                <div class="txt-ss col-sm-7 text-light mx-auto d-block my-2">
                  Тауке Хана 2А, 13 кабинет
                </div>
              </div>
              <div class="col-sm">
                <img
                  src="@/assets/logo/call.png"
                  width="54"
                  height="54"
                  alt=""
                  class=""
                />
                <div class="call-txt text-light my-2">+7 700 579 0303</div>
              </div>
              <div class="col-sm">
                <img
                  src="@/assets/logo/email.png"
                  width="54"
                  height="54"
                  alt=""
                  class="email-icon"
                />
                <div class="email-txt text-light my-2">info@gmail.com</div>
              </div>
            </div>
          </div>
          <!-- <div class="text-gps-icons">
          </div>-->
        </div>
      </div>
      <div class="col-sm ps-4" style="font-family: 'Montserrat'">
        <div
          class="content_txt-del border border-light border-3 border-opacity-50"
        >
          <div class="col d-flex justify-content-center">
            <div class="shadow-lg" style="">
              <div
                class="contact-us p-3 px-5 bg-light text-primary rounded-4 fs-4"
              >
                Связаться с нами
              </div>
            </div>
          </div>
          <div class="ko">
            <form action="" class="g-3 needs-validation my-5 text-center">
              <div class="col-md-9 mx-auto d-block">
                <input
                  type="text"
                  class="label-vs"
                  name="name"
                  required
                  placeholder="Ваш имя:"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-9 mx-auto d-block my-4">
                <input
                  type="text"
                  class="label-vs"
                  name="lastname"
                  placeholder="Ваш фамилия:"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-9 mx-auto d-block my-4">
                <!-- <div class="input-group has-validation"> -->
                <!-- <span class="input-group-text" id="inputGroupPrepend">@</span> -->
                <input
                  type="email"
                  class="label-vs"
                  placeholder="Email:"
                  name="email"
                  required
                />
                <!-- </div> -->
              </div>
              <div class="form-floating col-md-9 mx-auto d-block">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  name="comment"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Комментарии</label>
              </div>
              <div class="col mt-5">
                <input
                  class="btn btn-light text-primary rounded-4 px-5 py-3 fs-5 fw-normal"
                  type="submit"
                />
                <!-- Отправить -->
                <!-- </button> -->
                <!-- <input type="text"> -->
              </div>
            </form>
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
};
</script>
<style scoped>
.gen {
  background: #3560ed;
  display: flex;
  justify-content: center;
}
.email-icon,
.mx-5 {
  margin-left: 0 !important;
}
.contact-us,
.px-5 {
  padding-right: 10rem !important;
  padding-left: 10rem !important;
}
.ko {
  /* display: flex; */
  justify-content: center;
}
.label-vs {
  width: 494px;
  height: 35px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #fff;
  color: white;
  outline: 0;
}
.label-vs::placeholder {
  color: #fff;
}
</style>
