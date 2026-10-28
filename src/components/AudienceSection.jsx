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
      num: '01',
      role: 'COMMUNITIES',
      title: 'Disaster-Affected Families',
      description:
        'Submit life-critical requests for food, clean water, and medicine using simple offline messages, and receive trusted status confirmations.',
      capabilities: ['Offline SMS/USSD triage', 'Mesh peer broadcast', 'Family ration tracking'],
      icon: <UsersIcon size={24} />
    },
    {
      num: '02',
      role: 'RELIEF ORGANIZATIONS',
      title: 'Humanitarian NGOs',
      description:
        'Gain real-time visibility into unmet community needs, prevent duplicate supply drops, and coordinate resource allocation with partner groups.',
      capabilities: ['De-duplicated supply ledger', 'Field team tasking', 'Cross-agency visibility'],
      icon: <HeartHandshakeIcon size={24} />
    },
    {
      num: '03',
      role: 'PUBLIC SECTOR',
      title: 'Government Disaster Agencies',
      description:
        'Oversee comprehensive district-level incident maps, track emergency supply movements, and align civil defense logistics with volunteer efforts.',
      capabilities: ['GIS hazard & needs overlays', 'Satellite command link', 'Civil defense integration'],
      icon: <BuildingIcon size={24} />
    },
    {
      num: '04',
      role: 'COMMUNITY AGENTS',
      title: 'Relief Volunteers & Coordinators',
      description:
        'Access cached, localized delivery manifests and turn-by-turn routing directly on handheld devices even in complete communication blackouts.',
      capabilities: ['Offline manifest caching', 'Local peer sync', 'Field receipt confirmation'],
      icon: <ShieldIcon size={24} />
    },
    {
      num: '05',
      role: 'DISTRIBUTION',
      title: 'Food & Supply Providers',
      description:
        'Connect warehouse inventories directly to verified emergency requests, eliminating guesswork and ensuring perishable rations move promptly.',
      capabilities: ['Live stock reservation', 'Depot dispatch queues', 'Spoilage risk mitigation'],
      icon: <TruckIcon size={24} />
    },
    {
      num: '06',
      role: 'FIRST RESPONDERS',
      title: 'Emergency Response Teams',
      description:
        'Bridge tactical radio communication with digital dispatch records to safely locate cut-off settlements during flood and landslide operations.',
      capabilities: ['RoIP walkie-talkie bridge', 'Critical rescue telemetry', 'Terrain obstacle alerts'],
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
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--link)'
                    }}
                  >
                    // {item.num}
                  </span>
                </div>

                <span className="tag" style={{ marginBottom: '1rem', fontSize: '0.6875rem' }}>
                  {item.role}
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
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Stakeholder Capability Badges */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--text-500)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}
                >
                  Core Interaction
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {item.capabilities.map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      style={{
                        fontSize: '0.6875rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-800)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-300)'
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
