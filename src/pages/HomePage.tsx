import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Camera,
  Clock,
  MapPin,
  MessageSquareQuote,
} from 'lucide-react';
import { STORIES } from '../data/stories';
import { COMMUNITY_INITIATIVES } from '../data/community';
import { CategoryBadge } from '../components/CategoryBadge';
import { useFieldPocket } from '../context/FieldPocketContext';

export const HomePage: React.FC = () => {
  const { isStorySaved, toggleSaveStory } = useFieldPocket();

  const featuredStory = STORIES.find((s) => s.featured) || STORIES[0];
  const mosaicStories = [STORIES[1], STORIES[2], STORIES[3]];
  const [activeMosaicIndex, setActiveMosaicIndex] = useState<number>(0);

  const selectedStories = [
    STORIES[4],
    STORIES[5],
    STORIES[8],
    STORIES[6],
    STORIES[9],
    STORIES[11],
  ];

  const timelineStories = [
    STORIES[6], // 05:40 AM
    STORIES[3], // 09:15 AM
    STORIES[4], // 02:15 PM
    STORIES[5], // 04:35 PM
    STORIES[2], // 08:30 PM
    STORIES[0], // 11:14 PM
  ];
  const [activeHourIndex, setActiveHourIndex] = useState<number>(5);

  const activeMosaicStory = mosaicStories[activeMosaicIndex];
  const activeHourStory = timelineStories[activeHourIndex];

  return (
    <div className="space-y-24 md:space-y-32 pb-12">
      {/* 1. CENTRAL STATEMENT & INTERACTIVE PORTRAIT MOSAIC */}
      <section className="pt-8 sm:pt-12 lg:pt-16 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 6 Columns: Central Statement & Editorial Lead */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-ochre text-charcoal text-xs sm:text-sm font-bold">
              <span>Issue No. 15 · Documentary & Literary Platform</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl xl:text-[3.65rem] leading-[1.02] tracking-tight text-charcoal">
              Even in a World That Keeps Moving, We’re Still Looking for Each Other.
            </h1>

            <p className="font-serif text-xl sm:text-2xl leading-relaxed text-charcoal-slate max-w-xl">
              Most of what holds a neighborhood together never makes the evening news: an umbrella tilted six inches at a red light, two extra chairs wedged behind a refrigerator, a wrench chained to a front stoop for whoever has a slipped chain.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/stories"
                className="btn-tactile inline-flex items-center gap-3 px-6 py-4 bg-coral text-charcoal font-display font-bold text-base border border-charcoal hover:bg-ochre"
              >
                <span>Read All 13 Dispatches</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>

              <Link
                to={`/stories/${featuredStory.slug}`}
                className="btn-tactile inline-flex items-center gap-2 px-6 py-4 bg-cream-sand text-charcoal font-display font-bold text-base border border-charcoal hover:bg-cobalt hover:text-cream"
              >
                <span>Featured Essay: The 11:14 Upright</span>
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>

            {/* Active Mosaic Field-Note Inspector Card */}
            <div
              className="mt-6 p-6 bg-cream-sand border-2 border-charcoal space-y-3"
              aria-live="polite"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-charcoal-slate">
                <span className="text-cobalt font-bold">
                  ACTIVE MOSAIC PLATE 0{activeMosaicIndex + 1} / 03 · {activeMosaicStory.dispatchNumber}
                </span>
                <span>
                  {activeMosaicStory.city} · {activeMosaicStory.timeOfDay}
                </span>
              </div>

              <blockquote className="font-serif italic text-lg text-charcoal leading-snug">
                “{activeMosaicStory.overheardQuote}”
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-rule text-xs text-charcoal-slate">
                <span className="flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                  {activeMosaicStory.leadPhoto.cameraNote}
                </span>
                <Link
                  to={`/stories/${activeMosaicStory.slug}`}
                  className="font-bold text-cobalt hover:text-coral-dark inline-flex items-center gap-1"
                >
                  <span>Read {activeMosaicStory.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Asymmetric 3-Photo Documentary Portrait Mosaic */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 sm:gap-5">
              {/* Primary Vertical Portrait (7 cols) */}
              <div className="col-span-12 sm:col-span-7 flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveMosaicIndex(0)}
                  className={`group text-left w-full focus:outline-none border-2 transition-colors ${
                    activeMosaicIndex === 0
                      ? 'border-coral bg-charcoal text-cream'
                      : 'border-charcoal bg-cream-sand text-charcoal hover:border-cobalt'
                  }`}
                >
                  <div className="photo-frame photo-grain aspect-[4/5] w-full">
                    <img
                      src={mosaicStories[0].leadPhoto.src}
                      alt={mosaicStories[0].leadPhoto.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <CategoryBadge category={mosaicStories[0].category} />
                      <span className="text-xs opacity-80">
                        {mosaicStories[0].timeOfDay}
                      </span>
                    </div>
                    <p className="font-display font-bold text-lg leading-tight pt-1">
                      {mosaicStories[0].title}
                    </p>
                    <p className="text-xs opacity-80">
                      {mosaicStories[0].city} — Click frame to inspect field note
                    </p>
                  </div>
                </button>
              </div>

              {/* Right Column Stacked Frames (5 cols) */}
              <div className="col-span-12 sm:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
                {mosaicStories.slice(1).map((story, idx) => {
                  const realIdx = idx + 1;
                  const isSelected = activeMosaicIndex === realIdx;
                  return (
                    <button
                      key={story.id}
                      type="button"
                      onClick={() => setActiveMosaicIndex(realIdx)}
                      className={`group text-left w-full focus:outline-none border-2 transition-colors ${
                        isSelected
                          ? 'border-coral bg-charcoal text-cream'
                          : 'border-charcoal bg-cream-sand text-charcoal hover:border-cobalt'
                      }`}
                    >
                      <div className="photo-frame photo-grain aspect-[16/11] w-full">
                        <img
                          src={story.leadPhoto.src}
                          alt={story.leadPhoto.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3.5 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <CategoryBadge category={story.category} />
                          <span className="text-[11px] opacity-80">
                            0{realIdx + 1}
                          </span>
                        </div>
                        <p className="font-display font-bold text-base leading-snug pt-0.5">
                          {story.title}
                        </p>
                        <p className="text-xs opacity-80">{story.city}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRODUCTION & MANIFESTO */}
      <section className="bg-cream-sand border-y border-rule py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-block px-3 py-1 bg-charcoal text-cream text-xs font-bold">
                Editorial Note · Issue No. 15
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight">
                Against the Myth That Everyone Is Looking Down.
              </h2>
              <p className="text-sm text-charcoal-slate leading-relaxed">
                By the Editors of COMMON HOURS · Autumn / Winter Field Report
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-lg sm:text-xl text-charcoal leading-relaxed">
              <div className="space-y-4">
                <p>
                  Spend an hour reading about modern life and you will be told that we have forgotten how to speak to one another—that every train car is a row of sealed capsules and every apartment hallway is a corridor of strangers.
                </p>
                <p>
                  Walk out onto an actual street corner in the rain, however, and a different ledger appears. You see the line cook who blocks a runaway orange with the side of his shoe. You see the retired machinist who bolts a bicycle pump to his iron fence for riders he will never meet.
                </p>
              </div>
              <div className="space-y-4 flex flex-col justify-between">
                <p>
                  This issue of <em>COMMON HOURS</em> avoids grand inspirational slogans. Instead, our writers and photographers spent six weeks logging specific, ordinary moments of human proximity across five coordinates: <strong>Friendship</strong>, <strong>Family</strong>, <strong>Kindness</strong>, <strong>Community</strong>, and <strong>Strangers</strong>.
                </p>
                <div className="p-5 bg-ochre text-charcoal font-sans text-sm space-y-2 border border-charcoal">
                  <p className="font-bold">How to read this issue:</p>
                  <p>
                    Explore the 24-hour proximity clock below, read the featured concourse dispatch, or save neighborhood initiatives to your Field Pocket in the top bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED HUMAN STORY SPREAD (COBALT BLUE & CORAL ARCHITECTURAL BLOCK) */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="bg-cobalt text-cream border-2 border-charcoal overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left 7 Cols: Documentary Plate */}
            <div className="lg:col-span-7 relative bg-charcoal flex flex-col justify-between">
              <div className="photo-frame photo-grain aspect-[16/10] w-full h-full">
                <img
                  src={featuredStory.leadPhoto.src}
                  alt={featuredStory.leadPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:px-6 bg-charcoal text-cream/90 text-xs flex flex-wrap items-center justify-between gap-2 border-t border-cream/15">
                <span>{featuredStory.leadPhoto.caption}</span>
                <span className="text-ochre font-semibold">
                  {featuredStory.leadPhoto.cameraNote}
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Editorial Essay Lead */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 bg-coral text-charcoal font-bold text-xs">
                    Featured Human Story · {featuredStory.dispatchNumber}
                  </span>
                  <span className="px-3 py-1 bg-cream/15 text-cream text-xs font-semibold">
                    {featuredStory.category}
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight text-cream">
                  {featuredStory.title}
                </h2>

                <p className="font-serif text-lg sm:text-xl text-cream/90 leading-relaxed">
                  {featuredStory.subtitle}
                </p>

                <blockquote className="p-4 bg-cobalt-deep border border-ochre/40 font-serif italic text-base sm:text-lg text-ochre">
                  “{featuredStory.overheardQuote}”
                </blockquote>

                <p className="text-sm text-cream/85 leading-relaxed">
                  {featuredStory.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-cream/20 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-cream/80">
                  <p className="font-bold text-cream">
                    By {featuredStory.author} · {featuredStory.readingTimeMinutes} min read
                  </p>
                  <p>
                    {featuredStory.city} · {featuredStory.timeOfDay}
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => toggleSaveStory(featuredStory.id)}
                    className={`btn-tactile px-3.5 py-3 text-xs font-bold border ${
                      isStorySaved(featuredStory.id)
                        ? 'bg-ochre text-charcoal border-charcoal'
                        : 'bg-cobalt-deep text-cream border-cream/30 hover:border-cream'
                    }`}
                    aria-label={
                      isStorySaved(featuredStory.id)
                        ? `Remove ${featuredStory.title} from Field Pocket`
                        : `Save ${featuredStory.title} to Field Pocket`
                    }
                  >
                    <Bookmark className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    {isStorySaved(featuredStory.id) ? 'Saved' : 'Save'}
                  </button>

                  <Link
                    to={`/stories/${featuredStory.slug}`}
                    className="btn-tactile inline-flex items-center gap-2 px-5 py-3 bg-ochre text-charcoal font-display font-bold text-sm hover:bg-coral"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE INTERACTIVE FEATURE: 24 HOURS OF HUMAN PROXIMITY */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="bg-cream-sand border-2 border-charcoal p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-rule">
            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal">
                Around the Clock: 24 Hours of Proximity
              </h2>
              <p className="text-sm sm:text-base text-charcoal-slate max-w-2xl">
                Select an hour of the day to inspect where connection is happening across our field dispatches—from the 5:40 AM bakery alley window to the 11:14 PM station upright.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-cobalt">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>Interactive Field Log · 6 Time Coordinates</span>
            </div>
          </div>

          {/* Time Selector Strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-6"
            role="tablist"
            aria-label="Select time of day"
          >
            {timelineStories.map((story, idx) => {
              const isSelected = idx === activeHourIndex;
              const shortTime = story.timeOfDay.split('·')[0].trim();
              const periodLabel = story.timeOfDay.split('·')[1]?.trim() || '';
              return (
                <button
                  key={story.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveHourIndex(idx)}
                  className={`btn-tactile p-3.5 text-left border transition-colors ${
                    isSelected
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                  }`}
                >
                  <span
                    className={`block font-display font-extrabold text-lg ${
                      isSelected ? 'text-ochre' : 'text-charcoal'
                    }`}
                  >
                    {shortTime}
                  </span>
                  <span className="block text-xs opacity-80 mt-0.5">
                    {periodLabel}
                  </span>
                  <span className="block text-xs font-semibold mt-2 truncate">
                    {story.city}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Hour Dispatch Panel */}
          <div
            role="tabpanel"
            className="mt-6 bg-cream border border-rule p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5">
              <div className="photo-frame photo-grain aspect-[16/10] w-full border border-charcoal">
                <img
                  src={activeHourStory.leadPhoto.src}
                  alt={activeHourStory.leadPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <CategoryBadge category={activeHourStory.category} size="md" />
                <span className="text-xs font-bold text-charcoal-slate flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                  {activeHourStory.city} ({activeHourStory.neighborhood})
                </span>
                <span className="text-xs font-semibold text-cobalt">
                  {activeHourStory.timeOfDay}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal">
                {activeHourStory.title}
              </h3>

              <p className="text-base text-charcoal-slate leading-relaxed">
                {activeHourStory.subtitle}
              </p>

              <div className="p-4 bg-ochre/30 border border-charcoal/30">
                <p className="font-serif italic text-base sm:text-lg text-charcoal">
                  “{activeHourStory.overheardQuote}”
                </p>
                <p className="text-xs text-charcoal-slate mt-1">
                  — {activeHourStory.overheardContext}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-semibold text-charcoal-slate">
                  Reported by {activeHourStory.author} · {activeHourStory.readingTimeMinutes} min read
                </span>
                <Link
                  to={`/stories/${activeHourStory.slug}`}
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream text-sm font-bold hover:bg-cobalt"
                >
                  <span>Read This Dispatch</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED STORIES — ASYMMETRIC EDITORIAL RIVER */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-charcoal pb-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal">
              Selected Dispatches from the Field
            </h2>
            <p className="font-serif text-lg text-charcoal-slate mt-1">
              Six moments of friendship, family, kindness, and neighborhood care from our twelve-story archive.
            </p>
          </div>
          <Link
            to="/stories"
            className="btn-tactile inline-flex items-center gap-2 px-5 py-3 bg-charcoal text-cream font-bold text-sm hover:bg-coral hover:text-charcoal self-start sm:self-auto"
          >
            <span>Explore All 12 Stories</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Row 1: Asymmetric 7 / 5 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Story A (7 cols) */}
          <article className="lg:col-span-7 bg-cream-sand border border-rule flex flex-col justify-between">
            <Link to={`/stories/${selectedStories[0].slug}`} className="group block">
              <div className="photo-frame photo-grain aspect-[16/10] w-full border-b border-rule">
                <img
                  src={selectedStories[0].leadPhoto.src}
                  alt={selectedStories[0].leadPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CategoryBadge category={selectedStories[0].category} />
                    <span className="text-xs font-bold text-charcoal-slate">
                      {selectedStories[0].dispatchNumber} · {selectedStories[0].distanceLabel}
                    </span>
                  </div>
                  <span className="text-xs text-charcoal-slate">
                    {selectedStories[0].city} · {selectedStories[0].timeOfDay}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal group-hover:text-cobalt transition-colors">
                  {selectedStories[0].title}
                </h3>

                <p className="text-base text-charcoal-slate leading-relaxed">
                  {selectedStories[0].subtitle}
                </p>

                <blockquote className="font-serif italic text-base text-charcoal pt-2 border-t border-rule">
                  “{selectedStories[0].overheardQuote}”
                </blockquote>
              </div>
            </Link>
          </article>

          {/* Story B (5 cols) */}
          <article className="lg:col-span-5 bg-cream-sand border border-rule flex flex-col justify-between">
            <Link to={`/stories/${selectedStories[1].slug}`} className="group block">
              <div className="photo-frame photo-grain aspect-[4/5] w-full border-b border-rule">
                <img
                  src={selectedStories[1].leadPhoto.src}
                  alt={selectedStories[1].leadPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <CategoryBadge category={selectedStories[1].category} />
                  <span className="text-xs text-charcoal-slate">
                    {selectedStories[1].city}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-charcoal group-hover:text-coral transition-colors">
                  {selectedStories[1].title}
                </h3>

                <p className="text-sm text-charcoal-slate leading-relaxed">
                  {selectedStories[1].subtitle}
                </p>
              </div>
            </Link>
          </article>
        </div>

        {/* Row 2: Asymmetric 4 / 4 / 4 Staggered Heights with Ochre Quote Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {selectedStories.slice(2, 5).map((story, i) => (
            <article
              key={story.id}
              className={`md:col-span-4 border border-charcoal flex flex-col justify-between ${
                i === 1 ? 'bg-ochre text-charcoal' : 'bg-cream text-charcoal'
              }`}
            >
              <Link to={`/stories/${story.slug}`} className="group block flex-1">
                <div className="photo-frame photo-grain aspect-[1/1] w-full border-b border-charcoal">
                  <img
                    src={story.leadPhoto.src}
                    alt={story.leadPhoto.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <CategoryBadge category={story.category} />
                    <span className="text-xs font-semibold opacity-80">
                      {story.dispatchNumber}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-tight group-hover:underline">
                    {story.title}
                  </h3>

                  <p className="text-sm opacity-90 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
              <div className="px-6 py-3.5 border-t border-charcoal/20 flex items-center justify-between text-xs font-semibold">
                <span>
                  {story.city} · {story.readingTimeMinutes} min read
                </span>
                <Link
                  to={`/stories/${story.slug}`}
                  className="font-bold underline hover:text-cobalt"
                >
                  Read Story
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Row 3: Horizontal Feature Strip for Story 12 */}
        <article className="bg-charcoal text-cream border-2 border-charcoal p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="photo-frame photo-grain aspect-[4/5] max-h-80 w-full">
                <img
                  src={selectedStories[5].leadPhoto.src}
                  alt={selectedStories[5].leadPhoto.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <CategoryBadge category={selectedStories[5].category} />
                <span className="text-xs text-ochre font-semibold">
                  {selectedStories[5].dispatchNumber} · {selectedStories[5].city}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-cream">
                {selectedStories[5].title}
              </h3>
              <p className="font-serif text-lg sm:text-xl text-cream/85 leading-relaxed">
                {selectedStories[5].subtitle}
              </p>
              <blockquote className="font-serif italic text-ochre text-base sm:text-lg flex items-start gap-2">
                <MessageSquareQuote className="w-5 h-5 shrink-0 mt-1" aria-hidden="true" />
                <span>“{selectedStories[5].overheardQuote}”</span>
              </blockquote>
              <div className="pt-2">
                <Link
                  to={`/stories/${selectedStories[5].slug}`}
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-3 bg-coral text-charcoal font-bold text-sm hover:bg-ochre"
                >
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* 6. COMMUNITY & SHARE A STORY DUAL BRIDGE */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Community Preview (7 cols) */}
          <div className="lg:col-span-7 bg-ochre text-charcoal border-2 border-charcoal p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-charcoal text-cream text-xs font-bold">
                Community Directory · 10 Local Tables
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                People Building the Quiet Infrastructure of Care.
              </h2>
              <p className="text-base leading-relaxed max-w-xl">
                From the Tuesday Soup Window in Pilsen to a midnight language table in Jackson Heights, explore our directory of ten fictionalized neighborhood initiatives and how strangers join in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMMUNITY_INITIATIVES.slice(0, 2).map((init) => (
                <div
                  key={init.id}
                  className="bg-cream p-4 border border-charcoal space-y-1.5"
                >
                  <span className="text-xs font-bold text-cobalt">
                    {init.category} · {init.city}
                  </span>
                  <h3 className="font-display font-bold text-lg">{init.name}</h3>
                  <p className="text-xs text-charcoal-slate">{init.schedule}</p>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/community"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-cream font-display font-bold text-sm hover:bg-cobalt"
              >
                <span>Open the Community Directory</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Share a Story Invitation (5 cols) */}
          <div className="lg:col-span-5 bg-coral text-charcoal border-2 border-charcoal p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-charcoal text-cream text-xs font-bold">
                Reader Dispatches · Local Demo Archive
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                What Small Act of Kindness Did You Witness This Week?
              </h2>
              <p className="text-base leading-relaxed">
                Our Share a Story desk lets you log a moment of connection—who was there, the time of day, and what was said. Stored directly in your browser for this editorial demonstration.
              </p>
            </div>

            <div className="p-4 bg-cream border border-charcoal text-xs space-y-1">
              <p className="font-bold">Recent Reader Dispatch:</p>
              <p className="font-serif italic text-sm">
                “Keep the jumper cables in your trunk. Somebody else is going to leave their dome light on next week.”
              </p>
              <p className="text-charcoal-slate">— Baltimore, MD · 11:45 PM</p>
            </div>

            <div>
              <Link
                to="/share"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-cream font-display font-bold text-sm hover:bg-cream hover:text-charcoal border border-charcoal"
              >
                <span>Share a Story Now</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
