import { Sparkles } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 glass-morphism border-t border-white/10 shadow-glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-capacity-purple" />
            <span className="text-lg md:text-xl font-bold">Capacity</span>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-8">
            <a href="#privacy" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
            <a href="#contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/40 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2024 Capacity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer