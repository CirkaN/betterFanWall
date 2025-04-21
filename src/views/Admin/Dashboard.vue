<script setup lang="ts">
import QuickActionsTiles from '@/components/Admin/QuickActionsTiles.vue';
import QuickDashboardTiles from '@/components/Admin/QuickDashboardTiles.vue';
import { ref } from 'vue';

const quickDashboardTilesData = ref({
    videos_count:10,
    view_count:10931241,
    sub_count:1231,
});
</script>

<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="pt-5">
            <QuickDashboardTiles :data="quickDashboardTilesData" />
        </div>
        <div class="pt-5">
            <p class="p-5 text-2xl">Actions:</p>
            <QuickActionsTiles />
        </div>
    </div>
</template>

