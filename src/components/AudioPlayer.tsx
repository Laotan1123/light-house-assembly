import { Download } from 'lucide-react';

interface AudioPlayerProps {
  url: string;
  title: string;
}

export function AudioPlayer({ url, title }: AudioPlayerProps) {
  return (
    <div className="mt-4">
      <audio 
        controls 
        className="w-full mb-4"
        aria-label={`Audio player for ${title}`}
      >
        <source 
          src={url} 
          type="audio/mpeg" 
        />
        Your browser does not support the audio element.
      </audio>
      <a
        href={url}
        download
        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
        aria-label={`Download ${title}`}
      >
        <Download className="w-5 h-5" />
        Download
      </a>
    </div>
  );
}