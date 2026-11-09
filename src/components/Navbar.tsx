import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bookmark, Menu, X, ArrowUpRight, Trash2 } from 'lucide-react';
import { useFieldPocket } from '../context/FieldPocketContext';
import { STORIES } from '../data/stories';
import { COMMUNITY_INITIATIVES } from '../data/community';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    savedStoryIds,
    savedInitiativeIds,
    toggleSaveStory,
    toggleSaveInitiative,
    isPocketOpen,
    setIsPocketOpen,
  } = useFieldPocket();

  const totalSaved = savedStoryIds.length + savedInitiativeIds.length;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsPocketOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsPocketOpen]);

  const savedStories = STORIES.filter((s) => savedStoryIds.includes(s.id));
  const savedInitiatives = COMMUNITY_INITIATIVES.filter((i) =>
    savedInitiativeIds.includes(i.id)
  );

  const isStoryDetailRoute =
    location.pathname.startsWith('/stories/') && location.pathname !== '/stories';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main editorial content
      </a>

      {/* Top Issue Colophon Strip */}
      <div className="bg-charcoal text-cream border-b border-charcoal/20 text-xs">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-coral" aria-hidden="true" />
            <span className="font-sans font-semibold tracking-tight">
              Issue No. 15 · The Proximity Issue
            </span>
            <span className="hidden md:inline text-cream/75">
              — Even in a World That Keeps Moving, We’re Still Looking for Each Other
            </span>
          </div>
          <div className="flex items-center gap-4 text-cream/80">
            <span>13 Documentary Dispatches</span>
            <span aria-hidden="true">·</span>
            <span>10 Neighborhood Tables</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Masthead */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            className="group flex items-center focus:outline-none"
            aria-label="COMMON HOURS — Return to Home Page"
          >
            <BrandLogo variant="header" />
          </Link>

          {/* Desktop Navigation (All 5 Pages) */}
          <nav
            aria-label="Primary Editorial Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-charcoal text-cream font-semibold'
                    : 'text-charcoal hover:bg-cream-sand'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/stories"
              end
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-charcoal text-cream font-semibold'
                    : 'text-charcoal hover:bg-cream-sand'
                }`
              }
            >
              Stories (13)
            </NavLink>

            <Link
              to="/stories/the-11-14-upright-at-union-concourse"
              aria-current={isStoryDetailRoute ? 'page' : undefined}
              className={`px-3.5 py-2 text-sm font-medium transition-colors ${
                isStoryDetailRoute
                  ? 'bg-cobalt text-cream font-semibold'
                  : 'text-charcoal hover:bg-cream-sand'
              }`}
            >
              Story Detail
            </Link>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-charcoal text-cream font-semibold'
                    : 'text-charcoal hover:bg-cream-sand'
                }`
              }
            >
              Community
            </NavLink>

            <NavLink
              to="/share"
              className={({ isActive }) =>
                `ml-1 px-4 py-2 text-sm font-semibold btn-tactile border border-charcoal ${
                  isActive
                    ? 'bg-coral text-charcoal border-charcoal'
                    : 'bg-ochre text-charcoal hover:bg-coral'
                }`
              }
            >
              Share a Story
            </NavLink>
          </nav>

          {/* Right Controls: Field Pocket + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsPocketOpen(true)}
              className="btn-tactile inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold bg-cream-sand hover:bg-cream-deep text-charcoal border border-rule"
              aria-label={`Open Field Pocket (${totalSaved} saved items)`}
            >
              <Bookmark className="w-4 h-4 text-cobalt fill-cobalt/20" aria-hidden="true" />
              <span className="hidden sm:inline">Field Pocket</span>
              <span className="px-1.5 py-0.5 text-xs bg-cobalt text-cream font-bold">
                {totalSaved}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden btn-tactile p-2.5 bg-charcoal text-cream"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-editorial-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-editorial-menu"
            aria-label="Mobile Editorial Navigation"
            className="lg:hidden bg-cream border-b-2 border-charcoal px-5 py-6 space-y-3"
          >
            <div className="grid grid-cols-1 gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-display font-bold flex items-center justify-between ${
                    isActive ? 'bg-charcoal text-cream' : 'bg-cream-sand text-charcoal'
                  }`
                }
              >
                <span>Home — Issue No. 15</span>
                <span className="text-xs font-sans font-normal opacity-80">Overview</span>
              </NavLink>

              <NavLink
                to="/stories"
                end
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-display font-bold flex items-center justify-between ${
                    isActive ? 'bg-charcoal text-cream' : 'bg-cream-sand text-charcoal'
                  }`
                }
              >
                <span>Stories Archive</span>
                <span className="text-xs font-sans font-normal opacity-80">12 Dispatches</span>
              </NavLink>

              <Link
                to="/stories/the-11-14-upright-at-union-concourse"
                className={`px-4 py-3 text-base font-display font-bold flex items-center justify-between ${
                  isStoryDetailRoute ? 'bg-cobalt text-cream' : 'bg-cream-sand text-charcoal'
                }`}
              >
                <span>Story Detail (Featured Essay)</span>
                <span className="text-xs font-sans font-normal opacity-80">Long-form</span>
              </Link>

              <NavLink
                to="/community"
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-display font-bold flex items-center justify-between ${
                    isActive ? 'bg-charcoal text-cream' : 'bg-cream-sand text-charcoal'
                  }`
                }
              >
                <span>Community Directory</span>
                <span className="text-xs font-sans font-normal opacity-80">10 Initiatives</span>
              </NavLink>

              <NavLink
                to="/share"
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-display font-bold flex items-center justify-between border border-charcoal ${
                    isActive ? 'bg-coral text-charcoal' : 'bg-ochre text-charcoal'
                  }`
                }
              >
                <span>Share a Story</span>
                <span className="text-xs font-sans font-semibold">Submit Dispatch</span>
              </NavLink>
            </div>
          </nav>
        )}
      </header>

      {/* Field Pocket Slide-Over Drawer */}
      {isPocketOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-charcoal/60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="field-pocket-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPocketOpen(false);
          }}
        >
          <div className="w-full max-w-md bg-cream h-full overflow-y-auto border-l-2 border-charcoal p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-rule">
                <div>
                  <h2
                    id="field-pocket-title"
                    className="font-display font-bold text-2xl text-charcoal"
                  >
                    Your Field Pocket
                  </h2>
                  <p className="text-sm text-charcoal-slate mt-1">
                    Stories and neighborhood tables you’ve set aside to revisit (saved locally in this browser).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPocketOpen(false)}
                  className="btn-tactile p-2 bg-cream-sand hover:bg-charcoal hover:text-cream text-charcoal"
                  aria-label="Close Field Pocket"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Saved Stories Section */}
              <div className="mt-6">
                <h3 className="font-display font-bold text-base text-charcoal flex items-center justify-between">
                  <span>Bookmarked Stories</span>
                  <span className="text-xs font-sans px-2 py-0.5 bg-cream-sand">
                    {savedStories.length}
                  </span>
                </h3>
                {savedStories.length === 0 ? (
                  <p className="text-sm text-charcoal-slate mt-2 bg-cream-sand p-4">
                    No stories bookmarked yet. Click “Save to Pocket” on any dispatch to keep it here.
                  </p>
                ) : (
                  <ul className="mt-3 space-y-2.5">
                    {savedStories.map((story) => (
                      <li
                        key={story.id}
                        className="p-3.5 bg-cream-sand border border-rule flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-xs font-semibold text-cobalt">
                            {story.dispatchNumber} · {story.category}
                          </span>
                          <Link
                            to={`/stories/${story.slug}`}
                            onClick={() => setIsPocketOpen(false)}
                            className="block font-display font-bold text-base text-charcoal hover:text-coral mt-0.5"
                          >
                            {story.title}
                          </Link>
                          <span className="text-xs text-charcoal-slate">
                            {story.city} · {story.timeOfDay}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleSaveStory(story.id)}
                          className="p-1.5 text-charcoal-slate hover:text-coral-dark"
                          aria-label={`Remove ${story.title} from Field Pocket`}
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Saved Community Initiatives Section */}
              <div className="mt-8">
                <h3 className="font-display font-bold text-base text-charcoal flex items-center justify-between">
                  <span>Saved Community Tables</span>
                  <span className="text-xs font-sans px-2 py-0.5 bg-cream-sand">
                    {savedInitiatives.length}
                  </span>
                </h3>
                {savedInitiatives.length === 0 ? (
                  <p className="text-sm text-charcoal-slate mt-2 bg-cream-sand p-4">
                    No community initiatives saved yet. Explore the Community Directory to save neighborhood tables.
                  </p>
                ) : (
                  <ul className="mt-3 space-y-2.5">
                    {savedInitiatives.map((item) => (
                      <li
                        key={item.id}
                        className="p-3.5 bg-cream-sand border border-rule flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-xs font-semibold text-coral-dark">
                            {item.category} · {item.city}
                          </span>
                          <Link
                            to="/community"
                            onClick={() => setIsPocketOpen(false)}
                            className="block font-display font-bold text-base text-charcoal hover:text-cobalt mt-0.5"
                          >
                            {item.name}
                          </Link>
                          <span className="text-xs text-charcoal-slate block mt-0.5">
                            {item.schedule}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleSaveInitiative(item.id)}
                          className="p-1.5 text-charcoal-slate hover:text-coral-dark"
                          aria-label={`Remove ${item.name} from Field Pocket`}
                        >
                          <Trash2 className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-rule mt-8 flex flex-col gap-2">
              <Link
                to="/share"
                onClick={() => setIsPocketOpen(false)}
                className="btn-tactile w-full py-3 px-4 bg-charcoal text-cream font-semibold text-sm flex items-center justify-center gap-2 hover:bg-cobalt"
              >
                <span>Record Your Own Moment</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
