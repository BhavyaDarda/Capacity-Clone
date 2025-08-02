import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

interface ThemeToggleProps {
  isScrolled?: boolean
}

export function ThemeToggle({ isScrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getGradient = () => {
    switch (theme) {
      case "light":
        return "from-orange-400 to-yellow-500"
      case "dark":
        return "from-purple-400 to-blue-500"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getGlowEffect = () => {
    switch (theme) {
      case "light":
        return "0 0 25px rgba(251, 146, 60, 0.7)"
      case "dark":
        return "0 0 25px rgba(147, 51, 234, 0.5)"
      default:
        return "0 0 25px rgba(107, 114, 128, 0.4)"
    }
  }

  const menuVariants = {
    closed: {
      scale: 0.95,
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    closed: { x: -10, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
        ease: "easeOut"
      }
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative h-10 w-10 rounded-full p-0 glass-morphism border border-white/20 hover:border-white/40 transition-all duration-300 group overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${getGradient()} opacity-0 group-hover:opacity-30 rounded-full`}
            initial={{ scale: 0.8, rotate: 0 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 180,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Icon animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ 
                rotate: -270, 
                scale: 0.5, 
                opacity: 0,
                filter: "blur(4px)"
              }}
              animate={{ 
                rotate: 0, 
                scale: 1, 
                opacity: 1,
                filter: "blur(0px)"
              }}
              exit={{ 
                rotate: 270, 
                scale: 0.5, 
                opacity: 0,
                filter: "blur(4px)"
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.2 }
              }}
              className={`relative z-10 transition-colors duration-300 ${
                theme === "light" 
                  ? isScrolled 
                    ? "text-orange-400 group-hover:text-orange-300" 
                    : "text-orange-300 group-hover:text-orange-200"
                  : isScrolled 
                    ? "text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white/90" 
                    : "text-white group-hover:text-white/90"
              }`}
            >
              {getIcon()}
            </motion.div>
          </AnimatePresence>

          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" }}
            whileHover={{ 
              boxShadow: getGlowEffect()
            }}
            transition={{ 
              duration: 0.4,
              ease: "easeInOut"
            }}
          />

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{
              scale: [1, 1.3, 1.6],
              opacity: [0, 0.3, 0],
              transition: {
                duration: 0.6,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 0.3
              }
            }}
          >
            <div className={`w-full h-full rounded-full border-2 ${
              theme === "light" ? "border-orange-400/40" :
              theme === "dark" ? "border-purple-400/30" :
              "border-gray-400/30"
            }`} />
          </motion.div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="glass-morphism border border-white/20 bg-black/90 backdrop-blur-xl min-w-[140px] p-2 z-50"
        sideOffset={8}
      >
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="space-y-1"
        >
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="cursor-pointer hover:bg-white/15 focus:bg-white/15 transition-colors duration-200 group px-3 py-2 rounded-md flex items-center"
          >
            <motion.div
              variants={itemVariants}
              custom={0}
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Sun className="mr-3 h-4 w-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
            </motion.div>
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-slate-800 dark:text-white/90 group-hover:text-slate-900 dark:group-hover:text-white" 
                : "text-white/90 group-hover:text-white"
            }`}>Light</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="cursor-pointer hover:bg-white/15 focus:bg-white/15 transition-colors duration-200 group px-3 py-2 rounded-md flex items-center"
          >
            <motion.div
              variants={itemVariants}
              custom={1}
              whileHover={{ rotate: -180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Moon className="mr-3 h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </motion.div>
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-slate-800 dark:text-white/90 group-hover:text-slate-900 dark:group-hover:text-white" 
                : "text-white/90 group-hover:text-white"
            }`}>Dark</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="cursor-pointer hover:bg-white/15 focus:bg-white/15 transition-colors duration-200 group px-3 py-2 rounded-md flex items-center"
          >
            <motion.div
              variants={itemVariants}
              custom={2}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Monitor className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-300 transition-colors" />
            </motion.div>
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isScrolled 
                ? "text-slate-800 dark:text-white/90 group-hover:text-slate-900 dark:group-hover:text-white" 
                : "text-white/90 group-hover:text-white"
            }`}>System</span>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}