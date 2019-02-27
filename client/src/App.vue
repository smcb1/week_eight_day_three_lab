<template>
  <div id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <bookings-form></bookings-form>
      <bookings-list></bookings-list>
    </div>
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm.vue';
import BookingsList from './components/BookingsList.vue'
import {eventBus} from './main.js'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Hotel Bookings',
      bookings: [],
      selectedBooking: 0,
      selectedBookingIndex: 0
    }
  },
  components: {
    BookingsForm,
    BookingsList
  },
}
</script>

<style>
#app {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.container {
  border-bottom-color: #ddd;
  background-color: #ddd;
}

h1, h2 {
  font-weight: normal;
  margin: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
