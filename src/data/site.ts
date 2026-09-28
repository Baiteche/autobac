export type Service = {
  id: string;
  label: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  tone: 'acid' | 'soft' | 'outline';
};

export type Review = {
  name: string;
  city: string;
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
  url: '[URL DU SITE]',
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
    title: 'Pneus d’occasion à Perpignan | Neufs, montage & équilibrage | AutoBac66',
    description:
      'Vous cherchez des pneus d’occasion à Perpignan ? AutoBac66 propose pneus neufs et occasion, montage, équilibrage et devis au 44 boulevard Frédéric Mistral.',
    keywords: [
      'pneus pas chers Perpignan',
      'pneus d’occasion Perpignan',
      'pneus neufs Perpignan',
      'montage pneus Perpignan',
      'pneus occasion 66',
      'garage pneus Perpignan'
    ],
    ogImage: '/og-autobac66.svg'
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
    accent: '#d5ff3f',
    dark: '#101214',
    paper: '#f4f1e8'
  },
  coverage: ['Perpignan', 'Cabestany', 'Saint-Estève', 'Rivesaltes', 'Bompas', 'Pyrénées-Orientales'],
  services: [
    {
      id: 'occasion',
      label: '01 / Occasion',
      title: 'Pneus d’occasion',
      short: 'Le bon pneu, au juste prix.',
      description: 'Une solution économique pour retrouver de l’adhérence sans perdre de vue votre budget.',
      bullets: ['Prix attractifs', 'Pneus contrôlés', 'Recherche par dimension', 'Parallélisme 50 € dès 2 pneus'],
      tone: 'acid'
    },
    {
      id: 'neufs',
      label: '02 / Neuf',
      title: 'Pneus neufs',
      short: 'Choisir sereinement, selon votre usage.',
      description: 'Des gammes et marques à identifier avec vous selon la dimension recherchée et le budget.',
      bullets: ['Différentes gammes', 'Marques selon disponibilité', 'Conseil dimension & budget'],
      tone: 'soft'
    },
    {
      id: 'montage',
      label: '03 / Atelier',
      title: 'Montage & équilibrage',
      short: 'Un service essentiel, réalisé sur place.',
      description: 'Le montage et l’équilibrage accompagnent votre achat pour repartir avec un véhicule prêt à rouler.',
      bullets: ['Montage de pneus', 'Équilibrage', 'Avec ou sans rendez-vous'],
      tone: 'outline'
    },
    {
      id: 'crevaison',
      label: '04 / Dépannage',
      title: 'Réparation de crevaison',
      short: 'Faire le point avant de remplacer.',
      description: 'Une crevaison ? Faites contrôler le pneu afin d’identifier la solution adaptée à votre situation.',
      bullets: ['Contrôle du pneu', 'Solution selon l’état', 'Contact direct'],
      tone: 'soft'
    },
    {
      id: 'mecanique',
      label: '05 / Garage',
      title: 'Mécanique légère',
      short: 'Une activité à préciser avec l’équipe.',
      description: 'Selon le véhicule et le besoin, l’atelier vous indique directement ce qui peut être réalisé sur place.',
      bullets: ['Selon le véhicule', 'Renseignements par téléphone', 'Sur place au garage'],
      tone: 'outline'
    }
  ] satisfies Service[],
  benefits: [
    { number: '01', title: 'Une recherche claire', text: 'On part de votre dimension, de votre usage et de votre budget.' },
    { number: '02', title: 'Du choix, sans jargon', text: 'Neuf ou occasion : l’offre est présentée simplement pour décider sereinement.' },
    { number: '03', title: 'Un contact direct', text: 'Une adresse physique à Perpignan et un parcours court pour demander un prix.' },
    { number: '04', title: 'Le 66 en point de repère', text: 'AutoBac66 accompagne les automobilistes de Perpignan et des alentours.' }
  ],
  // AVIS PROVISOIRES (génériques, sans date ni source inventée).
  // À remplacer par les avis réels des clients (Google, réseaux sociaux) dès réception.
  // Ne pas ajouter de données structurées AggregateRating/Review avant d'avoir de vrais avis.
  reviews: [
    {
      name: 'Julien',
      city: 'Perpignan',
      rating: 5,
      text: 'La différence entre un pneu neuf et un pneu d’occasion m’a été expliquée simplement, avant que je choisisse. Devis clair, montage effectué sur place : je repars serein.'
    },
    {
      name: 'Sandrine',
      city: 'Cabestany',
      rating: 5,
      text: 'Passée sans rendez-vous, on s’est occupé de ma roue rapidement et le prix annoncé a été respecté. Accueil sympa, on explique sans jargon.'
    },
    {
      name: 'Karim',
      city: 'Saint-Estève',
      rating: 4,
      text: 'Bon rapport qualité/prix sur des pneus d’occasion. L’atelier était bien occupé quand je suis passé, mais le travail est soigné et les dimensions vérifiées avant.'
    }
  ] satisfies Review[],
  faq: [
    {
      question: 'Où trouver des pneus pas chers à Perpignan ?',
      answer: 'AutoBac66 est situé au 44 boulevard Frédéric Mistral à Perpignan. Vous pouvez demander une proposition en indiquant votre dimension et votre préférence entre pneus neufs et d’occasion.'
    },
    {
      question: 'Peut-on acheter des pneus d’occasion à Perpignan ?',
      answer: 'Oui, les pneus d’occasion font partie de l’offre présentée par AutoBac66. La disponibilité dépend de la dimension recherchée : utilisez le module de demande ou contactez directement le garage.'
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
  areaServed: site.coverage.map((area) => ({ '@type': 'Place', name: area }))
};

export default site;
