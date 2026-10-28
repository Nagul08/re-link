import React, { useState } from 'react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Need Request',
      tag: 'INPUT PROTOCOL',
      subtitle: 'Capturing ground truth without cellular broadband',
      description:
        'Isolated communities or local coordinators submit supply requests—detailing family count, water, food, or medical needs—using any active channel (offline SMS, LoRa packet, or mesh node).',
      metric: 'Zero-data fallback enabled'
    },
    {
      num: '02',
      title: 'Coordinate & Triage',
      tag: 'DE-DUPLICATION',
      subtitle: 'Aggregating fragments into actionable manifests',
      description:
        'RELINK aggregates fragmentary packets, flags duplicate requests, cross-references hazard maps, and generates a unified, prioritized needs roster for responders.',
      metric: 'Automated conflict resolution'
    },
    {
      num: '03',
      title: 'Match Supplies',
      tag: 'LOGISTICS ENGINE',
      subtitle: 'Pairing available stocks with proximity priority',
      description:
        'Inventories from regional depots, local food providers, and partner NGOs are mapped and paired against urgent requests based on route viability and urgency.',
      metric: 'Proximity-optimized dispatch'
    },
    {
      num: '04',
      title: 'Deliver & Verify',
      tag: 'LAST-MILE LOOP',
      subtitle: 'Digital confirmation synced upon node reconnect',
      description:
        'Volunteers and response teams navigate field routes, distribute supplies to families, and log digital receipts offline that sync back as soon as nodes re-connect.',
      metric: 'Offline cryptographic receipts'
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
            Operational Architecture
          </span>
          <h2 className="section-title">How RELINK closes the last-mile loop.</h2>
          <p className="section-subtitle">
            A resilient four-stage coordination cycle that functions whether conventional telecom infrastructure is fully online or completely severed.
          </p>
        </div>

        {/* Desktop Process Bar */}
        <div className="process-nav-bar" style={{ marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              backgroundColor: 'var(--bg-700)',
              padding: '0.75rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)'
            }}
          >
            {steps.map((st, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                style={{
                  background: activeStep === i ? 'var(--bg-800)' : 'transparent',
                  border: activeStep === i ? '1px solid var(--link)' : '1px solid transparent',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--trans-fast)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: activeStep === i ? 'var(--aid)' : 'var(--text-500)'
                  }}
                >
                  {st.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: activeStep === i ? 'var(--text-100)' : 'var(--text-300)'
                  }}
                >
                  {st.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={index}
                className={`card ${isSelected ? 'card--active' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{
                  backgroundColor: 'var(--bg-700)',
                  border: isSelected ? '1px solid var(--link)' : '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem 1.75rem',
                  cursor: 'pointer'
                }}
              >
                <div>
                  {/* Step Number Circle */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? 'var(--link-10)' : 'var(--bg-800)',
                        border: isSelected ? '2px solid var(--link)' : '2px solid var(--border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--link)' : 'var(--text-500)',
                        boxShadow: isSelected ? '0 0 20px rgba(45, 212, 191, 0.3)' : 'none',
                        transition: 'all var(--trans-fast)'
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
                      fontSize: '1.25rem',
                      color: 'var(--text-100)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--link)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '1rem'
                    }}
                  >
                    {step.subtitle}
                  </div>

                  <p
                    style={{
                      color: 'var(--text-300)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      margin: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-500)'
                  }}
                >
                  <span style={{ color: 'var(--aid)' }}>✓</span>
                  <span>{step.metric}</span>
                </div>
              </div>
            );
          })}
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
            Proposed Protocol • Designed for store-and-forward mesh synchronization
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-nav-bar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
