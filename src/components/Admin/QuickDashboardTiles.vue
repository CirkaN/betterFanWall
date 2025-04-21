<template>
    <div class=" bg-gray-100 flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">

            <!-- Card 1 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <h2 class="text-xl font-semibold text-gray-700">Number of Videos</h2>
                <p class="mt-2 text-3xl font-bold text-blue-600">{{ props.data.videos_count }}</p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <h2 class="text-xl font-semibold text-gray-700">Number of Views</h2>
                <p class="mt-2 text-3xl font-bold text-green-600">{{ props.data.view_count }}</p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <h2 class="text-xl font-semibold text-gray-700">Number of Subscribers</h2>
                <p class="mt-2 text-3xl font-bold text-red-600">{{ props.data.sub_count }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['data']);
</script>