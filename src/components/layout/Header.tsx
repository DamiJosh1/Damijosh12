import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthContext";
import { useState } from "react";
import { Bell, Settings, User, Brain, BarChart3, FileText, CheckSquare, Home, Info, Menu, X, LogOut } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    ...(isAuthenticated ? [
      { to: "/dashboard", label: "Dashboard", icon: Brain },
      { to: "/tasks", label: "Tasks", icon: CheckSquare },
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/documents", label: "Documents", icon: FileText },
    ] : []),
    { to: "/about", label: "About", icon: Info },
  ];

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center animate-float">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">DAMIJOSH</h1>
                <p className="text-xs text-muted-foreground">AI Productivity Assistant</p>
              </div>
            </Link>
            {isAuthenticated && (
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 animate-bounce-in">
                AI-Powered
              </Badge>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link 
                key={to}
                to={to} 
                className={`text-sm transition-smooth flex items-center gap-2 hover:scale-105 ${
                  isActive(to) ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <>
                <Link to="/notifications">
                  <Button variant="ghost" size="icon" className="relative hover:scale-105 transition-smooth">
                    <Bell className="h-5 w-5" />
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center animate-bounce-in"
                    >
                      3
                    </Badge>
                  </Button>
                </Link>
                
                <Link to="/profile">
                  <Button variant="ghost" size="icon" className="hover:scale-105 transition-smooth">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-105 transition-smooth"
                  title={`Logged in as ${user?.name}`}
                >
                  <User className="h-5 w-5" />
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLogout}
                  className="hover:scale-105 transition-smooth text-destructive hover:text-destructive"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button className="gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-smooth"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-slide-in-right">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-smooth ${
                    isActive(to) 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <>
                  <div className="border-t border-border pt-4 mt-4">
                    <Link
                      to="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg transition-smooth text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <Settings className="h-5 w-5" />
                      Profile & Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 p-3 rounded-lg transition-smooth text-destructive hover:bg-destructive/10"
                    >
                      <LogOut className="h-5 w-5" />
                      Logout
                    </button>
                  </div>
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Welcome, {user?.name}!
                    </p>
                  </div>
                </>
              ) : (
                <div className="border-t border-border pt-4 mt-4">
                  <Link
                    to="/auth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-glow">
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};