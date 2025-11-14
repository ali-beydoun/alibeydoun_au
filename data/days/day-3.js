// ═══════════════════════════════════════════════════════════════════════
// DAY 3 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
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
    };
