import React, { useState } from 'react';
import { FLEET_BUSES } from '../data/fleetData';
import { Bus, Calendar, MapPin, Users, Search, ShieldCheck, CheckCircle2, Phone, MessageSquare, Star, ArrowRight, Filter } from 'lucide-react';

export default function BusBookingPage({ config, onOpenBookingModal }) {
  const [fromCity, setFromCity] = useState('Bengaluru');
  const [toCity, setToCity] = useState('Goa');
  const [journeyDate, setJourneyDate] = useState(new Date().toISOString().split('T')[0]);
  const [passengers, setPassengers] = useState(1);
  const [busTypeFilter, setBusTypeFilter] = useState('All');

  const [selectedSeatBus, setSelectedSeatBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const filteredBuses = FLEET_BUSES.filter(bus => {
    if (busTypeFilter === 'Sleeper') return bus.type.includes('Sleeper');
    if (busTypeFilter === 'Seater') return bus.type.includes('Seater');
    if (busTypeFilter === 'AC') return bus.type.includes('AC');
    return true;
  });

  const toggleSeatSelection = (seatNo) => {
    if (selectedSeats.includes(seatNo)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNo));
    } else {
      setSelectedSeats([...selectedSeats, seatNo]);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg-main)', paddingBottom: '4.5rem' }}>
      {/* Page Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#FFFFFF', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '750px' }}>
            <div className="section-tag" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
              <Bus size={14} /> Direct Bus Reservation Engine
            </div>
            <h1 className="font-heading" style={{ color: '#FFFFFF', fontSize: '3.25rem', marginBottom: '0.75rem' }}>
              Bus Ticket Booking
            </h1>
            <p className="font-body" style={{ color: '#EAF5F0', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Book confirmed tickets across our own <strong>7 luxury AC sleeper & seater buses</strong>. Guaranteed seats, live GPS tracking, clean bedding, & zero hidden service fees.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Bus Search Bar */}
      <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>FROM CITY</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)' }} />
                <select value={fromCity} onChange={(e) => setFromCity(e.target.value)} style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: '#FAF7F2', fontWeight: '600' }}>
                  <option>Bengaluru</option>
                  <option>Mysuru</option>
                  <option>Mangaluru</option>
                  <option>Hubballi / Dharwad</option>
                  <option>Belagavi</option>
                  <option>Goa</option>
                  <option>Hyderabad</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>TO DESTINATION</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }} />
                <select value={toCity} onChange={(e) => setToCity(e.target.value)} style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: '#FAF7F2', fontWeight: '600' }}>
                  <option>Goa</option>
                  <option>Bengaluru</option>
                  <option>Mysuru</option>
                  <option>Mangaluru</option>
                  <option>Hyderabad</option>
                  <option>Shivamogga</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>JOURNEY DATE</label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-secondary)' }} />
                <input type="date" value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: '#FAF7F2', fontWeight: '600' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.35rem' }}>PASSENGERS</label>
              <div style={{ position: 'relative' }}>
                <Users size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }} />
                <select value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-strong)', backgroundColor: '#FAF7F2', fontWeight: '600' }}>
                  {[1, 2, 3, 4, 5, 6, 8, 10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Seat' : 'Seats'}</option>)}
                </select>
              </div>
            </div>

            <div>
              <button className="btn btn-primary" style={{ width: '100%', height: '46px' }}>
                <Search size={18} /> Search Available Buses
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Buses Results Container */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="font-heading" style={{ fontSize: '1.75rem', color: 'var(--color-primary)' }}>
              Available Buses ({fromCity} → {toCity})
            </h2>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Displaying available operated schedules for {journeyDate}
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#FFFFFF', padding: '0.3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            {['All', 'Sleeper', 'Seater', 'AC'].map(type => (
              <button
                key={type}
                onClick={() => setBusTypeFilter(type)}
                style={{
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.825rem',
                  fontWeight: '700',
                  border: 'none',
                  backgroundColor: busTypeFilter === type ? 'var(--color-primary)' : 'transparent',
                  color: busTypeFilter === type ? '#FFFFFF' : 'var(--color-text-muted)'
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Bus Listings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredBuses.map((bus) => (
            <div key={bus.id} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                
                {/* Left Info Column */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="badge badge-navy">{bus.busNumber}</span>
                    <span className="badge badge-accent">{bus.type}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <Star size={12} fill="currentColor" /> {bus.rating} ({bus.reviewsCount})
                    </span>
                  </div>

                  <h3 className="font-serif" style={{ fontSize: '1.45rem', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                    {bus.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                    {bus.category} • {bus.capacity} Seats Capacity
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {bus.amenities.slice(0, 4).map((item, idx) => (
                      <span key={idx} style={{ fontSize: '0.75rem', backgroundColor: '#FAF7F2', padding: '0.2rem 0.55rem', borderRadius: '4px', border: '1px solid var(--color-border)', color: 'var(--color-text-main)' }}>
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Schedule Column */}
                <div style={{ backgroundColor: '#FAF7F2', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Departure & Route</div>
                  <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {bus.schedule}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                    Primary Route: {bus.primaryRoute}
                  </div>
                </div>

                {/* Right Action Column */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Ticket Fare per Seat</div>
                  <div style={{ fontSize: '1.65rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                    ₹{bus.startingPrice}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setSelectedSeatBus(selectedSeatBus === bus.id ? null : bus.id)}
                    >
                      {selectedSeatBus === bus.id ? 'Hide Seats' : 'Select Seat'}
                    </button>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenBookingModal({ serviceType: 'Bus', selectedBus: bus.name, fromCity, toCity, journeyDate })}
                    >
                      Book Ticket <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Interactive Seat Layout Preview Drawer */}
              {selectedSeatBus === bus.id && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', backgroundColor: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                      Interactive Seat Availability Diagram ({bus.seatLayout.type})
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', border: '1px solid var(--color-border-strong)', backgroundColor: '#FFFFFF' }}></span> Available</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--color-accent)' }}></span> Selected</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--color-border-strong)' }}></span> Booked</span>
                    </div>
                  </div>

                  {/* Seat Grid Diagram */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))', gap: '0.5rem', maxWidth: '480px', margin: '0 auto 1.25rem auto' }}>
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((seat) => {
                      const isBooked = [3, 7, 12].includes(seat);
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          disabled={isBooked}
                          onClick={() => toggleSeatSelection(seat)}
                          style={{
                            height: '42px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            border: isSelected ? 'none' : '1px solid var(--color-border-strong)',
                            backgroundColor: isBooked ? '#D4BE98' : isSelected ? 'var(--color-accent)' : '#FFFFFF',
                            color: isSelected ? '#FFFFFF' : isBooked ? '#8DA39A' : 'var(--color-primary)',
                            cursor: isBooked ? 'not-allowed' : 'pointer'
                          }}
                        >
                          S{seat}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem' }}>
                    <div style={{ fontSize: '0.875rem' }}>
                      Selected Seats: <strong>{selectedSeats.length > 0 ? selectedSeats.map(s => `S${s}`).join(', ') : 'None'}</strong> | Total: <strong>₹{selectedSeats.length * bus.startingPrice}</strong>
                    </div>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenBookingModal({ serviceType: 'Bus', selectedBus: bus.name, selectedSeats: selectedSeats.map(s => `S${s}`).join(', '), totalAmount: selectedSeats.length * bus.startingPrice })}
                    >
                      Proceed to Book Selected ({selectedSeats.length}) Seats
                    </button>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
