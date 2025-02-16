import { PlayCircle } from 'lucide-react';
import { type Sermon } from '../types/sermon';

interface SermonCardProps {
  sermon: Sermon;
  isSelected: boolean;
  onSelect: (sermon: Sermon) => void;
}

export function SermonCard({ sermon, isSelected, onSelect }: SermonCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all ${
        isSelected ? 'border-2 border-orange-500' : 'hover:shadow-lg'
      }`}
      onClick={() => onSelect(sermon)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
          <p className="text-gray-600 mb-2">
            {sermon.speaker} • {new Date(sermon.date).toLocaleDateString()}
          </p>
          <p className="text-gray-700">{sermon.description}</p>
        </div>
        <PlayCircle
          className={`w-10 h-10 ${
            isSelected ? 'text-orange-500' : 'text-gray-400'
          }`}
        />
      </div>
    </div>
  );
}