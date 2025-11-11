// Key Trip Info (Quick Reference)
const tripInfo = {
    hotel: {
        name: 'Hotel Keihan Tsukiji Ginza Grande',
        address: '3-5-4, Tsukiji, Chuo-ku 104-0045 Tokyo Japan',
        location: 'Tsukiji, Tokyo',
        phone: '+81-3-5565-1001',
        checkIn: '3:00 PM',
        checkOut: '11:00 AM',
        website: 'https://tsukijiginza.hotelkeihan.co.jp/',
        notes: '2 min walk from Tsukiji station (Hibiya line). 24-hour front desk. Baggage storage available.'
    },
    flights: [
        { number: 'QF59', route: 'Sydney → Tokyo', date: 'Nov 26', time: '12:00 - 20:00' },
        { number: 'QF26', route: 'Tokyo → Sydney', date: 'Dec 3', time: '06:55 - 18:50' }
    ]
};

// Trip Data
const tripData = [
    {
        id: 1,
        type: 'travel',
        name: 'Travel Day',
        date: 'Wednesday, November 26',
        dayOfWeek: 'Wednesday',
        dateShort: 'Nov 26',
        flight: {
            number: 'QF59',
            route: 'Sydney → Tokyo',
            departure: '12:00',
            arrival: '20:00',
            airport: 'Haneda Airport (HND)'
        },
        morning: [
            {
                time: '08:30',
                title: 'Arrive at Sydney Airport',
                description: 'Check-in for QF59 flight to Tokyo',
                details: {
                    location: 'Sydney International Airport',
                    terminal: 'International Terminal',
                    tips: 'Arrive early for international check-in and security'
                }
            }
        ],
        afternoon: [],
        evening: [
            {
                time: '20:00',
                title: 'Airport Transfer - Klook',
                description: 'Pick-up at Haneda Airport',
                location: 'Tokyo Haneda International Airport',
                details: {
                    service: 'Comfort 7 seater',
                    passengers: '2 Passenger(s)',
                    pickup: 'Tokyo Haneda International Airport (HND)',
                    dropoff: 'Hotel Keihan Tsukiji Ginza Grande',
                    dropoffAddress: '3-5-4, Tsukiji, Chuo-ku 104-0045 Tokyo Japan',
                    bookingRef: 'AUD 135.08',
                    status: 'Booking confirmed',
                    pickupTime: 'Nov 26, 2025, 8:00 PM (Local time)',
                    note: 'Driver will meet you at arrivals'
                }
            }
        ]
    },
    {
        id: 2,
        type: 'full',
        name: 'Day 1',
        date: 'Thursday, November 27',
        dayOfWeek: 'Thursday',
        dateShort: 'Nov 27',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 3,
        type: 'full',
        name: 'Day 2',
        date: 'Friday, November 28',
        dayOfWeek: 'Friday',
        dateShort: 'Nov 28',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 4,
        type: 'full',
        name: 'Day 3',
        date: 'Saturday, November 29',
        dayOfWeek: 'Saturday',
        dateShort: 'Nov 29',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 5,
        type: 'full',
        name: 'Day 4',
        date: 'Sunday, November 30',
        dayOfWeek: 'Sunday',
        dateShort: 'Nov 30',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 6,
        type: 'full',
        name: 'Day 5',
        date: 'Monday, December 1',
        dayOfWeek: 'Monday',
        dateShort: 'Dec 1',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 7,
        type: 'full',
        name: 'Day 6',
        date: 'Tuesday, December 2',
        dayOfWeek: 'Tuesday',
        dateShort: 'Dec 2',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 8,
        type: 'full',
        name: 'Day 7',
        date: 'Wednesday, December 3',
        dayOfWeek: 'Wednesday',
        dateShort: 'Dec 3',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 9,
        type: 'travel',
        name: 'Travel Day',
        date: 'Wednesday, December 3',
        dayOfWeek: 'Wednesday',
        dateShort: 'Dec 3',
        flight: {
            number: 'QF26',
            route: 'Tokyo → Sydney',
            departure: '06:55',
            arrival: '18:50',
            airport: 'Haneda Airport (HND)'
        },
        morning: [
            {
                time: '04:30',
                title: 'Airport Transfer - Klook',
                description: 'Pick-up at hotel for return flight',
                location: 'Hotel Keihan Tsukiji Ginza Grande',
                details: {
                    service: 'Comfort 7 seater',
                    passengers: '2 Passenger(s)',
                    pickup: 'Hotel Keihan Tsukiji Ginza Grande',
                    pickupAddress: '3-5-4, Tsukiji, Chuo-ku 104-0045 Tokyo Japan',
                    dropoff: 'Tokyo Haneda International Airport (HND)',
                    bookingRef: 'AUD 112.12',
                    status: 'Booking confirmed',
                    pickupTime: 'Dec 3, 2025, 4:30 AM (Local time)',
                    note: 'Very early departure - driver will meet you at hotel'
                }
            }
        ],
        afternoon: [],
        evening: []
    }
];

// Current day detection
function getCurrentDayId() {
    const now = new Date();
    const tripStart = new Date('2025-11-26');
    const tripEnd = new Date('2025-12-03');

    if (now >= tripStart && now <= tripEnd) {
        const diffTime = Math.abs(now - tripStart);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays + 1;
    }

    return null;
}

// Render calendar view
function renderCalendar() {
    const dayGrid = document.getElementById('day-grid');
    const currentDayId = getCurrentDayId();

    dayGrid.innerHTML = tripData.map(day => {
        const isCurrentDay = day.id === currentDayId;
        const cardClass = `day-card ${day.type} ${isCurrentDay ? 'current' : ''}`;

        return `
            <div class="${cardClass}" onclick="showDay(${day.id})">
                <div class="day-card-header">
                    <span class="day-number">${day.type === 'travel' ? '✈️ ' : ''}${day.name}</span>
                    ${isCurrentDay ? '<span class="day-badge">Today</span>' : ''}
                </div>
                <div class="day-name">${day.dayOfWeek}</div>
                <div class="day-date">${day.dateShort}</div>
            </div>
        `;
    }).join('');
}

// Render day detail view
function renderDayDetail(dayId) {
    const day = tripData.find(d => d.id === dayId);
    if (!day) return;

    document.getElementById('day-title').textContent = `${day.name} • ${day.date}`;
    const content = document.getElementById('day-content');

    let html = '';

    // If it's a travel day, show flight info
    if (day.type === 'travel' && day.flight) {
        html += `
            <div class="flight-info">
                <div class="flight-header">Flight Information</div>
                <div class="flight-number">${day.flight.number}</div>
                <div class="flight-details">
                    ${day.flight.route}<br>
                    Departure: ${day.flight.departure} → Arrival: ${day.flight.arrival}<br>
                    ${day.flight.airport}
                </div>
            </div>
        `;
    }

    // Render time sections
    const sections = [
        { title: 'Morning', activities: day.morning },
        { title: 'Afternoon', activities: day.afternoon },
        { title: 'Evening', activities: day.evening }
    ];

    sections.forEach(section => {
        if (section.activities.length > 0) {
            html += `<div class="time-section">
                <h3 class="section-header">${section.title}</h3>
                ${section.activities.map((activity, index) => {
                    const activityId = `${dayId}-${section.title.toLowerCase()}-${index}`;
                    const hasDetails = activity.details && Object.keys(activity.details).length > 0;
                    const cardClass = hasDetails ? 'activity-card clickable' : 'activity-card';
                    const onClick = hasDetails ? `onclick="showActivityDetail(${dayId}, '${section.title.toLowerCase()}', ${index})"` : '';

                    return `
                    <div class="${cardClass}" ${onClick}>
                        <div class="activity-header">
                            ${activity.time ? `<span class="activity-time">${activity.time}</span>` : ''}
                        </div>
                        <div class="activity-title">${activity.title}</div>
                        ${activity.description ? `<div class="activity-description">${activity.description}</div>` : ''}
                        ${hasDetails ? `<div class="tap-hint">Tap for details</div>` : ''}
                        ${activity.location && !hasDetails ? `
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}"
                               target="_blank"
                               class="map-link"
                               onclick="event.stopPropagation()">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Open in Maps
                            </a>
                        ` : ''}
                    </div>
                `}).join('')}
            </div>`;
        }
    });

    // If no activities planned, show placeholder
    if (day.morning.length === 0 && day.afternoon.length === 0 && day.evening.length === 0 && day.type !== 'travel') {
        html += '<div class="empty-section">No activities planned yet</div>';
    }

    content.innerHTML = html;
}

// Navigation functions
function showDay(dayId) {
    renderDayDetail(dayId);
    document.getElementById('calendar-view').classList.remove('active');
    document.getElementById('day-view').classList.add('active');
    window.scrollTo(0, 0);
}

function showCalendar() {
    document.getElementById('day-view').classList.remove('active');
    document.getElementById('calendar-view').classList.add('active');
    window.scrollTo(0, 0);
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();

    // Auto-navigate to current day if on trip
    const currentDayId = getCurrentDayId();
    if (currentDayId) {
        // Wait a bit for better UX, show calendar briefly first
        setTimeout(() => {
            // Optional: uncomment to auto-open current day
            // showDay(currentDayId);
        }, 500);
    }
});

// Activity detail modal functions
function showActivityDetail(dayId, section, activityIndex) {
    const day = tripData.find(d => d.id === dayId);
    if (!day) return;

    const activity = day[section][activityIndex];
    if (!activity || !activity.details) return;

    document.getElementById('modal-title').textContent = activity.title;

    let modalHTML = '';

    // Render all detail fields
    Object.entries(activity.details).forEach(([key, value]) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        modalHTML += `
            <div class="detail-row">
                <div class="detail-label">${label}</div>
                <div class="detail-value">${value}</div>
            </div>
        `;
    });

    // Add action buttons if location exists
    if (activity.location || activity.details.pickup || activity.details.dropoff) {
        modalHTML += '<div class="detail-actions">';

        if (activity.location) {
            modalHTML += `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}"
                   target="_blank"
                   class="action-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Open in Maps
                </a>
            `;
        }

        if (activity.details.dropoffAddress) {
            modalHTML += `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.details.dropoffAddress)}"
                   target="_blank"
                   class="action-button secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Navigate to Hotel
                </a>
            `;
        }

        modalHTML += '</div>';
    }

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActivityModal() {
    document.getElementById('activity-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Quick reference info button
function showQuickReference() {
    document.getElementById('modal-title').textContent = 'Trip Info';

    let modalHTML = `
        <div class="detail-row">
            <div class="detail-label">Hotel</div>
            <div class="detail-value large">${tripInfo.hotel.name}</div>
            <div class="detail-value">${tripInfo.hotel.address}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Check-in / Check-out</div>
            <div class="detail-value">Check-in: ${tripInfo.hotel.checkIn}<br>Check-out: ${tripInfo.hotel.checkOut}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Hotel Notes</div>
            <div class="detail-value">${tripInfo.hotel.notes}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Flights</div>
            ${tripInfo.flights.map(flight => `
                <div class="detail-value">
                    <strong>${flight.number}</strong> • ${flight.route}<br>
                    ${flight.date} • ${flight.time}
                </div>
            `).join('<br>')}
        </div>
        <div class="detail-actions">
            <a href="tel:${tripInfo.hotel.phone}"
               class="action-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Hotel
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tripInfo.hotel.address)}"
               target="_blank"
               class="action-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                Navigate to Hotel
            </a>
            <a href="${tripInfo.hotel.website}"
               target="_blank"
               class="action-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Hotel Website
            </a>
        </div>
    `;

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle browser back button
window.addEventListener('popstate', () => {
    showCalendar();
});
