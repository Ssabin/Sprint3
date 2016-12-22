<template>
  <section class="email-section">
    <h1>Email Center Section</h1>
    <email-filter :emails="emails" @filterEmails="updateFilter"></email-filter>
    <email-list :filteredEmails="filteredEmails"></email-list>
    <!--
    <div class="email-box box">
      <button @click="isComposeMode = true" class="button is-primary modal-button">Compose Email</button>
      <div ref="composeEmailModal" class="modal" :class="{'is-active': isComposeMode}">
        <div class="modal-background"></div>
        <div class="modal-content">
          <email-compose :emailComposer="'SaharSabin14@gmail.com'" v-show="isComposeMode" @emitComposedEmail="composeEmail"></email-compose>          
        </div>
        <button @click="isComposeMode = false" class="modal-close">X</button>
      </div>
      <div class="email-list-view">
        <email-list :emails="filteredEmails @showEmailDetails="showEmailDetails">
          <email-filter :emails="emails" @filterEmails="filter = $event"></email-filter>
        </email-list>
        <email-details :email="selectedEmail" v-show="selectedEmail.id" @closeDetails="closeDetails" @deleteEmail="deleteEmail"></email-details>
      </div>
      <email-status v-show="isComposeMode" :emailsNotReadCounter="emailsNotReadCounter"></email-status>
    </div>-->
  </section>
</template>

<script>
import EmailFilter from './EmailFilter.vue'
import EmailList from './EmailList.vue'
// import EmailCompose from './email-compose.vue'

// import EmailDetails from './email-details.vue'
// import EmailStatus from './email-status.vue'

export default {
  data () {
            return {
                emails: [],
                filter: {
                    txt: '',
                    emailStatus: 'A'
                }           
            }
        },
  // data () {
  //   return {
  //     filter: {txt:'' , emailStatus: 'A'},
  //     lastId: 4 ,
  //     filteredEmails [],
  //     emailsNotReadCounter: 0 ,
  //     isComposeMode: false,
  //     selectedEmail:{}
  //   }
  // },
  methods:{
    loadEmails() {
      this.$http.get('email')
          .then(res => res.json())
          .then(emails => this.emails = emails);
      },
    updateFilter(filter) {
      this.filter = filter;
    }
    // showEmailDetails(emailId) {
    //   this.selectedEmail = this.emails.find(email => emailId === email.id);
    //   if(!this.selectedEmail.isRead){
    //     this.selectedEmail.isRead = true;
    //     this.emailsNotReadCounter--;
    //   }
    // },
    // showFirstEmail(){
    //   this.selectedEmail = this.emails[0];
    //   this.emails[0].isRead = true;
    // },
    // countEmailsNotRead(){
    //   this.emailsNotReadCounter = this.emails.filter(email => !email.isRead).length;
    // },
    // closeDetails(){
    //   this.selectedEmail = {};
    // },
    // deleteEmail(emailId){
    //   this.emails = this.emails.filter(email => email.id !== emailId);
    //   this.filter = {txt:'' , emailStatus: 'A'};
    //   this.closeDetails();
    // },
    // composeEmail(composedEmail){
    //   let email = Object.assign({}, composedEmail);
    //   email.id = ++this.lastId;
    //   email.preview = 'bla bla bla';
    //   email.date = new Date();
    //   this.emails.unshift(email);
    //   this.isComposeMode = false;
    // }
  },
  components: {
      // 'email-list': EmailList,
      EmailFilter,
      EmailList
      // 'email-compose': EmailCompose,
      // 'email-details': EmailDetails,
      // 'email-status': EmailStatus,
    },
    mounted(){
      // this.filteredEmails= this.emails;
      // this.showFirstEmail();
      // this.countEmailsNotRead();
    },
    computed:{
      filteredEmails(){
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
    },
    created() {
      this.loadEmails();
    }
}
</script>

<style scoped>
  .email-section {
    border: 3px solid hotpink;
  }
  /*body {
    margin: 0;
    padding: 0;
    background: #e5e5e5;
    height: 100vh;
  }*/
  /*#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }*/
  /*.email-box {
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
  }*/
</style>