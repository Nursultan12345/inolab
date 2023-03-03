<template>
  <div class="body">
    <div class="container">
      <div class="general_blocks">
        <div class="reviews_body">
          <div class="main">
            <div class="title_content">
              <div class="txt_items">Отзывы</div>
            </div>
            <div class="subtitle_content">
              <div class="txt_items2">Нет отзывы...</div>
            </div>

            <div></div>

            <router-link :to="{ name: 'catalog' }" class="s">
              <div class="btn_back">Вернуться назад</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style scoped>
.s {
  text-decoration: none;
}
.body {
  margin-bottom: 40px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.reviews_body {
  background: #202226;
  padding: 50px;
  border-radius: 10px;
}
.txt_items {
  color: #fff;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
}
.title_content {
  margin-bottom: 50px;
}
.subtitle_content {
  margin-bottom: 50px;
}
.txt_items2 {
  color: #9f9f9f;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn_back {
  background: #fff;
  padding: 20px 30px;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}
.btn_back:hover {
  background: rgba(106, 177, 247, 0.695);
  transition: 1s;
}
</style>
