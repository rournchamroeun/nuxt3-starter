<script setup lang="ts">

</script>

<template>
  <v-btn size="small">Small Button</v-btn>
  <v-btn color="primary" class="text-sm hover-text-red bg-primary bg-sec">
    Activator slot
  </v-btn>
  <button class="pa-3 bg-secondary font-bold py-2 px-4 rounded">
    Button
  </button>
  <div class="flex bg-primary-test !hover:text-red p-8 pa-3">
    pk
  </div>
  <v-btn prepend-icon="$vuetify" stacked>
    Button
  </v-btn>
</template>

<style scoped>

</style>