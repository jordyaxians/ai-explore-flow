
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
      blue: 'from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 border-blue-400/50',
      purple: 'from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 border-purple-400/50',
      pink: 'from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 border-pink-400/50',
      indigo: 'from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 border-indigo-400/50',
      green: 'from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 border-green-400/50',
      orange: 'from-orange-600 to-orange-800 hover:from-orange-500 hover:to-orange-700 border-orange-400/50',
      cyan: 'from-cyan-600 to-cyan-800 hover:from-cyan-400 hover:to-cyan-600 border-cyan-400/50',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  const getGlowColor = (color: string) => {
    const glowMap = {
      blue: 'hover:shadow-blue-500/50',
      purple: 'hover:shadow-purple-500/50',
      pink: 'hover:shadow-pink-500/50',
      indigo: 'hover:shadow-indigo-500/50',
      green: 'hover:shadow-green-500/50',
      orange: 'hover:shadow-orange-500/50',
      cyan: 'hover:shadow-cyan-500/50',
    };
    return glowMap[color as keyof typeof glowMap] || glowMap.cyan;
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-2xl bg-gradient-to-br text-white",
        "transform transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        "border backdrop-blur-sm font-mono",
        getColorClasses(color),
        getGlowColor(color)
      )}
    >
      {/* Futuristic corner accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-current opacity-60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-current opacity-60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-current opacity-60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-current opacity-60" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-left leading-tight uppercase tracking-wide">{title}</h3>
          {hasSubtopics && (
            <ChevronUp className="w-5 h-5 rotate-90 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <p className="text-white/90 text-sm leading-relaxed text-left">
          {description}
        </p>
      </div>
      
      {/* Hover effect overlay with scan line */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
      
      {/* Click indicator */}
      {hasSubtopics && (
        <div className="absolute bottom-3 right-3 text-xs text-white/70 group-hover:text-white/90 transition-colors uppercase tracking-wider">
          ENTER →
        </div>
      )}
    </button>
  );
};
