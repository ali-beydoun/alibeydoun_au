/*
 * ═══════════════════════════════════════════════════════════════════════════
 * TOKYO TRIP PLANNER - UI Logic (Don't Edit Data Here!)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ⚠️  THIS FILE IS FOR UI LOGIC ONLY - DON'T EDIT ITINERARY DATA HERE!
 *
 * TO UPDATE THE ITINERARY → Go to these files instead:
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ✏️  Edit Day 1-8 activities → data/days/day-X.js (where X = 1-8)      │
 * │ 🏨 Edit hotel/flight info   → data/trip-info.js                        │
 * │ 🍽️  Edit restaurants/cafes   → data/food-options.js                    │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * This file only contains UI rendering logic and event handlers.
 * All trip data is imported from the data/ folder.
 *
 * See README.md for quick edit guide.
 * ═══════════════════════════════════════════════════════════════════════════
 */

// Import data modules
import { tripInfo, weatherEmoji } from './data/trip-info.js';
import { foodOptions } from './data/food-options.js';
import day1 from './data/days/day-1.js';
import day2 from './data/days/day-2.js';
import day3 from './data/days/day-3.js';
import day4 from './data/days/day-4.js';
import day5 from './data/days/day-5.js';
import day6 from './data/days/day-6.js';
import day7 from './data/days/day-7.js';
import day8 from './data/days/day-8.js';

// Combine all days into trip data array
const tripData = [day1, day2, day3, day4, day5, day6, day7, day8];

// Add food options to tripInfo for compatibility
tripInfo.foodOptions = foodOptions;

// Weather data storage
let weatherData = {};

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

        // Validate weather data structure
        if (!data || !data.daily || !Array.isArray(data.daily.time)) {
            console.log('Invalid weather data structure');
            return;
        }

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

// Apply time-of-day gradient that darkens as the day progresses
function applyTimeOfDayGradient(contentEl, day) {
    // Extract time sections from the day's schedule
    const schedule = day.morning || day.afternoon || day.evening || day.night;
    if (!schedule) {
        // Default light gradient
        contentEl.style.background = 'linear-gradient(180deg, #F8F8F9 0%, #F2F2F5 100%)';
        return;
    }

    // Determine the latest time period in the schedule
    let latestPeriod = 'morning';
    if (day.night && day.night.length > 0) latestPeriod = 'night';
    else if (day.evening && day.evening.length > 0) latestPeriod = 'evening';
    else if (day.afternoon && day.afternoon.length > 0) latestPeriod = 'afternoon';

    // Define gradients for each time period (progressively darker)
    const gradients = {
        morning: 'linear-gradient(180deg, #F8F8F9 0%, #F2F2F5 100%)',
        afternoon: 'linear-gradient(180deg, #F5F5F7 0%, #EBEBED 100%)',
        evening: 'linear-gradient(180deg, #EDEDEF 0%, #DCDCE0 100%)',
        night: 'linear-gradient(180deg, #E5E5E8 0%, #D1D1D6 100%)'
    };

    contentEl.style.background = gradients[latestPeriod];
}

// Render day detail view
function renderDayDetail(dayId) {
    const day = tripData.find(d => d.id === dayId);
    if (!day) return;

    // Create structured banner title with day name and date on separate lines
    const titleEl = document.getElementById('day-title-content');
    titleEl.innerHTML = `
        <div style="font-size: 14px; font-weight: 600; color: var(--color-blue); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; opacity: 0.9;">${day.name}</div>
        <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">${day.date}</div>
    `;
    const content = document.getElementById('day-content');

    // Apply dynamic gradient based on time of day (darkens as day progresses)
    applyTimeOfDayGradient(content, day);

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
        if (section.activities && section.activities.length > 0) {
            html += `<div class="time-section">
                <h3 class="section-header">${section.title}</h3>
                ${section.activities.map((activity, index) => {
                    const hasDetails = activity.details && Object.keys(activity.details).length > 0;

                    // Check if this is a transport/logistics item
                    const isTransport = activity.title.toLowerCase().includes('flight') ||
                                       activity.title.toLowerCase().includes('transfer') ||
                                       activity.title.toLowerCase().includes('shinkansen') ||
                                       activity.title.toLowerCase().includes('train') ||
                                       activity.title.toLowerCase().includes('airport') ||
                                       activity.details?.train ||
                                       activity.details?.flight;

                    // Check if this is a food option
                    const isFoodOption = activity.isFoodOption || activity.foodType;

                    let cardClass = hasDetails ? 'activity-card clickable' : 'activity-card';
                    if (isTransport) cardClass += ' transport';
                    if (isFoodOption) cardClass += ' food-option';

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

// Current day being viewed
let currentDayId = null;

// Navigation functions
function showDay(dayId) {
    currentDayId = dayId;
    renderDayDetail(dayId);
    updateNavigationButtons();
    document.getElementById('calendar-view').classList.remove('active');
    document.getElementById('day-view').classList.add('active');
    window.scrollTo(0, 0);

    // Update URL hash for deep linking (e.g., #day-2)
    window.history.pushState(null, '', `#day-${dayId}`);
}

function showCalendar() {
    document.getElementById('day-view').classList.remove('active');
    document.getElementById('calendar-view').classList.add('active');
    window.scrollTo(0, 0);

    // Clear hash when returning to calendar
    window.history.pushState(null, '', window.location.pathname);
}

// Day-to-day navigation
function navigatePrevDay() {
    if (currentDayId > 1) {
        showDay(currentDayId - 1);
    }
}

function navigateNextDay() {
    if (currentDayId < tripData.length) {
        showDay(currentDayId + 1);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('nav-prev');
    const nextBtn = document.getElementById('nav-next');

    // Disable prev button if on first day
    if (currentDayId <= 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Disable next button if on last day
    if (currentDayId >= tripData.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
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

// Expose functions to global scope for onclick handlers
window.showDay = showDay;
window.showCalendar = showCalendar;
window.navigatePrevDay = navigatePrevDay;
window.navigateNextDay = navigateNextDay;
window.showActivityDetail = showActivityDetail;
window.closeActivityModal = closeActivityModal;
window.showFlightDetails = showFlightDetails;
window.showHotelDetails = showHotelDetails;
window.showTicketsVouchers = showTicketsVouchers;
window.showFoodOptions = showFoodOptions;
window.showFoodOptionsForMeal = showFoodOptionsForMeal;
window.copyDayToClipboard = copyDayToClipboard;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    fetchWeather();

    // Update time and countdown
    updateTokyoTime();
    updateCountdown();
    setInterval(updateTokyoTime, 1000);
    setInterval(updateCountdown, 60000);

    // Check for URL hash and auto-open day (for deep linking)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#day-')) {
        const dayId = parseInt(hash.replace('#day-', ''));
        if (dayId && dayId >= 1 && dayId <= tripData.length) {
            // Auto-open the day from the URL hash
            setTimeout(() => {
                showDay(dayId);
            }, 100);
            return; // Skip auto-navigate to current day
        }
    }

    // Auto-navigate to current day if on trip (only if no hash)
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

    const sectionActivities = day[section];
    if (!sectionActivities || !Array.isArray(sectionActivities)) return;

    const activity = sectionActivities[activityIndex];
    if (!activity || !activity.details) return;

    // Check if this is a food option - show food options for that meal type
    if (activity.isFoodOption && activity.foodType) {
        // Pass areas filter if specified, otherwise show all
        const areas = activity.foodAreas || null;
        showFoodOptionsForMeal(activity.foodType, activity.title, areas);
        return;
    }

    document.getElementById('modal-title').textContent = activity.title;

    let modalHTML = '';

    // Check if this is a hit list (has shops array)
    if (activity.details.shops && Array.isArray(activity.details.shops)) {
        // Render hit list format - clean, minimal, bang bang bang
        activity.details.shops.forEach(shop => {
            modalHTML += `
                <div class="hit-list-item">
                    <div class="hit-list-name">${shop.name}</div>
                    <div class="hit-list-highlight">${shop.highlight}</div>
                    <div class="hit-list-meta">${shop.hours}${shop.walk ? ' • ' + shop.walk : ''}</div>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapLink)}"
                       target="_blank"
                       class="action-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        Navigate
                    </a>
                </div>
            `;
        });

        // Add strategy note if present
        if (activity.details.strategy) {
            modalHTML += `<div class="detail-row"><div class="detail-value">${activity.details.strategy}</div></div>`;
        }
    } else {
        // Render normal detail fields (except ticketLink and shops - handle separately)
        Object.entries(activity.details).forEach(([key, value]) => {
            if (key === 'ticketLink' || key === 'shops') return;

            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            modalHTML += `
                <div class="detail-row">
                    <div class="detail-label">${label}</div>
                    <div class="detail-value">${value}</div>
                </div>
            `;
        });
    }

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

// Tickets & Vouchers modal
function showTicketsVouchers() {
    document.getElementById('modal-title').textContent = 'Tickets & Vouchers';

    let modalHTML = '';

    if (tripInfo.ticketsVouchers && tripInfo.ticketsVouchers.length > 0) {
        tripInfo.ticketsVouchers.forEach(ticket => {
            modalHTML += `
                <a href="${ticket.link}"
                   target="_blank"
                   class="ticket-item-link">
                    <div class="ticket-item">
                        <div class="ticket-icon">${ticket.icon}</div>
                        <div class="ticket-info">
                            <div class="ticket-title">${ticket.title}</div>
                            <div class="ticket-meta">${ticket.date}${ticket.time ? ' • ' + ticket.time : ''}</div>
                            ${ticket.details ? `<div class="ticket-details">${ticket.details}</div>` : ''}
                        </div>
                        <svg class="ticket-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </div>
                </a>
            `;
        });
    } else {
        modalHTML = '<div class="empty-section">No tickets or vouchers added yet</div>';
    }

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Food Options modal
function showFoodOptions() {
    document.getElementById('modal-title').textContent = 'Food Options';

    let modalHTML = '';

    if (tripInfo.foodOptions && tripInfo.foodOptions.length > 0) {
        // Group by meal type
        const breakfast = tripInfo.foodOptions.filter(f => f.type === 'breakfast');
        const lunch = tripInfo.foodOptions.filter(f => f.type === 'lunch');
        const dinner = tripInfo.foodOptions.filter(f => f.type === 'dinner');
        const cafe = tripInfo.foodOptions.filter(f => f.type === 'cafe');

        const renderFoodSection = (title, foods) => {
            if (foods.length === 0) return '';
            let html = `<div class="food-section-header">${title}</div>`;
            foods.forEach(food => {
                const googleSearchQuery = encodeURIComponent(`${food.name} ${food.address} Tokyo`);
                const googleMapsQuery = encodeURIComponent(`${food.name}, ${food.address}`);

                html += `
                    <div class="food-item">
                        <div class="food-item-header">
                            <div class="food-icon">${food.icon}</div>
                            <div class="food-main">
                                <div class="food-name">${food.name}</div>
                                <div class="food-cuisine">${food.cuisine}${food.halal ? ' • <span class="halal-badge">Halal</span>' : ''}</div>
                            </div>
                        </div>
                        <div class="food-details">
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>${food.location}</span>
                            </div>
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                <span>${food.hours}</span>
                            </div>
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="1" x2="12" y2="23"/>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                </svg>
                                <span>${food.priceRange}</span>
                            </div>
                            ${food.specialty ? `<div class="food-specialty">★ ${food.specialty}</div>` : ''}
                            ${food.certification ? `<div class="food-certification">✓ ${food.certification}</div>` : ''}
                            ${food.tips ? `<div class="food-tips">${food.tips}</div>` : ''}
                        </div>
                        <div class="food-actions">
                            <a href="https://www.google.com/search?q=${googleSearchQuery}&tbm=isch"
                               target="_blank"
                               class="food-action-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                                Photos
                            </a>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${googleMapsQuery}"
                               target="_blank"
                               class="food-action-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Navigate
                            </a>
                            ${food.phone ? `
                                <a href="tel:${food.phone}"
                                   class="food-action-button">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Call
                                </a>
                            ` : ''}
                        </div>
                    </div>
                `;
            });
            return html;
        };

        modalHTML += renderFoodSection('Breakfast', breakfast);
        modalHTML += renderFoodSection('Lunch', lunch);
        modalHTML += renderFoodSection('Dinner', dinner);
        modalHTML += renderFoodSection('Cafes & Snacks', cafe);

    } else {
        modalHTML = '<div class="empty-section">No food options added yet</div>';
    }

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Food Options for specific meal type (called from activity card)
function showFoodOptionsForMeal(mealType, title, areas = null) {
    document.getElementById('modal-title').textContent = title || `${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Options`;

    let modalHTML = '';

    if (tripInfo.foodOptions && tripInfo.foodOptions.length > 0) {
        // Filter by meal type
        let foods = tripInfo.foodOptions.filter(f => f.type === mealType);

        // If areas are specified, filter by those areas
        if (areas && areas.length > 0) {
            foods = foods.filter(f => areas.includes(f.area));
        }

        if (foods.length > 0) {
            foods.forEach(food => {
                const googleSearchQuery = encodeURIComponent(`${food.name} ${food.address} Tokyo`);
                const googleMapsQuery = encodeURIComponent(`${food.name}, ${food.address}`);

                modalHTML += `
                    <div class="food-item">
                        <div class="food-item-header">
                            <div class="food-icon">${food.icon}</div>
                            <div class="food-main">
                                <div class="food-name">${food.name}</div>
                                <div class="food-cuisine">${food.cuisine}${food.halal ? ' • <span class="halal-badge">Halal</span>' : ''}</div>
                            </div>
                        </div>
                        <div class="food-details">
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>${food.location}</span>
                            </div>
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                <span>${food.hours}</span>
                            </div>
                            <div class="food-detail-row">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="1" x2="12" y2="23"/>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                </svg>
                                <span>${food.priceRange}</span>
                            </div>
                            ${food.specialty ? `<div class="food-specialty">★ ${food.specialty}</div>` : ''}
                            ${food.certification ? `<div class="food-certification">✓ ${food.certification}</div>` : ''}
                            ${food.tips ? `<div class="food-tips">${food.tips}</div>` : ''}
                        </div>
                        <div class="food-actions">
                            <a href="https://www.google.com/search?q=${googleSearchQuery}&tbm=isch"
                               target="_blank"
                               class="food-action-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                    <polyline points="21 15 16 10 5 21"/>
                                </svg>
                                Photos
                            </a>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${googleMapsQuery}"
                               target="_blank"
                               class="food-action-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                Navigate
                            </a>
                            ${food.phone ? `
                                <a href="tel:${food.phone}"
                                   class="food-action-button">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Call
                                </a>
                            ` : ''}
                        </div>
                    </div>
                `;
            });
        } else {
            modalHTML = `<div class="empty-section">No ${mealType} options added yet</div>`;
        }
    } else {
        modalHTML = '<div class="empty-section">No food options added yet</div>';
    }

    document.getElementById('modal-body').innerHTML = modalHTML;
    document.getElementById('activity-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle browser back/forward button and hash changes
window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#day-')) {
        const dayId = parseInt(hash.replace('#day-', ''));
        if (dayId && dayId >= 1 && dayId <= tripData.length) {
            showDay(dayId);
        } else {
            showCalendar();
        }
    } else {
        showCalendar();
    }
});

// ═══════════════════════════════════════════════════════════════════════════
// SWIPE GESTURE NAVIGATION SYSTEM
// ═══════════════════════════════════════════════════════════════════════════
/*
 * Implements iOS-like swipe gestures for day-to-day navigation
 * - Swipe left → next day
 * - Swipe right → previous day
 * - Distinguishes horizontal swipes from vertical scrolls
 * - Prevents swipes when at boundaries (first/last day)
 * - Smooth slide animations with hardware acceleration
 */

(function initSwipeGestures() {
    const dayView = document.getElementById('day-view');
    const dayContent = document.getElementById('day-content');

    let touchStartX = 0;
    let touchStartY = 0;
    let touchCurrentX = 0;
    let touchCurrentY = 0;
    let isSwiping = false;
    let swipeDirection = null;

    const SWIPE_THRESHOLD = 80; // Minimum distance to trigger navigation
    const VELOCITY_THRESHOLD = 0.3; // Minimum velocity for quick swipes
    const MAX_VERTICAL_DRIFT = 50; // Maximum vertical movement to still be horizontal swipe

    // Touch start - record initial position
    dayView.addEventListener('touchstart', (e) => {
        // Don't interfere with modal interactions
        if (document.getElementById('activity-modal').classList.contains('active')) {
            return;
        }

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchCurrentX = touchStartX;
        touchCurrentY = touchStartY;
        isSwiping = false;
        swipeDirection = null;

        // Prepare for potential animation
        dayContent.style.transition = 'none';
    }, { passive: true });

    // Touch move - track movement and provide visual feedback
    dayView.addEventListener('touchmove', (e) => {
        if (document.getElementById('activity-modal').classList.contains('active')) {
            return;
        }

        touchCurrentX = e.touches[0].clientX;
        touchCurrentY = e.touches[0].clientY;

        const deltaX = touchCurrentX - touchStartX;
        const deltaY = touchCurrentY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        // Determine if this is a horizontal swipe (not vertical scroll)
        if (!isSwiping && absDeltaX > 10) {
            if (absDeltaX > absDeltaY) {
                isSwiping = true;
                swipeDirection = deltaX > 0 ? 'right' : 'left';

                // Check if swipe is allowed
                const currentIndex = tripData.findIndex(day => day.id === currentDayId);
                if (swipeDirection === 'right' && currentIndex === 0) {
                    isSwiping = false; // At first day, can't go back
                }
                if (swipeDirection === 'left' && currentIndex === tripData.length - 1) {
                    isSwiping = false; // At last day, can't go forward
                }
            }
        }

        // Provide visual feedback during swipe
        if (isSwiping && Math.abs(deltaY) < MAX_VERTICAL_DRIFT) {
            e.preventDefault(); // Prevent scroll during horizontal swipe

            // Dampen the movement for rubber band effect
            const dampening = 0.4;
            const translationX = deltaX * dampening;
            dayContent.style.transform = `translateX(${translationX}px)`;
        }
    }, { passive: false });

    // Touch end - evaluate swipe and navigate if threshold met
    dayView.addEventListener('touchend', () => {
        if (document.getElementById('activity-modal').classList.contains('active')) {
            return;
        }

        const deltaX = touchCurrentX - touchStartX;
        const deltaY = touchCurrentY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        // Calculate swipe velocity (distance over approximate time)
        const velocity = absDeltaX / 300;

        // Reset visual state
        dayContent.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        dayContent.style.transform = 'translateX(0)';

        // Determine if swipe should trigger navigation
        const shouldNavigate = isSwiping &&
                              absDeltaX > absDeltaY &&
                              (absDeltaX > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD);

        if (shouldNavigate) {
            if (swipeDirection === 'left') {
                // Swipe left = next day
                setTimeout(() => {
                    navigateNextDay();
                }, 100);
            } else if (swipeDirection === 'right') {
                // Swipe right = previous day
                setTimeout(() => {
                    navigatePrevDay();
                }, 100);
            }
        }

        // Reset state
        isSwiping = false;
        swipeDirection = null;
    }, { passive: true });

    // Touch cancel - reset state
    dayView.addEventListener('touchcancel', () => {
        dayContent.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        dayContent.style.transform = 'translateX(0)';
        isSwiping = false;
        swipeDirection = null;
    }, { passive: true });
})();

// ═══════════════════════════════════════════════════════════════════════════
// COPY DAY ITINERARY TO CLIPBOARD
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Copy current day's itinerary to clipboard with trip context
 * Uses modern Clipboard API with execCommand fallback for compatibility
 */
async function copyDayToClipboard() {
    const day = tripData.find(d => d.id === currentDayId);
    if (!day) {
        console.error('Day not found for id:', currentDayId);
        alert('Error: Could not find day data');
        return;
    }

    const markdownText = generateDayMarkdown(day);
    const button = document.querySelector('.copy-day-button');

    // Try modern Clipboard API first (Chrome, Firefox, Edge, modern Safari)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(markdownText);
            console.log('✅ Copied via Clipboard API');
            showCopySuccess(button);
            return;
        } catch (err) {
            console.warn('Clipboard API failed, trying fallback:', err);
            // Continue to fallback
        }
    }

    // Fallback: execCommand for older browsers/iOS Safari
    try {
        const success = fallbackCopyWithExecCommand(markdownText);
        if (success) {
            console.log('✅ Copied via execCommand fallback');
            showCopySuccess(button);
            return;
        }
    } catch (err) {
        console.error('Copy failed:', err);
    }

    // If all methods fail
    alert('Unable to copy to clipboard. Please try selecting and copying the text manually.');
}

/**
 * Fallback copy method using deprecated execCommand
 * Simplified approach that works across browsers including iOS Safari
 */
function fallbackCopyWithExecCommand(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Simple off-screen positioning
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let success = false;
    try {
        success = document.execCommand('copy');
    } finally {
        document.body.removeChild(textArea);
    }

    return success;
}

/**
 * Show success animation on copy button
 */
function showCopySuccess(button) {
    if (!button) return;

    button.classList.add('copied');

    // Reset after 2 seconds
    setTimeout(() => {
        button.classList.remove('copied');
    }, 2000);
}


/**
 * Generate markdown text for the current day with full trip context
 */
function generateDayMarkdown(day) {
    const lines = [];

    // Trip Header
    lines.push('# 🗼 Tokyo Trip: November 26 - December 3, 2025');
    lines.push('**Travelers:** Ali & Najah');
    lines.push('**Hotel:** Hotel Keihan Tsukiji Ginza Grande (Ginza/Tsukiji)');
    lines.push('');
    lines.push('---');
    lines.push('');

    // LLM Prompt
    lines.push('**PLEASE REVIEW THIS DAY PLAN** and suggest improvements considering:');
    lines.push('- Logistics and timing between locations');
    lines.push('- Local customs and etiquette');
    lines.push('- Nearby alternatives or additions');
    lines.push('- Overall flow and pacing');
    lines.push('- Connection to previous/next days');
    lines.push('');
    lines.push('---');
    lines.push('');

    // Day Header
    lines.push(`## ${day.name} - ${day.date}`);
    lines.push(`### ${day.description}`);
    lines.push('');

    // Flight info for travel days
    if (day.flight) {
        lines.push('### ✈️ Flight Details');
        lines.push(`**Flight:** ${day.flight.number} - ${day.flight.route}`);
        lines.push(`**Departure:** ${day.flight.departure}`);
        lines.push(`**Arrival:** ${day.flight.arrival}`);
        lines.push(`**Airport:** ${day.flight.airport}`);
        lines.push('');
    }

    // Time sections
    const sections = [
        { key: 'morning', icon: '🌅', title: 'Morning' },
        { key: 'afternoon', icon: '☀️', title: 'Afternoon' },
        { key: 'evening', icon: '🌙', title: 'Evening' }
    ];

    sections.forEach(section => {
        if (day[section.key] && day[section.key].length > 0) {
            lines.push(`### ${section.icon} ${section.title}`);
            lines.push('');

            day[section.key].forEach(activity => {
                // Activity header
                lines.push(`**${activity.time} - ${activity.title}**`);
                if (activity.description) {
                    lines.push(activity.description);
                }

                // Location
                if (activity.location) {
                    lines.push(`- Location: ${activity.location}`);
                }

                // Details
                if (activity.details) {
                    const details = activity.details;

                    // Common detail fields
                    if (details.address) lines.push(`- Address: ${details.address}`);
                    if (details.duration) lines.push(`- Duration: ${details.duration}`);
                    if (details.hours) lines.push(`- Hours: ${details.hours}`);
                    if (details.tips) lines.push(`- Tips: ${details.tips}`);
                    if (details.strategy) lines.push(`- Strategy: ${details.strategy}`);

                    // Hit list shops
                    if (details.shops && details.shops.length > 0) {
                        lines.push('');
                        lines.push('**Shops to visit:**');
                        details.shops.forEach(shop => {
                            lines.push(`${shop.name}`);
                            if (shop.address) lines.push(`   - Address: ${shop.address}`);
                            if (shop.highlight) lines.push(`   - ${shop.highlight}`);
                            if (shop.hours) lines.push(`   - Hours: ${shop.hours}`);
                            if (shop.walk) lines.push(`   - Walk: ${shop.walk}`);
                            if (shop.mapLink) {
                                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapLink)}`;
                                lines.push(`   - [Navigate](${mapsUrl})`);
                            }
                            lines.push('');
                        });
                    }

                    // Ticket link
                    if (details.ticketLink) {
                        lines.push(`- [View Ticket](${details.ticketLink})`);
                    }
                }

                // Map link
                if (activity.location) {
                    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`;
                    lines.push(`- [Navigate](${mapsUrl})`);
                }

                lines.push('');
            });
        }
    });

    return lines.join('\n');
}
