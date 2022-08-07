<template>
  <div class="area-menu-component" v-bind:class="{ toolsMenuFixed: scrollLevel }" id="menuComponent">
    <div class="top-menu" id="topMenu">
      <img class="next-logo" :src="menuIMage"/>
      <div class="calendar-button-box">
        <router-link to='/calendar' class="calendar-button">
          <i class="material-icons calendar-icon">today</i>
          Proximos eventos
        </router-link>
      </div>
    </div>
    <div class="bottom-menu">
      <ul class="areas-list">
        <li v-for="(area, index) in areas" :key="index" v-bind:class="{ areaActive: area.name === $parent.ToolActive }"><router-link :to="area.link ">{{ capitalizeString(area.name) }}</router-link></li>
      </ul>  
      <div class="searchbar-box">
        <i class="material-icons searchBarIcon">search</i>
        <i v-if="inputValue !=''" v-on:click="resetSearch()" class="material-icons searchBarIconClose">close</i>
        <input type="text" class="SearchBar" v-model="inputValue" v-on:keyup="inputTypeHead($event.target.value)" placeholder=""/>
        <div id="searchResultBox" class="search-result-box" v-if="itemsFounded.length > 0">
          <div v-for="(item, index) in itemsFounded" class="search-result-line" v-on:click="showSearchResult(item)" :key="item.title + index"> {{ item.title.substr(0,20) }} ... </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import $ from "jquery";
    export default {
    name: 'areaMenu',
    data () {
      return {
        scrollLevel : false,
        itemsFounded: [],
        inputValue: "",
        menuIMage: 'static/img/logo-white.png',
        areas: this.$parent.$parent.areas
        }
    },
    methods: {
      capitalizeString(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
      },
		  handleScroll: function() {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        const headerHeight = $("#mainHeader").innerHeight();
		    if( scrollTop > headerHeight ) {
          this.scrollLevel = true;
		    }
		    else this.scrollLevel = false;
      },
      inputTypeHead: function(word){
        this.itemsFounded = [];
        this.$parent.noResults = true;
        if( word.length > 0 ) {
          this.$parent.$parent.cardsData.forEach( item =>{
            if( item.area == this.$parent.ToolActive.toLowerCase() || this.$parent.ToolActive.toLowerCase() == 'all' ){
              item.active = false;
              this.getTechnologies(item).some( elements => {
                let itemClear = elements.replace(/[^\w]/g, '');
                if( itemClear.match(new RegExp('.{1,' + word.length + '}', 'g')).find( i => i.toLowerCase() == word.toLowerCase() )) { 
                  this.itemsFounded.push({"title":item.title, "area": item.area, "id": item.id }); 
                  item.active = true;
                  this.$parent.noResults = false;
                  return true;
                }
              })
            }
          })
        }
        else {
          this.$parent.$parent.cardsData.forEach( item =>{
            item.active = true;
            this.$parent.noResults = false;
          })
        }
      },
      getTechnologies: function(element){
        let techsList = [];
        switch (element.area){
          case 'tools':
            techsList.push(element.title);
            if( element.tag != undefined && Array.isArray(element.tag)) techsList = techsList.concat(element.tag);
            else if( element.tag != undefined && typeof element.tag == 'string' ) techsList.push(element.tag);
            if( element.subtag != undefined && element.subtag.length ) techsList.push(element.subtag);
            break;
          case 'prototipes':
            techsList = element.technologies.map(a => a.title);
            techsList.push(element.title);
            if( element.tag != undefined && Array.isArray(element.tag)) techsList = techsList.concat(element.tag);
            else if( element.tag != undefined && typeof element.tag == 'string' ) techsList.push(element.tag);
            if( element.subtag != undefined && element.subtag.length ) techsList.push(element.subtag);
            break;
          case 'insigths':
            techsList = element.categories.filter(e => e !== 'beeva-labs');
            techsList.push(element.title);
            break;    
        }
        return techsList;
      },
      showSearchResult: function(item){
				this.inputValue = item.title.substr(0,10);
        this.$parent.$parent.cardsData.forEach( elem =>{
             if(elem.id == item.id) elem.active = true;
             else elem.active = false;
        })
        this.itemsFounded = [];
      },
      resetSearch: function(){
        this.inputValue = '';
        this.itemsFounded = [];
        this.inputTypeHead('');
        this.$parent.noResults = false;
        this.$router.push({ path: this.$route.path });
      }
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
      '$route.params.area': function (area) {
        //this.itemsFounded = this.itemsFounded.filter( e => e.area == this.$route.params.area );
        //if(this.itemsFounded.length == 0) this.$parent.noResults = true;
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet');
  h1, h2 {
    font-weight: normal;
  }
  .area-menu-component{
    width: 100%;
    float: left;
  }
  .top-menu{
    height: 70px;
    background-color: #121212;
    position: relative;
    float: left;
    width: 100%;
  }

  .bottom-menu{
    height: 50px;
    background-color: #ffffff;
    color: rgb(99, 99, 99);
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 50px;
    box-sizing: border-box;
     -webkit-box-shadow: 0px 1px 2px 1px rgba(199,197,199,0.5);
    -moz-box-shadow: 0px 1px 2px 1px rgba(199,197,199,0.5);
    box-shadow: 0px 1px 2px 1px rgba(199,197,199,0.5);
  }
  .areas-list {
    list-style-type: none;
    padding: 0 0 0 10px !important;
    text-align: left;
  }
  .searchbar-box{
    width: 300px;
    height: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  
  li {
    display: inline-block;
    margin: 0 30px;
    cursor: pointer;
  }
  a {
    color: #BDBDBA;
    text-decoration: none;
  }
  .areaActive a{
    font-weight: bolder;
    color: #121212 !important;
    transition: all 0.2s ease-in-out;
  }
  .next-logo{
    height: 60%;
    margin: 15px 40px;
    position: relative;
    float: left;
  }
  .SearchBar{
    border: none;
    border-bottom: 1px solid #BDBDBA;
    color: #BDBDBA;
    border-radius: 0;
    outline: none;
    height: 100%;
    margin: 0px 0 0 0;
    padding-left: 30px;
    font-size: 14px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    width: 100%;
    box-sizing: border-box;
  }
  .searchBarIcon, .searchBarIconClose{
    display: flex;
    align-self: flex-end;
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: 1px solid #BDBDBA;
    color: #BDBDBA;
  }
  .SearchBar::placeholder {
    color: #BDBDBA;
    font-size: 12px;
  }
  .SearchBar:focus {
    color: #121212; 
    border-bottom: 1px solid #121212;
  }
  .SearchBar:focus + .searchBarIcon{ 
    color: #121212;
    border-bottom: 1px solid #121212;
  }
  .SearchBar:focus ~ .searchBarIconClose{ 
    color: #121212;
    border-bottom: 1px solid #121212;
  }
  .search-result-box{
    position: absolute;
    top: 35px;
    right: 0px;
    width: 100%;
    z-index: 999;
    border: solid 1px #999999;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  .SearchBar:focus ~ .search-result-box{ 
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
  .search-result-line{
      width: 100%;
      float: left;
      text-align: left;
      padding: 5px 10px;
      border-radius: 2px;
      background-color: #efefef;
      box-sizing: border-box;
      color: #888;
      font-size: 14px;
      cursor: pointer;
  }
  .search-result-line:hover{
      background-color: #cfcfcf;
      color: #333333;
  }
  .calendar-button-box{
    font-size: 14px;
    color: #dddddd;
    position: relative;
    float: right;
    cursor: pointer;
    height: 100%;
    line-height: 85px; 
    margin: 0px 50px;
    text-decoration: none;
  }
  .calendar-button{
    color: #dddddd;
  }
  .calendar-button-box:hover .calendar-button{
    color: #2dcccd;
  }
  .calendar-icon{
    position: absolute;
    top: 26px;
    left: -30px;
  }
  .toolsMenuFixed{
    position: fixed;
    top: 0px;
    margin-bottom: 150px;
  }

  @media (max-width: 600px) {
    .bottom-menu {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      height: 100px;
    }

    .searchbar-box {
      width: 100%;
    }
  }
</style>
