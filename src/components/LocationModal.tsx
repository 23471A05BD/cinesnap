import React from 'react';
import { X, MapPin, Search } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  selectedLocation: string;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ 
  isOpen, 
  selectedLocation, 
  onClose, 
  onSelectLocation 
}) => {
  if (!isOpen) return null;

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
    'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad'
  ];

  const handleSelectLocation = (city: string) => {
    onSelectLocation(city);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Select Your City
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for your city"
            className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>

        {/* Popular Cities */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Popular Cities</h3>
          <div className="max-h-64 overflow-y-auto space-y-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => handleSelectLocation(city)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  selectedLocation === city 
                    ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-400' 
                    : 'hover:bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>{city}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detect Location */}
        <button className="w-full flex items-center justify-center space-x-2 p-3 border border-white/20 rounded-lg text-gray-300 hover:text-white hover:border-white/40 transition-colors">
          <MapPin className="w-5 h-5 text-cyan-400" />
          <span>Detect my location</span>
        </button>
      </div>
    </div>
  );
};

export default LocationModal;