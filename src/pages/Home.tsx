import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./images/background.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Light House Assembly</h1>
            <p className="text-xl mb-8 max-w-2xl">Join us in worship and experience the transformative power of God's love in a welcoming community of believers.</p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Light House Assembly */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Light House Assembly</h2>
          <div className="text-center">
            <p className="text-lg mb-4">
              <strong>Light House Assembly...</strong>
              <br />
              a light unto my path. Ps 119:105.
            </p>
            <p className="text-lg mb-4">
              My WORD is the light that will guide you through the journey of life! The entrance of it in the life of a man gives light, and without light you walk in darkness.
            </p>
            <p className="text-lg mb-4">
              Darkness: ignorance, lack of understanding, inability to connect to the frequency of GOD. My Light will give you the ability to walk the earth like representatives of God. Light will help us design values for our lives, family, children, business, etc.
            </p>
          </div>
        </div>
      </div>

      {/* Service Times */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Us in Worship</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Sunday Morning</h3>
              <p className="text-gray-600">9:00 AM & 11:00 AM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Wednesday Night</h3>
              <p className="text-gray-600">7:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Youth Service</h3>
              <p className="text-gray-600">Friday 6:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}