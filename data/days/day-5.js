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
                time: '10:00 AM',
                title: 'Depart for Asakusa',
                description: 'Transit from Ginza hotel to Traditional Tokyo',
                details: {
                    from: 'Hotel Keihan Tsukiji Ginza Grande',
                    to: 'Asakusa Station',
                    route: 'Walk to Tsukiji Station (2 min) → Hibiya Line to Higashi-Ginza → Transfer to Toei Asakusa Line → Asakusa',
                    totalTime: '~25-30 minutes',
                    cost: '~¥200-300 (Suica/Pasmo)',
                    arrival: 'Arrive Asakusa by 10:30 AM',
                    tips: 'Use Exit 1 for direct access to Kaminarimon Gate'
                }
            },
            {
                time: '10:30 AM',
                title: 'Asakusa Traditional Tokyo Hit List',
                description: 'Historic temple, traditional market street & iconic snacks',
                location: 'Asakusa District',
                details: {
                    area: 'Asakusa - Tokyo\'s most famous traditional neighborhood',
                    duration: '3 hours (10:30 AM - 1:30 PM)',
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
                            mapLink: 'Tempura Daikokuya, 1-38-10 Asakusa, Taito City, Tokyo 111-0032'
                        },
                        {
                            name: '2. Unagi Irokawa (Color River)',
                            highlight: 'Michelin Bib Gourmand • Est. 1861 • Unadon • Binchotan charcoal grilled • 12 seats only',
                            hours: '11:30 AM - 2:00 PM daily • ☎️ Check locally',
                            address: '2-6-11 Kaminarimon, Taito-ku, Tokyo 111-0034',
                            walk: '1 min from Asakusa Station A1 exit',
                            mapLink: 'Unagi Irokawa, 2-6-11 Kaminarimon, Taito-ku, Tokyo 111-0034'
                        },
                        {
                            name: '3. Asakusa Unana (Budget-Friendly)',
                            highlight: 'Grilled onigiri topped with unagi • Sansho pepper glaze • ¥600 per onigiri',
                            hours: '9:30 AM - 5:30 PM • Sat/Sun until 6:30 PM (until sold out)',
                            address: '2-7-21 Asakusa, Taito City',
                            walk: 'Near Senso-ji',
                            mapLink: 'Asakusa Unana, 2-7-21 Asakusa, Taito City, Tokyo'
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
                    strategy: 'Daikokuya for tendon perfection OR Irokawa for intimate unagi experience. Unana if budget-conscious.',
                    note: 'All within 1-2 min of Senso-ji. Expect lines at Daikokuya (worth it!).'
                }
            }
        ],
        afternoon: [
            {
                time: '1:45 PM',
                title: 'Transit to Yanaka',
                description: 'Asakusa → Nippori Station (Retro Tokyo)',
                details: {
                    from: 'Asakusa Station',
                    to: 'Nippori Station',
                    route: 'Toei Asakusa Line or bus (transfer at Ueno area)',
                    alternative: 'Toei Bus every 15 min',
                    duration: '~15 minutes',
                    cost: '~¥170-200',
                    arrival: 'Nippori Station by 2:00 PM',
                    tips: 'Use West Exit of Nippori for direct access to Yuyake Dandan'
                }
            },
            {
                time: '2:30 PM',
                title: 'Yanaka Retro Tokyo Hit List',
                description: 'Sunset Steps, 1950s shotengai, street food & cemetery walk',
                location: 'Yanaka Ginza',
                details: {
                    area: 'Yanaka - Retro Showa-era "shitamachi" (old downtown Tokyo)',
                    duration: '3 hours (2:30 PM - 5:30 PM)',
                    vibe: 'Relaxed, charming, local "old school" neighborhood feel',
                    sunsetTime: '🌅 Sunset at 4:28 PM - PERFECT TIMING for Yuyake Dandan!',
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
                    strategy: 'Yuyake Dandan view → Browse Yanaka Ginza for menchi katsu → Catch sunset at ~4:28 PM from steps → Cemetery peaceful walk',
                    cashNote: '💴 Yanaka is cash-heavy - bring yen! Small shops may not take cards.',
                    mapLink: 'Yanaka Ginza, Taito City, Tokyo'
                }
            }
        ],
        evening: [
            {
                time: '5:45 PM',
                title: 'Transit to Akihabara',
                description: 'Nippori → Akihabara (Future Tokyo arrives!)',
                details: {
                    from: 'Nippori Station',
                    to: 'Akihabara Station',
                    route: 'JR Yamanote Line (direct, no transfers)',
                    frequency: 'Every 5 minutes',
                    duration: '7 minutes',
                    cost: '~¥140-280',
                    arrival: 'Akihabara by 6:00 PM - neon lights turning on!',
                    tips: 'Use Showa-dori exit for direct connection to Yodobashi-Akiba'
                }
            },
            {
                time: '6:00 PM',
                title: 'Akihabara Future Tokyo Hit List',
                description: '9-floor electronics, neon streets & arcades - Electric Town!',
                location: 'Akihabara District',
                details: {
                    area: 'Akihabara - "Electric Town" (Future Tokyo)',
                    duration: '3 hours (6:00 PM - 9:00 PM)',
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
                        }
                    ],
                    strategy: 'Cat Cafe MOCHA for cat time → Yodobashi-Akiba (1.5 hours browsing all 9 floors) → @home cafe maid experience → Chuo Dori neon walk → GiGO arcade',
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
