import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Project {
  id: string
  title: string
  image: string
  author: string
  authorAvatar: string
  category: string
  likes?: number
}

const CommunitySection = () => {
  const [activeFilter, setActiveFilter] = useState("Recent")

  const filters = [
    { name: "Recent", active: true },
    { name: "Discover", count: 8 },
    { name: "Internal Tools" },
    { name: "Website", count: 8 },
    { name: "Personal" },
    { name: "Consumer App" },
    { name: "B2B App" },
    { name: "Prototype" }
  ]

  const projects: Project[] = [
    {
      id: "1",
      title: "blocky-react-world",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6888c017ee3336bdc1b182ac-preview-1753796050127.jpg&w=3840&q=75",
      author: "baboo",
      authorAvatar: "https://originui.com/avatar-80-03.jpg",
      category: "website"
    },
    {
      id: "2", 
      title: "landing-page-builder",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68812bad1294415125e6a7b0-preview-1753296108514.jpg&w=3840&q=75",
      author: "thomas endris",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLuKtCjpVAnh0fDnUhZ3rUsNkA7sK2PY4j433C28mi9D53KLjey=s96-c",
      category: "website"
    },
    {
      id: "3",
      title: "exclusive-art-gallery-marketplace", 
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-686860be73ca4fb78dff8003-preview.jpg&w=3840&q=75",
      author: "baboo",
      authorAvatar: "https://originui.com/avatar-80-03.jpg",
      category: "website",
      likes: 1
    },
    {
      id: "4",
      title: "smart-mood-insights-companion",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68641249363e52b6674a75b4-preview.jpg&w=3840&q=75", 
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c",
      category: "website",
      likes: 3
    },
    {
      id: "5",
      title: "unity-animation-dashboard",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6859cd2948bd4c6122db431d-preview.jpg&w=3840&q=75",
      author: "seyfi cem baskın", 
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocL5XT96bPEbr-fSIfgOFwnMHE_p1RVRaBFw50dwM2_am9DjyO8cEQ=s96-c",
      category: "website",
      likes: 1
    },
    {
      id: "6",
      title: "data-analyst-creator",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68590b6648bd4c6122daf8a4-preview.jpg&w=3840&q=75",
      author: "alain",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKh_jbaiZCclABBacvW85NjLlNpomkwgkwW4s2QBO5EE_Q7Kg=s96-c",
      category: "website",
      likes: 1
    },
    {
      id: "7",
      title: "ai-crypto-tax-helper", 
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6858fa6548bd4c6122daee60-preview.jpg&w=3840&q=75",
      author: "anonymous",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLFmxqXbim3ybFCoZziADmMQg4SP8KxHGmON-LRsdVEMoVZ3Q=s96-c",
      category: "website"
    },
    {
      id: "8",
      title: "sleek-crypto-dashboard-tracker",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68513dadde95a8ca57706fb2-preview.jpg&w=3840&q=75",
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c", 
      category: "website",
      likes: 1
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="glass-morphism rounded-2xl md:rounded-3xl shadow-glass p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">From the Community</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8 justify-center md:justify-start">
            {filters.map((filter, index) => (
              <Button
                key={index}
                variant={activeFilter === filter.name ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.name)}
                className={`transition-smooth glass-morphism text-xs md:text-sm ${
                  activeFilter === filter.name 
                    ? "bg-capacity-purple text-white hover:bg-capacity-purple/90" 
                    : "hover:frost-medium"
                }`}
              >
                {filter.name}
                {filter.count && (
                  <Badge variant="secondary" className="ml-1 md:ml-2 text-xs">
                    {filter.count}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-elegant transition-smooth cursor-pointer glass-morphism">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 md:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-smooth"
                    />
                    <Badge variant="category" className="absolute top-2 md:top-3 left-2 md:left-3 text-xs">
                      {project.category}
                    </Badge>
                    {project.likes && (
                      <Badge variant="secondary" className="absolute top-2 md:top-3 right-2 md:right-3 text-xs">
                        {project.likes}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-3 md:p-4">
                    <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3 group-hover:text-capacity-purple transition-smooth line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-5 h-5 md:w-6 md:h-6">
                        <AvatarImage src={project.authorAvatar} alt={project.author} />
                        <AvatarFallback>{project.author.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs md:text-sm text-muted-foreground truncate">
                        by <strong>{project.author}</strong>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection