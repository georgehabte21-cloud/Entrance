<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: "📊" },
  { name: "Categories", path: "/categories", icon: "📂" },
  { name: "Menu Items", path: "/items", icon: "🍔" },
  { name: "Favorites", path: "/favoritview", icon: "❤️" },
];

const activeMenu = computed(() => {
  return menus.find((m) => m.path === route.path);
});
</script>

<template>
  <aside class="w-64 h-screen bg-gray-900 text-white flex flex-col">
    <div class="flex flex-col flex-1">
      <div class="p-6 border-gray-700">
        <h1 class="text-2xl font-bold">
          {{ activeMenu?.name || "Dashboard" }}
        </h1>
      </div>

      <nav class="p-4 flex flex-col gap-2">
        <router-link
          v-for="menu in menus"
          :key="menu.path"
          :to="menu.path"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300"
          :class="
            route.path === menu.path ? 'bg-blue-500' : 'hover:bg-gray-700'
          "
        >
          <span class="text-xl">{{ menu.icon }}</span>
          <span class="font-medium">{{ menu.name }}</span>
        </router-link>
      </nav>
    </div>
  </aside>
</template>
