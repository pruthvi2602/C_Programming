import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Clock, BookOpen, CheckCircle } from 'lucide-react';

const TheoryAssessment = () => {
  const assessmentStructure = [
    {
      title: "Continuous Evaluation",
      marks: 50,
      components: [
        { name: "Internal Sessional Exam", marks: 20 },
        { name: "Continuous Internal Evaluation", marks: 30 }
      ]
    },
    {
      title: "End Semester Evaluation", 
      marks: 50,
      components: [
        { name: "University Exam", marks: 50 }
      ]
    }
  ];

  const resources = [
    {
      title: "Previous Year University Papers",
      description: "Access previous years' university examination papers for practice",
      link: "https://drive.google.com/drive/folders/1QY0z0ww6K_ALIgY5esWpqUFORT6zrNZ4",
      icon: FileText,
      type: "University Papers"
    },
    {
      title: "Previous Year Internal Papers", 
      description: "Download internal examination papers from previous years",
      link: "https://drive.google.com/drive/folders/19fn134QMoXD67jvc5U0bUihRRbcuQ0wE?usp=drive_link",
      icon: FileText,
      type: "Internal Papers"
    },
    {
      title: "Question Bank 2023-24",
      description: "Comprehensive theory question bank for CE143",
      link: "https://drive.google.com/file/d/1V5q38ddzuyHjOT0VUZd6tSGsobDCSIC8/view?usp=drive_link",
      icon: BookOpen,
      type: "Question Bank"
    }
  ];

  const topics = [
    "Introduction to C Programming",
    "Data Types and Variables", 
    "Operators and Expressions",
    "Control Structures (if-else, switch)",
    "Loops (for, while, do-while)",
    "Functions and Recursion",
    "Arrays and Strings",
    "Pointers and Memory Management",
    "Structures and Unions",
    "File Handling"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Theory Assessment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive theory evaluation structure and practice materials for C Programming
          </p>
        </div>

        {/* Assessment Structure */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {assessmentStructure.map((assessment, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {assessment.title}
                </CardTitle>
                <CardDescription>
                  Total Marks: {assessment.marks}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assessment.components.map((component, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{component.name}</span>
                      <Badge variant="secondary">{component.marks} marks</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Theory Topics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Theory Topics Covered
            </CardTitle>
            <CardDescription>
              Key topics included in the theory assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <div className="grid gap-6">
          <h2 className="text-2xl font-bold mb-6">Practice Resources</h2>
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.open(resource.link, '_blank')}
                    className="ml-4"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <Card className="mt-12 bg-gradient-accent">
          <CardContent className="p-8 text-center">
            <Clock className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Exam Preparation Tips
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div>
                <h4 className="font-semibold mb-2">Practice Regularly</h4>
                <p className="text-sm">Solve previous year papers and question banks consistently</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Understand Concepts</h4>
                <p className="text-sm">Focus on understanding rather than memorizing</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Time Management</h4>
                <p className="text-sm">Practice solving papers within time limits</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TheoryAssessment;