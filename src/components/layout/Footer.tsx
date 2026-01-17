import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Blog', href: '/blog' },
        ],
        company: [
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Privacy', href: '/privacy' },
        ],
        resources: [
            { name: 'Documentation', href: '/docs' },
            { name: 'Support', href: '/support' },
            { name: 'Newsletter', href: '#newsletter' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'GitHub', href: '#', icon: Github },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Email', href: 'mailto:hello@blogcms.com', icon: Mail },
    ];

    return (
        <footer className="bg-muted border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                            <BookOpen size={28} className="text-primary" />
                            <span>BlogCMS</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-md mb-6">
                            A modern blogging platform with content management system,
                            rich text editing, and multi-author support.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="p-2 rounded-lg hover:bg-background transition-colors text-muted-foreground hover:text-foreground"
                                        aria-label={social.name}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} BlogCMS. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy
                        </Link>
                        <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
