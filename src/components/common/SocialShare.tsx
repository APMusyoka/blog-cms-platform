'use client';

import React from 'react';
import { Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';

interface SocialShareProps {
    url: string;
    title: string;
    description?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description }) => {
    const shareLinks = [
        {
            name: 'Twitter',
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            color: 'hover:bg-[#1DA1F2] hover:text-white',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: 'hover:bg-[#1877F2] hover:text-white',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
            name: 'Email',
            icon: Mail,
            url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description || title)} - ${encodeURIComponent(url)}`,
            color: 'hover:bg-neutral-700 hover:text-white',
        },
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            // You could add a toast notification here
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Share:</span>
            <div className="flex items-center gap-2">
                {shareLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg border border-border transition-all ${link.color}`}
                            aria-label={`Share on ${link.name}`}
                        >
                            <Icon size={18} />
                        </a>
                    );
                })}
                <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg border border-border transition-all hover:bg-primary hover:text-primary-foreground"
                    aria-label="Copy link"
                >
                    <Link2 size={18} />
                </button>
            </div>
        </div>
    );
};

export default SocialShare;
