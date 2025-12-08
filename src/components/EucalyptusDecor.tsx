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

export const EucalyptusDecor = (_props: EucalyptusDecorProps) => null;

export const EucalyptusDivider = (_props: { className?: string }) => null;
