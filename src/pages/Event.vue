<template>
    <section>
        <h1>Event Page</h1>
        <router-view :events="events"></router-view>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                events: [
                    {
                        "created": 1478090304000,
                        "duration": 9000000,
                        "id": "235292442",
                        "name": "Cassandra and Scylla Real Life Experience by Kenshoo & MyHeritage  ",
                        "status": "upcoming",
                        "time": 1482336000000,
                        "updated": 1479054296000,
                        "utc_offset": 7200000,
                        "waitlist_count": 0,
                        "yes_rsvp_count": 131,
                        "venue": {
                            "id": 4761372,
                            "name": "Kenshoo",
                            "lat": 32.106529235839844,
                            "lon": 34.83524703979492,
                            "repinned": false,
                            "address_1": "HaBarzel 6",
                            "city": "Tel Aviv-Yafo",
                            "country": "il",
                            "localized_country_name": "Israel"
                        },
                        "group": {
                            "created": 1456749346000,
                            "name": "Tech-Talk-Teach",
                            "id": 19641607,
                            "join_mode": "open",
                            "lat": 32.06999969482422,
                            "lon": 34.77000045776367,
                            "urlname": "Tech-Talk-Teach",
                            "who": "Members"
                        },
                        "link": "https://www.meetup.com/Tech-Talk-Teach/events/235292442/",
                        "manual_attendance_count": 0,
                        "description": "<p><b>Agenda: </b><br/>18:00 – 18:30- Gathering (food and drinks)<br/>18:30 – 19:15- Scylla and Cassandra at Kenshoo- Noam Hasson, Big Data Team Leader @ Kneshoo<br/>19:30-20:15- PeopleStore - blazing fast 2.5 billion profiles storage- Ran Peled, Chief Architect @MyHeritage</p> <p>\n\n<b>\"Scylla and Cassandra at Kenshoo\"</b></p> <p><b>Abstract: </b><br/>Kenshoo is the industry leader in digital marketing and has run Cassandra for quite some time now. The Kenshoo team was interested in Scylla not just due to performance but for ease of administration. It is important to be able to run all of the background operations a sophisticated database keeps under the hood. Kenshoo engineer Noam Hasson demonstrates the speed of compaction and repair of Scylla verse Cassandra. Eventually Noam shows that three Scylla VMs can handle the load of 40 physical Cassandra machines.</p> <p><b>Bio: </b><br/>Noam Hasson has over 12 years of web development experience, and is currently the in-house big data expert at Kenshoo, a global software company that is the sole leader in bid management software and social advertising platforms. Previously, Noam was a web developer with StartApp, a global monetization and advertising mobile network. Prior to that, Noam was a co-founder and CEO of SociaLayer.com, an Israel-based software startup focusing on cutting-edge solutions and web technologies. Earlier in his career, Noam was the CTO of Mekusharim, a leading provider of social networking media solutions.</p> <p><b>\"PeopleStore - blazing fast 2.5 billion profiles storage\"</b></p> <p><b>Abstract: </b><br/>MyHeritage is home to 82 million users with 2.5 billion rich personal profiles in their family trees, stored on complex and highly optimized MySQL infrastructure. As we started encountering scalability and performance issues, we have built a new data store, based on Cassandra, Mesos+Docker, and Hadoop, that is highly scalable and blazing fast. In this meetup we will share the architecture, design considerations and lessons learned. Among the complexities we will cover is the challenge to load the system while data is changing, keeping a MySQL source-of-truth and Cassandra in synch, errors handling and monitoring.</p> <p><b>Bio: </b><br/>Ran Peled is Chief Architect at MyHeritage, with over 30 years of software development experience, and expertise in large-scale Internet applications.</p> ",
                        "visibility": "public"
                    }
                ]    
            }
        },
        methods: {
        },
        components: {
           
        }
    }
</script>

<style scoped>

</style>