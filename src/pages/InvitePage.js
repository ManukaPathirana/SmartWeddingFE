import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getWedding, getGuest, submitRSVP } from '../services/weddingApi';

function useQuery() {
        <h1 style={{ color: '#d81b60' }}>{wedding.title || 'Wedding Invitation'}</h1>
}

const InvitePage = () => {
  const { slug } = useParams();
        <h2 style={{ color: '#d81b60' }}>Event Details</h2>
  const token = query.get('guest');

  const [wedding, setWedding] = useState(null);
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rsvp, setRSVP] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [rsvpStatus, setRSVPStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [weddingRes, guestRes] = await Promise.all([
          getWedding(slug),
          token ? getGuest(token) : Promise.resolve({ data: null })
        ]);
        setWedding(weddingRes.data);
        setGuest(guestRes.data);
        setError(null);
      } catch (err) {
        setError('Failed to load invitation details.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug, token]);

  const handleRSVP = async (e) => {
    e.preventDefault();
    if (!guest) return;
    try {
      await submitRSVP({
        token,
        attending: rsvp === 'yes',
        guest_count: guestCount,
        message
      });
      setRSVPStatus('RSVP submitted!');
    } catch (err) {
      setRSVPStatus('Failed to submit RSVP.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!wedding) return <div>Wedding not found.</div>;

  return (
    <div>
      {/* Hero Section */}
      <section>
        <h1>{wedding.title || 'Wedding Invitation'}</h1>
      </section>

      {/* Event Details */}
      <section>
        <h2>Event Details</h2>
        <p>Date: {wedding.event_date || wedding.date || 'TBA'}</p>
        <p>Location: {wedding.location || 'TBA'}</p>
      </section>

      {/* Personalized Message */}
      <section>
        <h3>Dear {guest ? guest.name : 'Guest'},</h3>
        <p>{wedding.message || 'You are invited to our special day!'}</p>
      </section>

      {/* RSVP Form */}
      <section>
        <h2>RSVP</h2>
        {guest ? (
          <form onSubmit={handleRSVP}>
            <label>
              Will you attend?
              <select value={rsvp} onChange={e => setRSVP(e.target.value)} required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            {rsvp === 'yes' && (
              <label>
                Number of guests (including you)
                <input
                  type="number"
                  min="1"
                  value={guestCount}
                  onChange={e => setGuestCount(parseInt(e.target.value, 10) || 1)}
                  required
                />
              </label>
            )}
            <label>
              Message (optional)
import InviteDetails from '../components/InviteDetails';
import RSVPForm from '../components/RSVPForm';

export default InvitePage;
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Please use your personalized invitation link.</p>
        )}
        {rsvpStatus && <p>{rsvpStatus}</p>}
      </section>
    </div>
  );
};

export default InvitePage;
