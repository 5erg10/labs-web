<template>
  <div>
    <div v-on:click="backButton" class="modal-mask-calendar" id="modal-template-calendar"></div>
    <div class="modal-container-calendar" id="modal-container-calendar">
        <div v-on:click="backButton" class="closeCalendarButton"><i class="material-icons">close</i></div>
        <div class="eventsCalendar">
          <div class="calendarTable">
              <div class="calendarHeader">
                  <div class="calendarHeaderMonth">{{month + '   ' + year}}</div>
                  <i class="material-icons chevronRight" @click="addMonth">chevron_right</i>
                  <i class="material-icons chevronLeft" @click="subtractMonth">chevron_left</i>
              </div>
              <ul class="calendarWeekdays">
                  <li class="calendarWeekDayText" v-for="( day, index ) in days" :key="day+index">{{ day }}</li>
              </ul>
              <ul class="calendarDates">
                  <li class="blackDay" v-for="( blank, index ) in firstDayOfMonth" :key="'blanck'+index"></li>
                  <li v-for="( date, index ) in daysInMonth" :key="date+index" class="calendarDaysText" :class="{'calendarCurrentDay': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
                      <span>{{ date }}</span>
                      <div class="eventDayIndicator" v-if="checkEventsDays(date,month,year)"></div>
                  </li>
              </ul>
          </div>
          <div class="calendarEventsList">
              <div class="calendarEventListTitle">Events this Month: </div>
              <div class="calendarEventListBox">
                  <div v-for="( events, index ) in listOfEvents" :key="events.title+index" class="calendarEventInMonth" v-if="events.date.format('MMMM') === month && events.date.format('Y') === year">
                      <div class="calendarEventInMonthDate">{{ events.date.get('date') }}/{{ events.date.month()+1 }}/{{ events.date.year() }}</div>
                      <div class="calendarEventInMonthTitle">{{ events.title }}</div>
                  </div>
              </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import moment from 'moment';
export default {
  name: 'eventsCalendar',
  props: {
      bgImage: String
  },
  data () {
    return {
      today: moment(),
			dateContext: moment(),
			days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			listOfEvents: [
				{date: moment("7/27/2018", "MM-DD-YYYY"), title:'MeetUp: panorama AR'},
				{date: moment("7/31/2018", "MM-DD-YYYY"), title:'Codemotion: ponencia UX para chatbots'},
				{date: moment("8/12/2018", "MM-DD-YYYY"), title:'Frontisamba'},
				{date: moment("8/25/2018", "MM-DD-YYYY"), title:'Samba to fronty'},
                {date: moment("9/7/2018", "MM-DD-YYYY"), title:'Code Wars'},
                {date: moment("9/11/2018", "MM-DD-YYYY"), title:'MeetUp: Panorama AR'},
				{date: moment("10/13/2018", "MM-DD-YYYY"), title:'U-tad academy'},
				{date: moment("11/20/2018", "MM-DD-YYYY"), title:'Chatbot conf'},
				{date: moment("12/20/2018", "MM-DD-YYYY"), title:'christmas party'}
			]
    }
  },
	computed: {
		year: function () {
			var t = this;
			return t.dateContext.format('Y');
		},
		month: function () {
			var t = this;
			return t.dateContext.format('MMMM');
		},
		daysInMonth: function () {
			var t = this;
			return t.dateContext.daysInMonth();
		},
		currentDate: function () {
			var t = this;
			return t.dateContext.get('date');
		},
		firstDayOfMonth: function () {
			var t = this;
			var firstDay = moment(t.dateContext).subtract((t.currentDate - 1), 'days');
			return firstDay.weekday();
		},
		initialDate: function () {
			var t = this;
			return t.today.get('date');
		},
		initialMonth: function () {
			var t = this;
			return t.today.format('MMMM');
		},
		initialYear: function () {
			var t = this;
			return t.today.format('Y');
		}
	},
	created: function(done){
    $('html, body').css('overflow', 'hidden');
	},
	destroyed: function(){
    $('html, body').css('overflow', 'auto');
	},
	methods: {
    backButton: function(){
        this.$router.go(-1);
    },
		activeMenu: function(){
			this.active = !this.active;
		},
		addMonth: function () {
			var t = this;
			t.dateContext = moment(t.dateContext).add(1, 'month');
		},
		subtractMonth: function () {
			var t = this;
			t.dateContext = moment(t.dateContext).subtract(1, 'month');
		},
		checkEventsDays: function(day, month, year) {
			let validateDate = false;
			this.listOfEvents.forEach(element => {
				if (day === element.date.get('date') && month === element.date.format('MMMM') && year === element.date.format('Y')) validateDate = true;
			});
			return validateDate;
		}
	}
}
</script>

<style scoped>
  .modal-mask-calendar {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    transition: opacity .3s ease;
  }
  .modal-container-calendar {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999;
    width: 1000px;
    height: 90%;
    padding: 0px 0px;
    transition: all .3s ease;
  }
  .closeCalendarButton{
    padding: 15px 0px;
    float: right;
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;
  }
  .closeCalendarButton:hover{
    color: #2dcccd;
  }
  .eventsCalendar{
    display: inline-block;
    max-height: 90%;
    min-height: 80%;
    width: 100%;
    background: #2e2e2e;
  }
  .calendarHeader{
    display: inline-block;
    width: 100%;
    background: #f3f1f0;
  }
  .chevronLeft{
    float: right;
    padding: 30px;
    font-size: 30px !important;
    cursor: pointer;
  }
  .chevronRight{
    float: right;
    padding: 30px;
    font-size: 30px !important;
    cursor: pointer;
  }
  .chevronRight:hover, .chevronLeft:hover{
    background: #e8e5e4;
    color: #121212;
    transition: all 0.1s ease-in-out;
  }
  .calendarHeaderMonth{ 
    display: inline-block;
    outline-style: none;
    float: left;
    font-size: 25px;
    text-align: center;
    padding: 28px;
  }
  .calendarTable{
    color: #333333;
    width: 50%;
    display: inline-block;
    height: 90%;
    margin: 4% 2%;
    position: relative;
    float: left;
  }
  .calendarWeekdays{
    display: inline-block;
    list-style: none;
    width: 100%;
    padding: 0px;
    margin: 2% 0%;
    font-size: 20px;
  }
  .calendarWeekDayText{
    display: inline-block;
    color: #f3f1f0;
    width: 70px;
    float: left;
    padding-left: 8px;
    box-sizing: border-box;
  }
  .eventDayIndicator{
    width: 10px;
    height: 10px;
    background-color: #004481;
    border-radius: 30px;
    margin-top: 5px;
  }
  .calendarDates{
    list-style: none;
    display: inline-block;
    width: 100%;
    padding: 0px;
    margin: 0%;
    background: #f5f5f5;
  }
  .calendarDaysText{
    display: inline-block;
    width: 71.4px;
    height: 70px;
    float: left;
    padding: 8px;
    font-size: 10px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .calendarDaysText:hover{
    background: #e8e5e4;
    color: #121212;
    font-size: 13px;
    font-weight: bolder;
    transition: all 0.1s ease-in-out;
  }
  .blackDay{
    display: inline-block;
    width: 71.4px;
    height: 70px;
    float: left;
    padding: 8px;
    font-size: 10px;
    box-sizing: border-box;
    background: #e1e1e1;
  }
  .calendarCurrentDay{
    background: #e8e5e4;
    color: #121212;
    cursor: pointer;
  }
  .calendarEventsList{
    width: 40%;
    display: inline-block;
    position: relative;
    float: left;
    margin: 4% 2%;
  }
  .calendarEventListTitle{
    color: #e8e5e4; 
    font-size: 20px;
    padding: 0px 10px;
    display: inline-block;
    width: 100%;
    position: relative;
    float: left;
  }
  .calendarEventListBox{
    font-size: 20px;
    padding: 10px;
    display: inline-block;
    width: 100%;
    position: relative;
    float: left;
  }
  .calendarEventInMonth{
    background: #f3f1f0;
    color: #333333; 
    width: 100%;
    margin-bottom: 2%;
    position: relative;
    float: left;
    cursor: pointer;
  }
  .calendarEventInMonth:hover{
    background: #e8e5e4;
    color: #121212;
    transition: all 0.1s ease-in-out;
  }
  .calendarEventInMonthDate{
    font-size: 12px;
    display: inline-block;
    float: left;
    vertical-align: middle;
    padding: 10px;
  }
  .calendarEventInMonthTitle{
    font-size: 13px;
    font-weight: bold;
    display: inline-block;
    float: left;
    vertical-align: middle;
    padding: 9px;
  }
</style>
