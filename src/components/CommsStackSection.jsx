import React from 'react';
import { SatelliteIcon, MeshIcon, RoIPIcon, SmsIcon, LoRaIcon } from './Icons';

export default function CommsStackSection() {
  const layers = [
    {
      title: 'Satellite Communication',
      tag: 'LEO / GEO Uplink',
      icon: <SatelliteIcon size={24} />,
      whenUsed: 'When all terrestrial landlines, fiber conduits, and cellular towers in the disaster zone are completely offline.',
      detail: 'Provides an emergency data backhaul link connecting local command posts to regional coordination servers and state authorities.'
    },
    {
      title: 'Mesh Networking',
      tag: 'Ad-Hoc Peer Relay',
      icon: <MeshIcon size={24} />,
      whenUsed: 'When communities and rescue teams are clustered in an area without any functional central telecommunications router.',
      detail: 'Packets hop securely between nearby smartphones, laptops, and relay nodes, passing needs assessments peer-to-peer.'
    },
    {
      title: 'Radio over IP (RoIP)',
      tag: 'VHF / UHF Bridging',
      icon: <RoIPIcon size={24} />,
      whenUsed: 'When frontline emergency personnel and boat crews are using analog two-way tactical radios.',
      detail: 'Bridges legacy tactical walkie-talkie voice feeds into the digital dispatch dashboard so field transmissions are logged instantly.'
    },
    {
      title: 'SMS / USSD Channels',
      tag: '2G Cellular Fallback',
      icon: <SmsIcon size={24} />,
      whenUsed: 'When 4G/5G data services collapse but weak 2G signaling intermittently surfaces on basic feature phones.',
      detail: 'Allows families and village elders to dispatch standardized distress codes and supply requests without data plans.'
    },
    {
      title: 'LoRaWAN Telemetry',
      tag: 'Sub-GHz LPWAN',
      icon: <LoRaIcon size={24} />,
      whenUsed: 'When battery conservation and extreme long-range coverage (up to 15 km) are critical for relay stations.',
      detail: 'Transmits small periodic telemetry bursts regarding water level sensors, warehouse stock levels, and priority beacons.'
    }
  ];

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
            marginTop: '2.5rem'
          }}
        >
          {layers.map((layer, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundColor: 'var(--bg-700)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
          ))}
        </div>

        {/* Informative Note */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(45, 212, 191, 0.05)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--link)'
            }}
          >
            NOTE: Layer activation is automated through opportunistic peer discovery and store-and-forward transmission protocols.
          </span>
        </div>
      </div>
    </section>
  );
}
