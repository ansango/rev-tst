/**
 * ?TextArea Component
 */

import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { TextAreaProps } from ".";
// import * as cn from "./TextAreaStyles";

/**
 * Description of TextArea component displayed in Storybook
 */

const TextArea: FC<TextAreaProps> = ({
  label,
  name,
  options,
  rows,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-3">
      {label && (
        <label
          htmlFor={name}
          className={
            !errors[name]
              ? "block mb-2 text-sm font-medium text-gray-900"
              : "block mb-2 text-sm font-medium text-red-700"
          }
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        rows={rows}
        className={
          !errors[name]
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
        }
        {...register(name, { ...options })}
        {...rest}
      />
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextArea;
