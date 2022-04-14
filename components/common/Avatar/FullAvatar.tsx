import Image from "next/image";
import { FC } from "react";

type FullAvatar = {
  size: "small" | "base" | "large" | "xlarge";
  imgUrl: string;
};

enum sizeFull {
  small = "w-8",
  base = "w-16",
  large = "w-20",
  xlarge = "w-32",
}

const FullAvatar: FC<FullAvatar> = ({ size, imgUrl }) => {
  const cnSize = `${sizeFull[size]} rounded-full`;
  return (
    <div className="avatar">
      <div className={cnSize}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default FullAvatar;
