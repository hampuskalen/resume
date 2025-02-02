import { Mail, Globe, Github, Linkedin, Award, Book, Code, Database, BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

const Resume = () => {
  const location = useLocation();
  const isPrintable = location.pathname === "/printable";
  const [content, setContent] = useState('');

  // Get the base URL for assets
  const getAssetPath = (path: string) => {
    if (import.meta.env.DEV) {
      return path;
    }
    return `.${path}`;
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(getAssetPath('/src/content/resume.md'));
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading resume content:', error);
      }
    };

    fetchContent();
    console.log("Attempting to load profile image...");
  }, []);

  return (
    <div className={`flex ${isPrintable ? 'flex-row' : 'flex-col md:flex-row'} min-h-screen bg-background text-foreground`}>
      {/* Sidebar */}
      <aside className={`${isPrintable ? 'w-80 shrink-0' : 'w-full md:w-80'} p-8 bg-muted/50 print:bg-transparent`}>
        <div className="sticky top-8 space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
            <img
              src={getAssetPath("/lovable-uploads/da12c2cd-fdfb-4dd6-bb6d-1134a4bab21a.png")}
              alt="Hampus Kalén"
              className="w-full h-full object-cover"
              onLoad={() => console.log("Profile image loaded successfully")}
              onError={(e) => {
                console.error("Error loading profile image:", e);
                e.currentTarget.src = getAssetPath("/placeholder.svg");
              }}
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <div className="space-y-2 text-sm">
              <a href="mailto:hampus95@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                hampus95@gmail.com
              </a>
              <a href="https://hampuskalen.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                hampuskalen.github.io
              </a>
              <a href="https://github.com/hampuskalen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
                github.com/hampuskalen
              </a>
              <a href="https://linkedin.com/in/hampus-kalen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/hampus-kalen
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4" /> Programming & Tools
                </h3>
                <p className="text-sm text-muted-foreground">Python, SQL, SAS, Matlab, R, JavaScript, Azure DevOps, GCP, dbt, Databricks, git, CI/CD</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Database className="h-4 w-4" /> Data & Analytics
                </h3>
                <p className="text-sm text-muted-foreground">Pandas, Jupyter, Matplotlib, Looker, Metabase, SQL, Tableau, statsmodels, scikit-learn</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" /> Machine Learning
                </h3>
                <p className="text-sm text-muted-foreground">Statistical Modeling, Advanced Analytics, Data Science</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Book className="h-4 w-4" /> Lund University
                </h3>
                <p className="text-sm text-muted-foreground">Engineering Physics, specialized in statistics and machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-3xl">
          {/* Theme Toggle */}
          {!isPrintable && (
            <div className="flex justify-end mb-6 print:hidden">
              <ThemeToggle />
            </div>
          )}

          {/* Markdown Content */}
          <div className="prose dark:prose-invert">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;