---
theme: seriph
background: https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Microfrontend Architecture
  A comprehensive guide to microfrontends
drawings:
  persist: false
transition: slide-left
title: Microfrontend Architecture
---

# Microfrontend Architecture

A modern approach to frontend development

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: default
---

# What are Microfrontends?

Microfrontends extend the concepts of microservices to the frontend world.

<div class="grid grid-cols-2 gap-4 mt-10">
<div>

## Definition

"An architectural style where independently deliverable frontend applications are composed into a greater whole"

- **Independent teams**
- **Technology agnostic**
- **Isolated codebases**
- **Separate deployments**

</div>
<div>

## Traditional Monolith vs Microfrontends

<img src="https://miro.medium.com/v2/resize:fit:1400/1*wbMNxLCUHwZDhYRxQW7VSQ.png" class="h-60 rounded shadow" />

</div>
</div>

---
layout: two-cols
---

# Why Microfrontends?

<v-clicks>

- **Team autonomy** - Independent teams can work on different parts of the application
- **Technology flexibility** - Teams can choose the best tools for their specific needs
- **Incremental upgrades** - Parts of the application can be updated without affecting others
- **Scalable development** - Multiple teams can work in parallel
- **Focused codebases** - Smaller, more manageable repositories

</v-clicks>

::right::

<div class="pl-10 pt-20">
  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="h-80 rounded-lg shadow-xl" />
</div>

---
layout: default
---

# Implementation Approaches

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">1. Iframe Integration</h3>
    <div class="text-sm">
      <p>Using iframes to embed different applications</p>
      <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
        <pre><code><iframe src="https://team-a-app.example.com" title="Team A App"></iframe></code></pre>
      </div>
      <p class="mt-2 text-yellow-400">Pros: Simple, strong isolation</p>
      <p class="text-red-400">Cons: Poor UX, communication challenges</p>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">2. Web Components</h3>
    <div class="text-sm">
      <p>Using custom elements for framework-agnostic components</p>
      <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
        <pre><code>class TeamAWidget extends HTMLElement { ... }
customElements.define('team-a-widget', TeamAWidget);</code></pre>
      </div>
      <p class="mt-2 text-yellow-400">Pros: Framework-agnostic, standard-based</p>
      <p class="text-red-400">Cons: Limited browser support, complexity</p>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">3. Module Federation</h3>
    <div class="text-sm">
      <p>Webpack 5 feature for sharing modules at runtime</p>
      <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
        <pre><code>// webpack.config.js
new ModuleFederationPlugin({
  name: 'container',
  remotes: {
    teamA: 'teamA@http://localhost:3001/remoteEntry.js'
  }
})</code></pre>
      </div>
      <p class="mt-2 text-yellow-400">Pros: Runtime integration, code sharing</p>
      <p class="text-red-400">Cons: Webpack-specific, complex setup</p>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">4. Server-Side Composition</h3>
    <div class="text-sm">
      <p>Assembling the application on the server</p>
      <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
        <pre><code>// Server template
<div id="app">
  {include file="team-a-header.html"}
  {include file="team-b-content.html"}
  {include file="team-c-footer.html"}
</div></code></pre>
      </div>
      <p class="mt-2 text-yellow-400">Pros: Better performance, SEO-friendly</p>
      <p class="text-red-400">Cons: Complex infrastructure, less flexibility</p>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

# Communication Between Microfrontends

<div class="grid grid-cols-3 gap-4 mt-10">
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:events class="text-4xl mx-auto mb-4" />
    <h3 class="text-xl font-bold mb-2">Custom Events</h3>
    <p class="text-sm">Using browser's event system for communication</p>
    <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
      <pre><code>window.dispatchEvent(
  new CustomEvent('order-created', { 
    detail: { id: '123' } 
  })
);
// Listen for event
window.addEventListener(
  'order-created', 
  (e) => console.log(e.detail)
);</code></pre>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:data-base class="text-4xl mx-auto mb-4" />
    <h3 class="text-xl font-bold mb-2">Shared State</h3>
    <p class="text-sm">Using a global store or local storage</p>
    <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
      <pre><code>// Store data
localStorage.setItem(
  'user', 
  JSON.stringify({ id: '123' })
);
// Retrieve data
const user = JSON.parse(
  localStorage.getItem('user')
);</code></pre>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:api class="text-4xl mx-auto mb-4" />
    <h3 class="text-xl font-bold mb-2">Mediator Pattern</h3>
    <p class="text-sm">Using a central communication service</p>
    <div class="mt-2 bg-gray-800 p-2 rounded text-xs">
      <pre><code>// Mediator service
const mediator = {
  events: {},
  on(event, callback) {
    this.events[event] = callback;
  },
  emit(event, data) {
    this.events[event](data);
  }
};</code></pre>
    </div>
  </div>
</div>

---
layout: default
---

# Challenges and Solutions

<div class="grid grid-cols-2 gap-6 mt-6">
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">Styling Consistency</h3>
    <div class="text-sm">
      <p class="text-red-400">Challenge: Maintaining consistent UI across microfrontends</p>
      <p class="text-green-400 mt-2">Solutions:</p>
      <ul class="list-disc list-inside mt-1">
        <li>Shared design system</li>
        <li>CSS-in-JS with theme providers</li>
        <li>Web Components with Shadow DOM</li>
      </ul>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">Dependency Management</h3>
    <div class="text-sm">
      <p class="text-red-400">Challenge: Duplicate dependencies increasing bundle size</p>
      <p class="text-green-400 mt-2">Solutions:</p>
      <ul class="list-disc list-inside mt-1">
        <li>Webpack Module Federation</li>
        <li>Import maps for shared dependencies</li>
        <li>Externalized common libraries</li>
      </ul>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">Authentication & Authorization</h3>
    <div class="text-sm">
      <p class="text-red-400">Challenge: Sharing authentication state across microfrontends</p>
      <p class="text-green-400 mt-2">Solutions:</p>
      <ul class="list-disc list-inside mt-1">
        <li>Centralized auth service</li>
        <li>JWT tokens in cookies or localStorage</li>
        <li>OAuth 2.0 with shared identity provider</li>
      </ul>
    </div>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <h3 class="text-xl font-bold mb-2">Testing & Monitoring</h3>
    <div class="text-sm">
      <p class="text-red-400">Challenge: Testing integration between microfrontends</p>
      <p class="text-green-400 mt-2">Solutions:</p>
      <ul class="list-disc list-inside mt-1">
        <li>End-to-end testing with Cypress or Playwright</li>
        <li>Contract testing between microfrontends</li>
        <li>Distributed tracing for monitoring</li>
      </ul>
    </div>
  </div>
</div>

---
layout: two-cols
---

# Real-World Examples

<v-clicks>

- **Spotify**
  - Different teams manage different parts of the UI
  - Uses iframes for isolation

- **IKEA**
  - Migrated from monolith to microfrontends
  - Server-side composition with edge workers

- **Zalando**
  - Uses Module Federation
  - Team-based ownership of features

- **Allegro**
  - Custom framework for microfrontends
  - Server-side and client-side composition

</v-clicks>

::right::

<div class="pl-10 pt-20">
  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" class="h-80 rounded-lg shadow-xl" />
</div>

---
layout: center
class: text-center
---

# When to Use Microfrontends?

<div class="grid grid-cols-2 gap-10 mt-10">
  <div v-click class="bg-green-500 bg-opacity-20 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4">Good Fit</h3>
    <ul class="text-left space-y-2">
      <li>✅ Large applications with distinct sections</li>
      <li>✅ Multiple teams working on the same product</li>
      <li>✅ Need for independent deployment cycles</li>
      <li>✅ Different parts of the app have different tech requirements</li>
      <li>✅ Migrating legacy applications incrementally</li>
    </ul>
  </div>
  
  <div v-click class="bg-red-500 bg-opacity-20 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4">Poor Fit</h3>
    <ul class="text-left space-y-2">
      <li>❌ Small applications with a single team</li>
      <li>❌ Applications with highly integrated UI</li>
      <li>❌ Projects with limited resources for infrastructure</li>
      <li>❌ Applications requiring minimal maintenance</li>
      <li>❌ Teams without clear boundaries of responsibility</li>
    </ul>
  </div>
</div>

---
layout: center
class: text-center
---

# Best Practices

<div class="grid grid-cols-3 gap-6 mt-10">
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:user-role class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Team Structure</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• Organize by business domain</li>
      <li>• Cross-functional teams</li>
      <li>• Clear ownership boundaries</li>
    </ul>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:development class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Development</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• Shared design system</li>
      <li>• Consistent coding standards</li>
      <li>• Local development environment</li>
    </ul>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:delivery class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Deployment</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• CI/CD pipelines per microfrontend</li>
      <li>• Independent versioning</li>
      <li>• Automated testing</li>
    </ul>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:api class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Integration</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• Well-defined contracts</li>
      <li>• Loose coupling</li>
      <li>• Resilient error handling</li>
    </ul>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:security class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Security</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• Content Security Policy</li>
      <li>• Centralized authentication</li>
      <li>• Secure communication</li>
    </ul>
  </div>
  
  <div v-click class="bg-white bg-opacity-10 p-4 rounded-lg">
    <carbon:chart-line class="text-4xl mx-auto mb-4" />
    <h3 class="text-lg font-bold mb-2">Performance</h3>
    <ul class="text-sm text-left space-y-1">
      <li>• Shared dependencies</li>
      <li>• Lazy loading</li>
      <li>• Performance budgets</li>
    </ul>
  </div>
</div>

---
layout: end
---

# Thank You!

[GitHub Repository](https://github.com) · [Documentation](https://example.com) · [Contact](mailto:example@example.com)