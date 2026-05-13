import { defineStore } from "pinia";

export const useItemStore = defineStore("item", {
  state: () => ({
    items: [],
  }),

  actions: {
    load() {
      this.items = JSON.parse(localStorage.getItem("items") || "[]");
    },

    save() {
      localStorage.setItem("items", JSON.stringify(this.items));
    },

    add(item) {
      const newItem = {
        id: Date.now(),
        item_name: item.item_name,
        price: item.price,
      };

      this.items.push(newItem);
      this.save();
    },

    remove(id) {
      this.items = this.items.filter((i) => i.id !== id);
      this.save();
    },
  },
});
