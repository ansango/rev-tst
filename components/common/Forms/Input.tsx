import { FC } from "react";
import {
  FieldErrors,
  useFormContext,
  type RegisterOptions,
} from "react-hook-form";
import * as HeroIcons from "@heroicons/react/solid";
import { Icon } from "../Icons";

type LProps = {
  errors: FieldErrors<Record<string, any>>;
  name: string;
  label: string;
};

const Label: FC<LProps> = ({ name, label, errors }) => {
  return (
    <label htmlFor={name} className="label-text">
      <span
        className={!errors[name] ? "label-text" : "label-text text-red-700"}
      >
        {label}
      </span>
    </label>
  );
};

type EProps = {
  errors: FieldErrors<Record<string, any>>;
  name: string;
};

const Error: FC<EProps> = ({ errors, name }) => {
  return (
    <>
      {errors[name] && (
        <p className="mt-1 label-text text-red-700">{errors[name].message}</p>
      )}
    </>
  );
};

type InputProps = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "info" | "accent" | "warning";
  type: "text" | "number" | "email" | "password" | "search" | "tel";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
};

type Props = {
  icon?: {
    name: keyof typeof HeroIcons;
    kind: "solid" | "outline";
  };
} & InputProps;

enum inputSize {
  xs = "input-xs",
  sm = "input-sm",
  md = "input-md",
  lg = "input-lg",
}

enum inputKind {
  default = "",
  primary = "input-primary",
  secondary = "input-secondary",
  accent = "input-accent",
  info = "input-info",
  warning = "input-warning",
  error = "input-error",
}

const Input: FC<Props> = ({
  icon,
  name,
  label,
  type,
  options,
  size = "md",
  kind = "default",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full max-w-xs">
      {!icon ? (
        <>
          {label && <Label name={name} label={label} errors={errors} />}
          <input
            type={type}
            className={
              !errors[name]
                ? `input w-full max-w-xs input-bordered ${inputSize[size]} ${inputKind[kind]}`
                : `input w-full max-w-xs input-bordered ${inputSize[size]} input-error`
            }
            {...register(name, { ...options })}
            {...rest}
          />
          <Error errors={errors} name={name} {...rest} />
        </>
      ) : (
        <>
          {label && <Label name={name} label={label} errors={errors} />}
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Icon
                icon={icon.name}
                kind={icon.kind}
                className="w-5 h-5 text-gray-500"
              />
            </div>
            <input
              type={type}
              className={
                !errors[name]
                  ? `pl-10 input w-full max-w-xs input-bordered ${inputSize[size]} ${inputKind[kind]}`
                  : `pl-10 input w-full max-w-xs input-bordered ${inputSize[size]} input-error`
              }
              {...register(name, { ...options })}
              {...rest}
            />
          </div>
          <Error errors={errors} name={name} {...rest} />
        </>
      )}
    </div>
  );
};

export default Input;
