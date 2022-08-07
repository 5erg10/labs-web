<template>
  <div class="main-component">
    <main-header v-if="scrollToTop"></main-header>
    <area-menu></area-menu>
    <cards></cards>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MainHeader from './header.vue'
import AreaMenu from './areaMenu.vue'
import Cards from './infoCards.vue'
import AppFooter from './footer.vue'

export default {
  name: 'mainPage',
  components: {
      AreaMenu,
      MainHeader,
      Cards,
      AppFooter
  },
  data () {
    return {
      ToolActive: this.checkRoutes(),
      scrollToTop: true,
      noResults: false
    }
  },
  watch: {
    '$route.params.area': function (area) {
      this.ToolActive = this.checkRoutes();
    }
  },
	created: function(done){
    this.checkRoutes();
		
  },
	methods: {
		checkRoutes: function(){
      let routeChecked = 'all';
      if(this.$route.params.area != undefined) routeChecked = this.$route.params.area;
      return routeChecked;
		}
	}
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
