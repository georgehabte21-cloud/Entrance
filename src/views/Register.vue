<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore();

const form = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
  business_name: "",
  tin: "",
});

const error = ref("");

const register = async () => {
  try {
    await auth.register(form.value);
    alert("Registered successfully");
  } catch (err) {
    error.value = err.message || "Registration failed";
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="register" class="w-96 p-6 shadow rounded">
      <h1 class="text-xl font-bold mb-4">Register</h1>

      <input v-model="form.name" placeholder="Name" class="input" />
      <input v-model="form.email" placeholder="Email" class="input" />
      <input v-model="form.phone" placeholder="Phone" class="input" />

      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="input"
      />

      <input
        v-model="form.business_name"
        placeholder="Business Name"
        class="input"
      />

      <input v-model="form.tin" placeholder="TIN" class="input" />

      <p class="text-red-500">{{ error }}</p>

      <button type="submit" class="bg-blue-500 text-white w-full p-2 mt-3">
        Register
      </button>
    </form>
  </div>
</template>

<style>
.input {
  @apply border w-full p-2 mb-2;
}
</style>
