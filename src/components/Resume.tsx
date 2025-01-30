import { Mail, Phone, Globe, Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">John Anderson</h1>
        <h2 className="text-xl text-muted-foreground mb-4">Senior Data Engineer</h2>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a href="mailto:john.anderson@example.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            john.anderson@example.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <a href="https://github.com/johnanderson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Github className="h-4 w-4" />
            github.com/johnanderson
          </a>
          <a href="https://linkedin.com/in/johnanderson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            linkedin.com/in/johnanderson
          </a>
        </div>
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
      <section className="mb-8">
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

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Languages & Frameworks</h3>
            <p className="text-muted-foreground">Python, SQL, Scala, PySpark, Apache Airflow</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cloud & Infrastructure</h3>
            <p className="text-muted-foreground">AWS, GCP, Docker, Kubernetes</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Data Technologies</h3>
            <p className="text-muted-foreground">Snowflake, Apache Kafka, Elasticsearch, Redis</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tools & Methodologies</h3>
            <p className="text-muted-foreground">Git, CI/CD, Agile, Data Modeling</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4">Education</h2>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold">Master of Science in Computer Science</h3>
            <p className="text-muted-foreground">Stanford University</p>
          </div>
          <span className="text-sm text-muted-foreground">2015</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Computer Engineering</h3>
            <p className="text-muted-foreground">University of California, Berkeley</p>
          </div>
          <span className="text-sm text-muted-foreground">2013</span>
        </div>
      </section>
    </div>
  );
};

export default Resume;