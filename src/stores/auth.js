import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    users: [],
  }),

  actions: {
    async login(form) {
      const foundUser = this.users.find(
        (u) => u.email === form.email && u.password === form.password,
      );

      if (foundUser) {
        this.user = foundUser;
        alert("Login Success");
      } else {
        throw new Error("Invalid email or password");
      }
    },

    async register(form) {
      const exists = this.users.find((u) => u.email === form.email);

      if (exists) {
        throw new Error("Email already exists");
      }

      this.users.push(form);

      localStorage.setItem("users", JSON.stringify(this.users));

      alert("Register Success");
    },
  },
});
