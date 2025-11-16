// ═══════════════════════════════════════════════════════════════════════
// DAY 7 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
        id: 7,
        type: 'explore',
        name: 'Day 6',
        date: 'Tuesday, December 2',
        dayOfWeek: 'Tuesday',
        dateShort: 'Dec 2',
        description: 'Tokyo Essentials & Souvenirs',
        morning: [
            {
                time: '9:00 AM',
                title: 'Slow Morning at Hotel & Nearby Breakfast',
                description: 'Relaxed final morning - breakfast, pack extras, prepare for shopping mission',
                location: 'Hotel area (Ginza/Tsukiji)',
                details: {
                    duration: '2 hours (9:00-11:00 AM)',
                    vibe: 'Unhurried final morning before your last day of shopping and early flight tomorrow',
                    strategy: 'Sleep in a bit, enjoy a leisurely breakfast near the hotel, do any final packing prep, organize shopping lists for Don Quijote',
                    breakfastOptions: [
                        {
                            name: 'Hotel Breakfast (if included)',
                            highlight: 'Convenient, no travel required'
                        },
                        {
                            name: 'Nearby Convenience Store (7-Eleven, FamilyMart)',
                            highlight: 'Quick onigiri, coffee, pastries - classic Tokyo breakfast',
                            walk: 'Multiple locations within 2-5 min of hotel'
                        },
                        {
                            name: 'Ginza Cafes (if you prefer)',
                            highlight: 'Various cafes in Ginza open by 9-10 AM',
                            walk: '10-15 min walk to Ginza district'
                        }
                    ],
                    note: '📝 TODAY\'S MISSION: Department stores (11 AM) → Shibuya → 3 HOURS at Don Quijote for souvenirs! Use this morning to mentally prepare your shopping list.',
                    tips: 'Department stores don\'t open until 11 AM anyway, so there\'s no rush. Relax and recharge before your souvenir shopping marathon.',
                    reminder: '⚠️ Tomorrow is departure day (4:30 AM pickup) - make sure you start organizing luggage today if needed'
                }
            }
        ],
        afternoon: [
            {
                time: '11:00 AM',
                title: 'Ginza Department Stores Hit List',
                description: 'Food halls, rooftops & lifestyle goods (when stores open)',
                location: 'Ginza District',
                details: {
                    area: 'Walk from hotel - you\'re already in Ginza!',
                    duration: '2 hours (11:00 AM - 1:00 PM)',
                    focus: 'Depachika food halls • Rooftop experiences • GRAB LUNCH HERE (bento boxes, gourmet items)',
                    shops: [
                        {
                            name: '1. Mitsukoshi Ginza ⭐ MUST-VISIT',
                            address: '4-6-16 Ginza, Chuo-ku, Tokyo',
                            highlight: 'LEGENDARY DEPACHIKA (basement food hall) • Japanese sweets • Gourmet souvenirs • GRAB LUNCH BENTOS HERE',
                            hours: '10:00 AM - 8:00 PM',
                            floors: 'B2-B1: Food hall paradise - buy lunch here! | Upper floors: Homeware, beauty',
                            walk: '10 min walk from hotel',
                            mapLink: 'Mitsukoshi Ginza, 4-6-16 Ginza, Chuo-ku, Tokyo',
                            tips: 'THE depachika experience! Buy high-end bento boxes/sandwiches as backup lunch for Shibuya.'
                        },
                        {
                            name: '2. Ginza Six ⭐ PRIORITY',
                            address: '6-10-1 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Rooftop garden (6F) with FREE city views • Curated lifestyle shops',
                            hours: '10:30 AM - 8:30 PM',
                            floors: 'B2-B1: Food hall | 6F: Rooftop terrace',
                            walk: '2 min from Mitsukoshi',
                            mapLink: 'Ginza Six, 6-10-1 Ginza, Chuo-ku, Tokyo',
                            tips: 'Hit the rooftop for views before leaving for Shibuya'
                        },
                        {
                            name: '3. Matsuya Ginza (if time permits)',
                            address: '3-6-1 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Traditional department store • Practical Japanese goods',
                            hours: '10:00 AM - 8:00 PM',
                            walk: '4 min from Ginza Six',
                            mapLink: 'Matsuya Ginza, 3-6-1 Ginza, Chuo-ku, Tokyo'
                        }
                    ],
                    strategy: 'MUST: Mitsukoshi depachika (buy lunch!) + Ginza Six rooftop. Protect your Shibuya time!',
                    lunchStrategy: '🚨 IMPORTANT: Buy bento/gourmet items at Mitsukoshi as backup lunch - Happy Pancake wait times can be 60-120 min!'
                }
            },
            {
                time: '1:00 PM',
                title: 'Transit to Shibuya',
                description: 'Ginza Line direct to Shibuya (25 min)',
                details: {
                    from: 'Ginza Station (Tokyo Metro Ginza Line)',
                    to: 'Shibuya Station',
                    route: 'Ginza Line: Ginza → Shibuya (direct, 9 stops, ~20 min)',
                    totalTime: '~25 minutes door-to-door',
                    tips: 'Simple direct line. One direction west - no backtracking!'
                }
            },
            {
                time: '1:30 PM',
                title: 'Happy Pancake Shibuya (FLEXIBLE)',
                description: 'Check wait time - if too long, skip and eat your depachika lunch!',
                location: 'Happy Pancake Shibuya',
                details: {
                    address: '1F Shibuya Parco, 15-1 Udagawacho, Shibuya-ku, Tokyo',
                    access: 'Inside Shibuya Parco (1F), 7 min walk from Shibuya Station',
                    hours: '10:00 AM - 9:00 PM',
                    waitTimeReality: '🚨 WAIT TIMES: Often 60-120 minutes even on weekdays',
                    strategy: 'Check wait time when you arrive. If 30 min or less: go for it! If 60-120 min: BAIL and eat your Mitsukoshi lunch instead.',
                    specialty: 'Soufflé pancakes - fluffy, jiggly, iconic experience',
                    priceRange: '¥1,000-1,500 per person',
                    vibe: 'Trendy cafe - but NOT worth sacrificing Don Quijote time!',
                    mapLink: 'Happy Pancake Shibuya Parco, 15-1 Udagawacho, Shibuya-ku, Tokyo',
                    protectDonki: '⚠️ PROTECT YOUR DONKI TIME - Don\'t let pancake wait ruin your souvenir mission!'
                }
            }
        ],
        evening: [
            {
                time: '3:00 PM',
                title: 'MEGA DON QUIJOTE SHIBUYA - 3 HOURS!',
                description: '8-floor souvenir paradise - YOUR MAIN MISSION!',
                location: 'Mega Don Quijote Shibuya Honten',
                details: {
                    address: '28-6 Udagawacho, Shibuya-ku, Tokyo 150-0042',
                    walkingTime: '10 min walk from Shibuya Scramble Square (via Hachiko Exit → Scramble Crossing → Bunkamura-dori Street)',
                    hours: '24 HOURS (open all day/night)',
                    floors: '8 floors total (B1 + 7 above ground)',
                    duration: '3 FULL HOURS (3:00-6:00 PM) - protected time!',
                    souvenirFloors: 'B1-3F: Snacks, beauty, character goods, quirky items | 4F: Luxury designer section | 7F: Duty-free souvenirs',
                    vibe: 'Sensory overload - maze-like layout, jingles, packed aisles. Quintessential Tokyo shopping chaos!',
                    tips: 'THE ultimate souvenir stop! Tax-free for tourists (bring passport). Take your time - you have 3 full hours to explore all 8 floors.',
                    shoppingMission: 'Japanese snacks (KitKat flavors, Pocky, mochi) • Beauty products (face masks, skincare) • Character goods (Sanrio, Pokémon) • Quirky Japanese items • Souvenirs for everyone!',
                    mapLink: 'Mega Don Quijote Shibuya Honten, 28-6 Udagawacho, Shibuya-ku, Tokyo 150-0042',
                    priority: '🎯 THIS IS YOUR PRIORITY - Don\'t let anything steal this time!'
                }
            },
            {
                time: '6:00 PM',
                title: 'Transit back to Ginza Hotel',
                description: 'Return to hotel to pack for tomorrow\'s early flight',
                details: {
                    from: 'Shibuya Station',
                    to: 'Ginza Station (walk to hotel)',
                    route: 'Ginza Line: Shibuya → Ginza (direct, 9 stops, ~20 min)',
                    totalTime: '~30 minutes including walk to hotel',
                    arrival: 'Back at hotel by 6:30 PM',
                    tips: 'Simple direct line back. Hotel is 5-10 min walk from Ginza Station.'
                }
            },
            {
                time: '7:00 PM',
                title: 'Dinner & Pack for Tomorrow',
                description: 'Relaxed dinner near hotel, then pack (4:30 AM pickup tomorrow!)',
                details: {
                    area: 'Ginza/Tsukiji area near hotel',
                    options: 'Quick local restaurant near hotel OR grab something from convenience store',
                    vibe: 'Last night - keep it very simple and relaxed',
                    packingTime: 'Leave time to pack tonight - 4:30 AM airport pickup tomorrow morning!',
                    tips: 'Don\'t stay out late - you have an early morning flight. Get rest!'
                }
            }
        ]
    };
