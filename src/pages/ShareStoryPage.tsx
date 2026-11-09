import React, { useState, useRef } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Database,
  FileText,
  RotateCcw,
  Send,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { StoryCategory } from '../types/editorial';
import { CategoryBadge } from '../components/CategoryBadge';
import { useFieldPocket } from '../context/FieldPocketContext';

interface FormValues {
  title: string;
  category: StoryCategory;
  city: string;
  timeOfDay: string;
  whoWasThere: string;
  overheardLine: string;
  storyBody: string;
  authorName: string;
  consentChecked: boolean;
}

interface FormErrors {
  title?: string;
  city?: string;
  timeOfDay?: string;
  whoWasThere?: string;
  storyBody?: string;
  authorName?: string;
  consentChecked?: string;
}

const INITIAL_VALUES: FormValues = {
  title: '',
  category: 'Strangers',
  city: '',
  timeOfDay: '',
  whoWasThere: '',
  overheardLine: '',
  storyBody: '',
  authorName: '',
  consentChecked: false,
};

const SAMPLE_DISPATCH: FormValues = {
  title: 'Two Extra Empanadas at the Night Laundry',
  category: 'Kindness',
  city: 'Jersey City, NJ · Bergenline Ave',
  timeOfDay: '09:40 PM · Wednesday Night',
  whoWasThere: 'Mrs. Alvarez from the second floor and a medical resident folding scrubs',
  overheardLine: 'You cannot fold warm sheets on an empty stomach. Take the beef one while the crust is still flaky.',
  storyBody:
    'I was finishing my last load of laundry after a twelve-hour shift when Mrs. Alvarez walked in carrying a foil-wrapped tray from her kitchen. She noticed I was eating crackers from the vending machine, pulled up a plastic rolling cart between our dryers, and set out two warm beef empanadas and a jar of green ají sauce on a paper towel.',
  authorName: 'Lucas R.',
  consentChecked: true,
};

export const ShareStoryPage: React.FC = () => {
  const {
    submittedStories,
    addSubmittedStory,
    deleteSubmittedStory,
    resetDemoSubmissions,
  } = useFieldPocket();

  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitSuccessTitle, setSubmitSuccessTitle] = useState<string | null>(
    null
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const whoRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const validate = (data: FormValues): FormErrors => {
    const next: FormErrors = {};
    if (data.title.trim().length < 5) {
      next.title = 'Please enter a specific story title (at least 5 characters).';
    }
    if (data.city.trim().length < 3) {
      next.city = 'Please include the city or neighborhood where this happened.';
    }
    if (data.timeOfDay.trim().length < 3) {
      next.timeOfDay = 'Please note the approximate time of day (e.g., 7:15 AM · Bus Stop).';
    }
    if (data.whoWasThere.trim().length < 5) {
      next.whoWasThere = 'Briefly describe who was present in this moment.';
    }
    if (data.storyBody.trim().length < 40) {
      next.storyBody =
        'Please write at least 40 characters describing what happened in specific human detail.';
    }
    if (data.authorName.trim().length < 2) {
      next.authorName = 'Please provide your name or initials for the dispatch credit.';
    }
    if (!data.consentChecked) {
      next.consentChecked =
        'Please confirm that you understand this dispatch is saved locally in your browser.';
    }
    return next;
  };

  const focusFirstError = (errs: FormErrors) => {
    if (errs.title) titleRef.current?.focus();
    else if (errs.city) cityRef.current?.focus();
    else if (errs.timeOfDay) timeRef.current?.focus();
    else if (errs.whoWasThere) whoRef.current?.focus();
    else if (errs.storyBody) bodyRef.current?.focus();
    else if (errs.authorName) authorRef.current?.focus();
    else if (errs.consentChecked) consentRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccessTitle(null);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstError(validationErrors);
      return;
    }

    const created = addSubmittedStory({
      title: values.title.trim(),
      category: values.category,
      city: values.city.trim(),
      timeOfDay: values.timeOfDay.trim(),
      whoWasThere: values.whoWasThere.trim(),
      overheardLine:
        values.overheardLine.trim() ||
        'No direct quote recorded—logged as a silent observation.',
      storyBody: values.storyBody.trim(),
      authorName: values.authorName.trim(),
    });

    setSubmitSuccessTitle(created.title);
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  const handleLoadSample = () => {
    setValues(SAMPLE_DISPATCH);
    setErrors({});
    setSubmitSuccessTitle(null);
  };

  const errorCount = Object.keys(errors).length;

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-10 sm:py-16 space-y-16">
      {/* 1. EDITORIAL HEADER & TRANSPARENT LOCAL DEMO STORAGE NOTICE */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b-2 border-charcoal items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral text-charcoal font-bold text-xs border border-charcoal">
            <span>Reader Dispatch Desk · Issue No. 15</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.02] tracking-tight">
            Leave a Record of a Small Moment.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-charcoal-slate leading-relaxed max-w-2xl">
            We are not looking for grand heroic rescues. Tell us about the stranger who held the elevator, the friend who showed up with soup, or the neighbor who lent you a wrench.
          </p>
        </div>

        {/* Transparent Backend / Local Storage Disclosure Box */}
        <div
          role="note"
          aria-label="Local browser storage notice"
          className="lg:col-span-5 bg-ochre text-charcoal border-2 border-charcoal p-6 space-y-3"
        >
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <Database className="w-5 h-5 text-cobalt shrink-0" aria-hidden="true" />
            <span>Local Demo Storage Notice (No External Backend)</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong>How this form works:</strong> This editorial platform is a self-contained frontend demonstration and is <strong>not connected to an external server or cloud database</strong>.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed">
            When you submit a story below, it is validated and stored directly in your browser’s <code>localStorage</code> so you can immediately see it published in the Reader Dispatches Archive below.
          </p>
        </div>
      </header>

      {/* 2. FORM & LIVE POSTCARD PREVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left 7 Columns: Validated Submission Form */}
        <section
          aria-labelledby="submission-form-heading"
          className="lg:col-span-7 bg-cream-sand border-2 border-charcoal p-6 sm:p-9 space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-rule">
            <div>
              <h2
                id="submission-form-heading"
                className="font-display font-extrabold text-2xl text-charcoal"
              >
                Field Observation Form
              </h2>
              <p className="text-xs text-charcoal-slate mt-0.5">
                All fields marked with * are required for archival cataloging.
              </p>
            </div>

            <button
              type="button"
              onClick={handleLoadSample}
              className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-2 bg-cream border border-charcoal text-xs font-bold text-cobalt hover:bg-ochre hover:text-charcoal"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Fill Sample Moment</span>
            </button>
          </div>

          {/* Accessible Validation Error Summary */}
          {errorCount > 0 && (
            <div
              role="alert"
              className="p-4 bg-coral-soft border-2 border-coral-dark text-charcoal space-y-2"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-coral-dark">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>
                  Please check {errorCount} {errorCount === 1 ? 'field' : 'fields'} before filing your dispatch:
                </span>
              </div>
              <ul className="list-disc list-inside text-xs space-y-1">
                {Object.entries(errors).map(([key, msg]) => (
                  <li key={key}>{msg}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Accessible Success Banner */}
          {submitSuccessTitle && (
            <div
              role="status"
              aria-live="polite"
              className="p-5 bg-cobalt text-cream border-2 border-charcoal space-y-2"
            >
              <div className="flex items-center gap-2 font-display font-bold text-lg text-ochre">
                <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Dispatch Logged in Browser Archive</span>
              </div>
              <p className="text-xs sm:text-sm text-cream/90">
                “{submitSuccessTitle}” has been saved to your local browser storage and now appears at the top of the Reader Dispatches wall below.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Title */}
            <div>
              <label
                htmlFor="field-title"
                className="block font-display font-bold text-sm text-charcoal mb-1.5"
              >
                1. Dispatch Title *
              </label>
              <input
                ref={titleRef}
                id="field-title"
                type="text"
                value={values.title}
                onChange={(e) =>
                  setValues({ ...values, title: e.target.value })
                }
                placeholder="e.g., The Shared Umbrella at 4th & Mercer"
                aria-invalid={Boolean(errors.title)}
                aria-describedby={errors.title ? 'field-title-error' : undefined}
                className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal ${
                  errors.title ? 'border-2 border-coral-dark' : 'border-charcoal'
                }`}
              />
              {errors.title && (
                <p
                  id="field-title-error"
                  className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.title}</span>
                </p>
              )}
            </div>

            {/* Category & Time of Day */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="field-category"
                  className="block font-display font-bold text-sm text-charcoal mb-1.5"
                >
                  2. Connection Category *
                </label>
                <select
                  id="field-category"
                  value={values.category}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      category: e.target.value as StoryCategory,
                    })
                  }
                  className="w-full px-3.5 py-2.5 bg-cream border border-charcoal text-sm text-charcoal font-medium"
                >
                  <option value="Strangers">Strangers Helping Strangers</option>
                  <option value="Friendship">Friendship</option>
                  <option value="Family">Family</option>
                  <option value="Kindness">Small Acts of Kindness</option>
                  <option value="Community">Community</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="field-time"
                  className="block font-display font-bold text-sm text-charcoal mb-1.5"
                >
                  3. Time of Day *
                </label>
                <input
                  ref={timeRef}
                  id="field-time"
                  type="text"
                  value={values.timeOfDay}
                  onChange={(e) =>
                    setValues({ ...values, timeOfDay: e.target.value })
                  }
                  placeholder="e.g., 08:15 AM · Rainy Tuesday"
                  aria-invalid={Boolean(errors.timeOfDay)}
                  aria-describedby={
                    errors.timeOfDay ? 'field-time-error' : undefined
                  }
                  className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal ${
                    errors.timeOfDay
                      ? 'border-2 border-coral-dark'
                      : 'border-charcoal'
                  }`}
                />
                {errors.timeOfDay && (
                  <p
                    id="field-time-error"
                    className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.timeOfDay}</span>
                  </p>
                )}
              </div>
            </div>

            {/* City & Who Was There */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="field-city"
                  className="block font-display font-bold text-sm text-charcoal mb-1.5"
                >
                  4. City & Neighborhood *
                </label>
                <input
                  ref={cityRef}
                  id="field-city"
                  type="text"
                  value={values.city}
                  onChange={(e) =>
                    setValues({ ...values, city: e.target.value })
                  }
                  placeholder="e.g., Chicago, IL · Pilsen"
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? 'field-city-error' : undefined}
                  className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal ${
                    errors.city ? 'border-2 border-coral-dark' : 'border-charcoal'
                  }`}
                />
                {errors.city && (
                  <p
                    id="field-city-error"
                    className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.city}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="field-who"
                  className="block font-display font-bold text-sm text-charcoal mb-1.5"
                >
                  5. Who Was There *
                </label>
                <input
                  ref={whoRef}
                  id="field-who"
                  type="text"
                  value={values.whoWasThere}
                  onChange={(e) =>
                    setValues({ ...values, whoWasThere: e.target.value })
                  }
                  placeholder="e.g., Two commuters & the station clerk"
                  aria-invalid={Boolean(errors.whoWasThere)}
                  aria-describedby={
                    errors.whoWasThere ? 'field-who-error' : undefined
                  }
                  className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal ${
                    errors.whoWasThere
                      ? 'border-2 border-coral-dark'
                      : 'border-charcoal'
                  }`}
                />
                {errors.whoWasThere && (
                  <p
                    id="field-who-error"
                    className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.whoWasThere}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Overheard Line (Optional) */}
            <div>
              <label
                htmlFor="field-overheard"
                className="block font-display font-bold text-sm text-charcoal mb-1"
              >
                6. One Sentence Overheard or Said (Optional)
              </label>
              <input
                id="field-overheard"
                type="text"
                value={values.overheardLine}
                onChange={(e) =>
                  setValues({ ...values, overheardLine: e.target.value })
                }
                placeholder="“Stay under the umbrella—my bus isn’t for three more blocks.”"
                className="w-full px-3.5 py-2.5 bg-cream border border-charcoal text-sm text-charcoal"
              />
            </div>

            {/* Story Body */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="field-body"
                  className="font-display font-bold text-sm text-charcoal"
                >
                  7. What Happened (Specific Details) *
                </label>
                <span className="text-xs text-charcoal-slate">
                  {values.storyBody.trim().length} chars (min 40)
                </span>
              </div>
              <textarea
                ref={bodyRef}
                id="field-body"
                rows={5}
                value={values.storyBody}
                onChange={(e) =>
                  setValues({ ...values, storyBody: e.target.value })
                }
                placeholder="Describe the setting, the small gesture, and what you noticed..."
                aria-invalid={Boolean(errors.storyBody)}
                aria-describedby={
                  errors.storyBody ? 'field-body-error' : undefined
                }
                className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal leading-relaxed ${
                  errors.storyBody
                    ? 'border-2 border-coral-dark'
                    : 'border-charcoal'
                }`}
              />
              {errors.storyBody && (
                <p
                  id="field-body-error"
                  className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.storyBody}</span>
                </p>
              )}
            </div>

            {/* Author Credit */}
            <div>
              <label
                htmlFor="field-author"
                className="block font-display font-bold text-sm text-charcoal mb-1.5"
              >
                8. Your Name or Initials *
              </label>
              <input
                ref={authorRef}
                id="field-author"
                type="text"
                value={values.authorName}
                onChange={(e) =>
                  setValues({ ...values, authorName: e.target.value })
                }
                placeholder="e.g., Maya L."
                aria-invalid={Boolean(errors.authorName)}
                aria-describedby={
                  errors.authorName ? 'field-author-error' : undefined
                }
                className={`w-full px-3.5 py-2.5 bg-cream border text-sm text-charcoal ${
                  errors.authorName
                    ? 'border-2 border-coral-dark'
                    : 'border-charcoal'
                }`}
              />
              {errors.authorName && (
                <p
                  id="field-author-error"
                  className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.authorName}</span>
                </p>
              )}
            </div>

            {/* Local Storage Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  ref={consentRef}
                  type="checkbox"
                  checked={values.consentChecked}
                  onChange={(e) =>
                    setValues({ ...values, consentChecked: e.target.checked })
                  }
                  aria-invalid={Boolean(errors.consentChecked)}
                  aria-describedby={
                    errors.consentChecked ? 'field-consent-error' : undefined
                  }
                  className="mt-1 w-4 h-4 accent-cobalt"
                />
                <span className="text-xs sm:text-sm text-charcoal">
                  I understand this is a static editorial demo and my story will be stored locally in this browser’s <code>localStorage</code> rather than sent to a remote backend. *
                </span>
              </label>
              {errors.consentChecked && (
                <p
                  id="field-consent-error"
                  className="mt-1.5 text-xs font-semibold text-coral-dark flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.consentChecked}</span>
                </p>
              )}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="btn-tactile px-6 py-3.5 bg-charcoal text-cream font-display font-bold text-sm inline-flex items-center gap-2 hover:bg-cobalt"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Publish to Local Browser Archive</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setValues(INITIAL_VALUES);
                  setErrors({});
                  setSubmitSuccessTitle(null);
                }}
                className="btn-tactile px-4 py-3.5 bg-cream border border-charcoal text-xs font-bold text-charcoal hover:bg-cream-deep"
              >
                Clear Form
              </button>
            </div>
          </form>
        </section>

        {/* Right 5 Columns: Live Editorial Postcard Preview */}
        <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <div className="bg-cream border-2 border-charcoal p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-rule pb-3">
              <span className="text-xs font-bold text-cobalt flex items-center gap-1.5">
                <FileText className="w-4 h-4" aria-hidden="true" />
                Live Dispatch Proof
              </span>
              <CategoryBadge category={values.category} />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-charcoal-slate">
                {values.city || 'City / Neighborhood'} ·{' '}
                {values.timeOfDay || 'Time of Day'}
              </p>

              <h3 className="font-display font-extrabold text-2xl text-charcoal leading-tight">
                {values.title || 'Your Dispatch Headline Will Appear Here'}
              </h3>

              {values.overheardLine && (
                <blockquote className="p-3.5 bg-ochre/40 border border-charcoal/30 font-serif italic text-base text-charcoal">
                  “{values.overheardLine}”
                </blockquote>
              )}

              <p className="font-serif text-base text-charcoal-slate leading-relaxed whitespace-pre-line">
                {values.storyBody ||
                  'As you type your observation on the left, this archival proof card formats your story for Issue No. 15.'}
              </p>
            </div>

            <div className="pt-4 border-t border-rule text-xs text-charcoal-slate flex items-center justify-between">
              <span>
                <strong>Present:</strong> {values.whoWasThere || '—'}
              </span>
              <span>
                <strong>Logged by:</strong> {values.authorName || 'Reader'}
              </span>
            </div>
          </div>

          {/* Documentary Inspiration Plate */}
          <figure className="bg-charcoal text-cream border-2 border-charcoal">
            <div className="photo-frame photo-grain aspect-[16/10] w-full">
              <img
                src="/images/story-bookshop-notes.jpg"
                alt="Warmly lit wooden bookshelves inside an independent bookshop"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="p-4 text-xs text-cream/85">
              “A used book is a park bench where someone left their coat behind.” — From Dispatch No. 12 (<em>Marginalia on Page 104</em>).
            </figcaption>
          </figure>
        </aside>
      </div>

      {/* 3. READER DISPATCHES WALL (STORED IN LOCALSTORAGE) */}
      <section
        aria-labelledby="reader-archive-heading"
        className="pt-12 border-t-2 border-charcoal space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-block px-2.5 py-0.5 bg-cobalt text-cream text-xs font-bold mb-2">
              Browser LocalStorage Archive ({submittedStories.length} Dispatches)
            </span>
            <h2
              id="reader-archive-heading"
              className="font-display font-extrabold text-3xl text-charcoal"
            >
              Reader Dispatches Logged on This Device
            </h2>
          </div>

          <button
            type="button"
            onClick={resetDemoSubmissions}
            className="btn-tactile inline-flex items-center gap-1.5 px-4 py-2.5 bg-cream-sand border border-charcoal text-xs font-bold text-charcoal hover:bg-ochre self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Demo Storage to Default (2)</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {submittedStories.map((item) => (
            <article
              key={item.id}
              className="bg-cream-sand border-2 border-charcoal p-6 sm:p-8 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CategoryBadge category={item.category} size="md" />
                  <span className="text-xs font-semibold text-charcoal-slate">
                    {item.createdAt}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-cobalt block">
                    {item.city} · {item.timeOfDay}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-charcoal mt-1">
                    {item.title}
                  </h3>
                </div>

                <blockquote className="p-4 bg-cream border border-rule font-serif italic text-base text-charcoal">
                  “{item.overheardLine}”
                </blockquote>

                <p className="font-serif text-base text-charcoal leading-relaxed">
                  {item.storyBody}
                </p>
              </div>

              <div className="pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="text-charcoal-slate">
                  <span className="font-bold text-charcoal">
                    Logged by {item.authorName}
                  </span>
                  <span className="block">Present: {item.whoWasThere}</span>
                </div>

                <button
                  type="button"
                  onClick={() => deleteSubmittedStory(item.id)}
                  className="btn-tactile px-3 py-1.5 bg-cream border border-rule text-charcoal-slate hover:text-coral-dark hover:border-coral-dark inline-flex items-center gap-1 font-semibold"
                  aria-label={`Delete reader dispatch ${item.title}`}
                >
                  <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Remove</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
