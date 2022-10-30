<template>
  <section class="products" v-if="products.length > 0">
    <the-product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :img="product.image"
      :type="product.type"
      :price="product.price"
      @click="$router.push(`/product/${product.id}`)"
    />
  </section>
  <div class="no-products" v-else>
    <h1>No products found!</h1>
  </div>
</template>

<script>
import TheProduct from "../components/TheProduct.vue";
export default {
  components: {
    TheProduct,
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  async created() {
    await this.$store.commit("getProducts", this.$store.getters.url);
  },
  methods: {},
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 15vh;
  min-height: 86vh;
  width: 100%;
  padding: 4% 5%;
}
.no-products {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86vh;
  font-size: larger;
}
@media screen and (max-width: 850px) {
  .products {
    gap: 10%;
    padding: 4%;
    margin-top: 8%;
  }
}
</style>
