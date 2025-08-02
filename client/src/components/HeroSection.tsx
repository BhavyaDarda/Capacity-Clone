import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mic, Settings, RefreshCw, Sparkles } from "lucide-react"
import SplineIframe from './SplineIframe'

const HeroSection = () => {
  const [prompt, setPrompt] = useState("Build me a dashboard for...")

  const suggestionChips = [
    "Clone Spotify",
    "Mood Tracker", 
    "EliteFootwear",
    "AI Study Buddy"
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Higher z-index to stay on top */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        <iframe 
          src="https://my.spline.design/discover-aIN7HBizjrrrTdEdBfSmeBGk/"
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full"
          style={{ border: 'none' }}
          loading="lazy"
        />
      </div>
      {/* Overlay for better text contrast - Below Spline */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/20 z-10" />
      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4">
            <span className="block text-white md:mb-4 mt-[16px] mb-[16px]">Turn any idea into a</span>
            <span className="block text-white mt-[-15px] mb-[-15px]">working web app</span>
          </h1>

          {/* Prompt Input - Lower positioning to avoid Spline text */}
          <div className="w-full max-w-3xl mx-auto px-4 mt-16 md:mt-24">
            <div className="relative glass-morphism liquid-glass-input rounded-2xl p-4 md:p-6 shadow-glass pointer-events-auto pt-[32px] pb-[32px] ml-[-6px] mr-[-6px]">
              <div className="flex items-center justify-between mb-3 md:mb-4 gap-2">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white/60 rounded-full flex-shrink-0" />
                  <Badge variant="secondary" className="text-xs whitespace-nowrap">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1 flex-shrink-0" />
                    Private Project
                  </Badge>
                </div>
                <div className="flex items-center space-x-1.5 md:space-x-2 flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-capacity-orange" />
                  <span className="text-white text-xs md:text-sm whitespace-nowrap">Claude 4 Sonnet</span>
                  <RefreshCw className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/60" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2 md:space-x-3">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="bg-transparent border-none text-white text-base md:text-lg placeholder-white/60 focus:ring-0 focus:outline-none min-w-0 flex-1 pointer-events-auto"
                  placeholder="Build me a dashboard for..."
                />
                <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0 pointer-events-auto">
                  <Button size="sm" variant="ghost" className="text-white/60 hover:text-white p-1.5 md:p-2 pointer-events-auto">
                    <Mic className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white/60 hover:text-white p-1.5 md:p-2 pointer-events-auto">
                    <Settings className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </Button>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90 px-3 md:px-4 pointer-events-auto">
                    →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4 pointer-events-auto">
            <button
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%] bg-white/20 dark:bg-white/10 border border-green-500/40 dark:border-green-500/30 text-white hover:bg-white/30 dark:hover:bg-white/15 hover:border-green-500/60 dark:hover:border-green-500/50 transition-all duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer whitespace-nowrap pointer-events-auto"
              onClick={() => setPrompt(`Build me a clone spotify...`)}
            >
              Clone Spotify
            </button>
            <button
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%] bg-white/20 dark:bg-white/10 border border-green-500/40 dark:border-green-500/30 text-white hover:bg-white/30 dark:hover:bg-white/15 hover:border-green-500/60 dark:hover:border-green-500/50 transition-all duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer whitespace-nowrap pointer-events-auto"
              onClick={() => setPrompt(`Build me a mood tracker...`)}
            >
              Mood Tracker
            </button>
            <button
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%] bg-white/20 dark:bg-white/10 border border-green-500/40 dark:border-green-500/30 text-white hover:bg-white/30 dark:hover:bg-white/15 hover:border-green-500/60 dark:hover:border-green-500/50 transition-all duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer whitespace-nowrap pointer-events-auto"
              onClick={() => setPrompt(`Build me a elitefootwear...`)}
            >
              EliteFootwear
            </button>
            <button
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%] bg-white/20 dark:bg-white/10 border border-green-500/40 dark:border-green-500/30 text-white hover:bg-white/30 dark:hover:bg-white/15 hover:border-green-500/60 dark:hover:border-green-500/50 transition-all duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer whitespace-nowrap pointer-events-auto"
              onClick={() => setPrompt(`Build me a ai study buddy...`)}
            >
              AI Study Buddy
            </button>
            <button
              className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%] bg-white/20 dark:bg-white/10 border border-green-500/40 dark:border-green-500/30 text-white hover:bg-white/30 dark:hover:bg-white/15 hover:border-green-500/60 dark:hover:border-green-500/50 transition-all duration-300 ease-in-out shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] cursor-pointer flex items-center justify-center pointer-events-auto"
            >
              <RefreshCw className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-capacity-purple/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-capacity-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-capacity-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}

export default HeroSection