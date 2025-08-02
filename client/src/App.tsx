import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Community from "./pages/Community";
import Affiliate from "./pages/Affiliate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="capacity-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Route path="/" component={Index} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/community" component={Community} />
            <Route path="/affiliate" component={Affiliate} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/:rest*" component={NotFound} />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;