import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRSVPs } from '../services/weddingApi';
import RSVPList from '../components/RSVPList';

const DashboardPage = (props) => {
  const params = useParams();
  const weddingId = props.weddingId || params.weddingId;
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!weddingId) return;
    setLoading(true);
    getRSVPs(weddingId)
      .then(res => setRsvps(res.data || []))
      .catch(() => setError('Failed to fetch RSVPs.'))
      .finally(() => setLoading(false));
  }, [weddingId]);

  return (
    <div style={{
      background: '#fce4ec',
      minHeight: '100vh',
      padding: '32px 0',
    }}>
      <div style={{
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        maxWidth: 700,
        margin: '0 auto',
        padding: 32,
      }}>
        <h1 style={{ color: '#d81b60', textAlign: 'center', marginBottom: 24 }}>Dashboard</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{color:'#d81b60', textAlign:'center'}}>{error}</p>}
        {!loading && !error && <RSVPList rsvps={rsvps} />}
      </div>
    </div>
  );
};

export default DashboardPage;
