<template>
    <div>
        <!-- メイン画像のカルーセル -->
        <v-carousel v-model="currentSlide" hide-delimiters height="400">
            <v-carousel-item v-for="(image, index) in images" :key="index">
                <v-img :src="image" class="main-image"></v-img>
            </v-carousel-item>
        </v-carousel>

        <!-- サムネイル画像のリスト -->
        <div class="thumbs-container">
            <div class="thumbs-wrapper">
                <v-img v-for="(image, index) in images" :key="index" :src="image" class="thumbnail"
                    :class="{ active: index === currentSlide }" @click="selectSlide(index)"></v-img>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps } from 'vue';

// 親コンポーネントから画像リストを受け取る
const props = defineProps<{ images: string[] }>();

// 現在のスライドのインデックス
const currentSlide = ref(0);
const images = ref(props.images);

// 親から渡された画像リストの変更を監視して反映
watch(() => props.images, (newImages) => {
    images.value = newImages;
});

// スライドを選択する関数
const selectSlide = (index: number) => {
    currentSlide.value = index;
};
</script>

<style scoped>
.main-image {
    height: 100%;
    object-fit: cover;
}

.thumbs-container {
    margin-top: 10px;
    overflow-x: auto;
    display: flex;
}

.thumbs-wrapper {
    display: flex;
    flex-wrap: nowrap;
}

.thumbnail {
    width: 60px;
    height: 60px;
    margin: 5px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: opacity 0.3s ease;
}

.thumbnail.active {
    border: 2px solid #1976d2;
    opacity: 1;
}

.thumbnail:hover {
    opacity: 1;
}


.thumbs-container::-webkit-scrollbar {
    height: 8px;
}

.thumbs-container::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.thumbs-container::-webkit-scrollbar-thumb {
    background: #1976d2;
    border-radius: 4px;
}

.thumbs-container::-webkit-scrollbar-thumb:hover {
    background: #024180;
}
</style>
