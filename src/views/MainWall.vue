<template>
    <div class="pt-1 p-10">
        <p class="text-3xl p-1">Najnovije:</p>
        <div>
            <!-- Video wall newest 3  -->
            <NewestVideoBox :threeVideos="latestThree" />
        </div>
        <p class="text-3xl p-1">Ostalo:</p>
        <!-- Video wall older desktop version -->
        <div class="grid grid-cols-4 gap-5">
            <RegularVideoBox v-for="(video, index) in olderVideos" :key="index" :video="video" />
        </div>
        <div class="flex justify-center p-5">
            <p>Load more..</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import NewestVideoBox from '@/components/NewestVideoBox.vue';
import RegularVideoBox from '@/components/RegularVideoBox.vue';
import { http } from '@/utils/http';
import { onMounted, ref } from 'vue';

const latestThree = ref([]);
const olderVideos = ref([]);

const loadVideos = () => {
    http().get('admin/videos').then((r) => {
        const allVideos = r.data.data;

        latestThree.value = allVideos.slice(0, 3);
        olderVideos.value = allVideos.slice(3);
        console.log(latestThree.value);
    });
}

onMounted(() => {
    loadVideos();
})

</script>