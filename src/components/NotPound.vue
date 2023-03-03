<template>
  <div class="body">
    <div class="container">
      <div class="title_items">
        <p>Упс...</p>
        <router-link :to="{ name: 'catalog' }">
          <div class="btn_not">Вернуться назад</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotPound",
  data() {
    return {};
  },
};
</script>
<style scoped>
.body {
  margin: 10em 0px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title_items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-family: "Golos";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_not {
  background: #000;
  padding: 20px 30px;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}
.btn_not:hover {
  background: rgba(106, 177, 247, 0.695);
  transition: 1s;
}
</style>
