import React from 'react';

const RSVPList = ({ rsvps }) => {
  if (!rsvps || rsvps.length === 0) return <p style={{ color: '#d81b60', textAlign: 'center' }}>No RSVPs yet.</p>;
  return (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    }}>
      <thead style={{ background: '#f8bbd0' }}>
        <tr>
          <th style={{ color: '#d81b60', padding: 12 }}>Guest Name</th>
          <th style={{ color: '#d81b60', padding: 12 }}>Attending</th>
          <th style={{ color: '#d81b60', padding: 12 }}>Guest Count</th>
          <th style={{ color: '#d81b60', padding: 12 }}>Message</th>
        </tr>
      </thead>
      <tbody>
        {rsvps.map((r, idx) => (
          <tr key={idx} style={{ background: idx % 2 === 0 ? '#fce4ec' : 'white' }}>
            <td style={{ padding: 10 }}>{r.guestName || r.name || 'Unknown'}</td>
            <td style={{ padding: 10 }}>{r.attending}</td>
            <td style={{ padding: 10 }}>{r.guestCount || 1}</td>
            <td style={{ padding: 10 }}>{r.message || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RSVPList;
