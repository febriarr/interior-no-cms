import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "group/button",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-xl",
    "border",
    "border-transparent",
    "bg-clip-padding",
    "text-sm",
    "font-medium",
    "outline-none",
    "select-none",
    "transition-all",
    "duration-200",
    "ease-out",
    "focus-visible:border-ring",
    "focus-visible:ring-4",
    "focus-visible:ring-ring/20",
    "active:scale-[0.98]",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "aria-invalid:border-destructive",
    "aria-invalid:ring-4",
    "aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive/50",
    "dark:aria-invalid:ring-destructive/40",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",

        outline:
          "border-border bg-background shadow-sm hover:bg-muted hover:text-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",

        ghost: "hover:bg-muted hover:text-foreground",

        destructive:
          "text-destructive-foreground bg-destructive hover:bg-destructive/90",

        link: "rounded-none border-none bg-transparent p-0 text-primary underline-offset-4 shadow-none hover:underline",
      },

      size: {
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs",

        sm: "h-9 gap-1.5 rounded-lg px-4",

        default: "h-10 gap-2 px-5",

        lg: "h-11 gap-2 px-6",

        xl: "h-12 gap-2.5 rounded-2xl px-8 text-base",

        icon: "size-10 p-0",

        "icon-sm": "size-9 rounded-lg",

        "icon-lg": "size-11 rounded-2xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
