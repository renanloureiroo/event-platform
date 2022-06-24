import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export const ButtonLink = ({
  children,
  variant = "primary",
  ...rest
}: ButtonLinkProps) => {
  if (variant === "primary") {
    return (
      <a
        {...rest}
        className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 transition-colors hover:bg-green-700"
      >
        {children}
      </a>
    );
  }
  return (
    <a
      {...rest}
      className="p-4 text-blue-500 text-sm flex items-center justify-center rounded font-bold uppercase gap-2 border border-blue-500 transition-colors hover:bg-blue-500 hover:text-gray-900"
    >
      {children}
    </a>
  );
};
