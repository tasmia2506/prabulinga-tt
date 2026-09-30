import React, { useState } from 'react';
import { Bus, Plane, Train, Calendar, MapPin, Users, Search, ArrowRightLeft, Sparkles, Compass } from 'lucide-react';

export default function BookingPanel({ onOpenBookingModal }) {
  const [activeTab, setActiveTab] = useState('Bus');

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [preference, setPreference] = useState('');

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenBookingModal({
      serviceType: activeTab,
      from: fromCity,
      to: toCity,
      date: date,
      passengers: passengers,
      preference: preference
    });
  };

  return (
    <section id="booking" style={{ marginTop: '-3.5rem', position: 'relative', zIndex: 30, paddingBottom: '2.5rem' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: '#FDFBF7',
            borderRadius: '12px',
            border: '1px solid rgba(195, 180, 160, 0.45)',
            boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.14)',
            overflow: 'hidden'
          }}
        >
          {/* Service Selector Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(195, 180, 160, 0.3)', backgroundColor: '#F5EFE3' }}>
            <button
              onClick={() => { setActiveTab('Bus'); setPreference('AC Sleeper'); }}
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderBottom: activeTab === 'Bus' ? '3px solid var(--color-terracotta)' : '3px solid transparent',
                backgroundColor: activeTab === 'Bus' ? '#FDFBF7' : 'transparent',
                color: activeTab === 'Bus' ? 'var(--color-terracotta)' : 'var(--color-ink-muted)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Bus size={18} /> BUS FLEET PASS
            </button>

            <button
              onClick={() => { setActiveTab('Flight'); setPreference('Economy'); }}
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderBottom: activeTab === 'Flight' ? '3px solid var(--color-ocean-blue)' : '3px solid transparent',
                backgroundColor: activeTab === 'Flight' ? '#FDFBF7' : 'transparent',
                color: activeTab === 'Flight' ? 'var(--color-ocean-blue)' : 'var(--color-ink-muted)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Plane size={18} /> FLIGHT DESK
            </button>

            <button
              onClick={() => { setActiveTab('Train'); setPreference('General'); }}
              style={{
                flex: 1,
                padding: '1rem 1.25rem',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.85rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderBottom: activeTab === 'Train' ? '3px solid var(--color-forest)' : '3px solid transparent',
                backgroundColor: activeTab === 'Train' ? '#FDFBF7' : 'transparent',
                color: activeTab === 'Train' ? 'var(--color-forest)' : 'var(--color-ink-muted)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <Train size={18} /> RAILWAY DESK
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} style={{ padding: '1.75rem 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', alignItems: 'end' }}>
              
              {/* From Field */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                  ORIGIN CITY
                </label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={17} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-terracotta)' }} />
                  <input
                    type="text"
                    placeholder={activeTab === 'Bus' ? 'e.g. Bengaluru' : activeTab === 'Flight' ? 'e.g. BLR' : 'e.g. SBC (KSR)'}
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    required
                    style={{ width: '100%', padding: '0.75rem 0.85rem 0.75rem 2.4rem', border: '1px solid var(--color-border)', borderRadius: '6px', outline: 'none', fontWeight: '600', backgroundColor: '#F5EFE3', color: 'var(--color-ink)' }}
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.2rem' }}>
                <button
                  type="button"
                  onClick={handleSwap}
                  title="Swap Cities"
                  style={{ padding: '0.65rem', borderRadius: '50%', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF', color: 'var(--color-forest)', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
                >
                  <ArrowRightLeft size={16} />
                </button>
              </div>

              {/* To Field */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                  DESTINATION CITY
                </label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={17} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-terracotta)' }} />
                  <input
                    type="text"
                    placeholder={activeTab === 'Bus' ? 'e.g. Gokarna / Coorg' : activeTab === 'Flight' ? 'e.g. DEL / GOI' : 'e.g. MYS'}
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    required
                    style={{ width: '100%', padding: '0.75rem 0.85rem 0.75rem 2.4rem', border: '1px solid var(--color-border)', borderRadius: '6px', outline: 'none', fontWeight: '600', backgroundColor: '#F5EFE3', color: 'var(--color-ink)' }}
                  />
                </div>
              </div>

              {/* Date Field */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                  TRAVEL DATE
                </label>
                <div style={{ position: 'relative' }}>
                  <Calendar size={17} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-forest)' }} />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    style={{ width: '100%', padding: '0.75rem 0.85rem 0.75rem 2.4rem', border: '1px solid var(--color-border)', borderRadius: '6px', outline: 'none', fontWeight: '600', backgroundColor: '#F5EFE3', color: 'var(--color-ink)' }}
                  />
                </div>
              </div>

              {/* Passengers Field */}
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.725rem', color: 'var(--color-ink-light)', marginBottom: '0.35rem', letterSpacing: '0.08em' }}>
                  PASSENGERS
                </label>
                <div style={{ position: 'relative' }}>
                  <Users size={17} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-forest)' }} />
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 0.85rem 0.75rem 2.4rem', border: '1px solid var(--color-border)', borderRadius: '6px', outline: 'none', fontWeight: '600', backgroundColor: '#F5EFE3', color: 'var(--color-ink)' }}
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Group Booking</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '6px',
                    backgroundColor: activeTab === 'Bus' ? 'var(--color-terracotta)' : activeTab === 'Flight' ? 'var(--color-ocean-blue)' : 'var(--color-forest)'
                  }}
                >
                  <Search size={18} /> Check Availability →
                </button>
              </div>

            </div>
          </form>

          {/* Footer Strip */}
          <div style={{ backgroundColor: '#F5EFE3', padding: '0.65rem 1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-ink-muted)', fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              <Sparkles size={16} style={{ color: 'var(--color-terracotta)', display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} /> Direct human desk check — no hidden internet charges!
            </span>
            <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-forest)' }}>
              DESK HELPLINE: 98765 43210
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
