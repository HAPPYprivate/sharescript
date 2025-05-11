
import { useEffect, useState } from "react";
import { getTrendingScripts } from "@/data/scripts";
import { Script } from "@/types/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptCard from "@/components/ScriptCard";

const TrendingPage = () => {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const trendingScripts = getTrendingScripts();
      setScripts(trendingScripts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Trending Scripts</h1>
          <p className="mb-8 text-muted-foreground">
            The most popular scripts based on downloads and likes
          </p>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em]">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-muted-foreground">Loading trending scripts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scripts.map(script => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrendingPage;
