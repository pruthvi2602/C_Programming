import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target } from 'lucide-react';

const courseOutcomes = [
  {
    id: 'CO1',
    description: 'Describe the fundamental of concepts of computer and programming'
  },
  {
    id: 'CO2', 
    description: 'Apply appropriate branching and loop construct for specific programming tasks'
  },
  {
    id: 'CO3',
    description: 'Develop solutions that efficiently manipulate and process arrays, strings, structures and unions'
  },
  {
    id: 'CO4',
    description: 'Develop user defined functions for specific task'
  },
  {
    id: 'CO5',
    description: 'Utilizing pointers to manipulate data structures and perform dynamic memory allocation'
  },
  {
    id: 'CO6',
    description: 'Develop solution which involves file I/O operations'
  }
];

const CourseOutcome: React.FC = () => {
  return (
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5" />
            <span className="font-semibold">Course Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Achieve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            By the end of this course, you'll have mastered these key programming concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {courseOutcomes.map((outcome, index) => (
            <Card 
              key={outcome.id} 
              className="hover-lift group border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <span className="font-bold text-primary">{outcome.id}</span>
                  </div>
                  <CheckCircle className="h-5 w-5 text-success" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOutcome;