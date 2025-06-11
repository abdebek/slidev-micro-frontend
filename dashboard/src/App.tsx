import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Users, DollarSign, Activity, BarChart3 } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
  trend: 'up' | 'down'
}

function MetricCard({ title, value, change, icon: Icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`h-6 w-6 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  )
}

function App() {
  const [salesData, setSalesData] = useState([
    { month: 'Jan', sales: 4000, users: 2400 },
    { month: 'Feb', sales: 3000, users: 1398 },
    { month: 'Mar', sales: 2000, users: 9800 },
    { month: 'Apr', sales: 2780, users: 3908 },
    { month: 'May', sales: 1890, users: 4800 },
    { month: 'Jun', sales: 2390, users: 3800 }
  ])

  const [pieData, setPieData] = useState([
    { name: 'Desktop', value: 400, color: '#3B82F6' },
    { name: 'Mobile', value: 300, color: '#10B981' },
    { name: 'Tablet', value: 200, color: '#F59E0B' },
    { name: 'Other', value: 100, color: '#EF4444' }
  ])

  const [metrics, setMetrics] = useState({
    totalUsers: '12,345',
    revenue: '$45,678',
    conversion: '3.2%',
    activeUsers: '8,901'
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData(prev => prev.map(item => ({
        ...item,
        sales: item.sales + Math.floor(Math.random() * 200) - 100,
        users: item.users + Math.floor(Math.random() * 100) - 50
      })))

      setMetrics(prev => ({
        totalUsers: (parseInt(prev.totalUsers.replace(',', '')) + Math.floor(Math.random() * 10) - 5).toLocaleString(),
        revenue: `$${(parseInt(prev.revenue.replace('$', '').replace(',', '')) + Math.floor(Math.random() * 100) - 50).toLocaleString()}`,
        conversion: `${(parseFloat(prev.conversion.replace('%', '')) + (Math.random() * 0.2) - 0.1).toFixed(1)}%`,
        activeUsers: (parseInt(prev.activeUsers.replace(',', '')) + Math.floor(Math.random() * 20) - 10).toLocaleString()
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard Microfrontend
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Real-time insights and performance metrics</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated</p>
            <p className="text-sm font-medium text-gray-900">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Users"
          value={metrics.totalUsers}
          change="+12.5%"
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="Revenue"
          value={metrics.revenue}
          change="+8.2%"
          icon={DollarSign}
          trend="up"
        />
        <MetricCard
          title="Conversion Rate"
          value={metrics.conversion}
          change="-2.1%"
          icon={TrendingUp}
          trend="down"
        />
        <MetricCard
          title="Active Users"
          value={metrics.activeUsers}
          change="+15.3%"
          icon={Activity}
          trend="up"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales & Users Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
              <Bar dataKey="users" fill="#10B981" name="Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Trajectory</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} />
              <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New user registration', time: '2 minutes ago', type: 'user' },
              { action: 'Payment processed', time: '5 minutes ago', type: 'payment' },
              { action: 'Dashboard accessed', time: '8 minutes ago', type: 'access' },
              { action: 'Report generated', time: '12 minutes ago', type: 'report' },
              { action: 'System backup completed', time: '15 minutes ago', type: 'system' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'payment' ? 'bg-green-500' :
                    activity.type === 'access' ? 'bg-yellow-500' :
                    activity.type === 'report' ? 'bg-purple-500' :
                    'bg-gray-500'
                  }`}></div>
                  <span className="text-gray-900">{activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Info */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Microfrontend Architecture</h3>
        <p className="text-gray-600 mb-4">
          This dashboard is a completely separate React application running on port 3002. 
          It's loaded dynamically by the shell application using Module Federation.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg">
            <strong className="text-purple-600">Independent Development:</strong> This dashboard can be developed, tested, and deployed independently from other microfrontends.
          </div>
          <div className="bg-white p-4 rounded-lg">
            <strong className="text-blue-600">Shared Dependencies:</strong> React and React-DOM are shared between microfrontends to optimize bundle size.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App