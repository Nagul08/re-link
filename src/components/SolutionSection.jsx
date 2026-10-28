import React from 'react';
import { ShieldIcon, UsersIcon, PackageIcon } from './Icons';

export default function SolutionSection() {
  const pillars = [
    {
      icon: <UsersIcon size={24} />,
      title: 'A Shared Coordination Protocol',
      text: 'RELINK connects affected communities, NGOs, government disaster agencies, volunteers, and local supply depots into a synchronized network. Rather than operating blind, every responder gains clear visibility into live requests and available stocks.'
    },
    {
      icon: <ShieldIcon size={24} />,
      title: 'Communication When Infrastructure Fails',
      text: 'Instead of assuming steady 4G or fiber, RELINK is built from the ground up for low-bandwidth, offline-tolerant environments. It dynamically hops across satellite uplinks, ad-hoc mesh radios, RoIP gateways, and SMS/USSD channels as local conditions demand.'
    },
    {
      icon: <PackageIcon size={24} />,
      title: 'Equitable, Verified Last-Mile Delivery',
      text: 'By verifying needs at the community level and deduplicating relief manifests in real time, supplies are matched precisely where shortages are critical. This ensures remote and vulnerable families are not left behind while nearby hubs are oversaturated.'
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
          <h2 className="section-title">An adaptable bridge between survival needs and relief supplies.</h2>
          <p className="section-subtitle">
            RELINK is designed to restore coordination when traditional systems collapse, turning isolated humanitarian efforts into a unified, resilient response.
          </p>
        </div>

        {/* 3 Short Paragraph Pillars in a Clean Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                backgroundColor: 'var(--bg-800)',
                borderColor: 'var(--border)',
                padding: '2rem'
              }}
            >
              <div className="icon-box" style={{ marginBottom: '1.25rem' }}>
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-100)',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  color: 'var(--text-300)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  margin: 0
                }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
