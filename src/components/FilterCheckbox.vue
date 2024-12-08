<template>
    <div>
        <h4>{{ title }}</h4>
        <v-checkbox hide-details='auto' density="compact" v-for="(option, index) in options" :key="index"
            :label="option.label" v-model="selectedValues[index]" @change="emitChanges"></v-checkbox>


    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    title: string;
    options: { label: string; option: any }[];
    selectedValues: boolean[];
}>();


const emits = defineEmits<{
    (e: 'update:selectedValues', value: boolean[]): void;
}>();

const emitChanges = () => {
    emits('update:selectedValues', [...props.selectedValues]);
};

</script>

<style scoped></style>