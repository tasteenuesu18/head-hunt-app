<template>
    <div class="tag-container">
        <v-chip v-for="(tag, index) in tags" :key="index" class="tag-chip" color="primary" outlined>
            {{ tag }}
        </v-chip>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// 親コンポーネントからタグリストを受け取る
const props = defineProps<{ tags: string[] }>();
</script>

<style scoped>
.tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-chip {
    cursor: pointer;
}
</style>
