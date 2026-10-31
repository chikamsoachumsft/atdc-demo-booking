// ATDC Demo Booking — front end (plain JS, no build step).

const slotsEl = document.getElementById('slots');
const bookingEl = document.getElementById('booking');
const bookingSlotEl = document.getElementById('booking-slot');
const form = document.getElementById('booking-form');
const statusEl = document.getElementById('booking-status');
let selectedSlot = null;

// BOOK-101 (done): show slots grouped by day.
// BOOK-102 (open bug): times are shown in the visitor's local time zone, but Demo Day is in Atlanta (Eastern Time).
// BOOK-103 (open): fully booked slots are still listed and clickable.
async function loadSlots() {
  const res = await fetch('/api/slots');
  const slots = await res.json();
  const byDay = {};
  for (const s of slots) {
    const day = new Date(s.start).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    (byDay[day] ??= []).push(s);
  }
  slotsEl.innerHTML = '';
  for (const [day, daySlots] of Object.entries(byDay)) {
    const h = document.createElement('h2');
    h.textContent = day;
    slotsEl.appendChild(h);
    const list = document.createElement('div');
    list.className = 'slot-grid';
    for (const s of daySlots) {
      const btn = document.createElement('button');
      btn.className = s.booked ? 'slot booked' : 'slot';
      btn.textContent = new Date(s.start).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      if (s.booked) btn.title = 'Already booked';
      btn.addEventListener('click', () => openBooking(s));
      list.appendChild(btn);
    }
    slotsEl.appendChild(list);
  }
}

// BOOK-104 (in progress): booking form.
function openBooking(slot) {
  selectedSlot = slot;
  bookingSlotEl.textContent = new Date(slot.start).toLocaleString();
  bookingEl.hidden = false;
  slotsEl.hidden = true;
}

document.getElementById('booking-cancel').addEventListener('click', () => {
  bookingEl.hidden = true;
  slotsEl.hidden = false;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO(BOOK-104): POST the form to /api/bookings with the selected slot id and show the result.
  // TODO(BOOK-107): on success, show a confirmation page with an .ics calendar download.
  statusEl.textContent = 'Not wired up yet — see BOOK-104.';
});

loadSlots().catch(() => {
  slotsEl.innerHTML = '<p class="error">Could not load slots.</p>';
});
