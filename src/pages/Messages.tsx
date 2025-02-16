import { useState } from 'react';
import { sermons } from '../data/sermons';
import { AudioPlayer } from '../components/AudioPlayer';

export function Messages() {
  const [expandedSermons, setExpandedSermons] = useState<Set<string>>(new Set());

  const toggleSermon = (sermonId: string) => {
    setExpandedSermons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sermonId)) {
        newSet.delete(sermonId);
      } else {
        newSet.add(sermonId);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Audio Messages
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Listen to our latest sermons and messages. Be inspired and grow in your faith
          journey.
        </p>

        <div className="space-y-6">
          {sermons.map((sermon) => {
            const isExpanded = expandedSermons.has(sermon.id);
            
            return (
              <div
                key={sermon.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div
                  className={`p-6 cursor-pointer transition-all ${
                    isExpanded ? 'bg-orange-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleSermon(sermon.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleSermon(sermon.id);
                    }
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                      <p className="text-gray-600 mb-2">
                        {sermon.speaker} • {new Date(sermon.date).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700">{sermon.description}</p>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-400 transform transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <AudioPlayer url={sermon.audioUrl} title={sermon.title} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}