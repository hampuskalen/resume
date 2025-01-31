import { Mail, Phone, Globe, Github, Linkedin, Award, Book, Code, Database } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";

const Resume = () => {
  const location = useLocation();
  const isPrintable = location.pathname === "/printable";
  const [resumeContent, setResumeContent] = useState('');

  useEffect(() => {
    fetch('/resume.md')
      .then(response => response.text())
      .then(text => setResumeContent(text))
      .catch(error => console.error('Error loading resume content:', error));
  }, []);

  const sections = resumeContent.split('\n## ').filter(Boolean);
  const mainContent = sections.filter(section => 
    !['Contact', 'Technical Skills', 'Education'].some(title => 
      section.startsWith(title)
    )
  ).join('\n## ');

  const getSection = (title: string) => {
    const section = sections.find(s => s.startsWith(title));
    return section ? section.split('\n').slice(1).join('\n') : '';
  };

  return (
    <div className={`flex ${isPrintable ? 'flex-row' : 'flex-col md:flex-row'} min-h-screen bg-background text-foreground`}>
      {/* Sidebar */}
      <aside className={`${isPrintable ? 'w-80 shrink-0' : 'w-full md:w-80'} p-8 bg-muted/50 print:bg-transparent`}>
        <div className="sticky top-8 space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/12345678?v=4"
              alt="John Anderson"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <div className="space-y-2 text-sm">
              <ReactMarkdown 
                components={{
                  ul: ({ children }) => <div className="space-y-2">{children}</div>,
                  li: ({ children }) => {
                    const text = children.toString();
                    const [type, value] = text.split(': ');
                    
                    const icons = {
                      Email: <Mail className="h-4 w-4" />,
                      Phone: <Phone className="h-4 w-4" />,
                      GitHub: <Github className="h-4 w-4" />,
                      LinkedIn: <Linkedin className="h-4 w-4" />
                    };

                    const icon = icons[type as keyof typeof icons];
                    
                    return (
                      <div className="flex items-center gap-2 hover:text-primary transition-colors">
                        {icon}
                        {value}
                      </div>
                    );
                  }
                }}
              >
                {getSection('Contact')}
              </ReactMarkdown>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Technical Skills</h2>
            <div className="space-y-4">
              <ReactMarkdown
                components={{
                  h3: ({ children }) => {
                    const icons = {
                      'Languages & Tools': <Code className="h-4 w-4" />,
                      'Data Technologies': <Database className="h-4 w-4" />,
                      'Cloud Platforms': <Award className="h-4 w-4" />
                    };
                    const text = children.toString();
                    const icon = icons[text as keyof typeof icons];
                    
                    return (
                      <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                        {icon} {text}
                      </h3>
                    );
                  },
                  p: ({ children }) => (
                    <p className="text-sm text-muted-foreground">{children}</p>
                  )
                }}
              >
                {getSection('Technical Skills')}
              </ReactMarkdown>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Education</h2>
            <div className="space-y-4">
              <ReactMarkdown
                components={{
                  ul: ({ children }) => <div className="space-y-4">{children}</div>,
                  li: ({ children }) => {
                    const text = children.toString();
                    return (
                      <div>
                        <h3 className="text-sm font-medium flex items-center gap-2">
                          <Book className="h-4 w-4" /> {text.split(',')[0]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {text.split(',').slice(1).join(',').trim()}
                        </p>
                      </div>
                    );
                  }
                }}
              >
                {getSection('Education')}
              </ReactMarkdown>
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

          {/* Main Content */}
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-primary mb-2">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-primary mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold">{children}</h3>
              ),
              h4: ({ children }) => (
                <span className="text-sm text-muted-foreground">{children}</span>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  {children}
                </ul>
              )
            }}
          >
            {mainContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default Resume;