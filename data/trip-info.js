// ═══════════════════════════════════════════════════════════════════════════
// TRIP INFO - Hotel, Flights, Tickets & Vouchers
// ═══════════════════════════════════════════════════════════════════════════
// Quick edit: Update hotel details, flight times, or add/remove tickets below
// ═══════════════════════════════════════════════════════════════════════════

export const tripInfo = {
    // Hotel information (single entry)
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

    // Flight summary (for header display only - full details in tripData)
    flights: [
        { number: 'QF59', route: 'Sydney → Tokyo', date: 'Nov 26', time: '12:00 - 20:00' },
        { number: 'QF26', route: 'Tokyo → Sydney', date: 'Dec 3', time: '06:55 - 18:50' }
    ],

    /*
     * ═══════════════════════════════════════════════════════════════════════
     * TICKETS & VOUCHERS PARADIGM
     * ═══════════════════════════════════════════════════════════════════════
     *
     * PURPOSE: Centralized access to all tickets/vouchers via "Tickets & Vouchers" button
     * ALSO: Individual tickets accessible within daily itinerary via ticketLink field
     *
     * DUAL ACCESS:
     * - Add ticket here for centralized view
     * - Add ticketLink to activity.details for in-context access
     *
     * ICONS: ✈️ flights | 🚄 trains | 🎟️ activities | 🚗 transfers
     *
     * REQUIRED FIELDS:
     * - type: 'flight' | 'train' | 'activity' | 'transfer'
     * - title: Short descriptive name
     * - date: Date(s) of use
     * - link: iCloud share link to PDF/ticket
     * - icon: Emoji for visual categorization
     *
     * OPTIONAL FIELDS:
     * - time: Departure/entry time
     * - details: Brief description (e.g., seat numbers, ticket type)
     *
     * RENDERING: Clickable document-list style (iOS Files app pattern)
     */
    ticketsVouchers: [
        {
            type: 'customs',
            title: 'Ali Beydoun - Customs QR Code',
            date: 'Nov 26, 2025',
            details: 'Immigration & Customs Declaration',
            link: 'ali-beydoun-customs-qr-code.png',
            icon: '🛂'
        },
        {
            type: 'customs',
            title: 'Najah Elzein - Customs QR Code',
            date: 'Nov 26, 2025',
            details: 'Immigration & Customs Declaration',
            link: 'najah-elzein-customs-qr-code.png',
            icon: '🛂'
        },
        {
            type: 'flight',
            title: 'QF59 & QF26 - Qantas Flight Itinerary',
            date: 'Nov 26 & Dec 3, 2025',
            time: 'SYD→HND 12:00 / HND→SYD 06:55',
            details: 'Economy Class, 2 Adults',
            link: 'https://www.icloud.com/iclouddrive/014TquIMBXgLcqnW2rVPpyI-w#FZL4E6__Qantas_Flight_Itinerary',
            icon: '✈️'
        },
        {
            type: 'activity',
            title: 'Shibuya Sky - Observation Deck',
            date: 'Nov 27, 2025',
            time: '13:20',
            details: 'Admission Ticket, 2 Adults',
            link: 'https://www.icloud.com/iclouddrive/0b6j5lNumA7uSEYJn2KAEP4Fw#20251127_SHIBUYA_SKY_Ticket',
            icon: '🏙️'
        },
        {
            type: 'train',
            title: 'Hakutaka 555 - Tokyo to Karuizawa',
            date: 'Nov 28, 2025',
            time: '08:41 - 09:43',
            details: 'Green Car 11, Seats 9-C & 9-D',
            link: 'https://www.icloud.com/iclouddrive/0a8T3t4h3Rwgq9UcU1uW4qB-A#20251128_Hakutaka555_Tokyo-Karuizawa',
            icon: '🚄'
        },
        {
            type: 'train',
            title: 'Asama 624 - Karuizawa to Tokyo',
            date: 'Nov 28, 2025',
            time: '16:23 - 17:28',
            details: 'Green Car 11, Seats 7-C & 7-D',
            link: 'https://www.icloud.com/iclouddrive/007ykC75nU-ThDdIzm_XZN2fA#20251128_Asama624_Karuizawa-Tokyo',
            icon: '🚄'
        },
        {
            type: 'activity',
            title: 'Kamakura Half-Day Walking Tour',
            date: 'Dec 1, 2025',
            time: '11:00 AM - 3:00 PM',
            details: 'Great Buddha, Kamakura High School, Komachi Street, Shrines - English Guide',
            link: 'https://www.klook.com/activity/91283-kotoku-temple-kamakura-high-school-mae-station-komachi-street-join-half-day-walking-tour/',
            icon: '⛩️'
        }
        // ADD NEW TICKETS ABOVE THIS LINE
    ]
};

// Weather code to emoji mapping (Open-Meteo weather codes)
export const weatherEmoji = {
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
