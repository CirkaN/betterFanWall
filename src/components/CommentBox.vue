<script setup lang="ts">
import Comment from './Comment.vue';

</script>

<template>

    <div class="bg-gray-800 text-white">
        <div class="bg-gray-500 p-3">
            <div class="flex justify-between">
                <p class="text-2xl">Comments (5):</p>
                <div class="text-2xl">
                    <select>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="pt-10">
            <Comment />
        </div>
    </div>
</template>