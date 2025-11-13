// Key Trip Info (Quick Reference)
const tripInfo = {
    hotel: {
        name: 'Hotel Keihan Tsukiji Ginza Grande',
        address: '3 Chome-5-4 Tsukiji, Chuo City, Tokyo 104-0045, Japan',
        location: 'Tsukiji, Tokyo',
        phone: '+81 3-5565-1001',
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

// Weather data storage
let weatherData = {};

// Weather code to emoji mapping (Open-Meteo weather codes)
const weatherEmoji = {
    0: '☀️',   // Clear sky
    1: '🌤️',  // Mainly clear
    2: '⛅',  // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️', // Fog
    48: '🌫️', // Depositing rime fog
    51: '🌦️', // Light drizzle
    53: '🌧️', // Moderate drizzle
    55: '🌧️', // Dense drizzle
    61: '🌧️', // Slight rain
    63: '🌧️', // Moderate rain
    65: '🌧️', // Heavy rain
    71: '🌨️', // Slight snow
    73: '🌨️', // Moderate snow
    75: '🌨️', // Heavy snow
    77: '🌨️', // Snow grains
    80: '🌦️', // Slight rain showers
    81: '🌧️', // Moderate rain showers
    82: '🌧️', // Violent rain showers
    85: '🌨️', // Slight snow showers
    86: '🌨️', // Heavy snow showers
    95: '⛈️',  // Thunderstorm
    96: '⛈️',  // Thunderstorm with slight hail
    99: '⛈️'   // Thunderstorm with heavy hail
};

// Fetch weather data from Open-Meteo
async function fetchWeather() {
    try {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?' +
            'latitude=35.6762&longitude=139.6503&' +
            'daily=temperature_2m_max,temperature_2m_min,weathercode&' +
            'timezone=Asia/Tokyo&' +
            'start_date=2025-11-26&end_date=2025-12-03'
        );
        const data = await response.json();

        // Store weather data indexed by date
        data.daily.time.forEach((date, index) => {
            weatherData[date] = {
                max: Math.round(data.daily.temperature_2m_max[index]),
                min: Math.round(data.daily.temperature_2m_min[index]),
                code: data.daily.weathercode[index]
            };
        });

        // Re-render calendar with weather data
        renderCalendar();
    } catch (error) {
        console.log('Weather data unavailable');
    }
}

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
                    dropoffAddress: '3 Chome-5-4 Tsukiji, Chuo City, Tokyo 104-0045, Japan',
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
        type: 'explore',
        name: 'Day 1',
        date: 'Thursday, November 27',
        dayOfWeek: 'Thursday',
        dateShort: 'Nov 27',
        description: 'Local Exploration',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 3,
        type: 'day-trip',
        name: 'Day 2',
        date: 'Friday, November 28',
        dayOfWeek: 'Friday',
        dateShort: 'Nov 28',
        description: 'Karuizawa Shopping Plaza',
        morning: [
            {
                time: '07:30',
                title: 'Depart for Tokyo Station',
                description: 'Walk or Marunouchi Line (1 stop)',
                details: {
                    from: 'Hotel Keihan Tsukiji Ginza Grande',
                    to: 'Tokyo Station',
                    transport: 'Walk (~15 min) OR Marunouchi Line (1 stop from Ginza)',
                    tips: 'Aim to reach Tokyo Station by 08:30 to purchase Shinkansen tickets and ekiben (train bento)'
                }
            },
            {
                time: '08:41',
                title: 'Hokuriku Shinkansen to Karuizawa',
                description: 'Hakutaka 555 - Green Car (1h 2m)',
                location: 'Tokyo Station',
                details: {
                    train: 'Hakutaka 555',
                    departure: 'Tokyo Station 08:41',
                    arrival: 'Karuizawa Station 09:43',
                    duration: '1h 2m',
                    car: 'Car 11 (Green)',
                    seats: '9-C, 9-D',
                    passengers: '2 adults',
                    price: '¥16,580 (¥8,290 per person)',
                    ticketType: 'Reserved - Purchase at ticket counter or vending machine before boarding',
                    ticketLink: 'https://www.icloud.com/iclouddrive/0a8T3t4h3Rwgq9UcU1uW4qB-A#20251128_Hakutaka555_Tokyo-Karuizawa',
                    tips: 'Seats 9-C and 9-D in Green Car 11. Purchase ekiben at Tokyo Station for the journey.'
                }
            }
        ],
        afternoon: [
            {
                time: '10:00',
                title: 'Karuizawa Prince Shopping Plaza',
                description: '3-4 hours shopping & lunch',
                location: 'Karuizawa Prince Shopping Plaza',
                details: {
                    location: 'South Exit of Karuizawa Station (2-3 min walk)',
                    website: 'https://www.karuizawa-psp.jp/en',
                    highlights: '200+ outlet stores, food court, restaurants',
                    optional: 'Coffee or stroll around Karuizawa town if time permits',
                    tips: 'Tax-free shopping with passport. Coin lockers available for bags.'
                }
            }
        ],
        evening: [
            {
                time: '15:30',
                title: 'Return Shinkansen to Tokyo',
                description: 'Depart Karuizawa 3:30-4:00 PM',
                details: {
                    departure: 'Karuizawa Station (~15:30-16:00)',
                    arrival: 'Tokyo Station (before evening)',
                    duration: '~65-75 minutes',
                    trainType: 'Hokuriku Shinkansen - Asama or Hakutaka',
                    return: 'Walk or Marunouchi Line (1 stop) back to Ginza'
                }
            },
            {
                time: '18:00',
                title: 'Dinner in Ginza',
                description: 'Location TBD',
                details: {
                    area: 'Ginza district (near hotel)',
                    suggestions: 'Sushi, izakaya, ramen, or kaiseki cuisine'
                }
            }
        ]
    },
    {
        id: 4,
        type: 'explore',
        name: 'Day 3',
        date: 'Saturday, November 29',
        dayOfWeek: 'Saturday',
        dateShort: 'Nov 29',
        description: 'City Discovery',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 5,
        type: 'explore',
        name: 'Day 4',
        date: 'Sunday, November 30',
        dayOfWeek: 'Sunday',
        dateShort: 'Nov 30',
        description: 'Cultural Experience',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 6,
        type: 'day-trip',
        name: 'Day 5',
        date: 'Monday, December 1',
        dayOfWeek: 'Monday',
        dateShort: 'Dec 1',
        description: 'Hakone Day Trip',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 7,
        type: 'explore',
        name: 'Day 6',
        date: 'Tuesday, December 2',
        dayOfWeek: 'Tuesday',
        dateShort: 'Dec 2',
        description: 'Shopping & Dining',
        morning: [],
        afternoon: [],
        evening: []
    },
    {
        id: 8,
        type: 'explore',
        name: 'Day 7',
        date: 'Wednesday, December 3',
        dayOfWeek: 'Wednesday',
        dateShort: 'Dec 3',
        description: 'Final Moments',
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
                    pickupAddress: '3 Chome-5-4 Tsukiji, Chuo City, Tokyo 104-0045, Japan',
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

        // Get weather for this day (map day to date)
        const dateMap = {
            1: '2025-11-26', 2: '2025-11-27', 3: '2025-11-28',
            4: '2025-11-29', 5: '2025-11-30', 6: '2025-12-01',
            7: '2025-12-02', 8: '2025-12-03', 9: '2025-12-03'
        };
        const dayDate = dateMap[day.id];
        const weather = weatherData[dayDate];

        // Day type labels
        const typeLabels = {
            'travel': '✈️ Travel',
            'explore': '🗺️ Explore',
            'day-trip': '🚄 Day Trip'
        };
        const typeLabel = typeLabels[day.type] || '';

        const weatherHTML = weather ? `
            <div class="day-weather">
                <span class="weather-icon">${weatherEmoji[weather.code] || '🌤️'}</span>
                <span class="weather-temp">${weather.max}°/${weather.min}°C</span>
            </div>
        ` : '';

        // Parse date for calendar-style display
        const dateParts = day.dateShort.split(' '); // e.g., "Nov 26"
        const month = dateParts[0];
        const dayNumber = dateParts[1];
        const weekdayShort = day.dayOfWeek.substring(0, 3).toUpperCase(); // e.g., "WED"

        return `
            <div class="${cardClass}" onclick="showDay(${day.id})">
                <!-- Left: Calendar Date Block -->
                <div class="day-card-date-block">
                    <div class="day-month">${month}</div>
                    <div class="day-day-number">${dayNumber}</div>
                    <div class="day-weekday-short">${weekdayShort}</div>
                </div>

                <!-- Middle: Main Content -->
                <div class="day-card-content">
                    <div class="day-card-header">
                        <span class="day-number">${day.name}</span>
                        ${typeLabel ? `<span class="day-type-badge">${typeLabel}</span>` : ''}
                    </div>
                    <div class="day-name">${day.dayOfWeek}</div>
                    ${day.description ? `<div class="day-description">${day.description}</div>` : ''}
                </div>

                <!-- Right: Weather & Status -->
                <div class="day-card-right">
                    ${isCurrentDay ? '<div class="day-badge">Today</div>' : ''}
                    ${weatherHTML}
                </div>
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

// Update Tokyo time display
function updateTokyoTime() {
    const tokyoTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    document.getElementById('time-display').textContent = `Tokyo ${tokyoTime}`;
}

// Update countdown
function updateCountdown() {
    const now = new Date();
    const tripStart = new Date('2025-11-26T00:00:00');
    const tripEnd = new Date('2025-12-03T23:59:59');

    if (now < tripStart) {
        const diffTime = tripStart - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('countdown-display').textContent =
            diffDays === 1 ? '✈️ Tomorrow!' : `✈️ ${diffDays} days to go`;
    } else if (now >= tripStart && now <= tripEnd) {
        document.getElementById('countdown-display').textContent = '🎌 You\'re in Tokyo!';
    } else {
        document.getElementById('countdown-display').textContent = '🌸 Memories made';
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    fetchWeather();

    // Update time and countdown
    updateTokyoTime();
    updateCountdown();
    setInterval(updateTokyoTime, 1000);
    setInterval(updateCountdown, 60000);

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

    // Render all detail fields (except ticketLink - handle separately)
    Object.entries(activity.details).forEach(([key, value]) => {
        if (key === 'ticketLink') return; // Skip ticketLink, we'll add it as a button

        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        modalHTML += `
            <div class="detail-row">
                <div class="detail-label">${label}</div>
                <div class="detail-value">${value}</div>
            </div>
        `;
    });

    // Add action buttons
    const hasActions = activity.location || activity.details.pickup || activity.details.dropoff || activity.details.ticketLink;

    if (hasActions) {
        modalHTML += '<div class="detail-actions">';

        // Ticket link (prioritize at top)
        if (activity.details.ticketLink) {
            modalHTML += `
                <a href="${activity.details.ticketLink}"
                   target="_blank"
                   class="action-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="7" width="20" height="10" rx="2" ry="2"/>
                        <path d="M22 12h-4"/>
                        <path d="M6 12H2"/>
                    </svg>
                    View Ticket & QR Code
                </a>
            `;
        }

        if (activity.location) {
            modalHTML += `
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}"
                   target="_blank"
                   class="action-button secondary">
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
                <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Hotel Keihan Tsukiji Ginza Grande, ' + activity.details.dropoffAddress)}"
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

// Flight Details modal
function showFlightDetails() {
    document.getElementById('modal-title').textContent = 'Flight Details';

    let modalHTML = `
        <div class="detail-row">
            <div class="detail-label">Outbound Flight</div>
            <div class="detail-value large">${tripInfo.flights[0].number}</div>
            <div class="detail-value">${tripInfo.flights[0].route}</div>
            <div class="detail-value">${tripInfo.flights[0].date} • ${tripInfo.flights[0].time}</div>
        </div>
        <div class="detail-row">
            <div class="detail-label">Return Flight</div>
            <div class="detail-value large">${tripInfo.flights[1].number}</div>
            <div class="detail-value">${tripInfo.flights[1].route}</div>
            <div class="detail-value">${tripInfo.flights[1].date} • ${tripInfo.flights[1].time}</div>
        </div>
    `;

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hotel Details modal
function showHotelDetails() {
    document.getElementById('modal-title').textContent = 'Hotel Details';

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
        <div class="detail-actions">
            <a href="tel:${tripInfo.hotel.phone}"
               class="action-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Hotel
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(tripInfo.hotel.name + ', ' + tripInfo.hotel.address)}"
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
