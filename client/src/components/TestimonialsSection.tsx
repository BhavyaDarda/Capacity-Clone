import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Capacity turned my weekend project into a $5K MRR business in just 4 months. As someone who used to spend hours on Stack Overflow, this feels like cheating—in the best way possible.",
      author: "Leo Martinez",
      role: "Indie Developer, ProductivityOS",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "I've tried numerous no-code tools, but Capacity is different. It actually understands what I'm trying to build and generates production-ready code.",
      author: "Sarah Chen", 
      role: "Founder, DataFlow",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "From idea to MVP in 48 hours. Capacity is a game-changer for rapid prototyping and validation.",
      author: "Mike Thompson",
      role: "Technical Lead, StartupX", 
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    }
  ]

  const features = [
    {
      title: "Custom control",
      description: "100%"
    },
    {
      title: "Production-grade from day one",
      description: "Every project is generated with clean architecture, security best practices, and scalable infrastructure built in."
    },
    {
      title: "AI that understands your vision", 
      description: "Just describe what you want to build — Capacity translates your idea into real code, UI, and logic in seconds."
    },
    {
      title: "Built to scale",
      description: "Capacity generates applications ready to grow — with Next.js, API routing, auth, and best practices out of the box."
    },
    {
      title: "For solo devs and small teams",
      description: "Whether you're building alone or with collaborators, Capacity keeps everyone in sync with smart project context and versioning."
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-smooth glass-morphism">
              <CardContent className="p-4 md:p-6">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-capacity-purple/60 mb-3 md:mb-4" />
                <blockquote className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8 md:w-10 md:h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection