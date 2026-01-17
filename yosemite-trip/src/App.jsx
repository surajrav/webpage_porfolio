import { useState } from 'react';
import { tripData } from './data';
import { Icons, getActivityIcon, getActivityColor } from './Icons';

function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (category, item) => {
    const key = `${category}-${item}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-slate-950">
      {/* Noise overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />
      
      {/* Header */}
      <header className="relative border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Icons.Mountain />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-medium">Winter Adventure</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                Yosemite <span className="font-semibold bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent">Weekend</span>
              </h1>
              <p className="text-stone-400 mt-1 font-light">{tripData.overview.dates} • {tripData.overview.travelers.join(', ')}</p>
            </div>
            
            <nav className="flex gap-1 bg-stone-900/50 p-1 rounded-xl border border-stone-800/50">
              {['itinerary', 'checklist', 'info'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' 
                      : 'text-stone-400 hover:text-white hover:bg-stone-800/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'itinerary' && (
          <>
            {/* John Muir Welcome Quote */}
            {tripData.welcome && (
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-700/30 text-center">
                <div className="text-4xl mb-3">🏔️</div>
                <blockquote className="text-emerald-100 italic text-lg leading-relaxed mb-3">
                  "{tripData.welcome.quote}"
                </blockquote>
                <cite className="text-emerald-400 text-sm font-medium">— {tripData.welcome.author}</cite>
                <p className="text-emerald-200/70 text-sm mt-3">{tripData.welcome.subtitle}</p>
              </div>
            )}

            {/* Day selector */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 hide-scrollbar">
              {tripData.days.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`flex-shrink-0 px-5 py-4 rounded-2xl border transition-all ${
                    activeDay === idx
                      ? 'bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-900/30 border-stone-800/50 hover:border-stone-700'
                  }`}
                >
                  <div className={`text-xs uppercase tracking-wider mb-1 ${activeDay === idx ? 'text-amber-400' : 'text-stone-500'}`}>
                    Day {day.day}
                  </div>
                  <div className={`font-medium ${activeDay === idx ? 'text-white' : 'text-stone-300'}`}>
                    {day.date.split(',')[0]}
                  </div>
                  <div className={`text-xs mt-1 max-w-[140px] truncate ${activeDay === idx ? 'text-amber-200/70' : 'text-stone-500'}`}>
                    {day.theme}
                  </div>
                </button>
              ))}
            </div>

            {/* Day title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
              <h2 className="text-lg font-light text-white text-center px-4">{tripData.days[activeDay].title}</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
            </div>

            {/* Activities */}
            <div className="space-y-4">
              {tripData.days[activeDay].activities.map((activity, idx) => (
                <div key={idx} className={`rounded-2xl border p-5 transition-all hover:shadow-xl ${getActivityColor(activity.type)}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="text-xs font-mono mt-2 opacity-70">{activity.time}</div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-white">{activity.title}</h3>
                        {activity.optional && (
                          <span className="px-2 py-0.5 rounded-full bg-violet-600/30 text-violet-300 text-xs font-medium border border-violet-500/30">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-80 mb-3">{activity.description}</p>
                      
                      {activity.duration && (
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs opacity-70 mb-2">
                          <span className="flex items-center gap-1"><Icons.Clock /> {activity.duration}</span>
                          {activity.distance && <span>• {activity.distance}</span>}
                          {activity.elevation && <span>• ↑{activity.elevation}</span>}
                        </div>
                      )}

                      {activity.difficulty && (
                        <span className="inline-block px-2 py-1 rounded-md bg-red-900/30 text-red-300 text-xs font-medium mb-3">
                          {activity.difficulty}
                        </span>
                      )}

                      {activity.route && (
                        <div className="text-xs opacity-70 mb-3 p-2 rounded-lg bg-black/10">
                          <strong>Route:</strong> {activity.route}
                        </div>
                      )}

                      {/* Winter conditions */}
                      {activity.winterConditions && (
                        <div className="mt-3 p-3 rounded-xl bg-blue-900/20 border border-blue-700/30">
                          <div className="flex items-center gap-2 text-blue-300 text-sm font-medium mb-2">
                            <Icons.Warning /> Winter Conditions
                          </div>
                          <ul className="text-xs text-blue-200/80 space-y-1">
                            {activity.winterConditions.map((c, i) => <li key={i}>• {c}</li>)}
                          </ul>
                        </div>
                      )}

                      {/* Photo tips */}
                      {activity.photoTips && (
                        <div className="mt-3 p-3 rounded-xl bg-amber-900/20 border border-amber-700/30">
                          <div className="flex items-center gap-2 text-amber-300 text-sm font-medium mb-2">
                            <Icons.Camera /> Photography Tips
                          </div>
                          <ul className="text-xs text-amber-200/80 space-y-1">
                            {activity.photoTips.map((t, i) => <li key={i}>• {t}</li>)}
                          </ul>
                        </div>
                      )}

                      {/* Trivia / Did You Know */}
                      {activity.trivia && (
                        <div className="mt-3 p-3 rounded-xl bg-purple-900/20 border border-purple-700/30">
                          <div className="flex items-center gap-2 text-purple-300 text-sm font-medium mb-2">
                            💡 Did You Know?
                          </div>
                          <p className="text-xs text-purple-200/80">{activity.trivia}</p>
                        </div>
                      )}

                      {/* Must see */}
                      {activity.mustSee && (
                        <div className="mt-3 p-3 rounded-xl bg-emerald-900/20 border border-emerald-700/30">
                          <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-2">
                            <Icons.Tree /> Must See
                          </div>
                          <ul className="text-xs text-emerald-200/80 space-y-1">
                            {activity.mustSee.map((m, i) => <li key={i}>• {m}</li>)}
                          </ul>
                        </div>
                      )}

                      {/* Hike Details (for multi-segment hikes) */}
                      {activity.hikeDetails && (
                        <div className="mt-3 p-3 rounded-xl bg-emerald-900/20 border border-emerald-700/30">
                          <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-2">
                            <Icons.Hiking /> Trail Breakdown
                          </div>
                          <div className="space-y-2">
                            {activity.hikeDetails.map((segment, i) => (
                              <div key={i} className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="font-medium text-emerald-200">{segment.segment}:</span>
                                <span className="text-emerald-200/70">{segment.distance}</span>
                                <span className="text-emerald-200/70">• ↑{segment.elevation}</span>
                                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                                  segment.difficulty === 'Easy' ? 'bg-green-900/50 text-green-300' :
                                  segment.difficulty === 'Moderate' ? 'bg-yellow-900/50 text-yellow-300' :
                                  'bg-red-900/50 text-red-300'
                                }`}>{segment.difficulty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tips (for sledding and other activities) */}
                      {activity.tips && (
                        <div className="mt-3 p-3 rounded-xl bg-cyan-900/20 border border-cyan-700/30">
                          <div className="flex items-center gap-2 text-cyan-300 text-sm font-medium mb-2">
                            <Icons.Warning /> Tips
                          </div>
                          <ul className="text-xs text-cyan-200/80 space-y-1">
                            {activity.tips.map((t, i) => <li key={i}>• {t}</li>)}
                          </ul>
                        </div>
                      )}

                      {/* Nearby location */}
                      {activity.nearby && (
                        <div className="mt-2 p-2 rounded-lg bg-black/20 flex items-center justify-between">
                          <div>
                            <div className="text-xs text-stone-400">Nearby:</div>
                            <div className="text-sm text-white">{activity.nearby.name}</div>
                            {activity.nearby.note && <div className="text-xs text-stone-400">{activity.nearby.note}</div>}
                          </div>
                          {activity.nearby.mapUrl && (
                            <a href={activity.nearby.mapUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                              <Icons.Map />
                            </a>
                          )}
                        </div>
                      )}

                      {/* Options */}
                      {activity.options && (
                        <div className="mt-3 space-y-2">
                          {activity.options.map((opt, i) => (
                            <div key={i} className="p-3 rounded-xl bg-black/20 border border-white/5">
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="font-medium text-white text-sm">{opt.name}</div>
                                  {opt.address && <div className="text-xs opacity-60 mt-0.5 truncate">{opt.address}</div>}
                                  {opt.hours && <div className="flex items-center gap-1 text-xs opacity-60 mt-1"><Icons.Clock /> {opt.hours}</div>}
                                  {opt.price && <div className="text-xs text-green-300/80 mt-1">{opt.price} {opt.priceNote && <span className="text-stone-400">— {opt.priceNote}</span>}</div>}
                                  {opt.note && <div className="text-xs text-amber-300/80 mt-1">{opt.note}</div>}
                                  {opt.mustTry && <div className="text-xs text-orange-300/80 mt-1">Must try: {opt.mustTry.join(', ')}</div>}
                                  {opt.dressCode && <div className="text-xs text-pink-300/80 mt-1">👔 {opt.dressCode}</div>}
                                </div>
                                <div className="flex gap-1 flex-shrink-0">
                                  {opt.phone && (
                                    <a href={`tel:${opt.phone}`} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                                      <Icons.Phone />
                                    </a>
                                  )}
                                  {opt.mapUrl && (
                                    <a href={opt.mapUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                                      <Icons.Map />
                                    </a>
                                  )}
                                  {opt.reservations && (
                                    <a href={opt.reservations} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-amber-600/30 hover:bg-amber-600/50 text-xs font-medium transition-colors text-amber-200">
                                      Book
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Alternative */}
                      {activity.alternative && (
                        <div className="mt-2 p-3 rounded-xl bg-black/10 border border-white/5">
                          <div className="text-xs text-stone-400 mb-1">Alternative:</div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="font-medium text-white text-sm">{activity.alternative.name}</div>
                              <div className="text-xs opacity-60">{activity.alternative.note}</div>
                            </div>
                            {activity.alternative.mapUrl && (
                              <a href={activity.alternative.mapUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0">
                                <Icons.Map />
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Locations */}
                      {activity.locations && (
                        <div className="mt-3 grid gap-2">
                          {activity.locations.map((loc, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-black/20">
                              <div>
                                <div className="font-medium text-white text-sm">{loc.name}</div>
                                {loc.tip && <div className="text-xs opacity-60">{loc.tip}</div>}
                              </div>
                              {loc.mapUrl && (
                                <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                                  <Icons.Map />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Map link */}
                      {activity.mapUrl && !activity.locations && !activity.options && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href={activity.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm transition-colors"
                          >
                            <Icons.Map /> Google Maps <Icons.ExternalLink />
                          </a>
                          {activity.alltrailsUrl && (
                            <a
                              href={activity.alltrailsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-700/30 hover:bg-emerald-700/50 text-sm transition-colors text-emerald-200"
                            >
                              🥾 AllTrails <Icons.ExternalLink />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'checklist' && (
          <div className="space-y-6">
            {/* Glacier Point Warning */}
            <div className="p-5 rounded-2xl bg-red-900/20 border border-red-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/30 flex items-center justify-center"><Icons.Warning /></div>
                <h3 className="text-lg font-semibold text-red-200">{tripData.glacierPointNote.title}</h3>
              </div>
              <p className="text-red-200/80 text-sm">{tripData.glacierPointNote.content}</p>
            </div>

            {/* Feasibility */}
            <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">Activity Feasibility Check</h3>
              <div className="space-y-3">
                {tripData.feasibilityNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/20">
                    <div className={`px-2 py-1 rounded-md text-xs font-medium flex-shrink-0 ${
                      note.status === 'Fully Accessible' ? 'bg-emerald-900/50 text-emerald-300' :
                      note.status === 'NOT Feasible' ? 'bg-red-900/50 text-red-300' :
                      'bg-amber-900/50 text-amber-300'
                    }`}>
                      {note.status}
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm">{note.activity}</div>
                      <div className="text-xs text-stone-400 mt-1">{note.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packing checklists */}
            {Object.entries(tripData.packingList).map(([category, items]) => (
              <div key={category} className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/50">
                <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="grid gap-2">
                  {items.map((item, idx) => {
                    const isChecked = checkedItems[`${category}-${item}`];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleCheck(category, item)}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                          isChecked 
                            ? 'bg-emerald-900/30 border border-emerald-700/50' 
                            : 'bg-black/20 border border-transparent hover:border-stone-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                          isChecked ? 'bg-emerald-600 border-emerald-600' : 'border-stone-600'
                        }`}>
                          {isChecked && <Icons.Check />}
                        </div>
                        <span className={`text-sm ${isChecked ? 'text-emerald-200 line-through opacity-70' : 'text-stone-300'}`}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-6">
            {/* Emergency contacts */}
            <div className="p-5 rounded-2xl bg-red-900/20 border border-red-700/50">
              <h3 className="text-lg font-semibold text-red-200 mb-4 flex items-center gap-2">
                <Icons.Phone /> Emergency Contacts
              </h3>
              <div className="grid gap-2">
                {tripData.overview.emergencyNumbers.map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-colors"
                  >
                    <span className="text-red-200">{contact.name}</span>
                    <span className="font-mono text-red-300">{contact.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Hiking Summary */}
            {tripData.hikingSummary && (
              <div className="p-5 rounded-2xl bg-emerald-900/20 border border-emerald-700/50">
                <h3 className="text-lg font-semibold text-emerald-200 mb-4 flex items-center gap-2">
                  🥾 Hiking Summary
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(tripData.hikingSummary).map(([day, data]) => (
                    <div key={day} className="p-4 rounded-xl bg-black/20">
                      <div className="font-medium text-emerald-200 mb-2">{data.title}</div>
                      <div className="flex gap-4 text-xs text-emerald-300/70 mb-3">
                        <span>📍 {data.totalDistance}</span>
                        <span>↑ {data.totalElevation}</span>
                      </div>
                      <div className="space-y-2">
                        {data.hikes.map((hike, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-emerald-100/80">{hike.name}</span>
                            <span className="text-emerald-300/60 text-xs">{hike.distance} • {hike.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trip overview */}
            <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">Trip Overview</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-3 rounded-xl bg-black/20">
                  <div className="text-xs text-stone-400 mb-1">Dates</div>
                  <div className="text-white">{tripData.overview.dates}</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20">
                  <div className="text-xs text-stone-400 mb-1">Travelers</div>
                  <div className="text-white">{tripData.overview.travelers.join(', ')}</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20">
                  <div className="text-xs text-stone-400 mb-1">Starting Point</div>
                  <div className="text-white">{tripData.overview.startPoint}</div>
                </div>
                <div className="p-3 rounded-xl bg-black/20">
                  <div className="text-xs text-stone-400 mb-1">Park Entry Fee</div>
                  <div className="text-white">{tripData.overview.parkEntry}</div>
                </div>
              </div>
            </div>

            {/* Winter tips */}
            <div className="p-5 rounded-2xl bg-blue-900/20 border border-blue-700/50">
              <h3 className="text-lg font-semibold text-blue-200 mb-4 flex items-center gap-2">
                <Icons.Warning /> Winter Travel Tips
              </h3>
              <ul className="space-y-2">
                {tripData.overview.winterTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-blue-200/80 text-sm">
                    <span className="text-blue-400 mt-0.5">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful links */}
            <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
              <div className="grid gap-2">
                {[
                  { name: 'Yosemite Road Conditions', url: 'https://www.nps.gov/yose/planyourvisit/conditions.htm' },
                  { name: 'Caltrans QuickMap', url: 'https://quickmap.dot.ca.gov/' },
                  { name: 'Yosemite Webcams', url: 'https://www.nps.gov/yose/learn/photosmultimedia/webcams.htm' },
                  { name: 'Weather Forecast', url: 'https://forecast.weather.gov/MapClick.php?lat=37.7459&lon=-119.5332' },
                  { name: 'Ahwahnee Reservations', url: 'https://www.opentable.com/r/the-ahwahnee-hotel-yosemite' },
                  { name: 'Trail Conditions', url: 'https://www.nps.gov/yose/planyourvisit/conditions.htm' },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-colors group"
                  >
                    <span className="text-stone-300 group-hover:text-white transition-colors">{link.name}</span>
                    <Icons.ExternalLink />
                  </a>
                ))}
              </div>
            </div>

            {/* Lodging placeholder */}
            <div className="p-5 rounded-2xl bg-amber-900/20 border border-amber-700/50">
              <h3 className="text-lg font-semibold text-amber-200 mb-3 flex items-center gap-2">
                <Icons.Hotel /> Lodging Details
              </h3>
              <p className="text-amber-200/80 text-sm">
                Please provide your lodging details (hotel/lodge name and location) and I'll add them to the itinerary!
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-stone-500 text-sm">Created for Suraj, Ridhima, Roshni & Manoj • January 2026</p>
          <p className="text-stone-600 text-xs mt-2">Always check current conditions before visiting • (209) 372-0200</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
