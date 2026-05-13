<script setup>
const props = defineProps({
  category: Object,
});

const emit = defineEmits(["delete"]);
</script>

<template>
  <div
    class="bg-white p-4 rounded shadow flex justify-between items-center mb-3"
  >
    <div>
      <h2 class="font-bold text-lg text-gray-800">
        {{ category.name }}
      </h2>

      <p class="text-sm text-gray-500">Category ID: {{ category.id }}</p>
    </div>

    <!-- Delete Button -->
    <button
      @click="emit('delete', category.id)"
      class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
</template>
