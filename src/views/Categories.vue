<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import InputField from "../components/InputField.vue";
import CategoryCard from "../components/CategoryCard.vue";
import { useCategoryStore } from "../stores/category";

const store = useCategoryStore();

const name = ref("");

onMounted(() => {
  store.fetch();
});

const add = async () => {
  await store.create({ name: name.value });
  name.value = "";
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-xl font-bold mb-3">Categories</h1>

    <InputField v-model="name" placeholder="Category name" />

    <button @click="add" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
      Add Category
    </button>

    <CategoryCard
      v-for="c in store.categories"
      :key="c.id"
      :category="c"
      @delete="store.remove"
    />
  </div>
</template>
