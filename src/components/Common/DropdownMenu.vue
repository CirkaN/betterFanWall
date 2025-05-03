<template>
    <div class="relative" ref="dropdownTrigger" @click.stop="toggleDropdown">
      <button class="text-gray-800 font-medium rounded underline">
        Vise opcija..
      </button>
      <div v-show="isOpen" :style="dropdownStyles" class="fixed bg-white border rounded shadow-lg z-50">
        <a v-for="(action, index) in actions" :key="index" href="#" @click.prevent="action.handler"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          {{ action.label }}
        </a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  
  const props = defineProps({
    actions: {
      type: Array,
      required: true,
    },
  });
  
  const isOpen = ref(false);
  const dropdownStyles = ref({});
  
  const dropdownTrigger = ref(null);
  
  const toggleDropdown = () => {
    if (!isOpen.value) {
      const rect = dropdownTrigger.value.getBoundingClientRect();
      dropdownStyles.value = {
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
        minWidth: `${rect.width}px`,
      };
    }
    isOpen.value = !isOpen.value;
  };
  
  const closeDropdown = () => {
    isOpen.value = false;
  };
  
  const handleClickOutside = (event) => {
    if (!event.target.closest(".relative")) {
      closeDropdown();
    }
  };
  
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });
  
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  </script>