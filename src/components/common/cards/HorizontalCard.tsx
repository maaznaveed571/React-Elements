import React from 'react';
import { cn } from '../../../lib/utils';

interface HorizontalCardProps {
  className?: string;
  image?: {
    src: string;
    alt: string;
    className?: string;
  };
  title?: string;
  description?: string;
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
  };
  footer?: React.ReactNode;
  onClick?: () => void;
  children?: React.ReactNode;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  className,
  image,
  title,
  description,
  badge,
  footer,
  onClick,
  children
}) => {
  const badgeVariants = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };

  return (
    <div
      className={cn(
        'flex bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200',
        onClick && 'cursor-pointer hover:bg-gray-50',
        className
      )}
      onClick={onClick}
    >
      {/* Image Section */}
      {image && (
        <div className="flex-shrink-0 w-48 h-32 sm:w-56 sm:h-36">
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              'w-full h-full object-cover',
              image.className
            )}
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex-1">
          {/* Badge */}
          {badge && (
            <span
              className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-2',
                badgeVariants[badge.variant || 'default']
              )}
            >
              {badge.text}
            </span>
          )}

          {/* Title */}
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {title}
            </h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {description}
            </p>
          )}

          {/* Custom Children */}
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalCard;

// Example usage component
export const HorizontalCardExample: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      {/* Basic Card */}
      <HorizontalCard
        image={{
          src: "https://live.staticflickr.com/65535/52887944872_a7aeb48ba1_h.jpg",
          alt: "Beautiful landscape"
        }}
        title="Beautiful Mountain Landscape"
        description="Discover the breathtaking views of mountain ranges with crystal clear lakes and pristine wilderness."
        badge={{ text: "Featured", variant: "success" }}
      />

      
    </div>
  );
};
