/**
 * ?Avatar Component
 */

import { FC } from "react";

import Image from "next/image";
import * as cn from "./AvatarStyles";
import AvatarProps, { SizeProps } from "./AvatarProps";

/**
 * Show image for user or products
 */

const Blank = ({ size }: { size: SizeProps }) => {
  const cnBlock = `${cn.size[size]} relative overflow-hidden bg-gray-100 rounded-full`;
  const cnSvg = `${cn.sizeBlank[size]} absolute text-gray-400 -left-1`;
  return (
    <div className={cnBlock}>
      <svg
        className={cnSvg}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

const Full = ({ size, imgUrl }: { size: SizeProps; imgUrl: string }) => {
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

const Avatar: FC<AvatarProps> = ({ imgUrl, size }) => {
  return (
    <>
      {imgUrl && <Full size={size} imgUrl={imgUrl} />}
      {!imgUrl && <Blank size={size} />}
    </>
  );
};

export default Avatar;
