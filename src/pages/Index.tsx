import Resume from "@/components/Resume";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="resume-theme">
      <div className="relative">
        <Resume />
        <div className="fixed top-4 right-4 print:hidden">
          <Link 
            to="/printable"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Printable Version
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;