// ═══════════════════════════════════════════════════════════════════════════
// FOOD OPTIONS - Restaurant & Cafe Reference Library
// ═══════════════════════════════════════════════════════════════════════════
// Quick edit: Add/remove restaurants or update details in the foodOptions array
// ═══════════════════════════════════════════════════════════════════════════
/*
 * PURPOSE: Reference library of ALL restaurants/cafes throughout trip
 * ACCESS: Via "Food Options" button (grouped by meal type: Breakfast/Lunch/Dinner/Cafes)
 *
 * LINKING TO DAYS:
 * - Add restaurant here to centralized foodOptions array
 * - Link to specific day by creating food option activity with:
 *   isFoodOption: true
 *   foodType: 'breakfast' | 'lunch' | 'dinner' | 'cafe'
 *
 * CONTEXTUAL vs CENTRALIZED:
 * - Day-specific food cards show ONLY relevant options (e.g., near Tokyo Station after Karuizawa)
 * - Centralized view shows ALL options for entire trip
 * - This prevents overwhelming daily itinerary with irrelevant choices
 *
 * COLOR CODING: Orange gradient cards in daily view
 *
 * ICONS: 🍜 ramen | 🍣 sushi | ☕ cafe | 🍔 burgers | 🥗 healthy | 🍰 dessert
 *
 * REQUIRED FIELDS:
 * - type: 'breakfast' | 'lunch' | 'dinner' | 'cafe'
 * - name: Restaurant name
 * - cuisine: Type of food
 * - location: Descriptive location (e.g., "GranTokyo South Tower B1")
 * - address: Full address for Google Maps
 * - hours: Operating hours
 * - priceRange: Price range (e.g., "¥1,000-1,500")
 * - icon: Emoji representing cuisine type
 *
 * OPTIONAL FIELDS:
 * - area: General area (e.g., "Tokyo Station", "Ginza")
 * - distance: Walking distance from landmark
 * - phone: Phone number for reservations
 * - halal: true/false - shows green badge if true
 * - certification: Halal certification details
 * - specialty: Signature dish or highlight
 * - tips: Additional notes (e.g., "Perfect after Karuizawa")
 *
 * ACTION BUTTONS:
 * - Photos: Opens Google Images search
 * - Navigate: Google Maps directions
 * - Call: Direct phone link (if phone provided)
 */

export const foodOptions = [
    {
        type: 'dinner',
        name: 'Mǎzilù Lanzhou Beef Noodles',
        cuisine: 'Halal Chinese Ramen',
        location: 'GranTokyo South Tower B1, Tokyo Station',
        area: 'Tokyo Station',
        distance: '3 min walk from Yaesu South exit',
        address: '1-9-2 Marunouchi, Chiyoda-ku, Tokyo',
        phone: '+81-3-6268-0323',
        hours: 'Lunch: 11:00-16:00 | Dinner: 17:00-22:30 (Sun/Holiday until 21:30)',
        priceRange: '¥1,000-1,500',
        halal: true,
        certification: 'NAHA certified, Crescentrating AAA',
        specialty: 'Authentic Lanzhou hand-pulled beef noodles',
        tips: 'Halal certified Chinese ramen. Perfect after returning from Karuizawa. Famous for hand-pulled noodles.',
        icon: '🍜'
    },
    {
        type: 'dinner',
        name: 'Kuta Bali Cafe Harajuku',
        cuisine: 'Indonesian (Halal)',
        location: 'Le Ponte Building, near Harajuku Station',
        area: 'Harajuku',
        distance: '1 min walk from Harajuku Station',
        address: 'Le Ponte Building, Jingumae, Shibuya-ku, Tokyo',
        hours: 'Daily: 11:00-22:00',
        priceRange: '¥1,200-2,000',
        halal: true,
        certification: 'Halal certified, Prayer room (mushola) available',
        specialty: 'Nasi Campur, Ayam Sambal Matah, Ikan Gurame',
        tips: 'Opened Sept 2024. Perfect after Harajuku vintage shopping. Prayer room available for Muslim travelers.',
        icon: '🍛'
    },
    {
        type: 'dinner',
        name: 'Kebab Box J',
        cuisine: 'Turkish (Halal)',
        location: 'Harajuku area',
        area: 'Harajuku',
        address: 'Harajuku, Shibuya-ku, Tokyo',
        hours: 'Daily: 11:00-23:00',
        priceRange: '¥800-1,500',
        halal: true,
        specialty: 'Generous doner kebabs (chicken/beef/mixed) with toasted pita bread',
        tips: 'Famous for large portions and authentic Turkish flavors. Quick option near vintage shops.',
        icon: '🥙'
    },
    {
        type: 'dinner',
        name: 'Milan Nataraj',
        cuisine: 'Indian/Asian (Halal options)',
        location: 'Shibuya district',
        area: 'Shibuya',
        address: 'Shibuya, Shibuya-ku, Tokyo',
        hours: 'Daily: 11:00-22:30',
        priceRange: '¥1,000-2,000',
        halal: true,
        specialty: 'Authentic Indian vegetarian dishes, halal options available',
        tips: 'Long-established vegetarian restaurant with halal choices. Good for diverse dietary needs.',
        icon: '🍛'
    }
    // ADD NEW FOOD OPTIONS ABOVE THIS LINE
];
