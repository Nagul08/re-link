import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Need Request',
      tag: 'INGESTION',
      description:
        'Isolated communities or local coordinators submit supply requests—detailing family count, water, food, or medical needs—using any active channel (offline SMS, LoRa packet, or mesh node).'
    },
    {
      num: '02',
      title: 'Coordinate & Triage',
      tag: 'AGGREGATION',
      description:
        'RELINK aggregates fragmentary packets, flags duplicate requests, cross-references hazard maps, and generates a unified, prioritized needs roster for responders.'
    },
    {
      num: '03',
      title: 'Match Supplies',
      tag: 'LOGISTICS',
      description:
        'Inventories from regional depots, local food providers, and partner NGOs are mapped and paired against urgent requests based on route viability and urgency.'
    },
    {
      num: '04',
      title: 'Deliver & Verify',
      tag: 'LAST-MILE',
      description:
        'Volunteers and response teams navigate field routes, distribute supplies to families, and log digital receipts offline that sync back as soon as nodes re-connect.'
    }
  ];

  return (
    <section id="how-it-works" className="section section--bg-800">
      <div className="container">
        {/* Header */}
        <div className="section-header section-header--center">
          <span className="section-eyebrow">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--link)'
              }}
            />
            Operational Flow
          </span>
          <h2 className="section-title">How RELINK closes the last-mile loop.</h2>
          <p className="section-subtitle">
            A resilient four-stage coordination cycle that functions whether conventional telecom infrastructure is fully online or completely severed.
          </p>
        </div>

        {/* Responsive Flow Diagram */}
        <div className="flow-container" style={{ position: 'relative', marginTop: '3rem' }}>
          {/* Desktop Connecting Line */}
          <div
            className="desktop-flow-line"
            style={{
              position: 'absolute',
              top: '40px',
              left: '12%',
              right: '12%',
              height: '2px',
              borderTop: '2px dashed var(--link)',
              opacity: 0.45,
              zIndex: 0
            }}
          />

          {/* Steps Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="card flow-step-card"
                style={{
                  backgroundColor: 'var(--bg-700)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.75rem 1.5rem',
                  position: 'relative'
                }}
              >
                {/* Step Number Circle with Signal Pulse */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-800)',
                      border: '2px solid var(--link)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: 'var(--link)',
                      boxShadow: '0 0 15px rgba(45, 212, 191, 0.25)'
                    }}
                  >
                    {step.num}
                  </div>
                  <span className="tag" style={{ fontSize: '0.6875rem' }}>
                    {step.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-100)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-300)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concept Flow Legend Notice */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center'
          }}
        >
          <span
            className="tag tag--concept"
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.85rem' }}
          >
            Concept Protocol • Designed for store-and-forward mesh synchronization
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-flow-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
