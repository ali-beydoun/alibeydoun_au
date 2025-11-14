// ═══════════════════════════════════════════════════════════════════════
// DAY 8 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
        id: 8,
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
    };
