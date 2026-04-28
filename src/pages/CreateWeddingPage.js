import React, { useState } from 'react';
import WeddingForm from '../components/WeddingForm';
import GuestBulkForm from '../components/GuestBulkForm';

const CreateWeddingPage = () => {
  const [wedding, setWedding] = useState(null);
  const [guests, setGuests] = useState(null);

  return (
    <div>
    
      <WeddingForm onCreated={setWedding} />
      {wedding && (
        <>
          <h3>Wedding Created: {wedding.name} (slug: {wedding.slug})</h3>
          <GuestBulkForm onAdded={setGuests} />
        </>
      )}
      {guests && <p>Guests added!</p>}
    </div>
  );
};

export default CreateWeddingPage;
