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
      <label for="email">Check In Status:</label>
      <input type="checkbox" id="status" v-model:="status">
    </div>
    <input type="submit" id="save" value="Save" />

  </form>
</template>

<script>
import {eventBus} from '../main.js'
export default {
}
</script>

<style lang="css" scoped>
.formContainer {

}
</style>
