
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmitScriptForm from "@/components/SubmitScriptForm";

const SubmitPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Submit a Script</h1>
          <p className="mb-8 text-muted-foreground">
            Share your useful scripts with the developer community. All submissions are reviewed before publication.
          </p>
          
          <SubmitScriptForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitPage;
