export const contactHero = {
  eyebrow: "CONTACT US",
  headline: "Let's Start the Conversation.",
  subheadline:
    "Whether you're ready to book a consultation or just have a question about the Growth System™, we're here to help.",
  trustMicrocopy: "We typically respond within 24 hours during business days.",
};

export const contactOptions = {
  headline: "Other Ways to Reach Us",
  options: [
    {
      id: "email",
      label: "Email",
      value: "musasco4wealth@gmail.com",
      description: "For project enquiries, partnerships, and collaborations.",
      href: "mailto:musasco4wealth@gmail.com",
      icon: "mail" as const,
    },
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: "+234 905 693 5204",
      description: "Call us directly or chat on WhatsApp.",
      href: "tel:+2349056935204",
      whatsappHref: "https://wa.me/2349056935204",
      icon: "phone" as const,
    },
    {
      id: "location",
      label: "Office",
      value: "Lagos, Nigeria",
      description: "Serving businesses locally and internationally.",
      href: null,
      icon: "map-pin" as const,
    },
  ],
};

export const contactForm = {
  headline: "Send Us a Message",
  subheadline: "Fill out the form below and a growth strategist will get back to you shortly.",
  fields: {
    firstName: { label: "First Name", placeholder: "Jane", required: true },
    lastName: { label: "Last Name", placeholder: "Doe", required: true },
    email: { label: "Email", placeholder: "jane@company.com", required: true },
    phone: { label: "Phone", placeholder: "+234...", required: false },
    company: { label: "Company", placeholder: "Company Name", required: false },
    website: { label: "Website (Optional)", placeholder: "https://...", required: false },
    businessType: {
      label: "Business Type",
      placeholder: "Select an industry",
      options: [
        "SMEs",
        "Professional Services",
        "Home Services",
        "Healthcare",
        "Real Estate",
        "Local Businesses",
        "Other",
      ],
      required: true,
    },
    message: { label: "How can we help?", placeholder: "Tell us about your growth goals...", required: true },
  },
  consentLabel: "I agree to be contacted by MUSASCO Concepts regarding my inquiry.",
  submitLabel: "Send Message",
};

export const scheduling = {
  headline: "Prefer to Book Directly?",
  subheadline: "Skip the form and schedule a 30-minute Growth Consultation at a time that works for you.",
  placeholderText: "Loading scheduling widget...",
  ctaLabel: "Book Your Free Consultation",
};

export const contactFaq = {
  headline: "Common Questions",
  items: [
    {
      question: "What happens after I submit the form?",
      answer: "A member of our growth team will review your inquiry and reach out within 24 hours to schedule a brief discovery call or answer your questions directly.",
    },
    {
      question: "Is the Growth Consultation really free?",
      answer: "Yes. The initial consultation is completely free and carries no obligation. It's designed to see if our Growth System™ is a good fit for your business.",
    },
    {
      question: "Do you work with businesses outside Nigeria?",
      answer: "Yes. While we are based in Lagos, we serve clients across Nigeria, the UK, and Europe remotely.",
    },
    {
      question: "What is the Growth Blueprint?",
      answer: "The Growth Blueprint is a paid, one-time roadmap that identifies exactly which engine (Attract, Convert, or Scale) needs fixing first in your business.",
    },
  ],
};