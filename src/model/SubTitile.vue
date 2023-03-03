<template>
  <div class="modal" :class="showClass" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header justify-content-center">
          <h5 class="modal-title fs-2 fw-bold">Горячие клавиши</h5>
        </div>
        <div class="modal-body">
          <div class="container">
            <!-- 1 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                1.
              </div>
              <div class="col-sm-3">
                <img src="../assets/keyboard/copy1.png" alt="" />
              </div>
              <div class="numbering col-sm">скопировать файл или текст</div>
            </div>
            <hr />
            <!-- 2 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                2.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/paste.png" alt="" />
              </div>
              <div class="numbering col-sm">
                вставка вырезанного или скопированного файла
              </div>
            </div>
            <hr />
            <!-- 3 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                3.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/alttab.png" alt="" />
              </div>
              <div class="numbering col-sm">
                переключение между окнами на рабочем столе
              </div>
            </div>
            <hr />
            <!-- 4 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                4.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/lang.png" alt="" />
              </div>
              <div class="numbering col-sm">изменение языка</div>
            </div>
            <hr />
            <!-- 5 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                5.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/f4.png" alt="" />
              </div>
              <div class="numbering col-sm">
                закрыть текущее окно / выключение компьютера
              </div>
            </div>
            <hr />
            <!-- 6 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                6.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/file.png" alt="" />
              </div>
              <div class="numbering col-sm">открытие проводника</div>
            </div>
            <hr />
            <!-- 7 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                7.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/cut.png" alt="" />
              </div>
              <div class="numbering col-sm">
                вырезать файл или текст для перемещения
              </div>
            </div>
            <hr />
            <!-- 8 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                8.
              </div>

              <div class="col-sm-3">
                <img src="../assets/keyboard/cancel.png" alt="" />
              </div>
              <div class="numbering col-sm">отменить действие</div>
            </div>
            <hr />
            <!-- 9 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                9.
              </div>

              <div class="col-sm-3">
                <img
                  src="../assets/keyboard/printscreen.png"
                  alt=""
                  style="width: 61px"
                />
              </div>
              <div class="numbering col-sm">скриншот всего экрана</div>
            </div>
            <hr />
            <!-- 10 -->
            <div class="row">
              <div class="col-sm-1 d-flex align-items-center fs-2 fw-bold">
                10.
              </div>

              <div class="col-sm-3">
                <img
                  src="../assets/keyboard/f2.png"
                  style="width: 61px"
                  alt=""
                />
              </div>
              <div class="numbering col-sm">переименовать папку</div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
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
  name: "SubTitle",
  components: {},
  data() {
    return {
      showClassModal: false,
    };
  },
  computed: {
    showClass() {
      return this.showClassModal ? "show" : "";
    },
  },
  methods: {
    closePage() {
      this.showClassModal = false;
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
.col-sm {
  display: flex;
  align-items: center;
}
img {
  width: 150px;
}
hr {
  /* width: 70%; */
  margin-left: auto;
  margin-right: auto;
}
.numbering {
  /* background: #3560ed; */
  /* color: white; */
}
</style>
