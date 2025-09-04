import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Palette, Sun, Moon, Droplets, Waves } from "lucide-react";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: 'light' as const,
      label: 'Light',
      icon: Sun,
      colors: ['bg-white', 'bg-gray-100', 'bg-green-100'],
      description: 'Clean and bright'
    },
    {
      id: 'teal' as const,
      label: 'Teal',
      icon: Droplets,
      colors: ['bg-teal-50', 'bg-teal-200', 'bg-teal-500'],
      description: 'Ocean inspired'
    },
    {
      id: 'light-blue' as const,
      label: 'Sky Blue',
      icon: Waves,
      colors: ['bg-blue-50', 'bg-blue-200', 'bg-blue-500'],
      description: 'Sky and water'
    },
    {
      id: 'dark' as const,
      label: 'Dark',
      icon: Moon,
      colors: ['bg-gray-900', 'bg-gray-700', 'bg-gray-500'],
      description: 'Easy on the eyes'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Palette className="w-6 h-6 text-primary" />
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            Choose Your Theme
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          Personalize your experience with beautiful color schemes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {themes.map((themeOption) => {
          const IconComponent = themeOption.icon;
          const isActive = theme === themeOption.id;
          
          return (
            <Button
              key={themeOption.id}
              variant={isActive ? "default" : "outline"}
              className={`h-auto p-4 flex flex-col items-center gap-3 transition-all duration-200 hover:scale-105 ${
                isActive ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
              onClick={() => setTheme(themeOption.id)}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="w-5 h-5" />
                <span className="font-semibold">{themeOption.label}</span>
              </div>
              
              <div className="flex gap-1">
                {themeOption.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full ${color} border border-border`}
                  />
                ))}
              </div>
              
              <span className="text-xs text-muted-foreground">
                {themeOption.description}
              </span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}