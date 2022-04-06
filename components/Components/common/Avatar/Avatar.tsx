/**
 * ?Avatar Component
 */

import { FC } from "react";

import Image from "next/image";
import * as cn from "./AvatarStyles";
import AvatarProps from "./AvatarProps";

/**
 * Show image for user or products
 */

const Avatar: FC<AvatarProps> = ({ imgUrl, size }) => {
  return (
    <div className={`${cn.size[size]} relative`}>
      <Image
        src={imgUrl}
        alt=""
        layout="fill"
        objectFit="contain"
        className={cn.bAv}
      />
    </div>
  );
};

export default Avatar;
