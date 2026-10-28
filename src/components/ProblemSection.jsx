import React from 'react';
import { SignalLossIcon, BlindspotIcon, DelayIcon } from './Icons';

export default function ProblemSection() {
  const problems = [
    {
      num: '01',
      icon: <SignalLossIcon size={26} />,
      tag: 'COMMUNICATION COLLAPSE',
      title: 'Disrupted Infrastructure & Blackouts',
      description:
        'When severe floods, cyclones, or landslides strike, mobile cell towers, fiber conduits, and power grids fail first. Communities cannot broadcast their urgent needs, and response units are rendered blind.'
    },
    {
      num: '02',
      icon: <BlindspotIcon size={26} />,
      tag: 'COORDINATION GAPS',
      title: 'Siloed Relief & Duplicate Drops',
      description:
        'Government agencies, international NGOs, and grassroots volunteer groups frequently operate in disconnected information silos. Without shared visibility, multiple teams dispatch identical supplies to the same accessible locations.'
    },
    {
      num: '03',
      icon: <DelayIcon size={26} />,
      tag: 'LAST-MILE BOTTLENECK',
      title: 'Delayed Aid to Isolated Pockets',
      description:
        'Because real-time updates cannot reach field teams, food, drinking water, and essential medicines fail to reach cut-off, vulnerable communities in time—turning logistical breakdowns into humanitarian crises.'
    }
  ];

  return (
    <section id="problem" className="section section--bg-800">
      <div className="container">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <span className="section-eyebrow" style={{ color: 'var(--alert)' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--alert)'
              }}
            />
            The Humanitarian Reality
          </span>
          <h2 className="section-title">When catastrophe strikes, coordination breaks down.</h2>
          <p className="section-subtitle">
            Natural disasters do not just destroy physical terrain—they sever the digital lifelines that responders and vulnerable families rely on to survive.
          </p>
        </div>

        {/* Editorial Statement Banner (By Experience inspired) */}
        <div className="statement-banner">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--alert)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            CRITICAL SYSTEM FAILURE
          </div>
          <div className="statement-text">
            Conventional disaster coordination assumes functional cell towers and stable internet. In extreme floods and cyclones, those assumptions fail immediately.
          </div>
        </div>

        {/* 3 Problem Cards Grid with Editorial Styling */}
        <div className="grid-3">
          {problems.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg-700)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Top Row: Icon and Index */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div className="icon-box icon-box--alert">{item.icon}</div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--alert)',
                      fontWeight: 600,
                      opacity: 0.85
                    }}
                  >
                    // {item.num}
                  </span>
                </div>

                <span
                  className="tag tag--alert"
                  style={{
                    marginBottom: '1rem',
                    fontSize: '0.6875rem'
                  }}
                >
                  {item.tag}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-100)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-300)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
