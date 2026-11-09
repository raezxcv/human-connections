import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Bookmark,
  Calendar,
  HeartHandshake,
  MapPin,
  PackageCheck,
  Search,
  Users,
  X,
} from 'lucide-react';
import {
  COMMUNITY_INITIATIVES,
  INITIATIVE_CATEGORIES,
} from '../data/community';
import { InitiativeCategory, ScheduleFilter } from '../types/editorial';
import { CategoryBadge } from '../components/CategoryBadge';
import { useFieldPocket } from '../context/FieldPocketContext';

export const CommunityPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | InitiativeCategory
  >('All');
  const [selectedSchedule, setSelectedSchedule] = useState<
    'All' | ScheduleFilter
  >('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [pledgedSupplyIds, setPledgedSupplyIds] = useState<string[]>([]);

  const { isInitiativeSaved, toggleSaveInitiative } = useFieldPocket();

  const togglePledgeSupply = (id: string) => {
    setPledgedSupplyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredInitiatives = useMemo(() => {
    return COMMUNITY_INITIATIVES.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (
        selectedSchedule !== 'All' &&
        item.scheduleType !== selectedSchedule
      ) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.neighborhood.toLowerCase().includes(q) ||
        item.organizerName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.smallThingNeededNow.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, selectedSchedule, searchQuery]);

  const spotlightInitiatives = COMMUNITY_INITIATIVES.filter((i) => i.featured);

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-10 sm:py-16 space-y-16">
      {/* 1. EDITORIAL HEADER */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b-2 border-charcoal items-end">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ochre text-charcoal font-bold text-xs border border-charcoal">
            <span>Civic Field Directory · 10 Fictionalized Grassroots Tables</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.02] tracking-tight">
            The Neighborhood Infrastructure of Care.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-charcoal-slate max-w-2xl leading-relaxed">
            Ten local tables, basement repair shops, porch barbers, and dawn bread routes run by ordinary people who decided not to wait for permission to look after their block.
          </p>
        </div>

        <div className="lg:col-span-4 bg-cobalt text-cream p-6 border-2 border-charcoal space-y-2">
          <p className="font-display font-bold text-lg text-ochre">
            How to Use This Directory
          </p>
          <p className="text-xs sm:text-sm text-cream/90 leading-relaxed">
            Filter by gathering type or weekday/weekend schedule, inspect what small supply each table needs right now, and save initiatives to your personal Field Pocket.
          </p>
        </div>
      </header>

      {/* 2. TWO-COLUMN DOCUMENTARY SPOTLIGHT SPREAD */}
      <section aria-labelledby="spotlight-heading" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2
            id="spotlight-heading"
            className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal"
          >
            Featured Neighborhood Stewards
          </h2>
          <span className="text-xs font-bold text-cobalt">
            Field Portraits · Autumn 2026
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {spotlightInitiatives.map((item, idx) => {
            const saved = isInitiativeSaved(item.id);
            return (
              <article
                key={item.id}
                className={`border-2 border-charcoal flex flex-col justify-between ${
                  idx === 0 ? 'bg-cream-sand' : 'bg-ochre/35'
                }`}
              >
                <div>
                  <div className="photo-frame photo-grain aspect-[16/9] w-full border-b-2 border-charcoal">
                    <img
                      src={item.photo.src}
                      alt={item.photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CategoryBadge category={item.category} size="md" />
                      <span className="text-xs font-bold text-charcoal-slate flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                        {item.city} · Est. {item.foundedYear}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal">
                      {item.name}
                    </h3>

                    <p className="text-sm sm:text-base text-charcoal-slate leading-relaxed">
                      {item.description}
                    </p>

                    <blockquote className="p-4 bg-cream border border-charcoal">
                      <p className="font-serif italic text-base sm:text-lg text-charcoal">
                        “{item.organizerQuote}”
                      </p>
                      <footer className="text-xs font-bold text-charcoal-slate mt-1.5">
                        — {item.organizerName}, {item.organizerRole}
                      </footer>
                    </blockquote>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-charcoal text-cream flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span>
                    <strong className="text-ochre">Schedule:</strong> {item.schedule}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleSaveInitiative(item.id)}
                    aria-pressed={saved}
                    className={`btn-tactile px-3.5 py-2 font-bold ${
                      saved
                        ? 'bg-coral text-charcoal'
                        : 'bg-cream text-charcoal hover:bg-ochre'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5 inline mr-1.5" aria-hidden="true" />
                    {saved ? 'Saved in Pocket' : 'Save Table to Pocket'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE DIRECTORY FILTER & SEARCH BAR */}
      <section
        aria-label="Filter community initiatives"
        className="bg-cream-sand border-2 border-charcoal p-5 sm:p-7 space-y-5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Category Pills */}
          <div
            className="lg:col-span-8 flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter by initiative category"
          >
            {INITIATIVE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`btn-tactile px-3.5 py-2 text-xs sm:text-sm font-bold border transition-colors ${
                    active
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="lg:col-span-4 relative">
            <label htmlFor="community-search-input" className="sr-only">
              Search community initiatives by city, organizer, or supply needed
            </label>
            <Search
              className="w-4 h-4 text-charcoal-slate absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="community-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city, organizer, or supply..."
              className="w-full pl-10 pr-9 py-2 bg-cream border border-charcoal text-sm text-charcoal placeholder:text-charcoal-muted"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-charcoal-slate hover:text-charcoal"
                aria-label="Clear community search"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Schedule Filter Row */}
        <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-charcoal-slate mr-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-cobalt" aria-hidden="true" />
              Meeting Days:
            </span>
            {(['All', 'Weekdays', 'Weekends', 'Open Daily'] as const).map(
              (sched) => {
                const active = selectedSchedule === sched;
                return (
                  <button
                    key={sched}
                    type="button"
                    onClick={() => setSelectedSchedule(sched)}
                    aria-pressed={active}
                    className={`btn-tactile px-3 py-1 text-xs font-bold border ${
                      active
                        ? 'bg-cobalt text-cream border-charcoal'
                        : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                    }`}
                  >
                    {sched === 'All' ? 'All Schedules' : sched}
                  </button>
                );
              }
            )}
          </div>

          <div className="text-xs font-semibold text-charcoal-slate" aria-live="polite">
            Showing {filteredInitiatives.length} of {COMMUNITY_INITIATIVES.length} initiatives
          </div>
        </div>
      </section>

      {/* 4. DIRECTORY DOSSIER LIST */}
      {filteredInitiatives.length === 0 ? (
        <div
          role="status"
          className="bg-cream-sand border-2 border-charcoal p-12 text-center space-y-4"
        >
          <h2 className="font-display font-bold text-2xl text-charcoal">
            No neighborhood tables match those filters.
          </h2>
          <p className="text-sm text-charcoal-slate max-w-md mx-auto">
            Reset your category or schedule filter to view all ten community initiatives.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSchedule('All');
              setSearchQuery('');
            }}
            className="btn-tactile px-5 py-2.5 bg-charcoal text-cream text-sm font-bold hover:bg-cobalt"
          >
            Reset Directory Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInitiatives.map((item, idx) => {
            const saved = isInitiativeSaved(item.id);
            const pledged = pledgedSupplyIds.includes(item.id);

            return (
              <article
                key={item.id}
                className="bg-cream border-2 border-charcoal flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="px-6 py-3.5 bg-cream-sand border-b border-charcoal flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold text-xs px-2 py-0.5 bg-charcoal text-cream">
                        Table 0{idx + 1}
                      </span>
                      <CategoryBadge category={item.category} />
                    </div>
                    <span className="text-xs font-bold text-cobalt">
                      {item.scheduleType} · Est. {item.foundedYear}
                    </span>
                  </div>

                  {/* Image & Main Content */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                      <div className="sm:col-span-5">
                        <div className="photo-frame photo-grain aspect-[4/3] w-full border border-charcoal">
                          <img
                            src={item.photo.src}
                            alt={item.photo.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-7 space-y-2">
                        <span className="text-xs font-bold text-coral-dark flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {item.city} ({item.neighborhood})
                        </span>
                        <h3 className="font-display font-extrabold text-2xl text-charcoal leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-charcoal-slate">
                          {item.schedule}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-charcoal leading-relaxed">
                      {item.description}
                    </p>

                    {/* Organizer Note */}
                    <div className="p-4 bg-cream-sand border border-rule space-y-1">
                      <p className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-cobalt" aria-hidden="true" />
                        Steward: {item.organizerName} ({item.organizerRole})
                      </p>
                      <p className="font-serif italic text-sm sm:text-base text-charcoal">
                        “{item.organizerQuote}”
                      </p>
                    </div>

                    {/* How Strangers Join & Small Thing Needed */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 bg-cream-sand border border-rule space-y-1">
                        <span className="font-bold text-cobalt block">
                          How Strangers Join:
                        </span>
                        <p className="text-charcoal-slate leading-relaxed">
                          {item.howStrangersJoin}
                        </p>
                      </div>
                      <div className="p-3.5 bg-ochre/35 border border-charcoal/30 space-y-1">
                        <span className="font-bold text-charcoal block">
                          Small Thing Needed Right Now:
                        </span>
                        <p className="text-charcoal font-medium leading-relaxed">
                          {item.smallThingNeededNow}
                        </p>
                        <p className="text-[11px] text-charcoal-slate pt-1">
                          Where: {item.addressNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 py-4 bg-cream-sand border-t border-charcoal flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => togglePledgeSupply(item.id)}
                    aria-pressed={pledged}
                    className={`btn-tactile px-3.5 py-2 text-xs font-bold border border-charcoal inline-flex items-center gap-1.5 ${
                      pledged
                        ? 'bg-ochre text-charcoal'
                        : 'bg-cream text-charcoal hover:bg-ochre/50'
                    }`}
                  >
                    {pledged ? (
                      <>
                        <PackageCheck className="w-4 h-4 text-cobalt" aria-hidden="true" />
                        <span>I Can Bring This Supply (Noted)</span>
                      </>
                    ) : (
                      <>
                        <HeartHandshake className="w-4 h-4 text-coral" aria-hidden="true" />
                        <span>Pledge Supply Item</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleSaveInitiative(item.id)}
                    aria-pressed={saved}
                    className={`btn-tactile px-4 py-2 text-xs font-bold border border-charcoal inline-flex items-center gap-1.5 ${
                      saved
                        ? 'bg-cobalt text-cream'
                        : 'bg-charcoal text-cream hover:bg-cobalt'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{saved ? 'Saved in Pocket' : 'Save to Pocket'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Bottom Callout to Share a Story */}
      <section className="bg-coral text-charcoal border-2 border-charcoal p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl">
            Know Someone Running a Porch Table or Repair Bench?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Record their story at our Reader Dispatch Desk so it appears in your local browser issue archive.
          </p>
        </div>
        <Link
          to="/share"
          className="btn-tactile px-6 py-4 bg-charcoal text-cream font-display font-bold text-sm inline-flex items-center gap-2 hover:bg-cream hover:text-charcoal border border-charcoal shrink-0"
        >
          <span>Go to Share a Story</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
};
