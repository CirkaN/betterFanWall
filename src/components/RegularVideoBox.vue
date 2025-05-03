<template>
    <div @click="navigateToPost(video.id)" class="shadow-lg">
        <img class="object-contain hover:cursor-pointer hover:opacity-70"
            src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png" alt="">
        <p class="  hover:cursor-pointer text-center text-black text-2xl break-words">{{ video.title }}</p>
        <div class="flex justify-between m-2">
            <p class="p-1"> <i class="fa-solid fa-calendar pr-2"></i>{{ video.created_human }}</p>
            <p> <i class="fa-solid fa-comment"></i> : 2</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';

const props = defineProps(['video']);
const navigateToPost = (id:string) => {
    router.push({ name: 'show_video', params: { id: id } })
}
</script>