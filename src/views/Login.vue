<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();

const form = ref({
  email: "",
  password: "",
});

const login = async () => {
  try {
    await auth.login(form.value);
  } catch (err) {
    alert(err.message || "Login failed");
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96 p-6 shadow rounded">
      <h1 class="text-xl font-bold mb-4">Login</h1>

      <input v-model="form.email" placeholder="Email" class="input" />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="input"
      />

      <button @click="login" class="bg-green-500 text-white w-full p-2 mt-3">
        Login
      </button>
    </div>
  </div>
</template>
