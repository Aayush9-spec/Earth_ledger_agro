import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Leaf } from "lucide-react";

export const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    farmType: "",
    area: "",
    cropType: "",
    practices: "",
  });
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCarbon = () => {
    // Simple calculation logic - in real app this would be much more sophisticated
    const area = parseFloat(formData.area) || 0;
    let baseRate = 0;
    
    if (formData.farmType === "agroforestry") {
      baseRate = 15; // tCO2e per hectare per year
    } else if (formData.farmType === "rice") {
      baseRate = 8; // tCO2e per hectare per year
    } else if (formData.farmType === "mixed") {
      baseRate = 12; // tCO2e per hectare per year
    }

    const calculatedCredits = area * baseRate;
    setResult(calculatedCredits);
  };

  return (
    <Card className="shadow-soft max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="h-6 w-6 text-forest-green" />
          <span>Carbon Credit Calculator</span>
        </CardTitle>
        <CardDescription>
          Estimate your potential carbon credits based on your farming practices
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="farmType">Farm Type</Label>
            <Select value={formData.farmType} onValueChange={(value) => handleInputChange("farmType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select farm type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agroforestry">Agroforestry System</SelectItem>
                <SelectItem value="rice">Rice Cultivation</SelectItem>
                <SelectItem value="mixed">Mixed Cropping</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Farm Area (hectares)</Label>
            <Input
              id="area"
              type="number"
              placeholder="Enter area in hectares"
              value={formData.area}
              onChange={(e) => handleInputChange("area", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cropType">Primary Crop</Label>
            <Select value={formData.cropType} onValueChange={(value) => handleInputChange("cropType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select primary crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
                <SelectItem value="teak">Teak</SelectItem>
                <SelectItem value="bamboo">Bamboo</SelectItem>
                <SelectItem value="coconut">Coconut</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="practices">Sustainable Practices</Label>
            <Select value={formData.practices} onValueChange={(value) => handleInputChange("practices", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select practices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="organic">Organic Farming</SelectItem>
                <SelectItem value="regenerative">Regenerative Agriculture</SelectItem>
                <SelectItem value="conservation">Conservation Tillage</SelectItem>
                <SelectItem value="integrated">Integrated Pest Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          onClick={calculateCarbon} 
          className="w-full bg-gradient-primary hover:opacity-90"
          disabled={!formData.farmType || !formData.area}
        >
          Calculate Carbon Credits
        </Button>

        {result !== null && (
          <Card className="bg-secondary/50 border-forest-green/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Leaf className="h-6 w-6 text-forest-green" />
                  <span className="text-2xl font-bold text-forest-green">{result.toFixed(1)}</span>
                  <span className="text-muted-foreground">tCO2e/year</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estimated annual carbon credits potential
                </p>
                <p className="text-xs text-muted-foreground">
                  *This is an estimate. Actual credits depend on verification and measurement protocols.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};