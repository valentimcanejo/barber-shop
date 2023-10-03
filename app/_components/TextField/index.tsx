import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  value: string;
  onChange: any;
}

export const TextField = ({
  value = "",
  onChange = () => {},
  fullWidth = false,
  ...rest
}: TextFieldProps) => {
  return (
    <input
      {...rest}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      className={`${
        fullWidth ? "w-full" : ""
      } shadow appearance-none border rounded p-5 text-gray-700`}
    />
  );
};
