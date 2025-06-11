import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Home, BarChart3, Users, Settings } from 'lucide-react'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load microfrontends with error handling
const LandingApp = React.lazy(() => 
  import('landing/App').catch(() => ({
    default: () => (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 m-4">
        <h3 className="text-lg font-medium text-yellow-800 mb-2">Landing Microfrontend Unavailable</h3>
        <p className="text-yellow-700">The landing microfrontend could not be loaded. Please ensure it's running on port 3001.</p>
      </div>
    )
  }))
)

const DashboardApp = React.lazy(() => 
  import('dashboard/App').catch(() => ({
    default: () => (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 m-4">
        <h3 className="text-lg font-medium text-yellow-800 mb-2">Dashboard Microfrontend Unavailable</h3>
        <p className="text-yellow-700">The dashboard microfrontend could not be loaded. Please ensure it's running on port 3002.</p>
      </div>
    )
  }))
)

function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">MicroFrontend Demo</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Shell App
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<LandingApp />} />
                <Route path="/dashboard/*" element={<DashboardApp />} />
                <Route path="/users" element={
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Users Management</h2>
                    <p className="text-gray-600">This would be another microfrontend for user management.</p>
                  </div>
                } />
                <Route path="/settings" element={
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
                    <p className="text-gray-600">This would be another microfrontend for application settings.</p>
                  </div>
                } />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  )
}

export default App