// ATDC Demo Booking — tiny Express server.
// Data lives in memory (seeded from data/slots.json) — see the "No database yet" decision in project memory.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const slots = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'slots.json'), 'utf-8'));
const bookings = []; // in-memory only

// BOOK-101 (done): list all Demo Day slots.
app.get('/api/slots', (_req, res) => {
  res.json(slots);
});

// BOOK-104 (in progress): accepts a booking but does NOT validate or save it yet.
// TODO(BOOK-104): validate company, contact name, email, demo title.
// TODO(BOOK-105): prevent double booking — one booking per startup, first confirmed wins.
// TODO(BOOK-104): mark the slot as booked and store the booking.
app.post('/api/bookings', (req, res) => {
  console.log('[bookings] received (not saved yet):', req.body);
  res.status(202).json({ status: 'received', note: 'Booking is not saved yet (BOOK-104).' });
});

// BOOK-109 (not started): staff view of all bookings.
app.get('/api/admin/bookings', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet (BOOK-109).', count: bookings.length });
});

const port = Number(process.env.PORT ?? 5050);
app.listen(port, () => console.log(`ATDC Demo Booking running at http://localhost:${port}`));
