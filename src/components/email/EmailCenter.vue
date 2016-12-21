<template>
  <section>
    <h1 class="title">{{title}}</h1>
    <div class="email-box box">
      <button @click="isComposeMode = true" class="button is-primary modal-button">Compose Email</button>
      <div ref="composeEmailModal" class="modal" :class="{'is-active': isComposeMode}">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
          <email-compose :emailComposer="'SaharSabin14@gmail.com'" v-show="isComposeMode" @emitComposedEmail="composeEmail"></email-compose>          
        </div>
        <button @click="isComposeMode = false" class="modal-close"></button>
      </div>
      <div class="email-list-view">
        <email-list :emails="emailsToShow" @showEmailDetails="showEmailDetails">
          <email-filter :emails="emails" @filterEmails="filter = $event"></email-filter>
        </email-list>
        <email-details :email="selectedEmail" v-show="selectedEmail.id" @closeDetails="closeDetails" @deleteEmail="deleteEmail"></email-details>
      </div>
      <email-status v-show="isComposeMode" :emailsNotReadCounter="emailsNotReadCounter"></email-status>
    </div>
  </section>
</template>

<script>
import EmailFilter from './email-filter.vue'
import EmailList from './email-list.vue'
import EmailDetails from './email-details.vue'
import EmailCompose from './email-compose.vue'
import EmailStatus from './email-status.vue'
export default {
  data () {
    return {
      title: `Welcome to you email list !`,
      filter: {txt:'' , emailStatus: 'A'},
      emails: [
        {
          id: 1,
          subject: 'Ubuntu Transfer',
          from: 'Sahar',
          to: 'Neta',
          date: new Date(),
          preview: 'Lorem ipsum',
          content: `Lorem ipsum bafdjkasbfjakj bkja bfkjab kab 
          fkjasb kjfb aksf abks fbks`,
          isRead: false
        },
        {
          id: 2,
          subject: 'Job Looking',
          from: 'Sahar',
          to: 'HR',
          date: new Date(),
          preview: 'Lorem ipsum',
          content: `Lorem ipsum bafdjkasbfjakj bkja bfkjab kab 
          fkjasb kjfb aksf abks fbks`,
          isRead: false
        },
        {
          id: 3,
          subject: 'Job Looking 2',
          from: 'Sahar',
          to: 'another HR',
          date: new Date(),
          preview: 'Lorem ipsum',
          content: `Lorem ipsum bafdjkasbfjakj bkja bfkjab kab 
          fkjasb kjfb aksf abks fbks`,
          isRead: false
        },
        {
          id: 4,
          subject: 'Music Concert',
          from: 'MusicConcerts@gmail.com',
          to: 'SaharSabin14@gmail.com',
          date: new Date(),
          preview: 'Lorem ipsum',
          content: `Lorem ipsum bafdjkasbfjakj bkja bfkjab kab 
          fkjasb kjfb aksf abks fbks`,
          isRead: false
        }
      ],
      lastId: 4 ,
      emailsToShow: [],
      emailsNotReadCounter: 0 ,
      isComposeMode: false,
      selectedEmail:{}
    }
  },
  methods:{
    showEmailDetails(emailId) {
      this.selectedEmail = this.emails.find(email => emailId === email.id);
      if(!this.selectedEmail.isRead){
        this.selectedEmail.isRead = true;
        this.emailsNotReadCounter--;
      }
    },
    showFirstEmail(){
      this.selectedEmail = this.emails[0];
      this.emails[0].isRead = true;
    },
    countEmailsNotRead(){
      this.emailsNotReadCounter = this.emails.filter(email => !email.isRead).length;
    },
    closeDetails(){
      this.selectedEmail = {};
    },
    deleteEmail(emailId){
      this.emails = this.emails.filter(email => email.id !== emailId);
      this.filter = {txt:'' , emailStatus: 'A'};
      this.closeDetails();
    },
    composeEmail(composedEmail){
      let email = Object.assign({}, composedEmail);
      email.id = ++this.lastId;
      email.preview = 'bla bla bla';
      email.date = new Date();
      this.emails.unshift(email);
      this.isComposeMode = false;
    }
  },
  components: {
      'email-list': EmailList,
      'email-details': EmailDetails,
      'email-compose': EmailCompose,
      'email-status': EmailStatus,
      'email-filter': EmailFilter
    },
    mounted(){
      this.emailsToShow = this.emails;
      this.showFirstEmail();
      this.countEmailsNotRead();
    },
    computed:{
      emailsToShow (){
       return this.emails.filter(email => {
        if(email.subject.toLowerCase().includes(this.filter.txt.toLowerCase()) ||
           email.from.toLowerCase().includes(this.filter.txt.toLowerCase()) ||
           email.to.toLowerCase().includes(this.filter.txt.toLowerCase()) ||
           email.content.toLowerCase().includes(this.filter.txt.toLowerCase())){
              if(this.filter.emailStatus === 'R' && email.isRead) return email;
              if(this.filter.emailStatus === 'U' && !email.isRead) return email;
              if(this.filter.emailStatus === 'A') return email;
           }
       }); 
      }
    }
}
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0;
    background: #e5e5e5;
    height: 100vh;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .email-box {
    display: flex;
    flex-direction: column;
  }
  
  .email-list-view {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  
  .delete-btn {
    background: whitesmoke;
    border: #333 1px solid;
    cursor: pointer;
    transition: all 0.7s ease;
  }
  
  .delete-btn:hover {
    color: #FFF;
    background: #333;
  }
  .modal-button{
    width: 33%;
    margin-bottom: 10px;
  }
</style>