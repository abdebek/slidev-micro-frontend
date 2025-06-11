<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Microfrontend Architecture Demo
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              Experience the power of microfrontends with this demonstration combining Vue.js and Slidev presentations in a single application.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <router-link to="/presentation" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">
                View Presentation
              </router-link>
              <router-link to="/about" class="inline-block bg-white hover:bg-gray-100 text-primary-600 font-medium py-3 px-6 rounded-lg border border-primary-200 transition-colors text-center">
                Learn More
              </router-link>
            </div>
          </div>
          <div class="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Developers working together" 
              class="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the benefits of using microfrontends in your architecture
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Independent Deployment</h3>
            <p class="text-gray-600">
              Each microfrontend can be developed, tested, and deployed independently, reducing coordination overhead.
            </p>
          </div>
          
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Team Autonomy</h3>
            <p class="text-gray-600">
              Different teams can work on different parts of the application using their preferred technologies.
            </p>
          </div>
          
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Technology Diversity</h3>
            <p class="text-gray-600">
              Mix and match different frameworks and libraries based on the specific needs of each part of your application.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-900 text-white px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to explore microfrontends?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Check out our interactive presentation to learn more about the architecture and implementation details.
        </p>
        <router-link to="/presentation" class="inline-block bg-white text-primary-900 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors">
          View Presentation
        </router-link>
      </div>
    </section>
  </div>
</template>