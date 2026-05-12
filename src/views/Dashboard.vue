<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />

  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold mb-2">Dashboard</h1>

    <p class="mb-6">Welcome to Client Digital Menu App</p>

    <!-- Auth Links -->
    <div class="flex justify-center space-x-4">
      <router-link to="/items" class="bg-blue-500 text-white px-4 py-2 rounded">
        Items
      </router-link>

      <router-link
        to="/categories"
        class="bg-green-500 text-white px-4 py-2 rounded"
      >
        Categories
      </router-link>
    </div>
  </div>
</template>
