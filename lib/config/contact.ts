/**
 * MUSASCO Concepts — Canonical Contact Information
 * Single source of truth for all contact details across the site.
 * DO NOT hard-code these values in components; import from here.
 */

export const CONTACT = {
  phone: {
    display: "+234 905 693 5204",
    tel: "tel:+2349056935204",
  },
  email: {
    display: "musasco4wealth@gmail.com",
    mailto: "mailto:musasco4wealth@gmail.com",
  },
  whatsapp: {
    href: "https://wa.me/2349056935204",
    label: "Chat on WhatsApp",
  },
  social: {
    instagram: "https://instagram.com/musascoconcepts",
    linkedin: "https://linkedin.com/company/musascoconcepts",
  },
  office: {
    city: "Lagos, Nigeria",
    region: "Nigeria, UK, Europe",
  },
} as const;