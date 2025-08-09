import React, { useState, useEffect } from 'react';
import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
  description: string;
}

interface HeroCarouselProps {
  movies: Movie[];
  onNavigate: (page: string, data?: any) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ movies, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [movies.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  if (movies.length === 0) return null;

  return (
    <div className="relative h-screen overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${movie.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{movie.rating}/10</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-300">{movie.genre}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {movie.title}
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {movie.description}
                </p>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => onNavigate('movie-details', movie)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    <span>Book Tickets</span>
                  </button>
                  
                  <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;