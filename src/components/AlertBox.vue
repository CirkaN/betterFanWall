<template>
    <div class="p-5 flex justify-center">
        <p class="text-xl ">{{ props.alertText }}</p>
    </div>
</template>

<script setup>
const props = defineProps(["alertText", "alertType"]);
</script>