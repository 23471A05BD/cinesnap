 import React, { useState } from 'react';
import { ArrowLeft, Users, CreditCard, Smartphone, Globe } from 'lucide-react';

interface BookingPageProps {
  movie: any;
  onNavigate: (page: string, data?: any) => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ movie, onNavigate }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [paymentMethod, setPaymentMethod] = useState('');

  if (!movie) return null;

  // Seat layout
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const seatsPerRow = 12;
  const unavailableSeats = ['A5', 'A6', 'B8', 'C3', 'C4', 'D9', 'E7'];

  const getSeatStatus = (seatId: string) => {
    if (unavailableSeats.includes(seatId)) return 'unavailable';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  const toggleSeat = (seatId: string) => {
    if (unavailableSeats.includes(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const seatPrice = 250;
  const totalPrice = selectedSeats.length * seatPrice;
  const convenienceFee = selectedSeats.length * 25;
  const finalPrice = totalPrice + convenienceFee;

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(`Processing payment via ${paymentMethod}...`);
    // Here you can integrate with Razorpay, Stripe, etc.
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => onNavigate('movie-details', movie)}
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
            <p className="text-gray-400">PVR Cinemas - Phoenix Mall</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Seat Selection */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              {/* Date & Time Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Day After">Day After Tomorrow</option>
                  </select>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Screen */}
              <div className="mb-8">
                <div className="w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-2"></div>
                <p className="text-center text-gray-400 text-sm">SCREEN</p>
              </div>

              {/* Seat Map */}
              <div className="space-y-3 mb-8">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-center space-x-2">
                    <span className="w-6 text-center text-gray-400 font-semibold">{row}</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: seatsPerRow }, (_, i) => {
                        const seatNumber = i + 1;
                        const seatId = `${row}${seatNumber}`;
                        const status = getSeatStatus(seatId);
                        return (
                          <button
                            key={seatId}
                            onClick={() => toggleSeat(seatId)}
                            disabled={status === 'unavailable'}
                            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                              status === 'selected'
                                ? 'bg-cyan-500 text-white'
                                : status === 'unavailable'
                                ? 'bg-red-500/20 text-red-400 cursor-not-allowed border border-red-500/30'
                                : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:border-white/40'
                            }`}
                          >
                            {seatNumber}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-white/10 border border-white/20 rounded"></div>
                  <span className="text-gray-400">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                  <span className="text-gray-400">Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500/20 border border-red-500/30 rounded"></div>
                  <span className="text-gray-400">Unavailable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary + Payment */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Booking Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-semibold">{selectedSeats.length} Tickets</p>
                    <p className="text-gray-400 text-sm">
                      {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Tickets ({selectedSeats.length} × ₹{seatPrice})</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-gray-400">
                    <span>Convenience Fee</span>
                    <span>₹{convenienceFee}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t border-white/20 pt-2">
                    <span>Total</span>
                    <span className="text-cyan-400">₹{finalPrice}</span>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              {selectedSeats.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Select Payment Method</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg cursor-pointer hover:bg-white/10">
                      <input
                        type="radio"
                        name="payment"
                        value="PhonePe"
                        checked={paymentMethod === 'PhonePe'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Smartphone className="w-5 h-5 text-cyan-400" />
                      <span>PhonePe</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg cursor-pointer hover:bg-white/10">
                      <input
                        type="radio"
                        name="payment"
                        value="Google Pay"
                        checked={paymentMethod === 'Google Pay'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Smartphone className="w-5 h-5 text-green-400" />
                      <span>Google Pay</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg cursor-pointer hover:bg-white/10">
                      <input
                        type="radio"
                        name="payment"
                        value="Paytm"
                        checked={paymentMethod === 'Paytm'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Smartphone className="w-5 h-5 text-blue-400" />
                      <span>Paytm</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg cursor-pointer hover:bg-white/10">
                      <input
                        type="radio"
                        name="payment"
                        value="Credit/Debit Card"
                        checked={paymentMethod === 'Credit/Debit Card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <CreditCard className="w-5 h-5 text-yellow-400" />
                      <span>Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg cursor-pointer hover:bg-white/10">
                      <input
                        type="radio"
                        name="payment"
                        value="Net Banking"
                        checked={paymentMethod === 'Net Banking'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <Globe className="w-5 h-5 text-purple-400" />
                      <span>Net Banking</span>
                    </label>
                  </div>
                </div>
              )}

              <button
                disabled={selectedSeats.length === 0}
                onClick={handlePayment}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                  selectedSeats.length > 0
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay Now</span>
              </button>

              <p className="text-gray-400 text-xs text-center mt-4">
                By proceeding, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
