import { defineStore } from "pinia";
import api from "../services/api";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || "",
  }),

  actions: {
    async register(form) {
      const res = await api.post("/register", form);

      // optional: auto login after register
      // OR just redirect
      router.push("/login");

      return res.data;
    },

    async login(form) {
      const res = await api.post("/login", form);

      this.token = res.data.token;
      localStorage.setItem("token", res.data.token);

      router.push("/dashboard");
    },

    logout() {
      this.token = "";
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
});
