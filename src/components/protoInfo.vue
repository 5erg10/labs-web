<template>
    <div class="modal-tool-box">
        <div class="modal-title-proto-box">
            <div class="modal-title-proto">{{ $parent.fileData.title.toLowerCase() }}</div>
            <div class="modal-scope-proto" v-bind:class="$parent.fileData.area.toLowerCase() + 'text'">{{ $parent.fileData.scope }}</div>
        </div>
        <div v-if="$parent.fileData.graphics[0].url != undefined" class="modal-video-proto">
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + $parent.fileData.graphics[0].url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <ul class="modal-techs-proto">
            <li v-for="( techs, index ) in $parent.fileData.technologies" :key="techs.title + index"><a v-bind:class="$parent.fileData.area.toLowerCase() + 'text'" :href="techs.url" target="_blanck">{{ techs.title }}</a></li>
        </ul>
        <div class="modal-content-proto">
            <div class="modal-description-proto">{{ $parent.fileData.description }}</div>
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
    </div>
</template>

<script>
import $ from "jquery";
import Router from 'vue-router'

export default {
  name: 'protoInfo',
  created: function(){
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 10px;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    text-decoration: none;
  }
  .modal-tool-box{
    background-color: #ffffff;
    width: 100%;
    margin: 50px 0px;
    display: inline-block;
  }
  .modal-title-proto-box{
    width: 100%;
    background-color: #f4f4f4;
    display:inline-block;
  }
  .modal-title-proto{
    color: #000000;
    font-size: 36px;
    padding: 15px 20px;
    float: left;
  }
  .modal-scope-proto{
    font-size: 14px;
    padding: 30px 20px;
    float: right;
  }
  .modal-content-proto{
    background-color: #f4f4f4;
    float: left;
    margin-bottom: 100px;
    padding-bottom: 50px;
  }
  .modal-description-proto{
    font-size: 16px;
    color: #121212;
    padding: 50px;
    width: 50%;
    float: left;
    box-sizing: border-box;
  }
  .modal-video-proto{
    display: flex;
    justify-content: center;
    padding: 30px;
  }
  .modal-techs-proto{
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      color: #121212;
  }
  .modal-firstSteps-file-box{
    width: 50%;
    margin-top: 30px;
    float: left;
    padding-right: 50px;
    box-sizing: border-box;
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
</style>
