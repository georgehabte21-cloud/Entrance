<template>
  <div class="bg-gray-400 text-violet-900 p-4 min-w-48">
    <div class="text-center">
      <router-link
        to="/dashboard"
        class="my-2 py-2 block hover:text-gray-700 hover:translate-x-2 duration-300"
        >Dashboard</router-link
      >
      <router-link
        to="/categories"
        class="my-2 py-2 block hover:text-gray-700 hover:translate-x-2 duration-300"
        >Categories</router-link
      >
      <router-link
        to="/items"
        class="my-2 py-2 block hover:text-gray-700 hover:translate-x-2 duration-300"
        >Items</router-link
      >

      <router-link
        to="/login"
        class="my-2 py-2 block hover:text-gray-700 hover:translate-x-2 duration-300"
        >Login</router-link
      >
      <router-link
        to="/register"
        class="my-2 py-2 block hover:text-gray-700 hover:translate-x-2 duration-300"
        >Register</router-link
      >
    </div>
  </div>
</template>
