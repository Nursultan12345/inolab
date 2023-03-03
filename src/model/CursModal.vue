<template>
  <div class="modal" :class="cursShow" ref="modal" tabindex="-1">
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content text-center">
        <div class="modal-header align-items-center justify-content-center">
          <h5 class="modal-title fw-bold fs-2">Наши курсы</h5>
        </div>
        <div class="modal-body">
          <div class="container text-center">
            <div class="row">
              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/python500.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      Разробтка на языке Python
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>

              <!-- 2 -->

              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/xbox.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      Разробтка игр на Unity
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>

              <!-- 3 -->

              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/web12.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      Web - разработка
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <!-- 4 -->

              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/monitor.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      Компьютерная грамотность
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>

              <!-- 5 -->

              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/lego44.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      Робототехника
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>

              <!-- 6 -->

              <div class="col p-4 m-2 rounded-2">
                <div class="card h-100">
                  <div class="image_logo d-flex justify-content-center">
                    <img
                      src="../assets/logo/3dmodel.png"
                      alt=""
                      style="width: 100px"
                    />
                  </div>
                  <div class="card-body">
                    <div class="my-2 text-light fs-4 fw-normal">
                      3D Моделирование
                    </div>
                    <!-- <div class="backg rounded-4"> -->
                    <div
                      class="txt_zag text-light fw-light fs-11 mb-4 mx-auto d-block col-sm-6"
                    >
                      Пробный урок бесплатно
                    </div>
                  </div>
                  <div class="card-footer">
                    <div
                      class="mb-2 mt-2 text-light fs-4 fw-normal"
                      style="text-decoration-line: line-through"
                    >
                      32.000тг
                    </div>
                    <div class="mb-2 fs-2 text-light fw-normal">27.000тг</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <a
            href="https://api.whatsapp.com/send/?phone=77005790303&text&type=phone_number&app_absent=0"
            class="btn btn-success d-flex align-items-center"
          >
          <img src="../assets/logo/whatsapp2.png" style="width: 25px" class="ml-2">
            <div class="ms-2">Записаться</div>
          </a>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closePage"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CursModal",
  components: {},
  data() {
    return {
      showClassCurs: false,
    };
  },
  computed: {
    cursShow() {
      return this.showClassCurs ? "show" : "";
    },
  },
  methods: {
    closePage() {
      this.showClassCurs = false;
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["modal"]) {
        vm.closePage();
      }
    });
  },
};
</script>
<style scoped>
.backg {
  background: white;
}
.modal.show {
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
.modal {
  font-family: "Montserrat";
}
.col {
  background: #3560ed;
}
.card {
  --bs-card-border-color: white;
  --bs-card-bg: #fff0;
}
a {
  text-decoration: none;
}
</style>
