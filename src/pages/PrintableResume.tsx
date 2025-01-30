import Resume from "@/components/Resume";
import { ThemeProvider } from "@/components/ThemeProvider";

const PrintableResume = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="resume-theme">
      <div className="print-optimized">
        <Resume />
        <div className="fixed top-4 right-4 print:hidden">
          <button 
            onClick={() => window.print()} 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Print PDF
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PrintableResume;