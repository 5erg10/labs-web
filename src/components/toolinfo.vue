<template>
    <div class="modal-tool-box">
        <div class="modal-title-file-box">
            <div class="modal-title-file">{{ $parent.fileData.title }}</div>
            <div class="modal-status-file" v-bind:class="$parent.fileData.status.toLowerCase() + 'Text'">{{ $parent.fileData.status }}</div>
            <div class="modal-status-file-indicator" v-bind:class="$parent.fileData.status.toLowerCase()"></div>
        </div>
        <div class="modal-image-file-box">
            <img :src="$parent.fileData.logo" class="modal-image-file"/>
        </div>
        <div class="modal-content-file-box">
            <div class="modal-description-file-box">
                <div class="modal-description-file">{{ $parent.fileData.description }}</div>
                <div class="modal-twitter-file"> 
                    <div class="modal-twitter-image"><img src="static/img/twitter.png"/></div> 
                    <div class="modal-twitter-text"># {{ $parent.fileData.twitter }}</div> 
                </div>
                <div v-if="$parent.fileData.steps" class="modal-firstSteps-file-box">
                    <div class="modal-firstSteps-title">
                        <div class="material-icons link-step-icon"><i>link</i></div>
                        <div class="firstSteps-title-text">First Steps</div>
                    </div>
                    <div class="modal-firstSteps-steps" v-for=" ( steps, index ) in $parent.fileData.steps" :key="index">
                        <div class="modal-firstSteps-step-index">{{ index + 1 }}</div>
                        <div class="modal-firstSteps-step-link">{{ steps.content }}</div>
                    </div>
                </div>
            </div>
            <div class="modal-links-file-box">
                <div v-if="$parent.fileData.demo" class="modal-demo-button"><a :href="$parent.fileData.demo" target="_black" v-bind:class="$parent.fileData.area">View Demo</a></div>
                <div class="modal-tags-tools">
                    <div class="modal-tags-title">Tags</div>
                    <div class="modal-tags-list">
                        <div class="modal-tags-list-element" v-for="( tags, index ) in $parent.fileData.tag" :key="tags + index">{{ tags }}</div>
                    </div>
                </div>
                <div v-if="$parent.fileData.links" class="modal-links-tool">
                    <div class="modal-links-title">
                        <div class="material-icons link-step-icon"><i>link</i></div>
                        <div class="firstSteps-title-text">Links</div>
                    </div>
                    <div class="modal-links-list">
                        <a class="modal-links-elements" v-for="( links, index ) in $parent.fileData.links" :href="links.url" target="_blanck" :key="links + index">
                            <div class="material-icons link-element-icon"><i>link</i></div>
                            <div class="link-element-text">{{ links.title }}</div>
                        </a>
                    </div>
                </div>
                <div v-if="$parent.fileData.graphics" class="modal-links-tool">
                    <div class="modal-links-title">
                        <div class="material-icons link-step-icon"><i>link</i></div>
                        <div class="firstSteps-title-text">Graphic material</div>
                    </div>
                    <div class="modal-links-list">
                        <a class="modal-links-elements" v-for="( graphs, index ) in $parent.fileData.graphics" :href="graphs.url" target="_blanck" :key="graphs + index">
                            <div class="material-icons link-element-icon"><i>link</i></div>
                            <div class="link-element-text">{{ graphs.title }}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import Router from 'vue-router'

export default {
  name: 'cardInfo',
  data () {
    return {
    }
  },
  created: function(){
  },
  beforeDestroy: function(){
  },
  methods: {
  }
}
</script>

<style scoped>
  a{
    color: #ffffff;
    text-decoration: none;
  }
  .modal-tool-box{
    background-color: #ffffff;
    width: 100%;
    margin: 50px 0px;
    display: inline-block;
  }
  .modal-title-file-box{
    width: 100%;
    background-color: #f4f4f4;
    display:inline-block;
  }
  .modal-title-file{
    color: #000000;
    font-size: 36px;
    padding: 15px 20px;
    float: left;
  }
  .modal-status-file{
    font-size: 14px;
    padding: 30px 20px;
    float: right;
  }
  .modal-status-file-indicator{
    width: 20px;
    height: 20px;
    float: right;
    margin: 30px -10px;
    border-radius: 30px;
  }
  .modal-image-file-box{
    height: 320px;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-image-file{
    width: 80%;
  }
  .modal-content-file-box{
    width: 100%;
    background-color: #f4f4f4;
    display: inline-block;
  }
  .modal-description-file-box{
    width: 60%;
    float: left;
    color: #121212;
    box-sizing: border-box;
    padding: 50px 50px;
  }
  .modal-twitter-file{
    background-color: rgba(29, 161, 243, 0.11);
    margin-top: 30px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-twitter-image img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .modal-twitter-text{
    font-style: italic;
    font-weight: bold;
  }
  .modal-firstSteps-file-box{
    width: 100%;
    margin-top: 30px;
  }
  .modal-firstSteps-title{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #d2d1ce;
  }
  .link-step-icon{
    color: #d2d1ce;
    margin-right: 20px;

  }
  .firstSteps-title-text{
    font-weight: bold;
    font-size: 16px;
  }
  .modal-firstSteps-steps{
    width: 100%;
    display: flex;
    padding: 10px 0px;
    margin-top: 20px;
  }
  .modal-firstSteps-step-index{
    width: 30px;
    height: 30px;
    font-size: 20px;
    font-family: 'IBM Plex Mono', monospace;
    color: #8f7ae5;
    border: solid 1px #8f7ae5;
    text-align: center;
    margin-right: 30px;
  }
  .modal-firstSteps-step-link{
    color: #4a4a4a;
    font-size: 16px;
    padding-top: 5px;
  }
  .modal-links-file-box{
    width: 40%;
    float: left;
    color: #121212;
    box-sizing: border-box;
    padding: 50px 50px;
  }
  .modal-demo-button{
    font-size: 14px;
    color: #ffffff;
    height: 80px;
    margin-bottom: 30px;
  }
  .modal-demo-button a{
    width: 160px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    margin-top: 30px;
    cursor: pointer;
  }
  .modal-tags-tools{
  }
  .modal-tags-title{
    font-weight: bold;
    size: 16px;
    color: #4a4a4a;
    border-bottom: solid 1px #d2d1ce;
    padding-left: 10px;
    padding-bottom: 5px;
  }
  .modal-tags-list{
    padding-top: 10px;  
  }
  .modal-tags-list-element{
    color: #4a4a4a;
  }
  .modal-links-tool{
    margin-top: 30px;
  }
  .modal-links-title{
    color: #4a4a4a;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #d2d1ce;
  }
  .modal-links-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 10px;
  }
  .modal-links-elements{
      color: #8f7ae5;
      border: solid 1px #8f7ae5;
      padding: 5px;
      cursor: pointer;
      margin-top: 10px;
      margin-right: 10px;
  }
  .link-element-icon, .link-element-text{
      float: left;
      margin-right: 10px; 
  }
</style>
