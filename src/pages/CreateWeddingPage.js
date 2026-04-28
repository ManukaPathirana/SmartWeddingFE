import React, { useState } from 'react';
import WeddingForm from '../components/WeddingForm';
import GuestBulkForm from '../components/GuestBulkForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CreateWeddingPage = () => {
  const [wedding, setWedding] = useState(null);
  const [guests, setGuests] = useState(null);

  return (
    <div>
      <NavBar />
      <WeddingForm onCreated={setWedding} />
      {wedding && (
        <>
          <h3>Wedding Created: {wedding.name} (slug: {wedding.slug})</h3>
          <GuestBulkForm onAdded={setGuests} />
        </>
      )}
      {guests && <p>Guests added!</p>}
      <Footer />
    </div>
  );
};

export default CreateWeddingPage;
