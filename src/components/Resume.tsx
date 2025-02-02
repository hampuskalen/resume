import { Mail, Globe, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Resume = () => {
  const location = useLocation();
  const isPrintable = location.pathname === "/printable";
  const [mainContent, setMainContent] = useState('');
  const [sidebarContent, setSidebarContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Get the base URL for assets
  const getAssetPath = (path: string) => {
    // Remove leading slash to make path relative
    const relativePath = path.startsWith('/') ? path.slice(1) : path;
    if (import.meta.env.DEV) {
      return `/${relativePath}`;
    }
    return relativePath;
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log('Fetching main content...');
        const mainPath = getAssetPath('src/content/resume.md');
        console.log('Main content path:', mainPath);
        const mainResponse = await fetch(mainPath);
        console.log('Main content response status:', mainResponse.status);
        if (!mainResponse.ok) {
          throw new Error(`Failed to fetch main content: ${mainResponse.status}`);
        }
        const mainText = await mainResponse.text();
        console.log('Main content loaded:', mainText.substring(0, 100) + '...');
        setMainContent(mainText);

        console.log('Fetching sidebar content...');
        const sidebarPath = getAssetPath('src/content/sidebar.md');
        console.log('Sidebar content path:', sidebarPath);
        const sidebarResponse = await fetch(sidebarPath);
        console.log('Sidebar content response status:', sidebarResponse.status);
        if (!sidebarResponse.ok) {
          throw new Error(`Failed to fetch sidebar content: ${sidebarResponse.status}`);
        }
        const sidebarText = await sidebarResponse.text();
        console.log('Sidebar content loaded:', sidebarText.substring(0, 100) + '...');
        setSidebarContent(sidebarText);
      } catch (error) {
        console.error('Error loading resume content:', error);
        setError(error instanceof Error ? error.message : 'Failed to load content');
      }
    };

    fetchContent();
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

          {/* Render Sidebar Markdown Content */}
          <div className="prose dark:prose-invert prose-sm">
            {error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <ReactMarkdown>{sidebarContent}</ReactMarkdown>
            )}
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
            {error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <ReactMarkdown>{mainContent}</ReactMarkdown>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;