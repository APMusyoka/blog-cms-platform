import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', children, ...props }, ref) => {
        const variants = {
            default: 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200',
            primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200',
            success: 'bg-success-50 text-success-600 dark:bg-success-900 dark:text-success-200',
            warning: 'bg-warning-50 text-warning-600 dark:bg-warning-900 dark:text-warning-200',
            error: 'bg-error-50 text-error-600 dark:bg-error-900 dark:text-error-200',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export default Badge;
