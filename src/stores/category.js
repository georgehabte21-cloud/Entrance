import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),

  actions: {
    load() {
      this.categories = JSON.parse(localStorage.getItem("categories") || "[]");
    },

    save() {
      localStorage.setItem("categories", JSON.stringify(this.categories));
    },

    add(name) {
      const newCategory = {
        id: Date.now(),
        name,
      };

      this.categories.push(newCategory);
      this.save();
    },

    remove(id) {
      this.categories = this.categories.filter((c) => c.id !== id);

      this.save();
    },
  },
});
