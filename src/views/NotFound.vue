<template>
    <v-container class="text-center position-relative d-flex flex-column ga-3" style="top: 5rem;">
      <v-avatar color="primary" variant="tonal" size="120" class="align-self-center">
        <h1>404</h1>
      </v-avatar>

      <v-container class="d-flex flex-column ga-1">
        <h1 class="text-capitalize" style="color: #0A1B39;">Page is Coming Soon</h1>
        <p class="w-50 align-self-center" style="color: #64748b;">We're developing a new, integrated billing and invoicing module designed to simplify your patient financial management.</p>
      </v-container>
      <v-container>
        <p style="color: #64748b;">Be the first to know when it launches.</p>
        <v-btn color="primary" variant="outlined" @click="goHome" class="text-capitalize mt-4">
          Go Back to Home
        </v-btn>
      </v-container>
    </v-container>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/'); 
      },
    },
  };
  </script>
  
  <style scoped>
  </style>