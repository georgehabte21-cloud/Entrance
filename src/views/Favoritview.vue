<script setup>
import { onMounted } from "vue";
import { useFavoriteStore } from "../stores/favorites";

const store = useFavoriteStore();

onMounted(() => {
  store.load();
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">❤️Your Favorites</h1>

    <div
      v-if="store.favorites.length === 0"
      class="text-gray-500 text-center mt-20"
    >
      No favorites yet 🍽️
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in store.favorites"
        :key="item.id"
        class="bg-white p-5 rounded shadow"
      >
        <h2 class="font-bold text-lg">{{ item.item_name }}</h2>
        <p class="text-green-600 font-semibold">${{ item.price }}</p>

        <button
          @click="store.remove(item.id)"
          class="mt-4 bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
