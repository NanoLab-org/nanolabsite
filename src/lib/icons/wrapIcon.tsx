import React from "react";

type IconProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function wrapIcon(svg: React.ReactElement): React.FC<IconProps> {
  const Icon: React.FC<IconProps> = ({ width = 26, height = 18, className }) =>
    React.cloneElement(svg as React.ReactElement<React.SVGProps<SVGSVGElement>>, { width, height, className });
  return Icon;
}
