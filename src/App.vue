<template>
  <div id="app">
    <router-view name="main"></router-view>
    <transition name="fade" mode="out-in">
      <router-view name="modal"></router-view>
    </transition>
  </div>
</template>

<script>
import $ from "jquery";
import { initializeApp } from 'firebase/app'
import 'firebase/database'
import Database from "./assets/scripts/database.js";
import Medium from "./assets/scripts/mediumData.js";

export default {
  name: 'App',
  data() {
		return {
			cardsData: [],
			areas: [{ name: 'all', link: '/all'}],
			firebase:  {
				apiKey: "AIzaSyDzroyIhzE_ffwClPkbtrx3g9lSA79b1OA",
				authDomain: "labs-data-resources.firebaseapp.com",
				databaseURL: "https://labs-data-resources-default-rtdb.firebaseio.com",
				projectId: "labs-data-resources",
				storageBucket: "labs-data-resources.appspot.com",
				messagingSenderId: "538411256404",
				appId: "1:538411256404:web:bfa3977676296f703a7bc1"
			}
    }
  },
  created() {
		this.cardsData = this.loadDatas();
	},
	methods: {
		loadDatas: function(){
			let datas = [];
			let sdk = initializeApp(this.firebase);
			let db = new Database(sdk);
			db.get("tools").then(tools => {
				if(tools != null) this.areas.push({ name: 'tools', link: '/tools' });
				$.each(tools, function(item) {
					if(!tools[item].id) tools[item].id = item;
					tools[item].area = 'tools';
					tools[item].active = true;
					datas.push(tools[item]);
        })
			});
			db.get("stacks").then(stackFiles => {
				if(stackFiles != null) this.areas.push({ name: 'stacks', link: '/stacks' });
				$.each(stackFiles, function(item) {
					if(!stackFiles[item].id) stackFiles[item].id = item;
					stackFiles[item].area = 'stacks';
					tools[item].active = true;
					datas.push(stackFiles[item]);
				})
			});
			db.get("prototypes").then(protoFiles => {
				if(protoFiles != null) this.areas.push({ name: 'prototipes', link: '/prototipes' });
				$.each(protoFiles, function(item) {
					if(!protoFiles[item].id) protoFiles[item].id = item;
					protoFiles[item].area = 'prototipes';
					protoFiles[item].active = true;
					if(!protoFiles[item].graphics) protoFiles[item].graphics = [{title: undefined, url: undefined}];
					datas.push(protoFiles[item]);
				})
			});
			new Medium().getListOfPost("beeva-labs", postit => {
				this.areas.push({ name: 'insigths', link: '/insigths' });
				postit.items.forEach(element => {
					element.area = 'insigths';
					element.active = true;
					element.id = '_' + Math.random().toString(36).substr(2, 9);
					if(element.categories.includes('hci')) datas.push(element);
				});
			});
			return datas;
		}
	}    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300');
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet');
::selection {
  background: rgba(0,0,0,0.2); /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: rgba(0,0,0,0.2); /* Gecko Browsers */
}
::-webkit-scrollbar {
  display: none;
}
body{
  margin: 0;
  background-color: #121212;
  color: #dddddd;
  
}
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
.tools{
		background-color: #8f7ae5;
}
.prototipes{
		background-color: #49a5e6;
}
.stacks{
		background-color: #004481;
}
.insigths{
		background-color: #2dcccd;
}
.toolstext{
		color: #8f7ae5;
}
.prototipestext{
		color: #49a5e6;
}
.stackstext{
		color: #004481;
}
.insigthstext{
	color: #2dcccd;
}
.adopt{
	background-color: #0065ff;
}
.wait{
	background-color: #38fd8e;
}
.adoptText{
	color: #0065ff;
}
.waitText{
	color: #38fd8e;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
