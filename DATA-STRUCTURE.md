# Tokyo Trip - Modular Data Structure

## Quick Start: How to Edit the Itinerary

### Edit a Specific Day
1. Open `data/days/day-X.js` (where X is 1-8)
2. Find the section you want to change (morning, afternoon, evening)
3. Edit the data
4. Save the file
5. Refresh the website - done!

### Edit Hotel or Flight Info
- Open `data/trip-info.js`
- Update hotel, flights, or tickets sections
- Save and refresh

### Edit Restaurant Options
- Open `data/food-options.js`
- Add, remove, or update restaurants
- Save and refresh

## File Structure

```
alibeydoun_au/
├── index.html              # Main HTML (rarely needs editing)
├── styles.css              # Styling (rarely needs editing)
├── app.js                  # UI logic (don't edit unless changing functionality)
├── app-old.js              # Backup of old monolithic file
└── data/
    ├── trip-info.js        # Hotel, flights, tickets, vouchers
    ├── food-options.js     # All restaurants and cafes
    └── days/
        ├── day-1.js        # Travel day (Sydney → Tokyo)
        ├── day-2.js        # Day 1 in Tokyo
        ├── day-3.js        # Day 2 in Tokyo
        ├── day-4.js        # Day 3 in Tokyo
        ├── day-5.js        # Day 4 in Tokyo
        ├── day-6.js        # Day 5 in Tokyo
        ├── day-7.js        # Day 6 in Tokyo
        └── day-8.js        # Travel day (Tokyo → Sydney)
```

## Benefits of This Structure

✅ **Easy to Find**: Each day in its own file
✅ **Quick Edits**: Open one small file instead of scrolling through 2,800+ lines
✅ **Clear Changes**: Git diffs show exactly which day changed
✅ **Modular**: Add/remove/reorder days without touching other code
✅ **Maintainable**: Data separated from UI logic

## Example: Adding an Activity

Open `data/days/day-3.js`:

```javascript
afternoon: [
    {
        time: '2:00 PM',
        title: 'New Activity',
        description: 'Brief description',
        location: 'Venue Name',  // Optional - adds Maps button
        details: {
            address: 'Full address here',
            tips: 'Helpful notes',
            ticketLink: 'https://...'  // Optional - adds Ticket button
        }
    }
]
```

Save, refresh - the new activity appears!

## File Naming

Files are named generically (`day-1`, `day-2`, etc.) so if you change what happens on a day, the filename still makes sense. Day numbers match the order of your trip, not the content.

## Backup

- `app-old.js` contains the original monolithic version
- If anything goes wrong, you can restore from this file
