/**
 * ?Date Component
 */

import { FC } from "react";
// import * as cn from "./DateStyles";
import { useFormContext } from "react-hook-form";
import DateProps from "./DateProps";

/**
 * Description of Date component displayed in Storybook
 */

const Date: FC<DateProps> = ({ type, label, name, options, ...rest }) => {
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
      <input
        type={type}
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

export default Date;
