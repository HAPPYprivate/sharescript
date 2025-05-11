
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getScriptById } from "@/data/scripts";
import { Script } from "@/types/script";
import ScriptDetail from "@/components/ScriptDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle } from "lucide-react";

const ScriptDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [script, setScript] = useState<Script | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      if (id) {
        const foundScript = getScriptById(id);
        if (foundScript) {
          setScript(foundScript);
          setError(false);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-accent border-r-transparent align-[-0.125em]">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-4 text-muted-foreground">Loading script...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
              <h2 className="mt-4 text-xl font-semibold">Script Not Found</h2>
              <p className="mt-2 text-muted-foreground">
                The script you're looking for doesn't exist or has been removed.
              </p>
            </div>
          ) : (
            script && <ScriptDetail script={script} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScriptDetailPage;
