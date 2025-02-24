<template>

  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3">
            <SearchFilterLayout />
          </v-col>
          <v-col cols="9" class="d-flex justify-start">
            <ProductListLayout />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SearchFilterLayout from '@/layouts/SearchFilterLayout.vue';
import ProductListLayout from '@/layouts/ProductListLayout.vue';

</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>