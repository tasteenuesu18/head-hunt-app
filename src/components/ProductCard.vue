<template>
    <v-card class="ma-4" outlined>
        <v-img :src="product.imagePath" alt="product.name" height="200" class="product-image"></v-img>
        <v-card-title>
            {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
            <p>価格: {{ formattedPrice }}</p>
            <p>発売日: {{ product.releaseDate }}</p>
        </v-card-subtitle>
    </v-card>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

// 親コンポーネントから受け取るプロップを定義
const props = defineProps({
    product: {
        type: Object as () => {
            name: string;
            imagePath: string;
            price: number;
            releaseDate: string;
            popularity: number;
            reviewCount: number;
        },
        required: true
    }
});

// 価格を日本円表記にフォーマット
const formattedPrice = computed(() => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(props.product.price);
});
</script>

<style scoped>
.product-image {
    object-fit: cover;
}
</style>
