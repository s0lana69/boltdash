// ... existing imports ...

export default function Dashboard() {
  const [isDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <div className="flex">
        {/* Sidebar - Increased width to 280px */}
        <div className="w-[280px] bg-[#0f0f0f] min-h-screen p-6">
          {/* Logo */}
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 mr-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {/* ... logo SVG ... */}
              </svg>
            </div>
            <div>
              <div className="text-[#ff6b35] font-bold text-xl">Dacati</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">BANK</div>
            </div>
          </div>

          {/* Main Menu - Increased spacing */}
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
                  {/* ... icons ... */}
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Schedule Payments - Increased spacing */}
          <div className="mb-10">
            <div className="border-t border-gray-800 my-6"></div>
            <h3 className="text-gray-500 text-sm font-medium mb-6">Schedule Payments</h3>
            <nav className="space-y-4">
              {['Monthly Rent', 'Food Payment', 'Utility Bills'].map((item, index) => (
                <div key={index} className="flex items-center px-4 py-4 rounded-lg text-gray-400 hover:bg-gray-800/50 cursor-pointer">
                  {/* ... icons ... */}
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
            {/* ... header content ... */}
          </div>

          {/* Transfer Actions - Balanced spacing */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="bg-[#2a2a2a] border-[#3a3a3a] hover:bg-[#2a2a2a]/80 transition-colors cursor-pointer h-full">
                <CardContent className="p-5">
                  {/* ... transfer card content ... */}
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
                  {/* ... chart content with proper margins ... */}
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="p-8">
                  <h3 className="text-white text-xl font-medium mb-6">Recent Transactions</h3>
                  <div className="space-y-6">
                    {/* ... transaction items ... */}
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
                  {/* ... card content ... */}
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