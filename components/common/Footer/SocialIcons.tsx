import IconSimple from "../Icons/IconSimple";

const SocialIcons = () => {
  return (
    <div className="flex space-x-6 text-gray-900">
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Facebook" classIcon="w-5 h-5" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Twitter" classIcon="w-5 h-5" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Instagram" classIcon="w-5 h-5" />
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noreferrer">
        <IconSimple icon="Youtube" classIcon="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
