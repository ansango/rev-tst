import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import { FC } from "react";
import IconProps from "./IconProps";
import * as cn from "./IconStyles";
const Icon: FC<IconProps> = ({ icon, size = "base", classIcon, kind }) => {
  const cnSize = cn.size[size];
  const styles = classIcon ?? cnSize;
  const RIcon = kind === "solid" ? SolidIcons[icon] : OutlineIcons[icon];
  return <RIcon className={styles} />;
};

export default Icon;
