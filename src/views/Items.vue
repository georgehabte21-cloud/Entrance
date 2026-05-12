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

onMounted(async () => {
  await store.fetch();
});

const add = async () => {
  try {
    await store.create(form.value);

    // reload items after adding
    await store.fetch();

    // clear form
    form.value.item_name = "";
    form.value.price = "";

    alert("Item added successfully ✅");
  } catch (err) {
    console.log(err);
    alert("Failed to add item ❌");
  }
};

// filter items
const filtered = computed(() => {
  return store.items.filter((i) =>
    i.item_name.toLowerCase().includes(search.value.toLowerCase()),
  );
});

// favorite feature
const favorite = (item) => {
  let fav = JSON.parse(localStorage.getItem("fav") || "[]");

  // avoid duplicates
  const exists = fav.find((f) => f.id === item.id);
  if (!exists) {
    fav.push(item);
  }

  localStorage.setItem("fav", JSON.stringify(fav));

  alert("Added to favorites ❤️");
};
</script>

<template>
  <div class="flex">
    <div class="flex-1 p-6 bg-gray-100 min-h-screen">
      <h1 class="text-2xl font-bold mb-5">Items Page</h1>

      <InputField v-model="search" placeholder="Search items..." />

      <div class="bg-white p-4 rounded shadow mb-5">
        <InputField v-model="form.item_name" placeholder="Item name" />
        <InputField v-model="form.price" placeholder="Price" />

        <button
          @click="add"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
        >
          Add Item
        </button>
      </div>

      <div class="grid gap-4">
        <ItemCard
          v-for="i in filtered"
          :key="i.id"
          :item="i"
          @delete="store.remove"
          @fav="favorite"
        />
      </div>
    </div>
  </div>
</template>
