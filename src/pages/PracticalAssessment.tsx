import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Code, Monitor, MessageSquare, Calendar, FileCode } from 'lucide-react';

const PracticalAssessment = () => {
  const assessmentStructure = [
    {
      title: "Continuous Evaluation",
      marks: 25,
      description: "Regular lab assignments and coding exercises"
    },
    {
      title: "End Semester Evaluation", 
      marks: 25,
      components: [
        { name: "Practical Examination", marks: 15 },
        { name: "Viva", marks: 10 }
      ]
    }
  ];

  const practicalList = {
    title: "2025-2026 ODD CEUC101 CCP Practical List",
    description: "Complete list of practical assignments for the semester",
    downloadUrl: "#" // This would be the actual PDF link
  };

  const assignments = [
    {
      id: 1,
      title: "Hello World and Basic I/O",
      description: "Write a C program to display 'Hello World' and perform basic input/output operations",
      difficulty: "Beginner",
      topics: ["printf", "scanf", "basic syntax"],
      estimatedTime: "30 mins"
    },
    {
      id: 2,
      title: "Arithmetic Operations",
      description: "Program to perform basic arithmetic operations (addition, subtraction, multiplication, division)",
      difficulty: "Beginner", 
      topics: ["operators", "variables", "data types"],
      estimatedTime: "45 mins"
    },
    {
      id: 3,
      title: "Conditional Statements",
      description: "Implement programs using if-else and switch-case statements",
      difficulty: "Intermediate",
      topics: ["if-else", "switch-case", "logical operators"],
      estimatedTime: "60 mins"
    },
    {
      id: 4,
      title: "Loops and Iterations",
      description: "Write programs using for, while, and do-while loops",
      difficulty: "Intermediate",
      topics: ["for loop", "while loop", "do-while", "nested loops"],
      estimatedTime: "75 mins"
    },
    {
      id: 5,
      title: "Functions and Recursion",
      description: "Create user-defined functions and implement recursive algorithms",
      difficulty: "Advanced",
      topics: ["functions", "recursion", "parameter passing"],
      estimatedTime: "90 mins"
    },
    {
      id: 6,
      title: "Arrays and Strings",
      description: "Programs for array manipulation and string operations",
      difficulty: "Advanced",
      topics: ["arrays", "strings", "string functions"],
      estimatedTime: "90 mins"
    },
    {
      id: 7,
      title: "Pointers and Memory",
      description: "Understanding pointers, pointer arithmetic, and dynamic memory allocation",
      difficulty: "Advanced",
      topics: ["pointers", "malloc", "free", "pointer arithmetic"],
      estimatedTime: "120 mins"
    },
    {
      id: 8,
      title: "Structures and File Handling",
      description: "Work with structures and perform file input/output operations",
      difficulty: "Advanced",
      topics: ["structures", "file I/O", "fopen", "fclose"],
      estimatedTime: "120 mins"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Practical Assessment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on programming assignments and coding exercises to build practical C programming skills
          </p>
        </div>

        {/* Assessment Structure */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {assessmentStructure.map((assessment, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-accent" />
                  {assessment.title}
                </CardTitle>
                <CardDescription>
                  {assessment.marks} marks - {assessment.description || "Detailed evaluation breakdown"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {assessment.components ? (
                  <div className="space-y-3">
                    {assessment.components.map((component, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{component.name}</span>
                        <Badge variant="secondary">{component.marks} marks</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <Badge variant="outline" className="text-lg p-2">
                      {assessment.marks} marks
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practical List Download */}
        <Card className="mb-12 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{practicalList.title}</h3>
                  <p className="text-muted-foreground">{practicalList.description}</p>
                </div>
              </div>
              <Button onClick={() => window.open(practicalList.downloadUrl, '_blank')}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Practical Assignments */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Practical Assignments</h2>
          
          <div className="grid gap-6">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-primary" />
                        Assignment {assignment.id}: {assignment.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {assignment.description}
                      </CardDescription>
                    </div>
                    <Badge className={getDifficultyColor(assignment.difficulty)}>
                      {assignment.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-muted-foreground">Topics:</span>
                      {assignment.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Estimated time: {assignment.estimatedTime}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileCode className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Template
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <Card className="mt-12 bg-gradient-accent">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <MessageSquare className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Submission Guidelines
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Code Quality</h4>
                <p className="text-sm">Write clean, well-commented code with proper indentation</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Testing</h4>
                <p className="text-sm">Test your programs with multiple input cases</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Documentation</h4>
                <p className="text-sm">Include proper documentation and explanation of logic</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PracticalAssessment;