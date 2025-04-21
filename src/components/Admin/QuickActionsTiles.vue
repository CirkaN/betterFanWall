<template>
    <div class=" bg-gray-100 flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">

            <!-- Card 1 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <button @click="runAction('add_post')" class="hover:cursor-pointer"> <i class="fa-solid fa-plus"></i>
                    Add Post</button>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <button @click="runAction('analytics')" class="hover:cursor-pointer"> <i
                        class="fa-solid fa-chart-simple"></i> Analytics</button>

            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-2xl shadow-md p-6 text-center">
                <button @click="runAction('settings')" class="hover:cursor-pointer"> <i class="fa-solid fa-gear"></i>
                    Settings</button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

type ActionType = 'settings' | 'analytics' | 'add_post'
const runAction = (type: ActionType) => {
    if (type == 'analytics') {
        alert('analytics');
    }
    if (type == 'settings') {
        alert('settings')
    }
    if (type == 'add_post') {
        alert('add_post');
    }
} 
</script>