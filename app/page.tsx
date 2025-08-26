"use client";

import { useState } from 'react';
import { Search, Bell, ChevronDown, BarChart3, Building, CreditCard, Users, Calculator, Settings, Calendar, Utensils, FileText, LogOut, Droplets, Wifi, Zap, Globe } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Week');

  const navigationItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Building, label: 'Accounts', active: false },
    { icon: CreditCard, label: 'Cards', active: false },
    { icon: Users, label: 'Contacts', active: false },
    { icon: Calculator, label: 'Loan Calculator', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const scheduleItems = [
    { icon: Calendar, label: 'Monthly Rent', active: false },
    { icon: Utensils, label: 'Food Payment', active: false },
    { icon: FileText, label: 'Utility Bills', active: false },
  ];

  const transferActions = [
    { title: 'Transfer Via', subtitle: 'Card Number', icon: CreditCard },
    { title: 'Transfer to', subtitle: 'Another Bank', icon: Building },
    { title: 'Transfer to', subtitle: 'Same Bank', icon: Users },
    { title: 'Transfer to', subtitle: 'International Bank', icon: Globe },
  ];

  const recentTransactions = [
    { name: 'Ahsan Jilani', date: '24-Dec-2022 12:23:23 PM', amount: '- $ 190', color: 'bg-orange-500' },
    { name: 'Furqan Ashiq', date: '24-Dec-2022 09:54:23 AM', amount: '+ $ 270', color: 'bg-yellow-500' },
    { name: 'Ahtishami', date: '02-Dec-2022 05:15:00 PM', amount: '- $ 150', color: 'bg-orange-500' },
  ];

  return (
    <div className="h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-[#2a2a2a] h-full p-6 flex flex-col">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 mr-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <polygon 
                  points="24,4 40,14 40,34 24,44 8,34 8,14" 
                  fill="none" 
                  stroke="#ff6b35" 
                  strokeWidth="2"
                />
                <polygon 
                  points="24,10 34,16 34,32 24,38 14,32 14,16" 
                  fill="none" 
                  stroke="#ff6b35" 
                  strokeWidth="1.5"
                />
                <circle cx="24" cy="24" r="4" fill="#ff6b35" />
              </svg>
            </div>
            <div>
              <div className="text-orange-500 font-bold text-xl">TrueViral.ai</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">PLATFORM</div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium mb-4 text-center">Main Menu</h3>
            <nav className="space-y-1">
              {navigationItems.map((item, index) => (
                <div key={index} className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors relative ${
                  item.active 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}>
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.active && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l-full"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Schedule Payments */}
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium mb-4 text-center">Schedule Payments</h3>
            <nav className="space-y-1">
              {scheduleItems.map((item, index) => (
                <div key={index} className="flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors text-gray-300 hover:bg-gray-700/50">
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="mt-auto">
            <div className="flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors text-gray-300 hover:bg-gray-700/50">
              <LogOut size={20} className="mr-3" />
              <span className="text-sm font-medium">Logout</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white mb-1">Good Morning <span className="font-bold">Content Creator</span></h1>
              <p className="text-gray-400 text-sm">Welcome to the dashboard</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search here" 
                  className="pl-10 w-80 h-10 bg-[#2a2a2a] border-gray-600 text-white placeholder-gray-500 focus:border-orange-500 rounded-lg"
                />
              </div>
              
              <div className="relative">
                <Bell className="text-gray-400 cursor-pointer" size={22} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">1</span>
                </div>
              </div>
              
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150" alt="User" />
                <AvatarFallback>CC</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Transfer Actions */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {transferActions.map((action, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700 hover:bg-[#3a3a3a] transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{action.title}</h3>
                      <p className="text-gray-400 text-xs">{action.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 border border-orange-500 rounded-full flex items-center justify-center">
                      <action.icon className="text-orange-500" size={18} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 h-[calc(100vh-280px)]">
            {/* Total Balance & Chart */}
            <div className="col-span-2 space-y-4">
              <Card className="bg-[#2a2a2a] border-gray-700 flex-1">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-white text-lg font-medium mb-2">Total Balance</h3>
                      <div className="text-3xl font-bold text-white">$ 68.657</div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-gray-400 text-sm">Income</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-400 text-sm">Outcome</span>
                      </div>
                      <Button className="bg-[#1a1a1a] border border-gray-600 text-white hover:bg-gray-700 h-8 px-3 text-sm">
                        {selectedTimeframe}
                        <ChevronDown className="ml-2" size={14} />
                      </Button>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="relative h-48 bg-[#1a1a1a] rounded-lg p-4">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                      <span>$ 70</span>
                      <span>$ 60</span>
                      <span>$ 50</span>
                      <span>$ 40</span>
                      <span>$ 30</span>
                      <span>$ 20</span>
                      <span>$ 10</span>
                    </div>

                    {/* Chart content */}
                    <div className="ml-8 h-full relative">
                      <svg className="w-full h-full absolute inset-0">
                        <defs>
                          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8"/>
                            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.2"/>
                          </linearGradient>
                          <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1"/>
                          </linearGradient>
                        </defs>
                        
                        {/* Orange area (outcome) */}
                        <path
                          d="M 0,160 L 50,140 L 100,120 L 150,100 L 200,90 L 250,80 L 300,70 L 350,60 L 400,55 L 450,50 L 500,45 L 550,40 L 600,35 L 650,30 L 700,160 Z"
                          fill="url(#orangeGradient)"
                        />
                        
                        {/* Yellow area (income) */}
                        <path
                          d="M 0,160 L 50,150 L 100,135 L 150,120 L 200,110 L 250,100 L 300,90 L 350,80 L 400,75 L 450,70 L 500,65 L 550,60 L 600,55 L 650,50 L 700,160 Z"
                          fill="url(#yellowGradient)"
                        />
                        
                        {/* Income line */}
                        <path
                          d="M 0,150 L 50,135 L 100,120 L 150,105 L 200,95 L 250,85 L 300,75 L 350,65 L 400,60 L 450,55 L 500,50 L 550,45 L 600,40 L 650,35"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                        />
                        
                        {/* Current value indicator */}
                        <circle cx="550" cy="45" r="3" fill="#fbbf24" />
                        <text x="560" y="40" fill="#fbbf24" fontSize="10">$ 57.99</text>
                      </svg>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400 pt-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-white text-lg font-medium mb-4">Recent Transactions</h3>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 ${transaction.color} rounded-full mr-4`}></div>
                          <div>
                            <div className="text-white font-medium text-sm">{transaction.name}</div>
                            <div className="text-gray-400 text-xs">{transaction.date}</div>
                          </div>
                        </div>
                        <div className={`font-medium text-sm ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Cards Section */}
              <Card className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-white text-lg font-medium mb-4">Cards</h3>
                  
                  {/* Credit Card */}
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-sm opacity-80">Content Creator</div>
                    <div className="mb-6">
                      <div className="text-sm opacity-80 mb-1">Balance</div>
                      <div className="text-2xl font-bold">$ 68.657.00</div>
                    </div>
                    <div className="text-lg tracking-wider font-mono mb-4">1124 5668 6599 1768</div>
                    <div className="flex justify-between items-end">
                      <div className="text-sm opacity-80">Valid 11/25</div>
                      <div className="flex space-x-1">
                        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-yellow-500 rounded-sm opacity-80"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="24"
                          stroke="#374151"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="24"
                          stroke="#ff6b35"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${65 * 1.5} ${100 * 1.5}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">65%</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-orange-500 text-lg font-bold">$ 270</div>
                      <div className="text-gray-400 text-xs">Available Limit</div>
                      <div className="text-green-500 text-lg font-semibold">$ 760</div>
                      <div className="text-gray-400 text-xs">Total Limit</div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#1a1a1a] border border-gray-600 text-white hover:bg-gray-700 h-10">
                    Add New Card
                  </Button>
                </CardContent>
              </Card>

              {/* Bills Section */}
              <Card className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-white text-lg font-medium mb-4">Bills</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-orange-500/30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                          <Droplets className="text-orange-500" size={16} />
                        </div>
                        <span className="text-white text-sm">Water Bill</span>
                      </div>
                      <div className="w-5 h-5 bg-orange-500/20 rounded flex items-center justify-center">
                        <span className="text-orange-500 text-xs">🔥</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-600/20 rounded-lg flex items-center justify-center mr-3">
                          <Wifi className="text-gray-400" size={16} />
                        </div>
                        <span className="text-white text-sm">Broadband</span>
                      </div>
                      <div className="w-5 h-5 bg-gray-600/20 rounded flex items-center justify-center">
                        <span className="text-gray-400 text-xs">📶</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-gray-600">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-600/20 rounded-lg flex items-center justify-center mr-3">
                          <Zap className="text-gray-400" size={16} />
                        </div>
                        <span className="text-white text-sm">Electricity</span>
                      </div>
                      <div className="w-5 h-5 bg-gray-600/20 rounded flex items-center justify-center">
                        <span className="text-gray-400 text-xs">⚡</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}