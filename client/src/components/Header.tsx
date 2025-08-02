import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, CreditCard, DollarSign, LogIn, UserPlus, Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Link } from "wouter"
import { useIsMobile } from "@/hooks/use-mobile"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    let ticking = false
    let lastScrollY = 0
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Only update if scroll position changed significantly to reduce jitter
      if (Math.abs(scrollY - lastScrollY) < 5) return
      lastScrollY = scrollY
      
      if (!ticking) {
        requestAnimationFrame(() => {
          // Use fixed pixel value instead of percentage for consistency
          const threshold = 300 // pixels
          setIsScrolled(scrollY > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed left-1/2 z-50 transform -translate-x-1/2 transition-all duration-500 ${
        isScrolled || isMobile
          ? 'top-0 w-full max-w-none' 
          : 'top-4 w-11/12 max-w-6xl'
      }`}>
        <div className={`
          flex items-center justify-between
          backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%]
          bg-white/12 dark:bg-black/15
          border border-green-500/40 dark:border-green-500/30
          shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
          transition-all duration-500
          ${isScrolled || isMobile
            ? 'rounded-none py-3 px-4 md:px-8' 
            : 'rounded-full py-3 px-6'
          }
        `}>
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/">
              <span className="flex items-center space-x-2 cursor-pointer">
                <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-capacity-purple" />
                <span className={`text-lg md:text-xl font-bold transition-colors duration-500 ${
                  isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
                }`}>Capacity</span>
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/community">
                <span className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 cursor-pointer ${
                  isScrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white' : 'text-white/80 hover:text-white'
                }`}>
                  Community
                </span>
              </Link>
              <Link href="/pricing">
                <span className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 cursor-pointer ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white' 
                    : 'text-white/70 hover:text-white'
                }`}>
                  <CreditCard className="w-4 h-4" />
                  Pricing
                </span>
              </Link>
              <Link href="/affiliate">
                <span className={`flex items-center gap-2 text-sm font-medium transition-colors duration-500 cursor-pointer ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white' 
                    : 'text-white/70 hover:text-white'
                }`}>
                  <DollarSign className="w-4 h-4" />
                  Affiliate Program
                </span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <ThemeToggle isScrolled={isScrolled} />
            
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center gap-2 text-sm font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white' 
                    : 'text-white hover:text-white/90'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
              <Button 
                size="sm" 
                className={`flex items-center gap-2 bg-capacity-purple hover:bg-capacity-purple/90 border-0 transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-800 hover:text-slate-900 dark:text-white dark:hover:text-white' 
                    : 'text-white hover:text-white/90'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                Get Started
              </Button>
            </div>

            {/* Mobile burger menu button */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden p-2 ${
                isScrolled 
                  ? 'text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white' 
                  : 'text-white hover:text-white/90'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={`
        fixed top-16 left-4 right-4 z-50 md:hidden
        backdrop-filter backdrop-blur-[22px] backdrop-saturate-[180%]
        bg-white/12 dark:bg-black/15
        border border-green-500/40 dark:border-green-500/30
        shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
        rounded-2xl p-6
        transform transition-all duration-300 ease-in-out
        ${isMobileMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-4 opacity-0 pointer-events-none'
        }
      `}>
        <nav className="space-y-4">
          <Link href="/community">
            <span 
              className="flex items-center gap-3 text-white/90 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-medium">Community</span>
            </span>
          </Link>
          <Link href="/pricing">
            <span 
              className="flex items-center gap-3 text-white/90 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CreditCard className="w-5 h-5" />
              <span className="font-medium">Pricing</span>
            </span>
          </Link>
          <Link href="/affiliate">
            <span 
              className="flex items-center gap-3 text-white/90 hover:text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Affiliate Program</span>
            </span>
          </Link>
          
          <div className="pt-4 border-t border-white/20 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-white/90 hover:text-white hover:bg-white/10 border border-white/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </Button>
            <Button 
              className="w-full justify-start gap-3 bg-capacity-purple hover:bg-capacity-purple/90 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <UserPlus className="w-5 h-5" />
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header