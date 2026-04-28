import React, { useState } from 'react';
import { submitRSVP } from '../services/weddingApi';

const RSVPForm = ({ token, onSuccess }) => {
  const [attending, setAttending] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!attending) return 'Please select if you are attending.';
    if (attending === 'yes' && (!guestCount || guestCount < 1)) return 'Please enter a valid guest count.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      await submitRSVP({ token, attending, guestCount: attending === 'yes' ? guestCount : 0, message });
      setSuccess('RSVP submitted successfully!');
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Failed to submit RSVP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Will you attend?
        <select value={attending} onChange={e => setAttending(e.target.value)} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      {attending === 'yes' && (
        <label>
          Number of guests:
          <input
            type="number"
            min="1"
            value={guestCount}
            onChange={e => setGuestCount(Number(e.target.value))}
            required
          />
        </label>
      )}
      <label>
        Message (optional):
        <textarea value={message} onChange={e => setMessage(e.target.value)} />
      </label>
      <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default RSVPForm;
