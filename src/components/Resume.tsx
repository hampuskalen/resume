import { Mail, Phone, Globe, Github, Linkedin, Award, Book, Code, Database } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Resume = () => {
  return (
    <div className="flex flex-row min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-80 p-8 bg-muted/50 print:bg-transparent shrink-0">
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
              <a href="mailto:john.anderson@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                john.anderson@example.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <a href="https://github.com/johnanderson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
                github.com/johnanderson
              </a>
              <a href="https://linkedin.com/in/johnanderson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/johnanderson
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4" /> Languages & Tools
                </h3>
                <p className="text-sm text-muted-foreground">Python, SQL, Scala, Java, Git</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Database className="h-4 w-4" /> Data Technologies
                </h3>
                <p className="text-sm text-muted-foreground">Apache Spark, Kafka, Airflow, Snowflake</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4" /> Cloud Platforms
                </h3>
                <p className="text-sm text-muted-foreground">AWS, GCP, Azure</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Book className="h-4 w-4" /> Stanford University
                </h3>
                <p className="text-sm text-muted-foreground">M.S. Computer Science, 2015</p>
              </div>
              <div>
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Book className="h-4 w-4" /> UC Berkeley
                </h3>
                <p className="text-sm text-muted-foreground">B.S. Computer Engineering, 2013</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-3xl">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-6 print:hidden">
            <ThemeToggle />
          </div>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">John Anderson</h1>
            <h2 className="text-xl text-muted-foreground">Senior Data Engineer</h2>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Summary</h2>
            <p className="text-muted-foreground">
              Senior Data Engineer with 8+ years of experience designing and implementing scalable data solutions. 
              Specialized in building robust ETL pipelines, data warehousing, and real-time analytics systems. 
              Strong expertise in cloud platforms and big data technologies.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Lead Data Engineer - TechCorp Solutions</h3>
                <span className="text-sm text-muted-foreground">2020 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Led a team of 5 engineers in developing and maintaining data pipelines processing 5TB+ daily</li>
                <li>Architected and implemented real-time analytics platform reducing reporting latency by 90%</li>
                <li>Optimized data warehouse performance resulting in 40% cost reduction</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">Senior Data Engineer - DataFlow Inc</h3>
                <span className="text-sm text-muted-foreground">2017 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Designed and implemented cloud-based ETL solutions using AWS services</li>
                <li>Developed data quality framework reducing errors by 75%</li>
                <li>Mentored junior engineers and led technical design reviews</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;