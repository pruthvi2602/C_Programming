import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Video, 
  FileText, 
  BookOpen, 
  ExternalLink, 
  Monitor, 
  PlayCircle,
  FileDown,
  Globe
} from 'lucide-react';

const Materials = () => {
  const resources = [
    {
      title: "Faculty Video Lectures",
      description: "Recorded video lectures by faculty members covering all course topics",
      link: "https://drive.google.com/drive/folders/1qRH5sfYxHayuM1Gjf3hZ_PY13gKO4ZBH?usp=sharing",
      icon: Video,
      type: "Videos",
      color: "text-red-600"
    },
    {
      title: "Faculty Presentations", 
      description: "Lecture slides and presentations used in class sessions",
      link: "https://drive.google.com/drive/folders/1oVjFW6Q15nOE3ILWRqi4dXFIYQltA7e7?usp=sharing",
      icon: Monitor,
      type: "Presentations",
      color: "text-blue-600"
    },
    {
      title: "eBooks",
      description: "Collection of digital textbooks and reference materials",
      link: "https://drive.google.com/drive/folders/16JAhGnuAm8d-3BsXnJpY801nKgX-wTFA?usp=drive_link",
      icon: BookOpen,
      type: "Books",
      color: "text-green-600"
    }
  ];

  const webResources = [
    {
      title: "Tutorials4U - C Programming",
      url: "http://www.tutorials4u.com/c/",
      description: "Comprehensive C programming tutorials and examples"
    },
    {
      title: "C Programming Tutorial",
      url: "http://www.cprogramming.com/tutorial.html", 
      description: "Step-by-step C programming tutorial for beginners"
    },
    {
      title: "How Stuff Works - C",
      url: "http://www.howstuffworks.com/c.htm",
      description: "Understanding how C programming works"
    },
    {
      title: "Programming Tutorials - C",
      url: "http://www.programmingtutorials.com/c.aspx",
      description: "Collection of C programming tutorials and examples"
    },
    {
      title: "Physics Drexel - C Basics",
      url: "http://www.physics.drexel.edu/courses/Comp_Phys/General/C_basics/",
      description: "C programming basics for scientific computing"
    }
  ];

  const textbooks = [
    "Elements of Electrical Engineering and Electronics by U.A.Patel and R. P. Ajwalia",
    "A Text Book of Electrical Technology by B. L. Thareja, S. Chand", 
    "Principles of Electrical Engineering and Electronics by V. K. Mehta, S. Chand"
  ];

  const referenceBooks = [
    "Electrical Technology by Hughes, Pearson Education",
    "Electrical Engineering Fundamentals by Vincent Del Toro, Pearson Education"
  ];

  const moocs = [
    {
      title: "C Programming: Language Foundations",
      provider: "DartmouthX, IMTx - edX",
      url: "https://www.edx.org/learn/c-programming/dartmouth-college-c-programming-language-foundations?linked_from=xpert_chat",
      level: "Beginner"
    },
    {
      title: "C Programming: Getting Started", 
      provider: "DartmouthX, IMTx - edX",
      url: "https://www.edx.org/learn/c-programming/dartmouth-college-c-programming-getting-started?linked_from=xpert_chat",
      level: "Beginner"
    },
    {
      title: "C Programming: Pointers and Memory Management",
      provider: "DartmouthX, IMTx - edX", 
      url: "https://www.edx.org/learn/c-programming/dartmouth-college-c-programming-pointers-and-memory-management?linked_from=xpert_chat",
      level: "Advanced"
    },
    {
      title: "Learn C from Scratch",
      provider: "Educative.io",
      url: "https://www.educative.io/courses/learn-c-from-scratch",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Study Materials
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive collection of learning resources including videos, presentations, books, and online materials
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid gap-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Faculty Resources</h2>
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <resource.icon className={`h-6 w-6 ${resource.color}`} />
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
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Access
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Web Resources */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Web Resources
            </CardTitle>
            <CardDescription>
              Online tutorials and learning platforms for C programming
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {webResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(resource.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* MOOCs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-primary" />
              Online Courses (MOOCs)
            </CardTitle>
            <CardDescription>
              Massive Open Online Courses for structured learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {moocs.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{course.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(course.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Enroll
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Books Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Textbooks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Recommended Textbooks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {textbooks.map((book, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span className="text-sm">{book}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reference Books */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Reference Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {referenceBooks.map((book, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span className="text-sm">{book}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Study Tips */}
        <Card className="mt-12 bg-gradient-accent">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <FileDown className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Study Tips
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Combine Resources</h4>
                <p className="text-sm">Use videos, slides, and books together for better understanding</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Practice Coding</h4>
                <p className="text-sm">Apply concepts from materials through hands-on programming</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Take Notes</h4>
                <p className="text-sm">Create your own summary notes while studying materials</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Materials;