/**
 * ?Checkbox Component
 */

import { FC } from "react";
// import * as cn from "./CheckboxStyles";
import { useFormContext } from "react-hook-form";
import CheckboxProps from "./CheckboxProps";

/**
 * Description of Checkbox component displayed in Storybook
 */

const Checkbox: FC<CheckboxProps> = ({ label, name, options, link, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-3">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={
            !errors[name]
              ? "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              : "w-4 h-4 text-red-600 bg-red-100 rounded border-red-300 focus:ring-red-500 focus:ring-2"
          }
          {...register(name, { ...options })}
          {...rest}
        />
        {label && (
          <label
            htmlFor={name}
            className={
              !errors[name]
                ? "ml-3 text-sm font-medium text-gray-900"
                : "ml-3 text-sm font-medium text-red-700"
            }
          >
            {label} {link}
          </label>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
