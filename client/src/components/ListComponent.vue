<template lang="html">
  <!-- <option v-on:change="handleClick">{{ film.title }}</option> -->
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'list-component',
  props: ['booking'],
  methods: {
    handleClick(){
      eventBus.$emit('selected-booking', this.booking);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
