<template>
  <div class="product">
    <div class="img">
      <img :src="img" alt="product" />
    </div>
    <div class="dets">
      <h4>{{ name }}</h4>
      <p>{{ type }}</p>
      <h5>&#8377;{{ price }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "type", "price", "img"],
};
</script>

<style scoped>
.product {
  width: 18%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
}
.product:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  scale: 1.05;
  cursor: pointer;
}
.img {
  height: 75%;
  width: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
}
.dets {
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
@media screen and (max-width: 850px) {
  .product {
    width: 45%;
    height: 40vh;
    margin-bottom: 5vh;
  }
  .img {
    height: 65%;
  }
  .dets {
    height: 35%;
    text-align: center;
    padding: 0 .75rem;
  }
  h4,
  p,
  h5 {
    font-size: 0.8rem;
  }
}
</style>
