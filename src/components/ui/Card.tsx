import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden", className)} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6 pb-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props}>
            {children}
        </h3>
    );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-6 pt-0", className)} {...props}>
            {children}
        </div>
    );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex items-center p-6 pt-0", className)} {...props}>
            {children}
        </div>
    );
}
