import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onMenuClick}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary">CEUC101</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Computer Concepts and Programming
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="/theory-assessment" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Theory Assessment
            </a>
            <a 
              href="/practical-assessment" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Practical Assessment
            </a>
            <a 
              href="/materials" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Materials
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search topics, materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-background/80 border-border/50 focus:bg-background"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;