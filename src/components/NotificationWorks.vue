<template>
  <div class="v-notification">
    <div
      class="v-notification__content"
      v-for="message in messages"
      :key="message.id"
    >
      <div class="content__text">
        <span>Notification name</span>
        <img src="../assets/check.png" class="material-icons" />
      </div>
      <div class="content_buttons">
        <button v-if="rightButton.length">{{ rightButton }}</button>
        <button v-if="leftButton.length">{{ leftButton }}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-notification",
  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
    },
    rightButton: {
      type: String,
      default: "",
    },
    leftButton: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style scoped>
.v-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
}
.v-notification__content {
  padding: 16px;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 16px;
  background: #202226;
}
.content__text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.material-icons {
  width: 30px;
  margin-left: 16px;
}
.content_buttons {
}
span {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 48px;
}
</style>
