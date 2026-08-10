import { defineStore } from 'pinia';
import { useAuthStore } from "./auth";


export const useUserPreferencesStore = defineStore('userPreferences', {
    state: () => ({
      preferredColors: {
        background: '#ffffff',
        text: '#000000',
      },
      drawer: {
        width: 250,  
        isExtended: true, 
      }
    }),
    
    actions: {
      setDrawerState(isExtended) {
        this.drawer.isExtended = isExtended;
        this.drawer.width = isExtended ? 250 : 80;
        this.saveDrawerStateToLocalStorage();
      },
  
      loadDrawerStateFromLocalStorage() {
        const storedDrawerState = localStorage.getItem('drawer-state');
        if (storedDrawerState) {
          this.drawer = JSON.parse(storedDrawerState);
        }
      },
  
      saveDrawerStateToLocalStorage() {
        localStorage.setItem('drawer-state', JSON.stringify(this.drawer));
      },
    },
  
    getters: {
      getDrawerWidth(state) {
        return state.drawer.width;
      },
      isDrawerExtended(state) {
        return state.drawer.isExtended;
      },
      isUserAuthenticated(){
        return useAuthStore().isAuthenticated;
      }
    },
  });