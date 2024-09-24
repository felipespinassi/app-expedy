import { type VariantProps, cva } from "class-variance-authority";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        ghost: "bg-slate-700",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center font-medium", {
  variants: {
    variant: {
      default: "text-white",
      secondary: "text-white",
      destructive: "text-white",
      ghost: "text-white",
      link: "text-white underline",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  labelClasses?: string;
  loading?: boolean;
}
function Button({
  labelClasses,
  className,
  variant,
  size,
  children,
  loading,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size, className: labelClasses })
        )}
      >
        {loading ? <ActivityIndicator /> : children}
      </Text>
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
