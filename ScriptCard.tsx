
import { Script } from "@/types/script";
import { Badge } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Download, Star } from "lucide-react";

interface ScriptCardProps {
  script: Script;
}

const ScriptCard = ({ script }: ScriptCardProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };

  return (
    <Card className="overflow-hidden hover:border-accent transition-colors">
      <Link to={`/script/${script.id}`}>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{script.title}</h3>
              <p className="text-sm text-muted-foreground">by {script.author}</p>
            </div>
            <Badge variant="outline" className="bg-secondary">
              {script.language}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {script.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDate(script.dateAdded)}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-accent stroke-accent" />
              <span>{script.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>{script.downloads}</span>
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ScriptCard;
