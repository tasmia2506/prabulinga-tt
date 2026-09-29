import React from 'react';
import PaperCard from './scrapbook/PaperCard';
import { MapPin } from 'lucide-react';

export default function TravelStories() {
  const stories = [
    {
      id: 1,
      date: 'TRAVEL NOTE — 14 AUG 2026',
      title: 'Why the mist-covered hills of Coorg feel like home.',
      location: 'Coorg, Karnataka',
      excerpt: 'Waking up to freshly brewed coffee in Madikeri while rain taps against the window of our private coach...',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      date: 'JOURNAL LOG — 02 JUL 2026',
      title: 'Sunset reflections along the sacred beaches of Gokarna.',
      location: 'Gokarna Beach',
      excerpt: 'Beyond the crowded shores lies Kudle beach at dusk, where the Arabian sea meets ancient cliffside trails...',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      date: 'FIELD DIARY — 19 MAY 2026',
      title: 'Chasing stone chariots & timeless legends in Hampi.',
      location: 'Hampi Heritage Zone',
      excerpt: 'Walking among 14th-century boulders & Vijayanagara architecture with our veteran local guides...',
      image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-paper-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span>EDITORIAL MAGAZINE</span>
          </div>
          <h2 className="section-title">
            TRAVEL DIARY & FIELD NOTES
          </h2>
          <p className="section-desc">
            Stories, road trip reflections, & curated travel guides written by our team & travelers.
          </p>
        </div>

        {/* Stories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '2rem 1.75rem'
          }}
        >
          {stories.map((story) => (
            <PaperCard
              key={story.id}
              paperType="sheet"
              padding="0"
            >
              <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={story.image}
                  alt={story.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'var(--color-paper-sheet)',
                    border: '1px solid var(--color-border)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.675rem',
                    color: 'var(--color-forest)',
                    fontWeight: '700'
                  }}
                >
                  {story.date}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-handwriting)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-forest)', display: 'block', marginBottom: '0.2rem' }}>
                  <MapPin size={14} style={{ color: 'var(--color-terracotta)', display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} /> {story.location}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--color-ink)',
                    lineHeight: '1.25',
                    marginBottom: '0.5rem'
                  }}
                >
                  {story.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: '1.5', marginBottom: '1.1rem' }}>
                  {story.excerpt}
                </p>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.7rem', color: 'var(--color-ink-light)' }}>
                    3 MIN READ
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-terracotta)', cursor: 'pointer' }}>
                    Read Journal Note →
                  </span>
                </div>
              </div>
            </PaperCard>
          ))}
        </div>
      </div>
    </section>
  );
}

