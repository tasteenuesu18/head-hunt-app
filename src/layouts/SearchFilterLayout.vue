<template>
    <v-form>
        <div class="filter-section">
            <!-- ヘッダー部分 -->
            <div class="d-flex align-center mb-4">
                <v-icon>{{ mdiFilter }}</v-icon>
                <span class="text-h6 ml-2">検索フィルター</span>
            </div>

            <!-- 選択されたフィルターのタグ表示 -->
            <div v-if="hasSelectedFilters" class="bg-grey-lighten-3 pa-3 rounded mb-4">
                <span class="text-grey text-body-2 d-block mb-2">フィルター中</span>
                <v-chip v-for="feature in selectedFeatureTags" :key="feature.label" closable class="ma-1"
                    @click:close="removeFeatureFilter(feature.index)">
                    {{ feature.label }}
                </v-chip>
            </div>

            <!-- フィルターグループ -->
            <div class="mb-6">
                <div class="d-flex align-center">
                    <span class="font-weight-medium mb-2 d-inline-block">機能</span>
                </div>
                <FilterCheckbox :options="filteredFeatureOptions" v-model:selectedValues="selectedFeatures" />
            </div>

            <div class="mb-6">
                <span class="font-weight-medium mb-2 d-inline-block">価格</span>
                <FilterCheckbox :options="priceOptions" v-model:selectedValues="selectedPriceRange" />
            </div>

            <div class="mb-6">
                <span class="font-weight-medium mb-2 d-inline-block">メーカー</span>
                <FilterCheckbox :options="manufacturerOptions" v-model:selectedValues="selectedManufacturers" />
            </div>
        </div>
        <v-btn color="primary" @click="applyFilters">検索</v-btn>
    </v-form>
</template>

<script setup lang="ts">
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import { ref, onMounted, computed } from 'vue';
import { useModeStore } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { mdiFilter } from '@mdi/js';

const modeStore = useModeStore();
const { mode } = storeToRefs(modeStore);

const featureOptions = ref<{ label: string; featurecode: string; discription: string; showInLightMode: boolean; }[]>([]);
const priceOptions = ref<{ label: string; minPrice: number; maxPrice: number; }[]>([]);
const manufacturerOptions = ref<{ label: string; makercode: string; discription: string; }[]>([]);


// モードに応じてフィルタリングされた機能オプション
const filteredFeatureOptions = computed(() => {
    if (mode.value === 'mania') {
        return featureOptions.value;
    }
    return featureOptions.value.filter(option => option.showInLightMode);
});

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

// 選択されているフィルターの有無を確認
const hasSelectedFilters = computed(() => {
    return selectedFeatures.value.some(value => value) ||
        selectedPriceRange.value.some(value => value) ||
        selectedManufacturers.value.some(value => value);
});

// 選択された機能フィルターをタグとして表示
const selectedFeatureTags = computed(() => {
    return selectedFeatures.value
        .map((isSelected, index) => ({
            isSelected,
            label: featureOptions.value[index].label,
            index
        }))
        .filter(feature => feature.isSelected);
});

// フィルタータグを削除する関数
const removeFeatureFilter = (index: number) => {
    selectedFeatures.value[index] = false;
};
</script>