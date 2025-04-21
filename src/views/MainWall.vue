<template>
    <div>
        <!-- Alert Info Box  -->
        <AlertBox :alertText=alertText></AlertBox>
    </div>
    <div class="p-10">
        <p class="font-bold text-3xl">Najnovije:</p>
        <div>
            <!-- Video wall newest 3  -->
            <NewestVideoBox />
        </div>
        <p class="font-bold text-3xl">Ostalo:</p>
        <!-- Video wall older desktop version -->
        <div class="grid grid-cols-4 gap-5">
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
            <RegularVideoBox />
        </div>
    </div>
</template>

<script setup lang="ts">
import AlertBox from '@/components/AlertBox.vue';
import NewestVideoBox from '@/components/NewestVideoBox.vue';
import RegularVideoBox from '@/components/RegularVideoBox.vue';
const alertText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit odit labore voluptas eum cupiditate fugit deleniti numquam itaque quam similique, voluptate dolores, culpa qui expedita placeat? Dolore, consectetur! Ex, voluptas."
</script>