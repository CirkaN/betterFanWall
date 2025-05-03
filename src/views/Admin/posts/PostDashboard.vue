<template>
    <div class="p-10">
        <p class="text-3xl">Dashboard</p>
        <div class="float-end">
            <button type="button" @click="navigateToCreate"
                class="hover:cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add
                new</button>
        </div>
        <AllPostsDatatable />
    </div>
</template>


<script setup lang="ts">
import AllPostsDatatable from '@/components/Admin/Posts/AllPostsDatatable.vue';
import router from '@/router';

const navigateToCreate = () => {
    router.push({ name: 'add_post' })
}
</script>