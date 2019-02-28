<template>
    <div>
        <event-Details v-for="det in detail" :det="det" class=""></event-Details>
</div>
    </template>

<script>
import eventDetails from "./eventDetails.vue";
export default {
  name: 'detailss',
  components: {
    "event-Details": eventDetails,
    },
  data() {
      return {
          detail: [
              {
                description: 'im in tourist class ans want to upgrade to bussines class',
                email: 'jdshf@jfdksjlf.com',
                price: 300,
                tags: ['flight', 'seat', 'upgrade'],
                title: 'Want bussines class ticket in the flight',
                upgrade: false
              },
              {
                description: 'line 3 seat 4',
                email: 'jddsfsshf@jfdksjlf.com',
                price: 200,
                tags: ['show', 'omer-adam', 'fun', 'king', 'mizrahit', 'male-cesef', ''],
                title: 'Show of omer adam- where is all your female friens',
                upgrade: true
              }
          ]
      }
  }
    
  }

</script>