import React from 'react';
import { StoryCategory, InitiativeCategory } from '../types/editorial';

interface CategoryBadgeProps {
  category: StoryCategory | InitiativeCategory;
  size?: 'sm' | 'md';
}

const CATEGORY_STYLES: Record<string, string> = {
  Strangers: 'bg-cobalt text-cream',
  Friendship: 'bg-coral text-charcoal font-bold',
  Family: 'bg-ochre text-charcoal font-bold',
  Kindness: 'bg-charcoal text-cream',
  Community: 'bg-cream-deep text-charcoal border border-charcoal/20 font-bold',
  'Shared Meals': 'bg-coral text-charcoal font-bold',
  'Mutual Aid & Repair': 'bg-cobalt text-cream',
  'Third Places': 'bg-ochre text-charcoal font-bold',
  Intergenerational: 'bg-charcoal text-cream',
  'Letters & Language': 'bg-cream-deep text-charcoal border border-charcoal/20 font-bold',
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  size = 'sm',
}) => {
  const styleClass =
    CATEGORY_STYLES[category] || 'bg-charcoal text-cream';
  const sizeClass =
    size === 'sm'
      ? 'px-2.5 py-0.5 text-xs tracking-tight'
      : 'px-3.5 py-1 text-xs sm:text-sm tracking-tight';

  return (
    <span
      className={`inline-flex items-center font-sans font-semibold ${sizeClass} ${styleClass}`}
    >
      {category}
    </span>
  );
};

