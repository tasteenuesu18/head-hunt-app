<template>
    <v-app-bar class="border-xs" color="grey-darken-1" density="comfortable" flat scroll-behavior="hide">
        <!-- モバイル用ハンバーガアイコンここから -->
        <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" />
        <!-- モバイル用ハンバーガアイコンここまで -->

        <v-app-bar-title class="pr-12">
            <router-link to="/" style="text-decoration: none; color: inherit;">HeadHunt</router-link>
        </v-app-bar-title>

        <v-row class="d-none d-md-flex justify-end align-center">
            <v-col cols="5">
                <SearchBar @update:search="onSearchUpdate" />
            </v-col>
            <v-col cols="auto" justify="center">
                <NavItem :icon="mdiHeadphones" title="製品一覧" url="/Products" />

            </v-col>
            <v-col cols="auto">
                <NavItem :icon="mdiNewBox" title="新着トピックス" url="/Topics" />
            </v-col>
        </v-row>
    </v-app-bar>

    <MobileNavDrawerLayout />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { mdiHeadphones, mdiNewBox } from '@mdi/js';
import SearchBar from '@/components/SearchBar.vue';
import NavItem from '@/components/NavItem.vue';
import MobileNavDrawerLayout from '@/layouts/MobileNavDrawerLayout.vue';

const drawer = ref(false);

const onSearchUpdate = (query: string) => {
    console.log('Search query updated:', query);
};
</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>