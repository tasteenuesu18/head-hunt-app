<template>
    <div class="filter-container">
        <h3>{{ title }}</h3>
        <div class="checkbox-container">
            <v-checkbox v-for="(option, index) in options" :key="index" label="{{ option.label }}" :value="option.value"
                v-model="selectedValues"></v-checkbox>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    title: string;
    options: { label: string; value: any }[];
    selectedValues: any[];
}>();
</script>

<style scoped></style>