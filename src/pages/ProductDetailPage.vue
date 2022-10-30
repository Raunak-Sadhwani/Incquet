<template>
  <section id="pricing" class="pricing-section">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
    />
    <div class="container">
      <div class="back" @click="$router.push('/products')">
        <i class="bx bx-arrow-back" />
      </div>
      <div class="section-header text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".2s">{{ type }}</h2>
        <p class="wow fadeInUp" data-wow-delay=".4s">&nbsp;</p>
      </div>

      <div class="row">
        <div class="product-block">
          <div class="col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div class="background-element" id="background-element"></div>
            <div
              class="highlight-window"
              :style="{ backgroundImage: 'url(' + img + ')' }"
              id="product-img"
            >
              <div class="highlight-overlay" id="highlight-overlay"></div>
            </div>
          </div>

          <div class="col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div class="product-item">
              <div class="main-content">
                <h2>{{ name }}</h2>

                <div class="description" id="description">
                  <h3 class="h3">ABOUT THE PRODUCT:</h3>

                  <p>
                    {{ description }}
                  </p>
                </div>
                <div class="highlight-window mobile" id="product-img">
                  <div class="highlight-overlay" id="highlight-overlay-mobile"></div>
                </div>

                <div class="options">
                  <div class="color-options">
                    <span class="h3">COLOR</span>
                    <div class="color-picker">
                      <div
                        class="color overlay"
                        :style="{ transform: 'translateX(' + pix + 'px)' }"
                        id="color-overlay"
                      >
                        <div class="check"></div>
                      </div>
                      <div class="color color-a" id="color-a" @click="transform(0)" />
                      <div class="color color-b" id="color-b" @click="transform(45)" />
                      <div class="color color-c" id="color-c" @click="transform(90)" />
                      <div class="color color-d" id="color-d" @click="transform(135)" />
                    </div>
                    <span class="small"
                      >Color : <span id="color-name">{{ color }}</span></span
                    >
                  </div>
                </div>

                <form action="" class="shop-form" @submit.prevent="">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="divider"></div>
                      <div class="purchase-info">
                        <div class="price">Rs. {{ price }}</div>
                        <input type="button" class="button" value="BUY NOW" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      color: "Pink",
      description: null,
      img: null,
      type: null,
      price: null,
      name: null,
      pix: 45,
    };
  },
  created() {
    fetch(this.$store.getters.url + "/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => {
        this.description = data.description;
        this.img = data.image;
        this.type = data.type;
        this.price = data.price;
        this.name = data.name;
      });
  },
  methods: {
    transform(x) {
      this.pix = x;
      if (x == 0) {
        this.color = "Silver";
      } else if (x == 45) {
        this.color = "Pink";
      } else if (x == 90) {
        this.color = "Yellow";
      } else if (x == 135) {
        this.color = "Black";
      }
    },
  },
};
</script>

<style scoped>
.pricing-section {
  height: 86vh;
  overflow: hidden;
}
.options {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.product-item .main-content {
  padding: 40px 46px 25px 20px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #222;
  width: 100%;
  height: 100%;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
}

h1 {
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
  font-size: 48px;
  font-size: 3rem;
}

h3 {
  color: #666;
  font-size: 19px;
  font-size: 1.2rem;
  font-family: inherit;
}

.description {
  margin-top: 15px;
  width: 100%;
}

.highlight-window {
  /*margin-top: 25px;*/
  height: 475px;
  width: 400px;
  background: #ccc;

  transition: all 0.5s ease;
  background-size: cover;
  /*box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);*/
  z-index: 10;
  position: relative;
  background-position: center top;
}
/* .highlight-window  img{

} */

.color {
  height: 30px;
  cursor: pointer;
  width: 30px;
  background: #eee;
  /*border: 1px solid #D0D0D0;*/
  position: relative;
}

.color.overlay {
  position: absolute;
  z-index: 10;
  background: transparent;
  top: -1px;
  left: -1px;
  /* -webkit-transform: translateX(45px); */
  /* -ms-transform: translateX(45px); */
  /* transform: translateX(45px); */
  border: 2px solid #fff;
  outline: 2px solid #333333;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
}
.color-a {
  background: #dedfe1;
  margin-right: 14px;
}

.color-b {
  background: #dda4ad;
  margin-right: 14px;
}

.color-c {
  background: #ffe599;
  margin-right: 14px;
}
.color-d {
  background: #929191;
  margin-right: 14px;
}

.color-picker {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 180px;
  margin-top: 5px;
  position: relative;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  color: #666;
}
.product-item .button {
  background: #333;
  border: none;
  font-weight: 400;
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.product-item .button:hover {
  background: #555;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.divider {
  width: 80%;
  height: 1px;
  background: #ddd;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}
.color-options {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
}
.size-picker {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
}
.small {
  font-size: 11px;
  font-size: 1.2rem;
  color: #999;
  margin-top: 10px;
}
.align-right {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}
.size-desc {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.purchase-info {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.price {
  font-size: 40px;
  font-size: 2.5rem;
  white-space: nowrap;
}

.product-item .price span {
  text-decoration: line-through;
  margin-right: 20px;
}

.range-picker {
  font-size: 16px;
  font-size: 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 5px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 0.9em;
}
.range-picker div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-right: 1px solid #bbb;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #bbb;
  width: 30px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 30px;
  -webkit-transition: background 0.5s ease;
  transition: background 0.5s ease;
}
.highlight-window.mobile {
  display: none;
}
.range-picker .active:hover {
  background: #fff;
}
.range-picker .active {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  background: #fff;
  margin-right: 3px;
  margin-left: 2px;
  color: #333;
  border: 1px solid #666;
  z-index: 1;
}
.check {
  position: absolute;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  width: 0px;
  bottom: -3px;
  border-left: 10px solid transparent;
  border-bottom: 10px solid #333333;
  border-right: 10px solid transparent;
  height: 0px;
}
.range-picker div:hover {
  background: #eee;
  -webkit-transition: background 0.2s;
  transition: background 0.2s;
}
.range-picker div:first-child {
  border-left: 1px solid #bbb;
}
.range-picker div.active:first-child {
  border-left: 1px solid #333;
}

.product-item .h3 {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  color: #808080;
  font-family: inherit;
  /*font-style: italic;*/
  /*font-family: 'Playfair Display', serif*/
}

.product-item p {
  letter-spacing: 1px;
  font-size: 14px;
  color: #808080;
  line-height: 25px;
}

.product-item .description ul {
  margin: 0;
  padding: 0;
  margin-left: 15px;
}

.product-item .description ul li {
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  /*color: #666;*/
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
}

.product-item ul > li:before {
  content: "- ";
}

.product-item form {
  margin-top: 20px;
}

.product-block {
  margin-top: 10px;
}

.product-item input::-webkit-input-placeholder,
.product-item textarea::-webkit-input-placeholder,
.product-item select::-webkit-input-placeholder {
  color: #ccc;
  opacity: 1;
}

.product-item input::-moz-input-placeholder,
.product-item textarea::-moz-input-placeholder,
.product-item select::-moz-input-placeholder {
  color: #ccc;
  opacity: 1;
}
.product-item input::-ms-input-placeholder,
.product-item textarea::-ms-input-placeholder,
.product-item select::-ms-input-placeholder {
  color: #ccc;
  opacity: 1;
}
.back {
  position: absolute;
  top: 14vh;
  left: 0;
  z-index: 99;
  font-size: 3rem;
  padding: 2.5rem;
  cursor: pointer;
}
@media (max-width: 768px) {
  .pricing-section {
    height: max-content;
    overflow: scroll;
  }
  .highlight-window {
    width: auto;
  }
  .back {
    padding: 1.25rem 2rem;
    font-size: 2.4rem;
  }
}
@media (max-width: 600px) {
  .pricing-section {
    height: max-content;
    overflow: scroll;
  }
  .product-item .purchase-info {
    display: block;
    text-align: center;
  }
  .product-item .button {
    margin-top: 30px;
  }

  .highlight-window {
    height: 400px;
    width: auto;
  }

  .product-block {
    margin-top: 0px;
  }
}
</style>
