import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Users, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import PostCard from '@/components/blog/PostCard';
import Newsletter from '@/components/common/Newsletter';

// Mock data - will be replaced with CMS data later
const featuredPosts = [
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
];

const features = [
  {
    icon: Sparkles,
    title: 'Beautiful Writing',
    description: 'Rich text editor with a distraction-free writing experience.',
  },
  {
    icon: BookOpen,
    title: 'Easy Publishing',
    description: 'Publish your thoughts with just one click. Simple and powerful.',
  },
  {
    icon: Users,
    title: 'Multi-Author',
    description: 'Collaborate with your team. Perfect for publications and blogs.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with static generation and edge delivery.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-primary-50 dark:from-neutral-950 dark:via-background dark:to-neutral-950 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium mb-8 animate-pulse">
              <Sparkles size={16} />
              <span>Modern Blogging Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Share Your Stories with the World
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              A powerful, modern blogging platform designed for writers and content creators.
              Beautiful design meets powerful features.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="primary">
                Start Writing Free
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="ghost">
                Explore Blog
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Writers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Published Posts</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you create, publish, and grow your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-2xl mb-4 group-hover:rotate-6 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Posts</h2>
              <p className="text-muted-foreground">
                Fresh insights and stories from our community
              </p>
            </div>
            <Link href="/blog">
              <Button variant="ghost">
                View All
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join thousands of writers who are already sharing their stories on our platform.
          </p>
          <Button size="lg" variant="secondary">
            Get Started Free
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
