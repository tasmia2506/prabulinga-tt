import React, { useState } from 'react';
import Seo from '../components/Seo';
import VehicleRentalCard from '../components/VehicleRentalCard';
import { VEHICLE_RENTAL_FLEET, VEHICLE_CATEGORIES, VEHICLE_RENTAL_TERMS } from '../data/vehicleRentalData';
import { Car, ShieldCheck, Info } from 'lucide-react';

export default function VehicleRentalPage({ config, onOpenBookingModal }) {
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredVehicles = VEHICLE_RENTAL_FLEET.filter(
    (v) => filterCategory === 'All' || v.category === filterCategory
  );

  const handleEnquire = (vehicle) => {
    onOpenBookingModal({
      serviceType: 'BusRental',
      selectedBus: vehicle.name,
      service: vehicle.name,
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title="Car & Tempo Traveller Rental"
        description="Hire sedans, SUVs & tempo travellers from Prabhuling Travel Agency for local, outstation & group trips. View seats, bags & amenities before you enquire."
        path="/vehicle-rental"
      />

      <div
        style={{
          backgroundColor: 'var(--color-terracotta)',
          padding: 'clamp(3.5rem, 8vw, 5.5rem) 1.25rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.85rem',
              color: 'var(--color-ink-solid)',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              marginBottom: '1rem',
            }}
          >
            <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-ink-solid)', display: 'inline-block' }} />
            CARS • TEMPO TRAVELLERS
            <span style={{ width: '28px', height: '2px', backgroundColor: 'var(--color-ink-solid)', display: 'inline-block' }} />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--color-ink-solid)',
              marginBottom: '1.1rem',
              lineHeight: 1.08,
            }}
          >
            Car & Tempo Traveller Rental
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-solid)', opacity: 0.85, lineHeight: 1.7, maxWidth: '680px', margin: '0 auto' }}>
            From a 4-seater sedan to a 17-seater tempo traveller — hire the right vehicle for your trip, with clear seats, bags & amenities shown upfront.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-ink)' }}>
            AVAILABLE VEHICLES
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
            Private hire through our verified driver-partner network — filter by vehicle type below.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.6rem 1.25rem',
                borderRadius: '30px',
                cursor: 'pointer',
                border: filterCategory === cat ? '1px solid var(--color-terracotta-hover)' : '1px solid var(--color-border)',
                backgroundColor: filterCategory === cat ? 'var(--color-terracotta)' : 'var(--color-paper-sheet)',
                color: filterCategory === cat ? 'var(--color-ink-solid)' : 'var(--color-ink-muted)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat === 'Cars' ? <Car size={14} style={{ marginRight: '0.4rem', verticalAlign: '-2px' }} /> : null}
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '2rem 1.75rem' }}>
          {filteredVehicles.map((vehicle) => (
            <VehicleRentalCard
              key={vehicle.id}
              vehicle={vehicle}
              whatsappNumber={config.whatsappNumber}
              phoneNumber={config.phoneNumber}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* Batta & Terms Note */}
        <div
          style={{
            marginTop: '3rem',
            backgroundColor: 'var(--color-paper-cream)',
            border: '1px solid var(--color-border)',
            borderRadius: '16px',
            padding: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
            <Info size={18} style={{ color: 'var(--color-terracotta-hover)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-ink)' }}>
              Driver Batta & Fare Terms
            </h3>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.5rem' }}>
            {VEHICLE_RENTAL_TERMS.map((term) => (
              <li
                key={term}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--color-forest)', flexShrink: 0, marginTop: '3px' }} />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
