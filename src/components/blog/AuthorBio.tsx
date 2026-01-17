import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface AuthorBioProps {
    author: {
        name: string;
        avatar?: string;
        bio?: string;
        role?: string;
        social?: {
            twitter?: string;
            linkedin?: string;
            github?: string;
            email?: string;
        };
    };
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
    const socialLinks = [
        { name: 'Twitter', icon: Twitter, url: author.social?.twitter },
        { name: 'LinkedIn', icon: Linkedin, url: author.social?.linkedin },
        { name: 'GitHub', icon: Github, url: author.social?.github },
        { name: 'Email', icon: Mail, url: author.social?.email ? `mailto:${author.social.email}` : undefined },
    ].filter((link) => link.url);

    return (
        <div className="bg-muted rounded-xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                {author.avatar && (
                    <div className="shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-background">
                            <Image
                                src={author.avatar}
                                alt={author.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                )}

                {/* Bio */}
                <div className="flex-1">
                    <div className="mb-3">
                        <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                        {author.role && (
                            <p className="text-sm text-muted-foreground">{author.role}</p>
                        )}
                    </div>

                    {author.bio && (
                        <p className="text-muted-foreground mb-4">{author.bio}</p>
                    )}

                    {/* Social Links */}
                    {socialLinks.length > 0 && (
                        <div className="flex items-center gap-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                                        aria-label={link.name}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
