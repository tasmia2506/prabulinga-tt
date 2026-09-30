import React, { useState } from 'react';
import { X, Settings, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ConfigDrawer({ config, onUpdateConfig, isOpen, onClose }) {
  if (!isOpen) return null;

  const [whatsapp, setWhatsapp] = useState(config.whatsappNumber);
  const [phone, setPhone] = useState(config.phoneNumber);
  const [address, setAddress] = useState(config.address);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateConfig({
      whatsappNumber: whatsapp,
      phoneNumber: phone,
      address: address
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 2500, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'flex-end' }} className="animate-fade-in">
      <div style={{ backgroundColor: '#FFFFFF', width: '100%', maxWidth: '420px', height: '100%', padding: '1.5rem', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Settings size={20} style={{ color: 'var(--color-accent)' }} />
              <h3 style={{ fontSize: '1.15rem' }}>Business Phone & Config</h3>
            </div>
            <button onClick={onClose} style={{ color: 'var(--color-text-muted)' }}>
              <X size={20} />
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--color-paper-cream)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.825rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            💡 <strong>Evaluation Note:</strong> Update the contact details below to test direct WhatsApp & Call links for Prabhuling Travel Agency.
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.3rem' }}>
                WhatsApp Number (with country code)
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontWeight: '600' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.3rem' }}>
                Helpline Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontWeight: '600' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-muted)', marginBottom: '0.3rem' }}>
                Agency Address
              </label>
              <textarea
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                style={{ width: '100%', padding: '0.65rem 0.75rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              <RefreshCw size={16} /> Save Business Details
            </button>

            {saved && (
              <div style={{ color: 'var(--color-gold-stamp)', fontSize: '0.85rem', fontWeight: '700', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                <CheckCircle2 size={16} /> Business Contact Updated Live!
              </div>
            )}
          </form>
        </div>

        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', textAlign: 'center' }}>
          Prabhuling Travel Agency — 3 Fleet Buses Config
        </div>

      </div>
    </div>
  );
}
