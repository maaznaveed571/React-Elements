import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface StatusLabelProps {
  /**
   * The status text to display
   */
  children: React.ReactNode;

  /**
   * The variant of the status label
   */
  variant?:
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "secondary"
    | "outline";

  /**
   * The size of the status label
   */
  size?: "sm" | "md" | "lg";

  /**
   * Optional icon to display before the text
   */
  icon?: LucideIcon;

  /**
   * Whether to show a dot indicator
   */
  dot?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: () => void;
}

const StatusLabel: React.FC<StatusLabelProps> = ({
  children,
  variant = "default",
  size = "md",
  icon: Icon,
  dot = false,
  className,
  onClick,
}) => {
  // Variant styles
  const variants = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    danger: "bg-red-100 text-red-800 border-red-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
    secondary: "bg-purple-100 text-purple-800 border-purple-200",
    outline: "bg-transparent text-gray-700 border-gray-300",
  };

  // Size styles
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-2.5 py-1.5 text-sm",
    lg: "px-3 py-2 text-base",
  };

  // Dot colors based on variant
  const dotColors = {
    default: "bg-gray-400",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
    secondary: "bg-purple-500",
    outline: "bg-gray-400",
  };

  // Icon sizes based on component size
  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border transition-colors",
        variants[variant],
        sizes[size],
        onClick && "cursor-pointer hover:opacity-80",
        className,
      )}
      onClick={onClick}
    >
      {/* Dot indicator */}
      {dot && (
        <span className={cn("w-2 h-2 rounded-full mr-2", dotColors[variant])} />
      )}

      {/* Icon */}
      {Icon && <Icon size={iconSizes[size]} className="mr-1.5" />}

      {/* Text content */}
      {children}
    </span>
  );
};

export default StatusLabel;

// Pre-built status components for common use cases
export const StatusSuccess: React.FC<Omit<StatusLabelProps, "variant">> = (
  props,
) => <StatusLabel variant="success" {...props} />;

export const StatusWarning: React.FC<Omit<StatusLabelProps, "variant">> = (
  props,
) => <StatusLabel variant="warning" {...props} />;

export const StatusDanger: React.FC<Omit<StatusLabelProps, "variant">> = (
  props,
) => <StatusLabel variant="danger" {...props} />;

export const StatusInfo: React.FC<Omit<StatusLabelProps, "variant">> = (
  props,
) => <StatusLabel variant="info" {...props} />;

// Common status presets
export const OnlineStatus: React.FC<
  Omit<StatusLabelProps, "variant" | "dot" | "children">
> = (props) => (
  <StatusLabel variant="success" dot {...props}>
    Online
  </StatusLabel>
);

export const OfflineStatus: React.FC<
  Omit<StatusLabelProps, "variant" | "dot" | "children">
> = (props) => (
  <StatusLabel variant="danger" dot {...props}>
    Offline
  </StatusLabel>
);

export const PendingStatus: React.FC<
  Omit<StatusLabelProps, "variant" | "dot" | "children">
> = (props) => (
  <StatusLabel variant="warning" dot {...props}>
    Pending
  </StatusLabel>
);

export const CompletedStatus: React.FC<
  Omit<StatusLabelProps, "variant" | "dot" | "children">
> = (props) => (
  <StatusLabel variant="success" dot {...props}>
    Completed
  </StatusLabel>
);
