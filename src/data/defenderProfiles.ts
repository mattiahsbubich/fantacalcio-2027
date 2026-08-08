import {
  getPlayerProfileKey,
  type PlayerProfile,
  type PlayerProfiles
} from '../types/playerProfile';

const defenderProfiles: PlayerProfile[] = [
  // =========================
  // DIMARCO
  // =========================

  {
    role: 'D',
    playerName: 'DIMARCO',
    tier: 'Dimarco',
    tierOrder: 1,
    percentage: 15,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },

  // =========================
  // 1° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'WESLEY',
    tier: '1° Slot Relativo',
    tierOrder: 1,
    percentage: 7.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'AKANJI',
    tier: '1° Slot Relativo',
    tierOrder: 2,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BREMER',
    tier: '1° Slot Relativo',
    tierOrder: 3,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MANCINI',
    tier: '1° Slot Relativo',
    tierOrder: 4,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BASTONI',
    tier: '1° Slot Relativo',
    tierOrder: 5,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PAVLOVIC',
    tier: '1° Slot Relativo',
    tierOrder: 6,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'RRAHMANI',
    tier: '1° Slot Relativo',
    tierOrder: 7,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'OSTIGARD',
    tier: '1° Slot Relativo',
    tierOrder: 8,
    percentage: 5,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'SPINAZZOLA',
    tier: '1° Slot Relativo',
    tierOrder: 9,
    percentage: 5,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 2° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'KEMPF',
    tier: '2° Slot Relativo',
    tierOrder: 1,
    percentage: 4.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'JIMENEZ',
    tier: '2° Slot Relativo',
    tierOrder: 2,
    percentage: 4.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KALULU',
    tier: '2° Slot Relativo',
    tierOrder: 3,
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'SOLET',
    tier: '2° Slot Relativo',
    tierOrder: 4,
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BISSECK',
    tier: '2° Slot Relativo',
    tierOrder: 5,
    percentage: 4,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'RAMON',
    tier: '2° Slot Relativo',
    tierOrder: 6,
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'NDICKA',
    tier: '2° Slot Relativo',
    tierOrder: 7,
    percentage: 3.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KOULIERAKIS',
    tier: '2° Slot Relativo',
    tierOrder: 8,
    percentage: 3.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'HERMOSO',
    tier: '2° Slot Relativo',
    tierOrder: 9,
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ZAPPACOSTA',
    tier: '2° Slot Relativo',
    tierOrder: 10,
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 3° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'DI LORENZO',
    tier: '3° Slot Relativo',
    tierOrder: 1,
    percentage: 2.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'STONES',
    tier: '3° Slot Relativo',
    tierOrder: 2,
    percentage: 2.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KELLY',
    tier: '3° Slot Relativo',
    tierOrder: 3,
    percentage: 2.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VASQUEZ',
    tier: '3° Slot Relativo',
    tierOrder: 4,
    percentage: 2.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VOJVODA',
    tier: '3° Slot Relativo',
    tierOrder: 5,
    percentage: 2.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KRISTENSEN',
    tier: '3° Slot Relativo',
    tierOrder: 6,
    percentage: 2.3,
    starterRating: 4,
    reliabilityRating: 2,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'SCALVINI',
    tier: '3° Slot Relativo',
    tierOrder: 7,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'DELPRATO',
    tier: '3° Slot Relativo',
    tierOrder: 8,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MIRANDA',
    tier: '3° Slot Relativo',
    tierOrder: 9,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VALERI',
    tier: '3° Slot Relativo',
    tierOrder: 10,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 4° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'GILA',
    tier: '4° Slot Relativo',
    tierOrder: 1,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'DODO',
    tier: '4° Slot Relativo',
    tierOrder: 2,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CAMBIASO',
    tier: '4° Slot Relativo',
    tierOrder: 3,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CELIK',
    tier: '4° Slot Relativo',
    tierOrder: 4,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'DRAGUSIN',
    tier: '4° Slot Relativo',
    tierOrder: 5,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'GABRIEL',
    tier: '4° Slot Relativo',
    tierOrder: 6,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PROVSTGAARD',
    tier: '4° Slot Relativo',
    tierOrder: 7,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BARTESAGHI',
    tier: '4° Slot Relativo',
    tierOrder: 8,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'DOEKHI',
    tier: '4° Slot Relativo',
    tierOrder: 9,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KAIKI',
    tier: '4° Slot Relativo',
    tierOrder: 10,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 5° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'MINA',
    tier: '5° Slot Relativo',
    tierOrder: 1,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CARLOS AUGUSTO',
    tier: '5° Slot Relativo',
    tierOrder: 2,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ROMAGNOLI',
    tier: '5° Slot Relativo',
    tierOrder: 3,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BERNASCONI',
    tier: '5° Slot Relativo',
    tierOrder: 4,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'HEGGEM',
    tier: '5° Slot Relativo',
    tierOrder: 5,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MARCANDALLI',
    tier: '5° Slot Relativo',
    tierOrder: 6,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PEDRAZA',
    tier: '5° Slot Relativo',
    tierOrder: 7,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'RENSCH',
    tier: '5° Slot Relativo',
    tierOrder: 8,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'NORTON-CUFFY',
    tier: '5° Slot Relativo',
    tierOrder: 9,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'GALLO',
    tier: '5° Slot Relativo',
    tierOrder: 10,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 6° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'LUCUMI',
    tier: '6° Slot Relativo',
    tierOrder: 1,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'IDZES',
    tier: '6° Slot Relativo',
    tierOrder: 2,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'AHANOR',
    tier: '6° Slot Relativo',
    tierOrder: 3,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VALDEPEÑAS',
    tier: '6° Slot Relativo',
    tierOrder: 4,
    percentage: 1,
    starterRating: 2,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ZORTEA',
    tier: '6° Slot Relativo',
    tierOrder: 5,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'OLIVERA',
    tier: '6° Slot Relativo',
    tierOrder: 6,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BIRINDELLI',
    tier: '6° Slot Relativo',
    tierOrder: 7,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KABASELE',
    tier: '6° Slot Relativo',
    tierOrder: 8,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'HAINAUT',
    tier: '6° Slot Relativo',
    tierOrder: 9,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'COMERT',
    tier: '6° Slot Relativo',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 7° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'HIEN',
    tier: '7° Slot Relativo',
    tierOrder: 1,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'COCO',
    tier: '7° Slot Relativo',
    tierOrder: 2,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BELLANOVA',
    tier: '7° Slot Relativo',
    tierOrder: 3,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'COMUZZO',
    tier: '7° Slot Relativo',
    tierOrder: 4,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KOLASINAC',
    tier: '7° Slot Relativo',
    tierOrder: 5,
    percentage: 1,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'GABBIA',
    tier: '7° Slot Relativo',
    tierOrder: 6,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'OBERT',
    tier: '7° Slot Relativo',
    tierOrder: 7,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'HAPS',
    tier: '7° Slot Relativo',
    tierOrder: 8,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ZANOLI',
    tier: '7° Slot Relativo',
    tierOrder: 9,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'TROILO',
    tier: '7° Slot Relativo',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 2,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 8° SLOT RELATIVO
  // =========================

  {
    role: 'D',
    playerName: 'ISMAJLI',
    tier: '8° Slot Relativo',
    tierOrder: 1,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MONTERISI',
    tier: '8° Slot Relativo',
    tierOrder: 2,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BELLA-KOTCHAP',
    tier: '8° Slot Relativo',
    tierOrder: 3,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MANGAS',
    tier: '8° Slot Relativo',
    tierOrder: 4,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VIERY',
    tier: '8° Slot Relativo',
    tierOrder: 5,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'GHILARDI',
    tier: '8° Slot Relativo',
    tierOrder: 6,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'RODRIGUEZ',
    tier: '8° Slot Relativo',
    tierOrder: 7,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 2,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'SCHINGTIENNE',
    tier: '8° Slot Relativo',
    tierOrder: 8,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PUCZKA',
    tier: '8° Slot Relativo',
    tierOrder: 9,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CUENCA',
    tier: '8° Slot Relativo',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MLACIC',
    tier: '8° Slot Relativo',
    tierOrder: 11,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ZÉ PEDRO',
    tier: '8° Slot Relativo',
    tierOrder: 12,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 2,
    integrityRating: 3,
    notes: ''
  },

  // =========================
  // ALTRI
  // =========================

  {
    role: 'D',
    playerName: 'KOUADIO',
    tier: 'Altri',
    tierOrder: 1,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'GUTIERREZ',
    tier: 'Altri',
    tierOrder: 2,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BUONGIORNO',
    tier: 'Altri',
    tierOrder: 3,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'DJIMSITI',
    tier: 'Altri',
    tierOrder: 4,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'TOMORI',
    tier: 'Altri',
    tierOrder: 5,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BEUKEMA',
    tier: 'Altri',
    tierOrder: 6,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CIRCATI',
    tier: 'Altri',
    tierOrder: 7,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KAMARA',
    tier: 'Altri',
    tierOrder: 8,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MARUSIC',
    tier: 'Altri',
    tierOrder: 9,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PAVARD',
    tier: 'Altri',
    tierOrder: 10,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'NUNO TAVARES',
    tier: 'Altri',
    tierOrder: 11,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VALLE',
    tier: 'Altri',
    tierOrder: 12,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BRACAGLIA',
    tier: 'Altri',
    tierOrder: 13,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

    // =========================
  // ALTRI - CONTINUAZIONE
  // =========================

  {
    role: 'D',
    playerName: 'HOLM',
    tier: 'Altri',
    tierOrder: 14,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'KOFLER',
    tier: 'Altri',
    tierOrder: 15,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MARTIN',
    tier: 'Altri',
    tierOrder: 16,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'MORENO',
    tier: 'Altri',
    tierOrder: 17,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'OYONO',
    team: 'FRO',
    tier: 'Altri',
    tierOrder: 18,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PARISI',
    tier: 'Altri',
    tierOrder: 19,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'PEDERSEN',
    tier: 'Altri',
    tierOrder: 20,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VEIGA',
    tier: 'Altri',
    tierOrder: 21,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'VITIK',
    tier: 'Altri',
    tierOrder: 22,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'ARIZALA',
    tier: 'Altri',
    tierOrder: 23,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'BERTOLA',
    tier: 'Altri',
    tierOrder: 24,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'D',
    playerName: 'CALVANI',
    tier: 'Altri',
    tierOrder: 25,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

];

export const defaultDefenderProfiles: PlayerProfiles =
  Object.fromEntries(
    defenderProfiles.map((profile) => [
      getPlayerProfileKey(
        profile.role,
        profile.playerName,
        profile.team
      ),
      profile
    ])
  );