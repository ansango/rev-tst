import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <button className="btn btn-ghost btn-circle">
        <svg
          className="w-5 h-5 fill-primary"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 2.5C7.8203 2.5 2 8.3203 2 15.5V24.5C2 26.7091 3.79086 28.5 6 28.5H15C22.1797 28.5 28 22.6797 28 15.5V6.5C28 4.29086 26.2091 2.5 24 2.5H15ZM0 15.5C0 7.21573 6.71573 0.5 15 0.5H24C27.3137 0.5 30 3.18629 30 6.5V15.5C30 23.7843 23.2843 30.5 15 30.5H6C2.68629 30.5 0 27.8137 0 24.5V15.5ZM15 6.56452C10.0651 6.56452 6.06452 10.5651 6.06452 15.5V20.4355C6.06452 22.6446 7.85538 24.4355 10.0645 24.4355H15C19.9349 24.4355 23.9355 20.4349 23.9355 15.5V10.5645C23.9355 8.35538 22.1446 6.56452 19.9355 6.56452H15ZM4.06452 15.5C4.06452 9.4605 8.9605 4.56452 15 4.56452H19.9355C23.2492 4.56452 25.9355 7.25081 25.9355 10.5645V15.5C25.9355 21.5395 21.0395 26.4355 15 26.4355H10.0645C6.75081 26.4355 4.06452 23.7492 4.06452 20.4355V15.5ZM15 10.629C12.3098 10.629 10.129 12.8098 10.129 15.5V16.371C10.129 18.5801 11.9199 20.371 14.129 20.371H15C17.6902 20.371 19.871 18.1902 19.871 15.5V14.629C19.871 12.4199 18.0801 10.629 15.871 10.629H15ZM8.12903 15.5C8.12903 11.7053 11.2053 8.62903 15 8.62903H15.871C19.1847 8.62903 21.871 11.3153 21.871 14.629V15.5C21.871 19.2947 18.7947 22.371 15 22.371H14.129C10.8153 22.371 8.12903 19.6847 8.12903 16.371V15.5ZM12.1935 15.5C12.1935 13.95 13.45 12.6935 15 12.6935C16.55 12.6935 17.8064 13.95 17.8064 15.5C17.8064 17.05 16.55 18.3064 15 18.3064C13.45 18.3064 12.1935 17.05 12.1935 15.5ZM15 14.6935C14.5546 14.6935 14.1935 15.0546 14.1935 15.5C14.1935 15.9454 14.5546 16.3065 15 16.3065C15.4454 16.3065 15.8065 15.9454 15.8065 15.5C15.8065 15.0546 15.4454 14.6935 15 14.6935Z"
          />
        </svg>
      </button>
    </Link>
  );
};

export default Logo;