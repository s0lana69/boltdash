"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  ArrowUp, 
  ArrowDown, 
  Send, 
  CreditCard, 
  DollarSign, 
  Droplets, 
  Zap, 
  Wifi 
} from 'lucide-react';

export default function Dashboard() {
  const [navigationItems, setNavigationItems] = useState([
    { icon: Home, label: 'Home', active: true },
    { icon: TrendingUp, label: 'Analytics', active: false },
    { icon: Users, label: 'Audience', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
  ]);

  const [transferActions] = useState([
    { icon: ArrowUp, label: 'Send', description: 'Send money' },
    { icon: ArrowDown, label: 'Receive', description: 'Receive money' },
    { icon: Send, label: 'Transfer', description: 'Quick transfer' },
  ]);

  const [stats] = useState([
    { icon: DollarSign, label: 'Income', value: '$2,456', change: '+12.5%' },
    { icon: CreditCard, label: 'Expenses', value: '$1,234', change: '-3.2%' },
    { icon: TrendingUp, label: 'Savings', value: '$5,678', change: '+8.3%' },
  ]);

  const [bills] = useState([
    { icon: Droplets, name: 'Water Bill', active: true },
    { icon: Zap, name: 'Electricity', active: false },
    { icon: Wifi, name: 'Internet', active: false },
  ]);

  return (
    <div className="h-screen bg-[#1a1a1a] text-white overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#2a2a2a] h-full p-6 flex flex-col">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 mr-3">
            <svg viewBox="0 0 48 48" className="w-full h-full">
              <polygon 
                points="24,4 40,14 40,34 24,44 8,34 8,14" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="2"
              />
              <polygon 
                points="24,10 34,16 34,32 24,38 14,32 14,16" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="1.5"
              />
              <circle cx="24" cy="24" r="4" fill="#a855f7" />
            </svg>
          </div>
          <div>
            <div className="text-neon-violet font-bold text-xl">TrueViral.ai</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">PLATFORM</div>
          </div>
        </div>

        {/* Main Menu */}
        {navigationItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors relative mb-2 ${
              item.active 
                ? 'bg-neon-violet text-white shadow-[0_0_10px_rgba(168,85,247,0.7)]' 
                : 'text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <item.icon className="mr-3" size={20} />
            <span className="font-medium">{item.label}</span>
            {item.active && (
              <div className="absolute right-0 top-0 h-full w-1 bg-neon-violet rounded-l-lg"></div>
            )}
          </div>
        ))}

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* User Profile */}
        <div className="flex items-center mt-8 pt-4 border-t border-gray-700">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-violet to-neon-violetDark flex items-center justify-center mr-3">
            <span className="font-bold">U</span>
          </div>
          <div>
            <div className="font-medium">User Name</div>
            <div className="text-xs text-gray-400">Free Plan</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Welcome back, User</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-sm">U</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#2a2a2a] border-gray-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-green-500 text-sm mt-1">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 bg-neon-violet/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="text-neon-violet" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transfer Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {transferActions.map((action, index) => (
            <Card key={index} className="bg-[#2a2a2a] border-gray-700 hover:bg-[#3a3a3a] transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{action.label}</h3>
                    <p className="text-gray-400 text-sm">{action.description}</p>
                  </div>
                  <div className="w-10 h-10 border border-neon-violet rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                    <action.icon className="text-neon-violet" size={18} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Credit Card */}
        <div className="bg-gradient-to-br from-neon-violet to-neon-violetDark rounded-2xl p-6 text-white mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-violet-200 text-sm">Current Balance</p>
                <h2 className="text-3xl font-bold mt-1">$12,456.78</h2>
              </div>
              <div className="text-right">
                <p className="text-violet-200 text-sm">Valid Thru</p>
                <p className="font-medium">12/25</p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-violet-200 text-sm">Card Number</p>
                <p className="font-mono">**** 5678</p>
              </div>
              <div className="w-16 h-10 bg-white/20 rounded flex items-center justify-center">
                <div className="w-8 h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full"></div>
        </div>

        {/* Bills Section */}
        <div className="bg-[#2a2a2a] rounded-2xl p-6 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Upcoming Bills</h2>
            <button className="text-neon-violet text-sm font-medium">See All</button>
          </div>
          
          <div className="space-y-4">
            {bills.map((bill, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  bill.active 
                    ? 'bg-[#1a1a1a] border-neon-violet/30 shadow-[0_0_8px_rgba(168,85,247,0.3)]' 
                    : 'border-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-neon-violet/20 rounded-lg flex items-center justify-center mr-3">
                    <bill.icon className="text-neon-violet" size={16} />
                  </div>
                  <span className="text-white text-sm">{bill.name}</span>
                </div>
                <div className={`w-5 h-5 rounded flex items-center justify-center ${
                  bill.active ? 'bg-neon-violet/20' : 'bg-gray-700'
                }`}>
                  {bill.active && <span className="text-neon-violet text-xs">🔥</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}