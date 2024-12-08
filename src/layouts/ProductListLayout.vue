<template>
    <v-data-table :headers="headers" :items="products" :hover="true">
        <template v-slot:[`item.name`]="{ item }">
            <a href="#" @click.prevent="handleRowClick(item)">
                {{ item.name }}
            </a>
        </template>
        <template v-slot:item.imagePath="{ value }">
            <v-img :src=value></v-img>
        </template>
        <template v-slot:item.price="{ value }">
            {{ formatPrice(value) }}
        </template>
        <template v-slot:item.releaseDate="{ value }">
            {{ formatDate(value) }}
        </template>

    </v-data-table>
    <ProductDialogLayout :productId="selectedProductId" :productData="selectedProductData"
        v-model:modelValue="dialog" />

</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import ProductDialogLayout from '@/layouts/ProductDialogLayout.vue'
// import Dialog from '@/components/dialogcomponent.vue'


// 商品データの型定義
interface Product {
    id: number;
    name: string;
    imagePath: string;
    price: number;
    releaseDate: string;
    reviewCount: number;
}

// ヘッダーの型定義
interface Header {
    title: string;
    key: string;
}

// ヘッダーの準備
const headers = ref<Header[]>([
    { title: '商品名', key: 'name' },
    { title: '', key: 'imagePath' },
    { title: '価格', key: 'price' },
    { title: '発売日', key: 'releaseDate' },
    { title: 'レビュー数', key: 'reviewCount' }
]);

// 商品データ配列
const products = ref<Product[]>([]);
// ダイアログと選択された商品
const dialog = ref(false);
const selectedProductId = ref<number | null>(null);
const selectedProductData = ref<any | null>(null);

// APIよりデータ取得
const fetchProductListData = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/tasteenuesu18/head-hunt-app/main/db.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        products.value = data.products;
        console.log(products.value)
    } catch (error) {
        console.error('Error fetching mock data:', error);
    }
};

const fetchProductData = async (productId: number) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/tasteenuesu18/head-hunt-app/main/db.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        selectedProductData.value = data.product.find((item: any) => item.id === productId);
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
};

onMounted(() => {
    fetchProductListData();
});

// 価格を日本円表記にフォーマット
function formatPrice(price: number): string {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
}

// 日付をyyyy/mm/dd形式にフォーマット
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}

const handleRowClick = async (item: any) => {
    selectedProductId.value = item.id;
    await fetchProductData(item.id);
    dialog.value = !dialog.value;
};


</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
