import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home, BarChart3, Menu, X, Presentation } from 'lucide-react'
import ErrorBoundary from './components/ErrorBoundary'
const Slides = React.lazy(() => import('./components/Slides'));
const Landing = React.lazy(() => import('landing/App'))
const Dashboard = React.lazy(() => import('dashboard/App'))

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-gray-900">MicroFrontend Demo</h1>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Landing
                  </Link>
                  <Link
                    to="/slides"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <Presentation className="w-4 h-4 mr-2" />
                    Slides
                  </Link>
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Landing
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main content */}
        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/slides" element={<Slides />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  )
}

export default App