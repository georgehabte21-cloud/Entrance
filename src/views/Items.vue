<script setup>
import { ref, onMounted, computed } from "vue";
import Navbar from "../components/Navbar.vue";
import InputField from "../components/InputField.vue";
import ItemCard from "../components/ItemCard.vue";
import { useItemStore } from "../stores/item";

const store = useItemStore();

const search = ref("");

const form = ref({
  item_name: "",
  price: "",
});

onMounted(() => {
  store.fetch();
});

const add = async () => {
  await store.create(form.value);

  form.value.item_name = "";
  form.value.price = "";
};

const filtered = computed(() => {
  return store.items.filter((i) =>
    i.item_name.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const favorite = (item) => {
  let fav = JSON.parse(localStorage.getItem("fav") || "[]");
  fav.push(item);
  localStorage.setItem("fav", JSON.stringify(fav));
};
</script>

<template>
  <Navbar />

  <div class="p-6">
    <h1 class="text-xl font-bold mb-3">Items</h1>

    <InputField v-model="search" placeholder="Search items..." />

    <InputField v-model="form.item_name" placeholder="Item name" />
    <InputField v-model="form.price" placeholder="Price" />

    <button @click="add" class="bg-green-500 text-white px-4 py-2 rounded mb-4">
      Add Item
    </button>

    <ItemCard
      v-for="i in filtered"
      :key="i.id"
      :item="i"
      @delete="store.remove"
      @fav="favorite"
    />
  </div>
</template>
