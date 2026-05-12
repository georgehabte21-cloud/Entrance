<script setup>
defineProps(["item"]);
defineEmits(["delete", "fav"]);
</script>

<template>
  <div class="border p-3 mb-2 flex justify-between rounded">
    <div>
      <h2 class="font-bold">{{ item.item_name }}</h2>
      <p>{{ item.price }} ETB</p>
    </div>

    <div class="space-x-3">
      <button @click="$emit('fav', item)" class="text-yellow-500">⭐</button>

      <button @click="$emit('delete', item.id)" class="text-red-500">
        Delete
      </button>
    </div>
  </div>
</template>
