<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow p-4 flex gap-4 justify-center">
      <RouterLink to="/" class="text-gray-600 hover:text-blue-600 font-medium">Home</RouterLink>
      <RouterLink to="/about" class="text-gray-600 hover:text-blue-600 font-medium">About</RouterLink>
    </nav>

    <main class="container mx-auto p-8">
      <RouterView />
    </main>
  </div>
</template>