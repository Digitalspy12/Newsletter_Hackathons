import React from "react";
import { Card, CardContent, CardProps } from "./card";
import { cn } from "@/lib/utils";

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
  variant?: "default" | "code" | "output";
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ title, className, contentClassName, children, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "terminal-window relative overflow-hidden rounded-lg border border-gray-800",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="terminal-header">
          <span className="terminal-circle red"></span>
          <span className="terminal-circle yellow"></span>
          <span className="terminal-circle green"></span>
          {title && <span className="ml-2 text-green-400 text-sm font-mono">{title}</span>}
        </div>
        <div
          className={cn(
            "p-4 bg-[#0a0e14] text-green-400 font-mono",
            variant === "code" && "text-xs",
            variant === "output" && "text-sm bg-[#080c12]",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

Terminal.displayName = "Terminal";

export { Terminal };