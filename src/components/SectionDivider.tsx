import eucalyptus1 from "@/assets/eucalyptus-divider-1.png";
import eucalyptus2 from "@/assets/eucalyptus-divider-2.jpg";

interface SectionDividerProps {
  variant?: 1 | 2;
  flip?: boolean;
}

export const SectionDivider = ({ variant = 1, flip = false }: SectionDividerProps) => {
  const image = variant === 1 ? eucalyptus1 : eucalyptus2;
  
  return (
    <div className="flex justify-center py-8 md:py-12">
      <img 
        src={image} 
        alt="" 
        className={`h-24 md:h-32 lg:h-40 w-auto object-contain opacity-70 ${flip ? 'scale-x-[-1]' : ''}`}
      />
    </div>
  );
};
