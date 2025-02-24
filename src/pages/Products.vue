<template>
    <v-row>
        <v-col cols="2">
            <SearchFilterLayout />
        </v-col>
        <v-col cols="10" class="d-flex justify-start">
            <ProductListLayout />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import SearchFilterLayout from '@/layouts/SearchFilterLayout.vue';
import ProductListLayout from '@/layouts/ProductListLayout.vue';

</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>
