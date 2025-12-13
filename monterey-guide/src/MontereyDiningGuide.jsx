import React, { useState, useEffect } from 'react';
import { Coffee, Sun, Moon, Sunset, MapPin, Clock, Star, Heart, Music, Phone, ExternalLink, Wine, Footprints, ShoppingBag } from 'lucide-react';

const MontereyDiningGuide = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedView, setSelectedView] = useState('dining');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour < 11) return 'morning';
    if (hour < 15) return 'lunch';
    if (hour < 18) return 'afternoon';
    if (hour < 21) return 'dinner';
    return 'evening';
  };

  const getGreeting = () => {
    const timeOfDay = getTimeOfDay();
    const greetings = {
      morning: { 
        icon: Coffee, 
        text: "Good morning, Suraj & Ridhima",
        subtitle: "Time for pastries and coffee",
        color: "from-amber-50 to-orange-50"
      },
      lunch: { 
        icon: Sun, 
        text: "Hey there, Suraj & Ridhima",
        subtitle: "Perfect timing for a leisurely lunch",
        color: "from-yellow-50 to-amber-50"
      },
      afternoon: { 
        icon: Sun, 
        text: "Good afternoon, you two",
        subtitle: "Snack time or early dinner planning?",
        color: "from-orange-50 to-pink-50"
      },
      dinner: { 
        icon: Sunset, 
        text: "Evening, Suraj & Ridhima",
        subtitle: "Time to pick your dinner spot",
        color: "from-purple-50 to-pink-50"
      },
      evening: { 
        icon: Moon, 
        text: "Good evening",
        subtitle: "Late dinner or nightcap?",
        color: "from-indigo-50 to-purple-50"
      }
    };
    return greetings[timeOfDay];
  };

  const restaurants = {
    topPicks: [
      {
        name: "La Bicyclette",
        location: "Carmel",
        address: "Dolores & 7th Ave, Carmel-by-the-Sea, CA 93921",
        mapUrl: "https://maps.google.com/?q=La+Bicyclette+Carmel",
        phone: "(831) 622-9899",
        type: "European Bistro",
        highlight: "Local photographer's go-to after beach walks",
        vibe: "Quirky Paris vibes, wood-fired everything",
        perfect: "Seasonal menu changes daily, incredible mushroom app",
        mustTry: "Stellar pizzas, duck confit, tarte Tatin",
        price: "$$",
        michelin: true,
        reservation: "Recommended",
        bestFor: ["lunch", "dinner", "morning"]
      },
      {
        name: "Toro Sushi",
        location: "Carmel",
        address: "Dolores St, Carmel-by-the-Sea, CA 93921",
        mapUrl: "https://maps.google.com/?q=Toro+Sushi+Carmel",
        phone: "(831) 238-8304",
        type: "Japanese Sushi",
        highlight: "Local's absolute favorite: 'MY FAVORITE!'",
        vibe: "Cozy, authentic, sake flights",
        perfect: "Small perfected menu, NOT nigiri-focused",
        mustTry: "Seared salmon roll, seared Carmel roll, smoked green tea",
        price: "$$",
        reservation: "Recommended",
        bestFor: ["lunch", "dinner"]
      },
      {
        name: "Dametra Cafe",
        location: "Carmel",
        address: "Ocean Ave & Lincoln St, Carmel-by-the-Sea, CA 93921",
        mapUrl: "https://maps.google.com/?q=Dametra+Cafe+Carmel",
        phone: "(831) 622-7766",
        type: "Mediterranean",
        highlight: "Singing chefs & spontaneous dancing",
        vibe: "Like a Lebanese night in Beirut, fun & lively",
        perfect: "Live music Saturday, family-owned Syrian spot",
        mustTry: "Lamb shank, moussaka, Greek starter plate",
        price: "$$",
        reservation: "Recommended",
        bestFor: ["dinner", "evening"],
        liveMusic: "Saturday nights"
      },
      {
        name: "Cibo Ristorante",
        location: "Downtown Monterey",
        address: "301 Alvarado St, Monterey, CA 93940",
        mapUrl: "https://maps.google.com/?q=Cibo+Ristorante+Italiano+Monterey",
        phone: "(831) 649-8151",
        type: "Italian + Jazz",
        highlight: "Live jazz 6 nights/week, no cover",
        vibe: "Intimate yet vibrant, art-filled space",
        perfect: "Sunday jazz 7-10pm, Saturday R&B/funk/dance 10pm-1:30am",
        mustTry: "House-made pasta, sustainable seafood, gourmet pizzas",
        price: "$$",
        reservation: "Recommended",
        bestFor: ["dinner", "evening"],
        liveMusic: "Sunday 7-10pm"
      }
    ],
    special: [
      {
        name: "Stokes Adobe",
        location: "Downtown Monterey",
        address: "500 Hartnell St, Monterey, CA 93940",
        mapUrl: "https://maps.google.com/?q=Stokes+Adobe+Monterey",
        phone: "(831) 373-1110",
        type: "California-French",
        highlight: "Locals say: 'GREAT! Adorable inside, all apps wonderful'",
        vibe: "Historic adobe, elegant without pretension",
        mustTry: "Fresh fish, creative cocktails",
        price: "$$$",
        reservation: "Recommended",
        bestFor: ["dinner"]
      },
      {
        name: "Tarpy's Roadhouse",
        location: "Monterey",
        address: "2999 Monterey-Salinas Hwy, Monterey, CA 93940",
        mapUrl: "https://maps.google.com/?q=Tarpy's+Roadhouse+Monterey",
        phone: "(831) 647-1444",
        type: "Elevated American",
        highlight: "Locals' absolute favorite, excellent lamb",
        vibe: "Lovely setting, casual-elegant",
        mustTry: "Steaks, seasonal dishes",
        price: "$$",
        reservation: "Recommended",
        bestFor: ["lunch", "dinner"]
      },
      {
        name: "Casanova",
        location: "Carmel",
        address: "5th Ave, Carmel-by-the-Sea, CA 93921",
        mapUrl: "https://maps.google.com/?q=Casanova+Restaurant+Carmel",
        phone: "(831) 625-0501",
        type: "French/Italian",
        highlight: "Old world charm since 1958",
        vibe: "Romantic courtyards, feels like European villa",
        mustTry: "Duck confit, escargot, excellent wine list",
        price: "$$$",
        reservation: "Recommended",
        bestFor: ["dinner"]
      }
    ],
    new: [
      {
        name: "Ad Astra Bread Co.",
        location: "Monterey",
        address: "598 Foam St, Monterey, CA 93940",
        mapUrl: "https://maps.google.com/?q=Ad+Astra+Bread+Co+Monterey",
        phone: "(831) 324-5652",
        type: "Bakery/Cafe",
        highlight: "Ex-French Laundry pastry chef",
        vibe: "Gorgeous space, watch bakers work",
        mustTry: "Olive sourdough, date cake w/ miso caramel, tahini croissant",
        price: "$",
        reservation: "Walk-in friendly",
        bestFor: ["morning", "lunch"]
      },
      {
        name: "Jeju Kitchen",
        location: "Carmel",
        address: "The Barnyard Shopping Village, Carmel, CA 93923",
        mapUrl: "https://maps.google.com/?q=Jeju+Kitchen+Carmel",
        phone: "(831) 250-7816",
        type: "Korean",
        highlight: "Just opened, great arancini, beef bowl",
        vibe: "New option - bring layers (runs cold)",
        mustTry: "Beef bowl, arancini balls",
        price: "$$",
        reservation: "Walk-in friendly",
        bestFor: ["lunch", "dinner"]
      }
    ]
  };

  const activities = {
    walks: [
      {
        name: "Monterey Bay Coastal Trail",
        location: "Monterey",
        description: "Flat, paved path running right past your hotel. Perfect for easy sunset strolls.",
        duration: "20 min - 1 hour",
        mapUrl: "https://maps.google.com/?q=Monterey+Bay+Coastal+Recreation+Trail",
        effort: "Easy"
      },
      {
        name: "Carmel Beach",
        location: "Carmel",
        description: "Iconic white sand beach. Walk, sit, watch the sunset. Dog-friendly.",
        duration: "30 min - 1 hour",
        mapUrl: "https://maps.google.com/?q=Carmel+Beach",
        effort: "Easy"
      },
      {
        name: "Ocean Avenue (Downtown Carmel)",
        location: "Carmel",
        description: "Charming village streets, art galleries, boutique shops. Walkable fairytale town.",
        duration: "1-2 hours",
        mapUrl: "https://maps.google.com/?q=Ocean+Avenue+Carmel",
        effort: "Easy"
      },
      {
        name: "Lover's Point Park",
        location: "Pacific Grove",
        description: "Romantic coastal park with benches overlooking the bay. Perfect sunset spot.",
        duration: "30 min",
        mapUrl: "https://maps.google.com/?q=Lovers+Point+Park+Pacific+Grove",
        effort: "Easy"
      },
      {
        name: "Point Lobos State Reserve",
        location: "15 min south of Carmel",
        description: "The 'Crown Jewel' of state parks. Easy scenic walks, dramatic coastline.",
        duration: "1-2 hours",
        mapUrl: "https://maps.google.com/?q=Point+Lobos+State+Natural+Reserve",
        effort: "Easy to Moderate"
      }
    ],
    wine: [
      {
        name: "A Taste of Monterey",
        location: "Cannery Row (steps from hotel)",
        description: "Multiple local wineries, bay views. Perfect for casual afternoon tasting.",
        mapUrl: "https://maps.google.com/?q=A+Taste+of+Monterey+Cannery+Row",
        phone: "(831) 646-5446"
      },
      {
        name: "Bargetto Winery",
        location: "Cannery Row",
        description: "Historic Santa Cruz Mountains winery with tasting room on the water.",
        mapUrl: "https://maps.google.com/?q=Bargetto+Winery+Cannery+Row",
        phone: "(831) 373-4053"
      },
      {
        name: "The Wine Experience",
        location: "Cannery Row",
        description: "Create your own custom blend. Pairs with charcuterie boards.",
        mapUrl: "https://maps.google.com/?q=The+Wine+Experience+Cannery+Row",
        phone: "(831) 372-9463"
      },
      {
        name: "Carmel Valley Tasting Rooms",
        location: "Carmel Valley Village",
        description: "Multiple tasting rooms in walkable village setting. More relaxed than Napa.",
        mapUrl: "https://maps.google.com/?q=Carmel+Valley+Village",
        phone: null
      }
    ],
    markets: [
      {
        name: "Carmel Farmers Market",
        location: "Barnyard Shopping Village, Carmel",
        description: "Local produce, artisan goods, baked items. Great for morning browsing.",
        when: "Check schedule - typically closed in winter",
        mapUrl: "https://maps.google.com/?q=Carmel+Farmers+Market+Barnyard"
      },
      {
        name: "Old Monterey Marketplace",
        location: "Alvarado Street, Monterey",
        description: "Tuesday afternoons. Local vendors, food, crafts in historic downtown.",
        when: "Tuesdays 4-8pm (if operating in December)",
        mapUrl: "https://maps.google.com/?q=Old+Monterey+Marketplace+Alvarado+Street"
      }
    ]
  };

  const itinerary = {
    saturday: [
      { time: "Morning/Lunch", option: "Ad Astra for pastries + coffee, stroll Monterey waterfront" },
      { time: "Afternoon", option: "Wine tasting on Cannery Row OR walk Ocean Avenue in Carmel" },
      { time: "Dinner 7pm", option: "La Bicyclette (seasonal, wood-fired) OR Dametra (live music)" },
      { time: "Dinner 8pm", option: "Cibo (jazz then dancing)" }
    ],
    sunday: [
      { time: "Brunch 8:30-10:30am", option: "La Bicyclette breakfast (walk-in only, Fri-Sun)" },
      { time: "Late morning", option: "Carmel Beach walk OR Point Lobos nature walk" },
      { time: "Early dinner 5-6pm", option: "Toro (sushi) OR Tarpy's OR Jeju Kitchen, then drive home" }
    ]
  };

  const TimeIcon = getGreeting().icon;
  const greeting = getGreeting();
  const timeOfDay = getTimeOfDay();

  const getRelevantRestaurants = () => {
    return [...restaurants.topPicks, ...restaurants.special, ...restaurants.new]
      .filter(r => r.bestFor.includes(timeOfDay));
  };

  const filteredRestaurants = selectedCategory === 'all' 
    ? [...restaurants.topPicks, ...restaurants.special, ...restaurants.new]
    : selectedCategory === 'now'
    ? getRelevantRestaurants()
    : restaurants[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero */}
      <div className={`bg-gradient-to-r ${greeting.color} border-b border-gray-200`}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <TimeIcon className="w-12 h-12 mb-4 text-gray-700" />
          <h1 className="text-5xl font-light text-gray-900 mb-3 tracking-tight">{greeting.text}</h1>
          <p className="text-xl text-gray-600 mb-6">{greeting.subtitle}</p>
          <div className="flex items-center gap-2 text-gray-500">
            <span>Your Monterey/Carmel Weekend</span>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">Ensure to relax</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* View Toggle */}
        <div className="flex gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setSelectedView('dining')}
            className={`px-6 py-3 font-medium transition-all border-b-2 flex items-center gap-2 ${
              selectedView === 'dining'
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            🍽️ Dining
          </button>
          <button
            onClick={() => setSelectedView('activities')}
            className={`px-6 py-3 font-medium transition-all border-b-2 flex items-center gap-2 ${
              selectedView === 'activities'
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            🚶 Explore
          </button>
          <button
            onClick={() => setSelectedView('itinerary')}
            className={`px-6 py-3 font-medium transition-all border-b-2 flex items-center gap-2 ${
              selectedView === 'itinerary'
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            📅 Itinerary
          </button>
        </div>

        {/* Dining View */}
        {selectedView === 'dining' && (
          <>
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('now')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  selectedCategory === 'now'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Clock className="w-4 h-4" />
                Right Now
              </button>
              <button
                onClick={() => setSelectedCategory('topPicks')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'topPicks'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Top Picks
              </button>
              <button
                onClick={() => setSelectedCategory('new')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'new'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Just Opened
              </button>
            </div>

            {selectedCategory === 'now' && (
              <div className="mb-8 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-200">
                <p className="text-sm text-gray-700">
                  Based on current time ({currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}), 
                  showing restaurants perfect for {timeOfDay}
                </p>
              </div>
            )}

            {filteredRestaurants.length === 0 && selectedCategory === 'now' && (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-light text-gray-900 mb-2">Nothing specific for right now</h3>
                <p className="text-gray-500 mb-6">But honestly, any time is good for wine or a stroll 🍷</p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  See All Options
                </button>
              </div>
            )}

            {filteredRestaurants.length > 0 && (

            <div className="space-y-6">
              {filteredRestaurants.map((restaurant, idx) => (
                <div
                  key={idx}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-gray-900 hover:shadow-lg transition-all bg-white"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors">{restaurant.name}</h3>
                        {restaurant.michelin && (
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        )}
                        {restaurant.liveMusic && (
                          <Music className="w-5 h-5 text-purple-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="px-2 py-1 bg-gray-900 text-white rounded text-xs font-medium">
                          {restaurant.type}
                        </span>
                        <span>{restaurant.location}</span>
                        <span className="text-gray-300">·</span>
                        <span>{restaurant.price}</span>
                        <span className="text-gray-300">·</span>
                        <span className={`text-xs font-medium ${restaurant.reservation === 'Recommended' ? 'text-orange-600' : restaurant.reservation === 'Walk-in friendly' ? 'text-green-600' : 'text-gray-600'}`}>
                          Reservations: {restaurant.reservation}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 italic">"{restaurant.highlight}"</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-400 mb-1 text-xs uppercase tracking-wide">✨ Vibe</p>
                      <p className="text-gray-900">{restaurant.vibe}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1 text-xs uppercase tracking-wide">🎯 Perfect for</p>
                      <p className="text-gray-900">{restaurant.perfect}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1 text-xs uppercase tracking-wide">🍽️ Must try</p>
                      <p className="text-gray-900">{restaurant.mustTry}</p>
                    </div>
                  </div>

                  {restaurant.liveMusic && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                      <span className="text-sm text-purple-900 font-medium">🎵 Live music: {restaurant.liveMusic}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      {restaurant.phone}
                    </a>
                    <a
                      href={restaurant.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                    >
                      <MapPin className="w-4 h-4" />
                      Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            )}
          </>
        )}

        {/* Activities View */}
        {selectedView === 'activities' && (
          <div className="space-y-12">
            {/* Walks */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Footprints className="w-6 h-6 text-gray-700" />
                <h2 className="text-2xl font-light text-gray-900">Walks & Strolls</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6 ml-9">You just got back from India - easy walks only</p>
              <div className="space-y-4">
                {activities.walks.map((walk, idx) => (
                  <div key={idx} className="group border border-gray-200 rounded-xl p-5 hover:border-gray-900 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{walk.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <span>{walk.location}</span>
                          <span className="text-gray-300">·</span>
                          <span>{walk.duration}</span>
                          <span className="text-gray-300">·</span>
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs font-medium">{walk.effort}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{walk.description}</p>
                      </div>
                    </div>
                    <a
                      href={walk.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Wine Tasting */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Wine className="w-6 h-6 text-gray-700" />
                <h2 className="text-2xl font-light text-gray-900">Wine Tasting</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6 ml-9">Several spots within walking distance from your hotel</p>
              <div className="space-y-4">
                {activities.wine.map((winery, idx) => (
                  <div key={idx} className="group border border-gray-200 rounded-xl p-5 hover:border-gray-900 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{winery.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{winery.location}</p>
                    <p className="text-sm text-gray-600 mb-3">{winery.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {winery.phone && (
                        <a
                          href={`tel:${winery.phone}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                        >
                          <Phone className="w-4 h-4" />
                          {winery.phone}
                        </a>
                      )}
                      <a
                        href={winery.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                      >
                        <MapPin className="w-4 h-4" />
                        Directions
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Markets */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                <h2 className="text-2xl font-light text-gray-900">Local Markets</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6 ml-9">Check dates - some may be seasonal</p>
              <div className="space-y-4">
                {activities.markets.map((market, idx) => (
                  <div key={idx} className="group border border-gray-200 rounded-xl p-5 hover:border-gray-900 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{market.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{market.location}</p>
                    <p className="text-sm text-gray-600 mb-2">{market.description}</p>
                    {market.when && (
                      <p className="text-sm text-orange-600 mb-3 italic">⏰ {market.when}</p>
                    )}
                    <a
                      href={market.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Itinerary View */}
        {selectedView === 'itinerary' && (
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-900 transition-all bg-gradient-to-br from-purple-50 to-pink-50">
              <h3 className="text-xl font-light text-gray-900 mb-1">Saturday, December 14</h3>
              <p className="text-sm text-gray-500 mb-6">Arrive, settle in, explore</p>
              <div className="space-y-6">
                {itinerary.saturday.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-32 text-sm font-medium text-purple-700">{item.time}</div>
                    <div className="flex-1 border-l-2 border-purple-200 pl-4">
                      <p className="text-gray-900">{item.option}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-900 transition-all bg-gradient-to-br from-orange-50 to-yellow-50">
              <h3 className="text-xl font-light text-gray-900 mb-1">Sunday, December 15</h3>
              <p className="text-sm text-gray-500 mb-6">Relax, recharge, head home refreshed</p>
              <div className="space-y-6">
                {itinerary.sunday.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-32 text-sm font-medium text-orange-700">{item.time}</div>
                    <div className="flex-1 border-l-2 border-orange-200 pl-4">
                      <p className="text-gray-900">{item.option}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <h4 className="font-medium text-gray-900 mb-4">Quick Reminders</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-red-500">⛔</span>
                  <p><strong>Skip:</strong> Aquarium (crowds), 17-Mile Drive (save for another trip)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500">✅</span>
                  <p><strong>Do:</strong> Wine tasting on Cannery Row, sunset beach walks, leisurely meals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500">💭</span>
                  <p><strong>Remember:</strong> This is about food and leisure, not sightseeing. You're recovering from India!</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Made for Suraj & Ridhima's restorative weekend
          </p>
          <p className="text-xs text-gray-400 italic">Ensure to relax 🌊</p>
        </div>
      </div>
    </div>
  );
};

export default MontereyDiningGuide;