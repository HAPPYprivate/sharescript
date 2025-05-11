
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCode, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptCard from "@/components/ScriptCard";
import { sampleScripts } from "@/data/scripts";

const Index = () => {
  const featuredScripts = sampleScripts.slice(0, 3);
  const recentScripts = [...sampleScripts]
    .sort((a, b) => b.dateAdded.getTime() - a.dateAdded.getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card">
          <div className="container mx-auto px-4 py-16 md:py-24 md:px-6 text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Find and Share <span className="text-accent">Free Scripts</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover useful code snippets and scripts for your projects. Submit your own to help the developer community.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/80" size="lg">
                <FileCode className="mr-2 h-5 w-5" />
                Browse Scripts
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                Connect with GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Scripts Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Scripts</h2>
              <Button variant="ghost" className="text-accent">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredScripts.map(script => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find</h3>
                <p className="text-muted-foreground">
                  Search for scripts that solve your specific problem or browse categories
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Use</h3>
                <p className="text-muted-foreground">
                  Copy or download the script and integrate it into your project
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share</h3>
                <p className="text-muted-foreground">
                  Submit your own scripts to help others and get feedback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Scripts Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recently Added</h2>
              <Button variant="ghost" className="text-accent">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentScripts.map(script => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
