import Image from "next/image";

export const Logo = () => (
  <a href="#hero" aria-label="ML">
    <Image
      src="/logo.svg"
      alt="ML"
      width={32}
      height={32}
      className="transition-opacity duration-200 hover:opacity-80"
    />
  </a>
);
