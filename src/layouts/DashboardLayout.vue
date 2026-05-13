<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />

    <div class="flex flex-1 overflow-hidden">
      <Sidebar />

      <main class="flex-1 bg-violet-200 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
