import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = 'text', ...props }, ref) => {
        return (
            <input
                type={type}
                ref={ref}
                className={cn(
                    'flex h-12 w-full rounded-lg border-2 border-input-border bg-background px-4 py-3 text-base transition-all',
                    'placeholder:text-muted-foreground',
                    'focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input';

export default Input;
