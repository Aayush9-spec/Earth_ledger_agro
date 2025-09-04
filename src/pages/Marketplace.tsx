import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Award
} from "lucide-react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

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
              <a href="/benefits" className="text-muted-foreground hover:text-forest-green transition-colors">Benefits</a>
              <a href="/calculator" className="text-muted-foreground hover:text-forest-green transition-colors">Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Carbon Credit Marketplace</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trade Carbon Credits
            <span className="text-forest-green"> Globally</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with buyers worldwide, get the best prices for your carbon credits, 
            and build long-term partnerships for sustainable agriculture.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <MarketStat
            icon={<TrendingUp className="h-6 w-6 text-forest-green" />}
            title="Current Price"
            value="₹3,450"
            unit="/tCO2e"
            change="+5.2%"
            positive={true}
          />
          <MarketStat
            icon={<DollarSign className="h-6 w-6 text-harvest-gold" />}
            title="Volume Traded"
            value="2.8M"
            unit="tCO2e"
            change="+12%"
            positive={true}
          />
          <MarketStat
            icon={<Users className="h-6 w-6 text-sky-blue" />}
            title="Active Buyers"
            value="340"
            unit="companies"
            change="+8"
            positive={true}
          />
          <MarketStat
            icon={<Star className="h-6 w-6 text-forest-green" />}
            title="Avg. Rating"
            value="4.8"
            unit="/5.0"
            change="+0.1"
            positive={true}
          />
        </div>

        <Tabs defaultValue="buy-sell" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buy-sell">Buy & Sell</TabsTrigger>
            <TabsTrigger value="buyers">Find Buyers</TabsTrigger>
            <TabsTrigger value="my-listings">My Listings</TabsTrigger>
            <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="buy-sell" className="space-y-8">
            {/* Filters */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search carbon credits..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={priceFilter} onValueChange={setPriceFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">₹2,000 - ₹3,000</SelectItem>
                      <SelectItem value="medium">₹3,000 - ₹4,000</SelectItem>
                      <SelectItem value="high">₹4,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="h-4 w-4" />
                    <span>More Filters</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Carbon Credit Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CreditListing
                title="Premium Agroforestry Credits"
                seller="Green Valley Farms"
                location="Maharashtra, India"
                quantity="500 tCO2e"
                price="₹3,650"
                rating={4.9}
                type="Agroforestry"
                verified={true}
                vintage="2024"
                description="High-quality carbon credits from mango-rice intercropping system"
              />
              <CreditListing
                title="Climate-Smart Rice Credits"
                seller="Sustainable Rice Co-op"
                location="Punjab, India"
                quantity="1,200 tCO2e"
                price="₹3,200"
                rating={4.7}
                type="Rice Cultivation"
                verified={true}
                vintage="2024"
                description="Verified credits from alternate wetting and drying practices"
              />
              <CreditListing
                title="Bamboo Plantation Credits"
                seller="Eco Bamboo Initiative"
                location="Kerala, India"
                quantity="800 tCO2e"
                price="₹4,100"
                rating={4.8}
                type="Forestry"
                verified={true}
                vintage="2024"
                description="Fast-growing bamboo sequestration with biodiversity benefits"
              />
            </div>
          </TabsContent>

          <TabsContent value="buyers" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BuyerCard
                name="Microsoft Corporation"
                type="Technology"
                demand="50,000 tCO2e/year"
                price="₹3,800/tCO2e"
                requirements={["VCS Verified", "Nature-based", "India sourced"]}
                contact="procurement@microsoft.com"
              />
              <BuyerCard
                name="Tata Group"
                type="Conglomerate"
                demand="25,000 tCO2e/year"
                price="₹3,500/tCO2e"
                requirements={["Local sourcing", "Community impact", "Verified"]}
                contact="sustainability@tata.com"
              />
              <BuyerCard
                name="Infosys Limited"
                type="IT Services"
                demand="15,000 tCO2e/year"
                price="₹3,600/tCO2e"
                requirements={["Tech integration", "Transparency", "Scalable"]}
                contact="carbon@infosys.com"
              />
            </div>
          </TabsContent>

          <TabsContent value="my-listings" className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">My Carbon Credit Listings</h2>
              <Button className="bg-gradient-primary hover:opacity-90">
                + Create New Listing
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MyListing
                title="Rice Field A - Q4 Credits"
                quantity="390 tCO2e"
                pricePerTonne="₹3,400"
                totalValue="₹13,26,000"
                status="Active"
                views={45}
                inquiries={8}
              />
              <MyListing
                title="Agroforestry Plot B - Annual"
                quantity="520 tCO2e"
                pricePerTonne="₹3,800"
                totalValue="₹19,76,000"
                status="Pending Verification"
                views={23}
                inquiries={3}
              />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Price Trends</CardTitle>
                  <CardDescription>Carbon credit prices over the last 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Price trend chart</p>
                      <p className="text-sm">12-month historical data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                  <CardDescription>Key market indicators and predictions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MarketInsight
                    title="High Demand Period"
                    description="Corporate buyers increase purchases in Q4"
                    trend="positive"
                  />
                  <MarketInsight
                    title="Premium for Verification"
                    description="VCS credits trading 15-20% above market"
                    trend="positive"
                  />
                  <MarketInsight
                    title="Regional Focus"
                    description="India-sourced credits in high demand"
                    trend="positive"
                  />
                  <MarketInsight
                    title="Price Forecast"
                    description="Analysts predict 25% growth in 2025"
                    trend="positive"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Component helpers
const MarketStat = ({ icon, title, value, unit, change, positive }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  change: string;
  positive: boolean;
}) => (
  <Card className="shadow-soft">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-secondary rounded-lg">
          {icon}
        </div>
        <div className={`text-sm ${positive ? 'text-forest-green' : 'text-destructive'}`}>
          {change}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline space-x-1">
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{unit}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CreditListing = ({ title, seller, location, quantity, price, rating, type, verified, vintage, description }: {
  title: string;
  seller: string;
  location: string;
  quantity: string;
  price: string;
  rating: number;
  type: string;
  verified: boolean;
  vintage: string;
  description: string;
}) => (
  <Card className="shadow-soft hover:shadow-medium transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="flex items-center space-x-2">
            <span>{seller}</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-harvest-gold fill-current" />
              <span className="text-xs ml-1">{rating}</span>
            </div>
          </CardDescription>
        </div>
        {verified && (
          <Badge variant="default" className="flex items-center space-x-1">
            <Award className="h-3 w-3" />
            <span>Verified</span>
          </Badge>
        )}
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Type:</span>
            <Badge variant="outline">{type}</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quantity:</span>
            <span className="font-medium text-forest-green">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Vintage:</span>
            <span className="font-medium">{vintage}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-right">
            <div className="text-2xl font-bold text-forest-green">{price}</div>
            <div className="text-xs text-muted-foreground">per tCO2e</div>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4 mr-1" />
              Details
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Buy
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const BuyerCard = ({ name, type, demand, price, requirements, contact }: {
  name: string;
  type: string;
  demand: string;
  price: string;
  requirements: string[];
  contact: string;
}) => (
  <Card className="shadow-soft">
    <CardHeader>
      <CardTitle className="text-lg">{name}</CardTitle>
      <CardDescription>{type}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Annual Demand:</span>
            <span className="font-semibold text-forest-green">{demand}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Offering:</span>
            <span className="font-semibold text-harvest-gold">{price}</span>
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-foreground mb-2">Requirements:</div>
          <div className="space-y-1">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-forest-green rounded-full"></div>
                <span className="text-xs text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-gradient-primary hover:opacity-90">
          Contact Buyer
        </Button>
      </div>
    </CardContent>
  </Card>
);

const MyListing = ({ title, quantity, pricePerTonne, totalValue, status, views, inquiries }: {
  title: string;
  quantity: string;
  pricePerTonne: string;
  totalValue: string;
  status: string;
  views: number;
  inquiries: number;
}) => (
  <Card className="shadow-soft">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg">{title}</CardTitle>
        <Badge variant={status === 'Active' ? 'default' : 'secondary'}>
          {status}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="text-sm space-y-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quantity:</span>
            <span className="font-semibold">{quantity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Price per tonne:</span>
            <span className="font-semibold text-forest-green">{pricePerTonne}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Value:</span>
            <span className="font-semibold text-harvest-gold">{totalValue}</span>
          </div>
        </div>
        
        <div className="flex justify-between text-sm pt-2 border-t border-border">
          <div className="text-center">
            <div className="font-semibold text-foreground">{views}</div>
            <div className="text-xs text-muted-foreground">Views</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">{inquiries}</div>
            <div className="text-xs text-muted-foreground">Inquiries</div>
          </div>
        </div>
        
        <Button variant="outline" className="w-full">
          Manage Listing
        </Button>
      </div>
    </CardContent>
  </Card>
);

const MarketInsight = ({ title, description, trend }: {
  title: string;
  description: string;
  trend: 'positive' | 'negative' | 'neutral';
}) => (
  <div className="flex items-start space-x-3 p-3 border border-border rounded-lg">
    <div className={`p-1 rounded-full ${
      trend === 'positive' ? 'bg-forest-green/20' : 
      trend === 'negative' ? 'bg-destructive/20' : 'bg-muted/20'
    }`}>
      <TrendingUp className={`h-4 w-4 ${
        trend === 'positive' ? 'text-forest-green' : 
        trend === 'negative' ? 'text-destructive' : 'text-muted-foreground'
      }`} />
    </div>
    <div>
      <div className="font-medium text-foreground">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  </div>
);

export default Marketplace;