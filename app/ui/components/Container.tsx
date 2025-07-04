import { cn } from '@/app/lib/utils';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

interface ContainerProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('max-w-[1440px]px-3 mx-auto flex w-full md:px-20', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container };
