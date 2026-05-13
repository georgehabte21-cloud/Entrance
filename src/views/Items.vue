<script setup>
import { ref, onMounted, computed } from "vue";
import InputField from "../components/InputField.vue";
import ItemCard from "../components/ItemCard.vue";
import { useItemStore } from "../stores/item";
import { useFavoriteStore } from "../stores/favorites";

const store = useItemStore();
const favStore = useFavoriteStore();

const search = ref("");

const form = ref({
  item_name: "",
  price: "",
});

onMounted(() => {
  store.load();
});

const add = () => {
  if (!form.value.item_name.trim() || !form.value.price) {
    alert("Please fill all fields");
    return;
  }

  store.add(form.value);

  form.value.item_name = "";
  form.value.price = "";
};

const addToFav = (item) => {
  favStore.add(item);
  alert("Added to favorites ❤️");
};

const filtered = computed(() => {
  return store.items.filter((i) =>
    i.item_name.toLowerCase().includes(search.value.toLowerCase()),
  );
});
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
        <div
          v-for="i in filtered"
          :key="i.id"
          class="bg-white p-4 rounded shadow flex justify-between items-center"
        >
          <ItemCard :item="i" @delete="store.remove" />

          <button
            @click="addToFav(i)"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mx-3"
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
