import { 
  BarChart3, Building, CreditCard, Users, Calculator, Settings, 
  Calendar, Utensils, FileText, LogOut, Droplets, Wifi, Zap 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <div className="flex">
        {/* Sidebar - 280px width with proper spacing */}
        <div className="w-[280px] bg-[#0f0f0f] min-h-screen p-6">
          {/* Logo */}
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 mr-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path fill="#ff6b35" d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6z"/>
                <path fill="#fff" d="M24 12c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12 5.37-12 12-12z"/>
                <path fill="#ff6b35" d="M24 15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z"/>
              </svg>
            </div>
            <div>
              <div className="text-[#ff6b35] font-bold text-xl">Dacati</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">BANK</div>
            </div>
          </div>

          {/* Main Menu - 16px spacing between items */}
          <div className="mb-10">
            <h3 className="text-gray-500 text-sm font-medium mb-6">Main Menu</h3>
            <nav className="space-y-4">
              <div className="flex items-center px-4 py-4 rounded-lg bg-[#ff6b35] text-white relative">
                <BarChart3 size={22} className="mr-4" />
                <span className="text-base font-medium">Dashboard</span>
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l-full"></div>
              </div>
              {['Accounts', 'Cards', 'Contacts', 'Loan Calculator', 'Settings'].map((item, index) => (
                <div key={index} className="flex items-center px-4 py-4 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">
                  {item === 'Accounts' && <Building size={22} className="mr-4" />}
                  {item === 'Cards' && <CreditCard size={22} className="mr-4" />}
                  {item === 'Contacts' && <Users size={22} className="mr-4" />}
                  {item === 'Loan Calculator' && <Calculator size={22} className="mr-4" />}
                  {item === 'Settings' && <Settings size={22} className="mr-4" />}
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Schedule Payments - 16px spacing between items */}
          <div className="mb-10">
            <div className="border-t border-gray-800 my-6"></div>
            <h3 className="text-gray-500 text-sm font-medium mb-6">Schedule Payments</h3>
            <nav className="space-y-4">
              {['Monthly Rent', 'Food Payment', 'Utility Bills'].map((item, index) => (
                <div key={index} className="flex items-center px-4 py-4 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">
                  {item === 'Monthly Rent' && <Calendar size={22} className="mr-4" />}
                  {item === 'Food Payment' && <Utensils size={22} className="mr-4" />}
                  {item === 'Utility Bills' && <FileText size={22} className="mr-4" />}
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="mt-auto">
            <div className="flex items-center px-4 py-4 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">
              <LogOut size={22} className="mr-4" />
              <span className="text-base font-medium">Logout</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-400">Welcome back, John</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-[#2a2a2a] rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
                />
                <svg 
                  className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <div className="bg-[#ff6b35] w-10 h-10 rounded-full flex items-center justify-center">
                <span className="font-bold">J</span>
              </div>
            </div>
          </div>

          {/* Transfer Actions - Balanced spacing */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { title: "Send Money", icon: "💸" },
              { title: "Request Payment", icon: "📥" },
              { title: "Mobile Top-up", icon: "📱" },
              { title: "Electricity", icon: "💡" }
            ].map((item, i) => (
              <Card key={i} className="bg-[#2a2a2a] border-[#3a3a3a] hover:bg-[#2a2a2a]/80 transition-colors cursor-pointer h-full">
                <CardContent className="p-5 flex flex-col items-center justify-center h-full">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-center font-medium">{item.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid - 2-column layout */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - 60% width */}
            <div className="col-span-2 space-y-8">
              {/* Total Balance Chart */}
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold">Total Balance</h2>
                      <p className="text-3xl font-bold mt-2">$12,489.68</p>
                      <p className="text-green-500 flex items-center mt-1">
                        <span>↑ 12.4%</span>
                        <span className="text-gray-400 ml-2">from last month</span>
                      </p>
                    </div>
                    <div>
                      <button className="bg-[#ff6b35] text-white px-4 py-2 rounded-lg font-medium">
                        Withdraw
                      </button>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="relative h-64 rounded-lg p-4">
                    {/* Chart implementation would go here */}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="p-8">
                  <h3 className="text-white text-xl font-medium mb-6">Recent Transactions</h3>
                  <div className="space-y-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center mr-4">
                            <span className="text-xl">🛒</span>
                          </div>
                          <div>
                            <div className="font-medium">Grocery Store</div>
                            <div className="text-gray-400 text-sm">June 12, 2023</div>
                          </div>
                        </div>
                        <div className="font-bold">-$86.00</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - 40% width */}
            <div className="col-span-1 space-y-8">
              {/* Cards Section */}
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="p-8">
                  <h3 className="text-white text-xl font-medium mb-6">Cards</h3>
                  <div className="bg-gradient-to-r from-[#ff6b35] to-[#ff9e35] rounded-xl p-6 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-sm">Balance</div>
                        <div className="text-2xl font-bold mt-1">$5,246.80</div>
                      </div>
                      <div className="text-3xl">💳</div>
                    </div>
                    <div className="mt-6">
                      <div className="flex justify-between text-sm">
                        <div>**** 9838</div>
                        <div>08/25</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bills Section - Improved styling */}
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="p-8">
                  <h3 className="text-white text-xl font-medium mb-6">Bills</h3>
                  <div className="space-y-5">
                    {[
                      { icon: <Droplets className="text-[#ff6b35]" size={20} />, name: "Water Bill" },
                      { icon: <Wifi className="text-[#ff6b35]" size={20} />, name: "Broadband" },
                      { icon: <Zap className="text-[#ff6b35]" size={20} />, name: "Electricity" }
                    ].map((bill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] hover:border-[#ff6b35]/50 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#ff6b35]/20 rounded-lg flex items-center justify-center mr-4">
                            {bill.icon}
                          </div>
                          <span className="text-white text-base">{bill.name}</span>
                        </div>
                        <div className="w-6 h-6 bg-[#ff6b35]/20 rounded flex items-center justify-center">
                          <span className="text-[#ff6b35] text-xs">
                            {index === 0 ? '🔥' : index === 1 ? '📶' : '⚡'}
                          </span>
                        </div>
                      </div>
                    ))}
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