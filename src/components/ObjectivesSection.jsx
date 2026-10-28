import React from 'react';
import {
  HeartHandshakeIcon,
  TargetIcon,
  EyeIcon,
  RadioSignalIcon,
  FilterDeduplicateIcon,
  HeartHandIcon
} from './Icons';

export default function ObjectivesSection() {
  const objectives = [
    {
      num: '01',
      title: 'Unified Multi-Agency Coordination',
      tag: 'COLLABORATION',
      description:
        'Bridge communication between government agencies, NGOs, grassroots volunteer networks, and supply warehouses on a synchronized platform.',
      icon: <HeartHandshakeIcon size={24} />
    },
    {
      num: '02',
      title: 'Critical Need Identification',
      tag: 'TRIAGE ACCURACY',
      description:
        'Pinpoint precisely where food rations, potable drinking water, and pediatric/elderly medical supplies are needed most urgently.',
      icon: <TargetIcon size={24} />
    },
    {
      num: '03',
      title: 'Real-Time Resource Visibility',
      tag: 'INVENTORY TRACKING',
      description:
        'Maintain dynamic inventory tracking of available relief stocks and outstanding requests across all participating regional hubs.',
      icon: <EyeIcon size={24} />
    },
    {
      num: '04',
      title: 'Resilient Offline Communication',
      tag: 'GRID INDEPENDENCE',
      description:
        'Sustain critical distress and coordination messaging in disaster zones where cellular networks, power, and internet are fully downed.',
      icon: <RadioSignalIcon size={24} />
    },
    {
      num: '05',
      title: 'Deduplicated Last-Mile Distribution',
      tag: 'WASTE REDUCTION',
      description:
        'Eliminate accidental duplicate aid drops to the same accessible zones and optimize distribution routes to cut logistical waste.',
      icon: <FilterDeduplicateIcon size={24} />
    },
    {
      num: '06',
      title: 'Protection for Vulnerable & Isolated Groups',
      tag: 'EQUITABLE ACCESS',
      description:
        'Ensure that cut-off, marginalized, and geographically isolated families receive equitable, timely assistance without being forgotten.',
      icon: <HeartHandIcon size={24} />
    }
  ];

  return (
    <section id="objectives" className="section section--bg-800">
      <div className="container">
        {/* Section Header */}
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
            Core Objectives
          </span>
          <h2 className="section-title">Designed for real-world humanitarian impact.</h2>
          <p className="section-subtitle">
            Six foundational pillars guiding the architecture and development of the RELINK relief-coordination framework.
          </p>
        </div>

        {/* 6 Objectives Grid with Editorial Bento Styling */}
        <div className="grid-3">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                backgroundColor: 'var(--bg-700)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem 1.75rem'
              }}
            >
              <div>
                {/* Header row: Icon & Index */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div className="icon-box" style={{ marginBottom: 0 }}>
                    {obj.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--link)'
                    }}
                  >
                    // {obj.num}
                  </span>
                </div>

                <span className="tag" style={{ marginBottom: '1rem', fontSize: '0.6875rem' }}>
                  {obj.tag}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-100)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}
                >
                  {obj.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-300)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    margin: 0
                  }}
                >
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
