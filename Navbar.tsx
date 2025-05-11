
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCode, Menu, Github, X } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <FileCode className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold tracking-tight">
            SparkScript
          </span>
        </Link>

        <div className="hidden md:block w-1/3">
          <SearchBar />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
              Explore
            </Link>
            <Link to="/trending" className="text-sm font-medium hover:text-accent transition-colors">
              Trending
            </Link>
            <Link to="/submit" className="text-sm font-medium hover:text-accent transition-colors">
              Submit
            </Link>
          </nav>
          <Button className="bg-accent hover:bg-accent/80">
            <Github className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <SearchBar />
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="py-2 hover:bg-secondary rounded-md px-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/trending" 
                className="py-2 hover:bg-secondary rounded-md px-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                to="/submit" 
                className="py-2 hover:bg-secondary rounded-md px-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit
              </Link>
            </nav>
            <Button className="w-full bg-accent hover:bg-accent/80">
              <Github className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
