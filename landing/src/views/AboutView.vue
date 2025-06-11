<template>
  <div>
    <!-- About Hero -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-8">About Microfrontends</h1>
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Team collaboration" 
            class="w-full h-64 object-cover"
          />
          <div class="p-8">
            <p class="text-lg text-gray-700 mb-6">
              Microfrontends extend the concepts of microservices to the frontend world. This architectural style involves decomposing a frontend application into individual, semi-independent "microapps" working loosely together.
            </p>
            <p class="text-lg text-gray-700">
              This approach has gained popularity as organizations seek ways to scale frontend development across multiple teams while maintaining autonomy and flexibility in technology choices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-50 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Benefits of Microfrontends</h2>
        
        <div class="space-y-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Incremental Upgrades</h3>
            <p class="text-gray-700">
              Microfrontends allow teams to upgrade, update, or even rewrite parts of the application without rebuilding everything. This makes it easier to keep up with evolving technologies and user needs.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Independent Deployment</h3>
            <p class="text-gray-700">
              Each microfrontend can be deployed independently, allowing teams to deliver new features without coordinating releases across the entire application.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Autonomous Teams</h3>
            <p class="text-gray-700">
              Teams can work independently on different parts of the application, choosing their own tech stack, development practices, and release cycles.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Simplified Codebase</h3>
            <p class="text-gray-700">
              Instead of a single, complex monolith, each team works with a smaller, more manageable codebase that's easier to understand and maintain.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Approaches -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Implementation Approaches</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-700 mb-3">Iframe Integration</h3>
            <p class="text-gray-700 mb-4">
              The simplest approach using iframes to embed different applications. Provides strong isolation but has limitations with communication and UX.
            </p>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-sm text-gray-800">
                &lt;iframe src="https://team-a-app.example.com" title="Team A App"&gt;&lt;/iframe&gt;
              </code>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-700 mb-3">Web Components</h3>
            <p class="text-gray-700 mb-4">
              Using custom elements to create framework-agnostic components that can be used across different parts of the application.
            </p>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-sm text-gray-800">
                &lt;team-a-widget data-user="123"&gt;&lt;/team-a-widget&gt;
              </code>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-700 mb-3">Module Federation</h3>
            <p class="text-gray-700 mb-4">
              Webpack 5's Module Federation allows sharing JavaScript modules across multiple applications at runtime.
            </p>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-sm text-gray-800">
                // webpack.config.js<br>
                new ModuleFederationPlugin({<br>
                &nbsp;&nbsp;name: 'container',<br>
                &nbsp;&nbsp;remotes: {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;teamA: 'teamA@http://localhost:3001/remoteEntry.js'<br>
                &nbsp;&nbsp;}<br>
                })
              </code>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-primary-700 mb-3">Server-Side Composition</h3>
            <p class="text-gray-700 mb-4">
              Assembling the application on the server by combining fragments from different teams before sending to the client.
            </p>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-sm text-gray-800">
                // Server template<br>
                &lt;div id="app"&gt;<br>
                &nbsp;&nbsp;{include file="team-a-header.html"}<br>
                &nbsp;&nbsp;{include file="team-b-content.html"}<br>
                &nbsp;&nbsp;{include file="team-c-footer.html"}<br>
                &lt;/div&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>