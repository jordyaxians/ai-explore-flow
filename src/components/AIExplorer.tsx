
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
  const [currentTopic, setCurrentTopic] = useState('root');
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    { id: 'root', title: 'AI Explorer' }
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

  const currentData = currentTopic === 'root' ? null : aiTopics[currentTopic];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Futuristic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00ffff 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #ff00ff 0%, transparent 50%)`,
        }} />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-lg border-b border-cyan-500/20 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Home className="w-4 h-4 text-cyan-400" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.id}>
                <button
                  onClick={() => handleBreadcrumbClick(crumb.id, index)}
                  className={cn(
                    "hover:text-cyan-400 transition-colors",
                    index === breadcrumbs.length - 1 
                      ? "text-cyan-400 font-medium" 
                      : "text-gray-300 hover:underline"
                  )}
                >
                  {crumb.title}
                </button>
                {index < breadcrumbs.length - 1 && (
                  <ChevronUp className="w-4 h-4 text-gray-500 rotate-90" />
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
          {/* Root View - Show AI as main button */}
          {currentTopic === 'root' && (
            <div className="flex flex-col items-center justify-center min-h-[70vh]">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 font-mono">
                  AI EXPLORER
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Navigate the frontier of artificial intelligence
                </p>
              </div>
              
              {/* Main AI Button */}
              <div className="w-full max-w-md">
                <TopicCard
                  title={aiTopics.ai.title}
                  description={aiTopics.ai.description}
                  color="cyan"
                  onClick={() => handleTopicClick('ai', 'Artificial Intelligence')}
                  hasSubtopics={true}
                />
              </div>
            </div>
          )}

          {/* Topic View */}
          {currentData && (
            <>
              {/* Topic Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 font-mono">
                  {currentData.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-cyan-500/20">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">KEY CONCEPTS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentData.content.map((item, index) => (
                      <div key={index} className="bg-gray-900/60 rounded-xl p-4 border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                        <h3 className="font-semibold text-gray-100 mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
