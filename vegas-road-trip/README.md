# Vegas Road Trip Itinerary

Interactive day-by-day itinerary for the California to Vegas road trip, December 24-29, 2024.

## 🗺️ Route Overview

- **Day 1 (Dec 24):** San Jose → Monterey/Carmel → Bakersfield
- **Day 2 (Dec 25):** Bakersfield → Las Vegas
- **Day 3 (Dec 26):** Hoover Dam → Red Rock Canyon → Fremont Street
- **Day 4 (Dec 27):** Death Valley or Valley of Fire
- **Day 5 (Dec 28-29):** Death Valley exploration or return home

## 🎯 Features

- Day-by-day navigation
- Google Maps links for all locations
- Phone numbers for restaurants and attractions
- Reservation links for dining and activities
- Coffee recommendations
- Scenic stops and photo opportunities
- Tips and insider information

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## 📱 Deployment to AWS Amplify

This project is designed to be deployed to AWS Amplify as part of the webpages-portfolio repository.

### Setup Instructions:

1. **Create a new folder in your repo:**
   ```bash
   cd webpages-portfolio
   mkdir vegas-road-trip
   ```

2. **Copy these files into the `vegas-road-trip` folder:**
   - All files from this project

3. **Commit and push to GitHub:**
   ```bash
   git add vegas-road-trip/
   git commit -m "Add Vegas road trip itinerary"
   git push
   ```

4. **Deploy to Amplify:**
   - Go to AWS Amplify Console
   - Create a new app
   - Connect to your GitHub repo
   - Set build settings:
     - **Base directory:** `vegas-road-trip`
     - **Build command:** `npm run build`
     - **Build output directory:** `build`

5. **Your app will be live at:** `https://[your-app-id].amplifyapp.com`

## 🎨 Customization

The itinerary is fully customizable. Edit `src/VegasRoadTrip.jsx` to:
- Add/remove locations
- Update phone numbers and addresses
- Modify recommendations
- Change color themes
- Add new days or sections

## 📋 Pre-Trip Checklist

Before you go:
- [ ] Book Death Valley hotel (if doing that option)
- [ ] Reserve SlotZilla zipline tickets
- [ ] Make restaurant reservations (Lotus of Siam, Esther's Kitchen, Hell's Kitchen)
- [ ] Confirm Ramada Bakersfield and Venetian Vegas bookings
- [ ] Download offline maps for Death Valley

## 🛠️ Built With

- React 18
- Tailwind CSS
- Lucide React (icons)
- Create React App

## 📞 Emergency Contacts

- Emergency: 911
- Death Valley Park Rangers: (760) 786-3200
- Nevada Highway Patrol: *NHP (*647)
- The Venetian Concierge: (702) 414-1000

---

Safe travels! 🚗✨
