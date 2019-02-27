<template lang="html">
    <div>
      <p>Bookings List</p>
      <div class="booking" v-for="booking in bookings">
        <ul>
          <li>{{ booking.name }}</li>
          <li>{{ booking.email}}</li>
          <li><input type="checkbox" id="scales" name="status"
            checked>
            <label for="status" v-if="">{{ booking.status }}</label></li>
          </ul>
        </div>
      </div>
  </template>

  <script>
  import ListComponent from './ListComponent.vue';
  import {eventBus} from '../main.js';

  export default {
    name: 'bookings-list',
    props: ['bookings'],

    data() {
      return {
        selectedBookingIndex: 0
      }
    },
    methods: {
      handleClick() {
        eventBus.$emit('selected-booking', this.booking[this.selectedbookingIndex]);
      }
    },
    mounted() {
      fetch('http://localhost:3000/api/bookings')
      .then(res => res.json())
      .then(bookings => {
        this.bookings = bookings
      }),
      eventBus.$on('selected-booking', (booking) => {
        this.selectedBooking = booking;
      })
    }
  }
  </script>

  <style lang="css" scoped>
  .container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 400px);
    font-family: 'Noto Sans KR', sans-serif;
    margin: 10px;
  }
  </style>
