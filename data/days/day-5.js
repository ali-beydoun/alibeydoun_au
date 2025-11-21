// ═══════════════════════════════════════════════════════════════════════
// DAY 5 ITINERARY - Edit activities in morning/afternoon/evening arrays
// Quick edit: Change time, title, description, or details for any activity
// ═══════════════════════════════════════════════════════════════════════


export default {
        id: 5,
        type: 'explore',
        name: 'Day 4',
        date: 'Sunday, November 30',
        dayOfWeek: 'Sunday',
        dateShort: 'Nov 30',
        description: 'East Tokyo Time Travel: Old → Retro → Future',
        morning: [
            {
                time: '9:30 AM',
                title: 'Asakusa Culture Tourist Information Center',
                description: 'FREE 8F observatory - panoramic view before temple crowds',
                location: 'Asakusa Tourist Info Center',
                details: {
                    area: 'Directly opposite Kaminarimon Gate',
                    address: '2-18-9 Kaminarimon, Taito City, Tokyo 111-0034',
                    duration: '30 minutes (9:30-10:00 AM)',
                    hours: 'Open 9:00 AM - 8:00 PM daily',
                    floor: '8th Floor - FREE Observation Deck',
                    highlights: 'Unobstructed aerial view of entire Senso-ji complex (Kaminarimon, 250m Nakamise-dori, Hozomon Gate, main hall), Sumida River panorama, Tokyo Skytree views',
                    strategy: '🎯 INSIDER MOVE: Visit BEFORE entering the temple complex. Provides perfect mental map and geographic orientation before being immersed in dense Sunday crowds. See the full scale of Japan\'s oldest temple from above.',
                    vibe: 'Strategic pre-temple stop - understand the layout, take photos, then experience it at street level',
                    transit: 'Walk 5-7 min from hotel to Higashi-Ginza Station → Take Toei Asakusa Line direct to Asakusa (11 min) → Exit A4 (nearest to Kaminarimon) → Info Center directly opposite gate',
                    mapLink: 'Asakusa Culture Tourist Information Center, 2-18-9 Kaminarimon, Taito City, Tokyo',
                    note: 'Sunday = peak crowd day. This aerial view first helps you navigate the chaos below.'
                }
            },
            {
                time: '10:00 AM',
                title: 'Asakusa Traditional Tokyo Hit List',
                description: 'Historic temple, traditional market street & iconic snacks',
                location: 'Asakusa District',
                details: {
                    area: 'Asakusa - Tokyo\'s most famous traditional neighborhood',
                    duration: '2.5 hours (10:00 AM - 12:30 PM)',
                    vibe: 'Grand-scale history, sacred atmosphere, bustling traditional commerce',
                    shops: [
                        {
                            name: '1. Kaminarimon (Thunder Gate) ⭐',
                            highlight: 'Iconic 17m-tall red lantern (700kg) • Guardian statues (Raijin & Fujin) • Photo spot',
                            hours: 'Open 24/7, free entry',
                            address: '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032',
                            walk: '1 min from Asakusa Station Exit 1',
                            mapLink: 'Kaminarimon Gate, 2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032'
                        },
                        {
                            name: '2. Nakamise-dori Shopping Street',
                            highlight: '250m covered street • 89 traditional shops • Snacks: ningyo-yaki, kibi dango',
                            hours: 'Most shops 9:00 AM - 7:00 PM',
                            address: 'Nakamise-dori, Asakusa, Taito City',
                            walk: 'Straight through from Kaminarimon',
                            mapLink: 'Nakamise-dori, Asakusa, Taito City, Tokyo'
                        },
                        {
                            name: '3. Kimuraya Ningyoyaki (Nakamise Shop)',
                            highlight: 'Famous ningyo-yaki cakes (人形焼) • Watch traditional baking (100 years unchanged)',
                            hours: '9:00 AM - 7:00 PM',
                            address: 'Nakamise-dori, Asakusa',
                            walk: 'On Nakamise-dori',
                            mapLink: 'Kimuraya Ningyoyaki Nakamise Asakusa'
                        },
                        {
                            name: '4. Azuma Kibi Dango (Look for rabbit mark)',
                            highlight: 'Fresh kibi dango (mochi dumplings) • Demonstration sales • Est. 1868',
                            hours: '9:00 AM - 7:00 PM',
                            address: 'Nakamise-dori (left side from Kaminarimon)',
                            walk: 'On Nakamise-dori',
                            mapLink: 'Azuma Kibi Dango Nakamise Asakusa'
                        },
                        {
                            name: '5. Senso-ji Temple ⭐⭐⭐',
                            highlight: 'Tokyo\'s oldest temple • Main Hall (Kannon-do) • Five-Story Pagoda • Incense ritual',
                            hours: 'Main Hall: 6:00 AM - 5:00 PM • Grounds: 24/7',
                            address: '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032',
                            walk: 'End of Nakamise-dori',
                            mapLink: 'Senso-ji Temple, 2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032'
                        }
                    ],
                    strategy: 'Kaminarimon photo → Browse Nakamise snacks → Senso-ji temple grounds → Traditional lunch',
                    mapLink: 'Senso-ji Temple, Asakusa, Tokyo'
                }
            },
            {
                time: '12:30 PM',
                title: 'Traditional Asakusa Lunch',
                description: 'Tendon or unagi - choose your traditional meal',
                location: 'Asakusa Area',
                isFoodOption: false,
                details: {
                    area: 'Near Senso-ji Temple (1-2 min walk)',
                    duration: '1 hour',
                    shops: [
                        {
                            name: '1. Daikokuya Tempura ⭐ PRIORITY',
                            highlight: 'Michelin Bib Gourmand • Est. 1887 • Old-school tendon • Sesame oil fried (not vegetable)',
                            hours: '11:00 AM - 8:00 PM daily • ☎️ 03-3844-1111',
                            address: '1-38-10 Asakusa, Taito City, Tokyo 111-0032',
                            walk: '1 min from Senso-ji',
                            mapLink: 'Tempura Daikokuya, 1-38-10 Asakusa, Taito City, Tokyo 111-0032',
                            note: 'Expect lines (worth it!) - queues can be long on Sundays'
                        },
                        {
                            name: '2. Asakusa Unagi Sansho ⭐ (SUNDAY-OPEN UNAGI)',
                            highlight: 'High-quality unagi specialist • OPEN ON SUNDAY • Master chef with decades of experience • Proper sit-down specialty restaurant',
                            hours: 'Open on Sundays (check exact hours) • ☎️ Check locally',
                            address: '5-7 minute walk from Asakusa Station',
                            walk: '5-7 min from station',
                            mapLink: 'Asakusa Unagi Sansho, Asakusa, Tokyo',
                            note: '🎯 EXPERT RECOMMENDATION: Sunday-open alternative for traditional unagi lunch experience'
                        },
                        {
                            name: '3. Asakusa Unana ⭐ (QUICK UNAGI OPTION)',
                            highlight: '¥600 grilled eel onigiri (rice ball) • Famous food stand • Sansho pepper glaze • Social media hit',
                            hours: '9:30 AM - 5:30 PM • Sat/Sun until 6:30 PM (until sold out)',
                            address: '2-7-21 Asakusa, Taito City',
                            walk: 'Near Senso-ji',
                            mapLink: 'Asakusa Unana, 2-7-21 Asakusa, Taito City, Tokyo',
                            note: 'Premium snack, not a full sit-down lunch. Polarizing reviews (must-try vs overhyped) but fast and culturally current'
                        },
                        {
                            name: '4. Tatsumiya (Nyorosuke Tatsumiya)',
                            highlight: 'Showa-era traditional • Eel, tempura, tendon sets • Very Japanese atmosphere',
                            hours: 'Lunch until 10:00 PM daily',
                            address: 'Southeast of Sensoji Temple',
                            walk: 'Behind temple complex',
                            mapLink: 'Tatsumiya Asakusa Tokyo'
                        }
                    ],
                    strategy: 'Daikokuya for tendon perfection OR Asakusa Unagi Sansho for sit-down unagi (Sunday-open!) OR Asakusa Unana for quick eel onigiri.',
                    note: 'All within 1-2 min of Senso-ji. Expect lines at Daikokuya (worth it!).'
                }
            }
        ],
        afternoon: [
            {
                time: '1:30 PM',
                title: 'Taxi to Nezu Shrine',
                description: 'Comfortable direct ride from Asakusa to Nezu',
                details: {
                    from: 'Asakusa area (near Senso-ji / Kokusai Dori)',
                    to: 'Nezu Shrine (Nezu Jinja)',
                    method: 'Taxi (flag on street or use Uber/GO app)',
                    instruction: 'Tell driver: "Nezu Jinja" (根津神社)',
                    duration: '~15 minutes',
                    cost: 'Approx. ¥2,500',
                    arrival: 'Nezu Shrine by 1:45 PM',
                    benefit: '🎯 COMFORT CHOICE: Saves 30 minutes and walking energy after a full morning of temple exploration. Direct, comfortable, and efficient.',
                    tips: 'Flag a taxi on the main street (Kokusai Dori) near Senso-ji, or use Uber/GO app. Show driver "Nezu Jinja" (根津神社) on your phone if needed.'
                }
            },
            {
                time: '1:45 PM',
                title: 'Nezu Shrine - Vermilion Gate Tunnel',
                description: 'Historic 1706 shrine with stunning torii pathway',
                location: 'Nezu Shrine',
                details: {
                    area: 'Nezu - Starting point of the Yanesen (Yanaka/Nezu/Sendagi) walking tour',
                    address: '1-28-9 Nezu, Bunkyo City, Tokyo 113-0031',
                    duration: '1 hour (1:45-2:45 PM)',
                    hours: 'Grounds: 9:00 AM - 5:00 PM daily • FREE admission',
                    founded: '1706 (rebuilt by 5th shogun Tokugawa Tsunayoshi)',
                    highlights: '⛩️ Senbon Torii - Hundreds of vermilion torii gates creating a stunning tunnel pathway up the hillside to Otome Inari Shrine • 1706 Romon Gate, Karamon Gate, and Honden (main hall) - all Important Cultural Properties',
                    vibe: 'One of Tokyo\'s oldest and most beautiful shrines - serene, historic, photogenic',
                    expectation: '🍂 NOTE: Famous for 6,000㎡ azalea garden (3,000+ plants) but these bloom in SPRING. In late November, focus on the historic 1706 architecture and stunning torii gate pathway.',
                    walk: '3-5 min walk from Nezu Station',
                    strategy: 'This is the designated start of your "golden hour" Yanesen walk. Spend 45-60 minutes exploring the grounds and torii pathway, then begin walking toward Yanaka Cemetery.',
                    mapLink: 'Nezu Shrine, 1-28-9 Nezu, Bunkyo City, Tokyo 113-0031'
                }
            },
            {
                time: '2:45 PM',
                title: 'Yanaka Cemetery - Golden Hour Walk',
                description: 'Peaceful park-like cemetery with fall foliage & Skytree views',
                location: 'Yanaka Cemetery (Yanaka Reien)',
                details: {
                    area: 'Yanaka Cemetery - 10 hectares, 7,000+ graves, one of Tokyo\'s most scenic cemeteries',
                    address: 'Yanaka 7-chome, Taito City, Tokyo',
                    duration: '1 hour 15 min (2:45-4:00 PM) - Extended Golden Hour Walk',
                    hours: 'Open 24 hours daily • FREE access',
                    vibe: 'NOT creepy! Described as "vast, peaceful escape," "park-like area," and "popular dog-walking course." This is a safe, serene, contemplative space.',
                    timing: '🌅 GOLDEN HOUR STRATEGY: Arriving at 2:45 PM gives you extra time to explore the cemetery at a relaxed pace with perfect "late afternoon" light for the most "contemplative atmosphere" and "better light for photos."',
                    highlights: '🍂 Stunning fall foliage - "brilliant autumn colors like golden ginkgo leaves" (late November) • Tokyo Skytree views from cemetery grounds • Final resting place of last shogun Tokugawa Yoshinobu',
                    walk: 'Slow atmospheric walk from Nezu Shrine through Yanaka neighborhood to the cemetery (10-15 min) • Traditional wooden houses and narrow back alleys - rare glimpse of old Tokyo',
                    route: 'Walk concludes at the WESTERN EDGE of the cemetery, at the top of the Yuyake Dandan (Sunset Stairs)',
                    strategy: 'This is the heart of the shitamachi experience. With the earlier arrival, you have extra buffer time to walk slowly, absorb the fall colors, and enjoy the peaceful atmosphere without rushing. Aim to reach the top of the Sunset Stairs by 4:00 PM for the critical sunset timing.',
                    mapLink: 'Yanaka Cemetery, Yanaka 7-chome, Taito City, Tokyo'
                }
            },
            {
                time: '4:00 PM',
                title: 'Yuyake Dandan & Yanaka Ginza - Sunset "Money Shot"',
                description: 'Sunset Steps view + quick shopping street snack blitz',
                location: 'Yanaka Ginza',
                details: {
                    area: 'Yanaka - Retro Showa-era "shitamachi" (old downtown Tokyo)',
                    duration: '1 hour 15 min (4:00-5:15 PM) - Sunset-focused',
                    vibe: 'Fast-paced, high-reward experience - iconic sunset photo + priority snack grab before shops close',
                    sunsetTime: '🌅 SUNSET AT 4:28 PM - This is THE timing target!',
                    criticalTiming: '⏰ 4:15 PM: Be positioned at top of Yuyake Dandan stairs • 4:28 PM: Sunset "money shot" down the shopping street • 4:30-5:00 PM: Quick "snack blitz" - shops close at 5:00 PM!',
                    shops: [
                        {
                            name: '1. Yuyake Dandan (Sunset Steps) ⭐⭐⭐',
                            highlight: '36 steps • 4.4m descent • TOP VIEW of Yanaka Ginza • "Sunset Steps" best at 4:28 PM!',
                            hours: 'Open 24/7, free',
                            address: 'Yanaka 7-chome / 3 Chome-14 Nishinippori, Arakawa City, Tokyo 116-0013',
                            walk: '5 min from Nippori Station West Exit',
                            mapLink: 'Yuyake Dandan Steps, Nishinippori, Arakawa City, Tokyo 116-0013'
                        },
                        {
                            name: '2. Yanaka Ginza Shotengai',
                            highlight: '170m retro shopping street • 60+ shops • 1950s atmosphere • Most close 5-6 PM',
                            hours: 'Most shops ~10:00 AM - 6:00 PM',
                            address: 'Base of Yuyake Dandan steps',
                            walk: 'Bottom of steps',
                            mapLink: 'Yanaka Ginza, Yanaka, Taito City, Tokyo'
                        },
                        {
                            name: '3. Niku no Suzuki ⭐ PRIORITY',
                            highlight: 'FAMOUS menchi katsu • Est. 1933 • 100% beef • TV famous • Lines down street',
                            hours: '~10:00 AM - 6:00 PM',
                            address: 'Heart of Yanaka Ginza shotengai',
                            walk: 'On Yanaka Ginza street',
                            mapLink: 'Niku no Suzuki, Yanaka Ginza, Tokyo'
                        },
                        {
                            name: '4. Niku no Satou',
                            highlight: 'Freshly fried menchi & croquettes • Local favorite • Lines often form',
                            hours: '~10:00 AM - 6:00 PM',
                            address: 'Yanaka Ginza shotengai',
                            walk: 'On Yanaka Ginza street',
                            mapLink: 'Niku no Satou, Yanaka Ginza, Tokyo'
                        },
                        {
                            name: '5. Yanaka Shippoya (Cat Theme)',
                            highlight: 'Cat-shaped treats • Cat tail-shaped cakes • Yanaka is "cat town"',
                            hours: '~10:00 AM - 6:00 PM',
                            address: 'Yanaka Ginza shotengai',
                            walk: 'On Yanaka Ginza street',
                            mapLink: 'Yanaka Shippoya, Yanaka Ginza, Tokyo'
                        },
                        {
                            name: '6. Manekiya (Cat Bean Paste)',
                            highlight: 'Cat-shaped sweets filled with red bean paste • Traditional wagashi',
                            hours: '~10:00 AM - 6:00 PM',
                            address: 'Yanaka Ginza shotengai',
                            walk: 'On Yanaka Ginza street',
                            mapLink: 'Manekiya, Yanaka Ginza, Tokyo'
                        },
                        {
                            name: '7. Yanaka Cemetery',
                            highlight: '10 hectares • 7,000+ graves • Tokugawa Yoshinobu (last shogun) • Tokyo Skytree views • Peaceful',
                            hours: 'Open 24 hours (best in daylight)',
                            address: 'Yanaka 7-chome, Taito City',
                            walk: '3 min from Nippori Station South Exit',
                            mapLink: 'Yanaka Cemetery, Yanaka 7-chome, Taito City, Tokyo'
                        }
                    ],
                    strategy: '🎯 SUNSET STRATEGY: 4:15 PM - Position at top of stairs for sunset view down the 170m retro street • 4:28 PM - Capture the "magic hour" as sky\'s glow mixes with street lanterns turning on • 4:30-5:00 PM - IMMEDIATELY walk down stairs into Yanaka Ginza for fast "snack blitz" (NOT leisurely shopping - this is for atmosphere and priority snacks before 5 PM closures)',
                    priority: '🥩 PRIORITY 1: Niku no Suzuki for "legendary" genki menchi katsu (approx ¥230) - despite long queues, this is the essential Yanaka Ginza experience • Priority 2 (if time): Yanaka Shippoya for kawaii cat-tail doughnuts',
                    cashNote: '💴 Yanaka is cash-heavy - bring yen! Small shops may not take cards.',
                    mapLink: 'Yanaka Ginza, Taito City, Tokyo'
                }
            }
        ],
        evening: [
            {
                time: '5:15 PM',
                title: 'Transit to Akihabara',
                description: 'Nippori → Akihabara (Future Tokyo arrives!)',
                details: {
                    from: 'Nippori Station (3-5 min walk from end of Yanaka Ginza)',
                    to: 'Akihabara Station',
                    route: 'JR Yamanote Line OR JR Keihin-Tohoku Line (both direct, no transfers)',
                    frequency: 'Every 5 minutes',
                    duration: '7-10 minutes',
                    cost: '~¥140',
                    arrival: 'Akihabara by 5:30 PM - neon lights turning on as dusk arrives!',
                    why: '🌃 PERFECT TIMING: Arriving at Akihabara as the sun sets means you experience "Electric Town" at its most impressive - vibrant neon signage illuminating the streets.',
                    tips: 'Walk 3-5 min from Yanaka Ginza to Nippori Station • Use Electric Town Exit at Akihabara for immediate Radio Kaikan access'
                }
            },
            {
                time: '5:30 PM',
                title: 'Akihabara Future Tokyo Hit List',
                description: 'Neon lights, anime merch, arcades & electronics - Electric Town!',
                location: 'Akihabara District',
                details: {
                    area: 'Akihabara - "Electric Town" (Future Tokyo)',
                    duration: '3.5 hours (5:30 PM - 9:00 PM)',
                    vibe: 'High-energy, futuristic, sensory overload - neon lights, sounds, pop culture!',
                    shops: [
                        {
                            name: '1. CAT CAFE MOCHA (Akihabara Store) ⭐',
                            highlight: '28 resident cats including exotic breeds • Log house-style retreat • Feeding time shows (10:30 AM & 7:30 PM) • Spacious playrooms with artificial tree structures',
                            hours: '10:00 AM - 9:00 PM daily (Last entry 8:30 PM) • Open year-round, no reservation required',
                            address: 'Akihabara SIL Building 2F, 4-4-3 Sotokanda, Chiyoda-ku, Tokyo 101-0021',
                            walk: '5 min from JR Akihabara Station Denkigai Exit (building has Carl\'s Jr. on ground floor)',
                            mapLink: 'Cat Cafe MOCHA Akihabara, 4-4-3 Sotokanda, Chiyoda City, Tokyo 101-0021'
                        },
                        {
                            name: '2. Yodobashi-Akiba ⭐⭐⭐ PRIORITY',
                            highlight: '9-floor electronics fortress • Floors 1-6: Tech/cameras/games • Floor 8: 30 restaurants • Floor 9: Batting center',
                            hours: '9:30 AM - 10:00 PM daily • ☎️ 03-5209-1010',
                            address: '1-1 Kanda Hanaokacho, Chiyoda City, Tokyo 101-0028',
                            walk: '1 min from Akihabara Station (directly connected)',
                            mapLink: 'Yodobashi Camera Multimedia Akiba, 1-1 Kanda Hanaokacho, Chiyoda City, Tokyo 101-0028'
                        },
                        {
                            name: '3. @home cafe (Main Branch) ⭐',
                            highlight: 'Iconic maid cafe experience • Birthplace of "Moe Moe Kyun" • Est. 2004, 10+ million visits • Inside Don Quijote building • Classic maid cafe culture',
                            hours: 'Mon-Fri 11:00 AM - 10:00 PM • Sat-Sun 10:00 AM - 10:00 PM',
                            address: '5F AKIBA Cultures Zone (inside Don Quijote), 1-7-6 Sotokanda, Chiyoda-ku, Tokyo 101-0021',
                            walk: '2 min from Akihabara Station',
                            mapLink: '@home cafe Akihabara, 1-7-6 Sotokanda, Chiyoda City, Tokyo 101-0021'
                        },
                        {
                            name: '4. Chuo Dori (Central Street)',
                            highlight: 'Main street through Akihabara • Massive neon signs • Best viewing at night • Light trails',
                            hours: 'Best after 6:00 PM (dusk/night for full neon effect)',
                            address: 'Chuo Dori, runs north-south from Akihabara Station',
                            walk: 'Outside station - main street',
                            mapLink: 'Chuo Dori, Akihabara, Chiyoda City, Tokyo'
                        },
                        {
                            name: '5. GiGO Akihabara Building 3 ⭐',
                            highlight: '6th Floor RETRO:G • Multi-floor arcade • Rhythm games (DDR, Maimai) • Racing games • 90s retro classics',
                            hours: '10:00 AM - 11:30 PM daily',
                            address: '1 Chome-11-11 Sotokanda, Chiyoda City, Tokyo',
                            walk: '5-7 min from Akihabara Station',
                            mapLink: 'GiGO Akihabara Building 3, 1 Chome-11-11 Sotokanda, Chiyoda City, Tokyo'
                        },
                        {
                            name: '6. Radio Kaikan ⭐⭐ (OTAKU PRIORITY)',
                            highlight: '11-floor otaku paradise • THE hub for anime figures, manga, models, and merch • K-Books, Volks, AmiAmi (new & second-hand figures, hobby goods)',
                            hours: 'Varies by shop (most 10:00 AM - 8:00 PM)',
                            address: '1-15-16 Sotokanda, Chiyoda City, Tokyo',
                            walk: 'Immediately visible when exiting Electric Town Exit - iconic Akihabara landmark',
                            mapLink: 'Radio Kaikan, 1-15-16 Sotokanda, Chiyoda City, Tokyo',
                            note: '🎯 EXPERT PRIORITY: This is the single best stop for anime/manga merch and figures. A thorough visit requires 2-4 hours, but even a 45-min "blitz" captures the essence of Akihabara otaku culture.'
                        },
                        {
                            name: '7. Akihabara Gachapon Hall',
                            highlight: 'Capsule toy paradise • ~500 gashapon vending machines • Unique souvenirs • Bring 100-yen coins!',
                            hours: '11:00 AM - 8:00 PM daily',
                            address: '3-15-5 Sotokanda, Chiyoda City, Tokyo',
                            walk: '5-7 min walk from Akihabara Station',
                            mapLink: 'Akihabara Gachapon Hall, 3-15-5 Sotokanda, Chiyoda City, Tokyo',
                            note: 'Small venue, will be crowded on Sunday evening. Budget 30 minutes. Essential Akihabara experience!'
                        }
                    ],
                    strategy: 'FLEXIBLE HIT LIST - Choose 2-3 experiences based on energy: Radio Kaikan (anime merch priority) • Yodobashi-Akiba (electronics) • @home cafe (maid experience - check booking) • Cat Cafe MOCHA (7:30 PM feeding time, no reservations) • Gachapon Hall (quick souvenir stop) • GiGO arcade (gaming atmosphere) • Chuo Dori neon walk',
                    note: '⚠️ 3.5 hours is NOT enough for everything. Prioritize based on interests. @home cafe offers priority booking online. Cat Cafe has no reservations - 7:30 PM feeding time may require queue on Sunday.',
                    taxFree: 'Bring passport for tax-free electronics shopping at Yodobashi',
                    mapLink: 'Akihabara Station, Chiyoda City, Tokyo'
                }
            },
            {
                time: '8:30 PM',
                title: 'Dinner in Akihabara',
                description: 'Choose your Akihabara dining experience',
                location: 'Akihabara Area',
                isFoodOption: false,
                details: {
                    area: 'Akihabara - walking distance from Yodobashi/arcade',
                    duration: '30-45 min',
                    shops: [
                        {
                            name: '1. Yodobashi Floor 8 (CONVENIENT)',
                            highlight: '30 restaurants inside Yodobashi • Various cuisines • No extra travel needed',
                            hours: '11:00 AM - 10:00 PM',
                            address: '8F Yodobashi-Akiba',
                            walk: 'Inside Yodobashi building',
                            mapLink: 'Yodobashi-Akiba Floor 8 Restaurants'
                        },
                        {
                            name: '2. Kyushu Jangara (Ramen)',
                            highlight: 'Mild tonkotsu ramen • 40 years in Akihabara • ¥800-1,200',
                            hours: '11:30 AM - 10:00 PM • ☎️ 03-3251-4059',
                            address: '3-11-6 Sotokanda, Chiyoda-ku, Tokyo',
                            walk: '5 min from station',
                            mapLink: 'Kyushu Jangara Akihabara, 3-11-6 Sotokanda, Chiyoda-ku, Tokyo'
                        },
                        {
                            name: '3. Yakiniku Motoyama (Japanese BBQ)',
                            highlight: 'High-quality yakiniku • Est. 1975 • Exclusively Japanese beef • ¥3,000-5,000',
                            hours: 'Dinner 4:00 PM - 11:00 PM daily',
                            address: '3-34-3 Kandasakuma-cho, Chiyoda-ku, Tokyo',
                            walk: '7 min from station',
                            mapLink: 'Yakiniku Motoyama, 3-34-3 Kandasakuma-cho, Chiyoda-ku, Tokyo'
                        },
                        {
                            name: '4. Roast Beef Don (Donburi)',
                            highlight: 'Roast beef rice bowl • Quick & affordable • ¥1,000-1,500',
                            hours: 'Mon-Sat 11:00 AM-11:00 PM, Sun 11:00 AM-10:00 PM • ☎️ 03-3254-7355',
                            address: '1-8-14 Sotokanda, Chiyoda-ku, Tokyo',
                            walk: '3 min from station',
                            mapLink: 'Roast Beef Don, 1-8-14 Sotokanda, Chiyoda-ku, Tokyo'
                        }
                    ],
                    strategy: 'Yodobashi Floor 8 for convenience OR Jangara ramen for quick authentic meal',
                    note: 'All options within 5-10 min of station'
                }
            },
            {
                time: '9:00 PM',
                title: 'Return to Ginza Hotel',
                description: 'Akihabara → Ginza (end of East Tokyo Time Travel)',
                details: {
                    from: 'Akihabara Station',
                    to: 'Yurakucho/Ginza (near hotel)',
                    route: 'JR Yamanote Line to Yurakucho (6 min) OR Hibiya Line 1 stop to Tsukiji',
                    duration: '15-20 minutes total to hotel',
                    cost: '~¥140-280',
                    arrival: 'Hotel by 9:30 PM',
                    vibe: 'Perfect ending - Old Tokyo → Retro Tokyo → Future Tokyo → Back to modern Ginza',
                    dayComplete: 'East Tokyo Time Travel complete! 🗼🌅💡'
                }
            }
        ]
    };
