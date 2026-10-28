import React from 'react';
import { SignalLossIcon, BlindspotIcon, DelayIcon } from './Icons';

export default function ProblemSection() {
  const problems = [
    {
      icon: <SignalLossIcon size={26} />,
      tag: 'INFRASTRUCTURE COLLAPSE',
      title: 'Disrupted Connectivity & Communications',
      description:
        'When severe floods, cyclones, or landslides strike, mobile cell towers, internet backbones, and power grids fail first. Communities cannot broadcast their urgent needs, and response units are rendered blind.'
    },
    {
      icon: <BlindspotIcon size={26} />,
      tag: 'COORDINATION GAPS',
      title: 'Siloed Relief & Resource Duplication',
      description:
        'Government agencies, international NGOs, and grassroots volunteer groups frequently operate in disconnected information silos. Without shared visibility, multiple teams dispatch identical supplies to the same accessible locations.'
    },
    {
      icon: <DelayIcon size={26} />,
      tag: 'LAST-MILE FAILURE',
      title: 'Delayed Aid & Isolated Communities',
      description:
        'Because real-time updates cannot reach field teams, food, drinking water, and essential medicines fail to reach vulnerable, hard-to-reach pockets in time—turning logistical delays into humanitarian crises.'
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

        {/* 3 Problem Cards Grid */}
        <div className="grid-3">
          {problems.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                borderColor: 'var(--border)',
                position: 'relative'
              }}
            >
              <div className="icon-box icon-box--alert">{item.icon}</div>
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
                  marginBottom: '0.75rem',
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
          ))}
        </div>
      </div>
    </section>
  );
}
