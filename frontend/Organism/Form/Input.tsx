import React from "react";
interface Input {
  type: string;
  placeholder: string;
  onChange?(e): void;
  className?: string;
  disabled?: boolean;
  value?: string;
}
export default function Input(props: Input) {
  const { disabled, className, type, placeholder, onChange, value } = props;
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        disabled={disabled}
        value={value}
      />
    </div>
  );
}
