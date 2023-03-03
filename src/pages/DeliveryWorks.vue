<template>
  <div class="body">
    <div class="container">
      <!-- main -->
      <div class="main">
        <div class="title_content">
          <div class="txt_item">Условия доставки и оплаты</div>
        </div>
        <div class="mini_text">
          <div class="txt_item_mini">
            Доставка осуществляется только по предоплате.
          </div>
        </div>
        <div class="subtitle_content">
          <div class="txt_item_sub">Способы доставки</div>
        </div>
        <!-- 111111111111111 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Самовывоз</li>
              </ul>
            </div>
            <div class="btn_des">
              <div class="btn_item_des">Бесплатно</div>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              С понедельника по пятницу, с 9.00 до 18.00. Перед приездом,
              пожалуйста, предупредите за полчаса по телефону.
            </div>
          </div>
        </div>
        <!-- 111111111111111111111 -->
        <!-- 22222222222222 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Доставка курьером</li>
              </ul>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              Доставка осуществляется по адресу, указанному в форме заказа.
              Перед приездом сотрудники компании предупредят телефонным звонком.
            </div>
          </div>
        </div>
        <!-- 2222222222222222 -->
        <!-- 33333333333 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Доставка почтой</li>
              </ul>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              Стоимость доставки - согласно прейскуранту почтовой службы.
            </div>
          </div>
        </div>
        <!-- 3333333333333333 -->
        <!-- 444444444444 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Транспортная компания</li>
              </ul>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              Любая транспортная компания на выбор заказчика. Стоимость доставки
              - согласно прейскуранту транспортной компании.
            </div>
          </div>
        </div>
        <!-- 4444444444 -->
      </div>
    <!-- main -->



          <!-- main two -->
      <div class="main">
        <div class="subtitle_content">
          <div class="txt_item_sub">Способы оплаты</div>
        </div>
        <!-- 111111111111111 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Безналичный расчет</li>
              </ul>
            </div>
            
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
             Реквизиты для оплаты будут предоставлены после оформления заказа.
            </div>
          </div>
        </div>
        <!-- 111111111111111111111 -->
        <!-- 22222222222222 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Наличными</li>
              </ul>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              Оплата наличными обсуждается во время заказа.
            </div>
          </div>
        </div>
        <!-- 2222222222222222 -->
        <!-- 33333333333 -->
        <div class="main_subtitle">
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Наложенный платеж</li>
              </ul>
            </div>
          </div>
          <div class="mini_text_two">
            <div class="txt_item_mini_two">
              Оплата возможна только по предварительному согласованию.
            </div>
          </div>
        </div>
        <!-- 3333333333333333 -->
        <!-- 444444444444 -->
        <div class="main_subtitle">
             <div class="subtitle_content">
          <div class="txt_item_sub">Регионы доставки:</div>
        </div>
          <div class="descrip_content">
            <div class="txt_item_des">
              <ul>
                <li>Казахстан, все регионы</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 4444444444 -->
      </div>
      <!-- main two -->
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
li {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #161616;
}
.body {
  margin-bottom: 40px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.txt_item {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #161616;
}
.main {
  margin-left: 20px;
}
.subtitle_content {
  margin: 20px 0px 0px 0px;
}
.txt_item_sub {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.03em;
  color: #161616;
}
.txt_item_mini {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.mini_text {
  margin: 20px 0px 20px 0px;
}
.descrip_content {
  display: flex;
}
.txt_item_des {
  margin-right: 10px;
}
.btn_des {
  display: flex;
  align-items: center;
}
.btn_item_des {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #161616;
  border-radius: 10px;
  color: white;
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.txt_item_mini_two {
  font-family: "GolosText";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #757575;
}
.main_subtitle {
  margin-bottom: 10px;
}
</style>
