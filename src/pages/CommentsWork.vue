<template>
  <div class="general_com">
    <div class="container">
      <div class="all_container">
        <div class="title_comments">
          <div class="txt_com">
            Будем рады ответить на все интересующие вопросы
          </div>
          <div class="txt_description">
            Оставьте заявку и мы вам вскоре позвоним и проконсультируем по всем
            интересующим вопросом
          </div>
        </div>
        <form action="#">
        <div class="general_label_com">
          <div class="label_comment">
            <input v-model="name" required type="label" placeholder="Ваше имя" />
            <div class="line1"></div>
          </div>

          <div class="label_comment_one">
            <input v-model="email" required type="label" placeholder="Email" />
            <div class="line1"></div>
          </div>
        
          <div class="btn_go">
            <div class="btn__content">
              <button class="btn" @click="showClass" data-modal>Отправить</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
    <ModalPage ref="modalComponent"></ModalPage>
  </div>
</template>
<script>
import ModalPage from "../model/ModalPage.vue";

export default {
  name:"CommentsWork",
  components:{
    ModalPage
  },
  data() {
    return {
      name: '',
      email: ''
    };
  },
   methods: {
        showClass() {
          if (this.name.length && this.email.length) {
            console.log("OK")
            this.$refs.modalComponent.showClassModal = true;

          }else {
            console.log("ERROR")
          }
        },
    },
};


</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.all_container {
  display: flex;
  margin: 0px 0px 120px 0px;
}
.txt_com {
  margin-bottom: 20px;
  width: 470px;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
}
.txt_description {
  width: 430px;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.general_label_com {
  margin-top: 20px;
}
.line1 {
  margin-top: 10px;
  width: 550px;
  height: 2px;
  background: #9f9f9f;
  margin-right: 30px;
}
input {
  width: 500px;
  border: 2px solid;
  border-radius: 5px;
  font-family: "GolosText";
  font-size: inherit;
  color: #000;
  outline: none;
  background: none;
  border-color: white;
}
.label_comment_one {
  margin-top: 30px;
}
.btn__content {
  display: flex;
  margin-top: 40px;
}
.btn {
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
</style>
