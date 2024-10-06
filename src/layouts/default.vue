<template>
  <v-app>
    <v-main>
      <AppHeaderLayout />
      <MobileNavDrawerLayout />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppHeaderLayout from '@/layouts/AppHeaderLayout.vue';
import MobileNavDrawerLayout from '@/layouts/MobileNavDrawerLayout.vue';

</script>
