<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="container mx-auto max-w-4xl">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="p-6 bg-primary-700 text-white">
          <h1 class="text-2xl font-bold">Microfrontends Presentation</h1>
          <p class="text-primary-100">An interactive slide deck about microfrontend architecture</p>
        </div>
        
        <div class="p-6">
          <p class="text-gray-700 mb-6">
            This presentation is running as a separate microfrontend using Slidev. You can view it in the iframe below or open it in a new tab for a better experience.
          </p>
          
          <div class="flex justify-end mb-4">
            <a 
              :href="slidesUrl" 
              target="_blank" 
              class="inline-flex items-center text-primary-600 hover:text-primary-800"
            >
              <span>Open in new tab</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div class="w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden">
            <iframe 
              :src="slidesUrl" 
              class="w-full h-full" 
              title="Microfrontends Presentation" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// In a real-world scenario, this would be configured based on your deployment
const slidesUrl = ref('http://localhost:3001');
</script>