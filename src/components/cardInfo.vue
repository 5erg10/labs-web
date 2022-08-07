<template>
        <div id="modal-template-file">
            <div v-on:click="backButton" class="modal-mask-file" id="modal-template-file"></div>
            <div v-on:click="backButton" class="close-file-button"><i class="material-icons close-file-icon">close</i></div>
            <div class="modal-container-file">
                 <component :is="dynamicComponent"></component>	
            </div>
        </div>
</template>

<script>
import $ from "jquery";
import Router from 'vue-router'
import Tools from './toolinfo.vue'
import Prototipes from './protoInfo.vue'

export default {
  name: 'cardInfo',
  components: {
      "tools": Tools,
      "prototipes": Prototipes
  },
  data () {
    return {
        fileData: undefined,
        dynamicComponent: ''
    }
  },
  created: function(){
    $('html, body').css('overflow', 'hidden');
    this.fileData = this.$parent.cardsData.find(x => x.id === this.$route.params.fileId); 
    if( this.fileData != undefined ) this.dynamicComponent = this.fileData.area.toLowerCase();
  },
  beforeDestroy: function(){
    this.fileData = undefined;
    $('html, body').css('overflow', 'auto');
  },
  watch: {
    '$parent.cardsData': function(val) {
        this.fileData = this.$parent.cardsData.find(x => x.id === this.$route.params.fileId); 
        if( this.fileData != undefined ) this.dynamicComponent = this.fileData.area.toLowerCase();
        console.log(this.fileData);
    }
  },
  methods: {
    backButton: function(){
        this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .modal-mask-file {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    transition: opacity .3s ease;
    overflow-y: scroll;
  }
  .close-file-button{
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;
  }
  .close-file-icon{
    font-size: 35px;
  }
  .close-file-button:hover{
    color: #2dcccd;
  }
  .modal-container-file {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999;
    width: 85%;
    height: 100%;
    overflow-y: scroll;
  }
</style>
