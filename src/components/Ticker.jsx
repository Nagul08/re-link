import React from 'react';

export default function Ticker() {
  const items = [
    { text: 'Satellite Backhaul', tag: 'Orbital' },
    { text: 'Ad-Hoc Peer Mesh', tag: 'Zero-Tower' },
    { text: 'Radio over IP (RoIP)', tag: 'Tactical Voice' },
    { text: 'Offline SMS & USSD', tag: '2G Fallback' },
    { text: 'LoRaWAN Telemetry', tag: 'Long-Range LPWAN' },
    { text: 'Zero-Data Dispatch', tag: 'Store & Forward' },
    { text: 'Equitable Aid Distribution', tag: 'Verified Triage' },
    { text: 'Community-First Triage', tag: 'Resilient Design' },
  ];

  // Duplicate items for continuous seamless loop
  const repeated = [...items, ...items];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {repeated.map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span className="ticker-dot" />
            <span style={{ fontWeight: 600, color: 'var(--text-100)' }}>{item.text}</span>
            <span style={{ color: 'var(--text-500)', fontSize: '0.6875rem' }}>[{item.tag}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
