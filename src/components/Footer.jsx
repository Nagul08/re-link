import React from 'react';
import { LogoMark } from './Icons';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-900)',
        borderTop: '1px solid var(--border)',
        paddingTop: '4.5rem',
        paddingBottom: '3.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* By Experience Inspired Big Bold Statement */}
        <div
          style={{
            paddingBottom: '3rem',
            marginBottom: '3.5rem',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--link)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontWeight: 600
            }}
          >
            // RESILIENT ARCHITECTURE FOR REAL-WORLD DISASTERS
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.85rem, 4.2vw, 3.5rem)',
              color: 'var(--text-100)',
              lineHeight: 1.15,
              maxWidth: '24ch',
              letterSpacing: '-0.03em',
              fontWeight: 700
            }}
          >
            MAKING LIGHT WORK OF WEIGHTY LOGISTICS.
          </h2>
        </div>

        {/* 4-Column Directory Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Col 1: Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <LogoMark size={32} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--text-100)',
                  letterSpacing: '-0.02em'
                }}
              >
                RELINK
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-400)',
                lineHeight: 1.65,
                maxWidth: '38ch',
                marginBottom: '1.25rem'
              }}
            >
              A proposed humanitarian-tech concept exploring resilient disaster coordination and multi-layer communication when networks fail.
            </p>
            <span className="tag tag--concept" style={{ fontSize: '0.6875rem' }}>
              Open Concept Proposal
            </span>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--link)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
                fontWeight: 600
              }}
            >
              Architecture & Concept
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <li>
                <a
                  href="#problem"
                  onClick={(e) => scrollTo(e, 'problem')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  onClick={(e) => scrollTo(e, 'solution')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  The Solution
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollTo(e, 'how-it-works')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#comms-stack"
                  onClick={(e) => scrollTo(e, 'comms-stack')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Resilient Comms Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--link)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
                fontWeight: 600
              }}
            >
              Ecosystem & Roadmap
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <li>
                <a
                  href="#objectives"
                  onClick={(e) => scrollTo(e, 'objectives')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Core Objectives
                </a>
              </li>
              <li>
                <a
                  href="#who-its-for"
                  onClick={(e) => scrollTo(e, 'who-its-for')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Who It's For
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  onClick={(e) => scrollTo(e, 'roadmap')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-100)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Intended Impact & Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Placeholder */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--aid)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
                fontWeight: 600
              }}
            >
              Inquiries & Pilots
            </h4>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-400)',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}
            >
              For inquiries regarding concept prototyping, research partnerships, or disaster-management pilot integration:
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-100)',
                backgroundColor: 'var(--bg-800)',
                padding: '0.625rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                width: 'fit-content'
              }}
            >
              contact@relink-concept.org
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingTop: '2.5rem'
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-500)' }}>
            © {new Date().getFullYear()} RELINK. Designed for humanitarian resilience. Fully accessible (WCAG AA compliant).
          </div>

          <a
            href="#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--link)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              minHeight: '44px',
              padding: '0 0.5rem'
            }}
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
