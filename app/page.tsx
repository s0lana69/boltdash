"use client";

import { useState } from 'react';
import { BarChart, PieChart, Video, Zap, Users, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Week');

  const navigationItems = [
    { icon: BarChart, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Advanced Analytics', active: false },
    { icon: Video, label: 'AI Content Studio', active: false },
    { icon: Zap, label: 'Viral Scanner', active: false },
    { icon: Users, label: 'AI Analyzer 2', active: false },
    { icon: Settings, label: 'Settings', active: false },
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
              <div className="text-purple-500 font-bold text-xl pulse-text">
                TrueViral.ai
              </div>
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
          {/* YouTube Logo Header */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path 
                  fill="#FF0000" 
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 h-[calc(100vh-200px)]">
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