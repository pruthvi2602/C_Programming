import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

interface SectionCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  primaryAction: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  image,
  features,
  primaryAction,
  secondaryAction,
  className = ''
}) => {
  return (
    <Card className={`hover-lift group overflow-hidden ${className}`}>
      <CardHeader className="relative">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-grow">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Features List */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button 
            variant="gradient" 
            className="flex-1 group"
            onClick={primaryAction.onClick}
            asChild={!!primaryAction.href}
          >
            {primaryAction.href ? (
              <a href={primaryAction.href} target="_blank" rel="noopener noreferrer">
                {primaryAction.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <>
                {primaryAction.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
          
          {secondaryAction && (
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={secondaryAction.onClick}
              asChild={!!secondaryAction.href}
            >
              {secondaryAction.href ? (
                <a href={secondaryAction.href} target="_blank" rel="noopener noreferrer">
                  {secondaryAction.label}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <>
                  {secondaryAction.label}
                  <Download className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectionCard;