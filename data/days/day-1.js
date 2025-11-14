// ═══════════════════════════════════════════════════════════════════════
// DAY 1 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
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
    };
