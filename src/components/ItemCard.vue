<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(["delete"]);
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div>
      <h2 class="font-bold">{{ item.item_name }}</h2>
      <p class="text-gray-500">${{ item.price }}</p>
    </div>

    <button
      @click="emit('delete', item.id)"
      class="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
</template>
