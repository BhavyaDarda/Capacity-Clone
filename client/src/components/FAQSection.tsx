import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "What can I build with Capacity?",
      answer: "You can build full-stack web apps, landing pages, internal tools, and MVPs — all powered by AI. Whether you're a solo founder or a team, Capacity helps you go from idea to production in minutes."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Not necessarily. Capacity is built for makers of all backgrounds. You can describe your project in plain English, and the AI will generate the code. If you're a developer, you can dive in and customize anything."
    },
    {
      question: "Is the code exportable?",
      answer: "Yes — you have full access to the generated code. You can export it, self-host it, or continue working locally using your preferred tools and frameworks."
    },
    {
      question: "Can I collaborate with others?",
      answer: "Absolutely. You can invite collaborators to your projects, share progress, and even hand off to developers or clients — all in one place."
    },
    {
      question: "How is Capacity different from other AI tools?",
      answer: "Capacity doesn't just generate UI components — it builds full, working apps with clean architecture, auth, APIs, and real business logic. It's like having a full-stack dev on autopilot."
    },
    {
      question: "Is there a free trial?",
      answer: "No, we do not offer a free trial. Capacity involves AI agents which results in high costs in the background."
    },
    {
      question: "What tech stack does Capacity use?",
      answer: "Capacity generates modern apps using Next.js, Tailwind CSS, TypeScript, and REST or tRPC for APIs — ready for deployment on platforms like Vercel or AWS."
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 px-4">
              Frequently <span className="text-gradient">Asked</span> Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Answers to the most common questions about Capacity.so.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4 glass-morphism rounded-xl p-4 md:p-6 shadow-glass">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="frost-light rounded-lg px-3 md:px-6 border-none shadow-glass hover:frost-medium transition-smooth"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-capacity-purple transition-smooth py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 pb-3 md:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection