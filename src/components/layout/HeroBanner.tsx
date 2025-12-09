interface HeroBannerProps {
  imageSrc?: string;
  alt?: string;
}

export const HeroBanner = ({ imageSrc, alt = "Pascale & Etienne" }: HeroBannerProps) => {
  return (
    <div className="w-full">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover object-top"
        />
      ) : (
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-accent/30 flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Espace pour l'image hero du couple</p>
        </div>
      )}
    </div>
  );
};
