import { useState } from "react";
import { twJoin } from "tailwind-merge";

interface ToolTipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}

const BASE_CLASSES = `absolute bottom-0 bg-purple-800 border border-purple-500 rounded-md p-2 z-10 text-white mb-10 opacity-0 transition-opacity duration-200 ease-in-out text-center w-44 break-words`;

const HOVER_CLASSES = `opacity-100`;

const BASE_STYLES = {
  right: -40,
  marginRight: 3,
};

export function ToolTip(props: ToolTipProps) {
  const { content, children, className } = props;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const hoveredClassesApplied = hovered === true ? HOVER_CLASSES : "";

  const tooltipClasses = twJoin(BASE_CLASSES, hoveredClassesApplied);

  const tooltipWithExternalClasses = twJoin(tooltipClasses, className);

  return (
    <div className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      <div className={tooltipWithExternalClasses} style={BASE_STYLES}>
        {content}
      </div>
    </div>
  );
}
