// Static remoteEntry.js for landing microfrontend
const moduleMap = {
  './App': () => import('/src/App.tsx')
};

const get = (module) => {
  return moduleMap[module] ? moduleMap[module]() : Promise.reject(new Error(`Module ${module} not found`));
};

const init = (shared) => {
  // Initialize shared dependencies if needed
  console.log('Landing microfrontend initialized with shared:', shared);
};

// Export the container interface
window.landing = {
  get,
  init
};

// Also make it available as a module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { get, init };
}