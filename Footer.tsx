
import { FileCode, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <FileCode className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold tracking-tight">SparkScript</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find and share free, useful scripts for your web projects. Created with developers in mind.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  All Scripts
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-accent transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/recent" className="hover:text-accent transition-colors">
                  Recently Added
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/category/ui" className="hover:text-accent transition-colors">
                  UI Components
                </Link>
              </li>
              <li>
                <Link to="/category/animation" className="hover:text-accent transition-colors">
                  Animations
                </Link>
              </li>
              <li>
                <Link to="/category/utility" className="hover:text-accent transition-colors">
                  Utility Functions
                </Link>
              </li>
              <li>
                <Link to="/category/performance" className="hover:text-accent transition-colors">
                  Performance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#" 
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/submit" className="hover:text-accent transition-colors">
                  Submit a Script
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SparkScript. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
