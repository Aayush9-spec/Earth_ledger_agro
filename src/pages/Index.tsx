import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Leaf, BarChart3, Shield, Users, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-agroforestry.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { ThemeSelector } from "@/components/ThemeSelector";

const Index = () => {
  const parallaxRef = useParallax(0.3);
  
  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-forest-green" />
              <span className="text-xl font-bold text-foreground">EarthLedger Agro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-forest-green transition-colors">Features</a>
              <a href="/benefits" className="text-muted-foreground hover:text-forest-green transition-colors">Benefits</a>
              <a href="/marketplace" className="text-muted-foreground hover:text-forest-green transition-colors">Marketplace</a>
              <a href="/calculator" className="text-muted-foreground hover:text-forest-green transition-colors">Calculator</a>
            </nav>
            <Button variant="default" className="bg-gradient-primary hover:opacity-90">
              <a href="/dashboard">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                MRV Solutions for India
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Scalable Carbon Credit
                <span className="text-forest-green"> Tracking</span> for Farmers
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering smallholder farmers with automated MRV systems for agroforestry and rice-based carbon projects. 
                Affordable, accurate, and designed for India's agricultural landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  <a href="/dashboard">Start Tracking Carbon</a>
                </Button>
                <Button size="lg" variant="outline">
                  <a href="/calculator">Try Calculator</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-green">10,000+</div>
                  <div className="text-sm text-muted-foreground">Farmers Registered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-green">5M+</div>
                  <div className="text-sm text-muted-foreground">Carbon Credits Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-forest-green">85%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src={heroImage}
                alt="Agroforestry and rice farming with technology integration"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/50">
        <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive MRV Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built specifically for India's smallholder farmers, our platform addresses the critical gaps in 
              current carbon credit systems with affordable, scalable technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calculator className="h-8 w-8 text-forest-green" />}
              title="Automated Calculation"
              description="AI-powered carbon credit calculation based on real field data and satellite imagery."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-forest-green" />}
              title="Verification & Reporting"
              description="Automated verification protocols that integrate with national and global carbon registries."
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8 text-forest-green" />}
              title="Mobile-First Design"
              description="Farmer-friendly mobile interface for easy data collection and project management in the field."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-forest-green" />}
              title="Real-Time Analytics"
              description="Live monitoring of carbon sequestration progress with detailed insights and projections."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-forest-green" />}
              title="Community Support"
              description="Connect with other farmers, share best practices, and access expert guidance."
            />
            <FeatureCard
              icon={<Leaf className="h-8 w-8 text-forest-green" />}
              title="Agroforestry Focus"
              description="Specialized tools for agroforestry systems and climate-smart rice cultivation practices."
            />
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThemeSelector />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-forest relative overflow-hidden">
        {/* Skeuomorphic texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Inner container with skeuomorphic styling */}
        <div className="relative bg-gradient-to-br from-white/5 to-black/10 backdrop-blur-sm border border-white/10 rounded-3xl mx-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.3),_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="max-w-4xl mx-auto text-center px-8 py-16 sm:px-12 lg:px-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
              Ready to Transform Your Farm into a Carbon Credit Generator?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 drop-shadow-md">
              Join thousands of farmers already earning from sustainable practices. 
              Start your carbon credit journey today.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-b from-white to-gray-100 text-gray-800 hover:from-gray-50 hover:to-gray-200 shadow-[0_4px_14px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6)] border border-gray-300 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              <a href="/dashboard">Start Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-forest-green" />
              <span className="font-semibold text-foreground">EarthLedger Agro</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 EarthLedger Agro. Empowering sustainable agriculture.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default Index;