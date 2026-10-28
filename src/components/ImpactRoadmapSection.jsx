import React from 'react';
import { TargetIcon, RadioSignalIcon, BuildingIcon } from './Icons';

export default function ImpactRoadmapSection() {
  const phases = [
    {
      phase: 'Phase 01',
      status: 'Initial Prototyping Scope',
      statusColor: 'var(--aid)',
      title: 'Targeted Food & Supply Matching Pilot',
      focus:
        'Focus on a singular, high-friction use case: coordinating verified food and drinking water requests with local depot supplies inside an area experiencing disrupted connectivity.',
      deliverables: [
        'Offline SMS & low-bandwidth form for need logging',
        'Basic supply matching and deduplication logic',
        'Store-and-forward local sync for field volunteer nodes'
      ],
      icon: <TargetIcon size={24} />
    },
    {
      phase: 'Phase 02',
      status: 'Field Testing',
      statusColor: 'var(--link)',
      title: 'Multi-Modal Resilient Comms Integration',
      focus:
        'Validate physical fallback protocols under simulated blackout conditions, testing packet reliability and battery endurance across varied terrain.',
      deliverables: [
        'LoRaWAN low-power relay nodes for remote shelter beacons',
        'Ad-hoc Wi-Fi/Bluetooth mesh networking for cluster zones',
        'RoIP voice-to-digital logging prototype for tactical radios'
      ],
      icon: <RadioSignalIcon size={24} />
    },
    {
      phase: 'Phase 03',
      status: 'Concept Expansion',
      statusColor: 'var(--text-300)',
      title: 'Multi-Agency Interoperability & Scaling',
      focus:
        'Expand coordination architecture to support medical supplies, emergency evacuations, and cross-organization dashboards for civil authorities and NGOs.',
      deliverables: [
        'Open disaster data standards for agency integration',
        'Dynamic GIS mapping with flood and landslide vulnerability overlays',
        'Decentralized identity and role verification for volunteer safety'
      ],
      icon: <BuildingIcon size={24} />
    }
  ];

  return (
    <section id="roadmap" className="section section--bg-800">
      <div className="container">
        {/* Section Header */}
        <div className="section-header section-header--center">
          <div style={{ marginBottom: '1rem' }}>
            <span
              className="tag tag--concept"
              style={{
                fontSize: '0.8125rem',
                padding: '0.35rem 0.85rem'
              }}
            >
              PROPOSED CONCEPT • PROTOTYPING ROADMAP
            </span>
          </div>
          <h2 className="section-title">A phased path to validated resilience.</h2>
          <p className="section-subtitle">
            Rather than attempting to build a sprawling monolithic system, RELINK begins with a tightly scoped, life-critical use case before expanding into multi-layered communication infrastructure.
          </p>
        </div>

        {/* Intended Impact Overview Box (By Experience editorial style) */}
        <div
          style={{
            backgroundColor: 'var(--bg-700)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              backgroundColor: 'var(--link)'
            }}
          />
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--link)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            // HUMANITARIAN TARGET
          </div>
          <h3
            style={{
              fontSize: '1.4rem',
              color: 'var(--text-100)',
              marginBottom: '0.75rem',
              lineHeight: 1.25
            }}
          >
            Intended Humanitarian Impact
          </h3>
          <p
            style={{
              color: 'var(--text-300)',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '85ch',
              margin: 0
            }}
          >
            RELINK aims to transform disaster relief into an equitable, coordinated, and resilient ecosystem. By bridging frontline responders and cut-off families through low-overhead technology, relief teams can prevent delayed deliveries, stop duplicate aid drops, and ensure isolated communities in cyclone and landslide corridors receive aid when it matters most.
          </p>
        </div>

        {/* Phased Roadmap Grid */}
        <div className="grid-3">
          {phases.map((item, index) => (
            <div
              key={index}
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
                {/* Phase Number & Status Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--link)'
                    }}
                  >
                    // {item.phase}
                  </span>
                  <span
                    className="tag"
                    style={{
                      fontSize: '0.6875rem',
                      borderColor: item.statusColor,
                      color: item.statusColor
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="icon-box" style={{ marginBottom: '1.25rem' }}>
                  {item.icon}
                </div>

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
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}
                >
                  {item.focus}
                </p>
              </div>

              {/* Deliverables List */}
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
                    marginBottom: '0.75rem'
                  }}
                >
                  Key Milestones
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem'
                  }}
                >
                  {item.deliverables.map((d, dIdx) => (
                    <li
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: 'var(--text-300)',
                        lineHeight: 1.45
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--link)',
                          lineHeight: 1.2,
                          fontSize: '0.75rem'
                        }}
                      >
                        ▪
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Development Consideration Disclaimer */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(255, 176, 32, 0.06)',
            border: '1px solid rgba(255, 176, 32, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--aid)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600
            }}
          >
            <span>PROPOSED CONCEPT DISCLAIMER</span>
          </div>
          <p
            style={{
              color: 'var(--text-300)',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              margin: 0
            }}
          >
            RELINK is a proposed disaster-response and relief-coordination architecture, not a commercial SaaS application. Its specific hardware mechanisms, data schema, and operational safety protocols will be validated through progressive field prototyping alongside humanitarian partners and disaster-management authorities.
          </p>
        </div>
      </div>
    </section>
  );
}
