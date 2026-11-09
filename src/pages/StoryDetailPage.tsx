import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Camera,
  Clock,
  Eye,
  Heart,
  MapPin,
} from 'lucide-react';
import { STORIES } from '../data/stories';
import { CategoryBadge } from '../components/CategoryBadge';
import { useFieldPocket } from '../context/FieldPocketContext';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const {
    isStorySaved,
    toggleSaveStory,
    hasResonated,
    toggleResonateStory,
  } = useFieldPocket();

  const currentIndex = STORIES.findIndex((s) => s.slug === slug);
  const story = currentIndex >= 0 ? STORIES[currentIndex] : STORIES[0];
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;

  const prevStory =
    STORIES[(activeIndex - 1 + STORIES.length) % STORIES.length];
  const nextStory = STORIES[(activeIndex + 1) % STORIES.length];

  const relatedStories = STORIES.filter(
    (s) =>
      s.id !== story.id &&
      (s.category === story.category ||
        s.distanceLabel === story.distanceLabel)
  ).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [story.slug]);

  const saved = isStorySaved(story.id);
  const resonated = hasResonated(story.id);
  const resonanceCount = story.initialResonanceCount + (resonated ? 1 : 0);

  return (
    <article className="pb-20">
      {/* Top Dispatch Selector Strip */}
      <div className="bg-cream-sand border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-3 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-charcoal hover:text-cobalt"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All {STORIES.length} Stories</span>
          </Link>

          <div className="flex items-center gap-2 min-w-0 max-w-full">
            <label
              htmlFor="dispatch-jump-select"
              className="text-xs font-semibold text-charcoal-slate hidden sm:inline shrink-0"
            >
              Jump to Dispatch:
            </label>
            <select
              id="dispatch-jump-select"
              value={story.slug}
              onChange={(e) => navigate(`/stories/${e.target.value}`)}
              className="bg-cream border border-charcoal px-3 py-1.5 text-xs sm:text-sm font-semibold text-charcoal max-w-[215px] sm:max-w-md truncate"
            >
              {STORIES.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.dispatchNumber} — {s.title} ({s.category})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Essay Header */}
      <header className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 pt-10 sm:pt-14 pb-10">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-charcoal text-ochre font-display font-bold text-xs sm:text-sm">
              Dispatch {story.dispatchNumber}
            </span>
            <CategoryBadge category={story.category} size="md" />
            <span className="px-3 py-1 bg-cream-sand border border-rule text-xs font-semibold text-charcoal-slate">
              {story.distanceLabel}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.03] tracking-tight">
            {story.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] text-charcoal-slate leading-relaxed">
            {story.subtitle}
          </p>

          {/* Byline & Field Coordinates Bar */}
          <div className="pt-4 border-t-2 border-charcoal grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div>
              <span className="block text-xs text-charcoal-slate">Written by</span>
              <span className="font-bold text-charcoal">{story.author}</span>
              <span className="block text-xs text-charcoal-slate">
                {story.authorRole}
              </span>
            </div>
            <div>
              <span className="block text-xs text-charcoal-slate">
                Documentary Plate
              </span>
              <span className="font-bold text-charcoal">
                {story.photographer}
              </span>
            </div>
            <div>
              <span className="block text-xs text-charcoal-slate">
                Location
              </span>
              <span className="font-bold text-charcoal flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-coral shrink-0" aria-hidden="true" />
                {story.city}
              </span>
              <span className="block text-xs text-charcoal-slate">
                {story.neighborhood}
              </span>
            </div>
            <div>
              <span className="block text-xs text-charcoal-slate">
                Time Logged
              </span>
              <span className="font-bold text-cobalt flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {story.timeOfDay}
              </span>
              <span className="block text-xs text-charcoal-slate">
                {story.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Lead Documentary Photograph Spread */}
      <section
        aria-label="Lead documentary photograph"
        className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 pb-14"
      >
        <figure className="bg-charcoal text-cream border-2 border-charcoal">
          <div className="photo-frame photo-grain aspect-[16/9] max-h-[640px] w-full">
            <img
              src={story.leadPhoto.src}
              alt={story.leadPhoto.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="p-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center border-t border-cream/15 text-xs sm:text-sm">
            <div className="lg:col-span-8 text-cream/90 leading-relaxed">
              <strong className="text-ochre mr-2">PLATE I:</strong>
              {story.leadPhoto.caption}
            </div>
            <div className="lg:col-span-4 lg:text-right text-xs text-cream/75 space-y-0.5">
              <p className="font-semibold text-cream flex lg:justify-end items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                {story.leadPhoto.cameraNote}
              </p>
              <p>{story.leadPhoto.credit}</p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Two-Column Long-Form Essay Layout */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Field-Note Rail (4 columns) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 order-2 lg:order-1">
            {/* Overheard on Site Box */}
            <div className="bg-ochre text-charcoal border-2 border-charcoal p-6 space-y-3">
              <span className="inline-block px-2.5 py-0.5 bg-charcoal text-cream text-xs font-bold">
                Overheard on Site
              </span>
              <blockquote className="font-serif italic text-xl leading-snug">
                “{story.overheardQuote}”
              </blockquote>
              <p className="text-xs font-semibold pt-2 border-t border-charcoal/20">
                {story.overheardContext}
              </p>
            </div>

            {/* Small Things Noticed Checklist */}
            <div className="bg-cream-sand border border-charcoal p-6 space-y-3.5">
              <h2 className="font-display font-bold text-lg text-charcoal flex items-center gap-2">
                <Eye className="w-4 h-4 text-cobalt" aria-hidden="true" />
                <span>Small Things Noticed</span>
              </h2>
              <ul className="space-y-2.5 text-sm text-charcoal-slate">
                {story.smallThingsNoticed.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-coral mt-2 shrink-0" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reader Resonance & Save Controls */}
            <div className="bg-cream border-2 border-charcoal p-6 space-y-4">
              <h2 className="font-display font-bold text-base text-charcoal">
                Reader Response
              </h2>
              <p className="text-xs text-charcoal-slate">
                Mark if this moment stayed with you, or save this essay to your Field Pocket.
              </p>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => toggleResonateStory(story.id)}
                  aria-pressed={resonated}
                  className={`btn-tactile w-full py-3 px-4 text-sm font-bold border border-charcoal flex items-center justify-between ${
                    resonated
                      ? 'bg-coral text-charcoal'
                      : 'bg-cream-sand text-charcoal hover:bg-ochre'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Heart
                      className={`w-4 h-4 ${resonated ? 'fill-charcoal' : ''}`}
                      aria-hidden="true"
                    />
                    <span>
                      {resonated
                        ? 'Stayed With Me (Recorded)'
                        : 'This Moment Stayed With Me'}
                    </span>
                  </span>
                  <span className="px-2 py-0.5 bg-charcoal text-cream text-xs">
                    {resonanceCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleSaveStory(story.id)}
                  aria-pressed={saved}
                  className={`btn-tactile w-full py-3 px-4 text-sm font-bold border border-charcoal flex items-center justify-center gap-2 ${
                    saved
                      ? 'bg-cobalt text-cream'
                      : 'bg-cream text-charcoal hover:bg-cream-sand'
                  }`}
                >
                  <Bookmark className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {saved ? 'Saved in Field Pocket' : 'Save Story to Field Pocket'}
                  </span>
                </button>
              </div>
            </div>

            {/* Photographic Spec Dossier */}
            <div className="bg-cream-sand border border-rule p-5 text-xs space-y-2 text-charcoal-slate">
              <p className="font-bold text-charcoal">
                Documentary Plate Specification
              </p>
              <p>
                <strong>Subject:</strong> {story.leadPhoto.subject}
              </p>
              <p>
                <strong>Environment:</strong> {story.leadPhoto.environment}
              </p>
              <p>
                <strong>Lighting:</strong> {story.leadPhoto.lighting}
              </p>
              <p>
                <strong>Lens & Exposure:</strong> {story.leadPhoto.cameraNote}
              </p>
            </div>
          </aside>

          {/* Right Main Narrative Column (8 columns) */}
          <div className="lg:col-span-8 space-y-10 order-1 lg:order-2">
            {story.body.map((section, secIdx) => (
              <div key={secIdx} className="space-y-6 max-w-[68ch]">
                {section.heading && (
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal pt-4">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((para, pIdx) => {
                  const isFirstParagraph = secIdx === 0 && pIdx === 0;
                  return (
                    <p
                      key={pIdx}
                      className={`font-serif text-xl sm:text-[1.32rem] leading-[1.72] text-charcoal ${
                        isFirstParagraph ? 'editorial-dropcap' : ''
                      }`}
                    >
                      {para}
                    </p>
                  );
                })}

                {section.pullQuote && (
                  <blockquote className="my-8 p-7 sm:p-8 bg-cobalt text-cream border-2 border-charcoal">
                    <p className="font-display font-bold text-xl sm:text-2xl leading-snug">
                      “{section.pullQuote}”
                    </p>
                  </blockquote>
                )}

                {section.fieldNote && (
                  <div className="p-4 bg-cream-sand border border-rule text-xs sm:text-sm font-sans text-charcoal-slate">
                    <strong className="text-charcoal">FIELD LOG: </strong>
                    {section.fieldNote}
                  </div>
                )}

                {/* Secondary Documentary Photograph after Section 1 */}
                {secIdx === 0 && (
                  <figure className="my-10 bg-cream-sand border-2 border-charcoal">
                    <div className="photo-frame photo-grain aspect-[16/10] w-full border-b border-charcoal">
                      <img
                        src={story.secondaryPhoto.src}
                        alt={story.secondaryPhoto.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="p-4 sm:px-6 text-xs sm:text-sm text-charcoal-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span>
                        <strong className="text-charcoal mr-1.5">
                          PLATE II:
                        </strong>
                        {story.secondaryPhoto.caption}
                      </span>
                      <span className="font-semibold text-cobalt shrink-0">
                        {story.secondaryPhoto.cameraNote}
                      </span>
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}

            {/* End-of-Essay Colophon & Next/Prev Navigation */}
            <div className="pt-10 border-t-2 border-charcoal max-w-[68ch] space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-cream-sand p-6 border border-rule">
                <div>
                  <p className="text-xs font-bold text-cobalt uppercase">
                    Filed under {story.category}
                  </p>
                  <p className="font-display font-bold text-lg text-charcoal mt-0.5">
                    Did this story remind you of someone on your block?
                  </p>
                </div>
                <Link
                  to="/share"
                  className="btn-tactile px-5 py-3 bg-coral text-charcoal font-bold text-sm border border-charcoal hover:bg-ochre"
                >
                  Log Your Own Story
                </Link>
              </div>

              {/* Previous / Next Story Bar */}
              <nav
                aria-label="Adjacent story navigation"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <Link
                  to={`/stories/${prevStory.slug}`}
                  className="group p-5 bg-cream border-2 border-charcoal hover:bg-cream-sand transition-colors flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-charcoal-slate flex items-center gap-1.5">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    Previous Dispatch ({prevStory.dispatchNumber})
                  </span>
                  <span className="font-display font-bold text-lg text-charcoal group-hover:text-cobalt mt-2">
                    {prevStory.title}
                  </span>
                  <span className="text-xs text-charcoal-slate mt-1">
                    {prevStory.city} · {prevStory.category}
                  </span>
                </Link>

                <Link
                  to={`/stories/${nextStory.slug}`}
                  className="group p-5 bg-cream border-2 border-charcoal hover:bg-cream-sand transition-colors flex flex-col justify-between text-right"
                >
                  <span className="text-xs font-bold text-charcoal-slate flex items-center justify-end gap-1.5">
                    Next Dispatch ({nextStory.dispatchNumber})
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-display font-bold text-lg text-charcoal group-hover:text-cobalt mt-2">
                    {nextStory.title}
                  </span>
                  <span className="text-xs text-charcoal-slate mt-1">
                    {nextStory.city} · {nextStory.category}
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Related Stories Section */}
        <section
          aria-labelledby="related-stories-heading"
          className="mt-20 pt-14 border-t-2 border-charcoal space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2
                id="related-stories-heading"
                className="font-display font-extrabold text-3xl text-charcoal"
              >
                Related Dispatches in Proximity
              </h2>
              <p className="text-sm text-charcoal-slate mt-1">
                More stories connected by theme ({story.category}) or shared neighborhood space.
              </p>
            </div>
            <Link
              to="/stories"
              className="text-sm font-bold text-cobalt hover:underline inline-flex items-center gap-1"
            >
              <span>View all {STORIES.length} stories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedStories.map((rel) => (
              <article
                key={rel.id}
                className="bg-cream-sand border border-charcoal flex flex-col justify-between"
              >
                <Link to={`/stories/${rel.slug}`} className="group block">
                  <div className="photo-frame photo-grain aspect-[16/10] w-full border-b border-charcoal">
                    <img
                      src={rel.leadPhoto.src}
                      alt={rel.leadPhoto.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <CategoryBadge category={rel.category} />
                      <span className="text-xs text-charcoal-slate">
                        {rel.dispatchNumber}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-cobalt">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-slate line-clamp-3">
                      {rel.subtitle}
                    </p>
                  </div>
                </Link>
                <div className="px-6 py-3 border-t border-rule text-xs font-semibold flex items-center justify-between">
                  <span>{rel.city}</span>
                  <Link
                    to={`/stories/${rel.slug}`}
                    className="text-cobalt font-bold hover:underline"
                  >
                    Read ({rel.readingTimeMinutes}m)
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
