import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    fullname: "",
    role: "",
    isLoggedIn: false
  }),
  actions: {
    login(token, user){
      this.token = token;
      this.fullname = user.fullName;
      this.role = user.role;
      this.isLoggedIn = true;

      setTimeout(() => {
        this.logout();
        console.debug("Token expired");
      }, 15 * 60 * 1000);
    },
    logout(){
      console.debug("Logging out");
      this.isLoggedIn = false;
      this.token = null;
    },
    getLoginStatus(){
      return this.isLoggedIn;
    },
    getToken(){
      return this.token;
    },
    getFullName(){
      return this.fullname;
    },
    getRole(){
      return this.role;
    }
  },
  persist: true
})