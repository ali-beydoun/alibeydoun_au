// ═══════════════════════════════════════════════════════════════════════
// DAY 6 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
        id: 6,
        type: 'day-trip',
        name: 'Day 5',
        date: 'Monday, December 1',
        dayOfWeek: 'Monday',
        dateShort: 'Dec 1',
        description: 'Kamakura Coastal Heritage → Yokohama Waterfront Evening',
        morning: [
            {
                time: '8:30 AM',
                title: 'Transit to Shimbashi Station',
                description: 'Gateway to the Yokosuka Line for Kamakura',
                details: {
                    from: 'Hotel Keihan Tsukiji Ginza Grande',
                    to: 'JR Shimbashi Station',
                    options: 'Walk (15 min) OR Tokyo Metro Hibiya Line from Tsukiji Station (1 stop, 2 min)',
                    recommendation: 'Walk if weather is pleasant - straight route southwest through business district',
                    walkRoute: 'Exit hotel → Head west on Harumi-dori → Turn south toward Shimbashi',
                    subwayRoute: 'Tsukiji Station (2 min walk from hotel) → Hibiya Line → Shimbashi (1 stop)',
                    arrival: 'Arrive by 8:50 AM to allow buffer time for ticket purchase',
                    mapLink: 'https://www.google.com/maps/dir/Hotel+Keihan+Tsukiji+Ginza+Grande,+3+Chome-5-4+Tsukiji,+Chuo+City,+Tokyo/Shimbashi+Station,+2+Chome-20+Shinbashi,+Minato+City,+Tokyo',
                    tips: 'Shimbashi Station is large. Follow signs for "JR Lines" not "Toei Asakusa Line." You need the JR section.'
                }
            },
            {
                time: '9:00 AM',
                title: 'Green Car Journey to Kamakura',
                description: 'Premium first-class rail on the Yokosuka Line (60 min)',
                location: 'Shimbashi → Kamakura',
                details: {
                    line: 'JR Yokosuka Line',
                    trainType: 'Local (all-stops service to Kamakura)',
                    rollingStock: 'E217 or E235 series - Double-decker Green Cars in Cars 4 & 5',
                    platform: 'Yokosuka Line platforms at Shimbashi (follow yellow signs)',
                    departure: '~9:00-9:10 AM (trains every 10-15 minutes)',
                    arrival: 'Kamakura Station ~10:00-10:10 AM',
                    duration: '60 minutes',
                    baseFare: '¥950 (IC card or ticket)',
                    greenCarSurcharge: '¥1,000 (Monday weekday rate)',
                    totalCost: '¥1,950 per person',

                    greenCarPurchase: {
                        title: '🎫 HOW TO PURCHASE GREEN CAR TICKETS',
                        location: 'Shimbashi Station - Yokosuka Line platform area',
                        method1: 'Green Ticket Machines (Recommended for speed)',
                        method1Steps: 'Look for vertical machines with green four-leaf clover logo → Insert Suica/PASMO IC card → Select destination "Kamakura" → ¥1,000 surcharge deducted from card → Card is now loaded with Green ticket data',
                        method2: 'JR East Midori no Madoguchi (Ticket Office)',
                        method2Steps: 'Find the green "Midori no Madoguchi" ticket office window → Tell staff "Green Car to Kamakura" (show phone if needed) → Pay ¥1,950 total → Receive printed ticket + IC card fare adjustment',
                        critical: '⚠️ MUST purchase BEFORE boarding. Buying onboard from attendant = ¥260 penalty fare.',
                        authentication: 'After boarding double-decker Green Car, find seat with RED ceiling light (vacant) → Touch IC card to ceiling reader for 2 seconds → Light turns GREEN (confirmed)'
                    },

                    experience: 'Reclining seats, 970mm legroom, 2+2 configuration. Upper deck offers elevated views. Watch Tokyo transform from urban sprawl (Shinagawa, Yokohama) to coastal greenery (Kita-Kamakura).',
                    scenicHighlight: 'After Ofuna station (~50 min into journey), train cuts through wooded hillsides and valleys - first glimpse of Kamakura\'s natural setting',
                    tips: 'Sit on the RIGHT side of the train (facing forward) for better views of hills approaching Kamakura',
                    mapLink: 'https://www.google.com/maps/dir/Shimbashi+Station,+Minato+City,+Tokyo/Kamakura+Station,+Kamakura,+Kanagawa'
                }
            },
            {
                time: '10:00 AM',
                title: 'Arrival & Pre-Tour Buffer',
                description: 'Orient, restroom break, find meeting point',
                location: 'Kamakura Station',
                details: {
                    arrival: 'Kamakura Station East Exit',
                    duration: '1 hour buffer (10:00-11:00 AM)',
                    activities: 'Locate Klook tour meeting point (likely near East Exit or in front of station) • Restroom • Coffee/snack if desired • Explore station area',
                    facilities: 'Convenience stores (Family Mart, New Days) inside station • Coin lockers if needed • Tourist information center',
                    weather: 'Check conditions - December coastal wind can feel cold. Layer up if needed.',
                    meetingPoint: 'Check Klook confirmation email for exact meeting location and guide contact info',
                    tips: 'Kamakura Station has two exits - East (main side, toward temples) and West (toward residential area). Your tour departs from East side.',
                    mapLink: 'https://www.google.com/maps/place/Kamakura+Station'
                }
            }
        ],
        afternoon: [
            {
                time: '11:00 AM',
                title: 'Klook Kamakura Half-Day Walking Tour',
                description: 'Guided 4-hour tour: Great Buddha, High School, Shrines, Shopping',
                location: 'Kamakura (multiple stops)',
                details: {
                    tourName: 'Kamakura Half Day Private Walking Tour',
                    duration: '4 hours (11:00 AM - 3:00 PM)',
                    tourOperator: 'Klook',
                    language: 'English-speaking guide',
                    groupSize: 'Small group or private (depends on booking)',

                    itinerary: {
                        stop1: '1. Kotoku-in Temple (Great Buddha) - 11.3m bronze Amida Nyorai statue, cast 1252, open-air National Treasure',
                        stop2: '2. Kamakura High School Mae Station - Iconic Enoden railway crossing, coastal views, Slam Dunk anime pilgrimage site',
                        stop3: '3. Komachi-dori Street - 170m traditional shopping street with local snacks, crafts, souvenirs',
                        stop4: '4. Tsurugaoka Hachimangu Shrine - Main shrine of Kamakura, dedicated to Hachiman (patron of samurai)',
                        stop5: '5. Genjiyama Park - Scenic hillside park with nature trails'
                    },

                    included: 'English-speaking guide • Walking tour of all listed sites • Cultural context and historical stories • Navigation between locations',
                    notIncluded: 'Lunch (guide will recommend spots) • Entrance fees (most sites are free or ~¥300-400) • Personal expenses',

                    whatToBring: 'Comfortable walking shoes • Camera • Cash (yen) for entrance fees and snacks • Water bottle • IC card for any transit',

                    bookingLink: 'https://www.klook.com/activity/91283-kotoku-temple-kamakura-high-school-mae-station-komachi-street-join-half-day-walking-tour/',
                    cancellation: '24-hour cancellation policy for full refund',

                    mondayNote: '✅ All tour locations are OPEN on Mondays. Museums are closed, but temples, shrines, and streets are accessible.',
                    lunchNote: 'Tour likely includes lunch break on Komachi-dori. Budget ¥1,500-2,500 for shirasu-don (whitebait bowl) or local specialties.',

                    tips: 'Follow guide closely - Kamakura streets can be maze-like. Ask questions about history - guides are knowledgeable. Take photos at Kamakura High School crossing during Enoden train passage for iconic shot.',
                    mapLink: 'https://www.google.com/maps/place/Kamakura,+Kanagawa'
                }
            },
            {
                time: '3:00 PM',
                title: 'Return Journey to Yokohama',
                description: 'Efficient routing to waterfront Yokohama (on the way back)',
                location: 'Kamakura → Yokohama → Motomachi-Chukagai',
                details: {
                    from: 'Kamakura Station (tour ends here)',
                    to: 'Motomachi-Chukagai Station (Yokohama Chinatown area)',

                    why: '🎯 GEOGRAPHIC EFFICIENCY: Yokohama is BETWEEN Kamakura and Tokyo. Stopping here eliminates 10km of backtracking vs. going to Shinjuku. Natural route progression.',

                    step1: {
                        title: 'Step 1: Kamakura → Yokohama',
                        line: 'JR Yokosuka Line',
                        direction: 'Toward Yokohama/Tokyo (NOT Shonan-Shinjuku Line)',
                        frequency: 'Every 10-15 minutes',
                        duration: '20-25 minutes',
                        baseFare: '¥340 (IC card)',
                        greenCar: 'Optional - ¥1,000 surcharge (recommend SKIP for this short 25-min leg)',
                        platform: 'Board at Kamakura Station platforms - look for "Yokohama" or "Tokyo" destination',
                        arrival: 'Yokohama Station ~3:25 PM'
                    },

                    step2: {
                        title: 'Step 2: Transfer at Yokohama Station',
                        walkTime: '5-7 minutes within station',
                        navigation: 'Exit JR gates → Follow blue/purple "Minatomirai Line" signs',
                        destination: 'Minatomirai Line platform (private railway)',
                        tips: 'Look for Minatomirai Line logo (blue circle with ship). Well-signposted.'
                    },

                    step3: {
                        title: 'Step 3: Yokohama → Motomachi-Chukagai',
                        line: 'Minatomirai Line (private railway)',
                        stops: '4 stops: Shin-Takashima → Minatomirai → Bashamichi → Nihon-Odori → Motomachi-Chukagai',
                        duration: '8 minutes',
                        cost: '¥220 (IC card)',
                        exit: 'Exit via "Chukagai/Chinatown Exit" - leads directly toward Chinatown (3 min walk)',
                        arrival: 'Motomachi-Chukagai Station ~3:40 PM'
                    },

                    totalJourney: {
                        time: '35-40 minutes (including transfer)',
                        costWithoutGreen: '¥560 total (¥340 + ¥220)',
                        costWithGreen: '¥1,560 (if you choose Green Car for Step 1)',
                        recommendation: 'SKIP Green Car on this leg - only 25 min ride, save ¥2,000 for couple'
                    },

                    arrival: {
                        station: 'Motomachi-Chukagai Station',
                        time: '~3:40-3:50 PM',
                        walkToFirstAttraction: '5 min walk to Yamashita Park / 8 min to Red Brick Warehouse',
                        positioning: 'Perfect arrival for 4:28 PM sunset at Osanbashi Pier'
                    },

                    comparisonToShinjuku: {
                        timeSaved: '10-20 minutes vs. Kamakura → Shinjuku route',
                        backtrackingSaved: '10 km (Yokohama is on the way home, Shinjuku requires detour)',
                        moneySaved: 'Up to ¥2,000 per couple (skip Green Car on short leg)',
                        experience: 'Waterfront sunset + Chinatown vs. neon urban (unique to Yokohama)'
                    },

                    mapLink: 'https://www.google.com/maps/dir/Kamakura+Station,+Kamakura,+Kanagawa/Motomachi-Chukagai+Station,+Yokohama'
                }
            }
        ],
        evening: [
            {
                time: '3:50 PM',
                title: 'Arrival at Yokohama - Waterfront Walk',
                description: 'Station to harbor via Yamashita Park',
                location: 'Motomachi-Chukagai Station → Yamashita Park',
                details: {
                    arrival: 'Motomachi-Chukagai Station ~3:50 PM',
                    exitStrategy: 'Use "Yamashita Park Exit" or "Chukagai/Chinatown Exit" - both lead toward waterfront',
                    navigation: 'Exit station → Walk south toward harbor (5 min) → Reach Yamashita Park waterfront promenade',
                    walkTime: '5 minutes from station to Yamashita Park',

                    yamashitaPark: {
                        description: 'Japan\'s first seaside park (opened 1930)',
                        size: '750-meter waterfront promenade',
                        views: 'Yokohama Bay, Bay Bridge, Marine Tower',
                        activity: 'Brief stroll through park en route to sunset viewing spot'
                    },

                    destination: 'Continue east along waterfront promenade to Osanbashi Pier (5 min walk from park)',
                    totalWalk: '10 minutes: Station → Yamashita Park → Osanbashi Pier',
                    arrivalAtPier: '~4:00 PM (perfect timing for 4:28 PM sunset)',

                    tips: 'Follow waterfront boardwalk - well-paved, scenic, impossible to get lost. Osanbashi Pier visible from park.',
                    mapLink: 'https://www.google.com/maps/dir/Motomachi-Chukagai+Station,+Yokohama/Yamashita+Park,+Yokohama/Osanbashi+Yokohama+International+Passenger+Terminal'
                }
            },
            {
                time: '4:00 PM',
                title: 'Osanbashi Pier - Harbor Sunset Viewing',
                description: 'Rooftop observation deck for 4:28 PM sunset',
                location: 'Osanbashi Yokohama International Passenger Terminal',
                details: {
                    area: 'Yokohama Port waterfront - iconic sunset viewpoint',
                    address: '1-4 Kaigan-dori, Naka-ku, Yokohama, Kanagawa 231-0002',
                    fullName: 'Osanbashi Yokohama International Passenger Terminal',
                    walkTime: '5 min from Yamashita Park along waterfront promenade',

                    theAttraction: 'Rooftop observation deck with 360° harbor panorama. Described as "one of the nicest sunset spots in Japan." Unobstructed views of Tokyo Bay, Yokohama Bay Bridge, and Minato Mirai skyline.',

                    sunsetTime: '🌅 SUNSET AT 4:28 PM - This is THE timing target for December 1!',
                    blueHour: '4:30-5:00 PM - "Blue hour" as city lights turn on with twilight sky',
                    duration: '45 minutes (4:00-4:45 PM) - sunset viewing + photos',

                    rooftopDeck: {
                        access: 'Gently sloping, wheelchair accessible',
                        features: 'Grass areas, benches, FREE public access 24/7',
                        views: 'West-facing for sunset, Yokohama Bay Bridge, Minato Mirai towers, cruise ships, full harbor panorama'
                    },

                    viewingStrategy: '🎯 CRITICAL TIMING: Arrive by 4:00-4:15 PM → Position on rooftop facing west → 4:28 PM sunset "money shot" → Stay for blue hour as lights illuminate (4:30-5:00 PM)',

                    photoSpots: 'Sunset over bay, Bay Bridge silhouette, Minato Mirai buildings, cruise ships at dock, twilight harbor',

                    experience: 'Peaceful, romantic, quintessential Yokohama waterfront moment. December = clear skies likely. Bring coat (harbor wind).',

                    hours: 'Open 24/7',
                    cost: 'FREE admission',

                    tips: 'Arrive 15-30 min before sunset. December coastal wind can be cold - layer up. Best photography during 4:15-4:45 PM window. After sunset, walk west along waterfront to Red Brick Warehouse (10 min).',

                    weatherNote: 'December evening temp ~10-12°C (50-54°F), feels colder with harbor wind. Clear weather likely.',

                    mapLink: 'https://www.google.com/maps/place/Osanbashi+Yokohama+International+Passenger+Terminal/@35.4506,139.6469,17z'
                }
            },
            {
                time: '4:45 PM',
                title: 'Red Brick Warehouse - Evening Illumination',
                description: 'Historic waterfront warehouses lit up for the evening',
                location: 'Yokohama Red Brick Warehouse (Akarenga Soko)',
                details: {
                    area: 'Minato Mirai waterfront - 10 min walk west from Osanbashi Pier',
                    address: '1-1-1 Shinko, Naka-ku, Yokohama, Kanagawa 231-0001',
                    fullName: 'Yokohama Red Brick Warehouse (横浜赤レンガ倉庫)',
                    walkTime: '10 min from Osanbashi along waterfront boardwalk',

                    theBuildings: {
                        building1: 'Warehouse No. 1 - Event spaces, seasonal exhibitions',
                        building2: 'Warehouse No. 2 - 1F: Shops/boutiques (10:00-19:00) • 2F: Restaurants/cafes (11:00-20:00)',
                        outdoorPlaza: 'Event space between buildings, often has seasonal decorations (December = winter illuminations possible)'
                    },

                    mondayHours: {
                        shops: '10:00-19:00 (Building 2, 1F)',
                        restaurants: '11:00-20:00 (Building 2, 2F)',
                        plaza: '24/7 accessible',
                        note: 'NO Monday closures - fully operational'
                    },

                    eveningAtmosphere: {
                        illumination: 'Buildings lit in amber/orange at dusk (from ~4:30 PM onward)',
                        vibe: 'Romantic waterfront setting, contrast to daytime, "fantastical" evening ambiance',
                        crowds: 'Monday evening moderate (not peak weekend crowds)',
                        views: 'Direct harbor views, Yokohama Bay in background'
                    },

                    timeAllocation: '1 hour 15 min (4:45-6:00 PM)',
                    activities: {
                        exterior: '15 min - Photo walk around illuminated buildings and plaza',
                        shopping: '20 min - Browse boutiques in Building 2 (1F)',
                        cafe: '15-20 min - Optional cafe/snack break in Building 2 (2F)',
                        waterfront: '10 min - Harbor views from warehouse waterfront side',
                        buffer: '10 min - Flexibility for browsing or resting'
                    },

                    photoSpots: [
                        'Front plaza looking up at illuminated red bricks',
                        'Waterfront side with Minato Mirai skyline background',
                        'Between the two buildings - architectural framing',
                        'Evening "blue hour" lighting (5:00-5:30 PM best)'
                    ],

                    experience: 'Historic 1911 warehouses repurposed as cultural/shopping complex. Evening illumination creates magical atmosphere. Perfect transition from sunset to dinner.',

                    tips: 'Arrive during blue hour (5:00-5:30 PM) for best photos. Buildings more photogenic than shopping inside. Save appetite for Chinatown dinner (30 min walk away).',

                    nextStop: 'Walk 12 min east to Yokohama Chinatown for dinner (enter via Zenrin-mon Gate)',

                    mapLink: 'https://www.google.com/maps/place/Yokohama+Red+Brick+Warehouse/@35.4526321,139.6428944,17z'
                }
            },
            {
                time: '6:00 PM',
                title: 'Walk to Yokohama Chinatown',
                description: '12-min walk from Red Brick Warehouse',
                location: 'Red Brick Warehouse → Yokohama Chinatown',
                details: {
                    from: 'Red Brick Warehouse',
                    to: 'Yokohama Chinatown (Zenrin-mon East Gate)',
                    walkTime: '12 minutes (950m)',
                    route: 'Walk east along waterfront/inland streets from Red Brick → Reach Chinatown via Zenrin-mon Gate',
                    arrival: 'Chinatown ~6:15 PM',
                    mapLink: 'https://www.google.com/maps/dir/Yokohama+Red+Brick+Warehouse/Yokohama+Chinatown,+Yamashita-cho,+Naka+Ward,+Yokohama'
                }
            },
            {
                time: '6:30 PM',
                title: 'Yokohama Chinatown Dinner - Japan\'s Largest Chinatown',
                description: 'Authentic Cantonese/Chinese cuisine in historic district',
                location: 'Yokohama Chinatown',
                isFoodOption: false,
                details: {
                    area: 'Yokohama Chinatown (Yokohama Chukagai) - 0.2 km² historic district',
                    address: 'Yamashita-cho, Naka Ward, Yokohama, Kanagawa',
                    walkTime: '12 min from Red Brick Warehouse',

                    description: 'Japan\'s largest Chinatown with over 600 shops/restaurants. Founded in 1859 when Yokohama port opened. Authentic Cantonese, Shanghainese, and Beijing cuisine. 4 ornate gates (paifang) mark the boundaries.',

                    atmosphere: 'Vibrant evening scene with lanterns, neon signs, and bustling dinner crowds. Peak dinner hours 18:00-20:00. Monday evenings still busy as most restaurants stay open.',

                    diningStrategy: {
                        reservationAdvice: 'Top restaurants require 2-3 weeks advance booking. Walk-in options exist but expect 15-30 min waits at popular spots during dinner rush.',
                        timeWindow: '6:30-8:00 PM (1.5 hours for dinner)',
                        seatingStyle: 'Most restaurants are large (50-150 seats) with group/couple seating',
                        language: 'Many have English/photo menus. Staff may have limited English but pointing at menu works.'
                    },

                    mondayNote: '✅ Chinatown restaurants open 7 days/week. No Monday closures.',

                    whatToOrder: {
                        signature: 'Xiaolongbao (soup dumplings) • Peking duck • Mapo tofu • Dim sum platters',
                        styles: 'Cantonese (dim sum, roasted meats) • Shanghainese (soup dumplings, braised) • Beijing (Peking duck, noodles)',
                        drinks: 'Chinese tea (included), Shaoxing wine, Tsingtao beer'
                    }
                },
                shops: [
                    {
                        name: 'Saiko Shinkan (彩光新館)',
                        address: '192 Yamashita-cho, Naka Ward, Yokohama, Kanagawa 231-0023',
                        cuisine: 'Cantonese / Dim Sum specialist',
                        specialty: 'Xiaolongbao (soup dumplings) • Shrimp dumplings • Roast duck • Dim sum platters',
                        priceRange: '¥3,000-5,000 per person',
                        hours: '11:00-21:30 (L.O. 21:00) - Open 7 days',
                        reservation: '⚠️ HIGHLY RECOMMENDED - Popular spot, 2-3 week advance booking for dinner. Call +81-45-664-3155 or book via Tabelog.',
                        atmosphere: 'Upscale Cantonese dining room with round tables. Busy, lively, traditional decor.',
                        tips: 'Order xiaolongbao (soup dumplings) - their signature dish. Come hungry - portions are generous. If no reservation, try arriving at 6:00 PM sharp or after 8:00 PM for shorter waits.',
                        mapLink: 'https://www.google.com/maps/place/Saiko+Shinkan/@35.4424896,139.6466321,17z',
                        priority: '🌟 PRIORITY CHOICE if you can get a reservation'
                    },
                    {
                        name: 'Canton Hanten (廣東飯店)',
                        address: '142 Yamashita-cho, Naka Ward, Yokohama, Kanagawa 231-0023',
                        cuisine: 'Cantonese',
                        specialty: 'Roast duck • Char siu (BBQ pork) • Fried rice • Cantonese stir-fries',
                        priceRange: '¥2,500-4,000 per person',
                        hours: '11:30-21:30 - Open 7 days',
                        reservation: 'Walk-ins usually OK, but call ahead +81-45-681-3001 if possible',
                        atmosphere: 'Casual, family-friendly, large dining hall. Fast service.',
                        tips: 'Good backup if Saiko Shinkan is booked. Less wait time. Strong on roasted meats and rice dishes.',
                        mapLink: 'https://www.google.com/maps/place/Canton+Hanten/@35.4426,139.6464,17z'
                    },
                    {
                        name: 'Kaseiro Honten (華正樓本店)',
                        address: '164 Yamashita-cho, Naka Ward, Yokohama, Kanagawa 231-0023',
                        cuisine: 'Shanghainese / Beijing style',
                        specialty: 'Xiaolongbao • Dan dan noodles • Mapo tofu • Peking duck (order 1 day ahead)',
                        priceRange: '¥3,000-5,500 per person',
                        hours: '11:00-22:00 - Open 7 days',
                        reservation: 'Recommended for dinner - Call +81-45-681-4004',
                        atmosphere: 'Traditional Chinese restaurant, 3 floors, elegant decor. More formal than Canton Hanten.',
                        tips: 'Excellent xiaolongbao. Peking duck requires 1-day advance order. Multi-floor building - can accommodate groups.',
                        mapLink: 'https://www.google.com/maps/place/Kaseiro+Honten/@35.4427,139.6468,17z'
                    },
                    {
                        name: 'Walk-In Backup Option',
                        address: 'Main Street (Chinatown Chuo-dori) - various restaurants',
                        cuisine: 'Various (Cantonese, Shanghainese, Beijing, Szechuan)',
                        specialty: 'Photo menus, visible food displays in windows',
                        priceRange: '¥2,000-3,500 per person',
                        hours: 'Most open 11:00-21:30',
                        reservation: 'Not needed - casual walk-in dining',
                        atmosphere: 'Tourist-friendly, English menus, fast turnover',
                        tips: 'If all above are full, walk down main street and look for: 1) Photo menus outside 2) Food displays in windows 3) Moderate crowds (not empty, not 1hr wait). Avoid overly aggressive touts.',
                        mapLink: 'https://www.google.com/maps/place/Yokohama+Chinatown/@35.4426,139.6461,16z'
                    }
                ]
            },
            {
                time: '8:00 PM',
                title: 'Return to Tsukiji Hotel',
                description: 'Evening transit from Yokohama back to Ginza area',
                location: 'Yokohama Chinatown → Tsukiji Hotel',
                details: {
                    from: 'Motomachi-Chukagai Station (3 min walk from Chinatown)',
                    to: 'Hotel Keihan Tsukiji Ginza Grande',

                    walkToStation: {
                        duration: '3 minutes',
                        route: 'Exit Chinatown via nearest gate → Walk to Motomachi-Chukagai Station',
                        mapLink: 'https://www.google.com/maps/dir/Yokohama+Chinatown/Motomachi-Chukagai+Station'
                    },

                    option1: {
                        name: 'Minatomirai Line + JR (Recommended - Fewest Transfers)',
                        step1: 'Motomachi-Chukagai → Yokohama Station (Minatomirai Line, 8 min, ¥220)',
                        step2: 'Transfer to JR Keihin-Tohoku Line or Negishi Line',
                        step3: 'Yokohama → Shimbashi (JR, 20 min, ¥310)',
                        step4: 'Walk from Shimbashi to hotel (15 min) OR Hibiya Line to Tsukiji (1 stop)',
                        totalTime: '45-50 minutes (including transfer)',
                        totalCost: '¥530 (or ¥700 if using Hibiya Line final leg)',
                        transfers: '1 transfer (at Yokohama Station)',
                        mapLink: 'https://www.google.com/maps/dir/Motomachi-Chukagai+Station/Shimbashi+Station/Hotel+Keihan+Tsukiji+Ginza+Grande'
                    },

                    option2: {
                        name: 'Direct to Ginza (Alternative via Negishi/Yamanote)',
                        step1: 'Motomachi-Chukagai → Yokohama (Minatomirai Line, 8 min, ¥220)',
                        step2: 'Yokohama → Yurakucho (JR Negishi → Yamanote transfer, 25 min, ¥310)',
                        step3: 'Walk from Yurakucho through Ginza to hotel (12 min)',
                        totalTime: '50-55 minutes',
                        totalCost: '¥530',
                        transfers: '1-2 transfers (Yokohama, possibly at Sakuragicho)',
                        note: 'Slightly longer but ends closer to Ginza shopping area if you want to stroll'
                    },

                    recommendation: 'Option 1 (via Shimbashi) is most straightforward. You\'ve used this route before on Day 6 morning. Shimbashi is familiar territory.',

                    departureWindow: '8:00-8:15 PM (after ~1.5 hr dinner)',
                    arrival: 'Hotel by 9:00-9:15 PM',

                    tips: 'Yokohama Station transfers well-signed but large. Follow "JR Lines" signs after exiting Minatomirai Line. Trains frequent until 11:30 PM - no rush. Shimbashi → hotel walk is pleasant evening stroll.',

                    dayComplete: '⛩️🌅🏮 Kamakura temples → Yokohama harbor sunset → Chinatown feast - complete! Geographic efficiency + waterfront beauty. Total steps: ~16,000. Rest well!'
                }
            }
        ]
    };
