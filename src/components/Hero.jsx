import React from 'react';
import MeshCanvas from './MeshCanvas';
import { ArrowRightIcon, ChevronDownIcon } from './Icons';

export default function Hero() {
  const scrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-900)'
      }}
    >
      {/* Drifting mesh network background */}
      <MeshCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Concept Badge */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              className="tag tag--concept"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                padding: '0.35rem 0.85rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--aid)',
                  boxShadow: '0 0 10px var(--aid)'
                }}
              />
              Proposed Humanitarian Tech Concept
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: 'var(--text-100)',
              letterSpacing: '-0.025em'
            }}
          >
            Keeping relief connected <span style={{ color: 'var(--aid)' }}>when networks fail.</span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.35rem)',
              color: 'var(--text-300)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '62ch'
            }}
          >
            RELINK is a proposed disaster-response and relief-coordination framework designed to ensure food, drinking water, and essential medical supplies reach isolated communities during floods, cyclones, and landslides.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '3.5rem'
            }}
          >
            <a
              href="#how-it-works"
              onClick={(e) => scrollTo(e, 'how-it-works')}
              className="btn btn--primary"
            >
              See How It Works
              <ArrowRightIcon size={18} />
            </a>

            <a
              href="#comms-stack"
              onClick={(e) => scrollTo(e, 'comms-stack')}
              className="btn btn--secondary"
            >
              Explore Comms Stack
            </a>
          </div>

          {/* Key Concept Attributes Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--link)',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.05em'
                }}
              >
                MULTI-LAYER RESILIENCE
              </div>
              <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 500 }}>
                Satellite, Mesh, RoIP, SMS, LoRaWAN
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--aid)',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.05em'
                }}
              >
                COORDINATION FOCUS
              </div>
              <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 500 }}>
                Eliminating duplicated drops & blindspots
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--link)',
                  marginBottom: '0.35rem',
                  letterSpacing: '0.05em'
                }}
              >
                INFRASTRUCTURE-AGNOSTIC
              </div>
              <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 500 }}>
                Functions during central grid blackouts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#problem"
        onClick={(e) => scrollTo(e, 'problem')}
        aria-label="Scroll down to the Problem section"
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          color: 'var(--text-500)',
          border: '1px solid var(--border)',
          transition: 'color var(--trans-fast), border-color var(--trans-fast)'
        }}
      >
        <ChevronDownIcon size={20} />
      </a>
    </section>
  );
}
