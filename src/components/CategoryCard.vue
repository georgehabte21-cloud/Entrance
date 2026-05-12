<script setup>
defineProps(["category"]);
defineEmits(["delete"]);
</script>

<template>
  <div class="border p-3 mb-2 flex justify-between rounded">
    <h2 class="font-bold">{{ category.name }}</h2>

    <button @click="$emit('delete', category.id)" class="text-red-500">
      Delete
    </button>
  </div>
</template>
