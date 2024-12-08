<template>
    <v-dialog v-model="dialog" max-width="90%">
        <v-card class="scrollable-dialog">
            <v-card-title class="sticky-header">
                <v-toolbar flat class="no-background">
                    <v-toolbar-title>{{ product?.name }}</v-toolbar-title>
                    <!-- <v-spacer></v-spacer> -->
                    <v-btn :icon="mdiClose" @click="dialog = false">

                    </v-btn>
                </v-toolbar>
            </v-card-title>
            <v-card-text>
                <ProductCarousel v-if="product?.images && product.images.length > 0" :images="product.images" />
                <p>価格: {{ formatPrice(product?.price) }}</p>
                <p>説明: {{ product?.description }}</p>
                <ProductTag v-if="product?.tags && product.tags.length > 0" :tags="product.tags" />
                <ProductPurchaseLink :purchase_link_amazon="product.purchase_link_amazon"
                    :purchase_link_rakuten="product.purchase_link_rakuten" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps, defineEmits, defineModel } from 'vue';
import { mdiClose } from '@mdi/js';
import ProductCarousel from '@/components/ProductCarousel.vue';
import ProductTag from '@/components/ProductTag.vue';
import ProductPurchaseLink from '@/components/ProductPurchaseLink.vue';

const props = defineProps<{ productId: number | null, productData: any | null }>();
const dialog = defineModel<boolean>();
const product = ref(props.productData);

watch(() => props.productData, (newValue) => {
    product.value = newValue;
    console.log(product.value)
});

// 価格を日本円表記にフォーマット
function formatPrice(price: number | undefined): string {
    if (price === undefined) return '';
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(price);
}
</script>

<style scoped>
.scrollable-dialog {
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 12px;
}

.scrollable-dialog::-webkit-scrollbar {
    width: 12px;
}

.scrollable-dialog::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
}

.scrollable-dialog::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
}

.no-background {
    background-color: transparent !important;
}

.v-dialog>.v-overlay__content>.v-card {
    border-radius: 12px;
}
</style>
