import Image from "next/image";
import { clientLogos } from "@/data/clientLogos";

export function LogoCarousel() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="group w-full overflow-hidden">
  <div className="flex w-max animate-marquee gap-16 items-center group-hover:[animation-play-state:paused]">
        {logos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex items-center justify-center w-32 h-16"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="max-h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}