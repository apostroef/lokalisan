import React, { useState } from 'react';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
    skeletonClassName?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
    src,
    alt,
    className,
    containerClassName,
    skeletonClassName,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {!isLoaded && <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />}
            <img
                src={src}
                alt={alt}
                className={cn(
                    className,
                    "transition-opacity duration-500",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                {...props}
            />
        </div>
    );
};
