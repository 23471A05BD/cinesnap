import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import MovieSection from '../components/MovieSection';
import { mockMovies } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const nowShowingMovies = mockMovies.filter(movie => movie.status === 'now-showing');
  const comingSoonMovies = mockMovies.filter(movie => movie.status === 'coming-soon');

  return (
    <div>
      <HeroCarousel movies={nowShowingMovies.slice(0, 3)} onNavigate={onNavigate} />
      
      <div className="container mx-auto px-4 py-12 space-y-12">
        <MovieSection 
          title="Now Showing" 
          movies={nowShowingMovies} 
          onNavigate={onNavigate}
        />
        
        <MovieSection 
          title="Coming Soon" 
          movies={comingSoonMovies} 
          onNavigate={onNavigate}
        />

        {/* Trending Events Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Trending Events & Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Comedy Night Live', type: 'Event', discount: '20% OFF' },
              { title: 'Rock Concert 2025', type: 'Concert', discount: '15% OFF' },
              { title: 'Food Festival', type: 'Event', discount: 'Buy 1 Get 1' },
            ].map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.type}</p>
                  </div>
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {event.discount}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-lg transition-all">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;