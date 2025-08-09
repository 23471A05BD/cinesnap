import React from "react";

const EventsPage: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Pushpa 2 Premiere Night",
      date: "2025-08-20",
      location: "PVR Cinemas, Hyderabad",
      image: "/images/pushpa.jpg",
      description: "Experience the grand premiere of Pushpa 2 with live performances and red carpet event."
    },
    {
      id: 2,
      title: "RRR Special Screening",
      date: "2025-08-25",
      location: "INOX, Vizag",
      image: "/images/rrr.jpg",
      description: "Celebrate the anniversary of RRR with an exclusive 4K remaster screening."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-cyan-500 mb-8">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
              <p className="text-gray-300 mb-2">{event.description}</p>
              <p className="text-gray-400 text-sm">📅 {event.date} | 📍 {event.location}</p>
              <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
