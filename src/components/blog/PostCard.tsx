import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export interface PostCardProps {
    title: string;
    excerpt: string;
    slug: string;
    featuredImage?: string;
    category?: string;
    date: string;
    readTime?: string;
    author?: {
        name: string;
        avatar?: string;
    };
}

const PostCard: React.FC<PostCardProps> = ({
    title,
    excerpt,
    slug,
    featuredImage,
    category,
    date,
    readTime,
    author,
}) => {
    return (
        <Link href={`/blog/${slug}`}>
            <Card hover className="h-full group cursor-pointer overflow-hidden">
                {/* Featured Image */}
                {featuredImage && (
                    <div className="relative w-full h-48 overflow-hidden rounded-t-xl mb-0">
                        <Image
                            src={featuredImage}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {category && (
                            <div className="absolute top-4 left-4">
                                <Badge variant="primary">{category}</Badge>
                            </div>
                        )}
                    </div>
                )}

                <CardContent className="pt-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{date}</span>
                        </div>
                        {readTime && (
                            <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{readTime}</span>
                            </div>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                    {/* Author */}
                    {author && (
                        <div className="flex items-center gap-2">
                            {author.avatar && (
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                        src={author.avatar}
                                        alt={author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <span className="text-sm font-medium">{author.name}</span>
                        </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Read more</span>
                        <ArrowRight size={16} />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default PostCard;
