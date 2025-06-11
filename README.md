# Microfrontend Demo with Module Federation

This project demonstrates a **real microfrontend architecture** using **Webpack Module Federation** with Vite. Unlike iframe-based approaches, this implementation provides true runtime integration with shared dependencies and seamless user experience.

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Shell App     │    │  Landing MFE    │    │ Dashboard MFE   │
│   (Port 3000)   │◄──►│   (Port 3001)   │    │   (Port 3002)   │
│                 │    │                 │    │                 │
│ • Navigation    │    │ • Marketing     │    │ • Analytics     │
│ • Routing       │    │ • Features      │    │ • Charts        │
│ • Error Bounds  │    │ • Onboarding    │    │ • Real-time     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Key Features

### ✅ **True Microfrontend Architecture**
- **Module Federation**: Runtime code sharing and loading
- **Independent Deployment**: Each app can be deployed separately
- **Technology Diversity**: Different teams can use different tech stacks
- **Shared Dependencies**: Optimized bundle sizes with shared React/ReactDOM

### ✅ **Production-Ready Patterns**
- **Error Boundaries**: Graceful failure handling
- **Lazy Loading**: Components loaded on-demand
- **TypeScript Support**: Full type safety across microfrontends
- **Responsive Design**: Mobile-first approach

### ✅ **Real-World Scenarios**
- **Shell Application**: Orchestrates the entire user experience
- **Landing Microfrontend**: Marketing and onboarding content
- **Dashboard Microfrontend**: Analytics with real-time data updates

## Project Structure

```
microfrontend-demo/
├── shell/          # Shell application (consumer)
│   ├── src/
│   │   ├── App.tsx           # Main shell with routing
│   │   ├── components/
│   │   │   └── ErrorBoundary.tsx
│   │   └── federation.d.ts   # TypeScript definitions
│   └── vite.config.ts        # Module Federation config
├── landing/        # Landing microfrontend (producer)
│   ├── src/
│   │   └── App.tsx           # Landing page content
│   └── vite.config.ts        # Exposes ./App
└── dashboard/      # Dashboard microfrontend (producer)
    ├── src/
    │   └── App.tsx           # Dashboard with charts
    └── vite.config.ts        # Exposes ./App
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm 7+

### Installation & Development

```bash
# Install all dependencies
npm install

# Run all microfrontends in development
npm run dev
```

This will start:
- **Shell App**: http://localhost:3000 (main entry point)
- **Landing MFE**: http://localhost:3001 (can run standalone)
- **Dashboard MFE**: http://localhost:3002 (can run standalone)

### Individual Development

```bash
# Run only specific microfrontends
npm run dev:shell      # Shell application
npm run dev:landing    # Landing microfrontend
npm run dev:dashboard  # Dashboard microfrontend
```

## Module Federation Configuration

### Shell App (Consumer)
```typescript
federation({
  name: 'shell',
  remotes: {
    landing: 'http://localhost:3001/assets/remoteEntry.js',
    dashboard: 'http://localhost:3002/assets/remoteEntry.js'
  },
  shared: ['react', 'react-dom']
})
```

### Microfrontends (Producers)
```typescript
federation({
  name: 'landing',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App'
  },
  shared: ['react', 'react-dom']
})
```

## Why This Approach?

### ❌ **Problems with Iframe Approach**
- Poor user experience (scrolling, navigation issues)
- Limited communication between apps
- SEO and accessibility challenges
- Styling and responsive design difficulties

### ✅ **Benefits of Module Federation**
- **Seamless Integration**: No iframe boundaries
- **Shared State**: Easy communication between microfrontends
- **Performance**: Shared dependencies reduce bundle size
- **Developer Experience**: Hot reloading and debugging work normally
- **Production Ready**: Used by companies like Spotify, Bytedance

## Real-World Usage

This architecture is perfect for:
- **Large Organizations**: Multiple teams working on different features
- **Legacy Migration**: Gradually modernize monolithic applications
- **Multi-Brand Products**: Different UIs sharing common functionality
- **Scalable Development**: Independent deployment and development cycles

## Technologies Used

- **React 18** with TypeScript
- **Vite** with Module Federation plugin
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide React** for icons
- **React Router** for navigation

## Building for Production

```bash
# Build all microfrontends
npm run build

# Build individually
npm run build:shell
npm run build:landing
npm run build:dashboard
```

Each microfrontend generates its own `dist` folder and can be deployed to separate CDNs or servers.

## Next Steps

To extend this demo:
1. Add authentication microfrontend
2. Implement shared state management
3. Add E2E testing with Cypress
4. Set up CI/CD pipelines for independent deployment
5. Add monitoring and error tracking

---

**This is a true microfrontend architecture demonstration** - not just multiple apps in iframes, but a production-ready implementation using industry-standard Module Federation.