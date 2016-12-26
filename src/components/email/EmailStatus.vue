<template>
    <section>

        <div class="progress">
            <div class="progress-bar" role="progressbar"  v-bind:style="{ width: progressBarWidth }">
                <p>unread emails: {{unreadEmailCount}}/{{totalEmailCount}}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default{
        props:{
            totalEmailCount: {
                required: true,
                type: Number
            },
            unreadEmailCount: {
                required: true,
                type: Number 
            }
        },
        computed: {
            progressBarWidth() {
                return this.unreadEmailCount / this.totalEmailCount * 100 + '%'
            }
        },
        data(){
            return {
            }
        }
        // methods:{
            
        // }
    }
</script>

<style scoped>
    .progress {
        margin: 10px 0;
        height: 30px;
    }

    .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #D23F31;
    }

    .progress-bar > p {
        margin: 0;
    }
</style>