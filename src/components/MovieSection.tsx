import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
  status: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  onNavigate: (page: string, data?: any) => void;
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, movies, onNavigate }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <button 
          onClick={() => onNavigate('movies')}
          className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
        >
          View All →
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;