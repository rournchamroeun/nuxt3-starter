<script setup lang="ts">

</script>

<template>
  <v-btn size="small">Small Button</v-btn>
  <v-btn color="primary" class="text-sm hover-text-red bg-primary-100">
    Activator slot
  </v-btn>
  <button class="bg-primary font-bold py-2 px-4 rounded">
    Button
  </button>
  <div class="flex bg-primary !hover:text-red">
    pk
  </div>
  <v-btn prepend-icon="$vuetify" stacked>
    Button
  </v-btn>
</template>

<style scoped>

</style>