import { sermons } from '../data/sermons';

export function Messages() {
  return (
    <div className="py-8 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
          Messages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-w-16 aspect-h-9">
                <img src={sermon.thumbnail} alt={sermon.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{sermon.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{sermon.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">{new Date(sermon.date).toLocaleDateString()}</span>
                  <a 
                    href={sermon.audioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}