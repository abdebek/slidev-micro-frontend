import React from 'react'
import { Rocket, Users, Zap, Shield, Globe, Code } from 'lucide-react'

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function App() {
  const features = [
    {
      icon: Rocket,
      title: 'Independent Deployment',
      description: 'Each microfrontend can be deployed independently, enabling faster releases and reduced coordination overhead.'
    },
    {
      icon: Users,
      title: 'Team Autonomy',
      description: 'Different teams can work on different parts of the application using their preferred technologies and practices.'
    },
    {
      icon: Zap,
      title: 'Technology Diversity',
      description: 'Mix and match different frameworks and libraries based on the specific needs of each application part.'
    },
    {
      icon: Shield,
      title: 'Fault Isolation',
      description: 'If one microfrontend fails, it doesn\'t bring down the entire application, improving overall resilience.'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Scale development across multiple teams while maintaining clear boundaries and responsibilities.'
    },
    {
      icon: Code,
      title: 'Module Federation',
      description: 'Share code and dependencies at runtime using Webpack Module Federation for optimal performance.'
    }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
          <Rocket className="w-4 h-4 mr-2" />
          Landing Microfrontend
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          Welcome to
          <span className="text-blue-600"> Microfrontends</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Experience the power of modular frontend architecture with this live demonstration. 
          This landing page is a separate React application loaded via Module Federation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Explore Dashboard
          </button>
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Module Federation Architecture</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">SHELL</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Shell Application</h3>
            <p className="text-sm text-gray-600">Orchestrates the entire application and provides navigation</p>
            <div className="mt-3 text-xs text-green-600 font-medium">Port 3000</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">LAND</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Landing Microfrontend</h3>
            <p className="text-sm text-gray-600">This current page - marketing and onboarding content</p>
            <div className="mt-3 text-xs text-blue-600 font-medium">Port 3001</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold">DASH</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Dashboard Microfrontend</h3>
            <p className="text-sm text-gray-600">Analytics and data visualization components</p>
            <div className="mt-3 text-xs text-purple-600 font-medium">Port 3002</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose Microfrontends?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Module Federation Config</h3>
            <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono">
              <pre>{`// Shell App (Consumer)
federation({
  name: 'shell',
  remotes: {
    landing: 'http://localhost:3001/assets/remoteEntry.js',
    dashboard: 'http://localhost:3002/assets/remoteEntry.js'
  },
  shared: ['react', 'react-dom']
})`}</pre>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Remote Exposure</h3>
            <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono">
              <pre>{`// Landing App (Producer)
federation({
  name: 'landing',
  filename: 'remoteEntry.js',
  exposes: {
    './App': './src/App'
  },
  shared: ['react', 'react-dom']
})`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to explore the dashboard?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Navigate to the dashboard to see another microfrontend in action with real-time data visualization.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
          View Dashboard →
        </button>
      </div>
    </div>
  )
}

export default App