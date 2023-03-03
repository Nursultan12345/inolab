<template>
  <div class="modal" :class="showClass" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closePage"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoModal",
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
  z-index: 1;
}
</style>
