import Home from './pages/home.vue';

import Email from './pages/Email.vue';
import Event from './pages/Event.vue';
import Place from './pages/Place.vue';

import EventCenter from './components/event/EventCenter.vue'
import EventDetails from './components/event/EventDetails.vue'
import EventEdit from './components/event/EventEdit.vue'


export default [
    { path: '/', component: Home },
    { path: '/email', component: Email },
    { path: '/event', component: Event , children:[
        {path: '' , component: EventCenter},
        {path: ':id' , component: EventDetails},
        {path: 'edit' , component: EventEdit},
        {path: 'edit/:id' , component: EventEdit},
    ]},
    { path: '/place', component: Place }
]