/**
 * ?Checkbox Component
 */

import { FC } from "react";
// import * as cn from "./CheckboxStyles";
import { RegisterOptions, useFormContext } from "react-hook-form";
import CheckboxProps from "./CheckboxProps";

enum inputSize {
  xs = "checkbox-xs",
  sm = "checkbox-sm",
  md = "checkbox-md",
  lg = "checkbox-lg",
}

enum inputKind {
  default = "",
  primary = "input-primary",
  secondary = "input-secondary",
  accent = "input-accent",
}

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "accent";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
};

const Checkbox: FC<Props> = ({
  label,
  name,
  options,
  kind = "default",
  size = "md",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-control w-full">
      {label ? (
        <label
          htmlFor={name}
          className={
            !errors[name]
              ? "label cursor-pointer"
              : "label cursor-pointer text-red-700"
          }
        >
          <span
            className={!errors[name] ? "label-text" : "label-text text-red-700"}
          >
            {label}
          </span>
          <input
            type="checkbox"
            className={
              !errors[name]
                ? `checkbox ${inputSize[size]} ${inputKind[kind]}`
                : `checkbox ${inputSize[size]} input-error`
            }
            {...register(name, { ...options })}
            {...rest}
          />
        </label>
      ) : (
        <input
          type="checkbox"
          className={
            !errors[name]
              ? `checkbox ${inputSize[size]} ${inputKind[kind]}`
              : `checkbox ${inputSize[size]} input-error`
          }
          {...register(name, { ...options })}
          {...rest}
        />
      )}
    </div>
  );
};

export default Checkbox;
