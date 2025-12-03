import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div className='rounded-lg border bg-card p-4 shadow-sm'>
            {children}
        </div>
    )
}