<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" class="h-8 w-8" />
          <span class="text-xl font-bold text-primary-800">MicroFrontend Demo</span>
        </div>
        <div class="flex space-x-6">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-600 hover:text-primary-600 transition-colors"
            active-class="text-primary-600 font-medium"
          >
            {{ item.name }}
          </router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
    
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Logo" class="h-8 w-8 invert" />
              <span class="text-xl font-bold">MicroFrontend Demo</span>
            </div>
            <p class="text-gray-400 max-w-md">
              A demonstration of microfrontend architecture using Vue.js and Slidev.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">Resources</h3>
              <ul class="space-y-2">
                <li><a href="https://vuejs.org" target="_blank" class="text-gray-400 hover:text-white transition-colors">Vue.js</a></li>
                <li><a href="https://sli.dev" target="_blank" class="text-gray-400 hover:text-white transition-colors">Slidev</a></li>
                <li><a href="https://vitejs.dev" target="_blank" class="text-gray-400 hover:text-white transition-colors">Vite</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Connect</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {{ new Date().getFullYear() }} MicroFrontend Demo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Presentation', path: '/presentation' }
];
</script>