<template>
  <div class="modal" :class="showClass" ref="modal">
    <div class="modal__dialog">
      <div class="modal__content">
        <form action="#">
          <div class="modal__close" @click="closePage">&times;</div>
          <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalPage",
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
      document.addEventListener('click',function(item){
        if (item.target ===  vm.$refs['modal']){
            vm.closePage()
        }
      })
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__dialog {
  max-width: 500px;
  margin: 40px auto;
}

.modal__content {
  position: relative;
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  max-height: 80vh;
  overflow-y: auto;
}

.modal__close {
  position: absolute;
  top: 8px;
  right: 14px;
  font-size: 30px;
  color: #000;
  opacity: 0.5;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal__title {
  font-family: "GolosText";
  text-align: center;
  font-size: 22px;
  text-transform: uppercase;
  color: #303030;
}

.hide {
  display: none;
}

.show {
  display: block;
}
</style>
