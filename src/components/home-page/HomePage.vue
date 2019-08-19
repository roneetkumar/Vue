<template>
  <div class="homePageWrapper">
    <Header />
    <main>
      <button @click.prevent="logOut">Logout</button>
      <LeaPage v-if="nav === 'Lea'" />
      <MioPage v-else-if="nav === 'Mio'" />
      <NewsPage v-else-if="nav === 'News'" />
      <ServicePage v-else-if="nav === 'Services'" />
      <AboutPage v-else />
    </main>
    <NavBar @menu="navigate" />
  </div>
</template>

<script>
import Header from "./header";
import NavBar from "./nav-bar/nav";
import LeaPage from "../lea-page/lea-page";
import MioPage from "../mio-page/mio-page";
import NewsPage from "../news-page/news-page";
import ServicePage from "../service-page/service-page";
import AboutPage from "../about-page/about-page";

export default {
  components: {
    Header,
    NavBar,
    LeaPage,
    MioPage,
    NewsPage,
    ServicePage,
    AboutPage
  },
  data() {
    return {
      nav: "Lea"
    };
  },
  methods: {
    logOut() {
      this.$emit("goHome", false);
      sessionStorage.clear();
    },
    navigate(value) {
      this.nav = value;
    }
  }
};
</script>

<style scoped>
.homePageWrapper {
  background: #26d0d91a;
}
button {
  display: block;
  margin: 10px auto;
}
</style>