import Resume from "@/components/Resume";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="resume-theme">
      <Resume />
    </ThemeProvider>
  );
};

export default Index;