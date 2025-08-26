// ... previous imports remain the same

export default function Dashboard() {
  // ... existing state and data arrays remain the same

  return (
    <div className="h-screen bg-[#1a1a1a] text-white overflow-hidden">
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

        {/* Main Menu - updated active state */}
        {navigationItems.map((item, index) => (
          <div key={index} className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors relative ${
            item.active 
              ? 'bg-neon-violet text-white shadow-[0_0_10px_rgba(168,85,247,0.7)]' 
              : 'text-gray-300 hover:bg-gray-700/50'
          }`}>
            {/* ... rest of menu item */}
          </div>
        ))}

        {/* ... rest of sidebar remains the same */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-hidden">
        {/* ... header remains the same */}

        {/* Transfer Actions - updated icon containers */}
        {transferActions.map((action, index) => (
          <Card key={index} className="bg-[#2a2a2a] border-gray-700 hover:bg-[#3a3a3a] transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                {/* ... text remains same */}
                <div className="w-10 h-10 border border-neon-violet rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                  <action.icon className="text-neon-violet" size={18} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* ... rest of the content */}

        {/* Credit Card - updated gradient */}
        <div className="bg-gradient-to-br from-neon-violet to-neon-violetDark rounded-2xl p-6 text-white mb-4 relative overflow-hidden">
          {/* ... card content remains same */}
        </div>

        {/* Stats - updated progress circle */}
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
              stroke="#a855f7"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={`${65 * 1.5} ${100 * 1.5}`}
              strokeLinecap="round"
            />
          </svg>
          {/* ... rest remains same */}
        </div>

        {/* Bills Section - updated active bill */}
        <div className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg border border-neon-violet/30 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-neon-violet/20 rounded-lg flex items-center justify-center mr-3">
              <Droplets className="text-neon-violet" size={16} />
            </div>
            <span className="text-white text-sm">Water Bill</span>
          </div>
          <div className="w-5 h-5 bg-neon-violet/20 rounded flex items-center justify-center">
            <span className="text-neon-violet text-xs">🔥</span>
          </div>
        </div>

        {/* ... rest of the file remains same */}
      </div>
    </div>
  );
}