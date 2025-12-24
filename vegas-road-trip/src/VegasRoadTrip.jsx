import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Star, Coffee, Utensils, Camera, Moon, ShoppingBag } from 'lucide-react';

const VegasRoadTrip = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const days = {
    day1: {
      title: "Day 1 - Dec 24",
      subtitle: "San Jose → Monterey/Carmel → Bakersfield",
      color: "bg-blue-600"
    },
    day2: {
      title: "Day 2 - Dec 25",
      subtitle: "Bakersfield → Las Vegas",
      color: "bg-purple-600"
    },
    day3: {
      title: "Day 3 - Dec 26",
      subtitle: "Hoover Dam → Red Rock Canyon → Vegas",
      color: "bg-pink-600"
    },
    day4: {
      title: "Day 4 - Dec 27",
      subtitle: "Death Valley (Optional) or Valley of Fire",
      color: "bg-orange-600"
    },
    day5: {
      title: "Day 5 - Dec 28/29",
      subtitle: "Death Valley Exploration / Return",
      color: "bg-teal-600"
    }
  };

  const PlaceCard = ({ name, description, address, phone, mapsUrl, reservationUrl, hours, tip, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 mb-1">{name}</h3>
          {description && <p className="text-gray-600 text-sm mb-2">{description}</p>}
          
          {address && (
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-1">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{address}</span>
            </div>
          )}
          
          {hours && (
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-1">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{hours}</span>
            </div>
          )}
          
          {phone && (
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
                {phone}
              </a>
            </div>
          )}
          
          {tip && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-2 text-sm">
              <p className="text-yellow-800"><strong>Tip:</strong> {tip}</p>
            </div>
          )}
          
          <div className="flex gap-2 flex-wrap mt-2">
            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </a>
            )}
            {reservationUrl && (
              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Star className="w-4 h-4" />
                Reserve
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">California to Vegas Road Trip</h1>
          <p className="text-xl opacity-90">December 24-29, 2024</p>
          <p className="text-sm mt-2 opacity-80">San Jose → Monterey → Vegas → Death Valley</p>
          <p className="text-sm mt-1 opacity-90">Suraj • Ridhima • Roshni • Manoj</p>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Object.entries(days).map(([key, day]) => (
              <button
                key={key}
                onClick={() => setActiveDay(key)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                  activeDay === key
                    ? `${day.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* DAY 1 - DEC 24 */}
        {activeDay === 'day1' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">December 24 - Christmas Eve</h2>
              <p className="text-gray-600">San Jose → Monterey/Carmel → Bakersfield (~280 miles total)</p>
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                <p className="text-sm text-blue-900"><strong>Route:</strong> Depart noon → Arrive Monterey 1:30pm → Big Sur detour → Bakersfield late evening</p>
              </div>
            </div>

            {/* Monterey/Carmel Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-blue-600" />
                Monterey & Carmel (1:30pm - 6pm)
              </h3>
              
              <PlaceCard
                name="17-Mile Drive"
                description="Iconic scenic drive with ocean views, Lone Cypress, and Pebble Beach Golf Course"
                address="Starts at Pacific Grove Gate or Highway 1 Gate, Pebble Beach, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=17-Mile+Drive,+Pebble+Beach,+CA"
                tip="$11.25 entry fee per vehicle. Do this first while you have good afternoon light. Allow 1-2 hours with stops."
                icon={Camera}
              />

              <PlaceCard
                name="Carmel Beach"
                description="Beautiful white sand beach perfect for sunset viewing around 5pm"
                address="Ocean Ave & Scenic Rd, Carmel-by-the-Sea, CA 93923"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Carmel+Beach,+Carmel-by-the-Sea,+CA"
                icon={Camera}
              />

              <PlaceCard
                name="Carmel-by-the-Sea Downtown"
                description="Fairy-tale European-style village with art galleries and boutique shops"
                address="Ocean Avenue, Carmel-by-the-Sea, CA 93923"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Ocean+Avenue,+Carmel-by-the-Sea,+CA"
                icon={ShoppingBag}
              />
            </div>

            {/* Coffee */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-amber-600" />
                Coffee Stops
              </h3>
              
              <PlaceCard
                name="Carmel Coffee & Cocoa Bar"
                description="Charming coffee shop with excellent espresso and pastries"
                address="Ocean Ave & Lincoln St, Carmel-by-the-Sea, CA 93923"
                phone="(831) 624-0330"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Carmel+Coffee+and+Cocoa+Bar,+Carmel-by-the-Sea,+CA"
                icon={Coffee}
              />

              <PlaceCard
                name="Carmel Belle"
                description="Local favorite with great coffee and cozy atmosphere"
                address="Doud Craft Studios, San Carlos St, Carmel-by-the-Sea, CA 93923"
                phone="(831) 277-8220"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Carmel+Belle,+Carmel-by-the-Sea,+CA"
                icon={Coffee}
              />
            </div>

            {/* Dining */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-red-600" />
                Dining
              </h3>
              
              <PlaceCard
                name="La Bicyclette"
                description="Mediterranean cuisine with rustic European charm, excellent for late lunch"
                address="Dolores St &, 7th Ave, Carmel-by-the-Sea, CA 93921"
                phone="(831) 622-9899"
                hours="Lunch 11:30am-3pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=La+Bicyclette,+Carmel-by-the-Sea,+CA"
                reservationUrl="https://www.labicycletterestaurant.com/"
                tip="Try the rotisserie chicken or wood-fired pizzas"
                icon={Utensils}
              />

              <PlaceCard
                name="Mundaka"
                description="Spanish tapas with Basque influences, perfect for sharing small plates"
                address="San Carlos St, Carmel-by-the-Sea, CA 93921"
                phone="(831) 624-7400"
                hours="Lunch from 12pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Mundaka,+Carmel-by-the-Sea,+CA"
                reservationUrl="https://www.mundakacarmel.com/"
                tip="Excellent paella and Spanish wine selection"
                icon={Utensils}
              />
            </div>

            {/* Big Sur Detour */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-green-600" />
                Big Sur Scenic Detour (Optional but Recommended)
              </h3>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-4">
                <p className="text-sm text-green-900"><strong>Time:</strong> Adds 1.5-2 hours total | <strong>Distance:</strong> 40 miles south on Highway 1, then return</p>
                <p className="text-sm text-green-900 mt-1">Worth it for some of California's most stunning coastal scenery</p>
              </div>

              <PlaceCard
                name="Bixby Bridge"
                description="Iconic California coastal bridge with dramatic ocean views - pull-off viewpoint"
                address="Highway 1, Big Sur, CA 93920"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Bixby+Bridge,+Big+Sur,+CA"
                tip="Park at the north end pull-off for the classic photo angle"
                icon={Camera}
              />

              <PlaceCard
                name="McWay Falls"
                description="80-foot waterfall that drops directly onto the beach - viewpoint accessible, no hiking"
                address="Highway 1, Big Sur, CA 93920"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=McWay+Falls,+Big+Sur,+CA"
                tip="Short paved path to overlook. Best light in late afternoon."
                icon={Camera}
              />
            </div>

            {/* Bakersfield */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bakersfield Arrival (Late Evening)</h3>
              
              <PlaceCard
                name="Ramada Hotel"
                description="Overnight stay for Dec 24"
                address="Check your specific Ramada location in Bakersfield"
                phone="Confirm phone number on booking"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Bakersfield,+CA"
                tip="Long drive day (~4-5 hours from Carmel without Big Sur). Consider grabbing dinner on the road or at hotel."
                icon={MapPin}
              />
            </div>
          </div>
        )}

        {/* DAY 2 - DEC 25 */}
        {activeDay === 'day2' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">December 25 - Christmas Day</h2>
              <p className="text-gray-600">Bakersfield → Las Vegas (~290 miles, 4.5 hours)</p>
              <div className="mt-3 bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
                <p className="text-sm text-purple-900"><strong>Route:</strong> Take Highway 58 East → Highway 14 North → I-15 North to Vegas</p>
              </div>
            </div>

            {/* Scenic Stop */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-orange-600" />
                Scenic Stop En Route
              </h3>
              
              <PlaceCard
                name="Red Rock Canyon State Park (CA)"
                description="Stunning desert rock formations - pull-off viewpoints, no hiking needed"
                address="Highway 14, Cantil, CA 93519"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Red+Rock+Canyon+State+Park,+CA"
                tip="Different from Vegas's Red Rock Canyon. Quick 15-20 min stop. Free entry."
                icon={Camera}
              />
            </div>

            {/* Vegas Arrival */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-600" />
                Las Vegas Arrival (3-4pm)
              </h3>
              
              <PlaceCard
                name="The Venetian Resort"
                description="Your hotel for Dec 25 - All-suite luxury on the Strip"
                address="3355 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 414-1000"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=The+Venetian+Resort,+Las+Vegas,+NV"
                reservationUrl="https://www.venetianlasvegas.com/"
                tip="✅ BOOKED for Dec 25. Free self-parking. Valet is $30/day. Rooms are spacious suites."
                icon={Star}
              />
            </div>

            {/* Christmas Dinner */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-red-600" />
                Christmas Dinner (Book NOW!)
              </h3>
              
              <PlaceCard
                name="Lotus of Siam"
                description="Legendary Thai restaurant, considered best Thai in America. Northern Thai specialties."
                address="953 E Sahara Ave #A5, Las Vegas, NV 89104"
                phone="(702) 735-3033"
                hours="Dinner 5:30pm-10pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Lotus+of+Siam,+Las+Vegas,+NV"
                reservationUrl="https://www.opentable.com/lotus-of-siam"
                tip="Order from Northern Thai menu. Try Nam Kao Tod, Khao Soi, or Crying Tiger Beef. Book 2-3 weeks ahead!"
                icon={Utensils}
              />

              <PlaceCard
                name="Gordon Ramsay Burger (Alternative)"
                description="If Lotus of Siam is fully booked - gourmet burgers and boozy milkshakes"
                address="Planet Hollywood, 3667 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 785-5462"
                hours="11am-11pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Gordon+Ramsay+Burger,+Las+Vegas,+NV"
                reservationUrl="https://www.opentable.com/gordon-ramsay-burger"
                tip="Try Hell's Kitchen Burger or Chanterelle Burger. Truffle fries are a must!"
                icon={Utensils}
              />
            </div>

            {/* Evening Activities */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-blue-600" />
                Christmas Evening on the Strip
              </h3>
              
              <PlaceCard
                name="Bellagio Fountains"
                description="Iconic choreographed fountain show with music - free to watch"
                address="3600 S Las Vegas Blvd, Las Vegas, NV 89109"
                hours="Shows every 15 min (evenings), every 30 min (afternoons)"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Bellagio+Fountains,+Las+Vegas,+NV"
                tip="Best viewing from Bellagio sidewalk or Paris Las Vegas. Shows run 3pm-midnight on weekdays, til 12:30am weekends."
                icon={Camera}
              />

              <PlaceCard
                name="The Strip Walk"
                description="Walk and explore the neon lights - especially beautiful on Christmas night"
                address="Las Vegas Blvd between Mandalay Bay and Venetian"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Las+Vegas+Strip,+Las+Vegas,+NV"
                tip="Free overhead pedestrian bridges. Check out Caesars, Cosmopolitan, Aria, Park MGM."
                icon={Camera}
              />
            </div>
          </div>
        )}

        {/* DAY 3 - DEC 26 */}
        {activeDay === 'day3' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">December 26 - Boxing Day</h2>
              <p className="text-gray-600">Day Trips + Vegas Evening</p>
            </div>

            {/* Morning - Hoover Dam */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-blue-600" />
                Morning: Hoover Dam (Depart 8am)
              </h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                <p className="text-sm text-blue-900"><strong>Drive:</strong> 45 minutes from Vegas | <strong>Time needed:</strong> 1.5-2 hours</p>
              </div>

              <PlaceCard
                name="Hoover Dam"
                description="Engineering marvel on the Colorado River between Nevada and Arizona"
                address="U.S. Route 93, Boulder City, NV 89005"
                phone="(702) 494-2517"
                hours="9am-5pm daily"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Hoover+Dam,+Boulder+City,+NV"
                tip="Go early (arrive 8:30-9am) to beat crowds. Parking is $10. Dam tours available but not required - views from top are spectacular."
                icon={Camera}
              />

              <PlaceCard
                name="Arizona Overlook"
                description="Best photo spot for Hoover Dam - dramatic elevated view"
                address="Near Hoover Dam on AZ side"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Hoover+Dam+Overlook"
                tip="Park at the lot past the dam on Arizona side. Short walk to viewing area."
                icon={Camera}
              />
            </div>

            {/* Afternoon - Red Rock Canyon */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-red-600" />
                Afternoon: Red Rock Canyon (12pm-3pm)
              </h3>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                <p className="text-sm text-red-900"><strong>Drive from Hoover Dam:</strong> 1 hour back through Vegas | <strong>Time needed:</strong> 2-3 hours</p>
              </div>

              <PlaceCard
                name="Red Rock Canyon National Conservation Area"
                description="Stunning red sandstone formations - 13-mile scenic loop drive with multiple pull-offs"
                address="1000 Scenic Loop Dr, Las Vegas, NV 89161"
                phone="(702) 515-5350"
                hours="8am-5pm (Visitor Center), Loop drive closes at dusk"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Red+Rock+Canyon,+Las+Vegas,+NV"
                tip="$15/vehicle entry (valid 7 days). One-way scenic loop - can't turn around. Best viewpoints: Calico Hills, High Point Overlook."
                icon={Camera}
              />
            </div>

            {/* Hotel Change */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-purple-600" />
                Check Out Venetian → Check In Harrah's
              </h3>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-4">
                <p className="text-sm text-purple-900"><strong>Plan:</strong> Check out of Venetian after breakfast, store bags at Harrah's before Red Rock Canyon trip</p>
              </div>

              <PlaceCard
                name="Harrah's Las Vegas"
                description="Your hotel for Dec 26 - Center Strip location"
                address="3475 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 369-5000"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Harrah's+Las+Vegas,+NV"
                reservationUrl="https://www.caesars.com/harrahs-las-vegas"
                tip="✅ BOOKED for Dec 26. Self-parking: $18/day for Nevada residents, $23/day for non-residents. Valet: $30/day."
                icon={Star}
              />
            </div>

            {/* Coffee */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-amber-600" />
                Vegas Coffee Stops
              </h3>
              
              <PlaceCard
                name="Makers & Finders"
                description="Latin-inspired coffee bar with excellent espresso and brunch"
                address="1120 S Main St, Las Vegas, NV 89104"
                phone="(702) 586-8255"
                hours="7am-3pm daily"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Makers+and+Finders,+Las+Vegas,+NV"
                tip="In Arts District. Try the Horchata Latte or Cuban coffee. Great breakfast too!"
                icon={Coffee}
              />

              <PlaceCard
                name="PublicUs"
                description="Modern coffee shop and restaurant with craft coffee and great vibes"
                address="1126 Fremont St, Las Vegas, NV 89101"
                phone="(702) 930-9595"
                hours="7am-11pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=PublicUs,+Las+Vegas,+NV"
                tip="Great spot near Fremont. Try their signature drinks."
                icon={Coffee}
              />

              <PlaceCard
                name="Vesta Coffee Roasters"
                description="Local roaster with multiple locations, excellent coffee"
                address="1114 S Casino Center Blvd, Las Vegas, NV 89104"
                phone="(702) 366-9109"
                hours="6am-6pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Vesta+Coffee+Roasters,+Las+Vegas,+NV"
                tip="Arts District location. Great cortados and pour-overs."
                icon={Coffee}
              />
            </div>

            {/* Evening - Fremont Street */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-600" />
                Evening: Fremont Street Experience (After Red Rock, before dinner)
              </h3>
              
              <PlaceCard
                name="Fremont Street Experience"
                description="Vintage Vegas with covered LED canopy light shows and street performers"
                address="Fremont St, Las Vegas, NV 89101"
                hours="Light shows every hour from dusk to 1am"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Fremont+Street+Experience,+Las+Vegas,+NV"
                tip="Free to walk and watch shows. Completely different vibe from the Strip - Old Vegas energy!"
                icon={Star}
              />

              <PlaceCard
                name="SlotZilla Zipline (Optional - Time Permitting)"
                description="Fly Superman-style over Fremont Street on the upper Zoomline"
                address="425 Fremont St, Las Vegas, NV 89101"
                phone="(702) 678-5780"
                hours="12pm-midnight (Sun-Thu), til 2am (Fri-Sat) - CLOSED Dec 25, OPEN Dec 26!"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=SlotZilla+Zipline,+Las+Vegas,+NV"
                reservationUrl="https://www.flylv.com/"
                tip="Zoomline (upper level, $50) is better than lower zipline ($30). Book in advance! Note: You have dinner at 10pm so plan accordingly."
                icon={Star}
              />
            </div>
            </div>

            {/* Dinner */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-red-600" />
                Late Dinner (10:00 PM - Perfect Vegas Timing!)
              </h3>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-4">
                <p className="text-sm text-green-900"><strong>✅ CONFIRMED RESERVATION</strong></p>
                <p className="text-sm text-green-900 mt-1">Friday, Dec 26 at 10:00 PM for 4 people</p>
              </div>
              
              <PlaceCard
                name="Esther's Kitchen ✅"
                description="Italian-inspired with house-made pastas, seasonal menu, Arts District gem - RESERVATION CONFIRMED"
                address="1130 S Casino Center Blvd #110, Las Vegas, NV 89104"
                phone="(702) 570-7864"
                hours="Dinner 5pm-10pm | Your reservation: 10:00 PM"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Esther's+Kitchen,+Las+Vegas,+NV"
                reservationUrl="https://www.resy.com/cities/las/esthers-kitchen"
                tip="✅ BOOKED for 4 people at 10:00 PM. Try any pasta and the focaccia. Awesome wine list. Late dinner is very Vegas!"
                icon={Utensils}
              />

              <h4 className="text-lg font-bold text-gray-700 mt-6 mb-3">Alternative Options (If Plans Change)</h4>
              
              <PlaceCard
                name="Other Mama"
                description="Asian fusion with creative dishes, funky atmosphere in Arts District"
                address="3655 S Durango Dr, Las Vegas, NV 89147"
                phone="(702) 463-8382"
                hours="Dinner from 5pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Other+Mama,+Las+Vegas,+NV"
                reservationUrl="https://www.opentable.com/other-mama"
                tip="Newer spot, usually easier to book. Creative cocktails and shareable plates."
                icon={Utensils}
              />

              <PlaceCard
                name="Raku"
                description="Authentic Japanese izakaya, incredible small plates, chef's choice omakase"
                address="5030 W Spring Mountain Rd #2, Las Vegas, NV 89146"
                phone="(702) 367-3511"
                hours="Dinner 6pm-3am (Mon-Sat)"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Raku,+Las+Vegas,+NV"
                tip="Takes reservations but bar seating often available. Order robata grills and tofu dishes. Cash only!"
                icon={Utensils}
              />
            </div>

            {/* Shopping */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-pink-600" />
                Shopping on the Strip
              </h3>
              
              <PlaceCard
                name="The Shops at Crystals"
                description="Luxury shopping - Louis Vuitton, Gucci, Prada, Tiffany"
                address="3720 S Las Vegas Blvd, Las Vegas, NV 89158"
                phone="(702) 590-9299"
                hours="10am-11pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Crystals+Shopping+Center,+Las+Vegas,+NV"
                tip="Between Aria and Cosmopolitan. Stunning architecture even if just browsing."
                icon={ShoppingBag}
              />

              <PlaceCard
                name="Forum Shops at Caesars"
                description="Roman-themed mall with mid to high-end brands, indoor fountain shows"
                address="3500 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 893-4800"
                hours="10am-11pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Forum+Shops+at+Caesars,+Las+Vegas,+NV"
                tip="Over 160 stores. Check out the Fall of Atlantis animatronic show (free)."
                icon={ShoppingBag}
              />

              <PlaceCard
                name="Grand Canal Shoppes at Venetian"
                description="Venetian-themed shopping with gondola rides, right at your hotel"
                address="3377 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 414-4525"
                hours="10am-11pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Grand+Canal+Shoppes,+Las+Vegas,+NV"
                tip="Indoor canals with singing gondoliers. Mix of luxury and accessible brands."
                icon={ShoppingBag}
              />
            </div>
          </div>
        )}

        {/* DAY 4 - DEC 27 */}
        {activeDay === 'day4' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">December 27 - Death Valley or Valley of Fire</h2>
              <p className="text-gray-600">Choose Your Adventure</p>
            </div>

            {/* Decision Point */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded mb-6">
              <h3 className="font-bold text-orange-900 mb-2">Two Options:</h3>
              <p className="text-sm text-orange-900 mb-2"><strong>Option A:</strong> Drive to Death Valley (2-2.5 hours), stay overnight, stargaze</p>
              <p className="text-sm text-orange-900"><strong>Option B:</strong> Day trip to Valley of Fire (1 hour), return to Vegas</p>
            </div>

            {/* Option A - Death Valley */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-600" />
                Option A: Death Valley (Recommended for Stargazing)
              </h3>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mb-4">
                <p className="text-sm text-indigo-900"><strong>Drive:</strong> 2-2.5 hours from Vegas | <strong>Plan:</strong> Leave mid-afternoon, arrive for sunset</p>
                <p className="text-sm text-indigo-900 mt-1"><strong>Important:</strong> Gas up before leaving Vegas. Limited cell service. Bring water.</p>
              </div>

              <PlaceCard
                name="The Inn at Death Valley"
                description="Historic luxury hotel in Furnace Creek - BOOK NOW if doing this option!"
                address="Highway 190, Death Valley, CA 92328"
                phone="(760) 786-2345"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=The+Inn+at+Death+Valley,+CA"
                reservationUrl="https://www.oasisatdeathvalley.com/"
                tip="Limited rooms, books up fast. Alternative: Ranch at Death Valley (more budget-friendly, same location)."
                icon={Star}
              />

              <PlaceCard
                name="Zabriskie Point (Sunset)"
                description="Iconic golden badlands, incredible for sunset photography"
                address="Zabriskie Point Rd, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Zabriskie+Point,+Death+Valley,+CA"
                tip="Short walk from parking. Sunset here is magical. Gets chilly after dark - bring layers!"
                icon={Camera}
              />

              <PlaceCard
                name="Mesquite Flat Sand Dunes (Stargazing)"
                description="Best spot for stargazing - some of darkest skies in North America"
                address="Near Stovepipe Wells, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Mesquite+Flat+Sand+Dunes,+Death+Valley,+CA"
                tip="Park at the lot, walk onto dunes. Bring headlamp/flashlight, blanket, warm layers. Milky Way visible year-round."
                icon={Moon}
              />
            </div>

            {/* Option B - Valley of Fire */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-red-600" />
                Option B: Valley of Fire (Day Trip)
              </h3>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
                <p className="text-sm text-red-900"><strong>Drive:</strong> 1 hour from Vegas | <strong>Plan:</strong> Leave 9am, return by 4pm</p>
                <p className="text-sm text-red-900 mt-1">Less commitment than Death Valley, still spectacular desert scenery</p>
              </div>

              <PlaceCard
                name="Valley of Fire State Park"
                description="Stunning red Aztec sandstone formations - Nevada's oldest state park"
                address="29450 Valley of Fire Hwy, Overton, NV 89040"
                phone="(702) 397-2088"
                hours="Sunrise to sunset"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Valley+of+Fire+State+Park,+NV"
                tip="$10 entrance fee per vehicle. Drive the scenic loop, stop at Fire Canyon, Rainbow Vista, Elephant Rock."
                icon={Camera}
              />

              <PlaceCard
                name="Fire Wave Trail"
                description="Colorful striped rock formations - easy 1.5 mile walk (your only 'hike' option if interested)"
                address="Valley of Fire State Park, NV"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Fire+Wave+Trailhead,+Valley+of+Fire,+NV"
                tip="Short, mostly flat trail. Best in morning light. Bring water!"
                icon={Camera}
              />
            </div>

            {/* Vegas Evening (if doing Valley of Fire) */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-red-600" />
                Vegas Dinner (If returning from Valley of Fire)
              </h3>
              
              <PlaceCard
                name="Hell's Kitchen"
                description="Gordon Ramsay's TV show experience, red and blue kitchens, Vegas spectacle"
                address="Caesars Palace, 3570 S Las Vegas Blvd, Las Vegas, NV 89109"
                phone="(702) 731-7373"
                hours="Dinner 5pm-10pm"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Hell's+Kitchen,+Las+Vegas,+NV"
                reservationUrl="https://www.caesars.com/caesars-palace/restaurants/hells-kitchen"
                tip="Try Beef Wellington, pan-seared scallops, or lobster risotto. Sticky toffee pudding is famous. Book ahead!"
                icon={Utensils}
              />

              <PlaceCard
                name="Sparrow + Wolf"
                description="Creative American with global influences, Arts District favorite"
                address="4480 Spring Mountain Rd #100, Las Vegas, NV 89102"
                phone="(702) 790-2147"
                hours="Dinner 5pm-10pm (Wed-Sun)"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Sparrow+Wolf,+Las+Vegas,+NV"
                reservationUrl="https://www.resy.com/cities/las/sparrow-wolf"
                tip="Seasonal menu, constantly changing. Trust the chef. Excellent cocktails."
                icon={Utensils}
              />
            </div>
          </div>
        )}

        {/* DAY 5 - DEC 28/29 */}
        {activeDay === 'day5' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">December 28-29 - Death Valley or Return</h2>
              <p className="text-gray-600">Final Exploration & Journey Home</p>
            </div>

            {/* If Stayed in Death Valley */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-6 h-6 text-yellow-600" />
                Death Valley Morning Exploration (If you stayed overnight)
              </h3>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-4">
                <p className="text-sm text-yellow-900"><strong>Plan:</strong> Early start (sunrise at 7am), explore until noon, drive back to Vegas or start toward home</p>
              </div>

              <PlaceCard
                name="Zabriskie Point (Sunrise)"
                description="Golden hour magic - completely different than sunset. Best sunrise spot in the park."
                address="Zabriskie Point Rd, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Zabriskie+Point,+Death+Valley,+CA"
                tip="Arrive 30 min before sunrise. Bring hot coffee and layers - it's cold!"
                icon={Camera}
              />

              <PlaceCard
                name="Badwater Basin"
                description="Lowest point in North America (-282 ft), vast white salt flats stretching for miles"
                address="Badwater Rd, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Badwater+Basin,+Death+Valley,+CA"
                tip="Walk out onto the salt flats. Look up at the cliff for the 'Sea Level' sign. Best mid-morning."
                icon={Camera}
              />

              <PlaceCard
                name="Artist's Palette"
                description="Multi-colored hills from mineral deposits - pinks, greens, purples, yellows"
                address="Artist's Drive, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Artist's+Palette,+Death+Valley,+CA"
                tip="One-way 9-mile scenic loop. Best in late afternoon light, but morning works too."
                icon={Camera}
              />

              <PlaceCard
                name="Dante's View"
                description="Panoramic overlook of entire Death Valley basin from 5,475 ft elevation"
                address="Dante's View Rd, Death Valley, CA"
                mapsUrl="https://www.google.com/maps/dir/?api=1&destination=Dante's+View,+Death+Valley,+CA"
                tip="25-minute detour from main road but worth it. Can see Badwater Basin far below and Telescope Peak above."
                icon={Camera}
              />
            </div>

            {/* Return Options */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Return Journey Options</h3>
              
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded mb-4">
                <p className="text-sm text-teal-900"><strong>Option 1:</strong> Drive back to Vegas Dec 28, fly/drive home Dec 29</p>
                <p className="text-sm text-teal-900 mt-1"><strong>Option 2:</strong> Drive back to Vegas Dec 28 evening, stay one more night, leave Dec 29 morning</p>
                <p className="text-sm text-teal-900 mt-1"><strong>Option 3:</strong> Start driving home from Death Valley Dec 28, overnight stop, home Dec 29</p>
              </div>

              <PlaceCard
                name="Vegas to San Jose Direct"
                description="I-15 South to I-40 West to I-5 North - fastest route home"
                mapsUrl="https://www.google.com/maps/dir/Las+Vegas,+NV/San+Jose,+CA"
                tip="~575 miles, 8.5-9 hours of driving. Consider overnight in Bakersfield or Fresno to break it up."
                icon={Navigation}
              />
            </div>

            {/* Last Vegas Meal */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-red-600" />
                Final Vegas Meal (If staying Dec 28 night)
              </h3>
              
              <PlaceCard
                name="Anything You Missed!"
                description="Last chance for Gordon Ramsay Burger, Lotus of Siam, or any spots you wanted to revisit"
                tip="Or try something new! Vegas has endless options. Check out Chinatown for amazing Asian food."
                icon={Utensils}
              />

              <PlaceCard
                name="In-N-Out Burger (On the way out)"
                description="California institution - perfect last meal before hitting the road"
                address="Multiple locations between Vegas and San Jose"
                mapsUrl="https://www.google.com/maps/search/In-N-Out+Burger"
                tip="Order Animal Style fries and a Double-Double. Classic California road trip tradition!"
                icon={Utensils}
              />
            </div>

            {/* Trip Summary */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">🎉 Trip Summary</h3>
              <div className="space-y-2 text-sm">
                <p>✅ Coastal California beauty (17-Mile Drive, Big Sur)</p>
                <p>✅ Engineering marvel (Hoover Dam)</p>
                <p>✅ Desert wonders (Red Rock, Death Valley)</p>
                <p>✅ Vegas excitement (Strip, Fremont, zipline)</p>
                <p>✅ Amazing food (Thai, Japanese, Italian, burgers)</p>
                <p>✅ Stargazing under darkest skies</p>
                <p>✅ Memories for a lifetime!</p>
              </div>
              <p className="mt-4 text-sm opacity-90">Safe travels and happy holidays! 🎄</p>
            </div>
          </div>
        )}

        {/* Important Notes Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Important Pre-Trip Checklist</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" checked disabled />
              <label className="line-through text-gray-500">✅ Venetian hotel booked for Dec 25</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" checked disabled />
              <label className="line-through text-gray-500">✅ Harrah's hotel booked for Dec 26</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" checked disabled />
              <label className="line-through text-gray-500">✅ Esther's Kitchen reserved for Dec 26 at 10:00 PM</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Book Death Valley hotel NOW if doing that option (very limited availability)</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Consider SlotZilla zipline for Dec 26 (optional - book at flylv.com)</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Make Christmas Day (Dec 25) dinner reservation: Lotus of Siam, Gordon Ramsay Burger, or other option</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Confirm Ramada Hotel Bakersfield booking for Dec 24</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Download offline maps (cell service spotty in Death Valley)</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Pack: warm layers for desert nights, headlamp for stargazing, water bottles</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Check weather forecasts for Death Valley and mountain passes</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <label>Bring camera/phone chargers and portable battery</label>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <h4 className="font-bold text-red-900 mb-2">🚨 Emergency & Useful Numbers</h4>
          <div className="text-sm text-red-800 space-y-1">
            <p><strong>Emergency:</strong> 911</p>
            <p><strong>Death Valley Park Rangers:</strong> (760) 786-3200</p>
            <p><strong>Nevada Highway Patrol:</strong> *NHP (*647)</p>
            <p><strong>The Venetian (Dec 25):</strong> (702) 414-1000</p>
            <p><strong>Harrah's (Dec 26):</strong> (702) 369-5000</p>
            <p><strong>Roadside Assistance:</strong> Have your auto insurance number handy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegasRoadTrip;
