import React, { useState } from 'react';
import { Bus, Plane, Train, Compass, Car, Send, CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import MapFragment from '../components/scrapbook/MapFragment';
import Seo from '../components/Seo';

export default function GeneralBookingPage({ config }) {
  const [selectedService, setSelectedService] = useState('Bus');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromCity: '',
    toCity: '',
    travelDate: new Date().toISOString().split('T')[0],
    passengers: 1,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { id: 'Bus', label: 'Bus Pass', icon: Bus },
    { id: 'Flight', label: 'Flight Ticket', icon: Plane },
    { id: 'Train', label: 'Railway Ticket', icon: Train },
    { id: 'TourPackage', label: 'Tour Package', icon: Compass },
    { id: 'VehicleRental', label: 'Bus Charter', icon: Car },
    { id: 'Other', label: 'Other Query', icon: Send },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = (config?.whatsappNumber || '918050172818').replace(/[^0-9]/g, '');
    const serviceLabel = servicesList.find((s) => s.id === selectedService)?.label || selectedService;

    let messageText = `*PRABHULING TRAVEL AGENCY — BOOKING MANIFESTO*\n`;
    messageText += `--------------------------------------\n`;
    messageText += `👤 *FULL NAME*: ${formData.name}\n`;
    messageText += `📞 *MOBILE*: ${formData.phone}\n`;
    messageText += `🧭 *SERVICE REQUIRED*: ${serviceLabel}\n`;
    if (formData.fromCity) messageText += `📍 *FROM CITY*: ${formData.fromCity}\n`;
    if (formData.toCity) messageText += `📍 *TO DESTINATION*: ${formData.toCity}\n`;
    messageText += `📅 *TRAVEL DATE*: ${formData.travelDate}\n`;
    messageText += `👥 *PASSENGERS*: ${formData.passengers}\n`;
    if (formData.message) messageText += `💬 *NOTES*: ${formData.message}\n`;
    messageText += `--------------------------------------\n`;
    messageText += `*Sent via Booking Manifesto Form*`;

    const waUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank');
    setIsSubmitted(true);
  };

  const fieldStyle = {
    width: '100%',
    padding: '0.8rem 0.9rem',
    borderRadius: '8px',
    border: '1.5px solid var(--color-border)',
    backgroundColor: 'var(--color-paper-cream)',
    fontFamily: 'var(--font-sans)',
    color: 'var(--color-ink)'
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-typewriter)',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--color-ink)',
    marginBottom: '0.4rem',
    letterSpacing: '0.06em'
  };

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingTop: '3rem', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title="Request a Free Quote"
        description="Request a free travel quote from Prabhuling Travel Agency & Online Services — bus, flight, railway, tour package or charter enquiries answered on WhatsApp or by phone."
        path="/booking"
      />
      <MapFragment opacity={0.06} />

      {/* Quick Quotation Desk Card */}
      <div className="container" style={{ maxWidth: '660px' }}>
        <div
          style={{
            backgroundColor: 'var(--color-paper-sheet)',
            borderRadius: '20px',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-stacked)',
            overflow: 'hidden'
          }}
        >
          {/* Dark Header */}
          <div style={{ backgroundColor: 'var(--color-ink-solid)', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <MessageSquare size={22} style={{ color: 'var(--color-ink)' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-terracotta)', letterSpacing: '0.12em', marginBottom: '0.2rem' }}>
                QUICK QUOTATION DESK
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '800', color: '#FFFFFF' }}>
                Request a Free Quote
              </h1>
            </div>
          </div>

          {/* Form Body */}
          <div style={{ padding: '2rem' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <CheckCircle2 size={46} style={{ color: 'var(--color-terracotta-hover)', margin: '0 auto 0.75rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontSize: '1.5rem', marginBottom: '0.35rem' }}>
                  Quote Request Sent to WhatsApp!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--color-ink-muted)' }}>
                  Thank you, <strong>{formData.name}</strong>. Our desk will contact you on <strong>{formData.phone}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Service Selector Tiles */}
                <div>
                  <label style={labelStyle}>SELECT SERVICE REQUIRED *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.6rem' }}>
                    {servicesList.map((item) => {
                      const IconComponent = item.icon;
                      const isSelected = selectedService === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedService(item.id)}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.75rem 0.5rem',
                            borderRadius: '10px',
                            border: isSelected ? '1.5px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                            backgroundColor: isSelected ? 'var(--color-terracotta)' : 'var(--color-paper-cream)',
                            color: 'var(--color-ink)',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            cursor: 'pointer'
                          }}
                        >
                          <IconComponent size={18} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>YOUR NAME *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ramesh Kulkarni" style={fieldStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>PHONE / WHATSAPP *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98XXX XXXXX" style={fieldStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>PICKUP LOCATION</label>
                    <input type="text" value={formData.fromCity} onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })} placeholder="e.g. Terdal / Bengaluru" style={fieldStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>DESTINATION</label>
                    <input type="text" value={formData.toCity} onChange={(e) => setFormData({ ...formData, toCity: e.target.value })} placeholder="e.g. Gokarna / Goa" style={fieldStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>TRAVEL DATE *</label>
                    <input type="date" required value={formData.travelDate} onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })} style={fieldStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>PASSENGERS</label>
                    <select value={formData.passengers} onChange={(e) => setFormData({ ...formData, passengers: Number(e.target.value) })} style={fieldStyle}>
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15, 25, 40].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>SPECIFIC REQUIREMENTS (OPTIONAL)</label>
                  <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Berth choices, flight class, luggage, or special requests..." style={fieldStyle} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: '2 1 260px', justifyContent: 'center' }}>
                    <Send size={18} /> SEND QUOTATION REQUEST (WHATSAPP)
                  </button>
                  <a
                    href={`tel:${(config?.phoneNumber || '').replace(/[^0-9+]/g, '')}`}
                    className="btn btn-outline"
                    style={{ flex: '1 1 140px', justifyContent: 'center', textDecoration: 'none' }}
                  >
                    <Phone size={18} /> CALL US
                  </a>
                </div>

                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-ink-muted)', textAlign: 'center', marginTop: '0.25rem' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--color-terracotta-hover)', flexShrink: 0 }} />
                  Free quote &middot; Transparent per-km rates &middot; Verified drivers &middot; 24/7 assistance
                </p>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-ink-light)', textAlign: 'center' }}>
                  By submitting, you agree to be contacted about this enquiry per our{' '}
                  <a href="/privacy-policy" target="_blank" rel="noreferrer" style={{ color: 'var(--color-terracotta-hover)', fontWeight: '700' }}>Privacy Policy</a>{' '}
                  and <a href="/terms" target="_blank" rel="noreferrer" style={{ color: 'var(--color-terracotta-hover)', fontWeight: '700' }}>Terms &amp; Conditions</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
