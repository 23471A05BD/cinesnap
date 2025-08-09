import React from 'react';
import { Star, Play } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  image: string;
  status: string;
}

interface MovieCardProps {
  movie: Movie;
  onNavigate: (page: string, data?: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onNavigate }) => {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={() => onNavigate('movie-details', movie)}
    >
      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-all">
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={movie.image} 
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-cyan-500/80 backdrop-blur-sm rounded-full p-4">
              <Play className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-white mb-2 line-clamp-1">{movie.title}</h3>
          <p className="text-gray-400 text-sm mb-3">{movie.genre}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-yellow-400 font-semibold text-sm">{movie.rating}</span>
            </div>
            
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              movie.status === 'now-showing' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {movie.status === 'now-showing' ? 'Now Showing' : 'Coming Soon'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;