<template>
    <v-form>
        <FilterCheckbox title="機能フィルター" :options="featureOptions" v-model:selectedValues="selectedFeatures" />

        <FilterCheckbox title="価格フィルター" :options="priceOptions" v-model:selectedValues="selectedPriceRange" />

        <FilterCheckbox title="メーカー" :options="manufacturerOptions" v-model:selectedValues="selectedManufacturers" />

        <v-btn color="primary" @click="applyFilters">検索</v-btn>
    </v-form>
</template>

<script setup lang="ts">
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import { ref, onMounted } from 'vue';

const selectedFeatures = ref<string[]>([]);
const selectedManufacturers = ref<string[]>([]);
const selectedPriceRange = ref<any[]>([]);

const featureOptions = ref<{ label: string; value: any }[]>([]);
const priceOptions = ref<{ label: string; value: any }[]>([]);
const manufacturerOptions = ref<{ label: string; value: any }[]>([]);

const fetchMockData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/tasteenuesu18/head-hunt-app/main/db.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        featureOptions.value = data.featureOptions;
        priceOptions.value = data.priceOptions;
        manufacturerOptions.value = data.manufacturerOptions;
    } catch (error) {
        console.error('Error fetching mock data:', error);
    }
};

onMounted(() => {
    fetchMockData();
});

const applyFilters = () => {
    console.log('Filters applied:', {
        selectedFeatures: selectedFeatures.value,
        selectedManufacturers: selectedManufacturers.value,
        selectedPriceRange: selectedPriceRange.value,
    });
};
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>