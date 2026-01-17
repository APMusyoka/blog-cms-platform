import React from 'react';
import Image from 'next/image';
import { Target, Users, Rocket, Heart, BookOpen, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Newsletter from '@/components/common/Newsletter';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        bio: 'Passionate about empowering writers and creators with the best tools.',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Design',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        bio: 'Creating beautiful, intuitive experiences that writers love.',
    },
    {
        name: 'Mike Johnson',
        role: 'Lead Developer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        bio: 'Building fast, scalable platforms with cutting-edge technology.',
    },
    {
        name: 'Sarah Williams',
        role: 'Content Strategist',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        bio: 'Helping writers craft compelling stories and grow their audience.',
    },
];

const values = [
    {
        icon: Target,
        title: 'Writer-First',
        description: 'Every feature we build starts with asking: "Does this help writers create better content?"',
    },
    {
        icon: Rocket,
        title: 'Innovation',
        description: 'We continuously push the boundaries of what\'s possible in content publishing.',
    },
    {
        icon: Users,
        title: 'Community',
        description: 'Building a supportive community where writers can connect, learn, and grow together.',
    },
    {
        icon: Heart,
        title: 'Passion',
        description: 'We love what we do, and it shows in every detail of our platform.',
    },
];

const stats = [
    { label: 'Active Writers', value: '10,000+' },
    { label: 'Published Posts', value: '50,000+' },
    { label: 'Monthly Readers', value: '1M+' },
    { label: 'Countries', value: '120+' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-2xl mb-6">
                        <BookOpen size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Empowering Writers to Share Their Stories
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        BlogCMS was born from a simple idea: writing and publishing should be effortless,
                        allowing creators to focus on what they do best—telling amazing stories.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mission Section */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    We believe that everyone has a story worth sharing. Our mission is to provide
                                    writers with the best tools to create, publish, and grow their audience.
                                </p>
                                <p>
                                    Whether you're a solo blogger, a content team, or a large publication, BlogCMS
                                    adapts to your needs. We handle the technical complexity so you can focus on
                                    crafting compelling content.
                                </p>
                                <p>
                                    Since our founding, we've helped thousands of writers reach millions of readers
                                    across the globe. But we're just getting started.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button size="lg">
                                    Start Your Journey
                                    <Zap size={20} />
                                </Button>
                            </div>
                        </div>

                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            These principles guide everything we do, from product development to customer support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card key={index} className="text-center">
                                    <CardContent className="pt-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-2xl mb-4">
                                            <Icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A passionate group of designers, developers, and writers working to make publishing effortless.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden ring-4 ring-background shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-sm text-primary mb-3">{member.role}</p>
                                <p className="text-sm text-muted-foreground">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Story Section */}
                <div className="mb-24 bg-muted rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            BlogCMS started in 2020 when our founder, frustrated with existing blogging platforms,
                            decided to build something better. What began as a side project quickly grew into a
                            platform serving thousands of writers worldwide.
                        </p>
                        <p>
                            We've always believed that great writing deserves great tools. That's why we obsess
                            over every detail—from the writing experience to the reading experience, from
                            performance to design.
                        </p>
                        <p>
                            Today, BlogCMS powers blogs for solo creators, startups, and major publications.
                            But our mission remains the same: empowering writers to share their stories with the world.
                        </p>
                    </div>
                </div>

                {/* Newsletter CTA */}
                <Newsletter />
            </div>
        </div>
    );
}
