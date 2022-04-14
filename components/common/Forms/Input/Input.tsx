/**
 * ?Input Component
 */

import Icon from "components/common/Icons/Icon";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import InputProps from "./InputProps";
// import * as cn from "./InputStyles";

/**
 * Description of Input component displayed in Storybook
 */

const Input: FC<InputProps> = ({
  type,
  label,
  name,
  options,
  icon = false,
  iconName = "AcademicCapIcon",
  iconKind = "solid",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {!icon ? (
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
      ) : (
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
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Icon
                icon={iconName}
                kind={iconKind}
                className="w-5 h-5 text-gray-500"
              />
            </div>
            <input
              type={type}
              className={
                !errors[name]
                  ? "pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  : "pl-10 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              }
              {...register(name, { ...options })}
              {...rest}
            />
          </div>
          {errors[name] && (
            <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
          )}
        </div>
      )}
    </>
  );
};

export default Input;
