import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

export const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm " +
    "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium " +
    "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-input",
        ghost: "border-transparent bg-transparent",
        error: "border-destructive focus-visible:ring-destructive",
      },
      inputSize: {
        default: "h-10",
        sm: "h-8 text-xs w-50",
        md:"h-10",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className,variant, inputSize, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, inputSize }),className)}
      {...props}
    />
  )
);

Input.displayName = "Input";
