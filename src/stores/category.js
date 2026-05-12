import { defineStore } from "pinia";
import api from "../services/api";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),

  actions: {
    async fetch() {
      const res = await api.get("/categories");
      this.categories = res.data;
    },

    async create(data) {
      await api.post("/categories", data);
      this.fetch();
    },

    async delete(id) {
      await api.delete(`/categories/${id}`);
      this.fetch();
    },
  },
});
