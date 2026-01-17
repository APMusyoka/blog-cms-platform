import React from 'react';
import Link from 'next/link';
import { FolderOpen, ArrowRight, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

// Mock categories data
const categories = [
    {
        name: 'Development',
        slug: 'development',
        description: 'Tutorials, best practices, and insights on modern web development, frameworks, and tools.',
        postCount: 24,
        color: 'from-blue-500 to-cyan-500',
        icon: '💻',
    },
    {
        name: 'Design',
        slug: 'design',
        description: 'UI/UX design principles, trends, tools, and creative inspiration for digital products.',
        postCount: 18,
        color: 'from-purple-500 to-pink-500',
        icon: '🎨',
    },
    {
        name: 'Programming',
        slug: 'programming',
        description: 'Deep dives into programming languages, algorithms, data structures, and software engineering.',
        postCount: 31,
        color: 'from-green-500 to-emerald-500',
        icon: '⚡',
    },
    {
        name: 'Career',
        slug: 'career',
        description: 'Career advice, job hunting tips, interview preparation, and professional development.',
        postCount: 12,
        color: 'from-orange-500 to-red-500',
        icon: '🚀',
    },
    {
        name: 'Tutorial',
        slug: 'tutorial',
        description: 'Step-by-step guides and hands-on tutorials for learning new technologies and skills.',
        postCount: 27,
        color: 'from-yellow-500 to-amber-500',
        icon: '📚',
    },
    {
        name: 'Product',
        slug: 'product',
        description: 'Product management, strategy, user research, and building products people love.',
        postCount: 15,
        color: 'from-indigo-500 to-blue-500',
        icon: '📦',
    },
];

export default function CategoriesPage() {
    const totalPosts = categories.reduce((sum, cat) => sum + cat.postCount, 0);

    return (
        <div className="min-h-screen py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-2xl mb-6">
                        <FolderOpen size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Browse by Category
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore {totalPosts} articles across {categories.length} categories.
                        Find exactly what you're looking for.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/blog?category=${category.slug}`}>
                            <Card hover className="h-full group cursor-pointer">
                                <CardContent className="pt-6">
                                    {/* Icon with gradient */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${category.color} rounded-2xl mb-4 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                                        {category.icon}
                                    </div>

                                    {/* Category Info */}
                                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h2>

                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {category.description}
                                    </p>

                                    {/* Post Count */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <FileText size={16} />
                                            <span>{category.postCount} articles</span>
                                        </div>
                                        <ArrowRight
                                            size={20}
                                            className="text-primary group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* All Posts Link */}
                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-lg"
                    >
                        View All Posts
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
