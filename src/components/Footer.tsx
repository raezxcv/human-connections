import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream border-t-4 border-coral mt-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 pt-16 pb-12">
        {/* Top Editorial Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-cream/15">
          <div className="md:col-span-5 space-y-4">
            <p className="font-serif italic text-ochre text-lg">
              Issue No. 15 — The Proximity Issue
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-cream leading-tight">
              Even in a World That Keeps Moving, We’re Still Looking for Each Other.
            </h2>
            <p className="text-sm text-cream/80 leading-relaxed max-w-md">
              COMMON HOURS is an independent documentary editorial journal cataloging the small, unscripted rituals of friendship, family, kindness, community, and strangers helping strangers.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-base text-ochre">
              Issue Architecture
            </h3>
            <ul className="space-y-2 text-sm text-cream/85">
              <li>
                <Link to="/" className="hover:text-coral transition-colors">
                  Home — Central Statement & Mosaic
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-coral transition-colors">
                  Stories — 12 Documentary Dispatches
                </Link>
              </li>
              <li>
                <Link
                  to="/stories/the-11-14-upright-at-union-concourse"
                  className="hover:text-coral transition-colors"
                >
                  Story Detail — Featured Long-Form Essay
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-coral transition-colors">
                  Community — 10 Neighborhood Tables
                </Link>
              </li>
              <li>
                <Link to="/share" className="hover:text-coral transition-colors">
                  Share a Story — Reader Dispatch Desk
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display font-bold text-base text-ochre">
              Submit a Field Observation
            </h3>
            <p className="text-sm text-cream/80 leading-relaxed">
              Did someone hold a bus door, pass a bowl across a fence, or leave a note in a used paperback? Add your moment to your local browser archive.
            </p>
            <Link
              to="/share"
              className="btn-tactile inline-flex items-center gap-2 px-5 py-3 bg-coral text-charcoal font-bold text-sm hover:bg-ochre"
            >
              <span>Open the Dispatch Form</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Full-Width Publication Return Name */}
        <div className="py-10 border-b border-cream/15">
          <p
            className="font-display font-extrabold text-[11vw] sm:text-[9.5vw] leading-[0.88] tracking-tight text-cream select-none"
            aria-hidden="true"
          >
            COMMON HOURS
          </p>
        </div>

        {/* Bottom Credits & Transparent Notes */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-cream/70">
          <p>
            © 2026 COMMON HOURS Editorial Studio · Project 15 (Human Connection). Set in Bricolage Grotesque, Newsreader, and Plus Jakarta Sans.
          </p>
          <p className="max-w-2xl">
            Documentary photography curated from Wikimedia Commons, National Archives, and open documentary collections (It’s No Game, John Englart, Keya Wakpala, Pori Jazz Archive, Unsplash Documentary Contributors). All community initiatives and dispatches are editorial fiction crafted for this issue.
          </p>
        </div>
      </div>
    </footer>
  );
};

