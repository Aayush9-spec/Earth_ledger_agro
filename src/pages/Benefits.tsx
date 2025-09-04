import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Users, 
  Zap,
  Shield,
  Globe,
  Heart,
  CheckCircle
} from "lucide-react";

const Benefits = () => {
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
            <nav className="hidden md:flex space-x-6">
              <a href="/dashboard" className="text-muted-foreground hover:text-forest-green transition-colors">Dashboard</a>
              <a href="/marketplace" className="text-muted-foreground hover:text-forest-green transition-colors">Marketplace</a>
              <a href="/calculator" className="text-muted-foreground hover:text-forest-green transition-colors">Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Carbon Credit Benefits</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your Farm into a
            <span className="text-forest-green"> Revenue Generator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how carbon credits can provide multiple streams of income while helping you build 
            a sustainable and environmentally responsible farming operation.
          </p>
        </div>

        <Tabs defaultValue="financial" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
            <TabsTrigger value="market">Market Access</TabsTrigger>
          </TabsList>

          <TabsContent value="financial" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                icon={<DollarSign className="h-8 w-8 text-harvest-gold" />}
                title="Additional Revenue Stream"
                description="Earn ₹2,000-8,000 per hectare annually through carbon credit sales"
                highlight="Average ₹4,500/hectare"
              />
              <BenefitCard
                icon={<TrendingUp className="h-8 w-8 text-forest-green" />}
                title="Price Appreciation"
                description="Carbon credit prices have increased 300% in the last 3 years"
                highlight="Growing market value"
              />
              <BenefitCard
                icon={<Shield className="h-8 w-8 text-sky-blue" />}
                title="Income Diversification"
                description="Reduce dependency on crop prices with stable carbon income"
                highlight="Risk mitigation"
              />
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-forest-green" />
                  <span>Revenue Projection Calculator</span>
                </CardTitle>
                <CardDescription>See your potential earnings over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Year 1-2 (Establishment)</span>
                        <span className="font-semibold text-harvest-gold">₹1,500/ha</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Year 3-5 (Growth Phase)</span>
                        <span className="font-semibold text-forest-green">₹4,500/ha</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Year 6+ (Maturity)</span>
                        <span className="font-semibold text-sky-blue">₹8,000/ha</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-4">10-Year ROI Example</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Initial Investment:</span>
                        <span>₹15,000/ha</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Carbon Revenue:</span>
                        <span className="text-forest-green font-semibold">₹45,000/ha</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crop Yield Improvement:</span>
                        <span className="text-forest-green font-semibold">₹25,000/ha</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Net Profit:</span>
                        <span className="text-forest-green">₹55,000/ha</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="environmental" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                icon={<Globe className="h-8 w-8 text-sky-blue" />}
                title="Climate Impact"
                description="Sequester 5-15 tonnes CO2 per hectare annually"
                highlight="Measurable impact"
              />
              <BenefitCard
                icon={<Leaf className="h-8 w-8 text-forest-green" />}
                title="Soil Health Improvement"
                description="Increased organic matter and water retention capacity"
                highlight="20-40% improvement"
              />
              <BenefitCard
                icon={<Heart className="h-8 w-8 text-destructive" />}
                title="Biodiversity Enhancement"
                description="Support 300% more species with agroforestry systems"
                highlight="Ecosystem restoration"
              />
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Environmental Impact Tracker</CardTitle>
                <CardDescription>Your contribution to global climate goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-secondary/30 rounded-lg">
                    <Globe className="h-12 w-12 text-sky-blue mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">2,847</div>
                    <div className="text-sm text-muted-foreground">Tonnes CO2 Sequestered</div>
                    <div className="text-xs text-forest-green mt-1">= 618 cars off road for 1 year</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/30 rounded-lg">
                    <Leaf className="h-12 w-12 text-forest-green mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">156</div>
                    <div className="text-sm text-muted-foreground">Trees Equivalent</div>
                    <div className="text-xs text-forest-green mt-1">= 12 acres of forest</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/30 rounded-lg">
                    <Heart className="h-12 w-12 text-destructive mx-auto mb-4" />
                    <div className="text-2xl font-bold text-foreground">78</div>
                    <div className="text-sm text-muted-foreground">Species Supported</div>
                    <div className="text-xs text-forest-green mt-1">Birds, insects, mammals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                icon={<Users className="h-8 w-8 text-sky-blue" />}
                title="Community Development"
                description="Join 10,000+ farmers in sustainable agriculture movement"
                highlight="Growing community"
              />
              <BenefitCard
                icon={<Award className="h-8 w-8 text-harvest-gold" />}
                title="Recognition & Awards"
                description="Get certified as a climate-smart farmer"
                highlight="Social recognition"
              />
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-forest-green" />}
                title="Knowledge Sharing"
                description="Access to training, workshops, and best practices"
                highlight="Skill development"
              />
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Community Impact</CardTitle>
                <CardDescription>How you're contributing to rural development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Users className="h-8 w-8 text-sky-blue" />
                      <div>
                        <div className="font-semibold text-foreground">Local Employment</div>
                        <div className="text-sm text-muted-foreground">Created 5 additional jobs in your village</div>
                      </div>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Award className="h-8 w-8 text-harvest-gold" />
                      <div>
                        <div className="font-semibold text-foreground">Sustainability Leader</div>
                        <div className="text-sm text-muted-foreground">Recognized by District Collector</div>
                      </div>
                    </div>
                    <Badge variant="secondary">Certified</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Zap className="h-8 w-8 text-forest-green" />
                      <div>
                        <div className="font-semibold text-foreground">Knowledge Transfer</div>
                        <div className="text-sm text-muted-foreground">Trained 12 neighboring farmers</div>
                      </div>
                    </div>
                    <Badge variant="outline">Ongoing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certification" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-forest-green" />
                    <span>Certification Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CertificationBenefit
                    title="International Recognition"
                    description="Verified Carbon Standard (VCS) compliance"
                    status="active"
                  />
                  <CertificationBenefit
                    title="Premium Pricing"
                    description="15-20% higher prices for certified credits"
                    status="active"
                  />
                  <CertificationBenefit
                    title="Market Access"
                    description="Access to global carbon markets"
                    status="active"
                  />
                  <CertificationBenefit
                    title="Quality Assurance"
                    description="Third-party verification and monitoring"
                    status="pending"
                  />
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Your Certificates</CardTitle>
                  <CardDescription>Track your certification status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-forest-green/20 rounded-lg bg-forest-green/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">VCS Certificate</span>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Valid until: Dec 2025</div>
                    <Button size="sm" variant="outline">Download PDF</Button>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Gold Standard</span>
                      <Badge variant="secondary">Processing</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">Expected: Jan 2025</div>
                    <Button size="sm" variant="outline" disabled>Pending Review</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Market Access Benefits</CardTitle>
                <CardDescription>Unlock premium markets and buyer connections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MarketAccess
                    title="Corporate Buyers"
                    description="Direct access to Fortune 500 companies"
                    companies={["Microsoft", "Google", "Walmart"]}
                    price="₹3,200/tCO2e"
                  />
                  <MarketAccess
                    title="Carbon Exchanges"
                    description="Trade on global carbon markets"
                    companies={["ICE", "EEX", "Xpansiv"]}
                    price="₹2,800/tCO2e"
                  />
                  <MarketAccess
                    title="Government Programs"
                    description="Participate in national carbon schemes"
                    companies={["Ministry of Environment", "NABARD"]}
                    price="₹2,400/tCO2e"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-forest rounded-lg">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Ready to Start Earning from Carbon Credits?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of farmers already benefiting from sustainable agriculture. 
            Start your carbon credit journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <a href="/dashboard">Start Your Project</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="/calculator">Calculate Potential</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description, highlight }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}) => (
  <Card className="shadow-soft hover:shadow-medium transition-shadow">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <Badge variant="secondary" className="text-xs">{highlight}</Badge>
    </CardContent>
  </Card>
);

const CertificationBenefit = ({ title, description, status }: {
  title: string;
  description: string;
  status: 'active' | 'pending';
}) => (
  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
    <div>
      <div className="font-medium text-foreground">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
    <CheckCircle 
      className={`h-5 w-5 ${status === 'active' ? 'text-forest-green' : 'text-muted-foreground'}`} 
    />
  </div>
);

const MarketAccess = ({ title, description, companies, price }: {
  title: string;
  description: string;
  companies: string[];
  price: string;
}) => (
  <Card className="shadow-soft">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="text-sm font-semibold text-forest-green">{price}</div>
        <div className="space-y-1">
          {companies.map((company, index) => (
            <div key={index} className="text-xs text-muted-foreground">• {company}</div>
          ))}
        </div>
        <Button size="sm" variant="outline" className="w-full">Connect</Button>
      </div>
    </CardContent>
  </Card>
);

export default Benefits;