import React from 'react';
import MapFragment from '../components/scrapbook/MapFragment';
import Seo from '../components/Seo';

const SECTION_HEADING_STYLE = {
  fontFamily: 'var(--font-display)',
  fontSize: '1.35rem',
  fontWeight: '800',
  color: 'var(--color-ink)',
  marginTop: '2.25rem',
  marginBottom: '0.85rem'
};

const PARAGRAPH_STYLE = {
  fontSize: '1rem',
  color: 'var(--color-ink-muted)',
  lineHeight: '1.75',
  marginBottom: '1rem'
};

const LIST_STYLE = {
  ...PARAGRAPH_STYLE,
  paddingLeft: '1.25rem',
  margin: '0 0 1rem 0'
};

export default function TermsPage({ config }) {
  const businessName = config?.businessName || 'Prabhuling Travel Agency';
  const address = config?.address || 'Terdal, Bagalkot District, Karnataka, India';
  const phone = config?.phoneNumber || '+91 80501 72818';

  return (
    <div style={{ backgroundColor: 'var(--color-paper-bg)', paddingBottom: '5rem', minHeight: '100vh' }}>
      <Seo
        title="Terms & Conditions"
        description={`The terms that apply when you enquire about or book a bus pass, vehicle rental, flight, train, or tour package through ${businessName}.`}
        path="/terms"
      />
      <MapFragment opacity={0.06} />

      {/* Header Banner */}
      <section style={{ backgroundColor: 'var(--color-paper-sheet)', borderBottom: '1px solid var(--color-border)', padding: '3.5rem 0 3rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="section-tag">
              TERMS
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: 'var(--color-ink)',
                marginTop: '0.75rem',
                marginBottom: '0.85rem'
              }}
            >
              Terms &amp; Conditions
            </h1>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-ink-muted)', lineHeight: '1.65' }}>
              The terms that apply when you enquire about, or book, a bus pass, vehicle rental, flight, train, or tour package through {businessName}.
            </p>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-light)', marginTop: '0.75rem' }}>
              Last updated: 30 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{ maxWidth: '780px' }}>

          <h2 style={{ ...SECTION_HEADING_STYLE, marginTop: 0 }}>1. Acceptance of these terms</h2>
          <p style={PARAGRAPH_STYLE}>
            By using this website, submitting an enquiry or booking form, or contacting us over phone or WhatsApp, you agree to these Terms &amp; Conditions. If you do not agree, please do not use our services. These terms should be read together with our <a href="/privacy-policy" style={{ color: 'var(--color-terracotta-hover)', fontWeight: '700' }}>Privacy Policy</a>.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>2. What we offer</h2>
          <p style={PARAGRAPH_STYLE}>
            {businessName} is a Bagalkot-based travel agency that helps you book bus passes on our own fleet, arrange bus/vehicle rental &amp; charter, and assists with flight and train ticket enquiries and tour &amp; holiday packages. For flights, trains, and third-party tour components, we act as a booking assistant/agent — the actual carriage, accommodation or activity is provided by the relevant airline, railway, hotel, or partner operator, subject to their own terms.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>3. Enquiries &amp; bookings</h2>
          <ul style={LIST_STYLE}>
            <li>Submitting the booking form, calling us, or messaging us on WhatsApp is an enquiry, not a confirmed booking.</li>
            <li>A booking is confirmed only once our desk verbally or in writing (WhatsApp/call) confirms your seat, vehicle, or reservation and, where applicable, receives any advance payment agreed with you.</li>
            <li>Fares, seat availability and vehicle availability shown on the site are indicative and subject to change until confirmed by our desk.</li>
            <li>You are responsible for giving us accurate travel dates, passenger names, contact details and any special requirements.</li>
          </ul>

          <h2 style={SECTION_HEADING_STYLE}>4. Pricing &amp; payment</h2>
          <p style={PARAGRAPH_STYLE}>
            Prices quoted are per the fare/rate applicable at the time of confirmation and may vary with season, availability, fuel surcharges, or route. We do not process card/online payments through this website; payment is arranged directly with our desk (cash, UPI, or bank transfer) as agreed at the time of booking. Always ask for and keep a receipt or written confirmation of any payment made.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>5. Cancellations &amp; refunds</h2>
          <ul style={LIST_STYLE}>
            <li>Cancellation requests must be made directly to our desk by phone or WhatsApp, quoting your booking details.</li>
            <li>Refund eligibility and any cancellation charges depend on how close to the travel date you cancel, and — for flights, trains and third-party packages — on the fare rules and cancellation policy of the airline, railway or partner operator, which we will communicate to you at the time of booking.</li>
            <li>No-shows and cancellations made after departure are not eligible for a refund.</li>
            <li>Approved refunds are processed back to the original payment method or as otherwise agreed, typically within 7–14 business days.</li>
          </ul>

          <h2 style={SECTION_HEADING_STYLE}>6. Passenger conduct &amp; responsibilities</h2>
          <p style={PARAGRAPH_STYLE}>
            Passengers must carry valid identification where required, arrive at the pickup point on time, and follow the driver's/operator's safety instructions. We reserve the right to refuse travel to any passenger who is intoxicated, abusive, or behaves in a manner that endangers themselves, other passengers, or staff, without a refund.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>7. Luggage &amp; belongings</h2>
          <p style={PARAGRAPH_STYLE}>
            Please carry only reasonable, personal luggage and keep valuables with you at all times. We take reasonable care of checked luggage in the hold, but are not liable for cash, jewellery, electronics or other valuables left in the luggage compartment, or for delays/loss caused by circumstances outside our control.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>8. Delays, breakdowns &amp; force majeure</h2>
          <p style={PARAGRAPH_STYLE}>
            Travel times are estimates. We are not liable for delays, missed connections, or additional costs arising from traffic, weather, road conditions, mechanical breakdowns, strikes, government restrictions, or other events beyond our reasonable control. Where possible, we will inform you promptly and offer reasonable alternatives.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>9. Liability</h2>
          <p style={PARAGRAPH_STYLE}>
            Our liability for any claim relating to a booking made through us is limited to the value of that booking. We are not liable for indirect or consequential loss. Nothing in these terms limits liability that cannot lawfully be limited or excluded, such as liability for death or personal injury caused by our negligence.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>10. Third-party operators</h2>
          <p style={PARAGRAPH_STYLE}>
            Where a bus route is operated by a partner company (for example, on our shared Terdal ↔ Bengaluru route), or where you book a flight, train, hotel or tour component, the operator's own terms, fare rules and liability limits apply in addition to these terms. We help you contact and book with them but are not the carrier or service provider ourselves in those cases.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>11. Website use</h2>
          <p style={PARAGRAPH_STYLE}>
            You agree to use this website only for lawful purposes and not to misuse the booking form, WhatsApp links, or content on the site. We may update, suspend, or discontinue any part of the website or its features at any time without notice.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>12. Changes to these terms</h2>
          <p style={PARAGRAPH_STYLE}>
            We may update these Terms &amp; Conditions from time to time. The "Last updated" date at the top shows the current version. Continued use of our services after an update means you accept the revised terms.
          </p>

          <h2 style={SECTION_HEADING_STYLE}>13. Contact us</h2>
          <p style={PARAGRAPH_STYLE}>
            For any question about these terms, or about an existing enquiry or booking, contact us:
          </p>
          <p style={{ ...PARAGRAPH_STYLE, fontWeight: '700', color: 'var(--color-ink)' }}>
            {businessName}<br />
            {address}<br />
            Phone / WhatsApp: {phone}
          </p>

          <h2 style={SECTION_HEADING_STYLE}>14. Governing law</h2>
          <p style={PARAGRAPH_STYLE}>
            These terms are governed by the laws of India. Any dispute relating to them is subject to the exclusive jurisdiction of the courts at Bagalkot, Karnataka.
          </p>
        </div>
      </div>
    </div>
  );
}
