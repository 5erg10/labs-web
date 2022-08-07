<template>
  <div class="cards-component">
    <div class="cards-container">
        <div v-for="card in $root.$children[0].cardsData" :key="card.id" class="card-element" v-if="filterCards(card)" v-on:click="goto(card)">
          <div class="card-element-header" v-bind:class="card.area"></div>
          <div class="card-area-text" v-bind:class="card.area + 'text'">{{ card.area }}</div>
          <div class="tech-info-title-subtag">
            <div class="tech-info-title">{{ card.title }}</div>
            <div v-if="card.subtag && card.subtag !=''" class="tech-info-subtag">{{ card.subtag }}</div>
          </div>
          <div v-bind:class="card.area + 'logo-box'"><img v-bind:class="card.area + 'logo'" :src="computeImage(card)"/></div>
          <div class="tech-status" v-bind:class="card.status.toLowerCase() + 'Text'" v-if="card.status">{{ card.status }}</div>
          <ul class="tech-list" v-if="card.technologies">
            <li v-for="( techs, index ) in card.technologies" :key="card.title + index" v-if="index<3"> {{ techs.title }} </li>
          </ul>
        </div> 
        <div v-if="false" class="no-results"> No results found in <b>{{ $parent.ToolActive }}</b> área</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cards',
  methods: {
    filterCards: function(file) {
          if ( (file.area == this.$parent.ToolActive.toLowerCase() || this.$parent.ToolActive.toLowerCase() == 'all') && file.active ) return true;
          else return false;
    },
    computeImage: function(card){
      switch (card.area){
        case 'tools':
          return card.logo;
          break;
        case 'insigths':
          return card.thumbnail;
          break;
        case 'prototipes':
          return 'http://img.youtube.com/vi/' + card.graphics[0].url + '/2.jpg';
          break;    
      }
    },
    goto(card){
      switch (card.area){
        case 'insigths':
          window.open(card.link, '_blank');
          break;
        default:
          this.$router.push({ path: '/file/' + card.id })
          break;    
      }
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
  .cards-component{
    background-color: #eeeeee;
  }
  .cards-container{
    width: 90%;
    padding-top: 50px;
    margin: 100px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-self: flex-start;

  }
  .card-element{
    background-color: #ffffff;
    color: #333333;
    width: 250px;
    height: 320px;
    font-size: 30px;
    border-radius: 2px;
    overflow: hidden;
    float: none;
    display: inline-block;
    margin: 30px;
    -webkit-box-shadow: 0px 0px 2px 1px rgba(199,197,199,1);
    -moz-box-shadow: 0px 0px 2px 1px rgba(199,197,199,1);
    box-shadow: 0px 0px 2px 1px rgba(199,197,199,1);
    cursor: pointer;
    text-decoration: none;
  }
  .card-element:hover{
    -webkit-box-shadow: 2px 2px 5px 3px rgba(199,197,199,0.5);
    -moz-box-shadow: 2px 2px 5px 3px rgba(199,197,199,0.5);
    box-shadow: 2px 2px 5px 3px rgba(199,197,199,0.5);
    transition: all 0.1s ease-in-out;
  }
  .card-element-header{
    width: 100%;
    height: 8px;
  }
  .card-area-text{
    font-size: 14px;
    padding: 10px;
    width: 100%;
    border-bottom: solid 1px #f0f0f0;
    font-weight: bold;
    box-sizing: border-box;
  }
  .tech-info-title-subtag{
    width: 100%;
    font-size: 12px;
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: solid 1px #f0f0f0;
    height: 70px;
  }
  .tech-info-title{
    font-weight: bolder;
    margin: 5px 0px;
  }
  .tech-info-subtag{
    font-size: 9px;
    font-weight: bold;
    background-color: #f3f1f0;
    color: #64615e;
    height:15px;
    display: inline-block;
    padding: 2px 12px;
    margin: 5px 0px;
    border-radius: 20px;
  }
  .toolslogo-box{
    margin: 30px 75px;
    display: inline-block;
    height: 90px;
  }
  .prototipeslogo-box{
    display: inline-block;
    height: 150px;
    width: 100%;
  }
  .toolslogo{
    width: 100px;
  }
  .insigthslogo{

  }
  .prototipeslogo{
    width: 100%;
    height: 100%;
  }
  .tech-status{
    font-size: 15px;
    height: 50px;
    padding: 10px;
    font-weight: bold;
    border-top: solid 1px #cccccc;
  }
  .tech-list{
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
  .no-results{
    width: 100%;
    font-size: 40px;
    color: #121212;
    text-align: center;
    padding: 100px 0px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>