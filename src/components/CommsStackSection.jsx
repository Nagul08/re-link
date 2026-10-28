import React, { useState } from 'react';
import { SatelliteIcon, MeshIcon, RoIPIcon, SmsIcon, LoRaIcon } from './Icons';

export default function CommsStackSection() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    {
      title: 'Satellite Communication',
      tag: 'LEO / GEO Uplink',
      icon: <SatelliteIcon size={24} />,
      whenUsed: 'When all terrestrial landlines, fiber conduits, and cellular towers in the disaster zone are completely offline.',
      detail: 'Provides an emergency data backhaul link connecting local incident command posts to regional servers and state disaster agencies.',
      specs: {
        bandwidth: '10 - 150 Mbps (Terminal Dependent)',
        range: 'Global coverage / Orbital footprint',
        power: 'Dedicated 12V-24V field generator / solar',
        role: 'Strategic incident backhaul'
      }
    },
    {
      title: 'Mesh Networking',
      tag: 'Ad-Hoc Peer Relay',
      icon: <MeshIcon size={24} />,
      whenUsed: 'When communities and rescue teams are clustered in an area without any functional central telecommunications router.',
      detail: 'Packets hop securely between nearby smartphones, laptops, and relay nodes, passing needs assessments peer-to-peer.',
      specs: {
        bandwidth: '1 - 25 Mbps ad-hoc mesh',
        range: '50m - 500m per node hop',
        power: 'Standard smartphone battery / power bank',
        role: 'Shelter cluster communication'
      }
    },
    {
      title: 'Radio over IP (RoIP)',
      tag: 'VHF / UHF Bridging',
      icon: <RoIPIcon size={24} />,
      whenUsed: 'When frontline emergency personnel and boat rescue teams are operating on analog two-way tactical radios.',
      detail: 'Bridges legacy tactical walkie-talkie voice feeds into the digital dispatch dashboard so field transmissions are logged instantly.',
      specs: {
        bandwidth: 'Low-bitrate digitized voice (<32 kbps)',
        range: 'Line of sight (3 - 15 km)',
        power: 'Vehicle mounted / handheld radio battery',
        role: 'First responder voice integration'
      }
    },
    {
      title: 'SMS / USSD Channels',
      tag: '2G Cellular Fallback',
      icon: <SmsIcon size={24} />,
      whenUsed: 'When 4G/5G data services collapse but weak 2G signaling intermittently surfaces on basic feature phones.',
      detail: 'Allows families and village elders to dispatch standardized distress codes and supply requests without data plans.',
      specs: {
        bandwidth: '140 bytes per structured SMS burst',
        range: 'Up to 35 km from surviving 2G tower',
        power: 'Minimal draw / days on basic phone',
        role: 'Mass community request capture'
      }
    },
    {
      title: 'LoRaWAN Telemetry',
      tag: 'Sub-GHz LPWAN',
      icon: <LoRaIcon size={24} />,
      whenUsed: 'When battery conservation and extreme long-range coverage (up to 15 km) are critical for relay stations.',
      detail: 'Transmits small periodic telemetry bursts regarding water level sensors, warehouse stock levels, and priority beacons.',
      specs: {
        bandwidth: '0.3 - 50 kbps telemetry packet',
        range: '2 - 15 km depending on topography',
        power: 'Months to years on small LiPo cell',
        role: 'Remote depot & beacon tracking'
      }
    }
  ];

  const active = layers[selectedLayer];

  return (
    <section id="comms-stack" className="section section--bg-900">
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
            Multi-Layer Resilience
          </span>
          <h2 className="section-title">The resilient communication stack.</h2>
          <p className="section-subtitle">
            No single technology survives every disaster scenario. RELINK explores five adaptive communication layers that activate depending on infrastructure damage and battery constraints.
          </p>
        </div>

        {/* 5 Stack Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}
        >
          {layers.map((layer, index) => {
            const isSelected = selectedLayer === index;
            return (
              <div
                key={index}
                className={`card ${isSelected ? 'card--active' : ''}`}
                onClick={() => setSelectedLayer(index)}
                style={{
                  backgroundColor: 'var(--bg-700)',
                  border: isSelected ? '1px solid var(--link)' : '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div>
                  {/* Top Row: Icon and Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <div className="icon-box" style={{ marginBottom: 0 }}>
                      {layer.icon}
                    </div>
                    <span className="tag">{layer.tag}</span>
                  </div>

                  {/* Layer Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--text-100)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3
                    }}
                  >
                    {layer.title}
                  </h3>

                  {/* When It's Used Callout */}
                  <div
                    style={{
                      backgroundColor: 'rgba(11, 18, 32, 0.5)',
                      borderLeft: '3px solid var(--aid)',
                      padding: '0.75rem 1rem',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      marginBottom: '1rem'
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: 'var(--aid)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem'
                      }}
                    >
                      When It's Used
                    </span>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-100)',
                        lineHeight: 1.5,
                        margin: 0
                      }}
                    >
                      {layer.whenUsed}
                    </p>
                  </div>
                </div>

                {/* Technical Detail */}
                <p
                  style={{
                    color: 'var(--text-500)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    margin: 0,
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  {layer.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Layer Operational Specifications Panel (By Experience Inspired) */}
        <div
          style={{
            marginTop: '2.5rem',
            backgroundColor: 'var(--bg-800)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--link)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                // PROTOCOL DEEP DIVE
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  color: 'var(--text-100)',
                  marginTop: '0.25rem'
                }}
              >
                {active.title} — Technical Operational Envelope
              </h4>
            </div>

            <span className="tag tag--concept">
              Concept Specification
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-500)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                Operational Bandwidth
              </div>
              <div style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9375rem' }}>
                {active.specs.bandwidth}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-500)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                Effective Range
              </div>
              <div style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9375rem' }}>
                {active.specs.range}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-500)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                Power / Hardware Profile
              </div>
              <div style={{ color: 'var(--text-100)', fontWeight: 600, fontSize: '0.9375rem' }}>
                {active.specs.power}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--text-500)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}
              >
                Primary Disaster Role
              </div>
              <div style={{ color: 'var(--aid)', fontWeight: 600, fontSize: '0.9375rem' }}>
                {active.specs.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
