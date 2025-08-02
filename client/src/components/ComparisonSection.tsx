import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Code, Bug, Users, Sparkles, FileCode } from "lucide-react"

const ComparisonSection = () => {
  const capacityFeatures = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "True Agentic Coding",
      description: "AI agents that understand context and make intelligent decisions across your entire codebase"
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Multi-File Refactoring", 
      description: "Seamlessly refactor across multiple files with full dependency tracking"
    },
    {
      icon: <Check className="w-5 h-5" />,
      title: "Less Errors",
      description: "Fewer errors and more reliable code"
    },
    {
      icon: <Bug className="w-5 h-5" />,
      title: "Fix errors and bugs automatically",
      description: "Fix errors and bugs automatically without manual intervention"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Advanced Context Awareness", 
      description: "Deep understanding of your project structure, patterns, and conventions"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Seamless Integration",
      description: "Works seamlessly with other tools and workflows"
    }
  ]

  const otherToolsFeatures = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Basic Code Templates",
      description: "Simple code generation without understanding project context",
      negative: true
    },
    {
      icon: <X className="w-5 h-5" />,
      title: "Many back and forths",
      description: "Many back and forths to get the code right",
      negative: true
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: "Single File Focus",
      description: "Limited to working on one file at a time without cross-file awareness",
      negative: true
    },
    {
      icon: <X className="w-5 h-5" />,
      title: "Static Suggestions",
      description: "Pre-built suggestions that don't adapt to your specific needs",
      negative: true
    },
    {
      icon: <Bug className="w-5 h-5" />,
      title: "Endless errors and bugs",
      description: "Endless errors and bugs to fix",
      negative: true
    },
    {
      icon: <X className="w-5 h-5" />,
      title: "Generic Output",
      description: "One-size-fits-all code that doesn't match your project's style",
      negative: true
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="outline" className="mb-3 md:mb-4">Comparison</Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Capacity?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            See how agentic coding stacks up against traditional tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Capacity Column */}
          <Card className="relative overflow-hidden glass-morphism shadow-glass">
            <div className="absolute inset-0 bg-gradient-to-br from-capacity-purple/10 to-capacity-blue/10" />
            <CardHeader className="relative pb-4 md:pb-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-center">
                <span className="text-gradient">Capacity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-4 md:space-y-6 p-4 md:p-6">
              {capacityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-capacity-purple/20 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-base md:text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Other Tools Column */}
          <Card className="relative overflow-hidden glass-morphism shadow-glass">
            <CardHeader className="pb-4 md:pb-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-center text-muted-foreground">
                Other Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
              {otherToolsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4 opacity-70">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-muted rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-base md:text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
