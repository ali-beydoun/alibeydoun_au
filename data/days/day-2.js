// ═══════════════════════════════════════════════════════════════════════
// DAY 2 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
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
                        },
                        {
                            name: '7. KOMEHYO Ginza (OPTIONAL)',
                            address: '7-8-13 Ginza, Chuo-ku, Tokyo',
                            highlight: 'Pre-owned luxury department store • Multi-floor authenticated bags, watches, jewelry',
                            hours: '10:30 AM - 7:30 PM',
                            walk: '2 min from Ginza Six',
                            mapLink: 'KOMEHYO Ginza, 7-8-13 Ginza, Chuo-ku, Tokyo',
                            note: 'Alternative to architecture walk - dive straight into authenticated luxury bags'
                        }
                    ],
                    strategy: 'Hit Itoya first (opens 10am), Hermès/LV after 11am opening, end at Ginza Six rooftop OR explore KOMEHYO for pre-owned luxury',
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
                title: 'Shibuya Vintage Shopping Hit List',
                description: '2 designer vintage shops (Chanel/LV focus)',
                location: 'Shibuya/Cat Street Area',
                details: {
                    area: 'Shibuya/Cat Street (within walking distance)',
                    duration: '1h 50min total (hit as many as time permits)',
                    shops: [
                        {
                            name: '1. 2nd Street Shibuya (Cat Street)',
                            address: '31-2 Udagawacho, Shibuya-ku, Tokyo',
                            highlight: 'Multi-level chain • Extensive designer sections • Giant well-organized thrift store vibe',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '10 min from Shibuya Scramble Square',
                            mapLink: '2nd Street Shibuya, 31-2 Udagawacho, Shibuya-ku, Tokyo'
                        },
                        {
                            name: '2. Ragtag Shibuya',
                            address: '23-3 Udagawacho, Shibuya-ku, Tokyo',
                            highlight: 'Highly curated designer vintage • Sister location to Harajuku store',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '5 min from 2nd Street',
                            mapLink: 'Ragtag Shibuya, 23-3 Udagawacho, Shibuya-ku, Tokyo'
                        }
                    ],
                    strategy: 'Browse both shops to maximize your finds before heading to Harajuku',
                    taxFree: 'Bring passport for tax-free purchases at all shops'
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
                description: '8 designer vintage shops (Chanel/LV focus)',
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
                            name: '2. Amore Vintage Omotesando ⭐ PRIORITY',
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
                        },
                        {
                            name: '5. 2nd Street Harajuku (Cat Street)',
                            address: '3-26-14 Jingumae, Shibuya-ku, Tokyo',
                            highlight: 'Multi-level chain • Giant thrift store feel • Extensive designer + streetwear',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '4 min from Ragtag',
                            mapLink: '2nd Street Harajuku, 3-26-14 Jingumae, Shibuya-ku, Tokyo'
                        },
                        {
                            name: '6. KOMEHYO Shinjuku (OPTIONAL)',
                            address: '3-1-26 Shinjuku, Shinjuku-ku, Tokyo',
                            highlight: 'Flagship multi-floor luxury • Massive authenticated bag/watch/jewelry selection',
                            hours: '10:30 AM - 7:30 PM',
                            walk: '15 min train from Harajuku (JR Yamanote)',
                            mapLink: 'KOMEHYO Shinjuku, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo',
                            note: 'Worth detour if you want comprehensive high-end selection'
                        },
                        {
                            name: '7. Brand Collect Harajuku',
                            address: '1-16-4 Jingumae, Shibuya-ku, Tokyo',
                            highlight: 'Takeshita Street location • Japanese & international designer brands',
                            hours: '11:00 AM - 8:00 PM',
                            walk: '8 min from Cat Street shops',
                            mapLink: 'Brand Collect Harajuku, 1-16-4 Jingumae, Shibuya-ku, Tokyo'
                        },
                        {
                            name: '8. Hedy Daikanyama (OPTIONAL DETOUR)',
                            address: '20-23 Sarugakucho, Shibuya-ku, Tokyo',
                            highlight: 'Beautifully curated boutique • Rare vintage bags & accessories • Quieter alternative',
                            hours: '12:00 PM - 8:00 PM',
                            walk: '10-15 min from Shibuya Station',
                            mapLink: 'Hedy Daikanyama, 20-23 Sarugakucho, Shibuya-ku, Tokyo',
                            note: 'Chic Daikanyama neighborhood - great if Amore/Qoo too crowded'
                        }
                    ],
                    strategy: 'Hit 1-2 priority shops (Qoo + Amore), explore others as time/energy permits. Hedy & KOMEHYO are optional detours for specific needs.',
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
    };
