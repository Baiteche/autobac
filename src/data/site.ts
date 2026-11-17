export type Service = {
  id: string;
  label: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  tone: 'acid' | 'soft' | 'outline';
  showQuote?: boolean;
};

export type Review = {
  name: string;
  /** Date relative telle qu'affichée par Google (« il y a 3 semaines »). */
  date: string;
  rating: number;
  text: string;
};

export type GalleryPhoto = {
  id: string;
  caption: string;
  alt: string;
  sourceUrl: string;
};

const site = {
  name: 'AUTOBAC66',
  displayName: 'AutoBac66',
  city: 'Perpignan',
  department: 'Pyrénées-Orientales / 66',
  // L'URL publique du site est définie dans astro.config.mjs (SITE_URL) :
  // https://pneus-occasion-perpignan.fr
  address: {
    street: '44 boulevard Frédéric Mistral',
    postalCode: '66000',
    city: 'Perpignan',
    country: 'France',
    full: '44 boulevard Frédéric Mistral, 66000 Perpignan, France',
    short: '44 bd Frédéric Mistral · 66000 Perpignan',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=44%20boulevard%20Fr%C3%A9d%C3%A9ric%20Mistral%2C%2066000%20Perpignan%2C%20France'
  },
  contact: {
    phoneDisplay: '06 16 17 03 26',
    phoneHref: 'tel:+33616170326',
    phoneE164: '+33616170326',
    // Pas de WhatsApp pour le moment : le contact direct passe par le téléphone ou le formulaire.
    hours: 'Lun–Sam · 9h–13h / 14h–19h',
    hoursLong: 'du lundi au samedi, de 9h à 13h et de 14h à 19h',
    walkIn: 'Avec ou sans rendez-vous'
  },
  promotion: {
    label: 'OFFRE DU MOMENT',
    title: '2 pneus achetés chez nous',
    detail: 'Le parallélisme passe à',
    price: '50 €',
    oldPrice: '80 €',
    conditions: 'Offre valable selon la disponibilité des pneus, en neuf et/ou en occasion.'
  },
  leadCapture: {
    endpoint: 'https://formspree.io/f/mqpagwbn'
  },
  seo: {
    title: 'Garage Pneus Perpignan | Neufs, Occasion & Montage – AutoBac66',
    description:
      'Besoin de pneus à Perpignan ? AutoBac66 propose des pneus neufs et d’occasion, le montage, l’équilibrage et la réparation de crevaison. Demandez votre tarif !',
    keywords: [
      'pneus pas chers Perpignan',
      'pneus d’occasion Perpignan',
      'pneus neufs Perpignan',
      'montage pneus Perpignan',
      'pneus occasion 66',
      'garage pneus Perpignan'
    ],
    // Image de partage social au format PNG (1200x630) : les réseaux (Facebook,
    // WhatsApp, LinkedIn, X) n'affichent pas les SVG. Générée depuis public/og-autobac66.svg
    // avec sharp (sharp(svg).resize(1200, 630).png()) — remplacer le PNG en cas de refonte.
    ogImage: '/og-autobac66.png'
  },
  images: {
    hero: {
      alt: 'Mécanicien en combinaison bleue dévissant une roue à la clé à choc dans l’atelier',
      credit: 'Pexels / Artem Podrez',
      sourceUrl: 'https://www.pexels.com/photo/mechanic-removing-a-tire-8985603/'
    }
  },
  // Photos d’illustration (Pexels) en attendant les clichés réels de l’atelier.
  // Pour remplacer une photo : déposez le fichier dans src/assets/images/ avec le même identifiant.
  gallery: {
    note: 'Photos d’illustration de l’atelier — les clichés du garage AutoBac66 seront ajoutés prochainement.',
    photos: [
      {
        id: 'atelier-pont-lift',
        caption: 'L’atelier, véhicules sur pont',
        alt: 'Atelier automobile lumineux avec plusieurs véhicules sur pont élévateur et des pneus posés au sol',
        sourceUrl: 'https://www.pexels.com/photo/33814734/'
      },
      {
        id: 'atelier-voiture-pont',
        caption: 'Montage sur pont élévateur',
        alt: 'Voiture blanche surélevée sur un pont élévateur dans un atelier pneus équipé',
        sourceUrl: 'https://www.pexels.com/photo/8985604/'
      },
      {
        id: 'atelier-etabli-outils',
        caption: 'L’établi et l’outillage',
        alt: 'Mécanicien en combinaison bleue travaillant à son établi, entouré d’outillage',
        sourceUrl: 'https://www.pexels.com/photo/8985462/'
      },
      {
        id: 'atelier-travaux-mecanique',
        caption: 'Interventions en cours',
        alt: 'Deux mécaniciens au travail autour d’une voiture sur pont dans un atelier animé',
        sourceUrl: 'https://www.pexels.com/photo/4116231/'
      },
      {
        id: 'stock-mur-pneus',
        caption: 'Stock de pneus',
        alt: 'Piles de pneus rangés les uns sur les autres dans l’atelier, en noir et blanc',
        sourceUrl: 'https://www.pexels.com/photo/37002235/'
      },
      {
        id: 'pneu-jante-controle',
        caption: 'Contrôle d’un pneu sur jante',
        alt: 'Pneu monté sur sa jante posé au sol dans l’atelier, un tournevis à proximité',
        sourceUrl: 'https://www.pexels.com/photo/19499388/'
      }
    ] satisfies GalleryPhoto[]
  },
  colors: {
    accent: '#D71920',
    dark: '#090A0C',
    paper: '#F2F2F0'
  },
  coverage: ['Perpignan', 'Cabestany', 'Saint-Estève', 'Rivesaltes', 'Bompas', 'Pyrénées-Orientales'],
  services: [
    {
      id: 'occasion',
      label: '01 / Occasion',
      title: 'Pneus d’occasion à Perpignan',
      short: 'Le bon pneu, au juste prix.',
      description: 'Une solution économique pour retrouver de l’adhérence sans perdre de vue votre budget.',
      bullets: ['Prix attractifs', 'Pneus contrôlés', 'Recherche par dimension', 'Parallélisme 50 € dès 2 pneus'],
      tone: 'acid',
      showQuote: true
    },
    {
      id: 'neufs',
      label: '02 / Neuf',
      title: 'Pneus neufs à Perpignan',
      short: 'Choisir sereinement, selon votre usage.',
      description: 'Des gammes et marques à identifier avec vous selon la dimension recherchée et le budget.',
      bullets: ['Différentes gammes', 'Marques selon disponibilité', 'Conseil dimension & budget'],
      tone: 'soft',
      showQuote: true
    },
    {
      id: 'montage',
      label: '03 / Atelier',
      title: 'Montage et équilibrage à Perpignan',
      short: 'Un service essentiel, réalisé sur place.',
      description: 'Le montage et l’équilibrage accompagnent votre achat pour repartir avec un véhicule prêt à rouler.',
      bullets: ['Montage de pneus', 'Équilibrage', 'Avec ou sans rendez-vous'],
      tone: 'outline',
      showQuote: true
    },
    {
      id: 'crevaison',
      label: '04 / Dépannage',
      title: 'Réparation de crevaison à Perpignan',
      short: 'Faire le point avant de remplacer.',
      description: 'Une crevaison ? Faites contrôler le pneu afin d’identifier la solution adaptée à votre situation.',
      bullets: ['Contrôle du pneu', 'Solution selon l’état', 'Contact direct'],
      tone: 'soft',
      showQuote: false
    },
    {
      id: 'mecanique',
      label: '05 / Garage',
      title: 'Mécanique légère',
      short: 'Une activité à préciser avec l’équipe.',
      description: 'Selon le véhicule et le besoin, l’atelier vous indique directement ce qui peut être réalisé sur place.',
      bullets: ['Selon le véhicule', 'Renseignements par téléphone', 'Sur place au garage'],
      tone: 'outline', showQuote: true
    }
  ] satisfies Service[],
  benefits: [
    { number: '01', title: 'Pneus neufs et d’occasion', text: 'Deux options pour rechercher les pneus qui correspondent à votre besoin.' },
    { number: '02', title: 'Recherche selon votre dimension', text: 'Communiquez les dimensions inscrites sur le flanc de votre pneu.' },
    { number: '03', title: 'Montage directement à l’atelier', text: 'Montage et équilibrage proposés au garage, à Perpignan.' },
    { number: '04', title: 'Contact direct et demande de prix', text: 'Appelez l’équipe ou envoyez votre demande de disponibilité en ligne.' }
  ],
  // Les avis authentiques ne sont pas encore renseignés : aucune carte ni note fictive n’est affichée.
  // Avis Google publiés par les clients de l'atelier (relevés le 17/11/2026).
  // Textes repris tels quels : seule la mention « … Plus » de l'interface Google a été retirée.
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=AutoBac66+44+boulevard+Fr%C3%A9d%C3%A9ric+Mistral+66000+Perpignan',
  reviews: [
    {
      name: 'Billal Baiteche',
      date: 'il y a une semaine',
      rating: 5,
      text: 'Service rapide . Merci !'
    },
    {
      name: 'Broyer Ronan',
      date: 'il y a 3 semaines',
      rating: 5,
      text: 'Franchement au top , service rapide , super accueil, pris en charge direct , nickel'
    },
    {
      name: 'Joachim Carrie Santiago',
      date: 'il y a 4 semaines',
      rating: 5,
      text: 'Franchement nickel au top Nordine très pro on sent l’expérience'
    },
    {
      name: 'Nassim Bagus',
      date: 'il y a 3 mois',
      rating: 5,
      text: 'Garage au top, équipe accueillante et très pro. J’ai été pris en charge rapidement et on m’a expliqué clairement ce qui devait être fait sur la voiture. Travail propre, prix annoncés à l’avance et aucun souci après l’intervention. Je recommande AutoBac66.'
    },
    {
      name: 'Angie Heripret',
      date: 'il y a un mois',
      rating: 5,
      text: 'Service impeccable, rapide et professionnel ! Je recommande ✅'
    },
    {
      name: 'Jeus',
      date: 'il y a 3 semaines',
      rating: 5,
      text: 'Les pros du garage, super boulot ! 🔥'
    },
    {
      name: 'Partha Mondal',
      date: 'il y a 4 semaines',
      rating: 5,
      text: 'Très bon travail'
    }
  ] as Review[],
  faq: [
    {
      question: 'Où acheter des pneus à Perpignan ?',
      answer: 'AutoBac66 est situé au 44 boulevard Frédéric Mistral à Perpignan. Vous pouvez demander une proposition en indiquant votre dimension et votre préférence entre pneus neufs et d’occasion.'
    },
    {
      question: 'Peut-on acheter des pneus d’occasion à Perpignan ?',
      answer: 'Oui, les pneus d’occasion font partie de l’offre présentée par AutoBac66. La disponibilité dépend de la dimension recherchée : utilisez le module de demande ou contactez directement le garage.'
    },
    {
      question: 'Combien coûte le montage de pneus ?',
      answer: 'Le tarif dépend notamment de la dimension et du nombre de pneus. Contactez AutoBac66 avec ces informations pour connaître le prix avant de venir.'
    },
    {
      question: 'Peut-on venir avec ses propres pneus ?',
      answer: 'Appelez l’atelier avant de vous déplacer pour confirmer les conditions de montage de pneus achetés ailleurs et le tarif correspondant.'
    },
    {
      question: 'Comment connaître la dimension de ses pneus ?',
      answer: 'La dimension est inscrite sur le flanc du pneu, par exemple 205/55 R16. Vous pouvez la saisir dans le formulaire de recherche ou la communiquer par téléphone.'
    },
    {
      question: 'Peut-on faire réparer un pneu crevé ?',
      answer: 'L’atelier peut contrôler le pneu. La possibilité d’une réparation dépend de l’emplacement et de l’état du dommage ; appelez-nous pour faire le point.'
    },
    {
      question: 'Faut-il prendre rendez-vous pour monter des pneus ?',
      answer: 'AutoBac66 accueille avec ou sans rendez-vous, du lundi au samedi. Un appel avant votre venue permet de vérifier la disponibilité et l’attente à l’atelier.'
    },
    {
      question: 'Quels types de pneus sont disponibles ?',
      answer: 'AutoBac66 recherche des pneus neufs et d’occasion selon votre dimension. Le choix dépend du stock et se confirme au moment de votre demande.'
    },
    {
      question: 'Les pneus d’occasion sont-ils contrôlés ?',
      answer: 'AutoBac66 propose des pneus d’occasion contrôlés. La disponibilité dépend de la dimension recherchée : indiquez-la via le formulaire ou appelez l’atelier au 06 16 17 03 26.'
    },
    {
      question: 'Faites-vous le montage des pneus achetés sur place ?',
      answer: 'Le montage et l’équilibrage sont proposés par AutoBac66. Demandez un devis en précisant votre dimension et le nombre de pneus concernés.'
    },
    {
      question: 'Peut-on venir sans rendez-vous ?',
      answer: 'Oui : l’atelier vous accueille avec ou sans rendez-vous du lundi au samedi, de 9h à 13h et de 14h à 19h. Un appel au 06 16 17 03 26 avant de vous déplacer permet de vérifier que la dimension recherchée est disponible.'
    },
    {
      question: 'Quels types de pneus neufs proposez-vous ?',
      answer: 'AutoBac66 recherche des pneus neufs selon la dimension et le budget. Les gammes et marques disponibles sont à confirmer au moment de votre demande.'
    },
    {
      question: 'Où se trouve AutoBac66 à Perpignan ?',
      answer: 'Le garage se trouve au 44 boulevard Frédéric Mistral, à Perpignan, dans les Pyrénées-Orientales.'
    },
    {
      question: 'Faites-vous également de la mécanique légère ?',
      answer: 'Les interventions réalisables dépendent du véhicule et du besoin : l’atelier vous répond directement au 06 16 17 03 26.'
    }
  ],
  social: {
    instagram: '[INSTAGRAM À CONFIGURER]',
    facebook: '[FACEBOOK À CONFIGURER]'
  }
} as const;

export const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: site.displayName,
  telephone: site.contact.phoneE164,
  description: 'Vente de pneus neufs et d’occasion, montage, équilibrage et réparation de crevaison à Perpignan.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: 'FR'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '13:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '14:00',
      closes: '19:00'
    }
  ],
  areaServed: site.coverage.map((area) => ({ '@type': 'Place', name: area })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services AutoBac66 à Perpignan',
    itemListElement: site.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description
      }
    }))
  }
};

export default site;
