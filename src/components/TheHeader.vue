<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" @click="nameX" v-if="!name" />
      <div v-else @click="nameX" class="logo-text">
        Made with <span class="heart">♥</span> <br />
        by Raunak Sadhwani
      </div>
    </div>
    <div class="search-bar" v-if="$route.path === '/products'">
      <input
        type="text"
        v-model="filter"
        @keyup="filterProducts"
        @focusin="changeIcon"
        @focusout="changeIcon"
        style="text-transform: capitalise; width: 90%"
        placeholder="Search in products"
      />
      <i v-if="search" class="bx bx-search icon" />
      <i v-else class="bx bx-x icon" @click="close" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: true,
      filter: "",
      name: false,
    };
  },
  methods: {
    nameX() {
      this.name = !this.name;
      this.$router.push("/");
        setTimeout(() => {
          this.name = false;
        }, 3000);
    },
    changeIcon() {
      if (this.filter.length > 0) {
        this.search = false;
      } else {
        this.search = true;
      }
    },
    filterProducts() {
      this.changeIcon();
      this.$store.commit("getProducts", `${this.$store.getters.url}?name=${this.filter}`);
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  height: 14vh;
  width: 100%;
  z-index: 10000;
  border: 1px solid white;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0 1.5%;
  padding-right: 5%;
}
.logo {
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo-text {
  font-weight: 600;
  text-align: center;
}
.logo img {
  height: 80%;
  width: 100%;
  object-fit: contain;
}
.search-bar {
  height: 55%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
}
input {
  background-color: whitesmoke;
  border: none;
  outline: 0;
  height: 60%;
  width: 85%;
}
.search {
  background-color: var(--sidebar-color);
  width: 90%;
}

@media screen and (max-width: 768px) {
  header {
    height: 12vh;
    width: 100%;
  }
  .logo {
    width: 20%;
    justify-content: flex-start;
    z-index: 500;
  }

  .logo img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .logo-text {
    font-weight: 600;
    text-align: center;
    font-size: 0.8rem;
    color: black;
    white-space: nowrap;
  }
  .search-bar {
    width: 70%;
    justify-content: center;
    padding: 0 2.5%;
  }
}
</style>
