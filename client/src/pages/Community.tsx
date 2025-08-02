import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Filter, Heart } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Community = () => {
  const [activeFilter, setActiveFilter] = useState("Recent")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = [
    { name: "Recent", count: null },
    { name: "Discover", count: 10 },
    { name: "Internal Tools", count: null },
    { name: "Website", count: 10 },
    { name: "Personal", count: null },
    { name: "Consumer App", count: null },
    { name: "B2B App", count: null },
    { name: "Prototype", count: null }
  ]

  const projects = [
    {
      id: 1,
      title: "ethereal-hero-beams",
      category: "website",
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-688b80a61a312e9cd8e3a463-preview-1753976555230.jpg&w=3840&q=75",
      likes: null
    },
    {
      id: 2,
      title: "clean-social-scheduler",
      category: "website",
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-688b384627100328474501b6-preview-1753968944904.jpg&w=3840&q=75",
      likes: null
    },
    {
      id: 3,
      title: "blocky-react-world",
      category: "website",
      author: "baboo",
      authorAvatar: "https://originui.com/avatar-80-03.jpg",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6888c017ee3336bdc1b182ac-preview-1754043098545.jpg&w=3840&q=75",
      likes: null
    },
    {
      id: 4,
      title: "landing-page-builder",
      category: "website",
      author: "thomas endris",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLuKtCjpVAnh0fDnUhZ3rUsNkA7sK2PY4j433C28mi9D53KLjey=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68812bad1294415125e6a7b0-preview-1753296108514.jpg&w=3840&q=75",
      likes: null
    },
    {
      id: 5,
      title: "exclusive-art-gallery-marketplace",
      category: "website",
      author: "baboo",
      authorAvatar: "https://originui.com/avatar-80-03.jpg",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-686860be73ca4fb78dff8003-preview.jpg&w=3840&q=75",
      likes: 1
    },
    {
      id: 6,
      title: "smart-mood-insights-companion",
      category: "website",
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68641249363e52b6674a75b4-preview.jpg&w=3840&q=75",
      likes: 3
    },
    {
      id: 7,
      title: "unity-animation-dashboard",
      category: "website",
      author: "seyfi cem baskın",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocL5XT96bPEbr-fSIfgOFwnMHE_p1RVRaBFw50dwM2_am9DjyO8cEQ=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6859cd2948bd4c6122db431d-preview.jpg&w=3840&q=75",
      likes: 1
    },
    {
      id: 8,
      title: "data-analyst-creator",
      category: "website",
      author: "alain undefined",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocKh_jbaiZCclABBacvW85NjLlNpomkwgkwW4s2QBO5EE_Q7Kg=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68590b6648bd4c6122daf8a4-preview.jpg&w=3840&q=75",
      likes: 1
    },
    {
      id: 9,
      title: "ai-crypto-tax-helper",
      category: "website",
      author: "- undefined",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLFmxqXbim3ybFCoZziADmMQg4SP8KxHGmON-LRsdVEMoVZ3Q=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-6858fa6548bd4c6122daee60-preview.jpg&w=3840&q=75",
      likes: null
    },
    {
      id: 10,
      title: "sleek-crypto-dashboard-tracker",
      category: "website",
      author: "samuel rondot",
      authorAvatar: "https://lh3.googleusercontent.com/a/ACg8ocLjULXsEXJGjOpf7SE1fx-GbtOEuCbnrYAM4dE1nRzHjCnlWoG2=s96-c",
      image: "https://capacity.so/_next/image?url=https%3A%2F%2Fcpcty.xyz%2Fscreenshots%2Fproject-68513dadde95a8ca57706fb2-preview.jpg&w=3840&q=75",
      likes: 1
    }
  ]

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                From the Community
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Discover amazing projects built by our community using Capacity
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 glass-morphism"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12 justify-center">
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
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-elegant transition-smooth cursor-pointer glass-morphism">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 md:h-48 object-cover rounded-t-lg group-hover:scale-105 transition-smooth"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=entropy&auto=format&fm=webp&q=75"
                        }}
                      />
                      <Badge variant="secondary" className="absolute top-2 md:top-3 left-2 md:left-3 text-xs">
                        {project.category}
                      </Badge>
                      {project.likes && (
                        <Badge variant="secondary" className="absolute top-2 md:top-3 right-2 md:right-3 text-xs flex items-center gap-1">
                          <Heart className="w-3 h-3" />
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Community