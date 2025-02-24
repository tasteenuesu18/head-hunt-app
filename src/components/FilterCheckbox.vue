<template>
    <div class="filter-section">
        <div class="options">
            <div v-for="(option, index) in options" :key="index" class="d-flex align-center gap-2">
                <div class="flex-grow-1">
                    <v-checkbox v-model="localSelectedValues[index]" :label="option.label" hide-details
                        density="compact" />
                </div>
                <div class="d-flex justify-center align-center" style="width: 24px" v-if="option.discription">
                    <v-tooltip location="right">
                        <template v-slot:activator="{ props }">
                            <v-icon v-bind="props" size="small" color="grey">{{ mdiHelpCircleOutline }}</v-icon>
                        </template>
                        {{ option.discription }}
                    </v-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { mdiHelpCircleOutline } from '@mdi/js';

interface Option {
    label: string;
    featurecode?: string;
    discription?: string;
    showInLightMode?: boolean;
    minPrice?: number;
    maxPrice?: number;
    makercode?: string;
}

const props = defineProps<{
    options: Option[];
    selectedValues: boolean[];
}>();

const localSelectedValues = ref(props.selectedValues);
</script>