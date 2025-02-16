export function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
            <span className="text-black">About Lighthouse</span> <span className="text-orange-500">Assembly</span>
        </h1>
        
        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our <span className="text-orange-500">Mission</span></h2>
              <p className="text-gray-600">
                To be a beacon of God's love, guiding people to Christ through worship,
                fellowship, and service. We strive to create an inclusive community where
                everyone can experience God's transformative power.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our <span className="text-orange-500">Vision</span></h2>
              <p className="text-gray-600">
                To transform lives through Christ's love, build strong families,
                and impact our community with the Gospel. We envision a church where
                every person can grow in their faith and discover their purpose.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core<span className="text-orange-500"> Values</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership <span className="text-orange-500">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
              name: "Pastor Wale Dada",
              role: "Senior Elder",
              image: "/images/pastor-wale-dada.jpg"
              },
              {
              name: "Bolanle Dada",
              role: "Leader",
              image: "src/assets/bolanle-dada.jpg"
              },
              {
              name: "Johnson Odigili",
              role: "Leader",
              image: "src/assets/johnson.jpg"
              },
              {
                name: "Eme Ibitayo",
                role: "Leader",
                image: "src/assets/eme.jpg"
              },
              {
                name: "Ayo Ogunbiyi",
                role: "Leader",
                image: "src/assets/ogunbiyi.jpg"
              },
              {
                name: "Nosa",
                role: "Leader",
                image: "src/assets/nosa.jpg"
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="text-orange-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}