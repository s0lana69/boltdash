"use client";

import { useState } from 'react';
import { BarChart, PieChart, VideoIcon, Settings, Users, Zap, ThumbsUp, MessageCircle, AlertTriangle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Week');

  // Mock data for charts
  const performanceData = [
    { day: 'Mon', views: 4000, subs: 20 },
    { day: 'Tue', views: 3000, subs: 15 },
    { day: 'Wed', views: 2000, subs: 5 },
    { day: 'Thu', views: 2780, subs: 12 },
    { day: 'Fri', views: 1890, subs: 8 },
    { day: 'Sat', views: 2390, subs: 10 },
    { day: 'Sun', views: 3490, subs: 18 },
  ];

  const radarData = [
    { subject: 'CTR', A: 120, fullMark: 150 },
    { subject: 'Retention', A: 98, fullMark: 150 },
    { subject: 'Engagement', A: 86, fullMark: 150 },
    { subject: 'Impressions', A: 125, fullMark: 150 },
    { subject: 'Watch Time', A: 110, fullMark: 150 },
  ];

  const navigationItems = [
    { icon: BarChart, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Advanced Analytics', active: false },
    { icon: VideoIcon, label: 'AI Content Studio', active: false },
    { icon: Zap, label: 'Viral Scanner', active: false },
    { icon: Users, label: 'AI Analyzer 2', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  const topPerformingContent = [
    { 
      title: 'In Japan werden RATTEN vereint?! Tierische Geheimnisse', 
      platform: 'YouTube', 
      growth: '+14%', 
      ctr: '8.2%', 
      duration: '2:45/5:00',
      engagement: '3.2%',
      views: '124K',
      thumbnail: '/placeholder-video-1.jpg'
    },
    { 
      title: 'Dieser Hund: Post hat Geschichte geschrieben', 
      platform: 'YouTube', 
      growth: '+0.5%', 
      ctr: '4.1%', 
      duration: '1:30/3:20',
      engagement: '1.8%',
      views: '87K',
      thumbnail: '/placeholder-video-2.jpg'
    },
    { 
      title: 'How Bollywood Changed Indian Fashion Forever', 
      platform: 'YouTube', 
      growth: '+0.4%', 
      ctr: '3.8%', 
      duration: '4:15/8:30',
      engagement: '2.1%',
      views: '65K',
      thumbnail: '/placeholder-video-3.jpg'
    },
    { 
      title: 'Da Dogs Judge You? Watch That Pets #dogfails', 
      platform: 'YouTube', 
      growth: '+0.5%', 
      ctr: '5.2%', 
      duration: '0:45/2:10',
      engagement: '4.7%',
      views: '156K',
      thumbnail: '/placeholder-video-4.jpg'
    }
  ];

  const recentComments = [
    { 
      name: '@lazady', 
      comment: 'Nice one', 
      time: '4 months ago',
      sentiment: 'positive'
    },
    { 
      name: '@WTFaktz', 
      comment: 'Interesting take', 
      time: '4 months ago',
      sentiment: 'neutral'
    },
    { 
      name: '@TechGuru', 
      comment: 'This is misleading information', 
      time: '2 hours ago',
      sentiment: 'negative'
    },
    { 
      name: '@ViewMaster', 
      comment: 'Can you make more videos like this?', 
      time: '1 day ago',
      sentiment: 'positive'
    }
  ];

  const getGrowthColor = (growth) => {
    const value = parseFloat(growth.replace('+', '').replace('%', ''));
    if (value > 5) return 'text-green-500';
    if (value > 1) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSentimentIcon = (sentiment) => {
    switch(sentiment) {
      case 'positive': return <ThumbsUp className="w-4 h-4 text-green-500" />;
      case 'negative': return <ThumbsUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-500" />;
    }
  };

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

          {/* Priority Alert */}
          <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-500/50 rounded-lg flex items-center">
            <AlertTriangle className="text-yellow-500 mr-3" />
            <div>
              <span className="font-medium">⚠️ 'Da Dogs Judge You?' video dropping in retention at 0:48</span>
              <span className="ml-2 text-sm">– trim this section for Shorts!</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 h-[calc(100vh-280px)]">
            {/* Top Performing Content */}
            <Card className="bg-[#1a1a2e] border-gray-700 col-span-2">
              <CardHeader>
                <CardTitle className="text-white text-lg font-medium">Top Performing Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingContent.map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#0f0f1a] rounded-lg hover:bg-[#0f0f1a]/70 transition-colors">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                          <img 
                            src={content.thumbnail} 
                            alt={content.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{content.title}</div>
                          <div className="text-gray-400 text-xs flex items-center mt-1">
                            {content.platform}
                            <span className={`ml-3 ${getGrowthColor(content.growth)}`}>{content.growth}</span>
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            CTR: {content.ctr} | Duration: {content.duration} | Engagement: {content.engagement} | Views: {content.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg font-medium">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="day" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                        itemStyle={{ color: '#F9FAFB' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="views" 
                        stroke="#8B5CF6" 
                        strokeWidth={2}
                        dot={{ stroke: '#8B5CF6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#8B5CF6' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="subs" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ stroke: '#10B981', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#10B981' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-[#0f0f1a] p-3 rounded-lg">
                    <div className="text-green-500 text-sm">🔍 +12% Impressions</div>
                    <div className="text-gray-400 text-xs">vs. last week</div>
                  </div>
                  <div className="bg-[#0f0f1a] p-3 rounded-lg">
                    <div className="text-blue-500 text-sm">⏱️ +1.2 min Avg. Watch Time</div>
                    <div className="text-gray-400 text-xs">vs. last week</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg font-medium">Recent Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentComments.map((comment, index) => (
                    <div key={index} className="p-3 bg-[#0f0f1a] rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="text-white text-sm font-medium">{comment.name}</div>
                        <div className="flex items-center">
                          {getSentimentIcon(comment.sentiment)}
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm mt-1">{comment.comment}</div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-gray-500 text-xs">
                          {comment.time.includes('hours') || comment.time.includes('day') ? (
                            <span className="text-green-500">🆕 {comment.time}</span>
                          ) : (
                            comment.time
                          )}
                        </div>
                        <button className="text-purple-500 hover:text-purple-400 text-xs flex items-center">
                          💬 Respond
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Radar */}
            <Card className="bg-[#1a1a2e] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-lg font-medium">Performance Radar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#374151" />
                      <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
                      <Radar
                        name="Performance"
                        dataKey="A"
                        stroke="#8B5CF6"
                        fill="#8B5CF6"
                        fillOpacity={0.3}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                        itemStyle={{ color: '#F9FAFB' }}
                        formatter={(value, name) => [`${value}%`, name]}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-center text-sm text-gray-400">
                  Your CTR is 12% above similar videos!
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions Bar */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
              ✂️ Create Short from Top Video
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
              🔍 Optimize Title
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}