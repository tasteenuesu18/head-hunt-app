<template>
    <v-navigation-drawer v-model="drawer" temporary width="400">
        <SearchBar @update:search="onSearchUpdate" />
        <NavItem class="py-6" :icon="mdiHeadphones" title="製品一覧" url="/Products" />
        <NavItem class="py-6" :icon="mdiNewBox" title="新着トピックス" url="/Topics" />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import NavItem from '@/components/NavItem.vue';
import { mdiHeadphones, mdiNewBox } from '@mdi/js';

const drawer = ref(false);


const onSearchUpdate = (query: string) => {
    console.log('Search query updated:', query);
};
</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>