import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Sparkles } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 projects per month",
        "Basic AI assistance",
        "Standard templates",
        "Community support",
        "Export code"
      ],
      limitations: [
        "No priority support",
        "Limited customization",
        "No team collaboration"
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For professionals and growing teams",
      features: [
        "Unlimited projects",
        "Advanced AI agents",
        "Priority support",
        "Team collaboration",
        "Custom integrations",
        "Advanced analytics",
        "Multi-file refactoring",
        "Context awareness"
      ],
      limitations: [],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom AI training",
        "SSO integration",
        "Advanced security",
        "SLA guarantees",
        "Custom deployment",
        "Priority feature requests"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 md:mb-6">Pricing</Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Choose the perfect plan for your needs
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                Start building with AI today. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden glass-morphism shadow-glass hover:shadow-elegant transition-smooth ${
                    plan.highlighted ? 'border-capacity-purple/50 shadow-capacity-purple/20' : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-capacity-purple to-capacity-blue text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.highlighted ? 'pt-8' : 'pt-6'}`}>
                    <CardTitle className="text-xl md:text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-capacity-purple hover:bg-capacity-purple/90 text-white' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm md:text-base">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm md:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start space-x-2">
                              <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                              <span className="text-sm md:text-base text-muted-foreground">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Everything you need to know about our pricing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Do you offer a free trial?</h3>
                  <p className="text-muted-foreground">No, we do not offer a free trial. Capacity involves AI agents which results in high costs in the background.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Is there a setup fee?</h3>
                  <p className="text-muted-foreground">No setup fees for Starter and Pro plans. Enterprise plans may include a one-time setup fee depending on requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Pricing