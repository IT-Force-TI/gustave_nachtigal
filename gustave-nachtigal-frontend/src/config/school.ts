// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'gustave-nachtigal-kpalime',
  logo: '/logo-gustave-nachtigal.png',
  settings: {
    name: 'GUSTAVE NACHTIGAL',
    shortName: 'GUSTAVE NACHTIGAL',
    slogan: 'L’EXCELLENCE DEPUIS 1962',
    address: 'Quartier Lomnava — Kpalimé, Togo',
    email: 'contact@gustave-nachtigal.tg',
    phone: '+228 90 12 21 41',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 85000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un établissement historique de Kpalimé, ouvert depuis 1962, qui accompagne chaque élève avec exigence et bienveillance vers la réussite.',
  hero: {
    eyebrow: 'SAVOIR - DISCIPLINE - RÉUSSITE',
    titleLines: ['Complexe', 'Scolaire'],
    highlight: 'GUSTAVE NACHTIGAL',
    intro:
      'Bienvenue sur le site officiel du complexe scolaire GUSTAVE NACHTIGAL, au quartier Lomnava à Kpalimé : un établissement historique, dédié depuis 1962 à l’éducation, à l’épanouissement et à la réussite des élèves.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du complexe scolaire GUSTAVE NACHTIGAL',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Une histoire,', 'un avenir à construire.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au complexe scolaire GUSTAVE NACHTIGAL, nous sommes les héritiers d’une longue histoire au service de l’éducation à Kpalimé. Notre ambition est d’offrir à chaque enfant un cadre d’apprentissage stimulant, bienveillant et ouvert sur le monde.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, en lien étroit avec les familles de Lomnava et de toute la ville, pour leur permettre de construire un avenir dont ils seront fiers.',
    ],
    signature: 'AZIAMETI K. U. Jonas — Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Fondé à Kpalimé en 1962, le complexe scolaire GUSTAVE NACHTIGAL est implanté dans le quartier Lomnava, dans la région des Plateaux. Fermé en 1996, il a rouvert ses portes en 2000 avec l’appui de partenaires, notamment l’ambassade d’Allemagne et des associations de soutien comme Togo-Hilfe.',
      'Conscients des attentes des familles dans leur recherche d’un établissement scolaire de qualité, nous avons bâti une école qui allie excellence académique et épanouissement personnel, en offrant un cadre d’apprentissage stimulant, sécurisé et adapté aux besoins de chaque enfant.',
      'Le complexe scolaire GUSTAVE NACHTIGAL accueille les élèves de la maternelle au collège. Fort de plus de soixante ans d’histoire et de ses partenariats, il cultive la rigueur, l’ouverture sur le monde et le sens des responsabilités, afin de former des citoyens engagés.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Nous visons l’excellence dans tous les domaines d’apprentissage.' },
    { icon: 'heart', title: 'Bienveillance', text: 'Un environnement d’apprentissage chaleureux et respectueux.' },
    { icon: 'idea', title: 'Ouverture sur le monde', text: 'Une école riche de son histoire et de ses partenariats.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Kpalimé.' },
  ],
  faq: [
    {
      q: 'Quelle est l’histoire de l’établissement ?',
      a: 'Fondé en 1962, le complexe scolaire GUSTAVE NACHTIGAL a fermé en 1996, puis rouvert en 2000 avec l’appui de partenaires, notamment l’ambassade d’Allemagne et l’association Togo-Hilfe.',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Kpalimé desservis.',
    },
    {
      q: 'Les frais de scolarité au complexe scolaire GUSTAVE NACHTIGAL s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle constitue la première étape du parcours scolaire. Elle favorise l’éveil, la socialisation, l’autonomie et les premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et expression corporelle',
        'Développement du langage',
        'Découverte des nombres et des formes',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Musique et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Découvrir, expérimenter et apprendre en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux et développe la curiosité. Chaque élève progresse dans un cadre structuré et bienveillant.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Ouverture aux sciences et au monde',
        'Maîtrise du français et initiation à l’anglais',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et mathématiques au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'users',
          title: 'Sport et coopération',
          text: 'Apprendre le respect, l’esprit d’équipe et l’autonomie.',
        },
      ],
    },
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (sauf pour enfant entrant en Maternelle 1)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)
