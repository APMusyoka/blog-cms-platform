'use client';

import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-80px 0px -80% 0px' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.offsetTop - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (items.length === 0) return null;

    return (
        <nav className="sticky top-24 hidden lg:block">
            <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <List size={20} className="text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">
                        Table of Contents
                    </h3>
                </div>
                <ul className="space-y-2 text-sm">
                    {items.map((item) => (
                        <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                            <button
                                onClick={() => handleClick(item.id)}
                                className={cn(
                                    'text-left w-full py-1 transition-colors hover:text-primary',
                                    activeId === item.id
                                        ? 'text-primary font-medium'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TableOfContents;
