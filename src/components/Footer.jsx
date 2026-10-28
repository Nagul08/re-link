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
        paddingTop: '4rem',
        paddingBottom: '3rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand & Mission Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <LogoMark size={28} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
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
                color: 'var(--text-500)',
                lineHeight: 1.6,
                maxWidth: '40ch',
                marginBottom: '1rem'
              }}
            >
              A proposed humanitarian-tech concept exploring resilient disaster coordination and multi-layer communication when networks fail.
            </p>
            <span
              className="tag tag--concept"
              style={{ fontSize: '0.6875rem' }}
            >
              Open Concept Proposal
            </span>
          </div>

          {/* Architecture Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--link)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
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
                gap: '0.625rem'
              }}
            >
              <li>
                <a
                  href="#problem"
                  onClick={(e) => scrollTo(e, 'problem')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
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
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
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
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
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
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Resilient Comms Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Stakeholders & Roadmap */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--link)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}
            >
              Stakeholders & Plan
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem'
              }}
            >
              <li>
                <a
                  href="#objectives"
                  onClick={(e) => scrollTo(e, 'objectives')}
                  style={{ fontSize: '0.875rem', color: 'var(--text-300)' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
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
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
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
                  onMouseEnter={(e) => (e.target.style.color = 'var(--link)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-300)')}
                >
                  Intended Impact & Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries Placeholder */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--aid)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}
            >
              Collaboration & Contact
            </h4>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-500)',
                lineHeight: 1.6,
                marginBottom: '0.75rem'
              }}
            >
              For inquiries regarding concept prototyping, research partnerships, or disaster-management pilot integration:
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-300)',
                backgroundColor: 'var(--bg-800)',
                padding: '0.5rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                width: 'fit-content'
              }}
            >
              contact@relink-concept.org
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accessibility */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem'
          }}
        >
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-500)' }}>
            © {new Date().getFullYear()} RELINK. Designed for humanitarian resilience. Fully accessible (WCAG AA).
          </div>

          <a
            href="#hero"
            onClick={(e) => scrollTo(e, 'hero')}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--link)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
