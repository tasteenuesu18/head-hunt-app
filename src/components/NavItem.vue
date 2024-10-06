<template>
    <v-list-item class="rounded-lg" link>
        <v-list-item-content class="d-flex align-center">
            <v-icon class="mx-2" :icon="icon" />
            <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';


defineProps<{
    icon: string;
    title: string;
}>();

</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>