import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favorites: [],
  }),

  actions: {
    load() {
      this.favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    },

    add(item) {
      const exists = this.favorites.find((f) => f.id === item.id);

      if (!exists) {
        this.favorites.push(item);
        this.save();
      }
    },

    remove(id) {
      this.favorites = this.favorites.filter((f) => f.id !== id);
      this.save();
    },

    save() {
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
});
