import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import * as cn from "./IconStyles";

type IconProps = {
  icon: keyof typeof SolidIcons | keyof typeof OutlineIcons;
  kind: "solid" | "outline";
  size?: keyof typeof cn.size;
  classIcon?: string;
};

export default IconProps;
