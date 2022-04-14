import { FC } from "react";

type BlankAvatar = {
  size: "small" | "base" | "large" | "xlarge";
  username: Username;
};

enum textBlank {
  small = "text-xs",
  base = "",
  large = "text-xl",
  xlarge = "text-3xl",
}

enum sizeBlank {
  small = "w-8",
  base = "w-12",
  large = "w-16",
  xlarge = "w-24",
}

const BlankAvatar: FC<BlankAvatar> = ({ size, username }) => {
  const cnSize = `${sizeBlank[size]} bg-neutral-focus text-neutral-content rounded-full`;
  const cnText = `${textBlank[size]} uppercase`;
  return (
    <div className="avatar placeholder">
      <div className={cnSize}>
        <span className={cnText}>{username.charAt(0)}</span>
      </div>
    </div>
  );
};

export default BlankAvatar;
