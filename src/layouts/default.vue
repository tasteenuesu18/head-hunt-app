<template>
  <v-app>
    <v-main>
      <AppHeaderLayout />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppHeaderLayout from '@/layouts/AppHeaderLayout.vue';


</script>
