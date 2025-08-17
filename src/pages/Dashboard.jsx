import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import Background from '../components/Background';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,592',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Active Users',
      value: '8,429',
      change: '+8.2%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-2.1%',
      trend: 'down',
      icon: TrendingUp
    },
    {
      title: 'Performance',
      value: '94.2%',
      change: '+5.7%',
      trend: 'up',
      icon: Activity
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New user registration', time: '2 minutes ago', value: '+$1,250' },
    { id: 2, action: 'Payment processed', time: '5 minutes ago', value: '+$892' },
    { id: 3, action: 'Subscription renewal', time: '12 minutes ago', value: '+$299' },
    { id: 4, action: 'Refund processed', time: '18 minutes ago', value: '-$156' },
    { id: 5, action: 'New premium upgrade', time: '23 minutes ago', value: '+$499' }
  ];

  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Background />
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-white/60 text-lg">Welcome back, here's your overview</p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassPanel className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    stat.trend === 'up' ? 'text-white' : 'text-white/60'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white/70 text-sm font-medium mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GlassPanel className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Revenue Overview</h2>
                <p className="text-white/60">Monthly performance metrics</p>
              </div>
              
              {/* Simple Chart Visualization */}
              <div className="h-64 flex items-end justify-between space-x-4">
                {chartData.map((item, index) => (
                  <div key={item.name} className="flex-1 flex flex-col items-center">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(item.value / 6000) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="w-full bg-gradient-to-t from-white/20 to-white/40 rounded-t-lg mb-3 min-h-[20px] backdrop-blur-sm border border-white/10"
                    />
                    <span className="text-white/60 text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassPanel className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2">Recent Activity</h2>
                <p className="text-white/60 text-sm">Latest transactions and events</p>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium mb-1">{activity.action}</p>
                      <p className="text-white/50 text-xs">{activity.time}</p>
                    </div>
                    <div className={`text-sm font-bold ${
                      activity.value.startsWith('+') ? 'text-white' : 'text-white/60'
                    }`}>
                      {activity.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Bottom Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <GlassPanel className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Performance Analytics</h2>
              <p className="text-white/60">Comprehensive insights into your business metrics</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98.5%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1.2s</div>
                <div className="text-white/70 text-sm">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.2%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;