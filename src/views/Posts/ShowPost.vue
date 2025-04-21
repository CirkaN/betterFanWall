<template>

    <div class="pl-1">
        <!-- Youtube embeed player -->
        <div>
            <div class="w-full h-full">
                <!-- <iframe class="aspect-video w-full h-[700px]" src="https://www.youtube.com/embed/M66U_DuMCS8" title=""
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe> -->
            </div>
        </div>
        <div class="mt-5 flex justify-around">
            <div>
                <p class="text-bold text-3xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, iure!</p>
                <div class="flex space-x-5 m-2">
                    <p> <i class="fa-solid fa-calendar"></i> Pre 2 sata</p>
                    <p> <i class="fa-solid fa-comment"></i> : 2</p>
                </div>
            </div>
            <div>
                <NewestList />
            </div>

        </div>
        <!-- Comments Box -->
        <div class="mt-5">
            <div>
                <CommentBox />
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import CommentBox from '@/components/CommentBox.vue';
import NewestList from '@/components/NewestList.vue';

</script>