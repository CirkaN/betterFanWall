<template>
    <div class="pl-1 bg-gray-800 text-white h-full">
        <!-- Youtube embeed player -->
        <div>
            <div class="w-full h-full">
                <iframe class="aspect-video w-full h-[700px]" :src="videoObject?.url" title=""
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        <div class="mt-5 flex justify-around">
            <div>
                <p class="text-bold text-3xl">{{ videoObject?.title }}</p>
                <div class="flex space-x-5 m-2">
                    <p> <i class="fa-solid fa-calendar"></i> {{ videoObject?.created_human }}</p>
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
                <!-- <CommentBox /> -->
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import CommentBox from '@/components/CommentBox.vue';

import NewestList from '@/components/NewestList.vue';
import router from '@/router';
import { http } from '@/utils/http';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const routerz = useRoute();
const paramId = routerz.params.id


const videoObject = ref({});

const fetchVideoObject = ()=>{
    http().get(`admin/videos/${paramId}`).then((r)=>{
        videoObject.value = r.data.data;
    })
}
onMounted(()=>{
    fetchVideoObject();
})
</script>