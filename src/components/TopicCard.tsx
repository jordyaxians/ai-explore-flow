
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopicCardProps {
  title: string;
  description: string;
  color: string;
  onClick: () => void;
  hasSubtopics: boolean;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  color,
  onClick,
  hasSubtopics
}) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700',
      purple: 'from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700',
      pink: 'from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700',
      indigo: 'from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700',
      green: 'from-green-400 to-green-600 hover:from-green-500 hover:to-green-700',
      orange: 'from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-2xl bg-gradient-to-br text-white",
        "transform transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        "border border-white/20 backdrop-blur-sm",
        getColorClasses(color)
      )}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-left leading-tight">{title}</h3>
          {hasSubtopics && (
            <ChevronUp className="w-5 h-5 rotate-90 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <p className="text-white/90 text-sm leading-relaxed text-left">
          {description}
        </p>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Click indicator */}
      {hasSubtopics && (
        <div className="absolute bottom-3 right-3 text-xs text-white/70 group-hover:text-white/90 transition-colors">
          Click to explore →
        </div>
      )}
    </button>
  );
};
