<template>
    <v-navigation-drawer v-model="drawer" temporary width="400">
        <SearchBar @update:search="onSearchUpdate" />
        <NavItem class="py-6" :icon="productIcon" title="製品一覧" />
        <NavItem class="py-6" :icon="newsIcon" title="新着トピックス" />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import NavItem from '@/components/NavItem.vue';

const drawer = ref(false);
const productIcon = 'mdi-headphones';
const newsIcon = 'mdi-newspaper';

const onSearchUpdate = (query: string) => {
    console.log('Search query updated:', query);
};
</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>