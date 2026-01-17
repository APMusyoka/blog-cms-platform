'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory?: string;
    onCategoryChange?: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
}) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            <button
                onClick={() => onCategoryChange?.('all')}
                className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedCategory === 'all' || !selectedCategory
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700'
                )}
            >
                All Posts
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange?.(category)}
                    className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all',
                        selectedCategory === category
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
