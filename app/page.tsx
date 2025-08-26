"use client";

import { useState } from 'react';
import { Search, Bell, ChevronDown, BarChart, PieChart, VideoIcon, Settings, Users, Zap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Week');

  const navigationItems = [
    { icon: BarChart, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Advanced Analytics', active: false },
    { icon: VideoIcon, label: 'AI Content Studio', active: false },
    { icon: Zap, label: 'Viral Scanner', active: false },
    { icon: Users, label: 'AI Analyzer 2', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const recentTransactions = [
    { name: 'Ahsan Jilani', date: '24-Dec-2022 12:23:23 PM', amount: '- $ 190', color: 'bg-purple-500' },
    { name: 'Furqan Ashiq', date: '24-Dec-2022 09:54:23 AM', amount: '+ $ 270', color: 'bg-purple-600' },
    { name: 'Ahtishami', date: '02-Dec-2022 05:15:00 PM', amount: '- $ 150', color: 'bg-purple-700' },
  ];

  return (
    <div className="h-screen bg-[#0f0f1a] text-white overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-[#1a1a2e] h-full p-6 flex flex-col">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 mr-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <polygon 
                  points="24,4 40,14 40,34 24,44 8,34 8,14" 
                  fill="none" 
                  stroke="rgba(138, 43, 226, 0.5)" 
                  strokeWidth="2"
                />
                <polygon 
                  points="24,10 34,16 34,32 24,38 14,32 14,16" 
                  fill="none" 
                  stroke="rgba(138, 43, 226, 0.5)" 
                  strokeWidth="1.5"
                />
                <circle cx="24" cy="24" r="4" fill="rgba(138, 43, 226, 0.5)" />
              </svg>
            </div>
            <div>
              <div className="text-purple-500 font-bold text-xl">TrueViral.ai</div>
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
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-300 hover:bg-purple-500/20'
                }`}>
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {item.active && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-full"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="mt-auto">
            <div className="flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors text-gray-300 hover:bg-purple-500/20">
              <Settings size={20} className="mr-3" />
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
                  className="pl-10 w-80 h-10 bg-[#1a1a2e] border-gray-600 text-white placeholder-gray-500 focus:border-purple-500 rounded-lg"
                />
              </div>
              
              <div className="relative">
                <Bell className="text-gray-400 cursor-pointer" size={22} />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">1</span>
                </div>
              </div>
              
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150" alt="User" />
                <AvatarFallback>CC</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 h-[calc(100vh-280px)]">
            {/* Top Performing Content */}
            <Card className="bg-[#1a1a2e] border-gray-700 col-span-2">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Top Performing Content</h3>
                <div className="space-y-3">
                  {[
                    { title: 'In Japan werden RATTEN vereint?! Tierische Geheimnisse', platform: 'YouTube', growth: '+14%' },
                    { title: 'Dieser Hund: Post hat Geschichte geschrieben', platform: 'YouTube', growth: '+0.5%' },
                    { title: 'How Bollywood Changed Indian Fashion Forever', platform: 'YouTube', growth: '+0.4%' },
                    { title: 'Da Dogs Judge You? Watch That Pets #dogfails', platform: 'YouTube', growth: '+0.5%' }
                  ].map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#0f0f1a] rounded-lg">
                      <div>
                        <div className="text-white text-sm">{content.title}</div>
                        <div className="text-gray-400 text-xs">{content.platform}</div>
                      </div>
                      <div className="text-green-500 text-sm">{content.growth}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Performance Overview</h3>
                <div className="relative h-48 bg-[#0f0f1a] rounded-lg p-4">
                  {/* Chart placeholder */}
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Recent Comments</h3>
                <div className="space-y-3">
                  {[
                    { name: '@lazady', comment: 'Nice one', time: '4 months ago' },
                    { name: '@WTFaktz', comment: 'Interesting take', time: '4 months ago' }
                  ].map((comment, index) => (
                    <div key={index} className="p-3 bg-[#0f0f1a] rounded-lg">
                      <div className="text-white text-sm">{comment.name}</div>
                      <div className="text-gray-400 text-xs">{comment.comment}</div>
                      <div className="text-gray-500 text-xs mt-1">{comment.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Radar */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-medium mb-4">Performance Radar</h3>
                <div className="relative h-48 bg-[#0f0f1a] rounded-lg p-4">
                  {/* Radar chart placeholder */}
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-lg"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}