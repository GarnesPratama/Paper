import React from "react";
interface Input {
  type: string;
  placeholder: string;
  onChange?(e): void;
  className?: string;
  disabled?: boolean;
}
export default function Input(props: Input) {
  const { disabled, className, type, placeholder, onChange } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
