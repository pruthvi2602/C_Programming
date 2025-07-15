import React from 'react';
import SectionCard from './SectionCard';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, FileText, Download } from 'lucide-react';
import theoryIcon from '@/assets/theory-icon.jpg';
import practicalIcon from '@/assets/practical-icon.jpg';
import materialsIcon from '@/assets/materials-icon.jpg';

const MainSections: React.FC = () => {
  const handleTheoryClick = () => {
    window.location.href = '/theory-assessment';
  };

  const handlePracticalClick = () => {
    window.location.href = '/practical-assessment';
  };

  const handleMaterialsClick = () => {
    window.location.href = '/materials';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learning Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your learning path and start mastering C programming fundamentals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Theory Assessment */}
          <SectionCard
            title="Theory Assessment"
            description="Comprehensive question sets and quizzes to test your theoretical understanding of C programming concepts."
            image={theoryIcon}
            features={[
              "Categorized topics (Operators, Loops, Functions)",
              "Multiple choice questions and theory papers",
              "Downloadable question sets",
              "Practice quizzes with instant feedback",
              "Comprehensive study guides"
            ]}
            primaryAction={{
              label: "Start Assessment",
              onClick: handleTheoryClick
            }}
            secondaryAction={{
              label: "Download PDFs",
              onClick: () => console.log('Download theory materials')
            }}
            className="border-l-4 border-l-primary"
          />

          {/* Practical Assessment */}
          <SectionCard
            title="Practical Assessment"
            description="Hands-on coding assignments and programming exercises to build your practical C programming skills."
            image={practicalIcon}
            features={[
              "Programming assignments with clear descriptions",
              "Code templates and starter files",
              "Submission guidelines and deadlines",
              "GitHub integration for code submission",
              "Automated testing and feedback"
            ]}
            primaryAction={{
              label: "View Assignments",
              onClick: handlePracticalClick
            }}
            secondaryAction={{
              label: "Submit Code",
              href: "https://github.com"
            }}
            className="border-l-4 border-l-accent"
          />

          {/* Materials */}
          <SectionCard
            title="Study Materials"
            description="Complete collection of lecture slides, notes, sample codes, and reference videos organized by topic."
            image={materialsIcon}
            features={[
              "Weekly organized lecture slides",
              "Comprehensive programming notes",
              "Sample code examples and demos",
              "Reference videos and tutorials", 
              "Additional reading materials"
            ]}
            primaryAction={{
              label: "Browse Materials",
              onClick: handleMaterialsClick
            }}
            secondaryAction={{
              label: "Course Content",
              href: "https://drive.google.com/file/d/1AL2oNgRF_VhnyfwFoTL0p7onxT7JA5eG/view?usp=drive_link"
            }}
            className="border-l-4 border-l-success"
          />
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-accent rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Need Additional Help?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Access additional resources, reference materials, and get support from instructors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              >
                <FileText className="mr-2 h-5 w-5" />
                Reference Documentation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Programming Tutorials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSections;