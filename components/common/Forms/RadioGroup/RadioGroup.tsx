/**
 * ?Radio Component
 */

import { FC } from "react";
// import * as cn from "./RadioStyles";
import { useFormContext } from "react-hook-form";
import RadioPropsGroup from "./RadioGroupProps";

/**
 * Description of Radio component displayed in Storybook
 */

const RadioGroup: FC<RadioPropsGroup> = ({
  label,
  name,
  data,
  options,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <fieldset id={name} className="mb-3">
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
      {data.map(({ value, lab }, index) => (
        <div className="flex items-center mb-4" key={index}>
          <input
            type="radio"
            value={value}
            className={
              !errors[name]
                ? "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                : "w-4 h-4 border-red-300 focus:ring-2 focus:ring-red-300"
            }
            {...register(name, { ...options })}
            {...rest}
          />
          <label
            htmlFor={value}
            className={
              !errors[name]
                ? "ml-2 text-sm font-medium text-gray-900"
                : "ml-2 text-sm font-medium text-red-700"
            }
          >
            {lab}
          </label>
        </div>
      ))}
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600">{errors[name].message}</p>
      )}
    </fieldset>
  );
};

export default RadioGroup;
