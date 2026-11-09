export type StoryCategory =
  | 'Friendship'
  | 'Family'
  | 'Kindness'
  | 'Community'
  | 'Strangers';

export type AspectRatioKind = '4:5' | '16:10' | '16:9' | '1:1';

export interface PhotoSpec {
  src: string;
  alt: string;
  aspectRatio: AspectRatioKind;
  caption: string;
  cameraNote: string;
  subject: string;
  environment: string;
  lighting: string;
  credit: string;
}

export interface StorySection {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
  fieldNote?: string;
}

export interface Story {
  id: string;
  slug: string;
  dispatchNumber: string;
  title: string;
  subtitle: string;
  category: StoryCategory;
  city: string;
  neighborhood: string;
  timeOfDay: string;
  hour24: number;
  readingTimeMinutes: number;
  author: string;
  authorRole: string;
  photographer: string;
  overheardQuote: string;
  overheardContext: string;
  featured?: boolean;
  selectedForHome?: boolean;
  heroMosaicOrder?: number;
  distanceLabel:
    | 'Across the Street'
    | 'Across the Table'
    | 'Across the Hall'
    | 'At the Counter';
  leadPhoto: PhotoSpec;
  secondaryPhoto: PhotoSpec;
  excerpt: string;
  body: StorySection[];
  smallThingsNoticed: string[];
  initialResonanceCount: number;
}

export type InitiativeCategory =
  | 'Shared Meals'
  | 'Mutual Aid & Repair'
  | 'Third Places'
  | 'Intergenerational'
  | 'Letters & Language';

export type ScheduleFilter = 'Weekdays' | 'Weekends' | 'Open Daily';

export interface CommunityInitiative {
  id: string;
  name: string;
  tagline: string;
  category: InitiativeCategory;
  city: string;
  neighborhood: string;
  addressNote: string;
  schedule: string;
  scheduleType: ScheduleFilter;
  organizerName: string;
  organizerRole: string;
  organizerQuote: string;
  foundedYear: number;
  description: string;
  howStrangersJoin: string;
  smallThingNeededNow: string;
  photo: PhotoSpec;
  featured?: boolean;
}

export interface SubmittedStory {
  id: string;
  title: string;
  category: StoryCategory;
  city: string;
  timeOfDay: string;
  whoWasThere: string;
  overheardLine: string;
  storyBody: string;
  authorName: string;
  createdAt: string;
  isSeededDemo?: boolean;
}

