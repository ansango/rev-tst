export type SizeProps = "xsmall" | "small" | "base" | "large" | "xlarge";

type AvatarProps = {
  /**
   * xsmall | small | medium | large | xlarge
   */
  size: SizeProps;
  /**
   * string
   */
  imgUrl?: string | null;
};

export default AvatarProps;
