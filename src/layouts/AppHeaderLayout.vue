<template>
    <v-app-bar class="border-xs" color="secondary" density="default" flat scroll-behavior="hide">
        <!-- モバイル用ハンバーガアイコンここから -->
        <!-- <v-app-bar-nav-icon class="d-md-none" @click.stop="drawer = !drawer" /> -->
        <!-- モバイル用ハンバーガアイコンここまで -->

        <v-app-bar-title class="text-center">
            <router-link to="/" text-h6
                style="text-decoration: none; color: inherit; letter-spacing: 12px;">HeadHunt</router-link>
            <v-icon>{{ mdiHeadphones }}</v-icon>
        </v-app-bar-title>

        <div class="d-flex align-center justify-center mx-4">
            <!-- モード切り替えボタン -->
            <div class="text-caption ma-1">m o d e</div>
            <!-- ヘルプアイコンとツールチップ -->
            <v-tooltip location="bottom" :open-on-click="$vuetify.display.mobile"
                :open-on-hover="!$vuetify.display.mobile">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" :icon="mdiHelpCircleOutline" variant="text" density="compact" size="small"
                        class="mr-1"></v-btn>
                </template>
                <v-card variant="outlined" class="">
                    <v-card-title class="text-subtitle-1">モード説明</v-card-title>
                    <v-card-text>
                        <div><strong>ライトモード：</strong> プログラミング初心者向けの基本的な機能に特化したモード</div>
                        <div class="mt-2"><strong>マニアモード：</strong> 上級者向けの高度な機能がすべて利用可能なモード</div>
                    </v-card-text>
                </v-card>
            </v-tooltip>

            <v-card variant="outlined" class="mx-auto px-2">
                <v-switch v-model="selectedMode" :true-value="'mania'" :false-value="'light'" hide-details
                    density="compact" inset>
                    <template v-slot:prepend>
                        <v-icon size="small">{{ mdiSchool }}</v-icon>
                        <span class="ml-2 d-none d-sm-inline text-caption">ライト</span>
                    </template>
                    <template v-slot:append>
                        <v-icon size="small">{{ mdiCodeTags }}</v-icon>
                        <span class="ml-2 d-none d-sm-inline text-caption">マニア</span>
                    </template>
                </v-switch>
            </v-card>

        </div>

    </v-app-bar>

    <MobileNavDrawerLayout />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { mdiHeadphones, mdiSchool, mdiCodeTags, mdiHelpCircleOutline } from '@mdi/js';
import MobileNavDrawerLayout from '@/layouts/MobileNavDrawerLayout.vue';
import { useModeStore } from '@/stores/index';
import { storeToRefs } from 'pinia';

const modeStore = useModeStore();
const { mode } = storeToRefs(modeStore);

// const drawer = ref(false);
const selectedMode = computed({
    get: () => mode.value,
    set: (newValue) => modeStore.setMode(newValue)
});

</script>

<style scoped>
.v-tooltip .v-card {
    max-width: 300px;
}
</style>