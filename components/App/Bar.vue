<script setup lang="ts">
import LogoImg from "~/assets/images/logo.png";
</script>

<template>
  <div>
    <v-app-bar :elevation="2">
      <template #prepend>
        <div>
          <router-link to="/">
            <img :src="LogoImg" alt="" height="48" width="48"/>
          </router-link>
        </div>
      </template>
      <template #append>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<style scoped>

</style>
