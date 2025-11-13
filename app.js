/*
 * ═══════════════════════════════════════════════════════════════════════════
 * TOKYO TRIP PLANNER - DATA STRUCTURE & PARADIGM DOCUMENTATION
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This application follows specific design patterns. Read carefully before adding data.
 *
 * KEY CONCEPTS:
 * 1. DUAL-ACCESS PATTERN: Items exist in BOTH centralized collections AND day itineraries
 * 2. COLOR CODING: Activities are visually categorized by type
 * 3. MOBILE-FIRST: All designs prioritize iOS mobile experience
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// TRIP INFO - Centralized Reference Data
// ═══════════════════════════════════════════════════════════════════════════
const tripInfo = {
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
        }
        // ADD NEW TICKETS ABOVE THIS LINE
    ],

    /*
     * ═══════════════════════════════════════════════════════════════════════
     * FOOD OPTIONS PARADIGM
     * ═══════════════════════════════════════════════════════════════════════
     *
     * PURPOSE: Reference library of ALL restaurants/cafes throughout trip
     * ACCESS: Via "Food Options" button (grouped by meal type: Breakfast/Lunch/Dinner/Cafes)
     *
     * LINKING TO DAYS:
     * - Add restaurant here to centralized foodOptions array
     * - Link to specific day by creating food option activity with:
     *   isFoodOption: true
     *   foodType: 'breakfast' | 'lunch' | 'dinner' | 'cafe'
     *
     * CONTEXTUAL vs CENTRALIZED:
     * - Day-specific food cards show ONLY relevant options (e.g., near Tokyo Station after Karuizawa)
     * - Centralized view shows ALL options for entire trip
     * - This prevents overwhelming daily itinerary with irrelevant choices
     *
     * COLOR CODING: Orange gradient cards in daily view
     *
     * ICONS: 🍜 ramen | 🍣 sushi | ☕ cafe | 🍔 burgers | 🥗 healthy | 🍰 dessert
     *
     * REQUIRED FIELDS:
     * - type: 'breakfast' | 'lunch' | 'dinner' | 'cafe'
     * - name: Restaurant name
     * - cuisine: Type of food
     * - location: Descriptive location (e.g., "GranTokyo South Tower B1")
     * - address: Full address for Google Maps
     * - hours: Operating hours
     * - priceRange: Price range (e.g., "¥1,000-1,500")
     * - icon: Emoji representing cuisine type
     *
     * OPTIONAL FIELDS:
     * - area: General area (e.g., "Tokyo Station", "Ginza")
     * - distance: Walking distance from landmark
     * - phone: Phone number for reservations
     * - halal: true/false - shows green badge if true
     * - certification: Halal certification details
     * - specialty: Signature dish or highlight
     * - tips: Additional notes (e.g., "Perfect after Karuizawa")
     *
     * ACTION BUTTONS:
     * - Photos: Opens Google Images search
     * - Navigate: Google Maps directions
     * - Call: Direct phone link (if phone provided)
     *
     * EXAMPLE LINKAGE:
     * In tripData day activity:
     * {
     *   time: '18:00',
     *   title: 'Dinner Options',
     *   isFoodOption: true,
     *   foodType: 'dinner',
     *   details: { ... }
     * }
     * This will filter and show ONLY dinner options when clicked
     */
    foodOptions: [
        {
            type: 'dinner',
            name: 'Mǎzilù Lanzhou Beef Noodles',
            cuisine: 'Halal Chinese Ramen',
            location: 'GranTokyo South Tower B1, Tokyo Station',
            area: 'Tokyo Station',
            distance: '3 min walk from Yaesu South exit',
            address: '1-9-2 Marunouchi, Chiyoda-ku, Tokyo',
            phone: '+81-3-6268-0323',
            hours: 'Lunch: 11:00-16:00 | Dinner: 17:00-22:30 (Sun/Holiday until 21:30)',
            priceRange: '¥1,000-1,500',
            halal: true,
            certification: 'NAHA certified, Crescentrating AAA',
            specialty: 'Authentic Lanzhou hand-pulled beef noodles',
            tips: 'Halal certified Chinese ramen. Perfect after returning from Karuizawa. Famous for hand-pulled noodles.',
            icon: '🍜'
        },
        {
            type: 'dinner',
            name: 'Kuta Bali Cafe Harajuku',
            cuisine: 'Indonesian (Halal)',
            location: 'Le Ponte Building, near Harajuku Station',
            area: 'Harajuku',
            distance: '1 min walk from Harajuku Station',
            address: 'Le Ponte Building, Jingumae, Shibuya-ku, Tokyo',
            hours: 'Daily: 11:00-22:00',
            priceRange: '¥1,200-2,000',
            halal: true,
            certification: 'Halal certified, Prayer room (mushola) available',
            specialty: 'Nasi Campur, Ayam Sambal Matah, Ikan Gurame',
            tips: 'Opened Sept 2024. Perfect after Harajuku vintage shopping. Prayer room available for Muslim travelers.',
            icon: '🍛'
        },
        {
            type: 'dinner',
            name: 'Kebab Box J',
            cuisine: 'Turkish (Halal)',
            location: 'Harajuku area',
            area: 'Harajuku',
            address: 'Harajuku, Shibuya-ku, Tokyo',
            hours: 'Daily: 11:00-23:00',
            priceRange: '¥800-1,500',
            halal: true,
            specialty: 'Generous doner kebabs (chicken/beef/mixed) with toasted pita bread',
            tips: 'Famous for large portions and authentic Turkish flavors. Quick option near vintage shops.',
            icon: '🥙'
        },
        {
            type: 'dinner',
            name: 'Milan Nataraj',
            cuisine: 'Indian/Asian (Halal options)',
            location: 'Shibuya district',
            area: 'Shibuya',
            address: 'Shibuya, Shibuya-ku, Tokyo',
            hours: 'Daily: 11:00-22:30',
            priceRange: '¥1,000-2,000',
            halal: true,
            specialty: 'Authentic Indian vegetarian dishes, halal options available',
            tips: 'Long-established vegetarian restaurant with halal choices. Good for diverse dietary needs.',
            icon: '🍛'
        }
        // ADD NEW FOOD OPTIONS ABOVE THIS LINE
    ]
};

/*
 * ═══════════════════════════════════════════════════════════════════════════
 * TRIP DATA - Daily Itinerary
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * STRUCTURE: Array of day objects, each containing morning/afternoon/evening activities
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * USER PREFERENCE: HIT LIST STRUCTURE FOR AREA-BASED ACTIVITIES
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * When creating itineraries, group activities by AREA, not by individual time slots.
 * User wants tactical "hit lists" for each location - clean, minimal, bang-bang-bang.
 *
 * PREFERRED STRUCTURE:
 * Travel to Area → HIT LIST (Place 1, 2, 3, 4...) → Travel to Next Area
 *
 * EXAMPLE (Day 1 Evening - Vintage Shopping):
 * ✅ GOOD:
 * {
 *   time: '17:00',
 *   title: 'Harajuku Vintage Shopping Hit List',
 *   location: 'Harajuku/Omotesando Area',
 *   details: {
 *     shops: [
 *       { name: '1. Vintage Qoo', mapLink: '...', highlight: '...', hours: '...' },
 *       { name: '2. Amore Vintage', mapLink: '...', walk: '5 min from Qoo' },
 *       { name: '3. Kindal', mapLink: '...', walk: '7 min from Amore' }
 *     ]
 *   }
 * }
 *
 * ❌ AVOID:
 * Separate activity cards for each shop at different times (17:00 Qoo, 18:20 Amore, etc.)
 *
 * WHY THIS WORKS:
 * - See all stops in neighborhood at once (no mental piecing together)
 * - One-tap Google Maps navigation for each location
 * - Skip or hit shops based on time/energy in the moment
 * - Clear separation: FIXED bookings (Shibuya Sky) vs FLEXIBLE hit lists
 * - No fluff - just names, highlights, hours, walking times, navigation buttons
 *
 * HIT LIST DATA FORMAT:
 * details: {
 *   shops: [                              // Array triggers hit list rendering
 *     {
 *       name: 'Shop Name',                // Clean title with priority markers (⭐)
 *       address: 'Full address',          // For reference
 *       highlight: 'Key info',            // One-line highlights (brands, specialty)
 *       hours: 'Opening hours',           // Essential timing info
 *       walk: 'X min from previous',      // Optional - walking time from last stop
 *       mapLink: 'Location for Google'    // Used for navigation button
 *     }
 *   ],
 *   strategy: 'Optional note'             // Brief tactical tip (e.g., "Hit 1-2 priority shops")
 * }
 *
 * RENDERING:
 * When activity.details.shops exists → Renders as clean hit list with Navigate buttons
 * Otherwise → Renders as normal activity detail modal
 *
 * USER TRAVEL BRAIN:
 * "In each area, my list is like a hit list of places where I can go Store 1 bang,
 * next Google link, Store 2 bang, next Google link. It allows me to know what I should
 * be hitting if time permits, allowing me to use the logically routed flow to launch
 * Google Maps and get there (or skip one!) should I want to or time persists."
 *
 * Apply this pattern to: shopping districts, restaurant crawls, sightseeing clusters,
 * museum districts - anywhere with multiple stops in one area.
 *
 * DAY TYPES:
 * - 'travel': Flight/major transport days (shows flight info prominently)
 * - 'day-trip': Day trips outside main city
 * - 'explore': Regular exploration/activity days
 *
 * COLOR CODING FOR ACTIVITIES (auto-detected by keywords/flags):
 * - 🟦 BLUE (Transport): flights, trains, shinkansen, transfers, airport activities
 * - 🟧 ORANGE (Food): activities with isFoodOption: true
 * - 🟪 PINK/WHITE (Default): all other activities/experiences
 *
 * ACTIVITY STRUCTURE:
 * {
 *   time: '13:20',                    // 24hr format
 *   title: 'Activity Name',
 *   description: 'Brief summary',     // Keep concise - details go in details object
 *   location: 'Venue Name',           // Optional - enables "Open in Maps" button
 *   details: {                        // Drill-down information (shown in modal)
 *     key: 'value',
 *     ticketLink: 'https://...',      // Optional - adds "View Ticket" button
 *     // Add any relevant details here
 *   }
 * }
 *
 * TRANSPORT ACTIVITIES (Blue cards):
 * Automatically detected if title contains: flight, transfer, shinkansen, train, airport
 * OR if details contains: train, flight fields
 *
 * FOOD OPTION ACTIVITIES (Orange cards):
 * {
 *   isFoodOption: true,
 *   foodType: 'breakfast' | 'lunch' | 'dinner' | 'cafe',
 *   // When clicked, shows filtered food options from tripInfo.foodOptions
 * }
 *
 * KEEP IT CLEAN:
 * - Title/description: Short & scannable (user sees this in daily view)
 * - Details: Comprehensive info (user drills down to see this)
 * - Don't overwhelm the itinerary card with too much text
 */

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

/*
 * ═══════════════════════════════════════════════════════════════════════════
 * ADDING NEW DAYS - QUICK REFERENCE TEMPLATE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * COPY THIS TEMPLATE WHEN ADDING NEW DAYS:
 *
 * {
 *     id: X,                              // Sequential number
 *     type: 'explore',                    // 'travel' | 'day-trip' | 'explore'
 *     name: 'Day X',
 *     date: 'Full Date',                  // e.g., 'Friday, November 28'
 *     dayOfWeek: 'Friday',
 *     dateShort: 'Nov 28',                // Format: 'Nov DD'
 *     description: 'Brief day summary',   // Shown on day card
 *     morning: [
 *         {
 *             time: 'HH:MM',
 *             title: 'Activity Name',
 *             description: 'Brief summary',
 *             location: 'Venue',          // Optional - adds Maps button
 *             details: {
 *                 key: 'value',           // Any relevant info
 *                 ticketLink: '...',      // Optional - adds Ticket button
 *             }
 *         }
 *     ],
 *     afternoon: [ ... ],
 *     evening: [ ... ]
 * }
 *
 * REMEMBER:
 * - If transport: Use keywords (flight/train/transfer) OR add train/flight to details
 * - If food: Set isFoodOption: true, foodType: 'dinner' and link to foodOptions
 * - If ticket: Add to tripInfo.ticketsVouchers AND activity.details.ticketLink
 * ═══════════════════════════════════════════════════════════════════════════
 */

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
                description: 'Check-in for QF59 (closes 60 min before)',
                details: {
                    airport: 'Sydney International Airport',
                    terminal: 'Terminal 1 (International)',
                    checkInOpens: '24h before departure',
                    checkInCloses: '60 minutes before departure',
                    tips: 'Arrive early for international check-in and security. Check-in opens 24h before.'
                }
            },
            {
                time: '12:00',
                title: 'QF59 Flight to Tokyo',
                description: 'Airbus A330-300 (10h flight)',
                location: 'Sydney International Airport',
                details: {
                    flight: 'QF59',
                    operator: 'Qantas',
                    aircraft: 'Airbus A330-300',
                    from: 'Sydney (SYD) - Terminal 1',
                    to: 'Tokyo Haneda (HND) - Terminal 3',
                    departure: '12:00 PM (Wed)',
                    arrival: '8:00 PM (Wed)',
                    duration: '10h 00min',
                    class: 'Economy (O)',
                    status: 'Confirmed',
                    passengers: '2 adults',
                    meal: 'Hot meal / Refreshment',
                    ticketLink: 'https://www.icloud.com/iclouddrive/014TquIMBXgLcqnW2rVPpyI-w#FZL4E6__Qantas_Flight_Itinerary',
                    tips: 'In-flight entertainment available. Meal service included.'
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
                    pickup: 'Tokyo Haneda International Airport (HND) - Terminal 3',
                    dropoff: 'Hotel Keihan Tsukiji Ginza Grande',
                    dropoffAddress: '3 Chome-5-4 Tsukiji, Chuo City, Tokyo 104-0045, Japan',
                    bookingRef: 'AUD 135.08',
                    status: 'Booking confirmed',
                    pickupTime: 'Nov 26, 2025, 8:00 PM (Local time)',
                    note: 'Driver will meet you at arrivals with name sign'
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
        description: 'Shibuya Sky & Vintage Designer Shopping',
        morning: [
            {
                time: '9:00 AM',
                title: 'Hotel Breakfast Buffet',
                description: 'Leisurely breakfast at hotel',
                details: {
                    location: 'Hotel Keihan Tsukiji Ginza Grande',
                    tips: 'Take your time with breakfast. Plan to leave hotel by 10:00 AM for Ginza stroll.'
                }
            },
            {
                time: '10:00 AM',
                title: 'Ginza Luxury Flagship Hit List',
                description: 'First impressions - iconic luxury architecture walk',
                location: 'Ginza District',
                details: {
                    area: 'Ginza Chuo-dori (south to north route)',
                    duration: '1.5 hours (10:00 AM - 11:30 AM)',
                    shops: [
                        {
                            name: '1. Itoya Stationery Flagship ⭐',
                            address: '2-7-15 Ginza, Chuo-ku, Tokyo',
                            highlight: '12-floor paradise • Opens 10:00 AM • Can browse!',
                            hours: '10:00 AM - 8:00 PM',
                            mapLink: 'Ginza Itoya, 2-7-15 Ginza, Chuo-ku, Tokyo'
                        },
                        {
                            name: '2. Chanel Flagship Ginza ⭐⭐⭐',
                            address: '3-5-3 Ginza, Chuo-ku, Tokyo',
                            highlight: '10-story black glass tower • Most iconic Ginza facade',
                            hours: '12:00 PM - 7:00 PM (window shopping only)',
                            walk: '3 min from Itoya',
                            mapLink: 'Chanel Ginza, 3-5-3 Ginza, Chuo-ku, Tokyo'
                        },
                        {
                            name: '3. Wako Clock Tower (Ginza 4-chome) ⭐⭐⭐',
                            address: '4-5-11 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Iconic Art Deco clock tower • Symbol of Ginza • Photo op!',
                            hours: 'Exterior landmark',
                            walk: '4 min from Chanel',
                            mapLink: 'Wako Ginza, 4-5-11 Ginza, Chuo-ku, Tokyo'
                        },
                        {
                            name: '4. Hermès Maison Ginza ⭐⭐⭐',
                            address: '5-4-1 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Renzo Piano glass brick tower • Opens 11:00 AM • Can browse!',
                            hours: '11:00 AM - 7:00 PM',
                            walk: '2 min from Wako',
                            mapLink: 'Hermès Maison Ginza, 5-4-1 Ginza, Chuo-ku, Tokyo'
                        },
                        {
                            name: '5. Louis Vuitton Ginza Namikidori ⭐⭐',
                            address: '7-6-1 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Faceted glass facade • Opens 11:00 AM • Can browse!',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '5 min from Hermès',
                            mapLink: 'Louis Vuitton Ginza Namikidori, 7-6-1 Ginza, Chuo-ku, Tokyo'
                        },
                        {
                            name: '6. Ginza Six ⭐⭐⭐',
                            address: '6-10-1 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Luxury mall • Rooftop garden views • Opens 10:30 AM',
                            hours: '10:30 AM - 8:30 PM',
                            walk: '3 min from LV',
                            mapLink: 'Ginza Six, 6-10-1 Ginza, Chuo-ku, Tokyo'
                        }
                    ],
                    strategy: 'Hit Itoya first (opens 10am), Hermès/LV after 11am opening, end at Ginza Six rooftop',
                    note: 'Perfect luxury introduction for first-time Tokyo visitors'
                }
            },
            {
                time: '11:30 AM',
                title: 'Transit to Shibuya',
                description: 'Ginza Line direct to Shibuya (30 min)',
                details: {
                    from: 'Ginza Station (Tokyo Metro Ginza Line)',
                    to: 'Shibuya Station (Central/East Exit)',
                    route: 'Ginza Line: Ginza → Shibuya (direct, no transfers, ~20 min train)',
                    totalTime: '~30 minutes door-to-door',
                    exit: 'Use Central Gate/East Exit for direct access to Shibuya Scramble Square',
                    tips: 'Purchase IC card (Suica/Pasmo) for easy transit. Ginza Line runs frequently (every 3-5 min). Simple, direct route.'
                }
            },
            {
                time: '12:00 PM',
                title: 'Lunch at Shibuya Scramble Square',
                description: 'Quick lunch before Shibuya Sky',
                location: 'Shibuya Scramble Square',
                details: {
                    address: '2-24-12 Shibuya, Shibuya City, Tokyo',
                    options: 'B2F: Quick takeaway options (Kiyoken, Kaneko Hannosuke) | B1F: Kinokuniya luxury supermarket (bento boxes)',
                    duration: '45 minutes',
                    tips: 'Eat in the building where Shibuya Sky is located. Saves time and energy before observation deck.'
                }
            }
        ],
        afternoon: [
            {
                time: '1:00 PM',
                title: 'Arrive at Shibuya Sky Entrance',
                description: 'Head to 14F entrance (20 min before booking)',
                details: {
                    entrance: '14th Floor, Shibuya Scramble Square',
                    checkIn: '1:00-1:20 PM arrival window',
                    tips: 'Arrive early to account for elevator wait times. Must check in within 20-minute window from 1:20 PM booking time.'
                }
            },
            {
                time: '1:20 PM',
                title: 'Shibuya Sky Observation Deck',
                description: 'Admission ticket (2 adults) - 1 hour on deck',
                location: 'Shibuya Sky, Shibuya Scramble Square',
                details: {
                    venue: 'Shibuya Sky',
                    address: 'Shibuya Scramble Square, 2-24-12 Shibuya, Shibuya City, Tokyo',
                    entryTime: '1:20 PM (Nov 27, 2025)',
                    duration: '1 hour on observation deck (1:20-2:20 PM)',
                    floors: '45F-46F and rooftop (229m high)',
                    tickets: '2 x Adult (Aged 12+)',
                    status: 'Confirmed',
                    ticketLink: 'https://www.icloud.com/iclouddrive/0b6j5lNumA7uSEYJn2KAEP4Fw#20251127_SHIBUYA_SKY_Ticket',
                    tips: 'Amazing 360° views of Tokyo. First-day "wow moment" overlooking the city. Take photos of Shibuya Scramble Crossing from above.'
                }
            },
            {
                time: '2:40 PM',
                title: 'Mega Don Quijote Shibuya',
                description: '8-floor mega store - 4th floor has luxury designer section',
                location: 'Mega Don Quijote Shibuya Honten',
                details: {
                    address: '28-6 Udagawacho, Shibuya-ku, Tokyo 150-0042',
                    walkingTime: '10 min walk from Shibuya Scramble Square (via Hachiko Exit → Scramble Crossing → Bunkamura-dori Street)',
                    hours: '24 HOURS (open all day/night)',
                    floors: '8 floors total (B1 + 7 above ground)',
                    floor4: '4th Floor: LUXURY DESIGNER SECTION - Louis Vuitton, Chanel, Balenciaga, Gucci bags, shoes, accessories, watches (mix of new & second-hand)',
                    otherFloors: '5F: Daily goods | 6F: Electronics | 7F: Duty-free souvenirs',
                    duration: '1h 50min browsing',
                    vibe: 'Sensory overload - maze-like layout, jingles, packed aisles. Quintessential Tokyo shopping chaos!',
                    tips: 'THE Tokyo experience - uniquely Japanese retail. Tax-free for tourists (bring passport). Perfect "must-see" for first-time visitors!'
                }
            },
            {
                time: '4:30 PM',
                title: 'Transit to Harajuku/Omotesando',
                description: 'Scenic Cat Street walk OR quick JR Yamanote train',
                details: {
                    option1: 'RECOMMENDED: Walk Cat Street from MIYASHITA PARK (5 min from station) → 20-30 min scenic walk with vintage shop views → End near Harajuku/Omotesando',
                    option2: 'FASTER: JR Yamanote Line Shibuya (Platform 1) → Harajuku (1 stop, 3-4 min) + 5 min walk to Omotesando = ~10 min total',
                    recommendation: 'Cat Street for atmosphere and window shopping along the way!',
                    tips: 'Cat Street is a pedestrian-friendly street lined with boutiques. Great way to transition between neighborhoods.'
                }
            }
        ],
        evening: [
            {
                time: '5:00 PM',
                title: 'Harajuku/Omotesando Vintage Shopping Hit List',
                description: '4 designer vintage shops (Chanel/LV focus)',
                location: 'Harajuku/Omotesando Area',
                details: {
                    area: 'Omotesando/Harajuku (all within walking distance)',
                    duration: '3-4 hours total (hit as many as time permits)',
                    shops: [
                        {
                            name: '1. Vintage Qoo Tokyo ⭐ PRIORITY',
                            address: 'B1-2F Colonnade Jingumae, 5-2-6 Jingumae, Shibuya-ku',
                            highlight: '3 floors • 2,000 Chanel basement • LV, Dior, Hermès',
                            hours: '11:30 AM - 8:00 PM',
                            mapLink: 'Vintage Qoo Tokyo, 5-2-6 Jingumae, Shibuya-ku, Tokyo 150-0001'
                        },
                        {
                            name: '2. Amore Vintage Omotesando',
                            address: '2F 5-1-6 Jingumae, Shibuya, Tokyo',
                            highlight: 'Chanel heaven • Museum aesthetic • TikTok famous',
                            hours: '10:00 AM - 8:00 PM',
                            walk: '5 min from Qoo',
                            mapLink: 'AMORE Vintage Omotesando, 5-1-6 Jingumae, Shibuya, Tokyo'
                        },
                        {
                            name: '3. Kindal Harajuku',
                            address: '3F Omotesando Building, 4-29-3 Jingumae, Shibuya',
                            highlight: '3 floors • Chanel, Loewe, Burberry, Prada • Above Lawson',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '7 min from Amore',
                            mapLink: 'Kindal Harajuku, 4-29-3 Jingumae, Shibuya, Tokyo 150-0001'
                        },
                        {
                            name: '4. Ragtag Harajuku (Cat Street)',
                            address: '1F-2F Hulic Jingu-mae, 5-17-9 Jingumae, Shibuya-ku',
                            highlight: 'Bargain prices • Céline, Comme des Garçons',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '5 min from Kindal',
                            mapLink: 'Ragtag Harajuku, 5-17-9 Jingumae, Shibuya-ku, Tokyo'
                        }
                    ],
                    strategy: 'Hit 1-2 priority shops (Qoo + Amore), add others if time permits',
                    taxFree: 'Bring passport for tax-free purchases at all shops'
                }
            },
            {
                time: '9:00 PM',
                title: 'Dinner Options',
                description: 'Harajuku/Omotesando dining',
                isFoodOption: true,
                foodType: 'dinner',
                foodAreas: ['Harajuku', 'Shibuya'],
                details: {
                    area: 'Harajuku/Omotesando/Shibuya',
                    recommended: 'Kuta Bali Cafe Harajuku (halal Indonesian, 1 min from Harajuku Station, prayer room available)',
                    alternatives: 'Kebab Box J (Turkish halal) | Milan Nataraj (Indian with halal options)',
                    walkingTime: '10-15 min from vintage shop area',
                    note: 'Click to see filtered dinner options for this area'
                }
            }
        ]
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
                description: '5-6 hours shopping & lunch',
                location: 'Karuizawa Prince Shopping Plaza',
                details: {
                    location: 'South Exit of Karuizawa Station (2-3 min walk)',
                    website: 'https://www.karuizawa-psp.jp/en',
                    hours: 'Shop until ~15:30, head back to station by 16:00',
                    highlights: '200+ outlet stores, food court, restaurants',
                    optional: 'Coffee or stroll around Karuizawa town if time permits',
                    tips: 'Tax-free shopping with passport. Coin lockers available for bags. Return train departs 16:23.'
                }
            }
        ],
        evening: [
            {
                time: '16:23',
                title: 'Return Shinkansen to Tokyo',
                description: 'Asama 624 - Green Car (1h 5m)',
                location: 'Karuizawa Station',
                details: {
                    train: 'Asama 624',
                    departure: 'Karuizawa Station 16:23',
                    arrival: 'Tokyo Station 17:28',
                    duration: '1h 5m',
                    car: 'Car 11 (Green)',
                    seats: '7-C, 7-D',
                    passengers: '2 adults',
                    price: '¥16,580 (¥8,290 per person)',
                    ticketType: 'Reserved - Pick up at ticket counter or vending machine',
                    ticketLink: 'https://www.icloud.com/iclouddrive/007ykC75nU-ThDdIzm_XZN2fA#20251128_Asama624_Karuizawa-Tokyo',
                    tips: 'Seats 7-C and 7-D in Green Car 11. Plenty of space for shopping bags. Can collect both train tickets at Tokyo Station in the morning.'
                }
            },
            {
                time: '18:00',
                title: 'Dinner Options',
                description: 'Tokyo Station or Ginza area',
                isFoodOption: true,
                foodType: 'dinner',
                foodAreas: ['Tokyo Station'],
                details: {
                    option1: 'Mǎzilù Lanzhou Beef Noodles (Tokyo Station, 3 min walk)',
                    option2: 'Explore Ginza dining (near hotel)',
                    tips: 'Back at Tokyo Station by 17:28. Can eat near station or head to Ginza (~15 min).',
                    note: 'Click to see filtered dinner options for this area'
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
        description: 'Tsukiji Market & Ginza Pedestrian Paradise',
        morning: [
            {
                time: '8:00 AM',
                title: 'Tsukiji Outer Market',
                description: 'Traditional fish market & street food breakfast',
                location: 'Tsukiji Outer Market',
                details: {
                    address: '3-15-1 Tsukiji, Chuo City, Tokyo 104-8435',
                    walkingTime: '5-10 min walk from hotel',
                    duration: '2.5 hours (8:00-10:30 AM)',
                    highlights: 'Fresh seafood stalls, street food breakfast (grilled scallops, tamagoyaki), specialty shops (knives, tea, dried goods)',
                    hours: '5:00 AM - 2:00 PM daily',
                    vibe: 'Authentic market energy, local food culture',
                    tips: 'Arrive after professional buyers finish (9am). Eat breakfast here - grilled seafood, tamago sandwiches. Bring cash.',
                    note: 'Inner wholesale market moved to Toyosu, but outer market still vibrant with 400+ shops'
                }
            },
            {
                time: '10:30 AM',
                title: 'Walk to Ginza',
                description: '15 min walk from traditional market to luxury district',
                details: {
                    from: 'Tsukiji Outer Market',
                    to: 'Ginza 8-chome (southern entrance)',
                    distance: '1 mile / 1.6 km',
                    duration: '15 minutes',
                    route: 'Pleasant transition showing old Tokyo → modern luxury',
                    tips: 'Walk northwest through Tsukiji toward Ginza Chuo-dori'
                }
            },
            {
                time: '10:45 AM',
                title: 'Pre-Hokoten Ginza Browsing',
                description: 'Early shopping while streets still open',
                location: 'Ginza District',
                details: {
                    duration: '1 hour 15 min (until noon)',
                    options: 'Ginza Six (opens 10:30 AM), Mitsukoshi, luxury boutiques, cafes',
                    tips: 'Streets still have car traffic, but stores are open. Grab coffee and browse before the pedestrian paradise begins at noon.'
                }
            },
            {
                time: '12:00 PM',
                title: 'Ginza Hokoten (Pedestrian Paradise)',
                description: 'Car-free luxury boulevard experience',
                location: 'Ginza Chuo-dori',
                details: {
                    hours: '12:00 PM - 5:00 PM (Oct-March Saturdays/Sundays)',
                    section: 'Ginza 1-chome to 8-chome (1,100 meters car-free)',
                    duration: '1 hour experience recommended',
                    highlights: 'Walk down middle of Chuo-dori, benches & parasols set up, 300,000+ visitors, unique Tokyo tradition since 1970',
                    atmosphere: 'Relaxed luxury shopping without traffic noise',
                    photo: 'Iconic opportunity to photograph grand boulevard without cars',
                    tips: 'This ONLY happens Sat/Sun/Holidays. Streets completely pedestrian-only. Perfect for leisurely strolling the luxury district.',
                    note: 'Bicycles must be walked, not ridden. No street performances or vendors - pure pedestrian experience.'
                }
            }
        ],
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
                    dropoff: 'Tokyo Haneda International Airport (HND) - Terminal 3',
                    bookingRef: 'AUD 112.12',
                    status: 'Booking confirmed',
                    pickupTime: 'Dec 3, 2025, 4:30 AM (Local time)',
                    note: 'Very early departure - driver will meet you at hotel lobby'
                }
            },
            {
                time: '06:55',
                title: 'QF26 Flight to Sydney',
                description: 'Airbus A330-300 (9h 55min flight)',
                location: 'Tokyo Haneda International Airport',
                details: {
                    flight: 'QF26',
                    operator: 'Qantas',
                    aircraft: 'Airbus A330-300',
                    from: 'Tokyo Haneda (HND) - Terminal 3',
                    to: 'Sydney (SYD) - Terminal 1',
                    departure: '6:55 AM (Wed)',
                    arrival: '6:50 PM (Wed)',
                    duration: '9h 55min',
                    class: 'Economy (O)',
                    status: 'Confirmed',
                    passengers: '2 adults',
                    meal: 'Hot meal / Refreshment',
                    checkInOpens: '24h before departure',
                    checkInCloses: '60 minutes before departure',
                    ticketLink: 'https://www.icloud.com/iclouddrive/014TquIMBXgLcqnW2rVPpyI-w#FZL4E6__Qantas_Flight_Itinerary',
                    tips: 'Check-in at Terminal 3. In-flight entertainment and meal service included.'
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
        if (section.activities.length > 0) {
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

    const activity = day[section][activityIndex];
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
