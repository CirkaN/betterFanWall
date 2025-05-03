<template>
    <div>
        <div class="p-2">
            <button @click="goBack" class="hover:cursor-pointer">Go back</button>
            <br>
            Add post:
            <div>
                <form @submit.prevent="savePost">

                    <div class="mb-5">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Title:</label>
                        <input v-model="postDTO.title" type="text" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Title" required />
                    </div>
                    <div class="mb-5">
                        <label for="link" class="block mb-2 text-sm font-medium text-gray-900 ">Link:</label>
                        <input v-model="postDTO.url" type="text" id="link"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Link" required />
                    </div>
                    <div>
                        <label class="inline-flex items-center mb-5 cursor-pointer">
                            <input v-model="postDTO.enable_comments" type="checkbox" class="sr-only peer">
                            <div
                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-blue-600 ">
                            </div>
                            <span class="ms-3 text-sm font-medium text-gray-900 ">Enable comments</span>
                        </label>
                    </div>
                    <div>
                        <button type="button"
                            class="float-right hover:cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Save</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Common/Sidebar.vue';
import router from '@/router';
import { ref } from 'vue';

const postDTO = ref({
    title: "",
    url: "",
    enable_comments: true,
});

const savePost = () => {
    alert('sendali smo');
}
const goBack = () => {
    router.go(-1);
}
</script>