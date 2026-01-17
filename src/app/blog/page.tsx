'use client';

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import PostCard from '@/components/blog/PostCard';
import SearchBar from '@/components/common/SearchBar';
import CategoryFilter from '@/components/common/CategoryFilter';
import Pagination from '@/components/common/Pagination';

// Mock data - will be replaced with CMS data later
const allPosts = [
    {
        title: 'Getting Started with Next.js 15 and App Router',
        excerpt: 'Learn how to build modern web applications with Next.js 15, featuring the powerful App Router and server components.',
        slug: 'getting-started-nextjs-15',
        featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
        category: 'Development',
        date: 'Jan 15, 2026',
        readTime: '5 min read',
        author: {
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'The Future of AI in Web Design',
        excerpt: 'Explore how artificial intelligence is revolutionizing the way we approach web design and user experience.',
        slug: 'future-ai-web-design',
        featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        category: 'Design',
        date: 'Jan 12, 2026',
        readTime: '7 min read',
        author: {
            name: 'Jane Smith',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    },
    {
        title: '10 Essential TypeScript Tips for Better Code',
        excerpt: 'Master these TypeScript patterns and best practices to write more maintainable and type-safe code.',
        slug: 'typescript-tips-better-code',
        featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
        category: 'Programming',
        date: 'Jan 10, 2026',
        readTime: '6 min read',
        author: {
            name: 'Mike Johnson',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'Building Scalable APIs with Node.js',
        excerpt: 'Best practices and architectural patterns for creating robust, scalable REST APIs using Node.js and Express.',
        slug: 'scalable-apis-nodejs',
        featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
        category: 'Development',
        date: 'Jan 8, 2026',
        readTime: '8 min read',
        author: {
            name: 'Sarah Williams',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'CSS Grid vs Flexbox: When to Use Each',
        excerpt: 'A comprehensive guide to understanding the differences and use cases for CSS Grid and Flexbox layouts.',
        slug: 'css-grid-vs-flexbox',
        featuredImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop',
        category: 'Design',
        date: 'Jan 5, 2026',
        readTime: '5 min read',
        author: {
            name: 'Alex Chen',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'Introduction to React Server Components',
        excerpt: 'Discover the power of React Server Components and how they can improve your application performance.',
        slug: 'react-server-components',
        featuredImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop',
        category: 'Programming',
        date: 'Jan 3, 2026',
        readTime: '9 min read',
        author: {
            name: 'John Doe',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'Mastering Tailwind CSS: Advanced Techniques',
        excerpt: 'Take your Tailwind CSS skills to the next level with these advanced techniques and customization strategies.',
        slug: 'mastering-tailwind-css',
        featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        category: 'Design',
        date: 'Dec 30, 2025',
        readTime: '6 min read',
        author: {
            name: 'Jane Smith',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'GraphQL Best Practices for 2026',
        excerpt: 'Learn the latest GraphQL best practices, patterns, and tools to build better APIs in 2026.',
        slug: 'graphql-best-practices-2026',
        featuredImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
        category: 'Development',
        date: 'Dec 28, 2025',
        readTime: '7 min read',
        author: {
            name: 'Mike Johnson',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        },
    },
    {
        title: 'Understanding Web Performance Optimization',
        excerpt: 'A deep dive into web performance metrics, optimization techniques, and tools to make your site lightning fast.',
        slug: 'web-performance-optimization',
        featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        category: 'Programming',
        date: 'Dec 25, 2025',
        readTime: '10 min read',
        author: {
            name: 'Sarah Williams',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
    },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);

    // Get unique categories
    const categories = Array.from(new Set(allPosts.map((post) => post.category)));

    // Filter posts
    const filteredPosts = allPosts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Paginate posts
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    // Reset to page 1 when filters change
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-2xl mb-6">
                        <BookOpen size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Insights, tutorials, and stories from our community of writers and developers
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 space-y-6">
                    <div className="max-w-2xl mx-auto">
                        <SearchBar onSearch={handleSearch} />
                    </div>

                    <div className="flex justify-center">
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8 text-center">
                    <p className="text-muted-foreground">
                        Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'post' : 'posts'}
                        {searchQuery && ` for "${searchQuery}"`}
                        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                    </p>
                </div>

                {/* Posts Grid */}
                {paginatedPosts.length > 0 ? (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {paginatedPosts.map((post, index) => (
                                <PostCard key={index} {...post} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-16">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
                            <BookOpen size={40} className="text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">No posts found</h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                                setCurrentPage(1);
                            }}
                            className="text-primary hover:underline font-medium"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
