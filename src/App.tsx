import  { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BookingPage from './pages/BookingPage';
import AuthModal from './components/AuthModal';
import LocationModal from './components/LocationModal';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');

  const handleNavigation = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) setSelectedMovie(data);
  };

  const handleAuth = (userData: any) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'movies':
        return <MoviesPage onNavigate={handleNavigation} />;
      case 'movie-details':
        return <MovieDetailsPage movie={selectedMovie} onNavigate={handleNavigation} />;
      case 'booking':
        return <BookingPage movie={selectedMovie} onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <Header 
        user={user}
        selectedLocation={selectedLocation}
        onNavigate={handleNavigation}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenLocation={() => setIsLocationModalOpen(true)}
      />
      
      <main className="pt-16">
        {renderPage()}
      </main>
      
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onToggleMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
        onAuth={handleAuth}
      />
      
      <LocationModal
        isOpen={isLocationModalOpen}
        selectedLocation={selectedLocation}
        onClose={() => setIsLocationModalOpen(false)}
        onSelectLocation={setSelectedLocation}
      />
    </div>
  );
}

export default App;