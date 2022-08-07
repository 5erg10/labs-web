<template>
  <div class="footer-box" id="appFooter">
     <div class="team-title">Team</div>
     <div v-for="( member, index ) in members" class="team-member-file" :key="member.name + index" v-bind:id="member.name + member.surname" v-on:mouseover="hoverEffect(member)" v-on:mouseleave="leaveEffect(member.name)">
         <div class="team-member-capitals">{{ member.name.charAt(0).toUpperCase() + member.surname.charAt(0).toUpperCase() }}</div>
        <img class="team-member-photo" :src="photoUrl + member.photo"/>
     </div>
    <transition name="fade" mode="out-in">
        <div v-if="currentMember.name" class="teamImageDescription" id="memberDescription" v-bind:style="'position: absolute; top: ' + currentMember.top + 'px; left: ' + currentMember.left + 'px;'">
            <div class="teamMemberName"> {{ currentMember.name }}</div>
            <div class="teamMemberOcupation"> {{ currentMember.tag }}</div>	
            <div class="teamMemberDesc"> {{ currentMember.desc }}</div>
        </div>
    </transition>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: 'appFooter',
  data () {
    return {
        members:[
				{'name':'Paula', 'surname': 'Cordero', 'desc':'En búsqueda activa de formas diferentes para crear y aportar valor. Apasionada del diseño, la naturaleza y los libros en papel.', 'tag':'The Boss', 'photo':'PaulaCordero.png'},
				{'name':'Carlos', 'surname': 'Gonzalez', 'desc':'Interesado en la ciencia de datos, el desarrollo de software y la domótica. En aprendizaje constante para mejorar día a día. Adicto a los libros y a conocer mundo.', 'tag':'Machine inteligence', 'photo':'CarlosGonzalez.jpg'},
				{'name':'Fernando', 'surname': 'Cerezal', 'desc':'Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías', 'tag':'Blockchain/IoT', 'photo':'FernandoCerezal.jpg'},
				{'name':'Ira', 'surname': 'Manzano', 'desc':'Identificando necesidades. Interesada en aportar el mayor valor a las personas. Investigando para la definición de nuevos modelos de negocio viables y escalables.', 'tag':'Service Design', 'photo':'IraManzano.png'},
				{'name':'Jorge', 'surname': 'Andres', 'desc':'Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías', 'tag':'HCI/UX', 'photo':'JorgeAndres.jpg'},
				{'name':'Marian', 'surname': 'Moldovan', 'desc':'Agente del caos. Hacker de IoT y apasionado por la Computación Ubicua.', 'tag':'HCI/IoT', 'photo':'MarianClaudiu.png'},
				{'name':'Sergio', 'surname': 'Santamaria', 'desc':'Visualizador y desarrollador agreste que busca lo que no se haya hecho antes y que a un gráfico le sobren las palabras, no necesariamente por ese orden.', 'tag':'HCI/front', 'photo':'SergioSantamaria.png'},
				{'name':'Jesus', 'surname': 'Martin', 'desc':'Interesado en las personas y en como se enfrentan a todo tipo de interfaz y obsesionado con hacer toda interacción más fácil.', 'tag':'HCI/UX', 'photo':'JesusMartin.jpg'},
				{'name':'Lucas', 'surname': 'Menendez', 'desc':'Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías', 'tag':'Machine inteligence/Blockchain', 'photo':'lucasmenendez.jpg'},
				{'name':'Samuel', 'surname': 'Muñoz', 'desc':'Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías', 'tag':'Machine inteligence/Blockchain', 'photo':'samuelmunoz.jpg'}
            ],
            currentMember: {},
			photoUrl: "static/img/team/"
    }
  },
  methods: {
    hoverEffect: function(member){
        let elementPosition = $('#'+member.name + member.surname).position();
        member.top = elementPosition.top + 100;
        member.left = elementPosition.left + 20;
        this.currentMember = member;
    },
    leaveEffect: function(id){
        this.currentMember = {};
    }
  }
}
</script>
<style scoped>
    .footer-box{
        height: 400px;
        width: 100%;
        background-color: #121212;
        display: inline-block;
        padding: 0px 50px;
        box-sizing: border-box;
    }
    .team-title{
        height: 50px;
        width: 100%;
        font-size: 36px;
        padding: 0px 0px;
        font-family: 'IBM Plex Mono', monospace;
    }
    .team-member-file{
        width: 80px;
        height: 80px;
        border-radius: 3px;
        margin-right: 30px;
        margin-top: 10px;
        border: solid 1px #999999;
        float: left;
        cursor: pointer;
        text-align: center;
        overflow: hidden;
    }
    .team-member-file:hover .team-member-photo{
        margin-top: -65px;
        transition: all 0.1s ease-in-out;
    }
    .team-member-capitals{
        font-size: 35px;
        margin-top: 20%;
    }
    .team-member-photo{
        height: 120px;
        width: 90px;
        margin-top: 50px;
        margin-left: -10px;
    }
    .teamImageDescription{
        text-align: left;
        color: #ffffff;
        display: inline-block;
        width: 300px;
        background-color: #121212;
        padding: 15px 0px;
        box-sizing: border-box;
        font-size: 12px;
        border-radius: 1px;
        border-top: solid 1px #ffffff;
    }
    .teamImageDescription::after{
        content:'';
        position: absolute;
        top: -10px;
        left: 10px;
        border-bottom: solid 10px rgb(255, 255, 255);
        border-left: solid 10px transparent;
        border-right: solid 10px transparent;
    }
    .teamMemberName{
        font-size: 16px;
        font-weight: bold;
        margin: 3px;
        float: left;
    }
    .teamMemberOcupation{
        font-size: 12px;
        font-style: italic;
        margin: 7px;
        float: left;
    }
    .teamMemberDesc{
        float:left;
        width: 100%;
        margin: 10px 0px;
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
<style>
</style>