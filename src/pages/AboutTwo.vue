<template>
  <div class="body">
    <div class="container">
      <div class="body-table">
        <div class="genetal_title">
          <div class="content_text">
            <div class="title-text">Информация о компании</div>
          </div>
          <div class="name_company">
            <div class="general_company">
              <div class="name_content">
                <div class="txt_company">Называние:</div>
                <div class="txt_comp">ТОО "KaspiNet"</div>
              </div>
              <div class="line1"></div>
            </div>
            <div class="general_company">
              <div class="name_content">
                <div class="txt_company">Тип компании:</div>
                <div class="txt_comp2">
                  Торговая компания, Компания, предоставляющая услуги,
                  Представительство, Дистрибьютор / Реселлер
                </div>
              </div>
              <div class="line1"></div>
            </div>

            <div class="general_company">
              <div class="name_content">
                <div class="txt_company">Бренды:</div>
                <div class="txt_comp3">Teltonika</div>
              </div>
              <div class="line1"></div>
            </div>

            <div class="general_company">
              <div class="name_content">
                <div class="txt_company">Количество сотрудников:</div>
                <div class="txt_comp3">
Менее 5 человек</div>
              </div>
              <div class="line1"></div>
            </div>

            <div class="general_company">
              <div class="name_content">
                <div class="txt_company">Год основания:</div>
                <div class="txt_comp3">2017</div>
              </div>
              <div class="line1"></div>
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
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.genetal_title {
  background: #f4f5f8;
  border-radius: 10px;
  padding-bottom: 40px;

  /* width: 200px;
  height: 100px; */
}
.general_company {
  margin-bottom: 20px;
}
.content_text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 30px 40px;
}
.title-text {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  color: #161616;
}
.name_company {
  margin: 0px 40px;
}
.name_content {
  display: flex;
  justify-content: space-between;
}
.txt_company {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}
.txt_comp {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.txt_comp2 {
  width: 830px;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.txt_comp3 {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.line1 {
  height: 2px;
  background: #9f9f9f;
  margin-top: 5px;
}
</style>
