import React from 'react';
import { UsersIcon, ShieldIcon, PackageIcon } from './Icons';

export default function SolutionSection() {
  const pillars = [
    {
      num: '01',
      tag: 'SHARED COORDINATION',
      icon: <UsersIcon size={24} />,
      title: 'A Unified Operational Protocol',
      text: 'RELINK connects affected communities, NGOs, government disaster agencies, volunteers, and local supply depots into a synchronized network. Rather than operating blind, every responder gains clear visibility into live requests and available stocks.',
      points: ['Multi-stakeholder roster', 'Real-time inventory matching', 'Deduplication across response units']
    },
    {
      num: '02',
      tag: 'ADAPTIVE COMMS',
      icon: <ShieldIcon size={24} />,
      title: 'Communication When Networks Fail',
      text: 'Instead of assuming steady 4G or fiber, RELINK is built from the ground up for low-bandwidth, offline-tolerant environments. It dynamically hops across satellite uplinks, ad-hoc mesh radios, RoIP gateways, and SMS/USSD channels as local conditions demand.',
      points: ['Store-and-forward syncing', 'Carrier-independent mesh', 'VHF/UHF radio bridging']
    },
    {
      num: '03',
      tag: 'EQUITABLE LOGISTICS',
      icon: <PackageIcon size={24} />,
      title: 'Verified Last-Mile Supply Delivery',
      text: 'By verifying needs at the community level and deduplicating relief manifests in real time, supplies are matched precisely where shortages are critical. This ensures remote and vulnerable families are not left behind while nearby hubs are oversaturated.',
      points: ['Offline digital delivery receipts', 'Route and transit risk mapping', 'Prioritization of vulnerable pockets']
    }
  ];

  return (
    <section id="solution" className="section section--bg-900">
      <div className="container">
        {/* Header */}
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
            The Proposed Solution
          </span>
          <h2 className="section-title section-title--wide">
            An adaptable bridge between survival needs and relief supplies.
          </h2>
          <p className="section-subtitle">
            RELINK restores coordination when traditional systems collapse, turning isolated humanitarian efforts into a unified, resilient response.
          </p>
        </div>

        {/* 3 Editorial Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                backgroundColor: 'var(--bg-800)',
                borderColor: 'var(--border)',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--link)'
                    }}
                  >
                    // {pillar.num}
                  </span>
                </div>

                <span className="tag" style={{ marginBottom: '1rem', fontSize: '0.6875rem' }}>
                  {pillar.tag}
                </span>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-100)',
                    marginBottom: '1rem',
                    lineHeight: 1.25
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-300)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}
                >
                  {pillar.text}
                </p>
              </div>

              {/* Sub-points for structured agency-level clarity */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem'
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  {pillar.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-500)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <span style={{ color: 'var(--link)' }}>+</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
