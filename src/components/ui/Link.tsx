import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  className = '',
  children,
  external = false,
  ...props
}) => {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={`cursor-pointer ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};