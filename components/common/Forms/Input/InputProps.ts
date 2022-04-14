import { RegisterOptions } from "react-hook-form";
import * as HeroIcons from "@heroicons/react/solid";
export type InputProps = {
  type: "text" | "number" | "email" | "password" | "search" | "tel";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
  value?: any;
  icon?: boolean;
  iconName?: keyof typeof HeroIcons;
  iconKind?: "solid" | "outline";
};

export default InputProps;
