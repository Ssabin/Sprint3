<template>
  <section class="email-section">
    <nav class="app-nav">
      <router-link class="btn btn-add" to="/email/compose" exact>
        Add Email
      </router-link>
    </nav>
    <email-filter :emails="emails" @filterEmails="updateFilter"></email-filter>
    <email-list :filteredEmails="filteredEmails"></email-list>
    <email-status :totalEmailCount="emails.length" :unreadEmailCount="unreadEmailCount"></email-status>
  </section>
</template>

<script>
import EmailFilter from './EmailFilter.vue'
import EmailList from './EmailList.vue'
import EmailStatus from './EmailStatus.vue'

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
  methods:{
    loadEmails() {
      this.$http.get('email')
          .then(res => res.json())
          .then(emails => this.emails = emails);
      },
    updateFilter(filter) {
      this.filter = filter;
    }
  },
  components: {
      EmailFilter,
      EmailList,
      EmailStatus
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
      },
      unreadEmailCount() {
        return this.emails.reduce((acc, currEmail) => {
          return currEmail.isRead ? 0 : ++acc;
        }, 0);
      }
    },
    created() {
      this.loadEmails();
    }
}
</script>

<style scoped>

</style>