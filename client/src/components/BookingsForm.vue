<template lang="html">
  <form id="bookings-form" v-on:submit:="handleSubmit">
    <h3>Add a new booking:</h3>
    <div class="formContainer">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model:="name">
    </div>
    <div class="formContainer">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model:="email">
    </div>
    <div class="formContainer">
      <label for="email">Is checked in?:</label>
      <input type="checkbox" id="status" v-model:="status">
    </div>
    <input type="submit" id="save" value="Save" />
  </form>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'BookingsForm',
  data() {
    return {
      name: '',
      email: '',
      status: null
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const formData = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json"}
      })
      .then(response => {
        eventBus.$emit('refresh-data');
      });
    }
  }
}
</script>

<style lang="css" scoped>
formContainer {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}
label {
	min-width: 100px;
	display: inline-block;
}
.formWrap {
	margin-bottom: 10px;
}
</style>
