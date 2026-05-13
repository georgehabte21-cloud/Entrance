<script setup>
import { onMounted, computed } from "vue";
import { useCategoryStore } from "../stores/category";
import { useItemStore } from "../stores/item";
const categoryStore = useCategoryStore();
const itemStore = useItemStore();

onMounted(async () => {
  try {
    categoryStore.load();
    itemStore.load();
  } catch (err) {
    console.log("Fetch error:", err);
  }
});

const stats = computed(() => [
  {
    title: "Categories",
    total: categoryStore.categories?.length || 0,
    icon: "📂",
    color: "bg-blue-200",
    text: "Active menu categories",
  },
  {
    title: "Menu Items",
    total: itemStore.items?.length || 0,
    icon: "🍔",
    color: "bg-green-300",
    text: "Available food items",
  },
  {
    title: "Favorites",
    total: JSON.parse(localStorage.getItem("favorites") || "[]").length,
    icon: "❤️",
    color: "bg-red-400",
    text: "Customer favorite meals",
  },
  {
    title: "Orders",
    total: itemStore.items?.length || 0,
    icon: "🛒",
    color: "bg-orange-400",
    text: "Today total orders",
  },
  {
    title: "Revenue",
    total: `${(itemStore.items?.length || 0) * 250} Br`,
    icon: "💰",
    color: "bg-yellow-400",
    text: "Estimated income",
  },
  {
    title: "Customers",
    total: (itemStore.items?.length || 0) * 3,
    icon: "👥",
    color: "bg-purple-400",
    text: "Registered customers",
  },
]);

const recentOrders = computed(() => {
  return itemStore.items.slice(-4).map((item) => {
    return {
      id: item.id,
      item: item.item_name,
      status: "Completed",
    };
  });
});
</script>

<template>
  <div>
    <div class="mb-10 text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p class="text-gray-700 mt-4 text-lg font-semibold">
        Welcome! This is your restaurant system overview.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.title"
        class="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition border"
      >
        <div
          :class="stat.color"
          class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white"
        >
          {{ stat.icon }}
        </div>

        <h2 class="text-gray-500 text-lg mt-4">
          {{ stat.title }}
        </h2>

        <p class="text-3xl font-bold text-gray-800 mt-2">
          {{ stat.total }}
        </p>

        <p class="text-sm text-gray-400 mt-2">
          {{ stat.text }}
        </p>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-md p-6 mt-3">
      <h2 class="text-2xl font-bold mb-6">Recent Orders</h2>

      <div>
        <div
          v-for="order in recentOrders"
          :key="order.id"
          class="flex justify-between items-center border-b pb-3"
        >
          <div>
            <p class="font-semibold">{{ order.item }}</p>
            <p class="text-sm text-gray-500">Order #{{ order.id }}</p>
          </div>

          <span
            class="text-sm px-3 py-1 rounded-full bg-green-100 text-green-600"
          >
            {{ order.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
