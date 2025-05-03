<template>
    <div>

        <vue3-datatable :loading="spinnerActive" :rows="rows" :columns="cols">
            <template #id="data">
                <strong>#{{ data.value.id }}</strong>
            </template>

            <template #actions="data">
                <DropdownMenu :actions="[
                    { label: 'Show', handler: () => navigateView(data.value.id) },
                    { label: 'Delete', handler: () => navigateView(data.value.id) },
                ]" />
            </template>
        </vue3-datatable>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Vue3Datatable from "@bhplugin/vue3-datatable";
import "@bhplugin/vue3-datatable/dist/style.css";
import DropdownMenu from "@/components/Common/DropdownMenu.vue";


const spinnerActive = ref(false);

const cols = ref([
    { field: "id", title: "ID", width: "90px", filter: false },
    { field: "title", title: "Title" },
    { field: "url", title: "Url" },
    { field: "comments_enabled", title: "Comments Enabled" },
    { field: 'actions', title: 'Actions' },

]);
const navigateView = (a) => {
    alert(a);
}
const rows = ref([
    {
        id: 1,
        title: "Leanne Graham",
        url: "https://youtube.com/watch/sdvb412#!",
        comments_enabled: 1,
        phone: "1-770-736-8031 x56442",
    },
    {
        id: 1,
        title: "Leanne Graham",
        url: "https://youtube.com/watch/sdvb412#!",
        comments_enabled: 1,
        phone: "1-770-736-8031 x56442",
    },
    {
        id: 1,
        title: "Leanne Graham",
        url: "https://youtube.com/watch/sdvb412#!",
        comments_enabled: 1,
        phone: "1-770-736-8031 x56442",
    },
    {
        id: 1,
        title: "Leanne Graham",
        url: "https://youtube.com/watch/sdvb412#!",
        comments_enabled: 1,
        phone: "1-770-736-8031 x56442",
    },

]);
</script>