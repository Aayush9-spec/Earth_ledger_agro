import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Leaf, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

const Dashboard = () => {
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
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Farmer Dashboard</Badge>
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Rajesh Kumar</h1>
          <p className="text-muted-foreground">Monitor your carbon projects and track your environmental impact.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Carbon Credits"
            value="2,847"
            unit="tCO2e"
            change="+12.3%"
            positive={true}
            icon={<Leaf className="h-5 w-5 text-forest-green" />}
          />
          <StatCard
            title="Active Projects"
            value="3"
            unit="farms"
            change="+1"
            positive={true}
            icon={<MapPin className="h-5 w-5 text-sky-blue" />}
          />
          <StatCard
            title="Revenue Earned"
            value="₹1,42,350"
            unit="INR"
            change="+8.7%"
            positive={true}
            icon={<DollarSign className="h-5 w-5 text-harvest-gold" />}
          />
          <StatCard
            title="Verification Status"
            value="85%"
            unit="verified"
            change="+5%"
            positive={true}
            icon={<CheckCircle className="h-5 w-5 text-forest-green" />}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-forest-green" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ActivityItem
                    title="Rice Field A - Data Submitted"
                    description="Monthly measurement data uploaded successfully"
                    time="2 hours ago"
                    status="success"
                  />
                  <ActivityItem
                    title="Agroforestry Plot B - Verification Pending"
                    description="Awaiting third-party verification"
                    time="1 day ago"
                    status="pending"
                  />
                  <ActivityItem
                    title="Carbon Credits Issued"
                    description="124 tCO2e credits issued for Q3 2024"
                    time="3 days ago"
                    status="success"
                  />
                  <ActivityItem
                    title="New Project Registration"
                    description="Mango-Rice Intercropping project registered"
                    time="1 week ago"
                    status="success"
                  />
                </CardContent>
              </Card>

              {/* Project Progress */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-forest-green" />
                    <span>Project Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ProjectProgress
                    name="Rice Field A"
                    type="Climate-Smart Rice"
                    progress={78}
                    target="500 tCO2e"
                    current="390 tCO2e"
                  />
                  <ProjectProgress
                    name="Agroforestry Plot B"
                    type="Mango-Rice System"
                    progress={65}
                    target="800 tCO2e"
                    current="520 tCO2e"
                  />
                  <ProjectProgress
                    name="Bamboo Plantation"
                    type="Bamboo Carbon"
                    progress={45}
                    target="300 tCO2e"
                    current="135 tCO2e"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">My Projects</h2>
              <Button className="bg-gradient-primary hover:opacity-90">
                + New Project
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Rice Field A"
                type="Climate-Smart Rice"
                area="2.5 hectares"
                credits="390 tCO2e"
                status="Active"
                lastUpdate="Today"
              />
              <ProjectCard
                title="Agroforestry Plot B"
                type="Mango-Rice System"
                area="4.0 hectares"
                credits="520 tCO2e"
                status="Verification"
                lastUpdate="Yesterday"
              />
              <ProjectCard
                title="Bamboo Plantation"
                type="Bamboo Carbon"
                area="1.8 hectares"
                credits="135 tCO2e"
                status="Data Entry"
                lastUpdate="3 days ago"
              />
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Carbon Sequestration Analytics</CardTitle>
                <CardDescription>
                  Track your carbon capture performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Analytics chart will be implemented here</p>
                    <p className="text-sm">Real-time carbon sequestration trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Verification Reports</CardTitle>
                <CardDescription>
                  Download and manage your verification documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ReportItem
                    title="Q3 2024 Verification Report"
                    description="Complete verification report for all active projects"
                    date="October 15, 2024"
                    status="Completed"
                  />
                  <ReportItem
                    title="Annual Carbon Assessment"
                    description="Yearly carbon sequestration summary and projections"
                    date="October 1, 2024"
                    status="Completed"
                  />
                  <ReportItem
                    title="Q4 2024 Verification Report"
                    description="Upcoming quarterly verification report"
                    date="January 15, 2025"
                    status="Pending"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Component helpers
const StatCard = ({ title, value, unit, change, positive, icon }: {
  title: string;
  value: string;
  unit: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}) => (
  <Card className="shadow-soft">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className="text-sm text-muted-foreground">{unit}</p>
          </div>
          <div className={`flex items-center text-sm ${positive ? 'text-forest-green' : 'text-destructive'}`}>
            <TrendingUp className="h-4 w-4 mr-1" />
            {change}
          </div>
        </div>
        <div className="p-3 bg-secondary rounded-lg">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const ActivityItem = ({ title, description, time, status }: {
  title: string;
  description: string;
  time: string;
  status: 'success' | 'pending' | 'warning';
}) => (
  <div className="flex items-start space-x-3">
    <div className={`p-1 rounded-full ${
      status === 'success' ? 'bg-forest-green/20' :
      status === 'pending' ? 'bg-harvest-gold/20' : 'bg-destructive/20'
    }`}>
      {status === 'success' ? (
        <CheckCircle className="h-4 w-4 text-forest-green" />
      ) : status === 'pending' ? (
        <Clock className="h-4 w-4 text-harvest-gold" />
      ) : (
        <AlertCircle className="h-4 w-4 text-destructive" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-xs text-muted-foreground mt-1">{time}</p>
    </div>
  </div>
);

const ProjectProgress = ({ name, type, progress, target, current }: {
  name: string;
  type: string;
  progress: number;
  target: string;
  current: string;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <div>
        <p className="font-medium text-foreground">{name}</p>
        <p className="text-muted-foreground">{type}</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-foreground">{current}</p>
        <p className="text-muted-foreground">of {target}</p>
      </div>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);

const ProjectCard = ({ title, type, area, credits, status, lastUpdate }: {
  title: string;
  type: string;
  area: string;
  credits: string;
  status: string;
  lastUpdate: string;
}) => (
  <Card className="shadow-soft hover:shadow-medium transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{type}</CardDescription>
        </div>
        <Badge variant={status === 'Active' ? 'default' : status === 'Verification' ? 'secondary' : 'outline'}>
          {status}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Area:</span>
          <span className="font-medium">{area}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Credits:</span>
          <span className="font-medium text-forest-green">{credits}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Last Update:</span>
          <span className="font-medium">{lastUpdate}</span>
        </div>
      </div>
      <Button className="w-full mt-4" variant="outline">
        View Details
      </Button>
    </CardContent>
  </Card>
);

const ReportItem = ({ title, description, date, status }: {
  title: string;
  description: string;
  date: string;
  status: string;
}) => (
  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
    <div className="flex-1">
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-xs text-muted-foreground mt-1">{date}</p>
    </div>
    <div className="flex items-center space-x-2">
      <Badge variant={status === 'Completed' ? 'default' : 'secondary'}>
        {status}
      </Badge>
      <Button size="sm" variant="outline">
        {status === 'Completed' ? 'Download' : 'Schedule'}
      </Button>
    </div>
  </div>
);

export default Dashboard;