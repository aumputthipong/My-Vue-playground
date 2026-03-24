<script setup lang="ts">
import { ref } from 'vue';

// การกำหนด Type ให้กับ ref เป็น Best Practice สำหรับ TypeScript
const pageTitle = ref<string>('Home Page');
const welcomeMessage = ref<string>('WELCOME TO VUE PLAYGROUND APP');
</script>

<template>
  <section class="flex flex-col items-center justify-center py-12 px-4">
    <div class="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 text-center border border-gray-100">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
        {{ pageTitle }}
      </h1>
      <p class="text-lg text-gray-600">
        {{ welcomeMessage }}
      </p>
      
      <div class="mt-8 p-4 bg-blue-50 rounded-lg inline-block">
        <p class="text-sm text-blue-800 font-medium">
         HELLO WORLD!
        </p>
      </div>
    </div>
  </section>
</template>