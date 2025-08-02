import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, DollarSign, Brain, Code2 } from "lucide-react"

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Build high quality software without writing code.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-8 px-4">
            Use your native language to describe your idea, then watch Capacity do the rest. Creating for the web is faster and easier than ever before.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Create beautiful full-stack web applications in minutes — without writing code.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-20">
          <Card className="relative overflow-hidden group hover:shadow-elegant transition-smooth glass-morphism">
            <div className="absolute inset-0 bg-gradient-to-br from-capacity-blue/10 to-transparent" />
            <CardContent className="relative p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-capacity-blue/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:animate-glow">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-capacity-blue" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">20x faster</h3>
              <p className="text-sm md:text-base text-muted-foreground">Capacity is 20x faster than coding.</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden group hover:shadow-elegant transition-smooth glass-morphism">
            <div className="absolute inset-0 bg-gradient-to-br from-capacity-purple/10 to-transparent" />
            <CardContent className="relative p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-capacity-purple/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:animate-glow">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-capacity-purple" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-2">10x cheaper</h3>
              <p className="text-sm md:text-base text-muted-foreground">Capacity is 10x cheaper than hiring a developer.</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 px-4">For Those Who Build</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Transform your ideas into functional applications without writing code, powered by our cutting-edge AI platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="group hover:shadow-card transition-smooth glass-morphism">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-capacity-blue/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:animate-float">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-capacity-blue" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Lightning fast</h3>
              <p className="text-sm md:text-base text-muted-foreground">Build 20x faster than traditional coding methods, turning your ideas into reality in record time.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth glass-morphism">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-capacity-purple/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:animate-float">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-capacity-purple" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Powerful</h3>
              <p className="text-sm md:text-base text-muted-foreground">Create sophisticated full-stack web applications with all the features you need, no compromises.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth glass-morphism">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-capacity-orange/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:animate-float">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-capacity-orange" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Cost-effective</h3>
              <p className="text-sm md:text-base text-muted-foreground">10x cheaper than hiring a developer, with professional results and zero technical debt.</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-smooth glass-morphism">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-capacity-blue/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:animate-float">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-capacity-blue" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">AI-powered</h3>
              <p className="text-sm md:text-base text-muted-foreground">Simply describe your project in natural language and our AI handles everything from design to deployment.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection