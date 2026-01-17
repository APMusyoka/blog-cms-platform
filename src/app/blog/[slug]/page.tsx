import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import TableOfContents from '@/components/blog/TableOfContents';
import AuthorBio from '@/components/blog/AuthorBio';
import SocialShare from '@/components/common/SocialShare';
import PostCard from '@/components/blog/PostCard';

// Mock post data - will be replaced with CMS data
const mockPost = {
    title: 'Getting Started with Next.js 15 and App Router',
    slug: 'getting-started-nextjs-15',
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development', 'Tutorial'],
    date: 'January 15, 2026',
    readTime: '8 min read',
    excerpt: 'Learn how to build modern web applications with Next.js 15, featuring the powerful App Router and server components.',
    author: {
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
        role: 'Senior Full-Stack Developer',
        bio: 'Passionate about building fast, scalable web applications. 10+ years of experience with React and Node.js.',
        social: {
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
            email: 'john@example.com',
        },
    },
    content: `
<h2 id="introduction">Introduction to Next.js 15</h2>
<p>Next.js 15 represents a significant leap forward in React-based web development. With the introduction of the App Router and enhanced server components, building performant web applications has never been easier.</p>

<p>In this comprehensive guide, we'll explore the key features and learn how to leverage them in your projects.</p>

<h2 id="app-router">Understanding the App Router</h2>
<p>The App Router is a new paradigm for building Next.js applications. Unlike the traditional Pages Router, the App Router is built on React Server Components and offers several advantages:</p>

<ul>
  <li><strong>Improved Performance</strong>: Server Components reduce the amount of JavaScript sent to the client</li>
  <li><strong>Better SEO</strong>: Enhanced server-side rendering capabilities</li>
  <li><strong>Simplified Data Fetching</strong>: Native async/await support in components</li>
  <li><strong>Advanced Routing</strong>: Nested layouts and loading states</li>
</ul>

<h3 id="app-router-basics">App Router Basics</h3>
<p>The App Router uses a file-system based routing approach. Here's a simple example:</p>

<pre><code class="language-typescript">// app/page.tsx
export default function HomePage() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome to Next.js 15!&lt;/h1&gt;
    &lt;/div&gt;
  );
}</code></pre>

<h2 id="server-components">Server Components Deep Dive</h2>
<p>React Server Components allow you to render components on the server, reducing client-side JavaScript and improving performance. Here's what makes them special:</p>

<blockquote>
  <p>"Server Components represent a fundamental shift in how we think about React applications. They allow us to build faster, more efficient apps by default." - React Team</p>
</blockquote>

<h3 id="when-to-use">When to Use Server Components</h3>
<p>Use Server Components when you need to:</p>

<ol>
  <li>Fetch data from a database or API</li>
  <li>Access backend resources directly</li>
  <li>Keep sensitive information on the server</li>
  <li>Reduce client-side JavaScript bundle size</li>
</ol>

<h2 id="data-fetching">Data Fetching Patterns</h2>
<p>One of the most powerful features of Next.js 15 is its simplified data fetching. You can now use async/await directly in Server Components:</p>

<pre><code class="language-typescript">// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    &lt;div&gt;
      {posts.map(post =&gt; (
        &lt;article key={post.id}&gt;
          &lt;h2&gt;{post.title}&lt;/h2&gt;
          &lt;p&gt;{post.excerpt}&lt;/p&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

<h2 id="best-practices">Best Practices</h2>
<p>Here are some essential best practices when working with Next.js 15:</p>

<h3 id="performance">Performance Optimization</h3>
<ul>
  <li>Use Server Components by default</li>
  <li>Implement proper caching strategies</li>
  <li>Optimize images with next/image</li>
  <li>Leverage static generation when possible</li>
</ul>

<h3 id="code-organization">Code Organization</h3>
<p>Keep your codebase maintainable:</p>

<ul>
  <li>Separate client and server components clearly</li>
  <li>Use proper TypeScript types</li>
  <li>Implement consistent file naming</li>
  <li>Create reusable component libraries</li>
</ul>

<h2 id="conclusion">Conclusion</h2>
<p>Next.js 15 with the App Router provides a powerful foundation for building modern web applications. By leveraging Server Components, improved data fetching, and enhanced routing capabilities, you can create faster, more efficient applications.</p>

<p>The learning curve might seem steep at first, but the benefits in terms of performance, developer experience, and maintainability are well worth the investment.</p>

<p>Ready to start building? Check out the <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">official Next.js documentation</a> to dive deeper into these concepts.</p>
  `,
};

// Table of contents extracted from content
const tocItems = [
    { id: 'introduction', text: 'Introduction to Next.js 15', level: 2 },
    { id: 'app-router', text: 'Understanding the App Router', level: 2 },
    { id: 'app-router-basics', text: 'App Router Basics', level: 3 },
    { id: 'server-components', text: 'Server Components Deep Dive', level: 2 },
    { id: 'when-to-use', text: 'When to Use Server Components', level: 3 },
    { id: 'data-fetching', text: 'Data Fetching Patterns', level: 2 },
    { id: 'best-practices', text: 'Best Practices', level: 2 },
    { id: 'performance', text: 'Performance Optimization', level: 3 },
    { id: 'code-organization', text: 'Code Organization', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 2 },
];

// Related posts
const relatedPosts = [
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
];

export default function BlogPostPage() {
    const postUrl = `https://blogcms.com/blog/${mockPost.slug}`;

    return (
        <article className="py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                    <ArrowLeft size={20} />
                    <span>Back to Blog</span>
                </Link>

                {/* Article Header */}
                <header className="max-w-4xl mx-auto mb-12">
                    <div className="mb-6">
                        <Badge variant="primary">{mockPost.category}</Badge>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        {mockPost.title}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8">
                        {mockPost.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                        <div className="flex items-center gap-2">
                            {mockPost.author.avatar && (
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={mockPost.author.avatar}
                                        alt={mockPost.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <span className="font-medium text-foreground">{mockPost.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{mockPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{mockPost.readTime}</span>
                        </div>
                    </div>

                    {/* Social Share */}
                    <SocialShare
                        url={postUrl}
                        title={mockPost.title}
                        description={mockPost.excerpt}
                    />
                </header>

                {/* Featured Image */}
                {mockPost.featuredImage && (
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 max-w-5xl mx-auto">
                        <Image
                            src={mockPost.featuredImage}
                            alt={mockPost.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Article Content with TOC */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                        {/* Main Content */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: mockPost.content }} />

                            {/* Tags */}
                            {mockPost.tags && mockPost.tags.length > 0 && (
                                <div className="not-prose mt-12 pt-8 border-t border-border">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Tag size={20} className="text-muted-foreground" />
                                        {mockPost.tags.map((tag) => (
                                            <Badge key={tag} variant="default">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Table of Contents */}
                        <aside>
                            <TableOfContents items={tocItems} />
                        </aside>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="max-w-4xl mx-auto mt-16">
                    <AuthorBio author={mockPost.author} />
                </div>

                {/* Related Posts */}
                <div className="max-w-7xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPosts.map((post, index) => (
                            <PostCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
