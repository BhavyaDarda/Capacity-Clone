import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, TrendingUp, Award, Gift, Target } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Affiliate = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-capacity-purple" />,
      title: "30% Commission",
      description: "Earn 30% recurring commission on every paying customer you refer"
    },
    {
      icon: <Users className="w-6 h-6 text-capacity-blue" />,
      title: "Lifetime Earnings",
      description: "Continue earning for the lifetime of each customer you refer"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-capacity-orange" />,
      title: "Growing Market",
      description: "AI development tools are one of the fastest growing markets"
    },
    {
      icon: <Award className="w-6 h-6 text-capacity-purple" />,
      title: "Premium Support",
      description: "Dedicated affiliate manager and marketing materials"
    },
    {
      icon: <Gift className="w-6 h-6 text-capacity-blue" />,
      title: "Bonus Incentives",
      description: "Extra bonuses for top performers and milestone achievements"
    },
    {
      icon: <Target className="w-6 h-6 text-capacity-orange" />,
      title: "Real-time Tracking",
      description: "Advanced analytics dashboard to track your performance"
    }
  ]

  const tiers = [
    {
      name: "Starter",
      referrals: "1-10 referrals",
      commission: "30%",
      bonuses: ["Marketing materials", "Monthly payouts", "Email support"],
      highlighted: false
    },
    {
      name: "Growth",
      referrals: "11-25 referrals",
      commission: "35%",
      bonuses: ["Everything in Starter", "Priority support", "Custom landing pages", "$500 bonus"],
      highlighted: true
    },
    {
      name: "Pro",
      referrals: "26+ referrals",
      commission: "40%",
      bonuses: ["Everything in Growth", "Dedicated manager", "Co-marketing opportunities", "$2000 bonus"],
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
              <Badge variant="outline" className="mb-4 md:mb-6">Affiliate Program</Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Partner with Capacity and earn up to{" "}
                <span className="text-gradient">40% commission</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                Join our affiliate program and earn recurring revenue by sharing the future of AI-powered development
              </p>
              <Button size="lg" className="bg-capacity-purple hover:bg-capacity-purple/90 text-white">
                Join Affiliate Program
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                Why Partner with Capacity?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of partners earning substantial recurring income
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-morphism shadow-glass hover:shadow-elegant transition-smooth">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                Commission Tiers
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Higher referrals, higher rewards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`glass-morphism shadow-glass hover:shadow-elegant transition-smooth ${
                    tier.highlighted ? 'border-capacity-purple/50 shadow-capacity-purple/20' : ''
                  }`}
                >
                  {tier.highlighted && (
                    <div className="bg-gradient-to-r from-capacity-purple to-capacity-blue text-white text-center py-2 text-sm font-medium rounded-t-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl md:text-2xl font-bold mb-2">{tier.name}</CardTitle>
                    <div className="text-sm text-muted-foreground mb-2">{tier.referrals}</div>
                    <div className="text-3xl md:text-4xl font-bold text-capacity-purple">{tier.commission}</div>
                    <div className="text-sm text-muted-foreground">Commission Rate</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <ul className="space-y-2">
                      {tier.bonuses.map((bonus, bonusIndex) => (
                        <li key={bonusIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-capacity-purple rounded-full mr-3 flex-shrink-0" />
                          {bonus}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                How It Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-capacity-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-capacity-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">Join our affiliate program and get your unique referral link</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-capacity-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-capacity-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share</h3>
                <p className="text-muted-foreground">Share Capacity with your audience using your referral link</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-capacity-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-capacity-orange">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn</h3>
                <p className="text-muted-foreground">Earn commission for every customer that subscribes through your link</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our affiliate program today and start earning recurring commission
              </p>
              <Button size="lg" className="bg-capacity-purple hover:bg-capacity-purple/90 text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Affiliate