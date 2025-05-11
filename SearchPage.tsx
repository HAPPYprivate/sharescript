
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchScripts } from "@/data/scripts";
import { Script } from "@/types/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScriptCard from "@/components/ScriptCard";
import { SearchX } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const searchResults = searchScripts(query);
      setResults(searchResults);
      setLoading(false);
    }, 500);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="mb-8 text-muted-foreground">
            Showing results for: <span className="font-medium text-foreground">{query}</span>
          </p>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em]">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-muted-foreground">Searching scripts...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map(script => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <SearchX className="mx-auto h-12 w-12 text-muted-foreground" />
              <h2 className="mt-4 text-xl font-semibold">No results found</h2>
              <p className="mt-2 text-muted-foreground">
                We couldn't find any scripts matching your search term.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
