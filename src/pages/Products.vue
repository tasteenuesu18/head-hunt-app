<template>
    <v-row>
        <v-col cols="2">
            <SearchFilterLayout />
        </v-col>
        <v-col cols="10" class="d-flex justify-start">
            <!-- <v-btn density="compact" :icon="mdiArrowExpandRight" @click="drawer = !drawer"></v-btn> -->
            <ProductListLayout />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiArrowExpandRight } from '@mdi/js';
import SearchFilterLayout from '@/layouts/SearchFilterLayout.vue';
import ProductListLayout from '@/layouts/ProductListLayout.vue';

const drawer = ref(true);
</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>
