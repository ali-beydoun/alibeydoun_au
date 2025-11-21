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
        description: 'Kamakura Coastal Heritage → Shinjuku Urban Energy',
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
                title: 'Return Journey to Shinjuku',
                description: 'Green Car on Shonan-Shinjuku Line (direct, no transfers)',
                location: 'Kamakura → Shinjuku',
                details: {
                    from: 'Kamakura Station (tour likely ends here)',
                    to: 'Shinjuku Station',
                    line: 'JR Shonan-Shinjuku Line',

                    critical: '🚨 CRITICAL: Board the SHONAN-SHINJUKU LINE, NOT the Yokosuka Line! Check platform displays carefully.',

                    platformNavigation: 'Kamakura Station platforms serve TWO different lines:\n• Yokosuka Line → goes to Tokyo Station/Shinagawa/Chiba (WRONG for Shinjuku)\n• Shonan-Shinjuku Line → goes to Shibuya/Shinjuku/Omiya (CORRECT)',

                    verification: 'Look at the electronic display above the platform. Train destination should say "Shinjuku" or "Omiya" (via Shinjuku). If it says "Tokyo" or "Chiba," do NOT board.',

                    frequency: 'Shonan-Shinjuku trains depart Kamakura roughly every 30 minutes (2 trains per hour)',
                    alternativeIfMissed: 'If Shonan-Shinjuku just departed, take ANY Yokosuka Line train 2 stops to Ofuna Station. Transfer there to Shonan-Shinjuku Line (Ofuna is major hub with more frequent connections).',

                    greenCarPurchase: 'Use green ticket machines on Kamakura platform. Insert IC card → Select "Shinjuku" → ¥1,000 deducted. Board Cars 4 or 5 (double-decker). Touch card to ceiling reader.',

                    departureWindow: '3:00-3:30 PM',
                    duration: '~60-70 minutes',
                    arrival: 'Shinjuku Station ~4:15-4:30 PM',

                    baseFare: '¥950',
                    greenCarSurcharge: '¥1,000 (weekday)',
                    totalCost: '¥1,950 per person',

                    experience: 'Reverse journey - coastal hills to urban density. By 4:00 PM, daylight fading (sunset ~4:30 PM). Arriving Shinjuku as neon lights turn on.',

                    tips: 'Rest during this leg. Shinjuku will be high-energy. Use Green Car reclining seat to recharge.',
                    mapLink: 'https://www.google.com/maps/dir/Kamakura+Station,+Kamakura,+Kanagawa/Shinjuku+Station,+Shinjuku+City,+Tokyo'
                }
            }
        ],
        evening: [
            {
                time: '4:30 PM',
                title: 'Arrival at Shinjuku - East Side Orientation',
                description: 'Navigate to Kabukicho entertainment district',
                location: 'Shinjuku Station → Kabukicho',
                details: {
                    arrival: 'Shinjuku Station ~4:15-4:30 PM',
                    exitStrategy: '🎯 Use EAST EXIT (not West Exit). This places you directly in the entertainment/dining district.',
                    navigation: 'Exit East Gate → Walk north through plaza → Cross Yasukuni-dori street → Enter Kabukicho district',
                    walkTime: '5 minutes from station to Kabukicho main gate',
                    landmark: 'Look for the large red/white "Kabukicho" gate arch - iconic photo spot',
                    atmosphere: 'Neon signs turning on as dusk arrives. High energy, crowded, safe for tourists on main streets.',
                    tips: 'Shinjuku Station is the world\'s busiest - follow "East Exit" signs carefully. If lost, ask station staff "Kabukicho?" and point.',
                    mapLink: 'https://www.google.com/maps/dir/Shinjuku+Station,+Shinjuku+City,+Tokyo/Kabukicho,+1+Chome,+Shinjuku+City,+Tokyo'
                }
            },
            {
                time: '5:00 PM',
                title: 'Godzilla Head - The Roaring Icon',
                description: 'Life-size Godzilla at Hotel Gracery Shinjuku',
                location: 'Hotel Gracery Shinjuku / Toho Building',
                details: {
                    area: 'Heart of Kabukicho, adjacent to Toho Cinema complex',
                    address: '1-19-1 Kabukicho, Shinjuku City, Tokyo',
                    walkTime: '2-3 min from Kabukicho gate',

                    theAttraction: 'Life-size Godzilla head (12+ meters) peers over Hotel Gracery Shinjuku rooftop terrace. Every hour on the hour, it ROARS and emits steam (simulated atomic breath) with red LED eyes and sound effects.',

                    showTimes: 'Every hour: 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00, 19:00, 20:00 PM',
                    targetShow: 'Aim for 17:00 or 18:00 show - dusk lighting is dramatic',
                    duration: 'Roar sequence lasts ~3 minutes',

                    viewingSpot: 'Best photos from street level looking UP at the building. Also can access Hotel Gracery 8th floor terrace for close-up (sometimes restricted to hotel guests).',

                    experience: 'Quintessential Tokyo moment - giant monster meets urban architecture. Crowds gather on the hour for the show.',

                    hours: '24/7 visible (roar shows during business hours only)',
                    cost: 'FREE to view from street',

                    tips: 'Arrive 5-10 min before the hour. Queue forms but moves quickly. After the show, explore the Toho Cinema complex lobby for Godzilla statues and memorabilia.',

                    mapLink: 'https://www.google.com/maps/place/Hotel+Gracery+Shinjuku/@35.6938128,139.7013682,17z/data=!3m1!4b1!4m9!3m8!1s0x60188cd0d6b1ba1f:0x1c32a1f665fa1866!5m2!4m1!1i2!8m2!3d35.6938128!4d139.7039431'
                }
            },
            {
                time: '6:00 PM',
                title: 'Dinner in Kabukicho / Shinjuku 3-chome',
                description: 'Authentic izakaya or speciality dining',
                location: 'Kabukicho Area',
                isFoodOption: false,
                details: {
                    area: 'Kabukicho and neighboring Shinjuku 3-chome - walking distance from Godzilla',
                    duration: '1.5 hours (6:00-7:30 PM)',
                    budget: '¥4,000 - ¥6,000 per person (meal + drinks)',

                    shops: [
                        {
                            name: '1. Uoshin Shinjuku ⭐ PRIORITY',
                            highlight: 'Fishmonger-owned izakaya • Nokke-sushi (overflowing sushi) • Ultra-fresh fish • Raucous, fun atmosphere',
                            hours: 'Mon-Sat 17:00-23:00 • Sundays 16:00-23:00',
                            address: 'Shinjuku 3-chome area (5-7 min walk from Godzilla)',
                            walk: '5-7 min south from Kabukicho',
                            mapLink: 'https://www.google.com/maps/search/Uoshin+Shinjuku+3-chome',
                            note: '🎯 RESERVATION ESSENTIAL - Book 2-3 weeks ahead via Tabelog or AutoReserve. High-energy, beer-crate seating, staff shouting orders. Deeply fun experience.',
                            style: 'Unpretentious, loud, authentic Japanese izakaya culture'
                        },
                        {
                            name: '2. Kanae (Kappo-Izakaya)',
                            highlight: 'Sophisticated izakaya • Seasonal cooked dishes • Extensive sake list • Quiet, dark wood atmosphere',
                            hours: 'Mon-Sat 17:30-23:00 • Closed Sundays',
                            address: 'Shinjuku 3-chome (basement location)',
                            walk: '6-8 min from Kabukicho',
                            mapLink: 'https://www.google.com/maps/search/Kanae+Izakaya+Shinjuku',
                            note: 'Hyakumeiten (Top 100) restaurant. Reservation recommended. More refined than Uoshin - better for conversation.',
                            style: 'Intimate counter seating, attentive service, focus on sake pairing'
                        },
                        {
                            name: '3. Nagi Shinjuku Golden Gai (Niboshi Ramen)',
                            highlight: 'Tiny 10-seat ramen counter • Niboshi (dried sardine) broth • Cult following • In Golden Gai area',
                            hours: '24 hours (some days close 5:00-7:00 AM)',
                            address: 'Golden Gai, Kabukicho 1-1-10',
                            walk: '3 min from Kabukicho gate',
                            mapLink: 'https://www.google.com/maps/place/Nagi+Shinjuku+Golden+Gai',
                            note: 'NO reservation needed. Expect queue (15-30 min). Fast turnover. ¥1,000-1,500 budget.',
                            style: 'Ultra-casual, cramped, ramen obsession'
                        },
                        {
                            name: '4. Yakiniku Motoyama Shinjuku',
                            highlight: 'High-quality Japanese beef BBQ • Established 1975 • Exclusively Japanese wagyu • Smoke-ventilated tables',
                            hours: 'Dinner 16:00-23:00 daily',
                            address: 'Near Shinjuku 3-chome (7-10 min walk)',
                            walk: '7-10 min from Kabukicho',
                            mapLink: 'https://www.google.com/maps/search/Yakiniku+Motoyama+Shinjuku',
                            note: 'Budget ¥5,000-8,000 for quality cuts. Reservation helpful. Grill-your-own experience.',
                            style: 'Upscale casual, interactive dining'
                        }
                    ],

                    strategy: 'Uoshin or Kanae for full izakaya experience (MUST reserve ahead) • Nagi for quick, excellent ramen (no reservation) • Yakiniku for grill-your-own beef (reserve if possible)',

                    reservationCritical: '⚠️ Monday evening in Shinjuku is busy. If you want Uoshin or Kanae, book NOW (2-3 weeks before Dec 1). Otherwise, Nagi ramen is reliable walk-in option.',

                    cashNote: '💴 Some smaller venues (Nagi) are cash-only. Bring yen. Uoshin/Kanae accept cards.',

                    mapLink: 'https://www.google.com/maps/place/Kabukicho,+Shinjuku+City,+Tokyo'
                }
            },
            {
                time: '7:45 PM',
                title: 'Omoide Yokocho - Memory Lane',
                description: 'Atmospheric post-war alley of yakitori stalls',
                location: 'Omoide Yokocho',
                details: {
                    area: 'Northwest side of Shinjuku Station, near the JR tracks',
                    address: '1 Chome Nishi-Shinjuku, Shinjuku City (under the railway)',
                    walkTime: '5 min from Kabukicho',

                    history: 'Originated as black-market food stalls in burned-out post-war Tokyo (c. 1946). Historically called "Shonben Yokocho" (Piss Alley) due to primitive facilities. Now a preserved pocket of Showa-era architecture.',

                    layout: '~60 tiny bars and yakitori stalls packed into alley space the size of a few tennis courts. Wooden structures separated by inches. Red lanterns (aka-chochin) illuminate narrow paths.',

                    atmosphere: 'Thick smoke from binchotan (white charcoal) grilling chicken and pork. Salaryman crowds. Nostalgic, gritty, romantic.',

                    activity: 'WALK-THROUGH recommended (not dining). Capture the atmosphere and photos. Stalls are cramped, often have cover charges, basic facilities.',
                    duration: '15-20 minutes',

                    hours: 'Most stalls open 17:00-24:00',
                    cost: 'FREE to walk through',

                    tips: 'Narrow paths - walk single file. Respectful photography (some stalls have "no photo" signs). If you DO want to eat here, budget ¥2,000-3,000 + seating charge.',

                    mapLink: 'https://www.google.com/maps/place/Omoide+Yokocho/@35.6931653,139.6976889,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cd652a80001:0x630616a67dd8c71e!8m2!3d35.6931653!4d139.7002638'
                }
            },
            {
                time: '8:15 PM',
                title: 'Golden Gai - 200 Tiny Bars in a Labyrinth',
                description: 'Iconic bar district with postwar architecture',
                location: 'Shinjuku Golden Gai',
                details: {
                    area: 'East Shinjuku, adjacent to Kabukicho (1-1 Kabukicho)',
                    walkTime: '5 min from Omoide Yokocho back toward Kabukicho',

                    description: 'Over 200 micro-bars packed into 6 narrow alleys. Most bars seat only 5-7 people. Two-story wooden structures with steep ladder-stairs. Each bar is independently owned with unique theme/clientele.',

                    history: 'Post-war black market area, evolved into artist/writer hangouts in the 1960s-80s. Survived fires and redevelopment pressure. Now UNESCO-consideration heritage site.',

                    theSystem: {
                        regularsOnly: 'Some bars are "Ichigen-san okotowari" (first-timers refused) - regulars only',
                        touristFriendly: 'Others welcome tourists - look for English menus or "No Cover Charge" / "Tourists Welcome" signs outside',
                        coverCharges: 'Many bars charge ¥500-1,500 "table charge" (otoshi) on top of drink prices',
                        drinkPrices: '¥800-1,500 per drink (beer, whisky, cocktails)'
                    },

                    activity: 'Option A: Walk through all 6 alleys for atmosphere/photos (30 min) • Option B: Have one drink at a tourist-friendly bar (1 hour total)',

                    recommendedBars: {
                        bar1: 'Albatross - English-speaking, no cover, rock music theme',
                        bar2: 'Champion - Sports bar, welcoming, English menu',
                        bar3: 'Bar Coo - Photography theme, indie music, English OK'
                    },

                    architecture: 'Note the steep ladder-stairs to second floors, nagaya (row house) construction, fire-escape aesthetic. Incredibly photogenic at night.',

                    hours: 'Most bars open 19:00-02:00 (some until 05:00)',
                    duration: '45 min - 1 hour',
                    budget: '¥1,500-3,000 if having one drink',

                    tips: 'Respect "Regulars Only" signs. If a door is unmarked/unwelcoming, move on. Dozens of other options. Narrow alleys - step aside for others. Cash essential - most bars don\'t take cards.',

                    safety: 'Very safe. Crowded with tourists and locals. Main alleys are well-lit. Avoid aggressive touts (rare but exist).',

                    mapLink: 'https://www.google.com/maps/place/Shinjuku+Golden+Gai/@35.6943589,139.7024539,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cdc7a999999:0x630616a67dd8c71e!8m2!3d35.6943589!4d139.7050288'
                }
            },
            {
                time: '9:15 PM',
                title: 'Return to Ginza Hotel',
                description: 'Evening transit back to Tsukiji',
                location: 'Shinjuku → Ginza / Tsukiji',
                details: {
                    from: 'Shinjuku Station (5-7 min walk from Golden Gai)',
                    to: 'Hotel Keihan Tsukiji Ginza Grande',

                    option1: {
                        name: 'Tokyo Metro Marunouchi Line (Fastest)',
                        route: 'Shinjuku Station → Ginza Station',
                        duration: '15 minutes + 10 min walk to hotel',
                        transfers: 'None (direct)',
                        platform: 'Shinjuku Station - follow red "M" Marunouchi Line signs',
                        cost: '¥200 (IC card)',
                        walkToHotel: 'Ginza Station Exit A13 → Walk east 10 min to Tsukiji hotel',
                        mapLink: 'https://www.google.com/maps/dir/Shinjuku+Station,+Tokyo/Ginza+Station,+Tokyo/Hotel+Keihan+Tsukiji+Ginza+Grande'
                    },

                    option2: {
                        name: 'JR Yamanote Line (No Walking, Longer)',
                        route: 'Shinjuku Station → Yurakucho Station',
                        duration: '20 minutes + 12 min walk to hotel',
                        transfers: 'None (direct)',
                        platform: 'Shinjuku Station - JR Yamanote Line (green line)',
                        cost: '¥170 (IC card)',
                        walkToHotel: 'Yurakucho Station → Walk southeast through Ginza to Tsukiji',
                        mapLink: 'https://www.google.com/maps/dir/Shinjuku+Station,+Tokyo/Yurakucho+Station,+Tokyo/Hotel+Keihan+Tsukiji+Ginza+Grande'
                    },

                    recommendation: 'Option 1 (Marunouchi Line) is faster and more direct. Option 2 if you prefer staying on JR network.',

                    departureWindow: '9:15-9:30 PM',
                    arrival: 'Hotel by 10:00 PM',

                    tips: 'Shinjuku Station can be confusing at night. If lost, ask station staff "Marunouchi Line?" and show them. Trains run until midnight - no rush.',

                    dayComplete: '🏯→🗼 Kamakura coastal heritage to Shinjuku urban energy - complete! Total steps: ~18,000. Well earned rest tonight.'
                }
            }
        ]
    };
