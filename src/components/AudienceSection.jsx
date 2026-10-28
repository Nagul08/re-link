import React from 'react';
import {
  UsersIcon,
  HeartHandshakeIcon,
  BuildingIcon,
  ShieldIcon,
  TruckIcon,
  AmbulanceIcon
} from './Icons';

export default function AudienceSection() {
  const audiences = [
    {
      role: 'COMMUNITIES',
      title: 'Disaster-Affected Families',
      description:
        'Submit life-critical requests for food, clean water, and medicine using simple offline messages, and receive trusted status confirmations.',
      icon: <UsersIcon size={24} />
    },
    {
      role: 'RELIEF ORGANIZATIONS',
      title: 'Humanitarian NGOs',
      description:
        'Gain real-time visibility into unmet community needs, prevent duplicate supply drops, and coordinate resource allocation with partner groups.',
      icon: <HeartHandshakeIcon size={24} />
    },
    {
      role: 'PUBLIC SECTOR',
      title: 'Government Disaster Agencies',
      description:
        'Oversee comprehensive district-level incident maps, track emergency supply movements, and align civil defense logistics with volunteer efforts.',
      icon: <BuildingIcon size={24} />
    },
    {
      role: 'COMMUNITY AGENTS',
      title: 'Relief Volunteers & Coordinators',
      description:
        'Access cached, localized delivery manifests and turn-by-turn routing directly on handheld devices even in complete communication blackouts.',
      icon: <ShieldIcon size={24} />
    },
    {
      role: 'DISTRIBUTION',
      title: 'Food & Supply Providers',
      description:
        'Connect warehouse inventories directly to verified emergency requests, eliminating guesswork and ensuring perishable rations move promptly.',
      icon: <TruckIcon size={24} />
    },
    {
      role: 'FIRST RESPONDERS',
      title: 'Emergency Response Teams',
      description:
        'Bridge tactical radio communication with digital dispatch records to safely locate cut-off settlements during flood and landslide operations.',
      icon: <AmbulanceIcon size={24} />
    }
  ];

  return (
    <section id="who-its-for" className="section section--bg-900">
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
            Stakeholder Ecosystem
          </span>
          <h2 className="section-title">Built for everyone on the frontlines.</h2>
          <p className="section-subtitle">
            Effective disaster response requires seamless cooperation between those who need help and those who deliver it. RELINK creates a common ground for all stakeholders.
          </p>
        </div>

        {/* 6 Audience Cards Grid */}
        <div className="grid-3">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                backgroundColor: 'var(--bg-700)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}
              >
                <div className="icon-box" style={{ marginBottom: 0 }}>
                  {item.icon}
                </div>
                <span className="tag" style={{ fontSize: '0.6875rem' }}>
                  {item.role}
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
