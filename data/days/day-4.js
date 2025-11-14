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
                title: 'Ginza Breakfast Cafe Hit List',
                description: 'Curated morning cafes & bakeries near hotel',
                location: 'Ginza District',
                details: {
                    area: 'Ginza - Start the day in Tokyo\'s luxury district',
                    duration: '1.5 hours (8:00-9:30 AM)',
                    vibe: 'Sophisticated breakfast culture, artisan coffee, French-Japanese pastries',
                    strategy: 'Pick 1-2 spots maximum. These are all within 10-15 min walk from your hotel.',
                    shops: [
                        {
                            name: '1. Ginza West ⭐',
                            address: '7-3-6 Ginza, Chuo City (Ginza Main Store)',
                            highlight: 'Legendary Tokyo cafe since 1947. Famous for fluffy pancakes, Victoria cake, and old-school coffee service',
                            hours: '10:00 AM - 9:00 PM (opens at 10 AM - plan accordingly)',
                            walk: '8 min walk from hotel',
                            mapLink: 'Ginza West Main Store, Tokyo'
                        },
                        {
                            name: '2. Cafe de l\'Ambre',
                            address: '8-10-15 Ginza, Chuo City',
                            highlight: 'Iconic 1948 coffee house. Aged coffee beans (some 30+ years old), hand-drip pour-overs by master baristas',
                            hours: '12:00 PM - 10:00 PM (opens noon - skip if you want early breakfast)',
                            walk: '5 min walk from hotel',
                            mapLink: 'Cafe de l\'Ambre Ginza, Tokyo'
                        },
                        {
                            name: '3. Centre The Bakery',
                            address: 'Pola Ginza Bldg 1F, 1-7-7 Ginza, Chuo City',
                            highlight: 'Sleek modern bakery. Australian-style cafe, world-class croissants, avocado toast, flat whites',
                            hours: '8:00 AM - 8:00 PM',
                            walk: '12 min walk from hotel',
                            mapLink: 'Centre The Bakery Ginza, Tokyo'
                        },
                        {
                            name: '4. Ginza Kimuraya (Main Store)',
                            address: '4-5-7 Ginza, Chuo City',
                            highlight: 'Birthplace of anpan (sweet red bean buns) since 1869. Historic Japanese bakery institution',
                            hours: '10:00 AM - 7:00 PM',
                            walk: '15 min walk from hotel',
                            mapLink: 'Ginza Kimuraya Sohonten, Tokyo'
                        },
                        {
                            name: '5. Turret Coffee ⭐',
                            address: '5-9-17 Ginza, Chuo City (2F)',
                            highlight: 'Specialty third-wave coffee. Minimalist aesthetic, single-origin beans, expert pour-overs, morning pastries',
                            hours: '9:00 AM - 7:00 PM',
                            walk: '10 min walk from hotel',
                            mapLink: 'Turret Coffee Ginza, Tokyo'
                        }
                    ]
                }
            },
            {
                time: '9:30 AM',
                title: 'Pre-Hokoten Ginza Luxury Shopping',
                description: 'Flagship stores before pedestrian paradise',
                location: 'Ginza Chuo-dori',
                details: {
                    area: 'Ginza Chuo-dori - Luxury flagship boulevard',
                    duration: '2.5 hours (9:30 AM - 12:00 PM)',
                    vibe: 'High-end retail architecture, iconic Japanese flagships, morning shopping calm',
                    strategy: 'Most stores open 10:30-11:00 AM. Window shop early, enter when they open. Streets still have traffic until noon.',
                    shops: [
                        {
                            name: '1. Wako Ginza (The Clock Tower) ⭐',
                            address: '4-5-11 Ginza, Chuo City',
                            highlight: 'THE iconic Ginza landmark since 1932. Luxury watches, jewelry, department store. Don\'t miss the famous clock tower and rooftop terrace views.',
                            hours: '10:30 AM - 7:00 PM',
                            walk: 'Start here - central Ginza 4-chome crossing',
                            mapLink: 'Wako Ginza, Tokyo'
                        },
                        {
                            name: '2. Uniqlo Ginza (Global Flagship) ⭐',
                            address: '6-9-5 Ginza, Chuo City (12 floors)',
                            highlight: 'The ultimate Uniqlo experience. 12 floors showcasing Japanese minimalist fashion, exclusive Ginza items, incredible organization',
                            hours: '11:00 AM - 9:00 PM',
                            walk: '5 min walk north on Chuo-dori',
                            mapLink: 'Uniqlo Ginza Flagship, Tokyo'
                        },
                        {
                            name: '3. Itoya Stationery Store',
                            address: '2-7-15 Ginza, Chuo City (G.Itoya main building)',
                            highlight: '12 floors of stationery heaven. Japanese pens, washi paper, notebooks, luxury writing instruments. Each floor is themed.',
                            hours: '10:00 AM - 8:00 PM (Mon-Sat), 10:00 AM - 7:00 PM (Sun)',
                            walk: '8 min walk south toward Yurakucho',
                            mapLink: 'Itoya Ginza, Tokyo'
                        },
                        {
                            name: '4. Ginza Six',
                            address: '6-10-1 Ginza, Chuo City',
                            highlight: 'Massive luxury mall (2017). Art installations, rooftop garden, 241 shops/restaurants, basement food hall (depachika)',
                            hours: '10:30 AM - 8:30 PM (shops)',
                            walk: 'Right next to Uniqlo',
                            mapLink: 'Ginza Six, Tokyo'
                        },
                        {
                            name: '5. Mikimoto Ginza (Pearl Headquarters)',
                            address: '2-4-12 Ginza, Chuo City',
                            highlight: 'Stunning architecture by Toyo Ito. Birthplace of cultured pearls. Even if you don\'t buy, the building facade is iconic.',
                            hours: '11:00 AM - 7:00 PM',
                            walk: 'Near Itoya, southern Ginza',
                            mapLink: 'Mikimoto Ginza, Tokyo'
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
                    location: 'Walk back to Aqua City (10 min walk from DiverCity)',
                    floors: '5th & 6th floors - Restaurant Floors',
                    duration: 'Dinner + evening views (6:00 PM onwards)',
                    strategy: 'Choose a restaurant with terrace seating or window tables facing Rainbow Bridge',
                    views: 'Illuminated Rainbow Bridge (lights up at sunset), glittering Tokyo skyline across the bay, waterfront boardwalk',
                    restaurants: 'Ramen Kokugikan Mai (ramen food hall), Gonpachi (Kill Bill restaurant), Bills (Australian breakfast/dinner), tonkatsu, yakiniku, Italian with terrace',
                    tips: '🌉 This is THE iconic Odaiba dinner experience. Request window/terrace seating with bridge views. The Rainbow Bridge lights change colors throughout the night.',
                    timing: 'Sunset in late November is around 4:30-5:00 PM, so by 6 PM the bridge will be fully illuminated',
                    vibe: 'Romantic, scenic, quintessential Tokyo waterfront dining. One of the most photographed views in the city.',
                    note: 'No reservation needed for most casual spots, but arrive before 7 PM to avoid weekend dinner rush'
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
