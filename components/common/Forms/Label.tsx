import { FC } from "react";
import { FieldErrors } from "react-hook-form";

type Props = {
  errors: FieldErrors<Record<string, any>>;
  name: string;
  label: string;
};

const Label: FC<Props> = ({ name, label, errors }) => {
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

export default Label;