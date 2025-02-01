import { Mail, Globe, Github, Linkedin, Award, Book, Code, Database, BrainCircuit } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "react-router-dom";

const Resume = () => {
  const location = useLocation();
  const isPrintable = location.pathname === "/printable";

  return (
    <div className={`flex ${isPrintable ? 'flex-row' : 'flex-col md:flex-row'} min-h-screen bg-background text-foreground`}>
      {/* Sidebar */}
      <aside className={`${isPrintable ? 'w-80 shrink-0' : 'w-full md:w-80'} p-8 bg-muted/50 print:bg-transparent`}>
        <div className="sticky top-8 space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
            <img
              src="/lovable-uploads/da12c2cd-fdfb-4dd6-bb6d-1134a4bab21a.png"
              alt="Hampus Kalén"
              className="w-full h-full object-cover"
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

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Hampus Kalén</h1>
            <h2 className="text-xl text-muted-foreground">Data Engineer & Scientist</h2>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Summary</h2>
            <p className="text-muted-foreground">
              Experienced Data Engineer and Scientist with a strong background in building data stacks from scratch and implementing end-to-end data solutions. 
              Specialized in statistical modeling, machine learning, and advanced analytics with expertise in modern data tools and cloud platforms.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Data Engineer - Auctionet</h3>
                <span className="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>One-man data team responsible for building the data stack from scratch</li>
                <li>Understanding and formulating requirements, architecting data stack, implementing ELT processes</li>
                <li>Leading BI initiatives and advanced analytics projects</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Data Scientist - Hedvig</h3>
                <span className="text-sm text-muted-foreground">2022</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Full stack data scientist working with end-to-end data use cases</li>
                <li>Responsibilities included pricing, reserving, and business analysis</li>
                <li>Utilized Python, dbt, and GCP (including Vertex AI) for data engineering and analysis</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Analyst - If P&C Insurance</h3>
                <span className="text-sm text-muted-foreground">2019-2021</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Conducted statistical modeling and analysis</li>
                <li>Developed and modernized processes using Python in Databricks</li>
                <li>Streamlined workflows and improved analytical capabilities</li>
              </ul>
            </div>
          </section>

          {/* Notable Previous Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Notable Previous Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Part-time Software Engineer - Voice Diagnostics</h3>
                <span className="text-sm text-muted-foreground">2018</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Teaching Assistant - Lund University</h3>
                <span className="text-sm text-muted-foreground">2015-2018</span>
              </div>
              <p className="text-muted-foreground">Teaching basic courses in programming, control theory and statistics</p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Configuration Management Intern - Ericsson</h3>
                <span className="text-sm text-muted-foreground">2017</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;