
import React, { useState } from 'react';
import { ChevronUp, Home } from 'lucide-react';
import { TopicCard } from './TopicCard';
import { aiTopics } from '../data/aiTopics';
import { cn } from '@/lib/utils';

interface Breadcrumb {
  id: string;
  title: string;
}

export const AIExplorer = () => {
  const [currentTopic, setCurrentTopic] = useState('ai');
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    { id: 'ai', title: 'Artificial Intelligence' }
  ]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTopicClick = (topicId: string, topicTitle: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentTopic(topicId);
      setBreadcrumbs(prev => [...prev, { id: topicId, title: topicTitle }]);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBreadcrumbClick = (targetId: string, index: number) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentTopic(targetId);
      setBreadcrumbs(prev => prev.slice(0, index + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const currentData = aiTopics[currentTopic];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md border-b border-white/20 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Home className="w-4 h-4 text-indigo-600" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.id}>
                <button
                  onClick={() => handleBreadcrumbClick(crumb.id, index)}
                  className={cn(
                    "hover:text-indigo-600 transition-colors",
                    index === breadcrumbs.length - 1 
                      ? "text-indigo-600 font-medium" 
                      : "text-gray-600 hover:underline"
                  )}
                >
                  {crumb.title}
                </button>
                {index < breadcrumbs.length - 1 && (
                  <ChevronUp className="w-4 h-4 text-gray-400 rotate-90" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn(
        "pt-20 p-6 transition-all duration-300",
        isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
      )}>
        <div className="max-w-7xl mx-auto">
          {/* Topic Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {currentData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Subtopics Grid */}
          {currentData.subtopics && currentData.subtopics.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentData.subtopics.map((subtopic) => (
                <TopicCard
                  key={subtopic.id}
                  title={subtopic.title}
                  description={subtopic.description}
                  color={subtopic.color}
                  onClick={() => handleTopicClick(subtopic.id, subtopic.title)}
                  hasSubtopics={aiTopics[subtopic.id]?.subtopics?.length > 0}
                />
              ))}
            </div>
          )}

          {/* Detailed Content */}
          {currentData.content && (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentData.content.map((item, index) => (
                  <div key={index} className="bg-white/40 rounded-xl p-4 border border-white/30">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
