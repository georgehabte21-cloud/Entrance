import { defineStore } from "pinia";
import api from "../services/api";

export const useItemStore = defineStore("item", {
  state: () => ({
    items: [],
  }),

  actions: {
    async fetch() {
      const res = await api.get("/items");
      this.items = res.data;
    },

    async create(data) {
      await api.post("/items", data);
      this.fetch();
    },

    async delete(id) {
      await api.delete(`/items/${id}`);
      this.fetch();
    },
  },
});
