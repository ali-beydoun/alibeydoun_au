// ═══════════════════════════════════════════════════════════════════════
// DAY 4 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
        id: 4,
        type: 'explore',
        name: 'Day 3',
        date: 'Saturday, November 29',
        dayOfWeek: 'Saturday',
        dateShort: 'Nov 29',
        description: 'Ginza Breakfast & Pedestrian Paradise → Odaiba Future Island',
        morning: [
            {
                time: '8:00 AM',
                title: 'Tsukiji Outer Market - Morning Atmosphere',
                description: 'Bustling market on your hotel\'s doorstep',
                location: 'Tsukiji Outer Market',
                details: {
                    area: 'Tsukiji Outer Market - authentic Tokyo morning market experience',
                    address: '4 Chome Tsukiji, Chuo City, Tokyo',
                    walkingTime: '5 min walk from Hotel Keihan Tsukiji Ginza Grande',
                    duration: '45 minutes (8:00-8:45 AM)',
                    marketHours: 'Most shops: 5:00 AM - 2:00 PM (vibrant 8-10 AM)',
                    vibe: 'Electric morning energy - vendors, locals, tourists, fresh seafood displays, street food sizzling',
                    experience: 'At 8:00 AM on Saturday, the market is at peak energy. This is one of Tokyo\'s definitive early-morning experiences - bustling, atmospheric, and right on your hotel\'s doorstep.',
                    highlights: '400+ vendors, fresh seafood displays, street food stalls, kitchen goods shops, specialty tea & dried goods',
                    strategy: 'Stroll through the market atmosphere, observe vendors preparing food, take in the sights and smells. This is about the EXPERIENCE, not a shopping mission (save that for Day 7 if you return).',
                    photos: 'Vendors arranging seafood, colorful market stalls, locals shopping, street food being prepared',
                    note: '🎯 INSIDER MOVE: Your hotel is in Tsukiji, NOT Ginza. This 5-minute walk replaces the original 15-minute walk to closed Ginza cafes, giving you an authentic Tokyo morning experience.',
                    mapLink: 'Tsukiji Outer Market, 4 Chome Tsukiji, Chuo City, Tokyo'
                }
            },
            {
                time: '8:45 AM',
                title: 'Turret Coffee Breakfast',
                description: 'Specialty coffee & morning pastries in Tsukiji',
                location: 'Turret Coffee',
                details: {
                    area: 'Tsukiji - The only cafe on your original list open this early',
                    address: 'Tsukiji 4-chome, Chuo City (near the market)',
                    walkingTime: '3-5 min walk from Tsukiji Outer Market',
                    duration: '30 minutes (8:45-9:15 AM)',
                    hours: '7:00 AM - 7:00 PM (Saturdays) - opens earlier than any Ginza cafe',
                    vibe: 'Third-wave specialty coffee, minimalist aesthetic, post-market local crowd',
                    highlights: 'Expert pour-overs, single-origin beans, morning pastries, clean minimalist design',
                    experience: 'After the bustling market, settle into this calm, sophisticated coffee spot. This is the only cafe from your original "Hit List" that\'s actually open at 8:00 AM - and it\'s right here in Tsukiji, not Ginza.',
                    strategy: 'Order a pour-over coffee and a morning pastry. Enjoy the quiet, intentional coffee culture before heading to Ginza.',
                    note: '⭐ CORRECTED LOCATION: This cafe is in Tsukiji, NOT Ginza. Original plan had incorrect 9:00 AM opening - it actually opens at 7:00 AM on Saturdays.',
                    mapLink: 'Turret Coffee Tsukiji, Tokyo'
                }
            },
            {
                time: '9:15 AM',
                title: 'Ginza Six Rooftop Garden - The "Secret" Start',
                description: 'Serene rooftop views before the district wakes up',
                location: 'Ginza Six Rooftop Garden',
                details: {
                    area: 'Ginza Six - 6th Floor Rooftop Garden',
                    address: '6-10-1 Ginza, Chuo City (Ginza Six mall)',
                    walkingTime: '10-15 min walk from Turret Coffee in Tsukiji',
                    duration: '30 minutes (9:15-9:45 AM)',
                    hours: 'Rooftop Garden: 7:00 AM - 11:00 PM (FREE public access) | Mall shops: 10:30 AM - 8:30 PM',
                    vibe: 'Tranquil Japanese garden in the sky, bamboo groves, panoramic city views, morning calm',
                    experience: 'This is the definitive "insider move." While Ginza\'s shops are still closed, you\'ll have this serene, beautifully designed rooftop garden almost entirely to yourself. Elevated views of the district before it officially "wakes up."',
                    highlights: 'Traditional Japanese landscaping, bamboo, seasonal plants, benches with city views, art installations',
                    strategy: 'Walk from Tsukiji/Turret Coffee to Ginza. Enter Ginza Six, take the elevator directly to the 6F rooftop. Enjoy 20-30 minutes of quiet, panoramic views. This transforms "dead time" (waiting for 10:00-11:00 AM store openings) into a premium, tranquil experience.',
                    photos: 'Rooftop garden with Ginza skyline, bamboo groves, morning light on buildings, empty terraces',
                    note: '🎯 STRATEGIC TIMING: Most Ginza stores don\'t open until 10:30-11:00 AM. This rooftop garden opens at 7:00 AM and is FREE. You\'re using the "dead time" brilliantly.',
                    mapLink: 'Ginza Six Rooftop Garden, 6-10-1 Ginza, Chuo City, Tokyo'
                }
            },
            {
                time: '9:45 AM',
                title: 'Ginza Flagship Shopping - Synchronized Openings',
                description: 'Strategic shopping aligned with actual store hours',
                location: 'Ginza Chuo-dori',
                details: {
                    area: 'Ginza Chuo-dori - Luxury flagship boulevard',
                    duration: '2 hours 15 min (9:45 AM - 12:00 PM)',
                    vibe: 'High-end retail architecture, iconic Japanese flagships, morning shopping calm',
                    strategy: '🎯 TWO STRATEGIC OPTIONS - Pick based on your priority:\n\nOPTION A: PANCAKE PRIORITY\n• 9:40 AM: Walk to A Happy Pancake Ginza (7F New Ginza Building, 5-8-5 Ginza)\n• Queue before 10:00 AM Saturday opening (NO online reservations on weekends)\n• Be FIRST in line to avoid 2-5 hour waits\n• After pancakes (~11:00 AM): Hit the 11:00 AM flagship openings (Wako, Uniqlo)\n\nOPTION B: SHOPPING PRIORITY\n• 10:00 AM: Start at Itoya Stationery (opens 10:00 AM) - explore 12 themed floors\n• 10:30 AM: Ginza Six shops open - explore the mall\n• 11:00 AM: Visit Wako (clock tower) and Uniqlo Ginza flagship (both open 11:00 AM)\n• Skip pancakes or accept long wait\n\nStores open in STAGGERED times: Itoya (10:00 AM) → Ginza Six shops (10:30 AM) → Wako & Uniqlo (11:00 AM).',
                    shops: [
                        {
                            name: '1. A Happy Pancake Ginza ⭐⭐ (PANCAKE PRIORITY OPTION)',
                            address: '7F New Ginza Building No. 10, 5-8-5 Ginza, Chuo City',
                            highlight: 'Ultra-fluffy Japanese soufflé pancakes with Hokkaido milk butter & Manuka honey. 20 min cook time per order.',
                            hours: 'Saturdays: 10:00 AM - 8:30 PM • ☎️ 03-6255-1111 • NO online reservations on weekends',
                            walk: '12 min walk from Ginza Six Rooftop',
                            strategy: '🚨 ARRIVE AT 9:40 AM (20 min before opening) to be first in line. Weekend waits can be 2-5 hours if you arrive late!',
                            mapLink: 'A Happy Pancake Ginza, 5-8-5 Ginza, Chuo City, Tokyo'
                        },
                        {
                            name: '2. Itoya Stationery Store (SHOPPING PRIORITY OPTION)',
                            address: '2-7-15 Ginza, Chuo City (G.Itoya main building)',
                            highlight: '12 floors of stationery heaven. Japanese pens, washi paper, notebooks, luxury writing instruments. Each floor is themed.',
                            hours: '10:00 AM - 8:00 PM (Saturdays)',
                            walk: '10 min walk from Ginza Six',
                            strategy: 'Opens 10:00 AM - perfect if you skip pancakes and prioritize shopping time',
                            mapLink: 'Itoya Ginza, Tokyo'
                        },
                        {
                            name: '3. Wako Ginza (The Clock Tower) ⭐',
                            address: '4-5-11 Ginza, Chuo City',
                            highlight: 'THE iconic Ginza landmark since 1932. Luxury watches, jewelry, department store. Don\'t miss the famous clock tower and rooftop terrace views.',
                            hours: '11:00 AM - 7:00 PM (Saturdays)',
                            walk: 'Central Ginza 4-chome crossing',
                            mapLink: 'Wako Ginza, Tokyo'
                        },
                        {
                            name: '4. Uniqlo Ginza (Global Flagship) ⭐',
                            address: '6-9-5 Ginza, Chuo City (12 floors)',
                            highlight: 'The ultimate Uniqlo experience. 12 floors showcasing Japanese minimalist fashion, exclusive Ginza items, incredible organization',
                            hours: '11:00 AM - 9:00 PM (Saturdays)',
                            walk: '5 min walk north from Wako on Chuo-dori',
                            mapLink: 'Uniqlo Ginza Flagship, Tokyo'
                        },
                        {
                            name: '5. Ginza Six',
                            address: '6-10-1 Ginza, Chuo City',
                            highlight: 'Massive luxury mall (2017). Art installations, rooftop garden (visited earlier), 241 shops/restaurants, basement food hall (depachika)',
                            hours: '10:30 AM - 8:30 PM (shops)',
                            walk: 'Right next to Uniqlo',
                            mapLink: 'Ginza Six, Tokyo'
                        },
                        {
                            name: '6. Ginza Kimuraya (Anpan Historic Bakery)',
                            address: '4-5-7 Ginza, Chuo City',
                            highlight: 'Birthplace of anpan (sweet red bean buns) since 1869. Historic Japanese bakery institution. Perfect mid-morning snack.',
                            hours: '10:00 AM - 7:00 PM (Saturdays)',
                            walk: 'At Ginza 4-chome crossing (near Wako)',
                            mapLink: 'Ginza Kimuraya Sohonten, Tokyo'
                        }
                    ]
                }
            },
            {
                time: '12:00 PM',
                title: 'Ginza Hokoten (Pedestrian Paradise)',
                description: 'Car-free luxury boulevard - Saturday special',
                location: 'Ginza Chuo-dori',
                details: {
                    hours: '12:00 PM - 5:00 PM (Saturdays/Sundays/Holidays only)',
                    section: 'Ginza 1-chome to 8-chome (1,100 meters car-free)',
                    duration: '1 hour recommended experience',
                    highlights: 'Walk down the middle of Tokyo\'s most expensive street, benches & parasols set up, 300,000+ weekly visitors, unique tradition since 1970',
                    atmosphere: 'Relaxed luxury promenade without traffic noise. Families, tourists, locals all strolling together.',
                    photo: 'Iconic photo op - grand boulevard with Wako clock tower, no cars, pure pedestrian takeover',
                    tips: 'This ONLY happens weekends/holidays. At noon, police block cars and the entire boulevard becomes a pedestrian paradise. Perfect for slow strolling and photos.',
                    note: 'Bicycles must be walked, not ridden. No street performances or vendors - this is a pure, elegant pedestrian experience.',
                    vibe: 'Experience luxury retail the way it was meant to be - on foot, unhurried, with the entire grand street to yourself'
                }
            }
        ],
        afternoon: [
            {
                time: '1:00 PM',
                title: 'Transit: Ginza to Shimbashi',
                description: 'Gateway to Odaiba - 10 min walk or 1-stop subway',
                details: {
                    from: 'Ginza District (after Hokoten)',
                    to: 'Shimbashi Station',
                    options: '15 min walk OR Ginza Line (1 stop, 2 min)',
                    recommendation: 'Walk if weather is nice - pleasant route through business district',
                    route: 'Walk southeast on Sotobori-dori toward Shimbashi',
                    arrival: 'Arrive Shimbashi Station by 1:20 PM to catch Yurikamome Line',
                    tips: 'Look for signs to Yurikamome Line (New Transit) inside Shimbashi Station. It\'s a separate elevated platform from JR/subway.'
                }
            },
            {
                time: '1:30 PM',
                title: 'Yurikamome Line - The "Famous Monorail"',
                description: 'Driverless train ride over Rainbow Bridge to Odaiba',
                location: 'Shimbashi Station',
                details: {
                    line: 'Yurikamome Line (Tokyo Waterfront New Transit)',
                    from: 'Shimbashi Station',
                    to: 'Daiba Station (6 stops)',
                    duration: '15 minutes',
                    cost: '¥330 (use Suica/Pasmo)',
                    train: 'Fully automated, driverless, rubber-tired train',
                    experience: 'THIS IS THE HIGHLIGHT! The train climbs up, does a dramatic 270° loop onto Rainbow Bridge, and soars over Tokyo Bay with panoramic views.',
                    tips: '🎯 CRITICAL TIP: Board the FIRST CAR and grab the FRONT-ROW SEATS. Since it\'s driverless, you get an unobstructed cockpit view like a rollercoaster. Best views in Tokyo transit.',
                    views: 'Shiodome skyscrapers, Tokyo Tower, Rainbow Bridge steel cables, Odaiba island, full Tokyo skyline, cargo ships in the bay',
                    vibe: 'Feels like riding into the future - sleek, elevated, swooping over the water',
                    note: 'Not technically a monorail (it\'s on rubber tires), but this is 100% what people mean when they say "the famous Tokyo monorail to Odaiba"'
                }
            },
            {
                time: '2:00 PM',
                title: 'Aqua City Odaiba - Statue of Liberty Mall',
                description: 'Arrival at Odaiba - waterfront shopping & views',
                location: 'Aqua City Odaiba',
                details: {
                    station: 'Daiba Station (get off here)',
                    connection: 'Direct walkway from station into Aqua City',
                    duration: '1.5 hours at Aqua City (2:00 - 3:30 PM)',
                    highlights: 'Life-sized Statue of Liberty replica (on the waterfront plaza), stunning Rainbow Bridge & Tokyo skyline views, 5-6F restaurant floors',
                    floors: '7 floors of shopping, dining, entertainment',
                    shops: 'Japanese fashion, character goods (Ghibli, anime), electronics, souvenir shops',
                    views: 'The waterfront boardwalk outside has the iconic Odaiba view: Rainbow Bridge, Tokyo Tower, Fuji TV Building, Lady Liberty statue',
                    photo: 'Must-get photo with Statue of Liberty + Rainbow Bridge + Tokyo skyline in one frame',
                    tips: 'Walk around the outdoor deck first for photos, then explore inside. Save detailed restaurant research for dinner later.',
                    vibe: 'Modern bayside mall with American-style open layout, bright and airy, tourist-friendly',
                    note: 'This is "the mall with the Statue of Liberty" you requested'
                }
            },
            {
                time: '3:30 PM',
                title: 'Decks Tokyo Beach - Retro & Entertainment Mall',
                description: 'Quirky neighboring mall with retro vibes',
                location: 'Decks Tokyo Beach',
                details: {
                    location: 'Right next door to Aqua City (2 min walk via connecting bridge)',
                    duration: '1 hour at Decks (3:30 - 4:30 PM)',
                    vibe: 'More playful, retro-themed, entertainment-focused than Aqua City',
                    floors: '6 floors - mix of nostalgia, games, attractions, dining',
                    highlights: 'Tokyo Joypolis (indoor Sega theme park), Daiba Itchome Shotengai (retro 1960s Japanese street), Legoland Discovery Center, Madame Tussauds Tokyo',
                    attractions: {
                        joypolis: 'Sega\'s indoor amusement park - VR rides, arcade games, rollercoasters (separate admission ¥1,200-5,000)',
                        shotengai: 'Free retro street recreating 1960s Tokyo - old shops, games, photo ops, vintage vending machines',
                        legoland: 'Small indoor Lego attraction for kids',
                        tussauds: 'Wax museum with Japanese & international celebrities'
                    },
                    recommendation: 'Walk through the free retro street (Daiba Itchome Shotengai) - it\'s fun and nostalgic. Skip paid attractions unless you\'re really into Sega/Lego.',
                    tips: 'This mall is less crowded than Aqua City. Good for a breather and some quirky photo ops before heading to Gundam.',
                    shops: 'More casual brands, souvenir shops, character goods, takoyaki/snack stalls'
                }
            }
        ],
        evening: [
            {
                time: '4:30 PM',
                title: 'DiverCity Tokyo Plaza - Gundam Statue',
                description: 'Massive Gundam statue & modern shopping mall',
                location: 'DiverCity Tokyo Plaza',
                details: {
                    location: '5-10 minute walk from Decks Tokyo Beach',
                    route: 'Walk north along the waterfront promenade - you\'ll see the Gundam from far away',
                    duration: '1.5 hours at DiverCity (4:30 - 6:00 PM)',
                    mainAttraction: '🤖 Life-Sized Unicorn Gundam Statue (RX-0)',
                    gundam: {
                        height: '19.7 meters tall (64+ feet)',
                        location: 'Festival Plaza (outdoor plaza in front of DiverCity)',
                        shows: 'Transformation shows with lights, music, and moving panels - typically at 11am, 1pm, 3pm, 5pm, 7pm (check current schedule)',
                        timing: 'Plan to catch the ~5:00 PM or 5:30 PM show as the sun sets - magical lighting',
                        experience: 'The statue\'s panels open, lights activate, dramatic music plays. It\'s a 5-minute spectacle.'
                    },
                    mall: '7 floors of shopping - H&M, Uniqlo, Japanese fashion brands, Gundam Base Tokyo (official Gundam model shop on 7F)',
                    tips: '📸 Best photos: Arrive 10-15 min before the transformation show. Position yourself in front. After show, go inside to 7F Gundam Base for model kits.',
                    vibe: 'More modern, spacious, less touristy than Aqua City. Popular with locals and Gundam fans.',
                    shops: 'Fashion, electronics, character goods, food court',
                    note: 'The Gundam is FREE to view. The statue is outdoors and accessible 24/7, but shows run during mall hours.'
                }
            },
            {
                time: '6:00 PM',
                title: 'Rooftop Dinner at Aqua City Odaiba',
                description: 'Rainbow Bridge views & waterfront dining',
                location: 'Aqua City Odaiba (return)',
                details: {
                    location: 'Walk back to Aqua City (7-10 min walk from DiverCity)',
                    floors: '5th & 6th floors - Restaurant Floors',
                    duration: 'Dinner + evening views (6:00 PM onwards)',
                    strategy: '🚨 CRITICAL SATURDAY DINNER STRATEGY:\n\n5:10 PM: After Gundam show, walk IMMEDIATELY back to Aqua City\n5:45 PM: Arrive at restaurant level (5F/6F). Choose a restaurant with terrace/window views of Rainbow Bridge\n5:45-6:00 PM: Put your name on the IN-PERSON WAITLIST. Most restaurants do NOT accept reservations on Saturday evenings.\n• You\'ll receive a vibrating pager to hold your spot in the queue\n6:00-6:30 PM: Browse Aqua City shops while waiting for your pager to buzz\n6:30 PM (approx): Be seated for dinner with prime Rainbow Bridge views\n\nWhy this matters: Walk-ins at 6:00 PM on Saturday = 1-2 hour waits. Joining the waitlist at 5:45 PM = productive 30-45 min wait.',
                    views: 'Illuminated Rainbow Bridge (lights up at sunset), glittering Tokyo skyline across the bay, waterfront boardwalk',
                    restaurants: 'Italian with terraces, tonkatsu, yakiniku, Bills (Australian), Gonpachi (Kill Bill restaurant), Ramen Kokugikan Mai. Choose based on view quality - prioritize terrace or window seating.',
                    tips: '🌉 This is THE iconic Odaiba dinner experience. The 5:45 PM waitlist strategy is essential for Saturday nights. Rainbow Bridge lights change colors throughout the night.',
                    timing: 'Sunset in late November is around 4:30-5:00 PM, so by 6 PM the bridge will be fully illuminated',
                    vibe: 'Romantic, scenic, quintessential Tokyo waterfront dining. One of the most photographed views in the city.',
                    note: '⚠️ Weekend dinner reservations often NOT accepted at view restaurants. The vibrating pager waitlist system is standard at Japanese malls - use it strategically.'
                }
            },
            {
                time: '7:30 PM',
                title: 'Evening Waterfront Stroll & Return',
                description: 'Optional boardwalk walk + night Yurikamome ride',
                details: {
                    optional: 'After dinner, enjoy a final stroll along the Odaiba waterfront boardwalk',
                    views: 'Night views of Rainbow Bridge, Tokyo Tower lit up, Fuji TV Building illuminated, Statue of Liberty with sparkly skyline',
                    experience: 'The whole island transforms at night - neon, reflections on the water, romantic atmosphere',
                    return: 'Yurikamome Line from Daiba Station back to Shimbashi (15 min ride)',
                    nightRide: 'The Yurikamome at night is equally stunning - glittering city lights as you cross the bay back to mainland Tokyo',
                    connection: 'From Shimbashi, take Ginza Line 1 stop back to Ginza/Tsukiji or walk 15 min to hotel',
                    timing: 'Aim to leave Odaiba by 8:00-8:30 PM to get back to hotel by 9:00 PM',
                    tips: 'The waterfront is beautifully lit at night. Take your time, soak it in - this is the perfect end to your Odaiba adventure.'
                }
            }
        ]
    };
