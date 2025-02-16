import { type Sermon } from '../types/sermon';

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Faith',
    speaker: 'Pastor John Smith',
    date: '2024-03-10',
    audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
    description: 'A powerful message about trusting God in all circumstances.',
  },
  {
    id: '2',
    title: 'The Power of Prayer',
    speaker: 'Pastor John Smith',
    date: '2024-03-03',
    audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
    description: 'Understanding the importance of maintaining a strong prayer life.',
  },
  {
    id: '3',
    title: 'Living with Purpose',
    speaker: 'Pastor Sarah Johnson',
    date: '2024-02-25',
    audioUrl: '/public/sermons/coffee.mp3',
    description: "Discovering God's purpose for your life and walking in it.",
  },
];
