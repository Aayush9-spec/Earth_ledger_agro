import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { CarbonCalculator } from "@/components/CarbonCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-forest-green" />
              <a href="/" className="text-xl font-bold text-foreground">EarthLedger Agro</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <a href="/dashboard">Dashboard</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/">Home</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Carbon Credit Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate of your carbon sequestration potential based on your farming practices and land area.
          </p>
        </div>

        <CarbonCalculator />

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start tracking your real carbon credits?
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            <a href="/dashboard">Create Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;