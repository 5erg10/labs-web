import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import InfoCard from '@/components/cardInfo'
import Calendar from '@/components/eventsCalendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: { main: Main }
    },
    {
      path: '/calendar',
      name: 'calendar',
      components: {
        main: Main,
        modal: Calendar
      },
      props: { header: true, calendar: false }
    },
    {
      path: '/:area',
      name: 'main',
      components: { main: Main }
    },
    {
      path: '/file/:fileId',
      name: 'file',
      components: {
        main: Main,
        modal: InfoCard
      },
      props: { header: true, infocard: false }
    }
  ]
})
