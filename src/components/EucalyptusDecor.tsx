import eucalyptus1 from "@/assets/eucalyptus-1.avif";
import eucalyptus2 from "@/assets/eucalyptus-2.avif";
import eucalyptus3 from "@/assets/eucalyptus-3.avif";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
type Size = "sm" | "md" | "lg";

interface EucalyptusDecorProps {
  position?: Position;
  variant?: 1 | 2 | 3;
  size?: Size;
  className?: string;
  flip?: boolean;
  rotate?: number;
}

const images = {
  1: eucalyptus1,
  2: eucalyptus2,
  3: eucalyptus3,
};

const sizeClasses: Record<Size, string> = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-24 h-24 md:w-32 md:h-32",
  lg: "w-32 h-32 md:w-48 md:h-48",
};

const positionClasses: Record<Position, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export const EucalyptusDecor = ({
  position = "top-left",
  variant = 1,
  size = "md",
  className = "",
  flip = false,
  rotate = 0,
}: EucalyptusDecorProps) => {
  return (
    <img
      src={images[variant]}
      alt=""
      aria-hidden="true"
      className={`absolute object-contain pointer-events-none opacity-70 ${positionClasses[position]} ${sizeClasses[size]} ${className}`}
      style={{
        transform: `${flip ? "scaleX(-1)" : ""} rotate(${rotate}deg)`,
      }}
    />
  );
};

export const EucalyptusDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      <img
        src={eucalyptus2}
        alt=""
        aria-hidden="true"
        className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-60 -rotate-45"
      />
      <div className="w-16 md:w-24 h-px bg-border" />
      <img
        src={eucalyptus2}
        alt=""
        aria-hidden="true"
        className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-60 rotate-45 scale-x-[-1]"
      />
    </div>
  );
};
