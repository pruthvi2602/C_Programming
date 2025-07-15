import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">CEUC101</h3>
            <p className="text-primary-foreground/80 mb-4">
              Computer Concepts and Programming
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Master the fundamentals of C programming with comprehensive theory, 
              practical assessments, and extensive learning materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#theory" className="hover:text-white transition-colors flex items-center">
                  <span>Theory Assessment</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#practical" className="hover:text-white transition-colors flex items-center">
                  <span>Practical Assessment</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors flex items-center">
                  <span>Study Materials</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/1AL2oNgRF_VhnyfwFoTL0p7onxT7JA5eG/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center"
                >
                  <span>Course Content</span>
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">CHARUSAT University</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Charotar University of Science and Technology<br />
                  Changa, Gujarat, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@charusat.ac.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+91-2697-247271</span>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Scheme Info */}
        <Card className="mt-12 bg-white/10 border-white/20 text-primary-foreground">
          <div className="p-6">
            <h4 className="font-semibold mb-4 text-center">Teaching and Examination Scheme</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2">Credits and Hours</th>
                    <th className="text-center py-2">Theory</th>
                    <th className="text-center py-2">Practical</th>
                    <th className="text-center py-2">Tutorial</th>
                    <th className="text-center py-2">Total</th>
                    <th className="text-center py-2">Credit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-primary-foreground/80">
                    <td className="py-2">Teaching Scheme</td>
                    <td className="text-center py-2">3</td>
                    <td className="text-center py-2">2</td>
                    <td className="text-center py-2">0</td>
                    <td className="text-center py-2">5</td>
                    <td className="text-center py-2">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-primary-foreground/60">
          <p>&copy; 2024 CHARUSAT University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;