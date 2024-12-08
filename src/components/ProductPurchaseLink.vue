<template>
    <v-row class="ma-8">
        <v-col cols="6">
            <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="purchase_link_amazon || undefined"
                max-width="344" rel="noopener" :subtitle="purchase_link_amazon ? '購入リンクはこちら' : '取扱なし'" target="_blank"
                title="Amazon">
                <template #prepend>
                    <img src="@/assets/Image/amazon.svg" alt="Amazon icon" class="store-icon" />
                </template>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="purchase_link_rakuten || undefined"
                max-width="344" rel="noopener" :subtitle="purchase_link_rakuten ? '購入リンクはこちら' : '取扱なし'" target="_blank"
                title="楽天">
                <template #prepend>
                    <img src="@/assets/Image/rakuten.svg" alt="楽天 icon" class="store-icon" />
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    purchase_link_amazon: string | null,
    purchase_link_rakuten: string | null
}>();
</script>

<style scoped>
.purchase-link {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.store-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    width: 32px;
    height: 32px;
}
</style>
