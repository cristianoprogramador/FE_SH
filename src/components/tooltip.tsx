import { useState, useRef } from "react";
import { twJoin } from "tailwind-merge";

interface ToolTipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
}

const BASE_CLASSES = `absolute bottom-0 bg-purple-800 border border-purple-500 rounded-md p-2 z-10 text-white mb-10 opacity-0 transition-opacity duration-200 ease-in-out text-center min-w-max`;

const HOVER_CLASSES = `opacity-100`;

export function ToolTip(props: ToolTipProps) {
  const { content, children, className } = props;

  const contentRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);

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

  const centerValue =
    -(
      (contentRef?.current?.offsetWidth ?? 0) -
      (childrenRef?.current?.offsetWidth ?? 0)
    ) / 2;

  return (
    <div className="relative">
      <div
        ref={childrenRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      <div
        ref={contentRef}
        className={tooltipWithExternalClasses}
        style={{
          left: centerValue,
        }}
      >
        {content}
      </div>
    </div>
  );
}
