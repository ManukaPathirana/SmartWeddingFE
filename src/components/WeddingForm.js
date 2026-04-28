import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createWedding } from '../services/weddingApi';

const WeddingForm = ({ onCreated }) => {
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const res = await createWedding({ title, event_date: eventDate });
      setSuccess('Wedding created!');
      setTitle(''); setEventDate('');
      if (onCreated) onCreated(res.data);
    } catch (err) {
      setError('Failed to create wedding.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'white',
      borderRadius: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: 32,
      maxWidth: 400,
      margin: '32px auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      border: '2px solid #f8bbd0',
    }}>
      <h2 style={{ color: '#d81b60', textAlign: 'center', marginBottom: 24 }}>Create Wedding</h2>
      <input style={{
        padding: 10,
        borderRadius: 8,
        border: '1px solid #f8bbd0',
        background: '#fce4ec',
        color: '#d81b60',
        fontSize: 16
      }} placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input style={{
        padding: 10,
        borderRadius: 8,
        border: '1px solid #f8bbd0',
        background: '#fce4ec',
        color: '#d81b60',
        fontSize: 16
      }} placeholder="Event Date" value={eventDate} onChange={e => setEventDate(e.target.value)} required type="date" />
      <button style={{
        background: '#f8bbd0',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        padding: '12px 0',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12,
        cursor: 'pointer',
        transition: 'background 0.2s',
      }} type="submit">Create</button>
      {error && <p style={{color:'#d81b60', textAlign:'center'}}>{error}</p>}
      {success && <p style={{color:'#43a047', textAlign:'center'}}>{success}</p>}
    </form>
  );
};

export default WeddingForm;
