export type ClientLogo = {
  id: string;
  src: string;
  alt: string;
  href?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    id: "zee",
    src: "/logos/zee-chilled-party.png",
    alt: "Zee Chilled Party Logo",
  },
  {
    id: "muhaifa",
    src: "/logos/muhaifa-ict.png",
    alt: "Muhaifa ICT Consultancy Logo",
  },
  {
    id: "maverick",
    src: "/logos/maverick-steam.png",
    alt: "Maverick STEAM Club Logo",
  },
  {
    id: "sc",
    src: "/logos/sc-monogram.png",
    alt: "SC Logo",
  },
  {
    id: "musasco-farms",
    src: "/logos/musasco-brothers-farms.png",
    alt: "Musasco Brothers' Farms Logo",
  },
];