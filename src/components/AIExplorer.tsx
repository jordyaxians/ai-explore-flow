
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

      {/* Header - Fixed positioning with proper z-index */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Home className="w-4 h-4 text-cyan-400" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.id}>
                <button
                  onClick={() => handleBreadcrumbClick(crumb.id, index)}
                  className={cn(
                    "hover:text-cyan-400 transition-colors px-2 py-1 rounded",
                    index === breadcrumbs.length - 1 
                      ? "text-cyan-400 font-medium bg-cyan-400/10" 
                      : "text-gray-300 hover:underline hover:bg-white/5"
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

      {/* Main Content - Proper top padding to avoid header overlap */}
      <div className={cn(
        "pt-24 pb-12 px-6 transition-all duration-500 ease-in-out",
        isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
      )}>
        <div className="max-w-7xl mx-auto">
          {/* Root View - Show AI as main button */}
          {currentTopic === 'root' && (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
              <div className="text-center mb-16 relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-full" />
                <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 font-mono tracking-wider">
                  AI EXPLORER
                </h1>
                <p className="relative text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                  Navigate the frontier of artificial intelligence
                </p>
                {/* Decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50" />
                <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-purple-400/50" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-pink-400/50" />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50" />
              </div>
              
              {/* Main AI Button with enhanced styling */}
              <div className="w-full max-w-lg relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-3xl" />
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

          {/* Topic View - Enhanced visual depth */}
          {currentData && (
            <>
              {/* Topic Header with depth indicators */}
              <div className="text-center mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 blur-2xl rounded-full" />
                <div className="relative">
                  {/* Depth indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                      {breadcrumbs.slice(1).map((_, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400/60 rounded-full" />
                          {index < breadcrumbs.length - 2 && <div className="w-8 h-px bg-gray-600" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 font-mono tracking-wide">
                    {currentData.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {currentData.description}
                  </p>
                </div>
              </div>

              {/* Subtopics Grid with staggered animations */}
              {currentData.subtopics && currentData.subtopics.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {currentData.subtopics.map((subtopic, index) => (
                    <div 
                      key={subtopic.id}
                      className={cn(
                        "transition-all duration-300",
                        !isTransitioning && "animate-fade-in"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <TopicCard
                        title={subtopic.title}
                        description={subtopic.description}
                        color={subtopic.color}
                        onClick={() => handleTopicClick(subtopic.id, subtopic.title)}
                        hasSubtopics={aiTopics[subtopic.id]?.subtopics?.length > 0}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Detailed Content with enhanced styling */}
              {currentData.content && (
                <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-cyan-500/30 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400" />
                  </div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-cyan-400 mb-8 font-mono flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full" />
                      KEY CONCEPTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentData.content.map((item, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                        >
                          <h3 className="font-semibold text-gray-100 mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
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
