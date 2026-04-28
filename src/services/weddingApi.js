import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Weddings
export const createWedding = (data) => api.post('/weddings', data);
export const getWedding = (slug) => api.get(`/weddings/${slug}`);

// Guests
export const addGuests = (data) => api.post('/guests/bulk', data);
export const getGuest = (token) => api.get(`/guests/${token}`);

// RSVP
export const submitRSVP = (data) => api.post('/rsvp', data);
export const getRSVPs = (weddingId) => api.get(`/rsvp/${weddingId}`);
