
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle, FileCode } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const languages = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "PHP",
  "Ruby",
  "Go",
  "Rust",
  "Java",
];

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  author: z.string().min(2, "Author name must be at least 2 characters"),
  language: z.string().min(1, "Please select a language"),
  content: z.string().min(10, "Script content must be at least 10 characters"),
  tags: z.string().refine(value => value.split(",").filter(Boolean).length > 0, {
    message: "At least one tag is required"
  })
});

type FormValues = z.infer<typeof formSchema>;

const SubmitScriptForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      language: "",
      content: "",
      tags: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Script submitted!",
        description: "Your script has been submitted for review.",
      });
      form.reset();
    }, 1500);

    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4 p-6 border rounded-lg bg-card">
          <div className="flex items-center gap-2 text-lg font-medium">
            <FileCode className="h-5 w-5 text-accent" />
            Script Information
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Script Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a descriptive title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name or username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe what your script does and how to use it"
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="">Select a language</option>
                      {languages.map((lang) => (
                        <option key={lang} value={lang.toLowerCase()}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. performance, animation, form (comma-separated)" {...field} />
                  </FormControl>
                  <FormDescription>
                    Separate tags with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4 p-6 border rounded-lg bg-card">
          <div className="flex items-center gap-2 text-lg font-medium">
            <AlertCircle className="h-5 w-5 text-accent" />
            Script Content
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Script Code</FormLabel>
                <FormControl>
                  <Textarea
                    className="font-mono min-h-[300px] bg-secondary"
                    placeholder="// Paste your code here..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Make sure to add comments to explain how your script works
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-accent hover:bg-accent/80" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Script"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SubmitScriptForm;
