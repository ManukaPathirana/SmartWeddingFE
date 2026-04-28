import React from 'react';

const InviteDetails = ({ wedding, guest }) => {
  if (!wedding || !guest) return <p style={{ color: '#d81b60', textAlign: 'center' }}>Loading invitation details...</p>;
  return (
    <div style={{
      background: '#fce4ec',
      borderRadius: 12,
      padding: 20,
      marginBottom: 24,
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#d81b60', marginBottom: 12 }}>You're Invited to {wedding.title || wedding.name}!</h2>
      <p style={{ color: '#d81b60', fontWeight: 'bold' }}>Date: {wedding.event_date || wedding.date}</p>
      <p style={{ color: '#d81b60' }}>Guest: {guest.name}</p>
    </div>
  );
};

export default InviteDetails;
