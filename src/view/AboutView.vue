<script setup lang="ts">
import { ref } from 'vue';

const pageTitle = ref<string>('About Page');
const description = ref<string>('หน้านี้ใช้สำหรับทดสอบระบบ Routing แบบ Lazy Loading');
</script>

<template>
  <section class="flex flex-col items-center justify-center py-12 px-4">
    <div class="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 text-center border border-gray-100">
      <h1 class="text-4xl font-extrabold text-indigo-600 tracking-tight mb-4">
        {{ pageTitle }}
      </h1>
      <p class="text-lg text-gray-600">
        {{ description }}
      </p>

      <div class="mt-8 text-left bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">ข้อมูลจำลองระบบ</h2>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-green-500 rounded-full"></span>
            Framework: Vue 3 (Composition API)
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            Language: TypeScript
          </li>
          <li class="flex items-center gap-2">
            <span class="w-2 h-2 bg-teal-500 rounded-full"></span>
            Styling: Tailwind CSS
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>