# Tokyo Trip Planner - Quick Edit Guide for LLMs

## 🎯 MOST COMMON TASK: Update Daily Itinerary

**To edit a specific day's itinerary:**
1. Open `data/days/day-X.js` (where X = 1-8)
2. Modify the activities in `morning`, `afternoon`, or `evening` arrays
3. Save - that's it!

**Example:** To change Day 3's lunch plans:
- File: `data/days/day-3.js`
- Look for the `afternoon` array
- Edit the activity object

## 📂 File Guide - Where to Edit What

| What to Update | File to Open | Notes |
|----------------|-------------|-------|
| **Day 1-8 activities** | `data/days/day-1.js` through `day-8.js` | Each day is self-contained |
| **Hotel info** | `data/trip-info.js` | Hotel section at top |
| **Flight details** | `data/trip-info.js` | Flights section |
| **Tickets/vouchers** | `data/trip-info.js` | ticketsVouchers array |
| **Restaurants/cafes** | `data/food-options.js` | foodOptions array |
| **UI/styling** | `app.js`, `styles.css` | Rarely needs changes |

## 🚫 What NOT to Edit

- `index.html` - HTML structure (already set up)
- `app.js` - UI logic (only touch if changing functionality)
- `styles.css` - Styling (only touch if changing design)

## 📝 Activity Data Structure

When adding/editing activities in day files:

```javascript
{
    time: '2:00 PM',
    title: 'Activity Name',
    description: 'Brief summary',
    location: 'Venue Name',  // Optional - adds Maps button
    details: {
        // Any relevant info here
        tips: 'Helpful notes',
        ticketLink: 'https://...'  // Optional - adds Ticket button
    }
}
```

## 🏗️ Project Architecture

```
DATA FILES (edit these):
  data/trip-info.js       - Hotel, flights, tickets
  data/food-options.js    - All restaurants
  data/days/day-X.js      - Individual day itineraries

UI FILES (don't touch unless changing design):
  app.js                  - JavaScript UI logic
  styles.css              - Styling
  index.html              - HTML structure
```

## 💡 Quick Examples

**Add a new activity to Day 4:**
```javascript
// Open: data/days/day-4.js
// Find: afternoon: [
// Add:
{
    time: '3:00 PM',
    title: 'New Museum Visit',
    description: 'Art museum in Roppongi',
    location: 'Mori Art Museum',
    details: {
        address: '6-10-1 Roppongi, Minato City, Tokyo',
        hours: '10:00 AM - 10:00 PM',
        admission: '¥2,000',
        tips: 'Amazing city views from 52F observation deck'
    }
}
```

**Update hotel checkout time:**
```javascript
// Open: data/trip-info.js
// Find: hotel: {
// Change: checkOut: '11:00 AM' → checkOut: '12:00 PM'
```

**Add a new restaurant:**
```javascript
// Open: data/food-options.js
// Find: export const foodOptions = [
// Add new object to array
```

---

See `DATA-STRUCTURE.md` for more detailed documentation.
