<template>
    <div class="txt mb-5 mt-5">
      <p
        class="fs-1 text-center my-4 text-primary"
        style="font-family: 'Montserrat'; font-weight: 900"
        id="pre"
      >
        Предподаватели
      </p>

      <div class="contain">
        <div class="row row-cols-1 row-cols-md-3 w-75">
          <div class="col">
            <div class="card h-100">
              <img
                src="@/assets/Des/ph.jpg"
                class="imma card-img-top rounded-circle mx-auto d-block border border-5 border-tertiary"
                alt=""
              />
              <div class="card-body text-center" style="color: #3560ed">
                <h5 class="card-title fs-3">Нурсултан</h5>
                <p class="card-text fw-light">
                  Всем привет меня зовут Нурсултан, мне 18 лет, учусь в
                  колледже, я работаю здесь около 2 месяцев, вполне хороший
                  работа, могу советовать
                </p>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-primary btn-lg mx-auto d-block"
                >
                Подробнее
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="@/assets/Des/profile1.png"
                class="imma card-img-top rounded-2 mx-auto d-block"
                alt=""
              />
              <div class="card-body text-center" style="color: #3560ed">
                <h5 class="card-title fs-3">Заголовок</h5>
                <p class="card-text fw-light">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-primary btn-lg mx-auto d-block"
                >
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="@/assets/Des/profile1.png"
                class="imma card-img-top rounded-2 mx-auto d-block"
                alt=""
              />
              <div class="card-body text-center" style="color: #3560ed">
                <h5 class="card-title fs-3">Заголовок</h5>
                <p class="card-text fw-light">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <h1>Hello world</h1>
              </div>
              <div class="card-footer">
                <button
                  type="button"
                  class="btn btn-primary btn-lg mx-auto d-block"
                >
                  Подробнее
                </button>
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
};
</script>
<style scoped>
:root {
  --color1: #3560ed;
}
.contain {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
}
.card-img,
.card-img-bottom,
.card-img-top {
  width: 45%;
}
.card {
  --bs-border-width: 0px;
}
.imma {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.card-footer {
  background-color: white;
}
</style>
