
import React, { useState } from "react";
import { Script } from "@/types/script";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy, Download, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ScriptDetailProps {
  script: Script;
}

const ScriptDetail = ({ script }: ScriptDetailProps) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script.content);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: "Script copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([script.content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${script.title.toLowerCase().replace(/\s+/g, "-")}.${getFileExtension(
      script.language
    )}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toast({
      title: "Script downloaded!",
      description: `${script.title} has been downloaded`,
    });
  };

  const toggleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked
        ? `${script.title} removed from your favorites`
        : `${script.title} added to your favorites`,
    });
  };

  const getFileExtension = (language: string) => {
    const extensions: Record<string, string> = {
      javascript: "js",
      typescript: "ts",
      html: "html",
      css: "css",
      python: "py",
      php: "php",
      ruby: "rb",
      go: "go",
      rust: "rs",
      java: "java",
    };

    return extensions[language.toLowerCase()] || "txt";
  };

  // Format the code with line numbers
  const formatCode = () => {
    const lines = script.content.split("\n");
    return (
      <pre className="code-block relative">
        <div className="flex">
          <div className="code-line-numbers">
            {lines.map((_, idx) => (
              <div key={idx}>{idx + 1}</div>
            ))}
          </div>
          <code>{script.content}</code>
        </div>
      </pre>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{script.title}</h1>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className={liked ? "bg-accent text-white" : ""}
            onClick={toggleLike}
          >
            <Star className={`mr-1 h-4 w-4 ${liked ? "fill-current" : ""}`} />
            <span>{liked ? script.likes + 1 : script.likes}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="mr-1 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-1 h-4 w-4" />
                Copy
              </>
            )}
          </Button>

          <Button
            variant="default"
            size="sm"
            className="bg-accent hover:bg-accent/80"
            onClick={handleDownload}
          >
            <Download className="mr-1 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>by {script.author}</span>
        <span>•</span>
        <span>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(script.dateAdded)}
        </span>
        <span>•</span>
        <span>{script.downloads} downloads</span>
      </div>

      <p className="text-muted-foreground">{script.description}</p>

      <div className="flex flex-wrap gap-2">
        {script.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {formatCode()}
    </div>
  );
};

export default ScriptDetail;
