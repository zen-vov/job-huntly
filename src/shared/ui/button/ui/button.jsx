import React from "react";
import cn from "classnames";

export const Button = React.forwardRef(
  ({ className, label, labelStyle, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={cn(className)} {...rest}>
        {children}
        <span className={labelStyle}>{label}</span>
      </button>
    );
  }
);
Button.displayName = "Button";
