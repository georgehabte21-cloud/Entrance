<script setup>
import { ref } from "vue";

const search = ref("");

const showNotifications = ref(false);

const notifications = ref([
  "New order received",
  "Burger item updated",
  "New user registered",
]);

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};
</script>

<template>
  <nav
    class="bg-white shadow-md px-6 py-4 flex justify-between items-center border-b"
  >
    <div class="flex items-center gap-3">
      <router-link to="/dashboard">
        <div
          class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl hover:cursor-pointer"
        >
          D
        </div>
      </router-link>

      <div class="mx-2">
        <h1 class="text-3xl font-bold text-gray-800">Digital Menu</h1>
      </div>
    </div>

    <div class="flex items-center gap-5 relative">
      <button @click="toggleNotifications" class="relative">
        <span class="text-2xl">🔔</span>

        <span
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
        >
          {{ notifications.length }}
        </span>
      </button>

      <div
        v-if="showNotifications"
        class="absolute right-0 top-12 w-64 bg-white shadow-lg rounded-lg border p-3 z-50"
      >
        <h3 class="font-bold mb-2 text-gray-700">Notifications</h3>

        <div v-if="notifications.length === 0" class="text-gray-400 text-sm">
          No notifications
        </div>

        <ul class="space-y-2">
          <li
            v-for="(note, index) in notifications"
            :key="index"
            class="text-sm bg-gray-100 p-2 rounded"
          >
            {{ note }}
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-3">
        <img
          src="/second.png"
          class="w-10 h-10 rounded-full border object-fill"
        />

        <div>
          <h2 class="font-semibold text-gray-700">Tadu</h2>
          <p class="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  </nav>
</template>
