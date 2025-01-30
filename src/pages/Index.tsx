import Resume from "@/components/Resume";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="resume-theme">
      <Resume />
    </ThemeProvider>
  );
};

export default Index;