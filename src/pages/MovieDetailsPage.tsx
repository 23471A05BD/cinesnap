 import React from 'react';
import { Star, Clock, Calendar, MapPin, Play, Share2 } from 'lucide-react';

interface MovieDetailsPageProps {
  movie: any;
  onNavigate: (page: string, data?: any) => void;
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = ({ movie, onNavigate }) => {
  if (!movie) return null;

  const showtimes = ['10:00 AM', '1:30 PM', '4:45 PM', '8:00 PM', '11:15 PM'];
  const theaters = [
    { name: 'PVR Cinemas', location: 'Phoenix Mall', price: 250 },
    { name: 'INOX', location: 'City Center', price: 280 },
    { name: 'Cinepolis', location: 'Metro Mall', price: 300 },
    { name: 'AMC Theaters', location: 'Downtown', price: 220 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${movie.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  movie.status === 'now-showing'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {movie.status === 'now-showing' ? 'Now Showing' : 'Coming Soon'}
                </span>

                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{movie.rating}/10</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>2h 30m</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{movie.genre}</span>
                </div>
              </div>

              <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                {movie.description}
              </p>

              <div className="flex space-x-4">
                <button
                  onClick={() => onNavigate('booking', movie)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book Tickets
                </button>

                {/* Trailer Button */}
                <button
                  onClick={() => movie.trailerUrl && window.open(movie.trailerUrl, "_blank")}
                  className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Trailer</span>
                </button>

                <button className="border border-white/30 text-white px-4 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showtimes & Theaters */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Showtimes */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Show Times
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {showtimes.map((time, index) => (
                <button
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-lg py-3 text-center font-semibold hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Theaters */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Theaters Near You
            </h3>
            <div className="space-y-4">
              {theaters.map((theater, index) => (
                <div key={index} className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-white">{theater.name}</h4>
                      <p className="text-gray-400 text-sm">{theater.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-semibold">₹{theater.price}</p>
                      <button className="text-sm text-gray-400 hover:text-white transition-colors">
                        Select →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About the Movie
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Cast</h4>
              <p className="text-gray-300">John Doe, Jane Smith, Mike Johnson</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Director</h4>
              <p className="text-gray-300">Christopher Nolan</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Language</h4>
              <p className="text-gray-300">English, Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
