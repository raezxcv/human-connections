import React, { createContext, useContext, useState, useEffect } from 'react';
import { SubmittedStory } from '../types/editorial';
import { INITIAL_READER_DISPATCHES } from '../data/community';

interface FieldPocketContextType {
  savedStoryIds: string[];
  toggleSaveStory: (id: string) => void;
  isStorySaved: (id: string) => boolean;
  savedInitiativeIds: string[];
  toggleSaveInitiative: (id: string) => void;
  isInitiativeSaved: (id: string) => boolean;
  resonatedStoryIds: string[];
  toggleResonateStory: (id: string) => void;
  hasResonated: (id: string) => boolean;
  submittedStories: SubmittedStory[];
  addSubmittedStory: (story: Omit<SubmittedStory, 'id' | 'createdAt'>) => SubmittedStory;
  deleteSubmittedStory: (id: string) => void;
  resetDemoSubmissions: () => void;
  isPocketOpen: boolean;
  setIsPocketOpen: (open: boolean) => void;
}

const FieldPocketContext = createContext<FieldPocketContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SAVED_STORIES: 'common_hours_saved_stories_v1',
  SAVED_INITIATIVES: 'common_hours_saved_initiatives_v1',
  RESONATED_STORIES: 'common_hours_resonated_v1',
  SUBMITTED_STORIES: 'common_hours_submitted_stories_v1',
};

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export const FieldPocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>(() =>
    readStorage<string[]>(STORAGE_KEYS.SAVED_STORIES, ['story-01'])
  );
  const [savedInitiativeIds, setSavedInitiativeIds] = useState<string[]>(() =>
    readStorage<string[]>(STORAGE_KEYS.SAVED_INITIATIVES, ['init-01'])
  );
  const [resonatedStoryIds, setResonatedStoryIds] = useState<string[]>(() =>
    readStorage<string[]>(STORAGE_KEYS.RESONATED_STORIES, [])
  );
  const [submittedStories, setSubmittedStories] = useState<SubmittedStory[]>(() =>
    readStorage<SubmittedStory[]>(STORAGE_KEYS.SUBMITTED_STORIES, INITIAL_READER_DISPATCHES)
  );
  const [isPocketOpen, setIsPocketOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.SAVED_STORIES, JSON.stringify(savedStoryIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedStoryIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.SAVED_INITIATIVES, JSON.stringify(savedInitiativeIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedInitiativeIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.RESONATED_STORIES, JSON.stringify(resonatedStoryIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [resonatedStoryIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEYS.SUBMITTED_STORIES, JSON.stringify(submittedStories));
    } catch {
      // Ignore storage quota errors
    }
  }, [submittedStories]);

  const toggleSaveStory = (id: string) => {
    setSavedStoryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isStorySaved = (id: string) => savedStoryIds.includes(id);

  const toggleSaveInitiative = (id: string) => {
    setSavedInitiativeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isInitiativeSaved = (id: string) => savedInitiativeIds.includes(id);

  const toggleResonateStory = (id: string) => {
    setResonatedStoryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const hasResonated = (id: string) => resonatedStoryIds.includes(id);

  const addSubmittedStory = (
    input: Omit<SubmittedStory, 'id' | 'createdAt'>
  ): SubmittedStory => {
    const newEntry: SubmittedStory = {
      ...input,
      id: `reader-${Date.now()}`,
      createdAt: 'Just now · Saved in Browser Demo Storage',
      isSeededDemo: false,
    };
    setSubmittedStories((prev) => [newEntry, ...prev]);
    return newEntry;
  };

  const deleteSubmittedStory = (id: string) => {
    setSubmittedStories((prev) => prev.filter((item) => item.id !== id));
  };

  const resetDemoSubmissions = () => {
    setSubmittedStories(INITIAL_READER_DISPATCHES);
  };

  return (
    <FieldPocketContext.Provider
      value={{
        savedStoryIds,
        toggleSaveStory,
        isStorySaved,
        savedInitiativeIds,
        toggleSaveInitiative,
        isInitiativeSaved,
        resonatedStoryIds,
        toggleResonateStory,
        hasResonated,
        submittedStories,
        addSubmittedStory,
        deleteSubmittedStory,
        resetDemoSubmissions,
        isPocketOpen,
        setIsPocketOpen,
      }}
    >
      {children}
    </FieldPocketContext.Provider>
  );
};

export function useFieldPocket(): FieldPocketContextType {
  const ctx = useContext(FieldPocketContext);
  if (!ctx) {
    throw new Error('useFieldPocket must be used within a FieldPocketProvider');
  }
  return ctx;
}

