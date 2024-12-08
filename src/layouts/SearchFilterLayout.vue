<template>
    <v-form>
        <div>
            <FilterCheckbox title="機能フィルター" :options="featureOptions" v-model:selectedValues="selectedFeatures" />

        </div>
        <div>
            <FilterCheckbox title="価格フィルター" :options="priceOptions" v-model:selectedValues="selectedPriceRange" />
        </div>
        <div>
            <FilterCheckbox title="メーカーフィルター" :options="manufacturerOptions"
                v-model:selectedValues="selectedManufacturers" />
        </div>
        <v-btn color="primary" @click="applyFilters">検索</v-btn>
    </v-form>
</template>

<script setup lang="ts">
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import { ref, onMounted } from 'vue';

const featureOptions = ref<{ label: string; option: any; }[]>([]);
const priceOptions = ref<{ label: string; option: any; }[]>([]);
const manufacturerOptions = ref<{ label: string; option: any; }[]>([]);

// Checkbox選択状態格納用配列
const selectedFeatures = ref<boolean[]>([]);
const selectedPriceRange = ref<boolean[]>([]);
const selectedManufacturers = ref<boolean[]>([]);

const fetchMockData = async () => {
    try {
        // db.jsonにて用意したデータを取得する
        // {
        // "featureOptions",
        //  "priceOptions",
        //  "makerOptions"
        // }

        const response = await fetch('https://raw.githubusercontent.com/tasteenuesu18/head-hunt-app/main/db.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        featureOptions.value = data.featureOptions;
        priceOptions.value = data.priceOptions;
        manufacturerOptions.value = data.makerOptions;

        selectedFeatures.value = featureOptions.value.map(() => false); // false で初期化
        selectedPriceRange.value = priceOptions.value.map(() => false); // false で初期化
        selectedManufacturers.value = manufacturerOptions.value.map(() => false); // false で初期化

    } catch (error) {
        console.error('Error fetching mock data:', error);
    }
};

onMounted(() => {
    fetchMockData();
});

const applyFilters = () => {

};
</script>

<style scoped></style>