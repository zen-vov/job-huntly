import React from "react";
import cn from "classnames";

export const Input = React.forwardRef(
  ({ className, placeholder, value, ...rest }, ref) => {
    return (
      <input
        placeholder={placeholder}
        value={value}
        ref={ref}
        className={cn(className)}
        {...rest}
      />
    );
  }
);
Input.displayName = "Input";
