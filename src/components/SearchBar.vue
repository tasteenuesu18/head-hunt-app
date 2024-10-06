<template>
    <v-text-field density="compact" hide-details label="あいまいけんさく" single-line variant="solo" v-model="searchQuery"
        @input="$emit('update:search', searchQuery)">
        <template #append-inner>
            <v-icon :icon="mdiMagnify" />
        </template>
    </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mdiMagnify } from '@mdi/js'

const searchQuery = ref('')
</script>

<style scoped>
/* 必要に応じてスタイルをここに追加 */
</style>