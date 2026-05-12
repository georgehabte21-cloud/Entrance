<script setup>
import { ref, onMounted, computed } from "vue";
import api from "../services/api";
import Navbar from "../components/Navbar.vue";

const categories = ref(0);
const items = ref(0);
const favorites = ref(0);

// 🔥 extra demo stats (you can replace later with backend)
const orders = ref(12);
const revenue = ref(5400);
const users = ref(5);

onMounted(async () => {
  const c = await api.get("/categories");
  const i = await api.get("/items");

  categories.value = c.data.length;
  items.value = i.data.length;

  favorites.value = JSON.parse(localStorage.getItem("fav"))?.length || 0;
});
</script>

<template>
  <div class="flex">
    <Navbar />

    <div class="flex-1 min-h-screen bg-violet-100 p-5">
      <h1 class="text-2xl font-bold mb-5 text-center">Dashboard Overview</h1>

      <div class="grid grid-cols-3 gap-4">
        <div
          class="p-6 h-40 bg-blue-100 w-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Categories</h2>
          <p class="text-2xl font-bold">{{ categories }}</p>
        </div>

        <div
          class="p-6 h-40 bg-green-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Items</h2>
          <p class="text-2xl font-bold">{{ items }}</p>
        </div>

        <div
          class="p-6 h-40 bg-yellow-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Favorites</h2>
          <p class="text-2xl font-bold">{{ favorites }}</p>
        </div>

        <div
          class="p-6 h-40 bg-pink-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Orders</h2>
          <p class="text-2xl font-bold">{{ orders }}</p>
        </div>

        <div
          class="p-6 h-40 bg-purple-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Revenue</h2>
          <p class="text-2xl font-bold">{{ revenue }} Birr</p>
        </div>

        <div
          class="p-6 h-40 bg-indigo-100 rounded shadow text-center hover:scale-105 hover:cursor-pointer"
        >
          <h2 class="mb-12">Users</h2>
          <p class="text-2xl font-bold">{{ users }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
