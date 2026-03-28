import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  target?: string;
  children: React.ReactNode;
}

const ButtonLink1: React.FC<ButtonLinkProps> = ({ to, target, children }) => {
  return (
    <Link
      to={to}
      target={target}
      className="border-2 border-[#FF7A00] text-white hover:text-black bg-[#FF7A00] px-10 md:px-12 py-3 md:py-3 rounded-md text-base md:text-lg lg:text-xl font-medium text-center"
    >
      {children}
    </Link>
  );
};

export default ButtonLink1;
