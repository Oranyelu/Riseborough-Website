import React, { useState } from 'react';
import { format, differenceInDays } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { X } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorText, setErrorText] = useState('');

  if (!isOpen) return null;

  const PRICE_PER_NIGHT = 250000; // Simulated Naira value (250k)

  const handleNext = () => {
    if (!range.from || !range.to) {
      setErrorText("Please select both a check-in and check-out date.");
      return;
    }
    if (!formData.name || !formData.email) {
      setErrorText("Please provide your name and email.");
      return;
    }
    setErrorText("");
    setStep(2);
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setErrorText('');
    
    // Simulate API if keys are just placeholders
    const isMock = import.meta.env.VITE_SUPABASE_URL?.includes('placeholder') || !import.meta.env.VITE_SUPABASE_URL;

    try {
      if (!isMock) {
        const { error } = await supabase
          .from('bookings')
          .insert([
            { 
              guest_name: formData.name, 
              guest_email: formData.email,
              guest_phone: formData.phone,
              check_in: range.from,
              check_out: range.to,
              total_price: differenceInDays(range.to, range.from) * PRICE_PER_NIGHT,
              status: 'confirmed'
            }
          ]);

        if (error) throw error;
      } else {
        // Mock delay
        await new Promise(res => setTimeout(res, 1500));
        console.warn("Using mock booking. Please configure Supabase in .env.local to save reservations globally.");
      }

      setStep(3); // Success
    } catch (err) {
      console.error(err);
      setErrorText("There was an issue processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setRange({ from: undefined, to: undefined });
    setFormData({ name: '', email: '', phone: '' });
    setErrorText('');
    onClose();
  };

  // Calculate totals
  const nights = (range.from && range.to) ? differenceInDays(range.to, range.from) : 0;
  const totalCost = nights * PRICE_PER_NIGHT;

  return (
    <div className="modal-overlay">
      <div className={`modal-container ${step === 3 ? 'success-modal' : ''}`}>
        <button className="close-btn" onClick={resetAndClose}>
          <X size={24} />
        </button>

        {step === 1 && (
          <div className="modal-content step-1">
            <div className="modal-header">
              <h2>Select Your Dates</h2>
              <p>Minimum 1 night stay required.</p>
            </div>
            
            <div className="booking-layout">
              <div className="calendar-container">
                <DayPicker
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  disabled={[{ before: new Date() }]} // Disable past dates
                  className="riseborough-calendar"
                />
              </div>

              <div className="guest-info-container">
                <h3>Guest Information</h3>
                <div className="input-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="input-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="+234..."
                  />
                </div>
                
                {errorText && <p className="error-text">{errorText}</p>}
                
                <button className="btn-primary full-width" onClick={handleNext}>
                  Review Reservation
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="modal-content step-2">
            <div className="modal-header">
              <h2>Confirm & Pay</h2>
              <p>Review the details of your stay.</p>
            </div>
            
            <div className="summary-card">
              <div className="summary-row">
                <span>Check-in:</span>
                <strong>{range.from ? format(range.from, 'PPP') : ''}</strong>
              </div>
              <div className="summary-row">
                <span>Check-out:</span>
                <strong>{range.to ? format(range.to, 'PPP') : ''}</strong>
              </div>
              <div className="summary-row">
                <span>Guest:</span>
                <strong>{formData.name}</strong>
              </div>
              <hr />
              <div className="summary-row">
                <span>Rate per Night:</span>
                <span>₦{PRICE_PER_NIGHT.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Nights:</span>
                <span>{nights}</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <strong>₦{totalCost.toLocaleString()}</strong>
              </div>
            </div>

            {errorText && <p className="error-text">{errorText}</p>}

            <div className="action-buttons">
              <button className="btn-secondary" onClick={() => setStep(1)} disabled={isSubmitting}>
                Back
              </button>
              <button className="btn-primary" onClick={handleConfirm} disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="modal-content step-3">
            <div className="success-icon">✓</div>
            <h2>Arrive. Exhale. Arise.</h2>
            <p>Your reservation is confirmed. A receipt has been sent to your email.</p>
            <p className="booking-ref">Booking Reference: RBA-{Math.floor(Math.random() * 90000) + 10000}</p>
            <button className="btn-primary mt-6" onClick={resetAndClose}>
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
