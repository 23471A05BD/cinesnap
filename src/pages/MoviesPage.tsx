import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import MovieCard from '../components/MovieCard';
import { mockMovies } from '../data/mockData';

interface MoviesPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const MoviesPage: React.FC<MoviesPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMovies = selectedFilter === 'all' 
    ? mockMovies 
    : mockMovies.filter(movie => movie.status === selectedFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Movies
        </h1>
        <p className="text-gray-400">Discover the latest movies and book your tickets</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
            {[
              { key: 'all', label: 'All Movies' },
              { key: 'now-showing', label: 'Now Showing' },
              { key: 'coming-soon', label: 'Coming Soon' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedFilter === filter.key
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'list'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Button */}
          <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-gray-300 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'
          : 'space-y-6'
      }`}>
        {filteredMovies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onNavigate={onNavigate}
          />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No movies found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;