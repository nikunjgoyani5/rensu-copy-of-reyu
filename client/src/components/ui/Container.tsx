import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div
      className={`max-w-[1640px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
