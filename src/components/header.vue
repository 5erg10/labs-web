<template>
  <div class="header-box" id="mainHeader">
      <div class="scroll-indicator">
        <div class="doted-image"><img src="static/img/dotted.png"/></div>
        <div class="start-text">Start Exploring</div>
        <div class="scroll-text">Scroll</div>
      </div>
      <div class="parallax-container" v-on:mousemove="initParallax">
        <img class="header-background" :src="image"/>
        <img class="parallax-slide slide1" depth="100" src="static/img/greenBubbles.png" />
        <img class="parallax-slide slide2" src="static/img/purpleBubbles.png" />
        <img class="parallax-slide slide3" src="static/img/logos-slot.png" />
        <img class="parallax-slide slide4" src="static/img/titles-slot.png" />
      </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import {TweenMax, Power2, TimelineLite} from "gsap";
  export default {
    name: 'mainHeader',
    props: {
        bgImage: String
    },
    data () {
      return {
        image: 'static/img/mosaico_gris.svg'
      }
    },
    created: function(){
    },
    methods:{
      initParallax: function(event){
        this.parallaxIt(event, '.slide1', -50);
        this.parallaxIt(event, '.slide2', -70);
        this.parallaxIt(event, '.slide3', -90);
        this.parallaxIt(event, '.slide4', -100);
      },
      parallaxIt: function(event, target, movement){
        var $this = $(".parallax-container");
        var relX = event.pageX - $this.offset().left;
        var relY = event.pageY - $this.offset().top;
        TweenMax.to(target, 1, {
          x: (relX - $this.width() / 2) / $this.width() * movement,
          y: (relY - $this.height() / 2) / $this.height() * movement
        });
      }
    }
  }
</script>
<style scoped>
  .header-box{
    color: #cccccc;
    background-color: #000000;
    width: 100%;
    height: calc(100vh);
    overflow: hidden;
  }
  .header-background{
    width: 100%;
    text-align: center;
  }
  .parallax-container {
    height: calc(100vh);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .parallax-slide {
    display: block;
    position: absolute;
    width: 100% !important;
  }
  .scroll-indicator{
    width: 100%;
    height: 200px;
    position: absolute;
    top: calc(100vh - 200px);
    text-align: center;
  }
  .doted-image{
    width: 100%;
    margin-bottom: 10px;
  }
  .doted-image img{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  .start-text{
    font-size: 15px;
  }
  .start-text::after{ 
    content: "";
    background-color: #ffffff;
    width: 2px;
    height: 50px;
    position: absolute;
    right: 50%;
    top: 50%;
  }
  .scroll-text{
    margin-top: 60px;
  }
  @media (max-width: 600px) {
    .header-box{
      height: initial;
    }
    .parallax-container {
      height: 100%;
    }
    .parallax-slide {
      height: initial;
    }
  }
</style>
