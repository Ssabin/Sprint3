import Home from './pages/Home.vue';

import Email from './pages/Email.vue';
import Event from './pages/Event.vue';
import Place from './pages/Place.vue';

import EmailCenter from './components/email/EmailCenter.vue'

import EventCenter from './components/event/EventCenter.vue'
import EventDetails from './components/event/EventDetails.vue'
import EventEdit from './components/event/EventEdit.vue'

import PlaceCenter from './components/place/PlaceCenter.vue'
import PlaceDetails from './components/place/PlaceDetails.vue'
import PlaceEdit from './components/place/PlaceEdit.vue'


export default [
    { path: '/', component: Home },
    { path: '/email', component: Email ,children:[
        {path: '' , component: EmailCenter},        
    ]},
    { path: '/event', component: Event , children:[
        {path: '' , component: EventCenter},
        {path: 'edit' , component: EventEdit},
        {path: ':id' , component: EventDetails},
        {path: 'edit/:id' , component: EventEdit},
    ]},
    { path: '/place', component: Place , children:[
        {path: '' , component: PlaceCenter},
        {path: 'edit' , component: PlaceEdit},
        {path: ':id' , component: PlaceDetails},
        {path: 'edit/:id' , component: PlaceEdit},
    ] }
]