<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const auth = useAuthStore();

const form = ref({
  email: "",
  password: "",
});

const login = async () => {
  try {
    await auth.login(form.value);

    router.push("/dashboard");

    form.value.email = "";
    form.value.password = "";
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96 p-6 shadow rounded bg-white">
      <h1 class="text-2xl font-bold mb-5">Login</h1>

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="border w-full p-2 mb-3 rounded-lg"
      />

      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="border w-full p-2 mb-3 rounded-lg"
      />

      <button @click="login" class="bg-green-500 text-white w-full p-2 rounded">
        Login
      </button>
    </div>
  </div>
</template>
