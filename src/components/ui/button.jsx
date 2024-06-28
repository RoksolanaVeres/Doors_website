import { cn } from "@/lib/utils";

export function Button({ children, size, className, variant, ...props }) {
  const buttonSize = {
    normal: `h-10 px-4 py-2`,
    small: `h-9 px-3 py-1`,
  };

  const buttonVariant = {
    outline: `border border-input bg-background hover:bg-accent hover:text-accent-foreground`,
    normal: `bg-primary text-primary-foreground hover:bg-primary/90`,
  };

  return (
    <button
      {...props}
      className={cn(
        `inline-flex items-center justify-center rounded-md text-sm ${buttonSize[size]} ${buttonVariant[variant]}`,
        className,
      )}
    >
      {children}
    </button>
  );
}
