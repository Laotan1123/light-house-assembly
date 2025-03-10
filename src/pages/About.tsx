export function About() {
  return (
    <div className="py-8 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white">
            <span className="text-black">About Lighthouse</span> <span className="text-orange-500">Assembly</span>
        </h1>
        
        {/* Mission & Vision */}
        <div className="mb-8 sm:mb-16">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To be a beacon of God's love, guiding people to Christ through worship,
                fellowship, and service. We strive to create an inclusive community where
                everyone can experience God's transformative power.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To transform lives through Christ's love, build strong families,
                and impact our community with the Gospel. We envision a church where
                every person can grow in their faith and discover their purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Biblical Teaching",
                description: "Committed to teaching God's Word faithfully and accurately."
              },
              {
                title: "Authentic Worship",
                description: "Creating an atmosphere for genuine encounters with God."
              },
              {
                title: "Community",
                description: "Fostering meaningful relationships and support networks."
              },
              {
                title: "Service",
                description: "Serving others as Christ served, with love and compassion."
              },
              {
                title: "Discipleship",
                description: "Helping believers grow in their faith journey."
              },
              {
                title: "Outreach",
                description: "Sharing God's love with our community and beyond."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
              name: "Pastor Wale Dada",
              role: "Senior Elder",
              image: "./images/pastor-wale.jpg"
              },
              {
              name: "Bolanle Dada",
              role: "Leader",
              image: "./images/bolanle-dada.jpg"
              },
              {
              name: "Johnson Odigili",
              role: "Leader",
              image: "./images/johnson.jpg"
              },
              {
                name: "Eme Ibitayo",
                role: "Leader",
                image: "./images/eme.jpg"
              },
              {
                name: "Ayo Ogunbiyi",
                role: "Leader",
                image: "./images/ogunbiyi.jpg"
              },
              {
                name: "Nosa",
                role: "Leader",
                image: "./images/nosa.jpg"
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{leader.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}