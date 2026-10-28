import React from 'react';
import MeshCanvas from './MeshCanvas';
import Ticker from './Ticker';
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
    <>
      <section
        id="hero"
        className="hero-section"
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          overflow: 'hidden',
          backgroundColor: 'var(--bg-900)'
        }}
      >
        {/* Animated Mesh Canvas Background */}
        <MeshCanvas />

        <div className="container" style={{ position: 'relative', zIndex: 1, margin: 'auto 0' }}>
          <div style={{ maxWidth: '860px', width: '100%' }}>
            {/* Concept Status Indicator */}
            <div
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}
            >
              <span
                className="tag tag--concept"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.85rem'
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--aid)',
                    boxShadow: '0 0 10px var(--aid)'
                  }}
                />
                PROPOSED HUMANITARIAN CONCEPT
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-500)',
                  letterSpacing: '0.06em'
                }}
              >
                // OFFLINE-TOLERANT ARCHITECTURE
              </span>
            </div>

            {/* High-impact Bold Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.15rem, 5.5vw, 4.5rem)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: 'var(--text-100)',
                letterSpacing: '-0.035em',
                fontWeight: 700
              }}
            >
              Keeping relief connected <span style={{ color: 'var(--aid)' }}>when networks fail.</span>
            </h1>

            {/* Editorial Lead Paragraph */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                color: 'var(--text-300)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '64ch'
              }}
            >
              RELINK is a proposed disaster-response and relief-coordination framework designed to ensure food, drinking water, and essential supplies reach isolated communities during floods, cyclones, and landslides—even when conventional communications collapse.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '3rem'
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

            {/* Technical Capability Specs Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)'
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--link)',
                    marginBottom: '0.35rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  01 // MULTI-LAYER STACK
                </div>
                <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 600 }}>
                  Satellite, Mesh, RoIP, SMS, LoRaWAN
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--aid)',
                    marginBottom: '0.35rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  02 // COORDINATION ENGINE
                </div>
                <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 600 }}>
                  Preventing duplicated drops & blindspots
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--link)',
                    marginBottom: '0.35rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  03 // OFFLINE DISPATCH
                </div>
                <div style={{ color: 'var(--text-100)', fontSize: '0.9375rem', fontWeight: 600 }}>
                  Operates during full telecom blackout
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div style={{ textAlign: 'center', marginTop: '2rem', position: 'relative', zIndex: 1 }}>
          <a
            href="#problem"
            onClick={(e) => scrollTo(e, 'problem')}
            aria-label="Scroll down to the Problem section"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              color: 'var(--text-400)',
              border: '1px solid var(--border)',
              backgroundColor: 'rgba(8, 13, 26, 0.7)',
              backdropFilter: 'blur(8px)',
              transition: 'color var(--trans-fast), border-color var(--trans-fast)'
            }}
          >
            <ChevronDownIcon size={20} />
          </a>
        </div>
      </section>

      {/* Dynamic By Experience Style Continuous Ticker */}
      <Ticker />
    </>
  );
}
