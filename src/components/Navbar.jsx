import React, { useState, useEffect } from 'react';
import { LogoMark, MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'The Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Comms Stack', href: '#comms-stack' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Who It\'s For', href: '#who-its-for' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'problem', 'solution', 'how-it-works', 'comms-stack', 'objectives', 'who-its-for', 'roadmap'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(11, 18, 32, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        transition: 'border-color var(--trans-fast), background-color var(--trans-fast)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
          aria-label="RELINK Home"
        >
          <LogoMark size={32} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-100)',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              RELINK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: 'var(--aid)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '3px'
              }}
            >
              Concept Proposal
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.75rem', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--link)' : 'var(--text-300)',
                      position: 'relative',
                      padding: '0.5rem 0',
                      transition: 'color var(--trans-fast)'
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: 'var(--link)',
                          borderRadius: '1px'
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta" style={{ display: 'none' }}>
          <a
            href="#how-it-works"
            onClick={(e) => scrollTo(e, '#how-it-works')}
            className="btn btn--primary btn--sm"
          >
            See How It Works
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-100)',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            backgroundColor: 'var(--bg-800)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    style={{
                      display: 'block',
                      padding: '0.625rem 0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--link)' : 'var(--text-100)',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ paddingTop: '0.5rem' }}>
            <a
              href="#how-it-works"
              onClick={(e) => scrollTo(e, '#how-it-works')}
              className="btn btn--primary"
              style={{ width: '100%' }}
            >
              See How It Works
            </a>
          </div>
        </div>
      )}

      {/* Desktop Responsive CSS override */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block !important;
          }
          .desktop-cta {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
