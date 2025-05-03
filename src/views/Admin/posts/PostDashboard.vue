<template>
    <div class="p-10">
        <p class="text-3xl">Dashboard</p>

        <div>
            <QuickDashboardTiles :data="quickDashboardTilesData" />
        </div>
        <div class="flex justify-end">
            <button type="button" @click="navigateToCreate"
                class="hover:cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add
                new</button>
        </div>
        <AllPostsDatatable />
    </div>
</template>


<script setup lang="ts">
import AllPostsDatatable from '@/components/Admin/Posts/AllPostsDatatable.vue';
import QuickDashboardTiles from '@/components/Admin/QuickDashboardTiles.vue';
import router from '@/router';
import { ref } from 'vue';

const navigateToCreate = () => {
    router.push({ name: 'add_post' })
}

const quickDashboardTilesData = ref({
    videos_count: 10,
    view_count: 10931241,
    like_count: 1231,
});
</script>