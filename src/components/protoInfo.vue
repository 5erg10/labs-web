<template>
    <div class="modal-tool-box">
        <div class="modal-title-proto-box">
            <div class="modal-title-proto">{{ $parent.fileData.title.toLowerCase() }}</div>
            <div class="modal-scope-proto" v-bind:class="$parent.fileData.area.toLowerCase() + 'text'">{{ $parent.fileData.scope }}</div>
        </div>
        <div class="modal-media-proto">
          <div v-for="media in $parent.fileData.graphics">
            <iframe class="modal-media-file" v-if="media.type === 'video'" :src="media.url" frameborder="0" autoplay allowfullscreen></iframe>
            <img v-if="media.type === 'image'" :src="media.url" class="modal-media-file"/>
          </div>
        </div>
        <div class="modal-info-proto">
          <div class="modal-description-proto">{{ $parent.fileData.description }}</div>
          <div class="modal-links-proto">
            <div class="modal-links-title-proto">
              <div class="material-icons link-proto-icon"><i>link</i></div>
              Links
            </div>
            <ul class="modal-techs-proto">
                <li v-for="( techs, index ) in $parent.fileData.technologies" :key="techs.title + index"><a v-bind:class="$parent.fileData.area.toLowerCase() + 'text'" :href="techs.url" target="_blanck">{{ techs.title }}</a></li>
            </ul>
          </div>
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
</template>

<script>

export default {
  name: 'protoInfo',
  data () {
    return {
        mediaType: undefined
    }
  },
  created: function(){
  },
  methods: {
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 10px 0px;
    margin: 0px;
  }
  li {
    display: inline-block;
    margin: 0px 20px 0px 0px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-title-proto{
    color: #000000;
    font-size: 36px;
    padding: 15px 20px;
  }
  .modal-scope-proto{
    font-size: 14px;
    padding: 30px 20px;
  }
  .modal-info-proto{
    background-color: #f4f4f4;
    margin-bottom: 100px;
    padding-bottom: 50px;
    display: flex;
    align-items: flex-start;
  }
  .modal-description-proto{
    font-size: 16px;
    color: #121212;
    padding: 50px;
    width: 50%;
    float: left;
    box-sizing: border-box;
  }

  .modal-links-proto {
    margin-top: 30px;
  }

  .modal-links-title-proto {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid 1px #4a4a4a;
    color: #4a4a4a;
  }
  .link-proto-icon{
    color: #4a4a4a;
    margin-right: 10px;
  }

  .modal-media-proto{
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .modal-media-file {
    margin: 0px 10px;
    width: 300px;
    height: 200px;
  }
  .modal-techs-proto{
      background-color: #f4f4f4;
      display: flex;
      justify-content: flex-start;
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
