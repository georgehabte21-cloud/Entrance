<script setup>
import { ref, onMounted, computed } from "vue";
import InputField from "../components/InputField.vue";
import CategoryCard from "../components/CategoryCard.vue";
import { useCategoryStore } from "../stores/category";

const store = useCategoryStore();

const name = ref("");

const currentPage = ref(1);
const perPage = 3;

onMounted(() => {
  store.load();
});

const add = () => {
  if (!name.value.trim()) {
    alert("category name is required");
    return;
  }

  store.add(name.value);
  name.value = "";
};

const totalPages = computed(() => {
  return Math.ceil(store.categories.length / perPage);
});

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;

  return store.categories.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
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
      v-for="c in paginatedCategories"
      :key="c.id"
      :category="c"
      @delete="store.remove"
    />

    <div class="flex items-center gap-3 mt-6 justify-center">
      <button @click="prevPage" class="bg-gray-500 px-4 py-2 rounded">
        Prev
      </button>

      <span class="font-bold"> Page {{ currentPage }} / {{ totalPages }} </span>

      <button
        @click="nextPage"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>
