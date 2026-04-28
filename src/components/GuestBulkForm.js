import React, { useState } from 'react';
import { addGuests } from '../services/weddingApi';


const GuestBulkForm = ({ onAdded }) => {
  const [weddingId, setWeddingId] = useState('');
  const [guests, setGuests] = useState([
    { name: '', email: '', phone: '' }
  ]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleGuestChange = (idx, field, value) => {
    setGuests(prev => prev.map((g, i) => i === idx ? { ...g, [field]: value } : g));
  };

  const addGuestRow = () => {
    setGuests(prev => [...prev, { name: '', email: '', phone: '' }]);
  };

  const removeGuestRow = (idx) => {
    setGuests(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const payload = {
        wedding_id: Number(weddingId),
        guests: guests.filter(g => g.name && g.email && g.phone)
      };
      const res = await addGuests(payload);
      setSuccess('Guests added!');
      setWeddingId('');
      setGuests([{ name: '', email: '', phone: '' }]);
      if (onAdded) onAdded(res.data);
    } catch (err) {
      setError('Failed to add guests.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'white',
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: 32,
      maxWidth: 500,
      margin: '32px auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      border: '2px solid #f8bbd0',
    }}>
      <h2 style={{ color: '#d81b60', textAlign: 'center', marginBottom: 24 }}>Add Guests (Bulk)</h2>
      <input
        style={{
          padding: 10,
          borderRadius: 8,
          border: '1px solid #f8bbd0',
          background: '#fce4ec',
          color: '#d81b60',
          fontSize: 16
        }}
        placeholder="Wedding ID"
        value={weddingId}
        onChange={e => setWeddingId(e.target.value)}
        required
        type="number"
        min="1"
      />
      {guests.map((guest, idx) => (
        <div key={idx} style={{
          marginBottom: 8,
          border: '1px solid #f8bbd0',
          padding: 12,
          borderRadius: 8,
          background: '#fce4ec',
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}>
          <input
            style={{
              padding: 8,
              borderRadius: 8,
              border: '1px solid #f8bbd0',
              background: 'white',
              color: '#d81b60',
              fontSize: 15
            }}
            placeholder="Name"
            value={guest.name}
            onChange={e => handleGuestChange(idx, 'name', e.target.value)}
            required
          />
          <input
            style={{
              padding: 8,
              borderRadius: 8,
              border: '1px solid #f8bbd0',
              background: 'white',
              color: '#d81b60',
              fontSize: 15
            }}
            placeholder="Email"
            value={guest.email}
            onChange={e => handleGuestChange(idx, 'email', e.target.value)}
            required
            type="email"
          />
          <input
            style={{
              padding: 8,
              borderRadius: 8,
              border: '1px solid #f8bbd0',
              background: 'white',
              color: '#d81b60',
              fontSize: 15
            }}
            placeholder="Phone"
            value={guest.phone}
            onChange={e => handleGuestChange(idx, 'phone', e.target.value)}
            required
          />
          {guests.length > 1 && (
            <button type="button" onClick={() => removeGuestRow(idx)} style={{
              background: '#f8bbd0',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '6px 12px',
              fontWeight: 'bold',
              fontSize: 18,
              cursor: 'pointer',
            }}>-</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addGuestRow} style={{
        background: '#f8bbd0',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        padding: '10px 0',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        cursor: 'pointer',
      }}>Add Another Guest</button>
      <button type="submit" style={{
        background: '#d81b60',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        padding: '12px 0',
        fontWeight: 'bold',
        fontSize: 18,
        cursor: 'pointer',
      }}>Add Guests</button>
      {error && <p style={{color:'#d81b60', textAlign:'center'}}>{error}</p>}
      {success && <p style={{color:'#43a047', textAlign:'center'}}>{success}</p>}
    </form>
  );
};

export default GuestBulkForm;
