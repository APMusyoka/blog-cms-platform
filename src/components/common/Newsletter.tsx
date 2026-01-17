'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement newsletter subscription
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section className="bg-linear-to-br from-primary-800 to-primary-900 text-white py-16 md:py-20 rounded-2xl">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                    <Mail size={32} />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Subscribe to Our Newsletter
                </h2>

                <p className="text-primary-100 text-lg mb-8">
                    Get the latest posts and updates delivered straight to your inbox.
                    No spam, unsubscribe at any time.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                    />

                    <Button
                        type="submit"
                        variant="secondary"
                        className="whitespace-nowrap"
                        disabled={subscribed}
                    >
                        {subscribed ? (
                            <>
                                <Check size={20} />
                                Subscribed!
                            </>
                        ) : (
                            'Subscribe'
                        )}
                    </Button>
                </form>

                <p className="text-primary-100 text-sm mt-4">
                    Join 10,000+ subscribers who get our weekly newsletter
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
