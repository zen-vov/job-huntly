import React from "react";
import cn from "classnames";

export const Input = React.forwardRef(
  ({ className, placeholder, value, onChange, ...rest }, ref) => {
    return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        className={cn(className)}
        {...rest}
      />
    );
  }
);
Input.displayName = "Input";
