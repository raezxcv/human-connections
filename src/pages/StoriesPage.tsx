import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  Bookmark,
  Heart,
  LayoutGrid,
  ListFilter,
  MapPin,
  Search,
  Table,
  X,
} from 'lucide-react';
import { STORIES, STORY_CATEGORIES } from '../data/stories';
import { StoryCategory } from '../types/editorial';
import { CategoryBadge } from '../components/CategoryBadge';
import { useFieldPocket } from '../context/FieldPocketContext';

export const StoriesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as 'All' | StoryCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<'All' | StoryCategory>(
    initialCategory && STORY_CATEGORIES.includes(initialCategory)
      ? initialCategory
      : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'mosaic' | 'index'>('mosaic');

  const {
    isStorySaved,
    toggleSaveStory,
    hasResonated,
    toggleResonateStory,
  } = useFieldPocket();

  const handleCategoryChange = (cat: 'All' | StoryCategory) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: STORIES.length };
    for (const s of STORIES) {
      counts[s.category] = (counts[s.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredStories = useMemo(() => {
    return STORIES.filter((story) => {
      const matchesCat =
        selectedCategory === 'All' || story.category === selectedCategory;
      if (!matchesCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        story.title.toLowerCase().includes(q) ||
        story.subtitle.toLowerCase().includes(q) ||
        story.city.toLowerCase().includes(q) ||
        story.neighborhood.toLowerCase().includes(q) ||
        story.overheardQuote.toLowerCase().includes(q) ||
        story.author.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-10 sm:py-16 space-y-12">
      {/* Page Editorial Header */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b-2 border-charcoal items-end">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral text-charcoal font-bold text-xs">
            <span>The Complete Dispatch Archive · {STORIES.length} Original Stories</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.02] tracking-tight">
            Dispatches on Human Proximity.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-charcoal-slate max-w-2xl leading-relaxed">
            Thirteen field reports categorized across friendship, family, kindness, community, and strangers—logged by time of day, street corner, and what was overheard.
          </p>
        </div>

        <div className="lg:col-span-4 bg-cream-sand border border-rule p-5 space-y-2 text-xs text-charcoal-slate">
          <p className="font-bold text-charcoal text-sm">
            Archive Cataloging Protocol
          </p>
          <p>
            Every story in this issue pairs documentary photography with unscripted human testimony. Click any dispatch to open the long-form essay with full camera notes and related moments.
          </p>
        </div>
      </header>

      {/* Filter & Search Console */}
      <section
        aria-label="Filter and search stories"
        className="bg-cream-sand border-2 border-charcoal p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter stories by category"
          >
            {STORY_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={active}
                  className={`btn-tactile px-3.5 py-2 text-xs sm:text-sm font-bold border transition-colors ${
                    active
                      ? 'bg-charcoal text-cream border-charcoal'
                      : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`ml-2 px-1.5 py-0.5 text-[11px] ${
                      active
                        ? 'bg-coral text-charcoal'
                        : 'bg-cream-sand text-charcoal-slate'
                    }`}
                  >
                    {categoryCounts[category] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & View Switcher */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <label htmlFor="story-search-input" className="sr-only">
                Search stories by city, title, or overheard quote
              </label>
              <Search
                className="w-4 h-4 text-charcoal-slate absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="story-search-input"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, quote, or subject..."
                className="w-full pl-10 pr-9 py-2 bg-cream border border-charcoal text-sm text-charcoal placeholder:text-charcoal-muted"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-charcoal-slate hover:text-charcoal"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div
              className="inline-flex border border-charcoal bg-cream"
              role="group"
              aria-label="Select archive layout view"
            >
              <button
                type="button"
                onClick={() => setViewMode('mosaic')}
                aria-pressed={viewMode === 'mosaic'}
                className={`px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 ${
                  viewMode === 'mosaic'
                    ? 'bg-cobalt text-cream'
                    : 'text-charcoal hover:bg-cream-sand'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Mosaic</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('index')}
                aria-pressed={viewMode === 'index'}
                className={`px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 border-l border-charcoal ${
                  viewMode === 'index'
                    ? 'bg-cobalt text-cream'
                    : 'text-charcoal hover:bg-cream-sand'
                }`}
              >
                <Table className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Field Index</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Status */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-rule text-xs text-charcoal-slate"
          aria-live="polite"
        >
          <span className="flex items-center gap-1.5 font-semibold">
            <ListFilter className="w-3.5 h-3.5 text-cobalt" aria-hidden="true" />
            Showing {filteredStories.length} of {STORIES.length} dispatches
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            {searchQuery ? ` matching “${searchQuery}”` : ''}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('All');
                setSearchQuery('');
              }}
              className="font-bold text-coral-dark hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>
      </section>

      {/* Empty State */}
      {filteredStories.length === 0 ? (
        <div
          role="status"
          className="bg-cream-sand border-2 border-charcoal p-12 text-center space-y-4"
        >
          <h2 className="font-display font-bold text-2xl text-charcoal">
            No field dispatches match that filter combination.
          </h2>
          <p className="text-sm text-charcoal-slate max-w-md mx-auto">
            Try clearing your search keyword or switching back to “All” categories to inspect all {STORIES.length} human connection stories.
          </p>
          <button
            type="button"
            onClick={() => {
              handleCategoryChange('All');
              setSearchQuery('');
            }}
            className="btn-tactile px-5 py-2.5 bg-charcoal text-cream text-sm font-bold hover:bg-cobalt"
          >
            Show All {STORIES.length} Stories
          </button>
        </div>
      ) : viewMode === 'index' ? (
        /* FIELD INDEX TABLE VIEW */
        <div className="bg-cream border-2 border-charcoal overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-charcoal text-cream text-xs uppercase">
                <th className="py-3.5 px-4 font-bold">No.</th>
                <th className="py-3.5 px-4 font-bold">Title & Overheard Line</th>
                <th className="py-3.5 px-4 font-bold">Category</th>
                <th className="py-3.5 px-4 font-bold">City & Time</th>
                <th className="py-3.5 px-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule text-sm">
              {filteredStories.map((story) => (
                <tr
                  key={story.id}
                  className="hover:bg-cream-sand transition-colors"
                >
                  <td className="py-4 px-4 font-display font-bold text-cobalt whitespace-nowrap align-top">
                    {story.dispatchNumber}
                  </td>
                  <td className="py-4 px-4 align-top max-w-xl">
                    <Link
                      to={`/stories/${story.slug}`}
                      className="font-display font-bold text-lg text-charcoal hover:text-coral block"
                    >
                      {story.title}
                    </Link>
                    <p className="text-xs text-charcoal-slate mt-0.5">
                      {story.subtitle}
                    </p>
                    <p className="font-serif italic text-xs text-charcoal mt-1.5">
                      “{story.overheardQuote}”
                    </p>
                  </td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    <CategoryBadge category={story.category} />
                  </td>
                  <td className="py-4 px-4 align-top text-xs text-charcoal-slate whitespace-nowrap">
                    <span className="font-semibold text-charcoal block">
                      {story.city}
                    </span>
                    <span>{story.timeOfDay}</span>
                  </td>
                  <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                    <Link
                      to={`/stories/${story.slug}`}
                      className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-2 bg-charcoal text-cream text-xs font-bold hover:bg-cobalt"
                    >
                      <span>Read ({story.readingTimeMinutes}m)</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* ASYMMETRIC EDITORIAL MOSAIC VIEW */
        <div className="space-y-12">
          {filteredStories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            const isAccentSpread = idx % 4 === 1;
            const saved = isStorySaved(story.id);
            const resonated = hasResonated(story.id);
            const resonanceTotal =
              story.initialResonanceCount + (resonated ? 1 : 0);

            return (
              <article
                key={story.id}
                className={`border-2 border-charcoal transition-colors ${
                  isAccentSpread
                    ? 'bg-cream-sand'
                    : 'bg-cream'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Photo Column (Alternating Left/Right on Desktop) */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between bg-charcoal text-cream ${
                      !isEven ? 'lg:order-2 border-t lg:border-t-0 lg:border-l border-charcoal' : 'border-b lg:border-b-0 lg:border-r border-charcoal'
                    }`}
                  >
                    <Link
                      to={`/stories/${story.slug}`}
                      className="photo-frame photo-grain aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full w-full block"
                    >
                      <img
                        src={story.leadPhoto.src}
                        alt={story.leadPhoto.alt}
                        className="w-full h-full object-cover min-h-[260px]"
                      />
                    </Link>
                    <div className="p-3.5 px-5 bg-charcoal text-cream/85 text-xs flex items-center justify-between gap-2 border-t border-cream/15">
                      <span className="truncate">{story.leadPhoto.cameraNote}</span>
                      <span className="text-ochre font-bold shrink-0">
                        {story.distanceLabel}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Narrative Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-9 lg:p-10 flex flex-col justify-between space-y-6 ${
                      !isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Metadata Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-display font-extrabold text-sm px-2.5 py-0.5 bg-charcoal text-ochre">
                            {story.dispatchNumber}
                          </span>
                          <CategoryBadge category={story.category} size="md" />
                        </div>

                        <div className="flex items-center gap-3 text-xs font-semibold text-charcoal-slate">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                            {story.city}
                          </span>
                          <span>·</span>
                          <span>{story.timeOfDay}</span>
                        </div>
                      </div>

                      {/* Headline & Subtitle */}
                      <Link
                        to={`/stories/${story.slug}`}
                        className="group block space-y-2"
                      >
                        <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal group-hover:text-cobalt transition-colors leading-tight">
                          {story.title}
                        </h2>
                        <p className="font-serif text-lg sm:text-xl text-charcoal-slate leading-relaxed">
                          {story.subtitle}
                        </p>
                      </Link>

                      {/* Overheard Field Quote */}
                      <blockquote className="p-4 bg-ochre/35 border border-charcoal/30 space-y-1">
                        <p className="font-serif italic text-base sm:text-lg text-charcoal">
                          “{story.overheardQuote}”
                        </p>
                        <footer className="text-xs text-charcoal-slate">
                          — {story.overheardContext}
                        </footer>
                      </blockquote>

                      {/* Excerpt */}
                      <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                        {story.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-5 border-t border-rule flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => toggleResonateStory(story.id)}
                          aria-pressed={resonated}
                          className={`btn-tactile inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold border ${
                            resonated
                              ? 'bg-coral text-charcoal border-charcoal'
                              : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                          }`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              resonated ? 'fill-charcoal' : ''
                            }`}
                            aria-hidden="true"
                          />
                          <span>Stayed With Me ({resonanceTotal})</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleSaveStory(story.id)}
                          aria-pressed={saved}
                          className={`btn-tactile inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold border ${
                            saved
                              ? 'bg-cobalt text-cream border-charcoal'
                              : 'bg-cream text-charcoal border-rule hover:border-charcoal'
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{saved ? 'In Pocket' : 'Save to Pocket'}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs text-charcoal-slate font-medium">
                          By {story.author} · {story.readingTimeMinutes} min read
                        </span>
                        <Link
                          to={`/stories/${story.slug}`}
                          className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream text-xs sm:text-sm font-bold hover:bg-cobalt"
                        >
                          <span>Read Full Essay</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
